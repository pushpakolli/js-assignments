// 4. Handle Form Submission and Validation

import React, { useState } from 'react';

function FormComponent() {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name) {
      setError('Name is required');
    } else {
      setError('');
      alert(`Submitted name: ${name}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <button type="submit">Submit</button>
      {error && <p>{error}</p>}
    </form>
  );
}

export default FormComponent;
