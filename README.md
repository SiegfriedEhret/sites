# My sites

This is a monorepo with the sources for:

- [ehret.me](https://ehret.me)
- [sieg.fr](sieg.fr)

Using:

- [SvelteKit](https://kit.svelte.dev/)
- [pnpm](https://pnpm.io/)
- [turborepo](https://turborepo.org/)

## Locally

Run:

- `pnpm install`
- `pnpm run dev`

## On Vercel

Environment variables

| Name                           | Value                                                          |
|--------------------------------|----------------------------------------------------------------|
| `VITE_CONTENTFUL_ACCESS_TOKEN` | `something`                                                    |
| `VITE_FONT_PATH`               | `/vercel/path0` (not sure if still needed ^^')                 |
| `LD_LIBRARY_PATH`              | `/var/task/node_modules/canvas/build/Release:$LD_LIBRARY_PATH` |

⚠️ currently, `--force` should be added to the BUILD command otherwise there is no output folder since Vercel start the build in a new environment.

### For ehretdotme

- Root directory: `apps/ehretdotme`
- BUILD COMMAND: `cd ../.. && pnpm run build`
- INSTALL COMMAND: `cd ../.. && pnpm install`

### For siegdotfr

- Root directory: `apps/siegdotfr`
- BUILD COMMAND: `cd ../.. && pnpm run build`
- INSTALL COMMAND: `cd ../.. && pnpm install`

## License

Under `AGPL-3.0-or-later`, see the `LICENSE` file at the root of the repository.
