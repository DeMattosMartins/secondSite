export const Education = () => {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-10 text-white">

        {/* Title */}
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-wide">FORMAÇÃO</h1>
          <div className="w-16 h-[2px] bg-white/30 mx-auto mt-3" />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-6 text-center max-w-2xl text-white/80 leading-relaxed">

          <div>
            <h2 className="font-semibold text-white">
              FEUP — Faculdade de Engenharia da Universidade do Porto
            </h2>
            <p className="text-sm text-white/60">
              Porto, Portugal — Licenciatura em Engenharia Eletrotécnica e de Computadores (interrompido)
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-white">
              FIAP — Faculdade de Informática e Administração Paulista
            </h2>
            <p className="text-sm text-white/60">
              São Paulo, SP — Bacharelado em Ciências da Computação (cursando)
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-white">
              ALURA — Plataforma Online
            </h2>
            <p className="text-sm text-white/60">
              Cursos de Programação (06/2023 – 06/2025)
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}