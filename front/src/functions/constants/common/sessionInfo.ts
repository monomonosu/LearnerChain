import { PaletteLevel } from '@mui/material'
import theme from '../../../../theme/theme'

// プラットフォーム
interface PlatformType {
  'Google Meet': string
  Skype: string
  Slack: string
}

export const PLATFORM: { [key: number]: keyof PlatformType } = {
  0: 'Google Meet',
  1: 'Skype',
  2: 'Slack',
}

// ガチ度(カラーパターン)
interface PassionInterFace {
  [key: number]: PaletteLevel
}

export const PASSION_COLOR: PassionInterFace = {
  1: theme.palette.customBlue,
  2: theme.palette.customGreen,
  3: theme.palette.customRed,
}

// ガチ度(文言)
interface PassionWordType {
  まったり: string
  そこそこ: string
  ガチ: string
}

export const PASSION_WORD: { [key: number]: keyof PassionWordType } = {
  1: 'まったり',
  2: 'そこそこ',
  3: 'ガチ',
}
