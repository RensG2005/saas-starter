
import Head from 'next/head'
import React from 'react'
import {
  Spinner,
  Center,
  Heading,
  Flex
} from '@chakra-ui/react'

import { useMe } from "lib/hooks/useMe"
import { withAuth } from "components/hoc/withAuth"
import { DashboardLayout } from "components/dashboardLayout/"

function Dashboard() {
  const {loading, me} = useMe()
  return (
    <>
    <Head>
      <title>Memorylia Dashboard</title>
    </Head>
      <DashboardLayout>
      {loading && <Center><Spinner /></Center>}
        <Center minH={{ base: "auto", md: "80vh" }}>
          <Flex flexDir="column">
            <Heading>
              Hello {me?.firstName + " " + me?.lastName}
            </Heading>
          </Flex>
        </Center>
        </DashboardLayout>
    </>
  )
}

export default withAuth(Dashboard)
