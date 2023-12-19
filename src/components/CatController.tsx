import { useCatsStore } from '../mobx/catStore'
import { shallow } from 'zustand/shallow'

export const CatController = () => {
  // 01.会有比不要渲染
  // const { increaseBigCats, increaseSmallCats } = useCatsStore()

  // withSelectors
  // const increaseBigCats = useCatsStore.use.increaseBigCats()
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
  const [increaseBigCats, increaseSmallCats] = useCatsStore(
    (state) => [state.increaseBigCats, state.increaseSmallCats],
    shallow
  )

  return (
    <div className="box">
      <h1>Cat Controller</h1>
      <p>{Math.random()}</p>
      <div>
        <button onClick={increaseBigCats}>add big cats</button>
        <button onClick={increaseSmallCats}>add small cats</button>
      </div>
    </div>
  )
}
