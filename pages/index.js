import { Container, Box, Heading, Image, useColorModeValue } from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'

const Page = () => {
    return (
        <Layout>
            <Container>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} mt={6} align="center">
                    Hello 👋 I&apos;m a developer from St Helens
                </Box>

                <Box display={{md:'flex'}}>
                    <Box flexGrow={1}>
                        <Heading 
                        as="h1"
                        variant="page-title"
                        bgGradient={useColorModeValue('linear(to-l, #202023, #202023)', 'linear(to-l, #0092ff, #2ce388)')}
                        bgClip="text"
                        fontWeight="extrabold"
                        >
                            Kieran McKelvie
                        </Heading>
                        <small>⚡ Digital Engineer ( Creator / Developer / Designer )</small>
                    </Box>
                    <Box flexShrink={0} mt={{base: 4, md:0}} ml={{md: 6}} align="center">
                        <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" dispay="inline-block" borderRadius="full" src="/images/profile-image-3.jpg" alt="Profile Image" />
                    </Box>
                </Box>
                <Section delay={0.1}>
                    <Heading
                    as="h3"
                    variant="section-title"
                    >
                        Summary
                    </Heading>
                    <Paragraph>
                        Predominantly a front-end developer, I&apos;m currently evolving my skills to go full stack, as well as learning app development. I&apos;m passionate about clean code &amp; intuitive UI design. In my spare time I enjoy video editing and production, and I have a degree in music production &amp; sound design.
                    </Paragraph>
                </Section>
                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title" mt={10}>
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>1989</BioYear>
                        Born in St Helens, Merseyside.
                    </BioSection>
                    <BioSection>
                        <BioYear>2005</BioYear>
                        Graduated from Sutton Academy, St Helens.
                    </BioSection>
                    <BioSection>
                        <BioYear>2007</BioYear>
                        Graduated from St Helens College with a National Certificate in Music Technology (NC2).
                    </BioSection>
                    <BioSection>
                        <BioYear>2008</BioYear>
                        Landed first job as a Web Designer.
                    </BioSection>
                    <BioSection>
                        <BioYear>2014</BioYear>
                        Graduated from Liverpool John Moore&apos;s University with a Degree in Music Production and Sound Design (FDA).
                    </BioSection>
                    <BioSection>
                        <BioYear>2015</BioYear>
                        Joined Gladstone Brookes as a Front End Developer.
                    </BioSection>
                    <BioSection>
                        <BioYear>2017</BioYear>
                        Seconded to Churchill Sloan as a Head of Web Development &amp; Digital Marketing. Moved to Newton-Le-Willows.
                    </BioSection>
                    <BioSection>
                        <BioYear>2018</BioYear>
                        Secured new position as Web Development Manager at Gladstone Brookes.
                    </BioSection>
                    <BioSection>
                        <BioYear>2021</BioYear>
                        Left Gladstone Brookes and moved to GRV Media as a Senior Developer.
                    </BioSection>
                </Section>
                <Section delay={0.4}>
                    <Heading as="h3" variant="section-title" mt={10}>
                        Stack
                    </Heading>
                    <Paragraph>
                        I coded this portfolio with the <strong>React.js</strong> framework <strong>Next.js</strong>, using <strong>Chakra UI</strong> with <strong>Framer Motion</strong> and <strong>Three.js</strong>.<br />
                    </Paragraph>
                    <p mt={8}><small>The 3D Render of my head I made using Blender</small></p>
                </Section>
            </Container>
        </Layout>
    )
}

export default Page