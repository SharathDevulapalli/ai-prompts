import { useMemo, useState } from 'react';
import { TemplateId, templates } from './theme/templates';

const sampleContent = {
  title: 'Designing Rich Editorial Experiences',
  subtitle:
    'Responsive typographic rhythms, column-based layouts, and evocative colors for immersive storytelling.',
  body: `
  Magazine design blends visual hierarchy with storytelling. By combining serif body type with strong sans-serif display typography,
  editors can direct attention to hero imagery and infuse personality into each spread. Responsive rhythm scales ensure legibility
  across devices, while CSS columns emulate the dynamic feeling of print layouts. Thoughtful spacing, color palettes, and accent
  treatments transform ordinary articles into immersive reading journeys.
  `,
  pullQuote:
    'Typography is the architecture of content—structure it well and every story becomes a destination.',
  caption: 'Photo essay on modern editorial art direction.'
};

const templateOptions: { id: TemplateId; label: string }[] = [
  { id: 'cover', label: 'Cover Page' },
  { id: 'single-column', label: 'Single Column Article' },
  { id: 'multi-column', label: 'Multi Column Spread' }
];

function App() {
  const [templateId, setTemplateId] = useState<TemplateId>('single-column');
  const template = useMemo(() => templates[templateId], [templateId]);

  return (
    <div className={`min-h-screen ${template.colors.background} ${template.colors.foreground}`}>
      <header className="magazine-container py-10 flex flex-col gap-4 sm:flex-row sm:items-baseline sm:justify-between">
        <h1 className="font-display text-3xl tracking-[0.3em] uppercase text-ink-subtle">Periodical Studio</h1>
        <nav className="flex flex-wrap gap-3 text-sm font-display uppercase tracking-[0.25em] text-ink-subtle">
          <span>Layouts</span>
          <span>Stories</span>
          <span>Styleguide</span>
        </nav>
      </header>

      <main className={`magazine-container pb-24 ${template.spacing.margin}`}>
        <section className="max-w-prose mb-10">
          <h2 className={`responsive-heading font-display text-ink`}>Editorial Template Explorer</h2>
          <p className="responsive-body text-ink-subtle">
            Select a layout archetype to preview how typography, spacing, and color tokens work together.
          </p>
        </section>

        <div className="mb-12 flex flex-wrap items-center gap-3">
          <span className="text-sm font-display uppercase tracking-[0.35em] text-ink-subtle">Template</span>
          <div className="flex gap-2">
            {templateOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setTemplateId(option.id)}
                className={`rounded-full border px-4 py-2 text-sm font-display uppercase tracking-[0.3em] transition
                  ${templateId === option.id ? 'bg-ink text-parchment border-ink' : 'border-ink-subtle text-ink hover:bg-ink hover:text-parchment'}`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <article
          className={`magazine-grid ${
            templateId === 'multi-column' ? 'spread' : 'single'
          } ${template.spacing.gutter} ${template.spacing.rhythm}`}
        >
          <header className={`space-y-6 ${template.spacing.rhythm}`}>
            <h1 className={`${template.typography.heading} font-display`}>{sampleContent.title}</h1>
            <p className={`${template.typography.subheading} text-ink-subtle`}>{sampleContent.subtitle}</p>
          </header>

          <section className={`${template.typography.body} text-justify`}>
            {sampleContent.body.trim()}
          </section>

          <aside className={`border-l-4 border-ink-subtle pl-6 italic text-lg text-ink-subtle`}>{sampleContent.pullQuote}</aside>

          <footer className={`${template.typography.caption}`}>{sampleContent.caption}</footer>
        </article>
      </main>

      <footer className="magazine-container pb-16 text-xs uppercase tracking-[0.4em] text-ink-subtle">
        © {new Date().getFullYear()} Periodical Studio. Crafted with serif & sans harmony.
      </footer>
    </div>
  );
}

export default App;
