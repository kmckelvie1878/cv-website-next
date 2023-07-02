import { Box, useColorModeValue } from "@chakra-ui/react"

const Intro = () => {
    return (
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={12}
          mt={6}
          align="center"
          boxShadow="xl"
        >
          Hello 👋 I&apos;m Kieran
          <br />
          <small>
            Front End Developer from Newton-Le-Willows, UK.
          </small>
        </Box>
    )
}

export default Intro