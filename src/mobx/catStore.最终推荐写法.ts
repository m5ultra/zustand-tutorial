// import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { createSelectors } from '../utils'
import { createWithEqualityFn } from 'zustand/traditional'
import {
  createJSONStorage,
  devtools,
  persist,
  subscribeWithSelector,
} from 'zustand/middleware'
import { StateCreator } from 'zustand'

interface ICatStoreState {
  cats: {
    bigCats: number
    smallCats: number
  }
  increaseBigCats: () => void
  increaseSmallCats: () => void
  summeryFunc: () => string
}

// export const useCatsStore = create<ICatStoreState>()((set) => ({
//   cats: {
//     bigCats: 0,
//     smallCats: 0,
//   },
//   increaseBigCats: () =>
//     set((state) => ({
//       cats: { ...state.cats, bigCats: state.cats.bigCats + 1 },
//     })),
//   increaseSmallCats: () =>
//     set((state) => ({
//       cats: { ...state.cats, smallCats: state.cats.smallCats + 1 },
//     })),
// }))

// npm install immer 不需要任何配置
// export const useCatsStore = create<ICatStoreState>()(
//   immer((set, get) => ({
//     cats: {
//       bigCats: 0,
//       smallCats: 0,
//     },
//     increaseBigCats: () =>
//       set((state) => {
//         state.cats.bigCats++
//         // 不需要返回
//       }),
//     increaseSmallCats: () =>
//       set((state) => {
//         state.cats.smallCats++
//       }),
//     summeryFunc: () => {
//       const total = get().cats.bigCats + get().cats.smallCats
//       return `There are ${total} cats in total`
//     },
//   }))
// )

// export const useCatsStore = createSelectors(
//   create<ICatStoreState>()(
//     immer((set, get) => ({
//       cats: {
//         bigCats: 0,
//         smallCats: 0,
//       },
//       increaseBigCats: () =>
//         set((state) => {
//           state.cats.bigCats++
//           // 不需要返回
//         }),
//       increaseSmallCats: () =>
//         set((state) => {
//           state.cats.smallCats++
//         }),
//       summeryFunc: () => {
//         const total = get().cats.bigCats + get().cats.smallCats
//         return `There are ${total} cats in total`
//       },
//     }))
//   )
// )

// withSelector > create[createWithEqualityFn] > immer > devtools > subscribeWithSelector > persist

const createCatSlice: StateCreator<
  ICatStoreState,
  [
    ['zustand/immer', never],
    ['zustand/devtools', unknown],
    ['zustand/subscribeWithSelector', never],
    ['zustand/persist', unknown],
  ]
> = (set, get) => ({
  cats: {
    bigCats: 0,
    smallCats: 0,
  },
  increaseBigCats: () =>
    set((state) => {
      state.cats.bigCats++
      // 不需要返回
    }),
  increaseSmallCats: () =>
    set((state) => {
      state.cats.smallCats++
    }),
  summeryFunc: () => {
    const total = get().cats.bigCats + get().cats.smallCats
    return `There are ${total} cats in total`
  },
})

export const useCatsStore = createSelectors(
  createWithEqualityFn<ICatStoreState>()(
    immer(
      devtools(
        subscribeWithSelector(
          persist(createCatSlice, {
            name: 'cat_store',
            // 只保存一个
            // partialize: (state) => state.bears,
            // 排除
            partialize: (state) =>
              Object.fromEntries(
                Object.entries(state).filter(
                  ([key]) => !['color'].includes(key)
                )
              ),
            storage: createJSONStorage(() => sessionStorage),
          })
        ),
        { enabled: true, name: 'CAT STORE' }
      )
    )
  )
)
