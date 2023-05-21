import styled from '@emotion/styled'
import { BasicChip } from '../uis/BasicChip'
import { BasicButton } from '../uis/BasicButton'
import tagIndex from '../../functions/constants/common/tagIndex.json'

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
        <BasicButton text="セッションを募集する" height="50px" width="100%" className="-shadow" />
      </ControlContainer>
    </CustomContainer>
  )
}
