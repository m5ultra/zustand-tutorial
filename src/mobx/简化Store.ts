import { create } from 'zustand'
import { devtools, persist, subscribeWithSelector } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

const initTestValue = {
  fish: 0,
  mouse: 0
}

export const useTestStore = create<typeof initTestValue>()(
  immer(
    devtools(
      subscribeWithSelector(
        persist(() => initTestValue, { name: 'test_store ' })
      ),
      { name: 'test_store' }
    )
  )
)

export const addOneFish = () => useTestStore.setState((state) => state.fish + 1)

export const removeOneFish = () =>
  useTestStore.setState((state) => state.fish - 1)

export const removeAllFish = () => useTestStore.setState({ fish: 0 })
