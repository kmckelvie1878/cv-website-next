import { Container, Badge, Box, List, ListItem, SimpleGrid, useColorModeValue } from '@chakra-ui/react'
// import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta} from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="3D Self Portrait">
            <Container maxW="container.lg">
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={6} mb={6} mt={6} boxShadow="lg">
                    <Title>My Head in 3D 👤 <Badge>2021</Badge></Title>
                    <P>I used Blender to create a render of my head from 6 photos taken on my iPhone. I wore my flat cap in the photos so I had to sculpt the head into the shape of the cap and adjust the textures accordingly. The initial idea was to use a low-poly 3D flat cap as the centerpiece of this portfolio, but the idea evolved...</P>
                    <List ml={4} my={4}>
                        <ListItem>
                            <Meta>Created with</Meta>
                            <span>Blender</span>
                        </ListItem>
                        <ListItem>
                            <Meta>Category</Meta>
                            <span>Personal</span>
                        </ListItem>
                    </List>
                </Box>
                <SimpleGrid columns={[1,1,2]} gap={6}>
                    <WorkImage src="/images/3d-avatar-3.jpg" alt="BillyPlaysBanjo" />
                    <WorkImage src="/images/3d-avatar-2.jpg" alt="BillyPlaysBanjo" />
                </SimpleGrid>
                <WorkImage src="/images/3d-me-showpiece.jpg" alt="3D Self Portrait" />
            </Container>
        </Layout>
    )
}

export default Work