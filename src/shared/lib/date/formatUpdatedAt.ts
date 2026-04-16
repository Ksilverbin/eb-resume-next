export function formatUpdatedAt() {
  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  })
    .format(new Date())
    .replace(/\. /g, ". ")
    .replace(/\.$/, "");
}
