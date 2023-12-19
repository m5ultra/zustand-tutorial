import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'

type TBearStoreType = {
  bears: number
  color: string
  size: string
  increasePopulation: () => void
  removeAllBears: () => void
  getOwner: () => Promise<string>
  reset: () => void
}

export const useBearStore = create<TBearStoreType>()(
  devtools(
    persist(
      (set) => ({
        bears: 0,
        color: 'red',
        size: 'big',
        increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
        removeAllBears: () => set(() => ({ bears: 0 })),
        // 默认支持异步
        getOwner: async () => {
          const result = await fetch('https://api.github.com/users/1')
          const owner = await result.json()

          console.log(owner.name)
          return owner.name
        },
        // 重置状态
        reset: () => set(() => ({ bears: 0, color: 'red', size: 'big' })),
      }),
      // localStorage sessionStorage
      {
        name: 'bear_store',
        // 只保存一个
        // partialize: (state) => state.bears,
        // 排除
        partialize: (state) =>
          Object.fromEntries(
            Object.entries(state).filter(([key]) => !['color'].includes(key))
          ),
        storage: createJSONStorage(() => sessionStorage),
      }
    ),
    {
      // TODO: devtools 根据环境变量确定是否启用
      enabled: true,
      name: 'BEAR STORE',
    }
  )
)
