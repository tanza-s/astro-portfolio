# CSS Architecture Quick Reference

## For Future Development

Use this as a checklist when adding new components or pages.

### New Component Checklist

When creating a new component (e.g., `MyComponent.astro`):

```astro
---
// Component logic
---

<div class="my-component">
  <h2 class="my-component__title">Title</h2>
  <p class="my-component__description">Description</p>
  <button class="my-component__button">Action</button>
</div>

<style>
  /* Block: The component itself */
  .my-component {
    /* Your styles */
  }

  /* Elements: Children of the block */
  .my-component__title {
    /* Title styles */
  }

  .my-component__description {
    /* Description styles */
  }

  .my-component__button {
    /* Button styles */
  }

  /* Modifiers: Variations */
  .my-component--highlight {
    /* Highlighted variant */
  }

  .my-component__button--primary {
    /* Primary button variant */
  }

  /* Interactive states (okay to use element selectors here) */
  .my-component:hover {
    /* Hover effect */
  }

  .my-component__button:hover,
  .my-component__button:focus {
    /* Button interaction */
  }
</style>
```

### New Page Checklist

When creating a new page (e.g., `contact.astro`):

```astro
---
// Page logic
---

<BaseLayout>
  <div class="stack gap-20">
    <!-- Page structure using utility classes -->
    <div class="wrapper stack gap-8">
      
      <!-- Use page-specific class names -->
      <section class="contact-form">
        <h1 class="contact-form__title">Get in Touch</h1>
        <form class="contact-form__form">
          <!-- Form content -->
        </form>
      </section>

    </div>
  </div>
</BaseLayout>

<style>
  /* Page-level components scope their own styles */
  .contact-form {
    max-width: 600px;
    margin: 0 auto;
  }

  .contact-form__title {
    font-size: var(--text-2xl);
    margin-bottom: 1rem;
  }

  .contact-form__form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  /* Modifiers for page states */
  .contact-form--loading {
    opacity: 0.7;
    pointer-events: none;
  }
</style>
```

## Class Naming Patterns

### ✅ DO:
- Use kebab-case: `.my-component`, `.my-component__element`
- Scope everything: `.card__title` not `.title`
- Use double underscore for elements: `.block__element`
- Use double dash for modifiers: `.block--variant`
- Keep utility classes simple: `.wrapper`, `.stack`, `.gap-2`
- Use SCSS nesting for organization

### ❌ DON'T:
- Use IDs for styling: `#main` (use classes instead)
- Create generic names: `.title`, `.content`, `.info`
- Nest deeply: avoid 4+ levels of nesting
- Create utility duplicates: don't make `.my-button-padding` (that's a component)
- Mix BEM and other conventions: pick one style

## Utility Classes Reference

These are shared across the site:

```scss
/* Layout Containers */
.wrapper     // Max-width container with padding
.stack       // Flex column (use with .gap-*)

/* Spacing (combine with .stack) */
.gap-2       // 0.5rem
.gap-4       // 1rem
.gap-8       // 2rem
.gap-10      // 2.5rem
.gap-15      // 3.75rem
.gap-20      // 5rem
.gap-30      // 7.5rem
.gap-48      // 12rem

/* Responsive variations */
.lg\:gap-2   // Large breakpoint (50em+)
.lg\:gap-4
.lg\:gap-8
// ... etc

/* Accessibility */
.sr-only     // Screen reader only
```

## SCSS Features to Use

### Nesting (Natural Hierarchy)
```scss
.card {
  border: 1px solid var(--gray-800);
  
  &__title {
    font-size: var(--text-lg);
  }
  
  &:hover {
    box-shadow: var(--shadow-md);
  }
}
```

### Variables (Defined in `_variables.scss`)
```scss
// Use CSS custom properties (already defined globally)
color: var(--gray-200);
font-size: var(--text-lg);
gap: var(--shadow-md);
```

### Mixins (For Responsive & Reusable Logic)
```scss
// In components, use for responsive styles
@include media-lg() {
  .card {
    grid-column: span 2;
  }
}
```

## Common Patterns

### Component with Variants
```scss
.button {
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  // Base styles
}

.button--primary {
  background: var(--accent-regular);
}

.button--secondary {
  background: var(--gray-600);
}

.button--small {
  padding: 0.25rem 0.5rem;
  font-size: var(--text-sm);
}
```

### Element States
```scss
.form__input {
  border: 1px solid var(--gray-600);
  
  &:focus {
    border-color: var(--accent-regular);
  }
  
  &:disabled {
    opacity: 0.5;
  }
}
```

### Media Queries in Components
```scss
.hero {
  font-size: var(--text-lg);
  
  @include media-lg() {
    font-size: var(--text-xl);
  }
}
```

## File Organization

Your styles are organized as:

```
src/styles/
├── global.scss         // Main entry point
├── _variables.scss     // Theme colors, spacing, fonts
├── _mixins.scss        // Reusable mixins
├── _utilities.scss     // Utility classes
└── BEM-GUIDE.md       // Full BEM documentation
```

Component styles live in the `<style>` block of each `.astro` file.

## Questions?

This architecture makes your code:
1. **Maintainable** - Easy to find and update styles
2. **Scalable** - Can grow without naming conflicts
3. **Professional** - Shows understanding of CSS best practices

Happy coding! 🎨
