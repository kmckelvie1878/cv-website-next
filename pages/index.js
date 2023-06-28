import { Container } from '@chakra-ui/react'

import Layout from '../components/layouts/article'

import Intro from '../components/Intro'
import About from '../components/About'
import Skills from '../components/Skills'
import History from '../components/History'
import Tech from '../components/Tech'
import Links from '../components/Links'

const Page = () => {
  return (
    <Layout>
      <Container maxW="container.lg">
        <Intro />
        <About />
        <Skills />
        <History />
        <Tech />
        <Links />
      </Container>
    </Layout>
  )
}

export default Page
