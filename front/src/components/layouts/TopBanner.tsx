import styled from '@emotion/styled'
import { BasicButton } from '../uis/BasicButton'
import theme from '../../../theme/theme'
import { Theme } from '@mui/material/styles'
import Link from 'next/link'

export default function TopBanner() {
  const BannerContainer = styled.div<{ theme?: Theme }>`
    width: 100%;
    background: ${theme.palette.customGrey.main};
    padding: 30px;
  `

  const BannerInner = styled.div`
    width: 768px;
    margin: auto;
    text-align: center;
    display: grid;
    row-gap: 20px;
  `

  const CustomWrapper = styled.div`
    display: flex;
    gap: 30px;
  `

  const CustomLink = styled(Link)`
    flex-grow: 1;
  `

  return (
    <>
      <BannerContainer>
        <BannerInner>
          <p>
            LearnerChainは学ぶ人同士を繋ぐプラットフォームです。
            <br />
            気軽にもくもく会を開いてみましょう。
          </p>
          <CustomWrapper>
            <CustomLink href="/info">
              <BasicButton
                text="LearnerChainについて"
                palette={theme.palette.customGreen}
                height="50px"
                width="100%"
                className="-shadow"
              />
            </CustomLink>
            <CustomLink href="/info/howto">
              <BasicButton
                text="LearnerChainの使い方"
                palette={theme.palette.customGreen}
                height="50px"
                width="100%"
                className="-shadow"
              />
            </CustomLink>
          </CustomWrapper>
        </BannerInner>
      </BannerContainer>
    </>
  )
}
