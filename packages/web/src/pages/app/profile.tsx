import { gql } from "@apollo/client"
import { DashboardLayout } from "components/DashboardLayout"
import { useMe } from "lib/hooks/useMe"
import React from 'react'
import Head from 'next/head'
import Router from 'next/router'
import { useDestroyAccountMutation } from "lib/graphql"
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    Spinner,
    Box,
    Button,
    useDisclosure,
    Center,
    Heading,
    Flex,
    Text
  } from '@chakra-ui/react'
import { useLogout } from "lib/hooks/useLogout"
import { useMutationHandler } from "lib/hooks/useMutationHandler"

export const DESTROY_ACCOUNT = gql`
  mutation DestroyAccount {
    destroyAccount
  }
`

function Profile() {
    const { loading, me } = useMe()
    const logout = useLogout()
    const alertProps = useDisclosure()
    const handler = useMutationHandler()
    const cancelRef = React.useRef<HTMLButtonElement>(null)
    const [destroy, { loading: destroyLoading }] = useDestroyAccountMutation()

    const handleDestroy = () => {
        return handler(destroy, { onSuccess: () => logout() })
    }

    return (
        <>
        <Head>
            <title>Profile | Memorylia</title>
        </Head>
            <DashboardLayout >
                {loading && <Center><Spinner /></Center>}
                <Center minH={{ base: "auto", md: "80vh" }}>
                    <Flex flexDir="column">
                        <Heading as="h2">{me?.fullName}</Heading>
                        <Text>{me?.email}</Text>
                        <Text>{me?.role}</Text>
                        <Box>
                            <Button
                            size="sm"
                            colorScheme="red"
                            isDisabled={destroyLoading}
                            isLoading={destroyLoading}
                            variant="outline"
                            onClick={alertProps.onOpen}
                            ml="2"
                            >
                                Delete account
                            </Button>
                            <Button
                            size="sm"
                            colorScheme="blue"
                            variant="outline"
                            ml="2"
                            onClick={() => Router.replace("/forgot-password")}
                            >
                                Change Password
                            </Button>
                        </Box>
                    </Flex>
                </Center>
            </DashboardLayout>

            <AlertDialog
                {...alertProps}
                motionPreset="slideInBottom"
                isCentered
                leastDestructiveRef={cancelRef}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize="lg" fontWeight="bold">
                            Delete account
                        </AlertDialogHeader>
                        <AlertDialogBody>Are you sure? You can't undo this action afterwards.</AlertDialogBody>
                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={alertProps.onClose}>
                                Cancel
                            </Button>
                            <Button
                                colorScheme="blue"
                                onClick={handleDestroy}
                                isLoading={destroyLoading}
                                isDisabled={destroyLoading}
                                ml={3}
                            >
                                Delete
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
</>
    )
}

export default Profile
