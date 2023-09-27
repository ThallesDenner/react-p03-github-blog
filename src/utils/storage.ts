export function saveQueryToSessionStorage(query: string) {
  sessionStorage.setItem("@github-blog:query", JSON.stringify(query));
}

export function getQueryFromSessionStorage() {
  const query = sessionStorage.getItem("@github-blog:query");
  return query ? JSON.parse(query) : "";
}
