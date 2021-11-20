import { Container, Badge, List, ListItem, SimpleGrid, Box, useColorModeValue } from '@chakra-ui/react'
// import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta} from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="BillyPlaysBanjo">
            <Container maxW="container.lg">
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={6} mb={6} mt={6} boxShadow="lg">
                    <Title>BillyPlaysBanjo 🪕 <Badge>2021</Badge></Title>
                    <P>Illustrated avatar &amp; branding concept for my folk music project under my pseudonym Billy McKelvie. Created using a still image from one of my videos.</P>
                    <List ml={4} my={4}>
                        <ListItem>
                            <Meta>Created with</Meta>
                            <span>Adobe Illustrator</span>
                        </ListItem>
                        <ListItem>
                            <Meta>Category</Meta>
                            <span>Personal</span>
                        </ListItem>
                    </List>
                </Box>
                <WorkImage src="/images/billyplaysbanjo-showpiece.jpg" alt="BillyPlaysBanjo" />
                <SimpleGrid columns={[1,1,2]} gap={6}>
                    <WorkImage src="/images/billyplaysbanjo-originalpic.jpg" alt="BillyPlaysBanjo" />
                    <WorkImage src="/images/billyplaysbanjo-social.png" alt="BillyPlaysBanjo" />
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Work