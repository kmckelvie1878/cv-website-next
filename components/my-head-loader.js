import { forwardRef } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

export const MyHeadSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
)

export const MyHeadContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="my-head"
    m="auto"
    mt={[ '0px', '0px', '-40px' ]}
    mb={['-120px', '-150px', '-250px' ]}
    w={[280, 480, 640]}
    h={[280, 480, 640]}
    position="relative"
  >
    {children}
  </Box>
))

const Loader = () => {
  return (
    <MyHeadContainer>
      <MyHeadSpinner />
    </MyHeadContainer>
  )
}

export default Loader