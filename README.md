# @emonnemo/ui

Personal UI kit for Next.js apps. Built with Tailwind CSS v4 + shadcn/ui.

## Publishing (one-time setup)

1. Create a GitHub repo named `ui` under your account
2. Push this folder to it
3. To publish a new version:

```bash
# bump version
npm version patch   # or minor / major

# push tag — GitHub Actions will auto-publish
git push --follow-tags
```

## Consuming in a Next.js project

### 1. Add `.npmrc` to the consuming project root

```
@emonnemo:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

> Generate a token at: GitHub → Settings → Developer settings → Personal access tokens
> Scopes needed: `read:packages`

### 2. Install the package

```bash
npm install @emonnemo/ui
```

### 3. Import the base theme in `app/globals.css`

```css
@import "@emonnemo/ui/styles/globals.css";
```

### 4. Use components

```tsx
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Input,
  Label,
  RadioField,
  RadioGroup,
  Text,
  cn,
} from "@emonnemo/ui"

export default function Page() {
  return (
    <div className="grid gap-4">
      <Text variant="h2">Account</Text>

      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="you@example.com" />
      </div>

      <RadioGroup>
        <RadioField name="plan" value="starter" label="Starter" />
        <RadioField name="plan" value="pro" label="Pro" />
      </RadioGroup>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Open menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
```

## Local development

```bash
npm install
npm run dev       # watch mode
npm run build     # production build
npm run type-check
npm run storybook # component docs
```

## Storybook on Vercel

This repo includes `vercel.json`, so importing it into Vercel will build Storybook with:

```bash
npm run build-storybook
```

Vercel should serve the generated `storybook-static` directory.

## Structure

```
src/
├── components/
│   ├── ui/       # shadcn base components
│   ├── layout/   # sidebar, topbar, page shell
│   └── shared/   # higher-level compositions
├── hooks/        # reusable hooks
├── lib/
│   └── utils.ts  # cn() helper
├── styles/
│   └── globals.css  # Tailwind v4 theme
└── index.ts      # barrel export
```
