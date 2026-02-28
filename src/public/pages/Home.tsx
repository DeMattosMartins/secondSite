import mePhoto from '../../assets/me.png'
import linkedinLogo from '../../assets/linkedin.png'
import githubLogo from '../../assets/github.png'

export const Home = () => {
  return (
    <div className="flex flex-row items-center justify-center gap-20 px-20 h-full">
      {/* Left — text content */}
      <div className="flex flex-col gap-4 text-white">
        <div>
          <h1 className="text-5xl font-bold leading-tight">
            Mateus de Mattos
            <br />
            Martins
          </h1>
          <h2 className="text-white/60 text-lg mt-2">
            Software Full Stack Developer
          </h2>
        </div>

        <div className="w-12 h-px bg-white/30" />

        <p className="text-white/70 text-sm max-w-xs leading-relaxed">
          Estudante de Ciência da Computação, apaixonado por tecnologia,
          automação e inteligência artificial.
        </p>

        <div className="flex flex-row gap-4 pt-2">
          <a
            href="https://www.linkedin.com/in/mateus-de-mattos-martins-57b7a6282/"
            target="_blank"
            rel="noreferrer"
            className="opacity-70 hover:opacity-100 transition-opacity">
            <img src={linkedinLogo} alt="LinkedIn" className="w-7 h-7" />
          </a>
          <a
            href="https://github.com/DeMattosMartins"
            target="_blank"
            rel="noreferrer"
            className="opacity-70 hover:opacity-100 transition-opacity">
            <img src={githubLogo} alt="GitHub" className="w-7 h-7" />
          </a>
        </div>
      </div>

      {/* Right — photo */}
      <div className="flex-shrink-0">
        <img
          src={mePhoto}
          alt="Profile photo"
          className="w-[420px] h-[480px] object-cover rounded-2xl shadow-lg"
        />
      </div>
    </div>
  )
}
