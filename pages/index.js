import React from 'react'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import { GlobalStyles } from '../components/GlobalStyles'
import { Container } from '../components/Container'
import { Flex } from '../components/Layout'
import { Header } from '../components/Header'
import { Logo } from '../components/Logo'
import { H1 } from '../components/Typography'
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
          <Container>
            <Logo width='75px' height='75px' src='/logo.svg' alt="HJ Digital Logo" />
            <H1 mb={3} >I'm <strong>Matthew Harrison-Jones (Matt Hojo)</strong>, an experienced Software Engineer based in North Wales, UK.</H1>
            <p>
              My work a focuses on front-end development and user experience, working with Javascript/Typescript, Node.js and React.
              I have experience working with some of the world's largest online organisations, helping them deliver exciting ideas to a global audience of customers.
            </p>
          </Container>
        </Header>
        <section>
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
        </section>
      </main>
  </ThemeProvider>
)

export default App
