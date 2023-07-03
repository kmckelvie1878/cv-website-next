import {
  Container,
  Badge,
  Box,
  List,
  ListItem,
  Heading,
  Text,
  Button,
  useColorModeValue
} from '@chakra-ui/react'
import {useState} from 'react'
// import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import useRandomJoke from '../../lib/hooks/useRandomJoke'

const Work = () => {
  const [instance, setInstance] = useState(0)
  const { setup, joke } = useRandomJoke(instance)

  const generateJoke = e => {
    e.preventDefault()
    setInstance(instance + 1)
  }
  return (
    <Layout title="Random Joke Generator">
      <Container maxW="container.lg">
      <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={6}
          mt={6}
          align="center"
          boxShadow="xl"
        >
          <Heading as="h2" fontSize={20}>
            Random Joke Generator
          </Heading>
        </Box>

        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={6}
          mt={6}
          align="center"
          boxShadow="xl"
        >
          <Text fontSize="xl" textAlign="center" mb="4">
            {setup}
          </Text>

          <Text fontSize="xl" textAlign="center" mb="4">
            {joke}
          </Text>

          <Button onClick={generateJoke}>Generate New Joke</Button>
        </Box>
        
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={6}
          mb={6}
          mt={6}
          boxShadow="lg"
        >
          <Title>
            Random Joke Generator <Badge>2022</Badge>
          </Title>
          <P>
            This simple joke generator was created using a custom hook which
            fetches random joke data from an API and returns a setup and
            punchline. The hook is called on page load and then again each time
            the button is clicked.
          </P>
          <List ml={4} my={4}>
            <ListItem>
              <Meta>Created with</Meta>
              <span>React / Custom Hooks</span>
            </ListItem>
            <ListItem>
              <Meta>Category</Meta>
              <span>Development</span>
            </ListItem>
            <ListItem>
              <Meta>Disclaimer</Meta>
              <span>Some of these jokes may be fairly cheesy and do not necessarily reflect my views, opinions or sense of humour.</span>
            </ListItem>
          </List>
        </Box>
      </Container>
    </Layout>
  )
}

export default Work
