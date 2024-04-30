'use client'

import { IconExternalLink } from '@tabler/icons-react'

export default function Footer() {
  return (
    <footer className="w-full mt-auto h-full pt-4">
      <nav className="xl:bg-black bg-gray-700 xl:rounded-lg shadow-xl mx-auto xl:w-fit xl:mb-12 xl:hover:scale-[1.03] transition-transform duration-150">
        <ul className="flex items-center justify-center w-full text-gray-100 py-3 xl:py-0 flex-wrap">
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/MartinP460/react-denmark-map/issues/new?assignees=&labels=feature+request&projects=&template=feature_request.md&title="
              className="py-3 px-4 hover:bg-gray-500 flex items-end gap-1 rounded xl:rounded-l-lg hover:text-white transition-colors"
            >
              Request feature
              <IconExternalLink size="12" className="mb-1" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/MartinP460/react-denmark-map/issues/new?assignees=&labels=bug&projects=&template=bug_report.md&title="
              className="py-3 px-4 hover:bg-gray-500 flex items-end gap-1 rounded hover:text-white transition-colors"
            >
              Report issue
              <IconExternalLink size="12" className="mb-1" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/MartinP460/react-denmark-map/blob/main/CONTRIBUTING.md"
              className="py-3 px-4 hover:bg-gray-500 flex items-end gap-1 rounded xl:rounded-r-lg hover:text-white transition-colors"
            >
              Contributing
              <IconExternalLink size="12" className="mb-1" />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  )
}
