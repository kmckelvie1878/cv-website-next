import { Box, Heading, SimpleGrid, useColorModeValue } from '@chakra-ui/react'
import { BioSection, BioYear } from './bio'
import { WorkImage } from './work'

const History = () => {
  return (
    <SimpleGrid columns={[1, 1, 2]} gap={6}>
      <WorkImage src="/images/guitar.png" alt="Guitar" />
      <Box
        h={{ base: 831, md: 781, lg: 831 }}
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        pt={6}
        px={6}
        boxShadow="xl"
      >
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1989</BioYear>
          👶 Born in St Helens, Merseyside.
        </BioSection>
        <BioSection>
          <BioYear>1998</BioYear>⚽ Had [unsuccessful] trial at Everton Academy.
        </BioSection>
        <BioSection>
          <BioYear>2001</BioYear>
          💻 Taught myself HTML.
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
          📜 Graduated from St Helens College.
        </BioSection>
        <BioSection>
          <BioYear>2008</BioYear>
          👨‍💻 Landed first job as a Junior Web Developer.
        </BioSection>
        <BioSection>
          <BioYear>2014</BioYear>
          👨‍🎓 Graduated from Liverpool John Moore&apos;s University.
        </BioSection>
        <BioSection>
          <BioYear>2015</BioYear>
          🎨 Digital Creative Lead @ Gladstone Brookes.
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          📈 Digital Marketing Manager @ Churchill Sloan.
          <br />
          🏡 Moved to Newton-Le-Willows.
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          👔 Web Development Manager @ Gladstone Brookes.
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          🩺 Software Engineer @ Blinx Healthcare.
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          ⭕ Frontend Engineer @ Huler.
          <br />
          👶 Became a Dad for the first-time.
        </BioSection>
      </Box>
    </SimpleGrid>
  )
}

export default History
