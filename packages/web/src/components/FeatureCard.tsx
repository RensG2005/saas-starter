import {
    Flex,
    Icon,
    Box,
    Heading,
    Text
} from '@chakra-ui/react'
import { BsCheck } from "react-icons/bs";

function FeatureCard () {
    return (
        <Flex m={3} position="relative">
            <Icon m={4} as={BsCheck} color="blue" boxSize="24px" />
            <Box>
            <Heading as="h4" fontWeight="normal">Feature</Heading>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, dolorum. Ratione numquam earum</Text>
            </Box>
        </Flex>
    )
}

export default FeatureCard