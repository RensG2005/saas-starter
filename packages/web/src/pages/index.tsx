import * as React from "react"
import Head from "next/head"
import { gql } from "@apollo/client"
import { Box } from '@chakra-ui/react'
import { Navbar } from '../components/Navbar'

export const DESTROY_ACCOUNT = gql`
  mutation DestroyAccount {
    destroyAccount
  }
`

export default function Home() { 
  return (
    <Box>
      <Head>
        <title>Fullstack boilerplate</title>
      </Head>
      <Navbar />
    </Box>
  )
}
