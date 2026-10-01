import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { FAQ } from '../../lib/constants'

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="relative bg-white py-16 sm:py-24 lg:py-28 border-y border-[#C6A15B]/15">
      <Container>
        <SectionHeading
          eyebrow="TIRA-DÚVIDAS"
          title="DÚVIDAS FREQUENTES"
          subtitle="Confira as respostas para as principais dúvidas sobre o treinamento de Gelos Translúcidos."
        />

        <div className="mt-12 mx-auto max-w-3xl space-y-4">
          {FAQ.map((item, idx) => {
            const isOpen = openIndex === idx
            return (
              <Reveal key={idx} delay={0.04 * idx}>
                <div className="overflow-hidden rounded-2xl border border-[#C6A15B]/25 bg-[#FAF8F3] transition-all duration-200 hover:border-[#C6A15B]">
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="flex w-full cursor-pointer items-center justify-between p-5 text-left transition-colors sm:p-6"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-sm sm:text-base font-bold uppercase text-[#111111] pr-4">
                      {item.question}
                    </span>
                    <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#C6A15B]/40 bg-white text-[#9C7B3C] transition-transform duration-200 ${isOpen ? 'rotate-180 bg-[#FAF8F3]' : ''}`}>
                      <i className="bi bi-chevron-down text-sm" aria-hidden="true" />
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="border-t border-[#C6A15B]/15 px-5 pb-5 pt-3 text-xs sm:text-sm leading-relaxed text-[#555555] sm:px-6 sm:pb-6">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
