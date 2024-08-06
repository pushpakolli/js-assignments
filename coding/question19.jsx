// 19. Write a React component that implements a tooltip.

import React, { useState } from 'react';

function Tooltip() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        Hover over me
      </button>
      {visible && <div style={{ position: 'absolute', background: 'gray', color: 'white', padding: '5px' }}>Tooltip</div>}
    </div>
  );
}

export default Tooltip;
