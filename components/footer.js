import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.8} fontSize="sm">
      &copy; {new Date().getFullYear()} Kieran McKelvie. All Rights Reserved.
    </Box>
  )
}

export default Footer