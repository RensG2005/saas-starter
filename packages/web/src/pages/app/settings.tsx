import { IconButton, useColorMode, Box } from '@chakra-ui/react'
import { BiMoon, BiSun } from "react-icons/bi"
import { DashboardLayout } from "components/DashboardLayout"

export default function Settings() {

  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === "dark"

 return (
     <DashboardLayout>
         <IconButton
             borderRadius="full"
             aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
             variant="ghost"
             onClick={toggleColorMode}
             icon={<Box as={isDark ? BiSun : BiMoon} boxSize="20px" />}
         />

     </DashboardLayout>
 )
}