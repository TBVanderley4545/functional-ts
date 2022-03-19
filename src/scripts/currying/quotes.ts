export const curriedQuote =
  (author: string) => (year: number) => (quoteText: string) =>
    `"${quoteText}"\n\n- ${author} (${year})`;

export const quoteCrockford = curriedQuote('Doug Crockford');

export const quoteDijkstra = curriedQuote('Edsger Dijkstra');

export const quoteDijkstra75 = quoteDijkstra(1975);
