import React, { useState } from 'react';
import RUPData from '../ReaderComponent/RUPDataClass';
import './RupRow.css';

type RupRowState = {
  rupRow: RUPData;
}

function RupRow(state:RupRowState){

  return(
    <div className="RupRow">
      <div className='RupCellLine LineOne'>
        <div className='RupCell'>
          <div className='RupCellHeader'>Phase:</div>
          <div className='RupCellContent'>{state.rupRow.phase}</div>
        </div>
        <div className='RupCell'>
          <div className='RupCellHeader'>Name:</div>
          <div className='RupCellContent'>{state.rupRow.name}</div>
        </div>
        <div className='RupCell'>
          <div className='RupCellHeader'>Index:</div>
          <div className='RupCellContent'>{state.rupRow.index}</div>
        </div>
        <div className='RupCell'>
          <div className='RupCellHeader'>Predecessors:</div>
          <div className='RupCellContent'>{state.rupRow.predecessors}</div>
        </div>
        <div className='RupCell'>
          <div className='RupCellHeader'>Type:</div>
          <div className='RupCellContent'>{state.rupRow.type}</div>
        </div>
        <div className='RupCell'>
          <div className='RupCellHeader'>MicroProjects:</div>
          <div className='RupCellContent'>{state.rupRow.microProjects}</div>
        </div>
        <div className='RupCell'>
          <div className='RupCellHeader'>SmallProjects:</div>
          <div className='RupCellContent'>{state.rupRow.smallProjects}</div>
        </div>
      </div>
      <div className='RupCellLine LineTwo'>
        <div className='RupCell'>
          <div className='RupCellHeader'>AvgProjects:</div>
          <div className='RupCellContent'>{state.rupRow.avgProjects}</div>
        </div>
        <div className='RupCell'>
          <div className='RupCellHeader'>BigProjects:</div>
          <div className='RupCellContent'>{state.rupRow.bigProjects}</div>
        </div>
        <div className='RupCell'>
          <div className='RupCellHeader'>VeryBigProjects:</div>
          <div className='RupCellContent'>{state.rupRow.veryBigProjects}</div>
        </div>
        <div className='RupCell'>
          <div className='RupCellHeader'>HugeProjects:</div>
          <div className='RupCellContent'>{state.rupRow.hugeProjects}</div>
        </div>
        <div className='RupCell'>
          <div className='RupCellHeader'>Discipline:</div>
          <div className='RupCellContent'>{state.rupRow.discipline}</div>
        </div>
        <div className='RupCell'>
          <div className='RupCellHeader'>Author:</div>
          <div className='RupCellContent'>{state.rupRow.author}</div>
        </div>
      </div>
      <div className='RupCellLine'>
        <div className='RupCellHeader'>Description:</div>
        <div className='RupCellContent'>{state.rupRow.description}</div>
      </div>
    </div>
  )
}

export default RupRow;

