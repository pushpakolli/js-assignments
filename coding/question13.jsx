// 13. Write a React component that handles errors and exceptions.

import React, { useState } from 'react';

function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);

  const handleError = () => setHasError(true);

  if (hasError) {
    return <h1>Something went wrong.</h1>;
  }

  return (
    <div>
      <button onClick={handleError}>Trigger Error</button>
      {children}
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <div>App Content</div>
    </ErrorBoundary>
  );
}

export default App;
