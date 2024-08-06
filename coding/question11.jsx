// 11. Implement a React component that displays a list of items with infinite scrolling.

import React, { useState, useEffect } from 'react';

function InfiniteScroll() {
  const [items, setItems] = useState(Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`));
  const [hasMore, setHasMore] = useState(true);

  const loadMore = () => {
    if (hasMore) {
      setItems(prevItems => [...prevItems, ...Array.from({ length: 20 }, (_, i) => `Item ${prevItems.length + i + 1}`)]);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
        loadMore();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasMore]);

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {hasMore && <p>Loading more items...</p>}
    </div>
  );
}

export default InfiniteScroll;
