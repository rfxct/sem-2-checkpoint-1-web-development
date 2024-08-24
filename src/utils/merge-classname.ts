export default function mc(...classes) {
  return classes
    .filter(Boolean)
    .map((c) => c.trim())
    .join(" ");
}
