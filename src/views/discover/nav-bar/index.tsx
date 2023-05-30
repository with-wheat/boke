import { discoverMenu } from '@/assets/data/local_data'
import React, { memo, FC, ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { NvaBarWrapper } from './style'

interface propTypes {
  children?: ReactNode
}

const NvaBar: FC<propTypes> = () => {
  return (
    <NvaBarWrapper>
      <div className="nav wrap-v1">
        {discoverMenu.map((item) => (
          <div className="item" key={item.title}>
            <NavLink to={item.link}>{item.title}</NavLink>
          </div>
        ))}
      </div>
    </NvaBarWrapper>
  )
}

export default memo(NvaBar)
