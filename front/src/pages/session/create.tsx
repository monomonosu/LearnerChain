import HeaderMain from '@/components/layouts/HeaderMain'
import { BasicTitle } from '@/components/uis/BasicTitle'
import { BaseBox } from '@/functions/themes/BaseBox'
import { SessionCreate as SessionCreateTemplate } from '@/components/templates/SessionCreate'

export default function Introduction() {
  return (
    <>
      <HeaderMain />
      <BasicTitle text="セッションの募集" />
      <BaseBox>
        <SessionCreateTemplate />
      </BaseBox>
    </>
  )
}
