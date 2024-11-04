import Image from 'next/image'

function Hero() {
  return (
    <main className="mt-20">
      <div className="grid h-max grid-cols-2 overflow-hidden rounded-lg">
        <Image
          className="h-auto w-full"
          src={'/hero-banner.png'}
          alt=""
          width={1500}
          height={1000}
        />

        <div className="flex h-full w-full flex-col justify-center bg-muted px-6">
          <h2 className="text-sm font-bold text-foreground/70">React Hooks</h2>
          <h1 className="mb-6 text-4xl font-black text-foreground">
            Mastering React State Management with useState Hook
          </h1>
          <p className="text-muted-foreground">
            If we have to say in resume its an hook from the React API. When
            called “useState” create a “state variable”, that receives a single
            argument, the initial state. The useState create 2 variables, the
            first one...
          </p>
        </div>
      </div>
    </main>
  )
}

export { Hero }
