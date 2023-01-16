import Image from 'next/image'

export default function Page() {
  return (
    <div className="relative">
      {/* <div className="absolute inset-0 -z-10">
        <div style={{ opacity: 1, transform: 'none' }}>
          <div className="relative flex justify-center overflow-hidden">
            <Image
              src="/bgMain.png"
              priority
              alt=""
              width={1440}
              height={800}
              className="h-auto w-full"
            />
          </div>
        </div>
      </div> */}
      <div className="mx-auto mt-2 max-w-7xl">
        <h1 className="py-2">
          <span className="bg-gradient-to-r from-white/60 to-white/80 bg-clip-text text-3xl text-transparent backdrop-blur">
            Frank
          </span>
          <span className="bg-gradient-to-r from-brand-400 to-brand-600 bg-clip-text text-3xl font-extrabold text-transparent">
            Wissink
          </span>
        </h1>
      </div>
    </div>
  )
}
