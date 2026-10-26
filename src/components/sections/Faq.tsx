import { faqs } from '../../data/content'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/Accordion'
import { SectionHeading } from '../ui/SectionHeading'

export function Faq() {
  return (
    <section id="faq" className="bg-card py-16 sm:py-24">
      <div className="section-shell max-w-4xl">
        <SectionHeading eyebrow="Tire suas dúvidas">Perguntas frequentes</SectionHeading>
        <Accordion type="single" collapsible className="border-t border-border">
          {faqs.map(([question, answer], i) => (
            <AccordionItem key={question} value={`item-${i}`}>
              <AccordionTrigger className="min-h-14 gap-4 py-5 text-left text-base hover:no-underline">{question}</AccordionTrigger>
              <AccordionContent className="max-w-2xl pb-6 leading-7 text-muted-foreground">{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
