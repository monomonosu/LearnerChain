import styled from '@emotion/styled'
import Link from 'next/link'
import { IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import PostAddIcon from '@mui/icons-material/PostAdd'
import Image from 'next/image'
import Logo from '../../assets/icons/LeanerChainLogo.svg'

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
          <Link href="/">
            <Image src={Logo} width={100} height={50} alt="logo" />
          </Link>
          <div>
            <Link href="/session/create">
              <IconButton>
                <PostAddIcon fontSize="large" />
              </IconButton>
            </Link>
            <IconButton>
              <SearchIcon fontSize="large" />
            </IconButton>
          </div>
        </HeaderInner>
      </HeaderContainer>
    </>
  )
}
