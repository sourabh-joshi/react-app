import React, { useEffect, useState } from 'react';
import axios from 'axios';

const KEY = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM';
const Convert = ({ language, text }) => {
  const [translatedText, setTranslatedText] = useState('');
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timeoutId = setTimeout(() => setDebouncedText(text), 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [text]);

  useEffect(() => {
    console.log('New language or text');
    const translate = async () => {
      const { data } = await axios.post(
        'https://translation.googleapis.com/language/translate/v2',
        {},
        {
          params: {
            key: KEY,
            q: debouncedText,
            target: language
          }
        }
      );
      setTranslatedText(data.data.translations[0].translatedText);
      console.log(data);
    };
    translate();
  }, [language, debouncedText]);

  return (
    <div>
      <h1 className="ui header">{translatedText}</h1>
    </div>
  );
};

export default Convert;
