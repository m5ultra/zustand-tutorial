// import { useFoodStore } from '../mobx/foodStore'
import { useFoodStore } from '../mobx/foodStore.ts'

export const FoodBox = () => {
  // const { fish, addOneFish, removeOneFish, removeAllFish } = useFoodStore()

  const fish = useFoodStore((state) => state.fish)
  // 使用场景: 初始化的判断条件
  // const fish = useFoodStore.getState().fish // non-reactive

  const addOneFish = useFoodStore((state) => state.addOneFish)
  const removeOneFish = useFoodStore((state) => state.removeOneFish)
  const removeAllFish = useFoodStore((state) => state.removeAllFish)

  // 使用setState
  const addFiveFish = () => {
    useFoodStore.setState((state) => ({
      fish: state.fish + 5,
    }))
  }

  return (
    <div className="box">
      <h1>Food Box</h1>
      <p>fish: {fish}</p>
      <div>
        <button onClick={addOneFish}>add one fish</button>
        <button onClick={removeOneFish}>remove one fish</button>
        <button onClick={removeAllFish}>remove all fish</button>
        <button onClick={addFiveFish}>add five fish</button>
      </div>
    </div>
  )
}
