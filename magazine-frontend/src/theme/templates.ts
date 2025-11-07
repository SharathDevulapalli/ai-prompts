export type TemplateId = 'cover' | 'single-column' | 'multi-column';

type TypographyScale = {
  heading: string;
  subheading: string;
  body: string;
  caption: string;
};

type SpacingTokens = {
  gutter: string;
  margin: string;
  rhythm: string;
};

type TemplateTokens = {
  name: string;
  description: string;
  colors: {
    background: string;
    foreground: string;
    accent: string;
    muted: string;
  };
  spacing: SpacingTokens;
  typography: TypographyScale;
};

export const templates: Record<TemplateId, TemplateTokens> = {
  cover: {
    name: 'Cover Page',
    description:
      'Bold hero typography with dramatic accent colors and tight spacing.',
    colors: {
      background: 'bg-gradient-to-br from-parchment via-white to-parchment',
      foreground: 'text-ink',
      accent: 'text-accent-rose',
      muted: 'text-ink-subtle'
    },
    spacing: {
      gutter: 'gap-16',
      margin: 'px-10 py-20',
      rhythm: 'space-y-6'
    },
    typography: {
      heading: 'responsive-heading uppercase tracking-tight font-bold',
      subheading: 'responsive-subheading font-display text-accent-amber',
      body: 'responsive-body max-w-prose',
      caption: 'text-sm uppercase tracking-widest text-ink-subtle'
    }
  },
  'single-column': {
    name: 'Single Column Article',
    description:
      'Classic newspaper column with wide gutters and generous reading comfort.',
    colors: {
      background: 'bg-parchment',
      foreground: 'text-ink',
      accent: 'text-accent-amber',
      muted: 'text-ink-subtle'
    },
    spacing: {
      gutter: 'gap-12',
      margin: 'px-6 sm:px-10',
      rhythm: 'space-y-8'
    },
    typography: {
      heading: 'responsive-heading font-semibold',
      subheading: 'responsive-subheading font-display text-accent-amber',
      body: 'responsive-body',
      caption: 'text-xs uppercase tracking-[0.35em] text-ink-subtle'
    }
  },
  'multi-column': {
    name: 'Multi Column Spread',
    description:
      'Spacious double spread layout using two columns with rhythmic spacing.',
    colors: {
      background: 'bg-white',
      foreground: 'text-ink',
      accent: 'text-accent-rose',
      muted: 'text-ink-subtle'
    },
    spacing: {
      gutter: 'md:grid-cols-2 md:gap-x-16 lg:gap-x-24',
      margin: 'px-6 md:px-12 lg:px-20',
      rhythm: 'space-y-10'
    },
    typography: {
      heading: 'responsive-heading font-bold',
      subheading: 'responsive-subheading font-display text-accent-rose',
      body: 'responsive-body md:columns-2 md:gap-10',
      caption: 'text-sm italic text-ink-subtle'
    }
  }
};

export type TemplateConfig = (typeof templates)[TemplateId];
