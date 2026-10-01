import { motion } from 'framer-motion'
import { CHECKOUT_URL, PRECO_GELOS } from '../../lib/constants'

export default function StickyMobileCta() {
  const isCustomPrice = PRECO_GELOS && !PRECO_GELOS.includes('XXX')

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.35 }}
      className="fixed inset-x-0 bottom-0 z-40 border-t border-[#C6A15B]/30 bg-white/95 px-4 py-2.5 backdrop-blur-md shadow-lg lg:hidden"
      style={{
        paddingBottom: 'max(0.625rem, env(safe-area-inset-bottom))',
        paddingLeft: 'max(1rem, env(safe-area-inset-left))',
        paddingRight: 'max(1rem, env(safe-area-inset-right))',
      }}
    >
      <a
        href={CHECKOUT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-gold-gradient text-sm font-bold tracking-wide text-[#111111] shadow-gold active:scale-[0.98] transition-transform duration-150"
      >
        <i className="bi bi-gem text-base text-[#111111]" aria-hidden="true" />
        {isCustomPrice ? `GARANTIR POR ${PRECO_GELOS}` : 'QUERO APRENDER'}
      </a>
    </motion.div>
  )
}
