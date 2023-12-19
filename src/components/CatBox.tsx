import { useCatsStore } from '../mobx/catStore'

export const CatBox = () => {
  // 01.单个导出
  // const bigCats = useCatsStore((state) => state.cats.bigCats)
  // const smallCats = useCatsStore((state) => state.cats.smallCats)
  // const increaseBigCats = useCatsStore((state) => state.increaseBigCats)
  // const increaseSmallCats = useCatsStore((state) => state.increaseSmallCats)
  // const summery = useCatsStore((state) => state.summeryFunc())
  // console.log(summery)

  // 02. 如果需要所有状态
  const {
    cats: { bigCats, smallCats },
    increaseSmallCats,
    increaseBigCats,
    summeryFunc,
  } = useCatsStore()
  console.log(summeryFunc())

  return (
    <div className="box">
      <h1>Cat Box</h1>
      <p>big cats: {bigCats}</p>
      <p>small cats: {smallCats}</p>
      <p>{Math.random()}</p>
      <div>
        <button onClick={increaseBigCats}>add big cats</button>
        <button onClick={increaseSmallCats}>add small cats</button>
      </div>
    </div>
  )
}
