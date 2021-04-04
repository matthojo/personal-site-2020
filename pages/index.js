import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { light, dark } from '../theme'
import { GlobalStyles } from '../components/GlobalStyles'
import { Container, Flex, Section } from '../components/Layout'
import { Header } from '../components/Header'
import { Logo } from '../components/Logo'
import HJ from '../components/Logo/logo.svg'
import { H1, P, A, Ul, Li } from '../components/Typography'
import { ButtonGlow } from '../components/Button'
import { Client } from '../components/Client'

export const config = {
  unstable_runtimeJS: false
}

const App = props => {
  const [theme, setTheme] = useState('light');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  useEffect( () => {
    document.querySelector("body").setAttribute("class", "");
    document.querySelector("body").classList.add(theme)
  }, [theme]);
  
  return (
  <ThemeProvider theme={theme === 'light' ? light : dark}>
    <Head>
      <title>Matthew Harrison-Jones | Software Engineer</title>
      <link rel="icon" href="/logo.svg" />
    </Head>
    <GlobalStyles />
      <main>
        <Header>
          <Container px={[4, 4, 0]} py={[5, 2]}>
            <Flex justifyContent='space-between' alignItems="center">
              <Logo width='75px' height='75px'>
                <HJ/>
              </Logo>
              <ButtonGlow onClick={themeToggler}>
                <span>{theme === 'light' ? 'Lights off' : 'Lights on'}</span>
              </ButtonGlow>
            </Flex>
          </Container>
        </Header>
        <Section py={[5, 2]}>
          <Container>
              <H1 mb={3} >I'm <strong>Matthew Harrison-Jones (Matt Hojo)</strong>, an experienced Software Engineer based in North Wales, UK.</H1>
              <P>
                My work focuses on front-end development and user experience, working primarily with JavaScript, TypeScript, Node.js and React.
                I have experience working with some of the world's leading online organisations, helping them deliver exciting ideas to a global audience of customers.
                I'm passionate about web performance and accessibility.
              </P>
              <P>
                In my spare time, you can find me tending to my small farm 🐴
              </P>
          </Container>
        </Section>

        <Section mt="4" background="linear-gradient(243deg, rgba(249,158,248,1) 0%, rgba(135,31,209,1) 33%, rgba(135,31,209,1) 66%, rgba(249,158,248,1) 100%)" aria-label="Previous clients" className="retroness">
          <Container>
            <Flex mx={-4} flexDirection='row' flexWrap='wrap' justifyContent='space-between' alignItems='center'>
              <Client client="vogue" />
              <Client client="conde" />
              <Client client="stickermule" />
              {/* <Client client="urbanSim" /> */}
              <Client client="riotGames" />
              <Client client="ghost" />
              <Client client="wsj" />
              <Client client="stylist" />
              <Client client="ribaj" />
              <Client client="teachactive" />
            </Flex>
          </Container>
        </Section>
        <footer>
          <Container pt={4} px={4}>
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
)}

export default App
