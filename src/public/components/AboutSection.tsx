interface SectionProps {
  image: string
  imageAlt: string
  title: string
  paragraphs: string[]
  imageRight?: boolean
}

export const AboutSection = ({
  image,
  imageAlt,
  title,
  paragraphs,
  imageRight = false,
}: SectionProps) => {
  const imageEl = (
    <img
      src={image}
      alt={imageAlt}
      className="w-full max-w-[260px] sm:max-w-[280px] md:w-[280px] h-[280px] sm:h-[320px] object-cover rounded-2xl shadow-lg flex-shrink-0 mx-auto md:mx-0"
    />
  )

  const textEl = (
    <div className="max-w-md flex flex-col gap-3 text-center md:text-left items-center md:items-start">
      <h2 className="text-white text-2xl md:text-3xl font-bold">{title}</h2>
      {paragraphs.map((p, i) => (
        <p key={i} className="text-white/75 text-base md:text-lg leading-relaxed">
          {p}
        </p>
      ))}
    </div>
  )

  return (
    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full max-w-4xl">
      {imageRight ? (
        <>
          {textEl}
          {imageEl}
        </>
      ) : (
        <>
          {imageEl}
          {textEl}
        </>
      )}
    </div>
  )
}
