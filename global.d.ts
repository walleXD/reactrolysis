declare module 'rebass' {
  import * as r from 'rebass/index'

  import { CSSObject } from '@emotion/core'
  export interface BaseProps extends r.BaseProps {
    sx?: CSSObject
  }

  export default r
}
