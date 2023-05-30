import React, { memo, FC, ReactNode } from 'react'
import FooterWrapper from './style'

interface propTypes {
  children?: ReactNode
}

const Footer: FC<propTypes> = () => {
  return <FooterWrapper>Footer页面</FooterWrapper>
}

export default memo(Footer)
