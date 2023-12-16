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
          ${i === activeTab ? '!font-semibold' : ''}
          ${'py-4 md:py-2 px-4 md:px-6 inline-flex items-center justify-center text-center focus:bg-primary text-black text-sm md:text-base font-light capitalize bg-white md:w-fit'}`}
      >
        {tab}
      </button>
    )
  })

  return (
    <div className="w-full md:w-fit md:absolute md:top-2 md:left-10">
      <p className="text-xs uppercase text-gray-500 m-2 hidden md:block">Select a component</p>
      <nav className="md:w-fit w-full overflow-x-scroll xl:overflow-x-scroll flex shadow-md border border-gray-100 xl:max-w-md">
        {tab}
      </nav>
    </div>
  )
}
