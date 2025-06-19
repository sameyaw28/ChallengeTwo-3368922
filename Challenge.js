class SearchSuggestionSystem {
  constructor(products) {
    // Sort products lexicographically
    this.products = products.sort();
  }

  getSuggestions(searchWord) {
    const result = [];
    let prefix = '';

    for (let char of searchWord) {
      prefix += char;

      // Filter products matching current prefix
      const matches = this.products.filter(p => p.startsWith(prefix));

      // Take up to 3 results
      result.push(matches.slice(0, 3));
    }

    return result;
  }
}
