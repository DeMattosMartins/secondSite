import futPhoto from '../../assets/fut.jpeg'
import jaVendeuPhoto from '../../assets/jaVendeu.jpeg'
import portugalPhoto from '../../assets/portugal.jpeg'
import mePhoto from '../../assets/me.png'
import { AboutSection } from '../components/AboutSection'

export const About = () => {
  return (
    <div className="w-full flex flex-col items-center gap-16 py-12 px-6">
      <AboutSection
        image={mePhoto}
        imageAlt="Minha foto"
        title="Desenvolvedor de Software Full Stack"
        paragraphs={[
        'Atualmente, atuo como Desenvolvedor de Software Full Stack, trabalhando no desenvolvimento de soluções digitais completas, desde a interface até a lógica de negócio e integração com sistemas. No meu dia a dia, lido com desafios reais de produto, arquitetura, organização de código e construção de funcionalidades escaláveis e bem estruturadas.',
        'Tenho foco em qualidade, performance e boas práticas de desenvolvimento, buscando sempre criar soluções eficientes, organizadas e sustentáveis a longo prazo. Essa experiência tem fortalecido minha visão sistêmica, minha capacidade de resolver problemas complexos e minha maturidade profissional dentro da área de tecnologia.',
      ]}
      />

      <div className="w-full max-w-4xl h-px bg-white/10" />

      <AboutSection
        image={jaVendeuPhoto}
        imageAlt="Foto na Já Vendeu"
        title="Primeira experiência profissional"
        paragraphs={[
          'Minha primeira experiência profissional como vendedor foi um divisor de águas no meu desenvolvimento pessoal. Foi nesse ambiente que aprendi a lidar com pessoas, pressão por resultados e desafios reais do mercado de trabalho. No início, enfrentei dificuldades, mas foi exatamente isso que me fez evoluir, desenvolver maturidade emocional e construir uma postura mais profissional.',
          'Esse período me proporcionou habilidades fundamentais como comunicação estratégica, escuta ativa, negociação, inteligência emocional e organização. Aprendi a entender necessidades, apresentar soluções de forma clara e trabalhar com metas, prazos e responsabilidade — competências que hoje aplico diretamente na área de tecnologia e desenvolvimento de software.',
        ]}
        imageRight
      />

      <div className="w-full max-w-4xl h-px bg-white/10" />

      <AboutSection
        image={portugalPhoto}
        imageAlt="Foto em Portugal"
        title="Período em Portugal"
        paragraphs={[
          'Minha experiência em Portugal representou um grande salto no meu crescimento pessoal e mental. Viver fora do país, longe da família e da zona de conforto, me forçou a amadurecer rapidamente e desenvolver autonomia, responsabilidade e independência. Aprendi a lidar com novos desafios, culturas diferentes e realidades totalmente fora do que eu estava acostumado.',
          'Esse período fortaleceu minha capacidade de adaptação, resiliência e autogestão. Enfrentar dificuldades sozinho me ensinou a confiar mais em mim mesmo, a tomar decisões com mais consciência e a construir uma mentalidade mais forte, estratégica e focada em evolução contínua.',
        ]}
      />

      <div className="w-full max-w-4xl h-px bg-white/10" />

      <AboutSection
        image={futPhoto}
        imageAlt="Foto jogando futebol"
        title="Futebol"
        paragraphs={[
          'O futebol sempre foi uma base importante na formação do meu caráter e da minha mentalidade. Muito além do esporte, ele me ensinou valores que levo diretamente para minha vida profissional, como disciplina, comprometimento, foco e trabalho em equipe. Dentro de campo, aprendi a lidar com pressão, tomar decisões rápidas e manter a clareza mesmo em situações adversas — habilidades essenciais no mundo profissional.',
          'A rotina de treinos, a busca constante por evolução e a competitividade saudável moldaram minha mentalidade de crescimento. Isso me ensinou a não me acomodar, a buscar sempre melhorar e a entender que consistência e esforço diário são fatores decisivos para alcançar resultados sólidos, tanto no esporte quanto na carreira.',
        ]}
        imageRight
      />
    </div>
  )
}
