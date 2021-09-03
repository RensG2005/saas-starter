
import Head from 'next/head'
import React from 'react'

import { withAuth } from "components/hoc/withAuth"
import { DashboardLayout } from "components/dashboardLayout/"
import dynamic from "next/dynamic";
import { Spinner } from "@chakra-ui/spinner";
import { Center } from "@chakra-ui/layout";

function Dashboard(): JSX.Element {
  const MapWithNoSSR = dynamic(() => import("components/map"), {
    loading: () => <Center><Spinner /></Center>,
    ssr: false
  });

  return (
    <>
      <Head>
        <title>Memorylia Dashboard</title>
      </Head>
      <DashboardLayout>
            <MapWithNoSSR />
      </DashboardLayout>
    </>
  )
}



export default withAuth(Dashboard)
