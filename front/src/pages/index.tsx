import HeaderMain from '@/components/layouts/HeaderMain'
import TopBanner from '@/components/layouts/TopBanner'
import { BaseBox } from '@/functions/themes/BaseBox'
import { Top } from '@/components/templates/Top'

export default function Home() {
  return (
    <>
      <HeaderMain />
      <TopBanner />
      <BaseBox>
        <Top />
      </BaseBox>
    </>
  )
}
