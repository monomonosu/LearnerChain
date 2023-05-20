import styled from '@emotion/styled'
import { BasicButton } from '../uis/BasicButton'
import theme from '../../../theme/theme'
import { Theme } from '@mui/material/styles'

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
            <BasicButton
              text="LearnerChainについて"
              palette={theme.palette.customGreen}
              height="50px"
              className="-shadow"
            />
            <BasicButton text="LearnerChainの使い方" palette={theme.palette.customGreen} className="-shadow" />
          </CustomWrapper>
        </BannerInner>
      </BannerContainer>
    </>
  )
}
