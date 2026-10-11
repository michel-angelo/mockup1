# AGENTS.md

## Project context

A landing page with a scroll-driven hero (image sequence drawn to a `<canvas>`) showing a minimal white desk setup. The mood is calm, elegant, and productivity-focused. It is not techy or futuristic.

## Layout rule: not everything is centered

Do not center-align everything by default. A page where every heading, paragraph, and button sits on the center axis looks templated and flat. Choose alignment per element, based on what it does.

### Where centering is fine

- The hero visual (the desk setup and its scroll canvas). It is the one deliberately symmetric moment on the page.
- Short, standalone statements, such as a closing call to action.
- Single icons or small badges that sit alone.

### Where centering is not the default

- **Body text and paragraphs:** left-align. Keep line length under about 70 characters.
- **Section headings with supporting text:** left-align the heading and text together, usually at the left edge of the grid.
- **Feature lists, steps, and card groups:** use a grid or a two-column split, not a stack of centered blocks.
- **Navigation:** logo on the left, links on the right (or grouped), not a single centered row.
- **Footer:** multi-column and left-aligned.

## How to build less centered layouts

- Use an asymmetric grid based on the golden ratio (see "Golden ratio" below): a narrow column of 38.2% and a wide column of 61.8%. Put the heading in the narrow column and the content in the wide one.
- Alternate the side that text and visuals sit on from section to section, so the page has rhythm.
- Let some elements extend past the text column (wide images, full-bleed backgrounds) while text stays in a narrow readable column.
- Use whitespace as a layout tool. An empty column is fine.
- Anchor text to a consistent left edge across sections so the page feels organized, not scattered.

## Golden ratio (φ = 1.618)

Use the golden ratio to size things so the layout feels balanced. It is a guide, not a cage. Round to whole pixels and keep values consistent across the project.

### Column splits

- Two-column sections split 38.2% / 61.8% (1 : 1.618). Alternate which side is wide from section to section.
- Equivalent in CSS grid: `grid-template-columns: 1fr 1.618fr;` (or `1.618fr 1fr` to flip).
- Place focal points (hero headline, key visual) at about 38.2% or 61.8% of the width or height, not at 50%.

### Type scale

Base size 16px. Major steps multiply by φ, in-between steps by √φ (≈ 1.272), so the jumps don't get too extreme.

| Role | Size |
|---|---|
| Caption / small | 13px |
| Body | 16px |
| Lead paragraph | 20px |
| H3 | 26px |
| H2 | 42px |
| H1 | 68px |
| Display (hero only) | 110px |

- Body line-height is about 1.6 (≈ φ). Headings use a tighter 1.1 to 1.2.
- On mobile, use a smaller ratio (about 1.25) so headings don't overflow. Scale with `clamp()`.

### Spacing scale

Use Fibonacci-based steps for margin, padding, and gaps: 8, 13, 21, 34, 55, 89, 144 (px).

- Gap inside a component: 8 to 21.
- Gap between components: 34 to 55.
- Gap between sections: 89 to 144.
- Do not invent in-between values like 10, 25, or 50. Pick the nearest step.

### Containers and media

- Keep text blocks at a readable width (about 60 to 70 characters), then size the surrounding container with φ, for example a 640px text column inside a 1036px container (640 × 1.618).
- When cropping or placing images next to text, use a φ aspect ratio (about 1.618 : 1, or 1 : 1.618 for portrait) unless the asset has a fixed ratio.
- The hero canvas keeps the aspect ratio of the source frames (16:9). Do not stretch it to fit φ.
- Build CSS tokens for the scales above (`--space-1` to `--space-7`, `--text-sm` to `--text-display`) and reuse them. Do not hard-code one-off sizes.

## Hero and animation rules

- The hero scene stays centered because the source frames are symmetric. Place hero text (headline, short description) to the left or in a corner, not on top of the desk.
- Do not center the scroll progress indicator out of habit. Place it where it fits the layout, for example bottom-left or bottom-right, and keep it thin.
- Entrance animations follow the layout. Elements move in from the direction of their position on the page, not all from the same center point.

## Proportions: use the golden ratio

Use the golden ratio (φ ≈ 1.618) as the base for sizes and proportions. It gives layouts balance without forcing mirror symmetry, so it works together with the left-aligned, asymmetric rules above.

Round values to whole pixels. Treat the ratio as a guide, not a law. If a value breaks usability (tiny tap targets, unreadable text), adjust it.

### CSS tokens

```css
:root {
  --phi: 1.618;

  /* Type scale (base 16px, each step x phi, use for display sizes) */
  --text-sm: 10px;
  --text-base: 16px;
  --text-lg: 26px;
  --text-xl: 42px;
  --text-2xl: 68px;
  --text-3xl: 110px;

  /* Spacing scale (Fibonacci, each step is about phi times the last) */
  --space-1: 8px;
  --space-2: 13px;
  --space-3: 21px;
  --space-4: 34px;
  --space-5: 55px;
  --space-6: 89px;
  --space-7: 144px;
}
```

### Where to apply it

- **Two-column splits:** use a 1.618 : 1 ratio (about 61.8% / 38.2%), for example `grid-template-columns: 1.618fr 1fr;`. Put the main content in the wide column and the heading or supporting content in the narrow one. Flip the sides between sections.
- **Type:** use the scale above for headings. Display sizes can use the full ratio. For body and small text, stay at 16px and 10 to 13px so the jump does not get too steep.
- **Spacing:** padding, margins, and gaps come from the spacing scale only. Larger gaps between sections, smaller gaps inside components.
- **Line height:** 1.5 to 1.618 for body text. Use tighter values (1.1 to 1.25) for large headings.
- **Images and cards:** use a 1.618 : 1 aspect ratio, for example 1618 x 1000. Portrait crops use 1 : 1.618.
- **Container and text width:** keep the readable text column at about 61.8% of the container, or about 620 to 680px, whichever is smaller.
- **Focal points:** place key elements (hero headline, call to action) on the golden lines, about 38.2% or 61.8% from an edge, instead of at 50%.
- **Components:** derive sizes from each other. If a button is 34px tall, its horizontal padding is 55px, its gap to the next element is 21px or 34px.

### Hero specifics

- The hero canvas stays centered, but position the hero headline and description on the 38.2% line from the left, not on the center axis.
- Keep the scroll progress bar thin and size it from the scale (for example 4px thick, 233px or 377px wide).
- Animation offsets and distances can follow the spacing scale (for example 21px, 34px, 55px of travel) so motion feels consistent with the layout.

## Before finishing a section

Check each of these:

1. Is more than one block of text centered? If yes, justify each one or left-align it.
2. Do two consecutive sections share the same centered stack? If yes, change one of them.
3. Does the layout hold up on mobile? Centered text is acceptable on narrow screens when a two-column layout collapses, but desktop should keep its asymmetry.
4. Do all font sizes, spacings, and column splits come from the golden ratio tokens? Remove arbitrary values like 20px, 50px, or a 50/50 split unless there is a clear reason.

## Style guardrails

- Keep the palette soft and neutral (warm whites, light wood tones, muted greys). Avoid neon, glow effects, and sci-fi styling.
- Prefer subtle motion and restrained shadows.
- When unsure about alignment, choose left-aligned.
