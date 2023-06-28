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
            I&apos;m a multi-talented developer based in Newton Le Willows
          </small>
        </Box>
    )
}

export default Intro