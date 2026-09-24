/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

import 'vue'

declare module 'vue' {
  interface ComponentCustomProperties {
    $t: (key: string) => string
  }
}
