import React, { useState } from "react";

const InputForm = props => {
  const [inputData, setInputData] = useState("");
  const [textAreaData, setTextAreaData] = useState("");

  const handleSubmit = evt => {
    evt.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
      <label>
        Some Input Tag:{" "}
        
        <input
          type="text"
          name="input-field"
          value={inputData}
          onChange={e => setInputData(e.target.value)}
        />
      </label>
      {inputData}
      </div>
      <div id="textarea">
      <label>
        Some Textarea Tag:{" "}
        
        <textarea
          name="textarea-field"
          onChange={e => setTextAreaData(e.target.value)}
          value={textAreaData}
        >
          {textAreaData}
        </textarea>
      </label>
      {textAreaData}
      </div>
    </form>
  );
};

export default InputForm;
