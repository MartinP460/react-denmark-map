import { useState } from 'react'
import { CopyBlock, dracula } from 'react-code-blocks'
import { IconMinus, IconPlus } from '@tabler/icons-react'
import { descriptions } from '@/utils/descriptions'
import Button from '@/components/ui/Button'

export default function Description({ activeTab }: { activeTab: number }) {
  const [code, setCode] = useState(false)

  return (
    <div className="bg-white xl:shadow-lg w-full p-4 border-t border-gray-200 xl:absolute xl:w-fit xl:top-36 xl:left-10 xl:border xl:border-gray-100 flex flex-col z-10 rounded-lg">
      <h3 className="text-3xl">{descriptions[activeTab].name}</h3>
      <p className="text-gray-800 max-w-md mt-2">{descriptions[activeTab].description}</p>
      <Button
        variant="outline"
        onClick={() => setCode(!code)}
        className="inline w-fit text-sm self-end !px-2 !py-1"
      >
        {code ? <IconMinus /> : <IconPlus />}
      </Button>
      <div className="text-sm mt-2">
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
