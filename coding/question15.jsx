// 15. Create a React component that uses React Memo for performance optimization.

import React, { memo, useState } from 'react';

const MemoizedComponent = memo(({ value }) => {
  console.log('Rendering:', value);
  return <p>{value}</p>;
});

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <MemoizedComponent value={count} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default App;


