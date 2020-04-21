import styled, { keyframes } from 'styled-components'
import { color, space } from 'styled-system'

import condeLogo from './logos/conde.svg'
import vogueLogo from './logos/vogue.svg'
import stickermuleLogo from './logos/stickermule.svg'
import riotGamesLogo from './logos/riotGames.svg'
import wsjLogo from './logos/wsj.svg'
import ghostLogo from './logos/ghost.svg'
import stylistLogo from './logos/stylist.svg'
import ribajLogo from './logos/ribaj.svg'
import teachactiveLogo from './logos/teachactive.svg'

const clientsBranding = {
  vogue: {
    title: 'Vogue',
    url: 'https://www.vogue.co.uk',
    logo: vogueLogo
  },
  conde: {
    title: 'Condé Nast',
    url: 'https://www.condenast.com',
    logo: condeLogo
  },
  stickermule: {
    title: 'Sticker Mule',
    url: 'https://www.stickermule.com',
    logo: stickermuleLogo
  },
  riotGames: {
    title: 'Riot Games',
    url: 'https://www.riotgames.com',
    logo: riotGamesLogo
  },
  wsj: {
    title: 'WSJ+',
    url: 'https://www.wsjplus.com',
    logo: wsjLogo
  },
  ghost: {
    title: 'Ghost',
    url: 'https://ghost.org',
    logo: ghostLogo
  },
  stylist: {
    title: 'Stylist',
    url: 'https://www.stylist.co.uk',
    logo: stylistLogo
  },
  ribaj: {
    title: 'RIBA Journal',
    url: 'https://www.ribaj.com/',
    logo: ribajLogo
  },
  teachactive: {
    title: 'Teach Active',
    url: 'https://www.teachactive.org',
    logo: teachactiveLogo
  }
}

const flicker = keyframes`
  0%    { opacity: 1;   }
  3%    { opacity: 0.4; }
  6%    { opacity: 1;   }
  7%    { opacity: 0.4; }
  8%    { opacity: 1;   }
  9%    { opacity: 0.4; }
  10%   { opacity: 1;   }
  100%  { opacity: 1;   }
`

const ClientLogo = styled.div`
  width: 100%;

  svg {
    width: 100%;
    fill: ${({ theme }) => theme.colors.white };
    opacity: 0.5;
    transition: 0.2s;
  }

  &:hover svg {
    opacity: 1;
  }
`

const ClientLink = styled.a`
  display: inline-block;
  width: 200px;
  ${space}
`

export const Client = ({
  client,
  children
}) => {
  const Logo = clientsBranding[client].logo
  return (
  <ClientLink href={clientsBranding[client].url} p={4}>
    <ClientLogo>
      <Logo />
    </ClientLogo>
  </ClientLink>
)
}
