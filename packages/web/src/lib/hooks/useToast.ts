import { useToast as useChakraToast, UseToastOptions } from "@chakra-ui/react"

export function useToast() {
  const toast = useChakraToast()
  const handleToast = (props: UseToastOptions) => {
    toast({
      position: "top",
      isClosable: true,
      duration: 3000,
      ...props,
    })
  }
  return handleToast
}
