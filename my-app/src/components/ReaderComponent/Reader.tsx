import React, { useState } from 'react';
import './Reader.css';
import * as Papa from 'papaparse';
import RUPData from './RUPDataClass';

function Reader() {
  const [text, setText] = useState();
  const [data, setData] = useState<RUPData[]>();

  function load() {
    fetch( './Data/data.csv' )
    .then( response => response.text() )
    .then( responseText => {
        var data = Papa.parse<RUPData>(responseText, {
          header: true
        });
        console.log('data:', data);
    });
  }

  load();

  return (
    <div className="Reader">
      <h3>RUP Data:</h3>
      <p>{text}</p>
    </div>
  );
}

export default Reader;

