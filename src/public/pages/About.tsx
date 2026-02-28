import { useTranslation } from 'react-i18next'
import futPhoto from '../../assets/fut.jpeg'
import jaVendeuPhoto from '../../assets/jaVendeu.jpeg'
import portugalPhoto from '../../assets/portugal.jpeg'
import mePhoto from '../../assets/me.png'
import { AboutSection } from '../components/AboutSection'

export const About = () => {
  const { t } = useTranslation()

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col gap-12 md:gap-16 py-8 md:py-12 px-4 md:px-6">
      <AboutSection
        image={mePhoto}
        imageAlt="Minha foto"
        title={t('about.dev_title')}
        paragraphs={[t('about.dev_p1'), t('about.dev_p2')]}
      />

      <div className="w-full h-px bg-white/10" />

      <AboutSection
        image={jaVendeuPhoto}
        imageAlt="Foto na Já Vendeu"
        title={t('about.first_job_title')}
        paragraphs={[t('about.first_job_p1'), t('about.first_job_p2')]}
        imageRight
      />

      <div className="w-full h-px bg-white/10" />

      <AboutSection
        image={portugalPhoto}
        imageAlt="Foto em Portugal"
        title={t('about.portugal_title')}
        paragraphs={[t('about.portugal_p1'), t('about.portugal_p2')]}
      />

      <div className="w-full h-px bg-white/10" />

      <AboutSection
        image={futPhoto}
        imageAlt="Foto jogando futebol"
        title={t('about.football_title')}
        paragraphs={[t('about.football_p1'), t('about.football_p2')]}
        imageRight
      />
    </div>
  )
}
