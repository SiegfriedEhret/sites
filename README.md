# My sites

This is a monorepo with the sources for:

- [ehret.me](https://ehret.me)
- [sieg.fr](https://sieg.fr/ied)

Using:

- [Astro](https://astro.build/)
- [pnpm](https://pnpm.io/)
- [turborepo](https://turborepo.org/)

## Locally

Run:

- `pnpm install`
- `pnpm run dev`

## On Vercel

Environment variables

| Name                        | Value       |
| --------------------------- | ----------- |
| `CONTENTFUL_SPACE_ID`       | `something` |
| `CONTENTFUL_DELIVERY_TOKEN` | `something` |
| `CONTENTFUL_PREVIEW_TOKEN`  | `something` |

⚠️ currently, `--force` should be added to the BUILD command otherwise there is no output folder since Vercel start the build in a new environment.

### For ehretdotme

- Root directory: `apps/ehretdotme`
- BUILD COMMAND: `cd ../.. && pnpm run build:ehretdotme --force`
- INSTALL COMMAND: `cd ../.. && pnpm install`

### For siegdotfr

- Root directory: `apps/siegdotfr`
- BUILD COMMAND: `cd ../.. && pnpm run build:siegdotfr --force
- INSTALL COMMAND: `cd ../.. && pnpm install`

### For meloedotfr

- Root directory: `apps/meloedotfr`
- BUILD COMMAND: `cd ../.. && pnpm run build:meloedotfr --force
- INSTALL COMMAND: `cd ../.. && pnpm install`

## License

Under `AGPL-3.0-or-later`, see the `LICENSE` file at the root of the repository.
