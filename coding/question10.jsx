// 10.10. Write a React component that uses React Context for state management.

import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext();

function ProviderComponent({ children }) {
  const [value, setValue] = useState('Initial Value');

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
}

function ConsumerComponent() {
  const { value, setValue } = useContext(MyContext);
  return (
    <div>
      <p>Value: {value}</p>
      <button onClick={() => setValue('Updated Value')}>Update Value</button>
    </div>
  );
}

function App() {
  return (
    <ProviderComponent>
      <ConsumerComponent />
    </ProviderComponent>
  );
}

export default App;
