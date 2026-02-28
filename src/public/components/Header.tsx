import { TabsList, TabsTrigger } from "./tabs"

const TAB_ITEMS = [
  { value: 'Home', label: 'Home' },
  { value: 'About', label: 'Sobre' },
  { value: 'Education', label: 'Formação' },
  { value: 'ProfessionalExperience', label: 'Profissional' },
]

export const TabsHeader = () => {
  return (
    <div className="w-[calc(100%-20px)] h-[30px] text-white m-[10px] rounded-[5px] flex items-center px-2">
      <TabsList className="flex gap-1 bg-transparent w-full pl-[calc(100%-60%)]">
        {TAB_ITEMS.map(tab => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className="px-3 py-1 text-sm rounded-[4px] text-white/60 hover:text-white transition-colors cursor-pointer data-[state=active]:bg-white/15 data-[state=active]:text-white">
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </div>
  )
}
