import React, { useState } from 'react';
import { marked } from 'marked';

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

const MarkdownPreviwer = () => {
  const [markdown, setMarkdown] = useState(initialMarkdown);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  marked.setOptions({
    breaks: true,
  });

  return (
    <>
      <div id="heading">
        <h1>Markdown Previewer</h1>
      </div>
      <div className="App">
        <textarea id="editor" value={markdown} onChange={handleChange} />
        <div
          id="preview"
          dangerouslySetInnerHTML={{ __html: marked(markdown) }}
        />
      </div>
    </>
  );
}
export default MarkdownPreviwer;
