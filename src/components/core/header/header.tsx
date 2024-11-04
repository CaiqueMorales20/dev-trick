import { ThemeToggle } from '../../ui/theme-toggle'
import { NavLink } from './nav-link'

function Header() {
  return (
    <header>
      <div className="c-container header-container h-20 items-center justify-between">
        <span className="text-xl font-bold">Dev Trick</span>

        <nav className="flex gap-6">
          <NavLink href={'/'}>Home</NavLink>
          <NavLink href={'/posts'}>Posts</NavLink>
          <NavLink href={'/author'}>Author</NavLink>
        </nav>

        <ThemeToggle />
      </div>
    </header>
  )
}

export { Header }
