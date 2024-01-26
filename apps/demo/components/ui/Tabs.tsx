type TabsProps = {
  tabs: string[]
  activeTab: number
  onSelect: (i: number) => void
}

export default function Tabs({ tabs, activeTab, onSelect }: TabsProps) {
  const handleClick = (i: number) => {
    onSelect(i)
  }

  const tab = tabs.map((tab, i) => {
    return (
      <button
        name={tab}
        onClick={() => handleClick(i)}
        key={i}
        className={`
          ${i === activeTab ? '!font-semibold bg-gray-100' : 'bg-white hover:bg-gray-50'}
          ${'py-4 md:py-2 px-4 md:px-6 inline-flex items-center justify-center text-center focus:bg-primary text-black md:hover:text-[17px] md:text-base font-light capitalize md:w-fit md:active:bg-gray-200 transition-all'}`}
      >
        {tab}
      </button>
    )
  })

  return (
    <div className="w-full md:w-fit md:absolute md:top-4 md:left-10 z-10">
      <p className="uppercase text-gray-600 m-2 hidden md:block text-xs">Select a component</p>
      <nav className="md:w-fit w-full overflow-x-scroll xl:overflow-x-scroll flex shadow-md border border-gray-100 md:max-w-md rounded-lg">
        {tab}
      </nav>
    </div>
  )
}
