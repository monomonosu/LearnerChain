import HeaderMain from '@/components/layouts/HeaderMain'
import { BaseBox } from '@/functions/themes/BaseBox'
import { SessionCreate as SessionCreateTemplate } from '@/components/templates/SessionCreate'

export default function Introduction() {
  return (
    <>
      <HeaderMain />
      <BaseBox>
        <SessionCreateTemplate />
      </BaseBox>
    </>
  )
}
