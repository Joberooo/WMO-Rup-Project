import React, { useEffect, useState } from 'react';
import './Reader.css';
import * as Papa from 'papaparse';
import RUPData from './RUPDataClass';
import RupRow from '../RupRowComponent/RupRow';

function Reader() {
  const [rupData, setRupData] = useState<RUPData[]>();

  useEffect( () => {
    fetch( './Data/data.csv' )
    .then( response => response.text())
    .then( responseText => setRupData(Papa.parse<RUPData>(responseText, {header: true}).data));
  },[]);

  return (
    <div className="Reader">
      <h3>RUP Data:</h3>
      <div className='RupDataTable'>
        {rupData?.map(item => <RupRow rupRow={item}/>)}
      </div>
    </div>
  );
}

export default Reader;

