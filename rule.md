# Website Development Rules (`rule.md`)

> **Purpose:** Keep the codebase clean, predictable, maintainable, and
> easy to extend. Follow these rules whenever you inspect, create, edit,
> refactor, or remove files in this project.

## 1. Core Principles

1.  Prefer **simple, readable, reusable code** over clever or
    unnecessarily abstract solutions.
2.  Keep the existing architecture and conventions unless there is a
    clear technical reason to change them.
3.  Make the smallest change that correctly solves the task.
4.  Do not create duplicate components, styles, utilities, hooks,
    constants, or configuration.
5.  Do not add a dependency for something that can be handled cleanly
    with the existing stack.
6.  Do not introduce unnecessary folders, files, wrappers, abstractions,
    or configuration.
7.  Preserve existing functionality and responsive behaviour unless the
    task explicitly asks to change them.
8.  Never make assumptions about APIs, data structures, routes, or
    business logic. Inspect the relevant code first.

## 2. Project Structure

-   Follow the existing folder structure. Do not reorganize the project
    without a clear need.
-   Keep files close to the feature or responsibility they belong to.
-   Use feature-based folders when a feature has multiple related
    components, hooks, types, or utilities.
-   Keep shared, reusable code in shared locations; do not move
    feature-specific code into global folders.
-   Avoid deeply nested folders. Add nesting only when it improves
    discoverability.
-   Do not create a folder for a single file unless it meaningfully
    improves organization.
-   Do not create multiple files with almost identical responsibilities.
-   Keep the root directory minimal. Do not add miscellaneous files to
    the project root.
-   Before creating a file, search for an existing file that can be
    extended.

### Suggested Next.js App Router structure

Use this as a guide, not as permission to restructure an existing
project unnecessarily:

``` text
src/
├── app/
│   ├── (website)/
│   │   ├── page.tsx
│   │   ├── about/
│   │   │   └── page.tsx
│   │   └── contact/
│   │       └── page.tsx
│   ├── api/
│   ├── layout.tsx
│   ├── globals.css
│   └── not-found.tsx
├── components/
│   ├── layout/
│   ├── sections/
│   └── ui/
├── features/
│   └── feature-name/
│       ├── components/
│       ├── hooks/
│       ├── services/
│       └── types.ts
├── hooks/
├── lib/
├── services/
├── types/
└── config/
```

Only introduce these folders when the project actually needs them. Do
not create empty folders or placeholder files.

## 3. File and Naming Conventions

-   Use `PascalCase` for React component files and component names:
    `Header.tsx`, `ContactForm.tsx`.
-   Use `camelCase` for functions, variables, hooks, and utility files:
    `formatDate.ts`, `useScroll.ts`.
-   Custom React hooks must start with `use`: `useMobileMenu.ts`.
-   Use clear, descriptive names. Avoid vague names such as `data.ts`,
    `common.ts`, `helper.ts`, or `temp.ts` when a more specific name is
    possible.
-   Use `kebab-case` for route segments and static asset names where
    appropriate: `case-studies/`, `team-photo.webp`.
-   Keep naming consistent with the existing project. Do not rename
    files just to impose a different convention.

## 4. Component Rules

1.  Build components around one clear responsibility.
2.  Keep page files focused on page composition; move substantial
    reusable UI into components.
3.  Extract a component when it is reused, has meaningful independent
    behaviour, or makes a complex parent easier to understand.
4.  Do not split every small JSX element into its own component.
5.  Avoid giant components. Separate distinct sections or logic when
    doing so improves readability.
6.  Keep props explicit and strongly typed. Avoid `any`; use `unknown`
    when a value is genuinely not yet known and narrow it safely.
7.  Use sensible defaults and avoid excessive optional props.
8.  Do not duplicate markup across pages when a shared component can
    handle the variation cleanly.
9.  Keep component-specific types near the component unless they are
    shared.
10. Do not add state when the UI can be derived from existing props or
    state.

## 5. TypeScript Rules

-   Use TypeScript for application code and define meaningful types for
    props, API responses, and shared data.
-   Avoid `any`, unsafe type assertions, and `@ts-ignore`.
-   Do not silence TypeScript errors just to make a build pass.
-   Use `type` or `interface` consistently with the existing codebase.
-   Keep types close to their usage; move them to shared `types/` only
    when genuinely shared.
-   Handle nullable and optional values explicitly.
-   Do not duplicate types that already exist.

## 6. Styling and Design System

-   Use the project's existing styling approach. For this project,
    prefer **Tailwind CSS v4** utilities where Tailwind is already in
    use.
-   Do not mix multiple styling systems without a clear reason.
-   Avoid large inline style objects. Use Tailwind classes or the
    existing CSS architecture.
-   Keep global CSS limited to resets, design tokens, base styles, and
    genuinely global rules.
-   Keep component-specific styles close to the component when separate
    CSS is necessary.
-   Reuse existing colours, typography, spacing, radius, shadows, and
    breakpoints.
-   Do not repeatedly hardcode the same design values. Use existing
    design tokens or introduce a token only when it will be reused.
-   Avoid arbitrary values when an existing spacing, colour, or sizing
    token works.
-   Do not add one-off CSS files for tiny styling changes.
-   Avoid `!important`; fix the underlying specificity or styling issue
    instead.
-   Do not use gradients, shadows, animations, or glass effects
    excessively. Keep the visual system consistent.
-   Check hover, focus, active, disabled, loading, and error states
    where relevant.

## 7. Responsive Design

-   Build mobile-first unless the existing project follows another
    established approach.
-   Check layouts at small mobile, large mobile, tablet, laptop, and
    desktop widths.
-   Prevent horizontal overflow, clipped content, overlapping elements,
    and unreadable text.
-   Use flexible layouts and responsive spacing rather than fixed
    dimensions wherever possible.
-   Ensure navigation, forms, cards, tables, images, and buttons remain
    usable on touch devices.
-   Do not treat a desktop layout that merely shrinks as a finished
    mobile design.

## 8. Next.js and React Rules

-   Follow the App Router conventions already used by the project.
-   Prefer Server Components by default.
-   Add `"use client"` only when client-side state, effects, event
    handlers, or browser-only APIs are required.
-   Keep client component boundaries as small as practical.
-   Do not use `useEffect` for values that can be calculated during
    render or handled by the framework.
-   Use the Next.js navigation, image, font, metadata, and data-fetching
    features appropriately.
-   Do not expose secrets or private environment variables through
    `NEXT_PUBLIC_` variables.
-   Avoid unnecessary client-side fetching when the data can be loaded
    safely on the server.
-   Use stable keys when rendering lists.
-   Avoid hydration mismatches and browser-only code during server
    rendering.
-   Do not add a second router or another state-management library
    without a demonstrated need.

## 9. API and Data Handling

-   Keep API calls out of presentational components.
-   Reuse the existing API client, service layer, and request
    conventions.
-   Keep endpoint paths, request payloads, and response types
    consistent.
-   Handle loading, success, empty, and error states.
-   Validate and sanitize untrusted input on the server.
-   Never trust client-side validation as the only validation.
-   Do not hardcode production URLs, credentials, tokens, or sensitive
    data.
-   Do not log passwords, access tokens, personal data, or secrets.
-   Avoid duplicate requests and unnecessary repeated fetching.
-   Do not invent mock data in production flows. Clearly isolate mock
    data used for development.

## 10. Performance

-   Use optimized images and the project's image handling approach.
-   Avoid unnecessarily large client bundles and heavy dependencies.
-   Lazy-load non-critical components or media when it provides a real
    benefit.
-   Avoid repeated computations, duplicate API requests, and unnecessary
    re-renders.
-   Use pagination or suitable data-loading patterns for large datasets.
-   Keep animations lightweight and respect reduced-motion preferences.
-   Do not optimize blindly; identify the actual bottleneck first.

## 11. Accessibility and User Experience

-   Use semantic HTML elements.
-   Provide labels for form fields and meaningful alternative text for
    informative images.
-   Ensure interactive elements are keyboard accessible.
-   Provide visible focus states.
-   Use buttons for actions and links for navigation.
-   Do not communicate status through colour alone.
-   Ensure adequate text contrast and readable font sizes.
-   Provide clear validation messages and useful empty, loading, and
    error states.
-   Prevent accidental double submissions where relevant.

## 12. SEO and Metadata

-   Add meaningful page titles and descriptions.
-   Use semantic heading order and one clear primary page heading.
-   Use descriptive URLs and image alternative text.
-   Add canonical, Open Graph, and social metadata where appropriate.
-   Avoid duplicate metadata across pages.
-   Keep structured data accurate and relevant; never invent ratings,
    reviews, addresses, or business claims.

## 13. Security and Environment Variables

-   Never commit secrets, API keys, passwords, private certificates, or
    production credentials.
-   Keep secrets in environment variables and validate required
    variables on the server.
-   Do not expose server-only values to browser code.
-   Validate and authorize sensitive server actions and API routes.
-   Do not render untrusted HTML without appropriate sanitization.
-   Avoid unsafe dynamic code execution.
-   Do not weaken authentication, authorization, CORS, or security
    checks to make a feature work.

## 14. Code Quality

-   Remove unused imports, variables, components, and dead code
    introduced by your changes.
-   Avoid commented-out code unless it explains a temporary, intentional
    reason.
-   Avoid deeply nested conditionals; use early returns or small helper
    functions when clearer.
-   Keep functions focused and avoid unnecessary side effects.
-   Use `async/await` consistently with the existing code style.
-   Handle errors deliberately; do not swallow exceptions silently.
-   Add comments only when they explain why something is done, not what
    obvious code does.
-   Do not duplicate business logic across components or API routes.

## 15. Dependencies and Configuration

-   Inspect `package.json` before installing anything.
-   Reuse installed packages and existing utilities.
-   Do not update unrelated packages or configuration.
-   Do not change framework versions, build tools, lint rules, or
    TypeScript settings without explicit need.
-   If a dependency is necessary, explain why it is needed and use a
    maintained package.
-   Do not create alternative configuration files that conflict with
    existing ones.

## 16. Asset Management

-   Store images, icons, fonts, and other static assets in the existing
    asset/public structure.
-   Use descriptive filenames and sensible formats.
-   Prefer SVG for simple scalable icons and WebP/AVIF for suitable
    photographic images.
-   Reuse existing brand assets; do not recreate or replace them without
    permission.
-   Do not embed large base64 assets in source files.
-   Remove an asset only after confirming it is no longer referenced.

## 17. Antigravity Workflow --- Mandatory Before Every Task

Before changing code:

1.  Read the relevant project files and understand the existing
    implementation.
2.  Inspect the folder structure, package scripts, dependencies, and
    related components.
3.  Identify reusable components, utilities, styles, and types.
4.  Confirm which files actually need to change.
5.  Briefly state the proposed approach when the task is substantial or
    affects architecture.

While changing code:

1.  Follow this `rule.md` and the project's existing conventions.
2.  Make focused changes; do not rewrite unrelated files.
3.  Reuse existing components and design tokens.
4.  Do not create duplicate files or parallel implementations.
5.  Do not change unrelated UI, content, routes, or functionality.
6.  Do not delete or rename files without checking their references and
    explaining the reason.
7.  If a requirement is unclear and affects architecture or behaviour,
    ask before making a risky assumption.

After changing code:

1.  Review every changed file.
2.  Check imports, exports, types, links, routes, and asset paths.
3.  Run the relevant lint, type-check, and build scripts when available.
4.  Fix issues caused by the changes.
5.  Report what changed, which files were created/modified/deleted, and
    what checks were run.
6.  Clearly mention any checks that could not be run and why.

## 18. Strict Do-Not Rules

-   Do not restructure the entire project for a small task.
-   Do not create unnecessary folders or files.
-   Do not duplicate existing components or styles.
-   Do not install packages without checking whether an existing
    solution is available.
-   Do not replace working code with a new implementation without a
    reason.
-   Do not change unrelated functionality.
-   Do not remove existing content or assets without permission.
-   Do not use `any` to bypass typing problems.
-   Do not hide errors with broad `try/catch`, `@ts-ignore`, or disabled
    lint rules.
-   Do not claim that a build, test, or check passed unless it was
    actually run.
-   Do not leave temporary files, debug logs, or unused code behind.

## 19. Definition of Done

A task is complete only when:

-   The requested behaviour or UI works as intended.
-   The implementation follows the existing architecture and these
    rules.
-   The code is typed, readable, and free of unnecessary duplication.
-   Responsive behaviour and relevant accessibility states are
    considered.
-   No unrelated files or features were changed.
-   Relevant checks have been run, or their absence is clearly reported.
-   The final response summarizes the implementation and any remaining
    limitations.

------------------------------------------------------------------------

## Project-Specific Overrides

If the project uses a different framework, styling system, folder
structure, or naming convention, follow the actual project configuration
and established conventions. These rules are a baseline, not a reason to
force an incompatible architecture.

**Priority order:** Explicit user requirements → existing project
architecture and conventions → this `rule.md` → personal coding
preference.
