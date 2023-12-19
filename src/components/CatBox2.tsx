import { useCatsStore } from '../mobx/catStore'
import { shallow } from 'zustand/shallow'

export const CatBox2 = () => {
  // 不会有多余渲染
  // const bigCats = useCatsStore((state) => state.cats.bigCats)

  // 会有多余渲染 smallCats
  // const {
  //   cats: { bigCats },
  // } = useCatsStore()

  const bigCats = useCatsStore((state) => [state.cats.bigCats], shallow)

  return (
    <div className="box">
      <h1>Partial States from catStore</h1>
      <p>big cats: {bigCats}</p>
      <p>{Math.random()}</p>
    </div>
  )
}
