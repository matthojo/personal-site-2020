import styled from 'styled-components'
import { color, space } from 'styled-system'

const clientsBranding = {
  vogue: {
    title: 'Vogue',
    url: 'https://www.vogue.co.uk',
    logo: '/logos/vogue.svg'
  },
  conde: {
    title: 'Condé Nast',
    url: 'https://www.condenast.com',
    logo: '/logos/conde.svg'
  },
  stickermule: {
    title: 'Sticker Mule',
    url: 'https://www.stickermule.com',
    logo: '/logos/stickermule.svg'
  },
  riotGames: {
    title: 'Riot Games',
    url: 'https://www.riotgames.com',
    logo: '/logos/riotGames.svg'
  },
  wsj: {
    title: 'WSJ+',
    url: 'https://www.wsjplus.com',
    logo: '/logos/wsj.svg'
  },
  ghost: {
    title: 'Ghost',
    url: 'https://ghost.org',
    logo: '/logos/ghost.svg'
  },
  stylist: {
    title: 'Stylist',
    url: 'https://www.stylist.co.uk',
    logo: '/logos/stylist.svg'
  },
  ribaj: {
    title: 'RIBA Journal',
    url: 'https://www.ribaj.com/',
    logo: '/logos/ribaj.svg'
  },
  teachactive: {
    title: 'Teach Active',
    url: 'https://www.teachactive.org',
    logo: '/logos/teachactive.svg'
  }
}

const ClientLogo = styled.img`
  width: 100%;
  ${space}
`

const ClientLink = styled.a`
  display: inline-block;
  width: 200px;
  ${space}
`

export const Client = ({
  client,
  children
}) => (
  <ClientLink href={clientsBranding[client].url} p={4}>
    <ClientLogo src={clientsBranding[client].logo} alt={clientsBranding[client].title}/>
  </ClientLink>
)
