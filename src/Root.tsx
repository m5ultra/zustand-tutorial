import { BearBox } from './components/BearBox'
import { CatBox } from './components/CatBox'
import { CatBox2 } from './components/CatBox2.tsx'
import { CatController } from './components/CatController.tsx'
import { FoodBox } from './components/FoodBox.tsx'

function Root() {
  return (
    <div className="container">
      <h1>Zustand Tutorial</h1>
      <div>
        <BearBox />
        <FoodBox />
      </div>
      <div>
        {/* 测试002 */}
        <CatBox />
        <CatBox2 />
        <CatController />
      </div>
    </div>
  )
}

export default Root
