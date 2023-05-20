import HeaderMain from '@/components/layouts/HeaderMain'
import { BaseBox } from '@/functions/themes/BaseBox'
import { Howto as HowToTemplate } from '@/components/templates/Howto'

export default function HowTo() {
  return (
    <>
      <HeaderMain />
      <BaseBox>
        <HowToTemplate />
      </BaseBox>
    </>
  )
}
