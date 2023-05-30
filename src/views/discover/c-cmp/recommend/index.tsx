import React, { memo, FC, ReactNode, useEffect } from 'react'

import { Button } from 'antd'

import { useAppSelect, appShallowEqual, useAppDispatch } from '@/store'
import { setName } from '@/store/modules/discover'
import { getTest } from '@/service/modules/demo'

interface propTypes {
  children?: ReactNode
}

const Recommend: FC<propTypes> = () => {
  const { name } = useAppSelect(
    (state) => ({
      name: state.discover.name
    }),
    appShallowEqual
  )

  const dispatch = useAppDispatch()

  useEffect(() => {
    // getTest().then((res) => {
    //   console.log(res)
    // })
  })

  const setNames = () => {
    dispatch(setName('111'))
  }
  return (
    <div>
      Recommend--{name}
      <button onClick={() => setNames()}>修改名字</button>
      <Button type="primary">Primary Button</Button>
      <Button>Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
    </div>
  )
}

export default memo(Recommend)
