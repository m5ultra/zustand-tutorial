import { create } from 'zustand'

type TBearStoreType = {
  bears: number
  increasePopulation: () => void
  removeAllBears: () => void
  getOwner: () => Promise<string>
}

export const useBearStore = create<TBearStoreType>()((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set(() => ({ bears: 0 })),
  // 默认支持异步
  getOwner: async () => {
    const result = await fetch('https://api.github.com/users/1')
    const owner =  await result.json()

    console.log(owner.name)
    return owner.name
  }
}))
