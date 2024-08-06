// 20. Implement a React component that displays a list of items with virtualization.

import React from 'react';
import { FixedSizeList as List } from 'react-window';

function VirtualizedList() {
  const items = Array.from({ length: 1000 }, (_, i) => `Item ${i + 1}`);

  return (
    <List
      height={400}
      itemCount={items.length}
      itemSize={35}
      width={300}
    >
      {({ index, style }) => (
        <div style={style} key={index}>{items[index]}</div>
      )}
    </List>
  );
}

export default VirtualizedList;

