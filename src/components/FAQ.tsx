'use client'

import { useState } from 'react'
import { FAQ_ITEMS } from '@/lib/constants'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="mx-auto flex max-w-[700px] flex-col gap-3">
      {FAQ_ITEMS.map((item, i) => (
        <div
          key={i}
          className={`faq-item overflow-hidden rounded-[14px] bg-surface shadow-soft ${openIndex === i ? 'open' : ''}`}
        >
          <button
            className="flex w-full items-center gap-3 px-6 py-5 text-left font-display text-sm font-medium text-text-main transition-colors duration-300 hover:bg-surface-alt"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs text-white">
              Q
            </span>
            <span className="flex-1">{item.question}</span>
            <span
              className={`ml-auto h-2.5 w-2.5 shrink-0 border-r-2 border-b-2 border-text-sub transition-transform duration-300 ${
                openIndex === i ? '-rotate-[135deg]' : 'rotate-45'
              }`}
            />
          </button>
          <div className="faq-answer">
            <div className="px-6 pb-5 pl-16 text-sm leading-relaxed text-text-sub">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
