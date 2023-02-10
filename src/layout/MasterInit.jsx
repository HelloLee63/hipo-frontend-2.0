import {useEffect, useRef} from 'react'
// import {
//   // MenuComponent,
//   // ScrollComponent,
//   // ScrollTopComponent,
//   // ToggleComponent,
// } from '../assets/ts/components'
import { DrawerComponent, StickyComponent } from '../_metronic/assets/js/components'
import {useLayout} from './core'

export function MasterInit() {
  const {config} = useLayout()
  const isFirstRun = useRef(true)
  const pluginsInitialization = () => {
    isFirstRun.current = false
    setTimeout(() => {
      // ToggleComponent.bootstrap()
      // ScrollTopComponent.bootstrap()
      DrawerComponent.bootstrap()
      StickyComponent.bootstrap()
      // MenuComponent.bootstrap()
      // ScrollComponent.bootstrap()
    }, 200)
  }

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false
      pluginsInitialization()
    }
  }, [config])

  return <></>
}