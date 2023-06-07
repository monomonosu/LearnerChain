import styled from '@emotion/styled'
import Link from 'next/link'
import { IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import PostAddIcon from '@mui/icons-material/PostAdd'
import Image from 'next/image'
import Logo from '../../assets/icons/LeanerChainLogo.svg'
import { useDisclosure } from '@/functions/hooks/useDisclosure'
import { BasicModal } from '../uis/BasicModal'
import { BasicInput } from '../uis/BasicInput'
import { BasicButton } from '../uis/BasicButton'

export default function HeaderMain() {
  // モーダル開閉管理
  const searchModal = useDisclosure()

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

  const SearchContainer = styled.div`
    display: grid;
    gap: 20px;
  `

  // TODO:別ディレクトリに切り出した方が良いかも
  const SearchForm: JSX.Element = (
    <SearchContainer>
      <p>ユーザー名、タイトル、タグ、URL（仮）を入力して検索できます。</p>
      <BasicInput name="search_form" label="検索ワード" placeholder="もくもく会、勉強会" />
      <BasicButton text="検索" height="50px" className="-shadow" />
    </SearchContainer>
  )

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
            <IconButton onClick={searchModal.open}>
              <SearchIcon fontSize="large" />
            </IconButton>
            <BasicModal
              title="セッションを探す"
              open={searchModal.isOpen}
              handleClose={searchModal.close}
              content={SearchForm}
            ></BasicModal>
          </div>
        </HeaderInner>
      </HeaderContainer>
    </>
  )
}
