import {
    Container,
    Box,
    Heading,
    Image,
    Button,
    Link,
    Icon,
    SimpleGrid,
    List,
    ListItem,
    useColorModeValue
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
// import { GridItem } from '../components/grid-item'
import {
    IoLogoCss3,
    IoLogoFirebase,
    IoLogoGithub,
    IoLogoHtml5,
    IoLogoJavascript,
    IoLogoLinkedin,
    IoLogoNodejs,
    IoLogoNpm,
    IoLogoReact,
    IoLogoSass,
    IoLogoVercel,
    IoLogoVue,
    IoLogoWordpress
} from 'react-icons/io5'
import RadarChart from '../components/skill-matrix'

const Page = () => {
    return (
        <Layout>
            <Container maxW="container.lg">
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={12} mt={6} align="center" boxShadow="xl">
                    Hello 👋 I&apos;m Kieran<br />
                    <small>I&apos;m a creative web developer from St Helens</small>
                </Box>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={6} mb={12} mt={6} boxShadow="lg">
                    <Box display={{md:'flex'}}>
                        <Box flexGrow={1}>
                            <Heading 
                            as="h1"
                            variant="page-title"
                            fontSize={{base: 30, md: 50}}
                            bgGradient={useColorModeValue('linear(to-l, #202023, #202023)', 'linear(to-l, #0092ff, #2ce388)')}
                            bgClip="text"
                            fontWeight="extrabold"
                            letterSpacing={-3}
                            fontStyle="italic"
                            textAlign={{base: 'center', md:'left'}}
                            >
                                KIERAN McKELVIE
                            </Heading>
                            <Heading
                            as="p"
                            fontSize={13}
                            textAlign={{base: 'center', md:'left'}}
                            >
                            Digital Creator / Developer / Designer
                            </Heading>
                        </Box>
                        <Box flexShrink={0} mt={{base: 4, md:0}} ml={{md: 6}} align="center">
                            <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" w="96px" h="96px" display="inline-block" borderRadius="full" src="/images/profile-image.png" alt="Profile Image" />
                        </Box>
                    </Box>
                    <Section delay={0.1}>
                        <Heading as="h3" variant="section-title" mt={4}>
                            About
                        </Heading>
                        <Paragraph>
                            Predominantly a <strong>Front End Developer</strong>, I&apos;m <span style={{textDecoration: "line-through"}}>currently</span> constantly evolving my skills as I aspire to be a full stack developer.<br />I&apos;m passionate about clean code, immersive UX &amp; intuitive UI.
                        </Paragraph>
                        <Paragraph>
                            Also known as Billy.<br />
                            <small>Long story!</small>
                        </Paragraph>
                    </Section>
                </Box>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={6} mb={12} mt={6} boxShadow="xl">
                    <Section delay={0.2}>
                        <SimpleGrid columns={[1,1,2]} gap={12}>
                            <Box>
                                <Heading as="h3" variant="section-title">
                                    Bio
                                </Heading>
                                <BioSection>
                                    <BioYear>1989</BioYear>
                                    👶 Born in St Helens, Merseyside.
                                </BioSection>
                                <BioSection>
                                    <BioYear>1998</BioYear>
                                    ⚽ Had [unsuccessful] trial at Everton Academy.
                                </BioSection>
                                <BioSection>
                                    <BioYear>2001</BioYear>
                                    💻 Taught myself HTML (at 12 years old).
                                </BioSection>
                                <BioSection>
                                    <BioYear>2003</BioYear>
                                    🎸 Learned to play the guitar, joined my first band.
                                </BioSection>
                                <BioSection>
                                    <BioYear>2005</BioYear>
                                    📚 Left school (Sutton Academy, St Helens).
                                </BioSection>
                                <BioSection>
                                    <BioYear>2007</BioYear>
                                    📜 Graduated from St Helens College with a National Certificate in Music Technology (NC2).
                                </BioSection>
                                <BioSection>
                                    <BioYear>2008</BioYear>
                                    🎨 Landed first job as a Web Designer.
                                </BioSection>
                                <BioSection>
                                    <BioYear>2014</BioYear>
                                    👨‍🎓 Graduated from Liverpool John Moore&apos;s University with a Degree in Music Production and Sound Design (FDA).
                                </BioSection>
                                <BioSection>
                                    <BioYear>2015</BioYear>
                                    👨‍💻 Front End Developer @ Gladstone Brookes.
                                </BioSection>
                                <BioSection>
                                    <BioYear>2017</BioYear>
                                    📈 Digital Marketing Manager @ Churchill Sloan.<br />
                                    🏡 Moved to Newton-Le-Willows.
                                </BioSection>
                                <BioSection>
                                    <BioYear>2018</BioYear>
                                    👔 Web Development Manager @ Gladstone Brookes.
                                </BioSection>
                                <BioSection>
                                    <BioYear>2021</BioYear>
                                    🔜 To be continued...
                                </BioSection>
                            </Box>
                            <Box p={6} align="center">
                                <Heading 
                                as="h3"
                                fontSize={26}
                                bgGradient={useColorModeValue('linear(to-l, #202023, #202023)', 'linear(to-l, #0092ff, #2ce388)')}
                                bgClip="text"
                                fontWeight="extrabold"
                                letterSpacing={-2}
                                mb={6}
                                fontStyle="italic"
                                textAlign="center"
                                >
                                    ATTRIBUTES
                                </Heading>
                                <RadarChart />
                                <Box mt={4}>
                                    <small>Age: <strong>32</strong></small><br />
                                    <small>Preferred Foot: <strong>Left</strong></small><br />
                                    <small>Skill Moves: <strong>⭐⭐⭐⭐⭐</strong></small>
                                </Box>
                            </Box>
                        </SimpleGrid>
                    </Section>
                </Box>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={6} mb={12} mt={6} boxShadow="xl">
                    <Section delay={0.4}>
                        <Heading as="h3" variant="section-title">
                            Stack &amp; Technologies
                        </Heading>
                        <Paragraph>
                            I coded this portfolio with the <strong>React.js</strong> framework <strong>Next.js</strong>, using <strong>Chakra UI</strong> with <strong>Framer Motion</strong>.
                        </Paragraph>
                        <Paragraph>
                            I used <strong>Blender</strong> to create the 3D model of my head and <strong>Three.js</strong> to render it in the DOM.
                        </Paragraph>
                        <Paragraph>
                            The site is deployed to/hosted on <strong>Vercel</strong>.
                        </Paragraph>
                        <Paragraph>
                            Some of the languages, frameworks and technologies I have experience with:
                        </Paragraph>
                        <Box display="flex" flexDirection="row" justifyContent="space-around" flexWrap="wrap" mt={6}>
                            <Icon fontSize={50}  as={IoLogoHtml5} />
                            <Icon fontSize={50}  as={IoLogoCss3} />
                            <Icon fontSize={50}  as={IoLogoSass} />
                            <Icon fontSize={50}  as={IoLogoJavascript} />
                            <Icon fontSize={50}  as={IoLogoReact} />
                            <Icon fontSize={50}  as={IoLogoVue} />
                            <Icon fontSize={50}  as={IoLogoWordpress} />
                            <Icon fontSize={50}  as={IoLogoGithub} />
                            <Icon fontSize={50}  as={IoLogoFirebase} />
                            <Icon fontSize={50}  as={IoLogoNodejs} />
                            <Icon fontSize={50}  as={IoLogoNpm} />
                            <Icon fontSize={50}  as={IoLogoVercel} />
                        </Box>
                    </Section>
                </Box>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={6} mb={12} mt={6} boxShadow="xl">
                    <Section delay={0.4}>
                        <Heading as="h3" variant="section-title">
                            Links
                        </Heading>
                        <List>
                            <ListItem>
                                <Link href="https://github.com/kmckelvie1878" target="_blank">
                                    <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub} />}>
                                        GitHub
                                    </Button>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href="http://linkedin.com/in/kieran-mckelvie" target="_blank">
                                    <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoLinkedin} />}>
                                        LinkedIn
                                    </Button>
                                </Link>
                            </ListItem>
                        </List>
                    </Section>
                </Box>
            </Container>
        </Layout>
    )
}

export default Page