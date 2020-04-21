import React from 'react'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import { GlobalStyles } from '../components/GlobalStyles'
import { Container, Flex, Section } from '../components/Layout'
import { Header } from '../components/Header'
import { Logo } from '../components/Logo'
import { H1, P, A, Ul, Li } from '../components/Typography'
import { Button } from '../components/Button'
import { Client } from '../components/Client'

const App = props => (
  <ThemeProvider theme={theme}>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <GlobalStyles />
      <main>
        <Header mb={4}>
          <Container px={[4, 4, 0]} >
            <Logo width='75px' height='75px' src='/logo.svg' alt="HJ Digital Logo" />
            <H1 mb={3} >I'm <strong>Matthew Harrison-Jones (Matt Hojo)</strong>, an experienced Software Engineer based in North Wales, UK.</H1>
            <P>
              My work focuses on front-end development and user experience, working with Javascript/Typescript, Node.js and React.
              I have experience working with some of the world's leading online organisations, helping them deliver exciting ideas to a global audience of customers.
              I'm passionate about web performance and accessibility.
            </P>
            <P>
              In my spare time, you can find me tending to my small farm 🐴
            </P>
          </Container>
        </Header>

        <Section bg={theme.colors.purple}>
          <Container>
            <Flex flexDirection='row' flexWrap='wrap' justifyContent='center' alignItems='center'>
              <Client client="vogue" />
              <Client client="conde" />
              <Client client="stickermule" />
              {/* <Client client="urbanSim">
                <h2>UrbanSim</h2>
                <p>At Condé Nast I am part of the Audience Growth team. Working on and experimenting with new ideas to grow user retention and experience.</p>
              </Client> */}
              <Client client="riotGames" />
              <Client client="ghost" />
              <Client client="wsj" />
              <Client client="stylist" />
              <Client client="ribaj" />
              <Client client="teachactive" />
            </Flex>
          </Container>
        </Section>
        <Section>
          <Container pt={4}>
            <Flex flexDirection='row' flexWrap='wrap' justifyContent='center' alignItems='center'>
              <Button as="a" href="mailto:matt@matthojo.co.uk">
                <strong>
                  Available
                </strong> from Q4 2020
              </Button>
            </Flex>
          </Container>
        </Section>
        <footer>
          <Container pt={4}>
            <Flex flexDirection='row' flexWrap='wrap' justifyContent='center' alignItems='center'>
              <Ul>
                <Li><A href="mailto:matt@matthojo.co.uk">Email</A></Li>
                <Li><A href="https://twitter.com/matt_hojo">Twitter</A></Li>
                <Li><A href="https://www.linkedin.com/in/matthewharrisonjones/">LinkedIn</A></Li>
                <Li><A href="https://github.com/matthojo">GitHub</A></Li>
              </Ul>
            </Flex>
          </Container>
        </footer>
      </main>
  </ThemeProvider>
)

export default App
