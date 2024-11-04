'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const baseVariant = 'text-md'
  const activeVariant = 'font-bold'

  const isLinkActive = href === pathname

  return (
    <Link
      className={twMerge(baseVariant, isLinkActive && activeVariant)}
      href={href}
    >
      {children}
    </Link>
  )
}

export { NavLink }
