import { Hero } from './hero'
import { LatestPosts } from './latests-posts'

function HomeComponent() {
  return (
    <main className="c-container">
      <Hero />
      <LatestPosts />
    </main>
  )
}

export { HomeComponent }
