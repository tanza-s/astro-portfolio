# BEM Naming Convention Guide

This portfolio uses a **Block, Element, Modifier (BEM)** naming convention for CSS classes. This ensures scalable, maintainable, and collision-free styling.

## BEM Structure

### Block
The outermost component level. Usually matches the component name.

```scss
.hero { }
.card { }
.nav { }
```

### Element
Children of a block, separated by double underscore `__`.

```scss
.hero__title { }
.card__image { }
.nav__item { }
```

### Modifier
Variations of a block or element, separated by double dash `--`.

```scss
.hero--center { }
.card--featured { }
.nav__item--active { }
```

## Class Category Guide

### 1. Utility Classes (Global, in `global.scss`)
Reusable layout utilities that can be combined. Single purpose.

```scss
.wrapper { }      // Container with max-width
.stack { }        // Flexbox column layout
.gap-2 { }        // Gap utilities
.sr-only { }      // Screen reader only
```

### 2. Component Classes (Scoped styles in `.astro` files)
Component-specific styles. Always use BEM to prevent conflicts.

```scss
.hero { }
.hero__title { }
.hero__tagline { }
.hero--start { }  // Modifier for start alignment
```

### 3. Page-Specific Classes
Page layouts that aren't reusable across components.

```scss
.project-header { }
.project-header__title { }
.project-details { }
.project-details__tag { }
```

## Current Architecture

### Global Utilities
- `.wrapper` - Max-width container
- `.stack` - Flexbox column (with `.gap-*` modifiers)
- `.gap-2`, `.gap-4`, `.gap-8`, etc. - Gap sizes
- `.sr-only` - Screen reader only content

### Components with Scoped Styles
Each Astro component handles its own BEM-namespaced styles:

- **Hero** → `.hero`, `.hero__title`, `.hero__tagline`, `.hero--start`
- **Card** (PortfolioPreview) → `.card`, `.card__title`, `.card:hover`
- **Nav** → `.nav`, `.nav__header`, `.nav__items`, `.nav__item`, `.nav__item--active`
- **Pill** → `.pill`
- **Skills** → `.skills`, `.skills__grid`
- **ThemeToggle** → `.theme-toggle`, `.theme-toggle__icon`

### Page-Specific Styles
Page files can have component-like classes for unique layouts:

- **index.astro** → `.intro`, `.section`, `.section--with-cta`, `.gallery`, `.cta`
- **about.astro** → `.about`, `.about__section`, `.about__content`
- **work/[...slug].astro** → `.project`, `.project__header`, `.project__details`

## Rules to Follow

✅ **DO:**
- Use BEM naming for all component/page-level styles
- Keep utility classes single-purpose
- Use scoped `<style>` blocks in components
- Extend styles via modifiers, not new classes
- Use SCSS nesting for related selectors

❌ **DON'T:**
- Use generic names like `.content`, `.title` without context
- Mix global and scoped styles without clear separation
- Create utility classes that duplicate BEM components
- Use IDs for styling (only use classes)
- Create deeply nested selectors (3+ levels)

## Examples

### Good ✅
```astro
<div class="card">
  <h3 class="card__title">Project Title</h3>
  <img class="card__image" src="..." />
</div>

<style>
  .card {
    border: 1px solid var(--gray-800);
  }
  
  .card__title {
    font-size: var(--text-lg);
  }
  
  .card:hover {
    box-shadow: var(--shadow-md);
  }
</style>
```

### Bad ❌
```astro
<div class="card">
  <h3 class="title">Project Title</h3>
  <img class="image" src="..." />
</div>
```

## Benefits for Your Portfolio

1. **Shows CSS Architecture Knowledge** - Hiring managers recognize BEM as a professional standard
2. **Scalable** - Easy to add new components/variations without worrying about conflicts
3. **Maintainable** - Self-documenting class names make the code easy to understand
4. **Professional** - Demonstrates discipline in code organization
