import React, { useEffect, useState } from 'react';
import RUPData from '../../Helpers/Classes';
import { getPhaseData } from '../../Helpers/Filters';
import SingleRupData from '../SingleRupDataComponent/SingleRupData';
import './DataTable.css';

type DataTableState = {
  rupData: RUPData[];
  activeSystem: string;
}

function DataTable(state: DataTableState) {
  const [iceptionData, setInceptionData] = useState<RUPData[]>([]);
  const [elaborationData, setElaborationData] = useState<RUPData[]>([]);
  const [constructionData, setConstructionData] = useState<RUPData[]>([]);
  const [transitionData, setTransitionData] = useState<RUPData[]>([]);

  useEffect( () => {
    setInceptionData(getPhaseData(state.rupData, "Inception"));
    setElaborationData(getPhaseData(state.rupData, "Elaboration"));
    setConstructionData(getPhaseData(state.rupData, "Construction"));
    setTransitionData(getPhaseData(state.rupData, "Transition"));
  },[state.rupData]);

  return (
    <div className='DataTable'>
      <h3>DataTable</h3>
      <div className='RupTable'>

          <div className='RupCell RupHeaders top left'><p>Iteration</p></div>
          <div className='RupCell RupHeaders top center'><p>Inception</p></div>
          <div className='RupCell RupHeaders top center'><p>Elaboration</p></div>
          <div className='RupCell RupHeaders top center'><p>Construction</p></div>
          <div className='RupCell RupHeaders top right'><p>Transition</p></div>

          <div className='RupCell RupHeaders left'><p>Iteration 1</p></div>
          <div className='RupCell center'>{iceptionData?.map(item => <SingleRupData singleRupData={item} activeSystem={state.activeSystem}/>)}</div>
          <div className='RupCell center'>{elaborationData?.map(item => <SingleRupData singleRupData={item} activeSystem={state.activeSystem}/>)}</div>
          <div className='RupCell center'>{constructionData?.map(item => <SingleRupData singleRupData={item} activeSystem={state.activeSystem}/>)}</div>
          <div className='RupCell right'>{transitionData?.map(item => <SingleRupData singleRupData={item} activeSystem={state.activeSystem}/>)}</div>

      </div>
    </div>
  );
}

export default DataTable;
