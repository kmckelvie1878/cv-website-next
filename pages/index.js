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
                    Hello 👋 I&apos;m a creative web developer from Merseyside
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
                        <BioYear>2007</BioYear>
                        Completed National Certificate in Music Technology at St Helens College.
                    </BioSection>
                    <BioSection>
                        <BioYear>2008</BioYear>
                        First job as a Junior Web Developer.
                    </BioSection>
                    
                    <BioSection>
                        <BioYear>2014</BioYear>
                        Completed Foundation Degree in Music Production and Sound Design at Liverpool John Moore&apos;s University.
                    </BioSection>
                    <BioSection>
                        <BioYear>2015</BioYear>
                        Joined Gladstone Brookes as a Front End Developer.
                    </BioSection>
                    <BioSection>
                        <BioYear>2017</BioYear>
                        Seconded to Churchill Sloan as a Head of Web Dev &amp; Digital Marketing. Moved to Newton-Le-Willows.
                    </BioSection>
                    <BioSection>
                        <BioYear>2018</BioYear>
                        Became Web Development Manager at Gladstone Brookes.
                    </BioSection>
                    <BioSection>
                        <BioYear>2021</BioYear>
                        To be continued...
                    </BioSection>
                </Section>
            </Container>
        </Layout>
    )
}

export default Page