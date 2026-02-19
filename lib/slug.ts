export function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[ą]/g, "a")
    .replace(/[ć]/g, "c")
    .replace(/[ę]/g, "e")
    .replace(/[ł]/g, "l")
    .replace(/[ń]/g, "n")
    .replace(/[ó]/g, "o")
    .replace(/[ś]/g, "s")
    .replace(/[żź]/g, "z")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}
