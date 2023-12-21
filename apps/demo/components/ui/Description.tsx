import { useState } from 'react'
import { CopyBlock, dracula } from 'react-code-blocks'
import { IconMinus, IconPlus } from '@tabler/icons-react'
import { descriptions } from '../../utils/descriptions'

export default function Description({ activeTab }: { activeTab: number }) {
  const [code, setCode] = useState(false)

  return (
    <div className="bg-white xl:shadow-lg w-full p-4 border-t border-gray-200 xl:absolute xl:w-fit xl:top-36 xl:left-10 xl:border xl:border-gray-100 flex flex-col z-10 rounded-lg">
      <h3 className="text-3xl font-light">{descriptions[activeTab].name}.</h3>
      <p className="text-gray-700 max-w-md mt-2">{descriptions[activeTab].description}</p>
      <button
        name="Toggle code"
        onClick={() => setCode(!code)}
        className="border-t-2 border-x-2 rounded-t px-1.5 py-1 border-[#282a36] text-gray-800 bg-gray-100 hover:bg-gray-200 hover:text-gray-900 text-sm self-end transition-colors"
      >
        {code ? <IconMinus /> : <IconPlus />}
      </button>
      <div className="text-sm">
        {code ? (
          <CopyBlock
            text={descriptions[activeTab].code.full}
            language="jsx"
            theme={dracula}
            customStyle={{ padding: '12px 8px', overflowX: 'scroll' }}
          />
        ) : (
          <CopyBlock
            text={descriptions[activeTab].code.thumbnail}
            language="jsx"
            theme={dracula}
            customStyle={{ padding: '12px 8px', overflowX: 'scroll' }}
          />
        )}
      </div>
    </div>
  )
}
