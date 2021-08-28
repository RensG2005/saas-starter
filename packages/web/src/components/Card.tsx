import React from 'react'
import {  Image,
    Stack,
    Badge,
    Text,
    Box,
    Flex,
    Button,
    Center
} from '@chakra-ui/react'
import NextLink from "next/link"

interface Props {
  isDark: boolean
  img?: string
  icon?: any
  h1: string
  p: string
}

function Card( { isDark, img, h1, p, icon }: Props) {
    return (
        <Box w="300px" rounded="20px" overflow="hidden" bg={ isDark ? "gray.700": "gray.200"} m={10}>
        {!!img && <Image fit="cover" src={img} alt="Card" m={4} boxSize="300px" />}
        {!!icon && (
        <Center w="300px" fontSize="10rem" h="300px">
          {icon}
        </Center>
        )}
        <Box p={6}>
          <Stack align="center">
            <Badge variant="solid" colorScheme="blue" rounded="full" px={2}>
            Memorylia
            </Badge>
          </Stack>
          <Stack align="center">
            <Text as="h2" fontWeight="bold" fontSize="20px" my={2} >
              {h1}
            </Text>
            <Text fontWeight="light" textAlign="center">
              {p}
            </Text>
          </Stack>
          <Flex justifyContent="center" mt={3}>  
            <Button variant="solid" colorScheme="blue" size="sm" mt={3}>
                <NextLink href="/login">
                  Learn More
                </NextLink>
            </Button>
          </Flex>
        </Box>
    </Box>
    )
}

export default Card
