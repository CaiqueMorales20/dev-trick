import Image from 'next/image'

function Post() {
  return (
    <div>
      <Image
        className="h-auto w-full"
        src={'/hero-banner.png'}
        alt=""
        width={1500}
        height={1000}
      />
      <div className="bg-muted p-4 text-foreground">
        <h2 className="mb-3 text-base font-bold">
          Mastering React State Management with useState Hook
        </h2>
        <p className="text-sm">
          If we have to say in resume its an hook from the React API. When
          called “useState” create a “state variable”...
        </p>
      </div>
    </div>
  )
}

export { Post }
