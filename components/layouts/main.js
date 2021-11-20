import Head from 'next/head'
import Navbar from '../Navbar'
import { Box, Container } from '@chakra-ui/react'
import Laptop from '../laptop'
import MyHead from '../MyHead'
import NoSsr from '../no-ssr'

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Kieran McKelvie | mckelvie.dev</title>
            </Head>
            <Navbar path={router.asPath} />
            <Container maxW="container.lg" pt={14}>
                <NoSsr>
                    <MyHead />
                </NoSsr>
                {children}
            </Container>
        </Box>
    )
}

export default Main