import {Box, Heading, Button, Link, Icon, List, ListItem, useColorModeValue} from '@chakra-ui/react'
import Section from './section'
import {IoLogoGithub, IoLogoLinkedin} from 'react-icons/io5'

const Links = () => {
    return (
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={6}
          mb={12}
          mt={6}
          boxShadow="xl"
        >
          <Section delay={0.4}>
            <Heading as="h3" variant="section-title">
              Links
            </Heading>
            <List>
              <ListItem>
                <Link
                  href="https://github.com/kmckelvie1878"
                  target="_blank"
                  rel="noopener"
                >
                  <Button
                    variant="ghost"
                    colorScheme="teal"
                    leftIcon={<Icon as={IoLogoGithub} />}
                  >
                    GitHub
                  </Button>
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="http://linkedin.com/in/kieran-mckelvie"
                  target="_blank"
                  rel="noopener"
                >
                  <Button
                    variant="ghost"
                    colorScheme="teal"
                    leftIcon={<Icon as={IoLogoLinkedin} />}
                  >
                    LinkedIn
                  </Button>
                </Link>
              </ListItem>
            </List>
          </Section>
        </Box>
    )
}

export default Links