import type { FC, ReactElement } from 'react';

interface SearchInfoProps {
 query: string;
 results: any[];
}

const SearchInfo: FC<SearchInfoProps> = ({ query, results }): ReactElement => {
  const renderQuery = (): ReactElement => {
    const title: string = !results.length ?
      'No search results found for: ' :
      'Search results for: ';

    return (
      <h1 className="search-info-query">
        {title}
        <span>{query}</span>
      </h1>
    );
  }

  return !results.length ? (
    <div className="search-info-suggestions">
      {renderQuery()}
      <p>Suggestions:</p>
      <ul>
        <li>Make sure all words are spelled correctly.</li>
        <li>Broaden your search by using fewer or more general words.</li>
      </ul>
    </div>
  ) : renderQuery();
};

export default SearchInfo;
