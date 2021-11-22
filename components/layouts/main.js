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
                <meta name="description" content="💡 Digital Creator / Developer / Designer from St Helens. Also known as Billy." />
                <meta name="author" content="Kieran McKelvie" />
                <link rel="apple-touch-icon" href="apple-touch-icon.png" />
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@billy_mckelvie" />
                <meta name="twitter:creator" content="@billy_mckelvie" />
                <meta name="twitter:image" content="/card.png" />
                <meta property="og:site_name" content="Kieran McKelvie | mckelvie.dev" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/card.png" />
                <title>Kieran McKelvie | mckelvie.dev</title>
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