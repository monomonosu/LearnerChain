import styled from '@emotion/styled'
import { Card, CardHeader, Avatar, CardContent, PaletteLevel } from '@mui/material'
import { BasicChip } from './BasicChip'
import theme from '../../../theme/theme'

const CustomCard = styled(Card)<SessionCardStyleProps>`
  width: ${({ width }) => width};
  background: linear-gradient(135deg, ${({ palette }) => palette?.light} 0%, ${({ palette }) => palette?.dark} 100%);
  border-radius: 0px;
  color: white;
`

const CustomCardHeader = styled(CardHeader)`
  padding-bottom: 8px;
`

const CustomCardContent = styled(CardContent)`
  padding: 8px 16px;
  &.-small {
    font-size: 12px;
  }
  &.-bg-white {
    background: ${theme.palette.customGrey.main};
  }
`

const CustomHr = styled.hr`
  border-top: none;
  margin: 0 16px;
`

type SessionCardStyleProps = {
  width: string
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

type SessionCardProps = {
  userName?: string | null
  title?: string | null
  created_at: Date | string
  tags?: Array<string> | null
  content?: string | null
  passionLevel: number
  width?: string
  palette?: PaletteLevel
}

export const SessionCard: React.FC<SessionCardProps> = ({
  userName,
  title,
  created_at,
  tags = null,
  content,
  passionLevel,
  width = '230px',
}) => {
  const avatarChar = userName ? userName.slice(0, 1) : '名'
  // TODO：日付フォーマットの実装
  const convertDate = String(created_at)
  return (
    <CustomCard width={width} palette={Passion[passionLevel]}>
      <CustomCardHeader
        //   TODO：アップロードした画像との繋ぎ込み
        avatar={<Avatar aria-label="recipe">{avatarChar}</Avatar>}
        title={userName ? userName : '名無しのユーザーさん'}
      />
      <CustomHr />
      <CustomCardContent>{title ? title : 'タイトルなし'}</CustomCardContent>
      <CustomCardContent className="-bg-white">
        {tags ? (
          tags?.map((tag, i) =>
            tag ? (
              <BasicChip key={i} className="-text-white" text={tag} palette={Passion[passionLevel]} />
            ) : (
              <BasicChip key={i} className="-text-white" text="タグなし" palette={Passion[passionLevel]} />
            )
          )
        ) : (
          <BasicChip className="-text-white" text="タグなし" palette={Passion[passionLevel]} />
        )}
      </CustomCardContent>
      <CustomCardContent className="-small">{content ? content : 'コメントなし'}</CustomCardContent>
    </CustomCard>
  )
}
