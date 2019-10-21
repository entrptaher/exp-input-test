// Import React!
import React, { useState } from 'react'
import { Editor } from 'slate-react'
import { Value } from 'slate'

const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        nodes: [
          {
            object: 'text',
            text: 'A line of text in a paragraph.',
          },
        ],
      },
    ],
  },
})

const SlateEditor = () => {
  const [value, setValue] = useState(initialValue)
  return <Editor value={value} onChange={({value})=>setValue(value)} style={{border: '1px solid gray'}}/>
}

export default SlateEditor;