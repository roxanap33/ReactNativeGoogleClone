interface ResultMap {
  [key: string]: string;
}
export interface SearchResult {
  resultsMap: ResultMap;
  searchTerm: string;
}

export interface ModalItem {
  id: string;
  image: any;
  text: string;
  link: string;
}
