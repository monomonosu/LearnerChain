import styled from '@emotion/styled'
import { BasicInput } from '../uis/BasicInput'
import { BasicTextField } from '../uis/BasicTextField'
import { BasicButton } from '../uis/BasicButton'

const CustomContainer = styled.div`
  padding: 30px 0;
  display: grid;
  gap: 20px;
`

export const SessionCreate = () => {
  return (
    <>
      <CustomContainer>
        <BasicInput label="名前" name="name" placeholder="もくもく 太郎" width="50%" />
        <BasicInput label="タイトル" name="title" placeholder="もくもく会" width="50%" />
        {/* TODO：タグロジック作成 */}
        <BasicInput label="タグ" name="tag" placeholder="ほげほげ" width="50%" />
        {/* TODO：ラジオボタンに切り替え */}
        <BasicInput label="プラットフォーム" name="platform" placeholder="ほげほげ" width="50%" />
        {/* TODO：プラットフォームによって切り替え処理が必要であれば作成する。 */}
        <BasicInput label="URL" name="url" placeholder="ほげほげ" width="50%" />
        {/* TODO：ラジオボタンに切り替え */}
        <BasicInput label="ガチ度" name="passion" placeholder="ほげほげ" width="50%" />
        <BasicTextField label="コメント" name="comment" placeholder="コメント" width="100%" />
        <BasicButton text="セッションを募集する" height="50px" />
      </CustomContainer>
    </>
  )
}
