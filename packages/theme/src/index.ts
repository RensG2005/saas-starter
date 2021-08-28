import { extendTheme } from "@chakra-ui/react"
import { Input } from "./components/Input"
import { Select } from "./components/Select"
import { Button } from "./components/Button"
import { Textarea } from "./components/Textarea"
import { createBreakpoints } from "@chakra-ui/theme-tools"

const breakpoints = createBreakpoints({
  sm: "520px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
})

export const theme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: "light",
  },
  fonts: {
    body: "Poppins, sans-serif",
    heading: "Poppins, serif",
  },
  components: {
    Button,
    Input,
    Select,
    Textarea,
  },
  breakpoints
})
