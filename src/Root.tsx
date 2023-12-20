import { useEffect, useLayoutEffect } from 'react'
import { BearBox } from './components/BearBox'
import { CatBox } from './components/CatBox'
import { CatBox2 } from './components/CatBox2.tsx'
import { CatController } from './components/CatController.tsx'
import { FoodBox } from './components/FoodBox.tsx'

function Root() {
  const handleCustomClick = (e: Event): void => {
    console.log('自定义事件', e)
  }

  const handleClick = () => {
    console.log('按钮被点击')
  }

  useEffect(() => {
    const customEvent = new CustomEvent('cusClick', {
      bubbles: true,
      cancelable: true,
      composed: true,
      detail: {
        name: 'Dendi',
        age: 80,
      },
    })

    document.addEventListener('cusClick', handleCustomClick)
    const btnEl = document.getElementById('btn')
    console.log(btnEl, 'btnEl')
    if (btnEl) {
      btnEl.onclick = () => {
        console.log('click')
        btnEl?.dispatchEvent(customEvent)
      }
    }
    return () => {
      document.removeEventListener('cusClick', handleCustomClick)
    }
  }, [])

  return (
    <div className="container">
      <h1>Zustand Tutorial</h1>
      <div>
        <BearBox />
        <FoodBox />
      </div>
      <div>
        {/* 测试002 */}console.log();
        <CatBox />
        <CatBox2 />
        <CatController />
        <button id={'btn'} onClick={handleClick}>
          Click me
        </button>
      </div>
    </div>
  )
}

export default Root
