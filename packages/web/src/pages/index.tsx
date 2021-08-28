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
  Icon,
  Stack,
  Container,
  SimpleGrid,
  HStack,
  VStack,
  List,
  ListItem,
  ListIcon,
  chakra,
  VisuallyHidden
} from "@chakra-ui/react"
import { BiMoon, BiSun } from "react-icons/bi"
import { BsLightning, BsCheck } from "react-icons/bs";
import { MdHighQuality, MdMovieFilter } from "react-icons/md";
import { FaTwitter, FaYoutube, FaInstagram, FaCheckCircle } from 'react-icons/fa';

import { useMe } from "lib/hooks/useMe"

import Card from "components/Card"
import FadeInWhenVisible from 'components/FadeInAnimation'

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === "dark"

  const {loading, me} = useMe()
  if(loading) return <Center h={300}><Spinner /></Center>
  if(me) Router.push("/app/dashboard")

  const SocialButton = ({
    children,
    label,
    href,
  }: {
    children: React.ReactNode;
    label: string;
    href: string;
  }) => {
    return (
      <chakra.button
        bg={!isDark ? 'blackAlpha.100' : 'whiteAlpha.100'}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: !isDark ? 'blackAlpha.200' : 'whiteAlpha.200',
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };

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


      <Center my={96} w="80%" mx="auto">
        <FadeInWhenVisible>
          <Flex flexDirection="column" justifyContent="center" textAlign="center">
            <Heading size="2xl" as="h2">All-in-one platform</Heading>
            <Text w="80%" mx="auto" fontSize="xl" my={6}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, nemo explicabo quas totam dolorem laboriosam soluta exercitationem tenetur? Ad, illo ratione blanditiis fugit dolorum porro iure dolorem debitis facere incidunt?</Text>
            <Grid templateColumns={{ sm: "repeat(2, 1fr)", lg: "repeat(3, 1fr)", xl: "repeat(4, 1fr)" }} textAlign="start">

              <Flex m={3} position="relative">
                <Icon m={4} as={BsCheck} color="blue" boxSize="24px" />
                <Box>
                  <Heading as="h4" fontWeight="normal">Feature</Heading>
                  <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, dolorum. Ratione numquam earum</Text>
                </Box>
              </Flex>
              <Flex m={3} position="relative">
                <Icon m={4} as={BsCheck} color="blue" boxSize="24px" />
                <Box>
                  <Heading as="h4" fontWeight="normal">Feature</Heading>
                  <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, dolorum. Ratione numquam earum</Text>
                </Box>
              </Flex>
              <Flex m={3} position="relative">
                <Icon m={4} as={BsCheck} color="blue" boxSize="24px" />
                <Box>
                  <Heading as="h4" fontWeight="normal">Feature</Heading>
                  <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, dolorum. Ratione numquam earum</Text>
                </Box>
              </Flex>
              <Flex m={3} position="relative">
                <Icon m={4} as={BsCheck} color="blue" boxSize="24px" />
                <Box>
                  <Heading as="h4" fontWeight="normal">Feature</Heading>
                  <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, dolorum. Ratione numquam earum</Text>
                </Box>
              </Flex>
              <Flex m={3} position="relative">
                <Icon m={4} as={BsCheck} color="blue" boxSize="24px" />
                <Box>
                  <Heading as="h4" fontWeight="normal">Feature</Heading>
                  <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, dolorum. Ratione numquam earum</Text>
                </Box>
              </Flex>
              <Flex m={3} position="relative">
                <Icon m={4} as={BsCheck} color="blue" boxSize="24px" />
                <Box>
                  <Heading as="h4" fontWeight="normal">Feature</Heading>
                  <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, dolorum. Ratione numquam earum</Text>
                </Box>
              </Flex>
              <Flex m={3} position="relative">
                <Icon m={4} as={BsCheck} color="blue" boxSize="24px" />
                <Box>
                  <Heading as="h4" fontWeight="normal">Feature</Heading>
                  <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, dolorum. Ratione numquam earum</Text>
                </Box>
              </Flex>
              <Flex m={3} position="relative">
                <Icon m={4} as={BsCheck} color="blue" boxSize="24px" />
                <Box>
                  <Heading as="h4" fontWeight="normal">Feature</Heading>
                  <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, dolorum. Ratione numquam earum</Text>
                </Box>
              </Flex>

            </Grid>
          </Flex>
        </FadeInWhenVisible>
      </Center>


      <FadeInWhenVisible>

        <Box py={20}>
          <VStack spacing={2} textAlign="center">
            <Heading as="h1" fontSize="4xl">
              Plans that fit your need
            </Heading>
            <Text fontSize="lg" color={'gray.500'}>
              Start with 14-day free trial. No credit card needed. Cancel at
              anytime.
            </Text>
          </VStack>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            textAlign="center"
            justify="center"
            spacing={{ base: 4, lg: 10 }}
            py={10}>
            <Box
              mb={4}
              shadow="base"
              borderWidth="1px"
              alignSelf={{ base: 'center', lg: 'flex-start' }}
              borderColor={!isDark ? 'gray.200' : 'gray.500'}
              borderRadius={'xl'}>
              <Box py={4} px={12}>
                <Text fontWeight="500" fontSize="2xl">
                  Hobby
                </Text>
                <HStack justifyContent="center">
                  <Text fontSize="3xl" fontWeight="600">
                    $
                  </Text>
                  <Text fontSize="5xl" fontWeight="900">
                    79
                  </Text>
                  <Text fontSize="3xl" color="gray.500">
                    /month
                  </Text>
                </HStack>
              </Box>
              <VStack
                bg={!isDark ? 'gray.50' : 'gray.700'}
                py={4}
                borderBottomRadius={'xl'}>
                <List spacing={3} textAlign="start" px={12}>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="blue.500" />
                    unlimited build minutes
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="blue.500" />
                    Lorem, ipsum dolor.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="blue.500" />
                    5TB Lorem, ipsum dolor.
                  </ListItem>
                </List>
                <Box w="80%" pt={7}>
                  <Button w="full" colorScheme="blue" variant="outline">
                    Start trial
                  </Button>
                </Box>
              </VStack>
            </Box>

            <Box
              mb={4}
              shadow="base"
              borderWidth="1px"
              alignSelf={{ base: 'center', lg: 'flex-start' }}
              borderColor={!isDark ? 'gray.200' : 'gray.500'}
              borderRadius={'xl'}>
              <Box position="relative">
                <Box
                  position="absolute"
                  top="-16px"
                  left="50%"
                  style={{ transform: 'translate(-50%)' }}>
                  <Text
                    textTransform="uppercase"
                    bg={!isDark ? 'blue.300' : 'blue.700'}
                    px={3}
                    py={1}
                    color={!isDark ? 'gray.900' : 'gray.300'}
                    fontSize="sm"
                    fontWeight="600"
                    rounded="xl">
                    Most Popular
                  </Text>
                </Box>
                <Box py={4} px={12}>
                  <Text fontWeight="500" fontSize="2xl">
                    Growth
                  </Text>
                  <HStack justifyContent="center">
                    <Text fontSize="3xl" fontWeight="600">
                      $
                    </Text>
                    <Text fontSize="5xl" fontWeight="900">
                      149
                    </Text>
                    <Text fontSize="3xl" color="gray.500">
                      /month
                    </Text>
                  </HStack>
                </Box>
                <VStack
                  bg={!isDark ? 'gray.50' : 'gray.700'}
                  py={4}
                  borderBottomRadius={'xl'}>
                  <List spacing={3} textAlign="start" px={12}>
                    <ListItem>
                      <ListIcon as={FaCheckCircle} color="blue.500" />
                      unlimited build minutes
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaCheckCircle} color="blue.500" />
                      Lorem, ipsum dolor.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaCheckCircle} color="blue.500" />
                      5TB Lorem, ipsum dolor.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaCheckCircle} color="blue.500" />
                      5TB Lorem, ipsum dolor.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaCheckCircle} color="blue.500" />
                      5TB Lorem, ipsum dolor.
                    </ListItem>
                  </List>
                  <Box w="80%" pt={7}>
                    <Button w="full" colorScheme="blue">
                      Start trial
                    </Button>
                  </Box>
                </VStack>
              </Box>
            </Box>
            <Box
              mb={4}
              shadow="base"
              borderWidth="1px"
              alignSelf={{ base: 'center', lg: 'flex-start' }}
              borderColor={!isDark ? 'gray.200' : 'gray.500'}
              borderRadius={'xl'}>
              <Box py={4} px={12}>
                <Text fontWeight="500" fontSize="2xl">
                  Scale
                </Text>
                <HStack justifyContent="center">
                  <Text fontSize="3xl" fontWeight="600">
                    $
                  </Text>
                  <Text fontSize="5xl" fontWeight="900">
                    349
                  </Text>
                  <Text fontSize="3xl" color="gray.500">
                    /month
                  </Text>
                </HStack>
              </Box>
              <VStack
                bg={!isDark ? 'gray.50' : 'gray.700'}
                py={4}
                borderBottomRadius={'xl'}>
                <List spacing={3} textAlign="start" px={12}>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="blue.500" />
                    unlimited build minutes
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="blue.500" />
                    Lorem, ipsum dolor.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="blue.500" />
                    5TB Lorem, ipsum dolor.
                  </ListItem>
                </List>
                <Box w="80%" pt={7}>
                  <Button w="full" colorScheme="blue" variant="outline">
                    Start trial
                  </Button>
                </Box>
              </VStack>
            </Box>
          </Stack>
        </Box>
      </FadeInWhenVisible>

      <Box
        bg={!isDark ? 'gray.50' : 'gray.900'}
        color={!isDark ? 'gray.700' : 'gray.200'}
      >
        <Container as={Stack} maxW={'6xl'} py={10}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8}>
            <Stack align={'flex-start'}>
              <Text fontWeight={'500'} fontSize={'lg'} mb={2}>Company</Text>
              <Link href={'#'}>About Us</Link>
              <Link href={'#'}>Blog</Link>
              <Link href={'#'}>Careers</Link>
              <Link href={'#'}>Contact Us</Link>
            </Stack>

            <Stack align={'flex-start'}>
              <Text fontWeight={'500'} fontSize={'lg'} mb={2}>Support</Text>
              <Link href={'#'}>Help Center</Link>
              <Link href={'#'}>Safety Center</Link>
              <Link href={'#'}>Community Guidelines</Link>
            </Stack>

            <Stack align={'flex-start'}>
              <Text fontWeight={'500'} fontSize={'lg'} mb={2}>Legal</Text>
              <Link href={'#'}>Cookies Policy</Link>
              <Link href={'#'}>Privacy Policy</Link>
              <Link href={'#'}>Terms of Service</Link>
              <Link href={'#'}>Law Enforcement</Link>
            </Stack>
          </SimpleGrid>
        </Container>

        <Box
          borderTopWidth={1}
          borderStyle={'solid'}
          borderColor={!isDark ? 'gray.200' : 'gray.700'}>
          <Container
            as={Stack}
            maxW={'6xl'}
            py={4}
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            justify={{ md: 'space-between' }}
            align={{ md: 'center' }}>
            <Text>© 2021 Memorylia. All rights reserved</Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Twitter'} href={'#'}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={'YouTube'} href={'#'}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Container>
        </Box>
      </Box>
    </>
  )
}
