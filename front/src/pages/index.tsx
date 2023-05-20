import HeaderMain from '@/components/layouts/HeaderMain'
import { BaseBox } from '@/functions/themes/BaseBox'
import { Top } from '@/components/templates/Top'

export default function Home() {
  return (
    <>
      <HeaderMain />
      <BaseBox>
        <Top />
      </BaseBox>
    </>
  )
}
