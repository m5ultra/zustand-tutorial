import { create } from 'zustand'
import { devtools, persist, subscribeWithSelector } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

const initTestValue = {
  fish: 0,
  mouse: 0,
}

export const useFoodStore = create<typeof initTestValue>()(
  immer(
    devtools(
      subscribeWithSelector(
        persist(() => initTestValue, { name: 'fish_store ' })
      ),
      { name: 'fish_store' }
    )
  )
)

export const addOneFish = () =>
  useFoodStore.setState((state) => ({ fish: state.fish + 1 }))

export const removeOneFish = () =>
  useFoodStore.setState((state) => ({ fish: state.fish - 1 }))

export const removeAllFish = () => useFoodStore.setState({ fish: 0 })
