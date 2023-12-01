# My sites

This is a monorepo with the sources for:

- [ehret.me](https://ehret.me)
- [sieg.fr](https://sieg.fr/ied)
- [meloe.fr](https://meloe.fr)

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

## License

Under `AGPL-3.0-or-later`, see the `LICENSE` file at the root of the repository.

The fonts are copyrighted, do not use them unless you have a license:
- https://berkeleygraphics.com/
- https://simplebits.shop/products/ships-whistle
