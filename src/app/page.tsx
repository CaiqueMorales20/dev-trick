import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/ui/theme-toggle'

export default function Home() {
  return (
    <div className="w-screen h-screen flex items-center justify-center gap-6">
      <Button>Send</Button>
      <ThemeToggle />
    </div>
  )
}
