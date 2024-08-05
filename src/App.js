// src/App.js
import React, { useState } from 'react';
import './App.css';
const initialMarkdown = `# Heading
## Sub-heading
[Link](https://example.com)
\`Inline code\`
\`\`\`
Code block
\`\`\`
- List item
> Blockquote
![Image](https://via.placeholder.com/150)
**Bold text**
`;

function App() {
  const [markdown, setMarkdown] = useState(initialMarkdown);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="App">
      <textarea id="editor" value={markdown} onChange={handleChange}></textarea>
      <div id="preview">
        {markdown}
      </div>
    </div>
  );
}

export default App;

