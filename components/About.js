import {
    Box,
    Heading,
    Image,
    useColorModeValue
  } from '@chakra-ui/react'
import Section from './section'
import Paragraph from './paragraph'
import SummaryList from './summary-list'

const About = () => {
    return (
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={6}
          mb={12}
          mt={6}
          boxShadow="lg"
        >
          <Box display={{ md: 'flex' }}>
            <Box flexGrow={1}>
              <Heading
                as="h1"
                variant="page-title"
                fontSize={{ base: 30, md: 50 }}
                bgGradient={useColorModeValue(
                  'linear(to-l, #202023, #202023)',
                  'linear(to-l, #0092ff, #2ce388)'
                )}
                bgClip="text"
                fontWeight="extrabold"
                letterSpacing={-3}
                fontStyle="italic"
                textAlign={{ base: 'center', md: 'left' }}
              >
                KIERAN McKELVIE
              </Heading>
              <Heading
                as="p"
                fontSize={13}
                textAlign={{ base: 'center', md: 'left' }}
              >
                Frontend Developer / Software Engineer
              </Heading>
            </Box>
            <Box
              flexShrink={0}
              mt={{ base: 4, md: 0 }}
              ml={{ md: 6 }}
              align="center"
            >
              <Image
                borderColor="whiteAlpha.800"
                borderWidth={2}
                borderStyle="solid"
                maxWidth="100px"
                w="96px"
                h="96px"
                display="inline-block"
                borderRadius="full"
                src="/images/profile.png"
                alt="Profile Image"
              />
            </Box>
          </Box>
          <Section delay={0.1}>
            <Heading as="h2" variant="section-title" mt={4}>
              About
            </Heading>
            <Paragraph>
              Predominantly a <strong>Front End Developer</strong>, I&apos;m
              constantly evolving my skills as I aspire to be a full stack
              developer.
              <br />
              I&apos;m passionate about clean code, immersive UX &amp; intuitive
              UI.
            </Paragraph>
            <SummaryList />
          </Section>
        </Box>
    )
}

export default About