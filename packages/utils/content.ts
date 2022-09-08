export function generateSlug(input: string) {
  return input
    .trim()
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\w]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}
