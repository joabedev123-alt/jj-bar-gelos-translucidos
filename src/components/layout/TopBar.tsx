export default function TopBar() {
  return (
    <div className="w-full border-b border-[#C6A15B]/30 bg-[#F7EBCB] py-2.5 text-[#111111]">
      <div className="mx-auto flex max-w-container items-center justify-center gap-2.5 px-4 text-center">
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#9C7B3C] opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-[#9C7B3C]" />
        </span>
        <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#111111] sm:text-xs sm:tracking-[0.18em]">
          INSCRIÇÕES ABERTAS • TREINAMENTO DE GELOS TRANSLÚCIDOS
        </span>
      </div>
    </div>
  )
}
