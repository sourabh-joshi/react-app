import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
  {
    label: 'Afrikaans',
    value: 'af'
  },
  {
    label: 'Arabic',
    value: 'ar'
  },
  {
    label: 'Hindi',
    value: 'hi'
  }
];

const TranslateApp = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('Hello');

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter text for translation</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown
        label="Select a language"
        options={options}
        selectedItem={language}
        onSelectedItemChange={setLanguage}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert language={language.value} text={text} />
    </div>
  );
};

export default TranslateApp;
