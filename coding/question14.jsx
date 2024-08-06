// 14. Implement a React component that displays a list of items with filtering and sorting.

import React, { useState } from 'react';

function FilterSortList() {
  const [query, setQuery] = useState('');
  const [sortAsc, setSortAsc] = useState(true);

  const items = ['Banana', 'Apple', 'Cherry'];
  const filteredItems = items
    .filter(item => item.toLowerCase().includes(query.toLowerCase()))
    .sort((a, b) => (sortAsc ? a.localeCompare(b) : b.localeCompare(a)));

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search"
      />
      <button onClick={() => setSortAsc(!sortAsc)}>Sort {sortAsc ? 'Descending' : 'Ascending'}</button>
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default FilterSortList;
