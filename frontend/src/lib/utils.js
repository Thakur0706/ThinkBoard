export function formatDate(dateString) {
  const date = new Date(dateString); // 👈 this line is sussy
  return date.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}