import styled from '@emotion/styled'
import { BasicChip } from '../uis/BasicChip'
import { BasicButton } from '../uis/BasicButton'
import { SessionCard } from '../uis/SessionCard'
import tagIndex from '../../functions/constants/common/tagIndex.json'
import sessionContent from '../../functions/constants/common/sessionContent.json'
import Link from 'next/link'

const CustomContainer = styled.div`
  padding: 30px 0;
  display: grid;
  row-gap: 30px;
`

const TagContainer = styled.div`
  gap: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-shrink: 1;
`

const ControlContainer = styled.div``

// TODO：レスポンシブ対応を行う
const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-shrink: 1;
  row-gap: 30px;
`

export const Top = () => {
  return (
    <CustomContainer>
      <TagContainer>
        {/* TODO：繋ぎ込み後書き換え */}
        {tagIndex.map((tag, i) => (
          <BasicChip key={i} text={tag.nagName} />
        ))}
      </TagContainer>
      <ControlContainer>
        <Link href="/session/create">
          <BasicButton text="セッションを募集する" height="50px" width="100%" className="-shadow" />
        </Link>
      </ControlContainer>
      <CardContainer>
        {sessionContent.map((content, i) => (
          <SessionCard
            key={i}
            userName={content.userName}
            created_at={content.created_at}
            tags={content.tags}
            title={content.title}
            content={content.content}
            passionLevel={content.passionLevel}
          ></SessionCard>
        ))}
      </CardContainer>
    </CustomContainer>
  )
}
