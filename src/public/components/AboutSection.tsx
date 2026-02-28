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
      className="w-[280px] h-[320px] object-cover rounded-2xl shadow-lg flex-shrink-0"
    />
  )

  const textEl = (
    <div className="max-w-md flex flex-col gap-3">
      <h2 className="text-white text-2xl font-bold">{title}</h2>
      {paragraphs.map((p, i) => (
        <p key={i} className="text-white/75 text-sm leading-relaxed">
          {p}
        </p>
      ))}
    </div>
  )

  return (
    <div className="flex flex-row items-center gap-12 w-full max-w-4xl">
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