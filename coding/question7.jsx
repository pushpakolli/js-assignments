//7. Use React Hooks to Manage State

import React, { useState } from 'react';

function HookComponent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default HookComponent;


