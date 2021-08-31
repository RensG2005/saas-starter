import { IconButton, useColorMode } from '@chakra-ui/react'


export default function Settings() {

  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === "dark"

 return (
    <IconButton
        borderRadius="full"
        aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
        variant="ghost"
        onClick={toggleColorMode}
        icon={<Box as={isDark ? BiSun : BiMoon} boxSize="20px" />}
    />
 )
}