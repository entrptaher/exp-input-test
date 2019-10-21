import React from 'react';
import ReactDOM from 'react-dom';
import { Editor, EditorState } from 'draft-js';

function MyEditor() {
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  );

  const editor = React.useRef(null);

  function focusEditor() {
    editor.current.focus();
  }

  React.useEffect(() => {
    focusEditor()
  }, []);
  
  return (
    <div onClick={focusEditor}>
      <div style={{ border: '1px solid gray' }}>
      <Editor
        ref={editor}
        editorState={editorState}
        className="editor"
        onChange={editorState => setEditorState(editorState)}
        
      />
      </div>
      {editorState.getCurrentContent().getPlainText('\u0001')}
    </div>
  );
}

export default MyEditor;