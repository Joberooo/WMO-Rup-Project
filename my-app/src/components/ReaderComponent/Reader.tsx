import React, { useEffect, useState } from 'react';
import './Reader.css';
import * as Papa from 'papaparse';
import RUPData from '../../Helpers/Classes';
import RupRow from '../RupRowComponent/RupRow';
import Filters from '../../Helpers/Interfaces';
import { getNewFilteredRupData } from '../../Helpers/Filters';
import DataTable from '../DataTableComponent/DataTable';

type ReaderState = {
  activeSystem: string;
  filters: Filters[];
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
    .then( responseText => Papa.parse<RUPData>(responseText, {header: true}).data)
    .then( responseData => getNewFilteredRupData(responseData, state.filters))
    .then( responseFilteredData => setRupData(responseFilteredData));
  },[state.filters]);

  return (
    <div className="Reader">
      <div className='RupData'>
        <DataTable rupData={rupData} activeSystem={state.activeSystem}/>
        <h4 onClick={toogleRupData}>Complete RUP Data {toogleSign}</h4>
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

