import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbExampleOne from '../public/images/avatar.jpg'
import Layout from '../components/layouts/article'

const Portfolio = () => {
    return (
        <Layout>
            <Container>
                <Heading
                as="h3"
                fontSize={20}
                mb={4}
                >
                    Portfolio
                </Heading>
                <SimpleGrid columns={[1,1,2]} gap={6}>
                    <Section>
                        <WorkGridItem id="example1" title="BillyPlaysBanjo" thumbnail={thumbExampleOne}>
                            An avatar I created for my music project using Adobe Illustrator. 
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="example1" title="BillyPlaysBanjo" thumbnail={thumbExampleOne}>
                            An avatar I created for my music project using Adobe Illustrator. 
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="example1" title="BillyPlaysBanjo" thumbnail={thumbExampleOne}>
                            An avatar I created for my music project using Adobe Illustrator. 
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="example1" title="BillyPlaysBanjo" thumbnail={thumbExampleOne}>
                            An avatar I created for my music project using Adobe Illustrator. 
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Portfolio