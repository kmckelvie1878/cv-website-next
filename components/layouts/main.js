import Head from 'next/head'
import dynamic from 'next/dynamic'
import Navbar from '../Navbar'
import { Box, Container } from '@chakra-ui/react'
import MyHeadLoader from '../my-head-loader'
import Footer from '../footer'

const LazyMyHead = dynamic(() => import('../MyHead'), {
    ssr: false,
    loading: () => <MyHeadLoader />
  })

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Kieran McKelvie | mckelvie.dev</title>
                <meta name="description" content="💡 Digital Creator / Developer / Designer from St Helens. Also known as Billy." />
            </Head>
            <Navbar path={router.asPath} />
            <Container maxW="container.lg" pt={14}>
                <LazyMyHead />
                {children}
                <Footer />
            </Container>
        </Box>
    )
}

export default Main