import { Box, Heading, Icon, useColorModeValue } from '@chakra-ui/react';
import {
  IoLogoCss3,
  IoLogoFirebase,
  IoLogoHtml5,
  IoLogoJavascript,
  IoLogoNodejs,
  IoLogoNpm,
  IoLogoReact,
  IoLogoSass,
  IoLogoVercel,
  IoLogoVue,
  IoLogoWordpress,
  IoLogoGithub
} from 'react-icons/io5'
import Paragraph from './paragraph'
import Section from './section'

const Tech = () => {
    return (
      <>
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
              Stack &amp; Technologies
            </Heading>
            <Paragraph>
              I created this portfolio with <strong>React.js</strong> /{' '}
              <strong>Next.js</strong>, using the <strong>Chakra UI</strong>{' '}
              library, brought to life with <strong>Framer Motion</strong>.
            </Paragraph>
            <Paragraph>
              I used <strong>Blender</strong> to create the 3D model of my head
              and <strong>Three.js</strong> to render it in the DOM.
            </Paragraph>
            <Paragraph>
              The skills and attributes graphs were created with{' '}
              <strong>ChartJS</strong>.
            </Paragraph>
            <Paragraph>
              The site is hosted on <strong>Vercel</strong> using continuous
              deployment.
            </Paragraph>
            <Paragraph>
              Some of the languages, frameworks and technologies I have
              experience with are displayed below.
            </Paragraph>
          </Section>
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
          flexWrap="wrap"
          mb={12}
        >
          <Icon fontSize={50} as={IoLogoHtml5} />
          <Icon fontSize={50} as={IoLogoCss3} />
          <Icon fontSize={50} as={IoLogoSass} />
          <Icon fontSize={50} as={IoLogoJavascript} />
          <Icon fontSize={50} as={IoLogoReact} />
          <Icon fontSize={50} as={IoLogoVue} />
          <Icon fontSize={50} as={IoLogoWordpress} />
          <Icon fontSize={50} as={IoLogoGithub} />
          <Icon fontSize={50} as={IoLogoFirebase} />
          <Icon fontSize={50} as={IoLogoNodejs} />
          <Icon fontSize={50} as={IoLogoNpm} />
          <Icon fontSize={50} as={IoLogoVercel} />
        </Box>
      </>
    )
}

export default Tech;