import '@/styles/css/index.css'
import '@/styles/less/index.less'
import { useEffect } from 'react'

import IconSvgAndroid from '@/components/core/Icon/AssetsSvgIcon/Android'
import { localLoginInfo } from '@/utils/client/createStore'

function App() {
  useEffect(() => {
    localLoginInfo.set({ name: 'qrj' }, Date.now() + 10000)
  }, [])

  return (
    <div className="App">
      <h1 className="text-3xl font-bold">Hello world!</h1>

      <div>
        <IconSvgAndroid />
      </div>
    </div>
  )
}

export default App
