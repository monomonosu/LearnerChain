import HeaderMain from '@/components/layouts/HeaderMain'
import { BasicTitle } from '@/components/uis/BasicTitle'
import { BaseBox } from '@/functions/themes/BaseBox'
import { SessionShow as SessionShowTemplate } from '@/components/templates/SessionShow'

export default function Show() {
  return (
    <>
      <HeaderMain />
      <BasicTitle text="セッション情報" />
      <BaseBox>
        <SessionShowTemplate />
      </BaseBox>
    </>
  )
}
