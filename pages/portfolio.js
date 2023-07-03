import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
// import billyPlaysBanjo from '../public/images/avatar.png'
import RenderHead from '../public/images/3d-avatar-sq.jpg'
import Arnold from '../public/images/arnold-laugh-sq.png'
import Layout from '../components/layouts/article'

const Portfolio = () => {
  return (
    <Layout>
      <Container maxW="container.lg">
        <Heading as="h3" fontSize={20} mb={4}>
          Portfolio
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="random-joke-generator"
              title="Random Joke Generator"
              thumbnail={Arnold}
            >
              A simple joke generator made with custom React hooks.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="self-portrait"
              title="3D Self Portrait"
              thumbnail={RenderHead}
            >
              I used Blender to create a 3D render of my head for my website.
            </WorkGridItem>
          </Section>
          {/* <Section>
                        <WorkGridItem id="billy-plays-banjo" title="BillyPlaysBanjo" thumbnail={billyPlaysBanjo}>
                            An avatar I created for my music project using Adobe Illustrator. 
                        </WorkGridItem>
                    </Section> */}
        </SimpleGrid>
        <Divider />
      </Container>
    </Layout>
  )
}

export default Portfolio
