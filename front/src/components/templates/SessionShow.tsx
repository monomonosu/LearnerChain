import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import { PaletteLevel } from '@mui/material'
import sessionContents from '../../functions/constants/common/sessionContent.json'
import theme from '../../../theme/theme'
import { BasicChip } from '../uis/BasicChip'
import { PLATFORM, PASSION } from '../../functions/constants/common/sessionInfo'

const CustomContainer = styled.div`
  padding: 30px 0;
  display: grid;
  gap: 20px;
`

const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`

const ContentWrapper = styled.div`
  width: 374px;
  &.-full-width {
    width: 100%;
  }
`

const SessionTitle = styled.div<SessionSectionStyleProps>`
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  text-align: center;
  background-color: ${({ palette }) => palette?.light};
`

const ContentTitle = styled.div<SessionSectionStyleProps>`
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  background-color: ${({ palette }) => palette?.light};
`

const Content = styled.div`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  word-break: break-all;
  gap: 10px;
`

type SessionSectionStyleProps = {
  palette?: PaletteLevel
}

interface PassionInterFace {
  [key: number]: PaletteLevel
}

const Passion: PassionInterFace = {
  1: theme.palette.customBlue,
  2: theme.palette.customGreen,
  3: theme.palette.customRed,
}

export const SessionShow = () => {
  const router = useRouter()
  const { sessionId } = router.query

  // TODO：仮でダミーデータ取得。API完成次第繋ぎ込み。
  const sessionContent = sessionContents.find((content) => content.id === Number(sessionId))

  return (
    <CustomContainer>
      <SessionTitle palette={Passion[sessionContent?.passionLevel!]}>
        {sessionContent?.title ? sessionContent.title : 'タイトルなし'}
      </SessionTitle>
      <ContentContainer>
        <ContentWrapper>
          <ContentTitle palette={Passion[sessionContent?.passionLevel!]}>ユーザー名</ContentTitle>
          <Content>
            <p>{sessionContent?.userName ? sessionContent.userName : '名無しのユーザーさん'}</p>
          </Content>
        </ContentWrapper>
        <ContentWrapper>
          <ContentTitle palette={Passion[sessionContent?.passionLevel!]}>タグ</ContentTitle>
          <Content>
            {sessionContent?.tags?.map((tag, index) =>
              tag ? <BasicChip key={index} text={tag} /> : <BasicChip key={index} text="タグなし" />
            ) ?? <BasicChip text="タグなし" />}
          </Content>
        </ContentWrapper>
        <ContentWrapper>
          <ContentTitle palette={Passion[sessionContent?.passionLevel!]}>プラットフォーム</ContentTitle>
          <Content>
            {/* TODO:Enum作成 */}
            <p>{sessionContent?.platform}</p>
          </Content>
        </ContentWrapper>
        <ContentWrapper>
          <ContentTitle palette={Passion[sessionContent?.passionLevel!]}>URL（仮）</ContentTitle>
          <Content>
            <p>{sessionContent?.platform_content}</p>
          </Content>
        </ContentWrapper>
        <ContentWrapper>
          <ContentTitle palette={Passion[sessionContent?.passionLevel!]}>ガチ度</ContentTitle>
          <Content>
            {/* TODO:Enum作成 */}
            <p>{sessionContent?.passionLevel}</p>
          </Content>
        </ContentWrapper>
        <ContentWrapper className="-full-width">
          <ContentTitle palette={Passion[sessionContent?.passionLevel!]}>コメント</ContentTitle>
          <Content>
            <p>{sessionContent?.content ? sessionContent.content : 'コメントなし'}</p>
          </Content>
        </ContentWrapper>
      </ContentContainer>
      {/* TODO:一覧に戻るボタン作成？ */}
    </CustomContainer>
  )
}
