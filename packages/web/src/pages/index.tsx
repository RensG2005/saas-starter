import * as React from "react"
import Head from "next/head"
import NextLink from "next/link"
import Router from 'next/router'
import {
  Link,
  Button,
  IconButton,
  useColorMode,
  Spinner,
  Box,
  Heading,
  Flex,
  Center,
  Grid,
  Text,

} from "@chakra-ui/react"
import { BiMoon, BiSun } from "react-icons/bi"
import { BsLightning } from "react-icons/bs";
import { MdHighQuality, MdMovieFilter } from "react-icons/md";
import FeatureCard from 'components//FeatureCard'

import { useMe } from "lib/hooks/useMe"

import Card from "components/Card"
import FadeInWhenVisible from 'components/FadeInAnimation'
import PricingCards from "components/PricingCards"
import Footer from "components/Footer"

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === "dark"

  const { loading, me } = useMe()
  if (loading) return <Center h={300}><Spinner /></Center>
  if (me) Router.push("/app/dashboard")



  return (
    <>
      {/* header/navbar */}
      <Flex h="80px" justifyContent="space-between" alignItems="center" mx="6">
        <Head>
          <title>Memorylia</title>
        </Head>
        <Heading as="h1">
          <NextLink href="/">
            Memorylia
          </NextLink>
        </Heading>
        <IconButton
          borderRadius="full"
          aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
          variant="ghost"
          onClick={toggleColorMode}
          icon={<Box as={isDark ? BiSun : BiMoon} boxSize="20px" />}
        />
        <Box >
          <NextLink passHref href="/login">
            <Button as={Link} variant="ghost" href="/login" sx={{ textDecor: "none !important" }}>
              Login
            </Button>
          </NextLink>
          <NextLink passHref href="/register">
            <Button colorScheme="blue" as={Link} sx={{ textDecor: "none !important" }} ml="2">
              Register
            </Button>
          </NextLink>
        </Box>
      </Flex>
      {/* header/navbar ends */}


      <FadeInWhenVisible>
        <Center my={[40, 52]} flexDirection="column" w={["90%", "70%", "60%"]} mx="auto">
          <Heading as="h1" fontSize="6xl" textAlign="center">
            Edit your photos and videos Online!
          </Heading>
          <Text fontSize="2xl" m={5} textAlign="center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium iste atque ut. Nostrum Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
          </Text>
          <Flex m={3}>
            <Button size="lg" mr={2} variant="solid" colorScheme="blue"><NextLink href="/login">Get Started</NextLink></Button>
            <Button size="lg" ml={2} variant="outline" colorScheme="blue"><NextLink href="/login">Live Demo</NextLink></Button>
          </Flex>
        </Center>
      </FadeInWhenVisible>

      <Center my={["20", "36", "72"]}>
        <Grid templateColumns={{ sm: "repeat(1, 1fr)", lg: "repeat(2, 1fr)", xl: "repeat(3, 1fr)" }} >
          <FadeInWhenVisible>
            <Card isDark={isDark} h1="Fast" p="Edit fast and reliably!" icon={<BsLightning />} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <Card isDark={isDark} h1="Easy" p="Easy and intuitive to use!" icon={<MdHighQuality />} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <Card isDark={isDark} h1="High Quality" p="4k exports!" icon={<MdMovieFilter />} />
          </FadeInWhenVisible>
        </Grid>
      </Center>

      {/* features section */}
      <Center my={96} w="80%" mx="auto">
        <Flex flexDirection="column" justifyContent="center" textAlign="center">
          <Heading size="2xl" as="h2">All-in-one platform</Heading>
          <Text w="80%" mx="auto" fontSize="xl" my={6}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, nemo explicabo quas totam dolorem laboriosam soluta exercitationem tenetur? Ad, illo ratione blanditiis fugit dolorum porro iure dolorem debitis facere incidunt?</Text>
          <Grid templateColumns={{ sm: "repeat(2, 1fr)", lg: "repeat(3, 1fr)", xl: "repeat(4, 1fr)" }} textAlign="start">
              {Array(8).fill(null).map((idc, i) => <FadeInWhenVisible key={i}><FeatureCard /></FadeInWhenVisible>)}
          </Grid>
        </Flex>
      </Center>


      <FadeInWhenVisible>
        <PricingCards isDark={isDark} />
      </FadeInWhenVisible>

      <Footer isDark={isDark} />
    </>
  )
}
