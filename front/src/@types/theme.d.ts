import '@mui/material'

declare module '@mui/material' {
  // テーマを追加する際はここに追加
  interface Theme {
    palette: PaletteOptions
  }

  // 新規でパレットパターンを追加する際はここに追加
  interface PaletteOptions {
    customGrey: PaletteLevel
    customGreen: PaletteLevel
  }

  // グラデーションを追加する際はここに追加
  interface PaletteLevel {
    main: string
    light?: string
    dark?: string
  }
}
