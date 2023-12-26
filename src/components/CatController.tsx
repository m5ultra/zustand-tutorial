import {
  increaseBigCats,
  increaseSmallCats,
  useCatsStore,
} from '../mobx/catStore.最终推荐写法.ts'
// import { shallow } from 'zustand/shallow'

export const CatController = () => {
  // 01.会有比不要渲染
  // const { increaseBigCats, increaseSmallCats } = useCatsStore()

  // withSelectors
  const { bigCats, smallCats } = useCatsStore.use.cats()
  // const increaseSmallCats = useCatsStore.use.increaseSmallCats()

  // 03.0带比较函数
  // const { increaseBigCats, increaseSmallCats } = useCatsStore(
  //   (status) => ({
  //     increaseBigCats: status.increaseBigCats,
  //     increaseSmallCats: status.increaseSmallCats,
  //   }),
  //   shallow
  // )

  // 03.1带比较函数
  // const [increaseBigCats, increaseSmallCats] = useCatsStore(
  //   (state) => [state.increaseBigCats, state.increaseSmallCats],
  //   shallow
  // )

  return (
    <div className="box">
      <h1>Cat Controller</h1>
      <p>{Math.random()}</p>
      <p>{bigCats}</p>
      <p>{smallCats}</p>
      <div>
        <button onClick={increaseBigCats}>add big cats</button>
        <button onClick={increaseSmallCats}>add small cats</button>
      </div>
    </div>
  )
}
