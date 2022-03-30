import React, { useEffect, useState } from 'react';
import './Reader.css';
import * as Papa from 'papaparse';
import RUPData from './RUPDataClass';
import RupRow from '../RupRowComponent/RupRow';

type ReaderState = {
  activeSystem: string;
}

function Reader(state: ReaderState) {
  const [rupData, setRupData] = useState<RUPData[]>([]);
  const [toogleSign, setToogleSign] = useState<string>('+');
  const [rupDataTableStyles, setRupDataTableStyles] = useState<React.CSSProperties>({
    display: 'none',
  });

  useEffect( () => {
    fetch( './Data/data.csv' )
    .then( response => response.text())
    .then( responseText => setRupData(Papa.parse<RUPData>(responseText, {header: true}).data));
  },[]);

  return (
    <div className="Reader">
      <div className='RupData'>
        <h3 onClick={toogleRupData}>Complete RUP Data {toogleSign}</h3>
        <div className='RupDataTable' style={rupDataTableStyles}>
          {rupData?.map(item => <RupRow rupRow={item} activeSystem={state.activeSystem}/>)}
        </div>
      </div>
    </div>
  );

  function toogleRupData(){
    if(toogleSign === "+") {
      setToogleSign("-");
      setRupDataTableStyles({
        display: 'block'
      });
    }
    else {
      setToogleSign("+");
      setRupDataTableStyles({
        display: 'none'
      });
    }
  }
}

export default Reader;

