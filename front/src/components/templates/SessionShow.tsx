import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import { PaletteLevel } from '@mui/material'
import sessionContents from '../../functions/constants/common/sessionContent.json'
import { BasicChip } from '../uis/BasicChip'
import { BasicButton } from '../uis/BasicButton'
import { BasicLink } from '../uis/BasicLink'
import { PLATFORM, PASSION_COLOR, PASSION_WORD } from '../../functions/constants/common/sessionInfo'
import theme from '../../../theme/theme'

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

export const SessionShow = () => {
  const router = useRouter()
  const { sessionId } = router.query

  // TODO：仮でダミーデータ取得。API完成次第繋ぎ込み。
  const sessionContent = sessionContents.find((content) => content.id === Number(sessionId))

  return (
    <CustomContainer>
      <SessionTitle palette={PASSION_COLOR[sessionContent?.passionLevel!]}>
        {sessionContent?.title ? sessionContent.title : 'タイトルなし'}
      </SessionTitle>
      <ContentContainer>
        <ContentWrapper>
          <ContentTitle palette={PASSION_COLOR[sessionContent?.passionLevel!]}>ユーザー名</ContentTitle>
          <Content>
            <p>{sessionContent?.userName ? sessionContent.userName : '名無しのユーザーさん'}</p>
          </Content>
        </ContentWrapper>
        <ContentWrapper>
          <ContentTitle palette={PASSION_COLOR[sessionContent?.passionLevel!]}>タグ</ContentTitle>
          <Content>
            {sessionContent?.tags?.map((tag, index) =>
              tag ? <BasicChip key={index} text={tag} /> : <BasicChip key={index} text="タグなし" />
            ) ?? <BasicChip text="タグなし" />}
          </Content>
        </ContentWrapper>
        <ContentWrapper>
          <ContentTitle palette={PASSION_COLOR[sessionContent?.passionLevel!]}>プラットフォーム</ContentTitle>
          <Content>
            <p>{PLATFORM[sessionContent?.platform!]}</p>
          </Content>
        </ContentWrapper>
        <ContentWrapper>
          <ContentTitle palette={PASSION_COLOR[sessionContent?.passionLevel!]}>URL（仮）</ContentTitle>
          <Content>
            <p>{sessionContent?.platform_content}</p>
          </Content>
        </ContentWrapper>
        <ContentWrapper>
          <ContentTitle palette={PASSION_COLOR[sessionContent?.passionLevel!]}>ガチ度</ContentTitle>
          <Content>
            <p>{PASSION_WORD[sessionContent?.passionLevel!]}</p>
          </Content>
        </ContentWrapper>
        <ContentWrapper className="-full-width">
          <ContentTitle palette={PASSION_COLOR[sessionContent?.passionLevel!]}>コメント</ContentTitle>
          <Content>
            <p>{sessionContent?.content ? sessionContent.content : 'コメントなし'}</p>
          </Content>
        </ContentWrapper>
      </ContentContainer>
      <BasicLink href="/">
        <BasicButton
          text="セッション一覧に戻る"
          palette={theme.palette.customGrey}
          className="-shadow -text-black"
          height="50px"
          width="100%"
        ></BasicButton>
      </BasicLink>
    </CustomContainer>
  )
}
