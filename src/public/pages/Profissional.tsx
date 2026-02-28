export const ProfessionalExperience = () => {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-10 text-white">

        {/* Title */}
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-wide">EXPERIÊNCIA PROFISSIONAL</h1>
          <div className="w-24 h-[2px] bg-white/30 mx-auto mt-3" />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-8 text-center max-w-2xl text-white/80 leading-relaxed">

          {/* KRUZER - Junior */}
          <div>
            <h2 className="font-semibold text-white">
              KRUZER, São Paulo — Desenvolvedor Júnior
            </h2>
            <p className="text-sm text-white/60">12/2025 – atualmente</p>
            <ul className="mt-2 text-sm text-white/70 space-y-1">
              <li>• Atuação em ambiente de desenvolvimento com foco em desenvolvimento de software</li>
              <li>• Desenvolvimento de habilidades em <span className="text-white">JavaScript, TypeScript e React</span></li>
            </ul>
          </div>

          {/* KRUZER - Intern */}
          <div>
            <h2 className="font-semibold text-white">
              KRUZER, São Paulo — Estágio em Desenvolvimento
            </h2>
            <p className="text-sm text-white/60">05/2025 – 12/2025</p>
            <ul className="mt-2 text-sm text-white/70 space-y-1">
              <li>• Atuação em ambiente de desenvolvimento com foco em suporte técnico e desenvolvimento de software</li>
              <li>• Desenvolvimento de habilidades em <span className="text-white">JavaScript, TypeScript e React</span></li>
            </ul>
          </div>

          {/* JA VENDEU */}
          <div>
            <h2 className="font-semibold text-white">
              JA VENDEU, São Paulo — Vendedor Pleno
            </h2>
            <p className="text-sm text-white/60">12/2022 – 06/2024</p>
            <ul className="mt-2 text-sm text-white/70 space-y-1">
              <li>• Evolução rápida na empresa com duas promoções</li>
              <li>• Desenvolvimento de competências em <span className="text-white">comunicação, resolução de problemas e trabalho em equipe</span></li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}