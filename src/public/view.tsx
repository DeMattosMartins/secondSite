import { Tabs, TabsContent } from './components/tabs'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Education } from './pages/Education'
import { ProfessionalExperience } from './pages/Profissional'
import { TabsHeader } from './components/Header'
import { Footer } from './components/Footer'

export const IntialPageView = () => {
  return (
    <div className="w-full bg-[#808080] h-dvh flex flex-col">
      <Tabs
        defaultValue="Home"
        className="w-full flex-1 bg-[#808080] pt-[10px] flex flex-col overflow-hidden">
        <TabsHeader />
        <TabsContent value="Home" className="flex-1 overflow-auto">
          <Home />
        </TabsContent>
        <TabsContent value="About" className="flex-1 overflow-auto">
          <About />
        </TabsContent>
        <TabsContent value="Education" className="flex-1 overflow-auto">
          <Education />
        </TabsContent>
        <TabsContent value="ProfessionalExperience" className="flex-1 overflow-auto">
          <ProfessionalExperience />
        </TabsContent>
      </Tabs>
      <Footer />
    </div>
  )
}
