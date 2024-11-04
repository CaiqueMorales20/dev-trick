'use client'

import { Post } from '@/components/shared/post/post'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

function LatestPosts() {
  return (
    <section className="py-20">
      <h2 className="mb-10 text-2xl font-bold">Latests posts</h2>
      <Carousel>
        <CarouselPrevious />
        <CarouselNext />
        <CarouselContent>
          {Array.from({ length: 8 }).map((_, index) => (
            <CarouselItem key={index} className="basis-1/4">
              <Post />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  )
}

export { LatestPosts }
