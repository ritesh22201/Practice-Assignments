import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Flex,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import Login from "./Components/Login"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Flex>
      <ColorModeSwitcher justifySelf="flex-end" />
    </Flex>
      <Login/>
  </ChakraProvider>
)
