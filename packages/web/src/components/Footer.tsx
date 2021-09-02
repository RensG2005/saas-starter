import React from 'react'
import {
    Stack,
    SimpleGrid,
    Box,
    chakra,
    VisuallyHidden,
    Container,
    Link,
    Text
} from "@chakra-ui/react"
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';


const SocialButton = ({
    children,
    label,
    href,
    isDark
  }: {
    children: React.ReactNode;
    label: string;
    href: string;
    isDark: boolean
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

interface Props {
    isDark: boolean
}

function Footer({isDark}: Props) {
    return (
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
              <SocialButton isDark={isDark} label={'Twitter'} href={'#'}>
                <FaTwitter />
              </SocialButton>
              <SocialButton isDark={isDark} label={'YouTube'} href={'#'}>
                <FaYoutube />
              </SocialButton>
              <SocialButton isDark={isDark} label={'Instagram'} href={'#'}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Container>
        </Box>
      </Box>
    )
}

export default Footer
