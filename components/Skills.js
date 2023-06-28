import {
    Box,
    Heading,
    SimpleGrid,
    useColorModeValue
  } from '@chakra-ui/react'
import Section from './section'
import RadarChart from './skill-matrix'
import BarChart from './skill-list'

const Skills = () => {
    return (
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={6}
          mb={12}
          mt={6}
          boxShadow="xl"
        >
          <Section delay={0.2}>
            <Heading
              as="h3"
              fontSize={26}
              bgGradient={useColorModeValue(
                'linear(to-l, #202023, #202023)',
                'linear(to-l, #0092ff, #2ce388)'
              )}
              bgClip="text"
              fontWeight="extrabold"
              letterSpacing={-2}
              mb={6}
              fontStyle="italic"
              textAlign="center"
            >
              SKILLS &amp; ATTRIBUTES
            </Heading>
            <SimpleGrid columns={[1, 1, 2]} gap={12}>
              <Box p={6} align="center">
                <RadarChart />
                <Box mt={4}>
                  <small>
                    Age: <strong>34</strong>
                  </small>
                  <br />
                  <small>
                    Preferred Foot: <strong>Left</strong>
                  </small>
                  <br />
                  <small>
                    Skill Moves: <strong>⭐⭐⭐⭐⭐</strong>
                  </small>
                </Box>
              </Box>
              <Box p={6} align="center">
                <BarChart />
              </Box>
            </SimpleGrid>
          </Section>
        </Box>
    )
}

export default Skills