# Mosaic - Collage Group's Design System

Mosaic is a design system library created for Collage Group, built with Storybook, CRA, TypeScript and using the Material UI (MUI) library as its foundation. It provides customizable, pre-built React components that can be combined to create modern and responsive user interfaces.

## Getting Started

### Clone the repository.

```bash
git clone git@github.com:LatinumNetwork/mosaic.git
```

### Install dependencies

```bash
npm install
```

### Run Storybook

```bash
npm run storybook
```

## Organization

This library follows the Atomic design pattern: Atoms, Molecules, and Organisms.

**Atoms**: These are the smallest building blocks of the UI, such as buttons, inputs, and labels.

**Molecules**: These are groups of atoms bonded together to form a functional unit, such as a form element with a label, input, and validation message.

**Organisms**: These are groups of molecules combined together to form a more complex, standalone UI section, like a header, footer, or a complete form.

### Structure

This is how are components are organized.

```css
src/
  └─ components/
      ├─ atoms/
      ├─ molecules/
      └─ organisms/
```

This is an example of a component inside a building block.

```css
src/
  └─ components/
      ├─ atoms/
      |   ├─ Button/
      |   |   ├─ Button.tsx
      |   |   ├─ Button.stories.tsx
      |   |   ├─ Button.stories.mdx
      |   |   └─ index.tsx
      |   └─ ...

```

### Naming Conventions

Component names should be PascalCase and descriptive.

Keep names relatively short, but they must be still clear.

Component names should be consistent across atoms, molecules, and organisms.

## Development - Creating New Components

A new component should exist in its own folder following the convetions listed above. That folder should have:

-   A file creating the component. ex: **Button.tsx**. This file will house your atom, molecule, or organism.
-   A template file or multiple template files. ex: **Button.stories.tsx** and/or **Button.stories.mdx**. **mdx** stands for markdown. Storybook lets you use a markdown file to further explain components and their uses.
