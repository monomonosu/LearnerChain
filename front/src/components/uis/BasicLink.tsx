import { ReactNode } from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'

const CustomLink = styled(Link)<LinkStyleProps>`
  text-decoration: ${({ textDecoration }) => (textDecoration ? textDecoration : 'none')};
`

type LinkStyleProps = {
  textDecoration?: string
}

type LinkProps = {
  href: string
  children: ReactNode
  textDecoration?: string
}

export const BasicLink: React.FC<LinkProps> = ({ href, children }) => {
  return <CustomLink href={href}>{children}</CustomLink>
}
