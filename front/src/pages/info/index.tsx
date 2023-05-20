import HeaderMain from '@/components/layouts/HeaderMain'
import { BaseBox } from '@/functions/themes/BaseBox'
import { Info as InfoTemplate } from '@/components/templates/Info'

export default function Introduction() {
  return (
    <>
      <HeaderMain />
      <BaseBox>
        <InfoTemplate />
      </BaseBox>
    </>
  )
}
