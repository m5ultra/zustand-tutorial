import { useBearStore } from '../mobx/bearStore'
import { useFoodStore } from '../mobx/foodStore.ts'
import { useEffect, useState } from 'react'
import { shallow } from 'zustand/shallow'

export const BearBox = () => {
  const bears = useBearStore((state) => state.bears)
  const increasePopulation = useBearStore((state) => state.increasePopulation)
  const removeAllBears = useBearStore((state) => state.removeAllBears)

  // const { bears, increasePopulation, removeAllBears } = useBearStore()

  // const fish = useFoodStore((state) => state.fish)
  // const [bgColor, setBgColor] = useState<
  //   'lightpink' | 'lightgreen' | undefined
  // >(undefined)
  const [bgColor, setBgColor] = useState<
    'lightpink' | 'lightgreen' | undefined
  >(useFoodStore.getState().fish > 5 ? 'lightgreen' : 'lightpink')

  useEffect(() => {
    // const unsub = useFoodStore.subscribe((state, prevState) => {
    //   console.log(state, prevState, '999')
    //   if (prevState.fish <= 5 && state.fish > 5) {
    //     setBgColor('lightgreen')
    //   } else if (prevState.fish > 5 && state.fish <= 5) {
    //     setBgColor('lightpink')
    //   }
    // })

    const unsubscribe = useFoodStore.subscribe(
      (state) => state.fish,
      (fish, prevFish) => {
        debugger
        if (fish == prevFish) {
          if (fish <= 5) {
            setBgColor('lightpink')
          } else {
            setBgColor('lightgreen')
          }
        }

        if (prevFish <= 5 && fish > 5) {
          setBgColor('lightgreen')
        } else if (prevFish > 5 && fish <= 5) {
          setBgColor('lightpink')
        }
      },
      {
        equalityFn: shallow, // 比较函数
        // fireImmediately: true, // 是否立即执行
      }
    )
    return () => unsubscribe()
  }, [])

  return (
    <div
      className="box"
      // style={{ background: fish > 5 ? 'lightblue' : 'lightpink' }}
      style={{ background: bgColor }}
    >
      <h1>Bear Box</h1>
      <p>bears: {bears}</p>
      <div>{Math.random()}</div>
      <div>
        <button onClick={increasePopulation}>add bear</button>
        <button onClick={removeAllBears}>remove all bears</button>
        {/* 清除持久化的状态 但是不是重置store中数据 */}
        <button onClick={useBearStore.persist.clearStorage}>clear bears</button>
      </div>
    </div>
  )
}
