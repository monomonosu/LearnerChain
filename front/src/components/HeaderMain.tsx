import styled from '@emotion/styled'
import { IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import Image from 'next/image'
import Logo from '../assets/icons/LeanerChainLogo.svg'

export default function HeaderMain() {
  const HeaderContainer = styled.div`
    min-height: 70px;
    display: flex;
  `

  const HeaderInner = styled.div`
    margin: auto;
    width: 768px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `

  return (
    <>
      <HeaderContainer>
        <HeaderInner>
          <Image src={Logo} width={100} height={50} alt="logo" />
          <IconButton>
            <SearchIcon />
          </IconButton>
        </HeaderInner>
      </HeaderContainer>
    </>
  )
}
