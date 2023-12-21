import { Titillium_Web } from 'next/font/google'

const titillium = Titillium_Web({
  subsets: ['latin'],
  weight: ['300']
})

export default function Logo() {
  return (
    <span className={titillium.className}>
      React <span className="text-red-700">Denmark</span> Map
    </span>
  )
}
