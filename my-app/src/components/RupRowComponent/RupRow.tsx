import React from 'react';
import RUPData from '../ReaderComponent/RUPDataClass';
import './RupRow.css';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type RupRowState = {
  rupRow: RUPData;
  activeSystem: string;
}

function RupRow(state:RupRowState){
  const notifyDescription = () => toast.info(state.rupRow.description);

  return(
    <div className="RupRow" style={checkActiveSystemAndSetStyle()} onClick={notifyDescription}>
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
  );

  function checkActiveSystemAndSetStyle(): React.CSSProperties{
    var checkParameter: string = state.rupRow.discipline;

    if(state.activeSystem === "Disciplines") checkParameter = state.rupRow.discipline;
    else if(state.activeSystem === "Categories"){
      if(state.rupRow.microProjects == 1) checkParameter = "Micro";
      else if(state.rupRow.smallProjects == 1) checkParameter = "Small";
      else if(state.rupRow.avgProjects == 1) checkParameter = "Medium";
      else if(state.rupRow.bigProjects == 1) checkParameter = "Big";
      else if(state.rupRow.veryBigProjects == 1) checkParameter = "VeryBig";
      else if(state.rupRow.hugeProjects == 1) checkParameter = "Huge";
    }

    return setStyle(checkParameter);
  }

  function setStyle(checkParameter: string): React.CSSProperties{
    const styles: React.CSSProperties = {
      background: "#FFF",
      color: "#000"
    }

    if(state.activeSystem === "Disciplines") {
      if(checkParameter === "-") styles.background = "#FFF4E4";
      else if(checkParameter === "Modelowanie biznesowe") {
        styles.background = "#0C4767";
        styles.color = "#fff";
      }
      else if(checkParameter === "Gromadzenie wymagan") {
        styles.background = "#566E3D";
        styles.color = "#fff";
      }
      else if(checkParameter === "Analiza i projektowanie") styles.background = "#FE9920";
      else if(checkParameter === "Implementacja") styles.background = "#FA7921";
      else if(checkParameter === "Test") styles.background = "#B9A44C";
      else if(checkParameter === "Dostarczanie/wdrazanie") styles.background = "#FF57BB";
      else if(checkParameter === "Konfiguracja i zmiany") styles.background = "#1AC8ED";
      else if(checkParameter === "Zarzadzanie projektami") {
        styles.background = "#8E5572";
        styles.color = "#fff";
      }
      else if(checkParameter === "srodowisko") styles.background = "#A7CECB";
    }
    if(state.activeSystem === "Categories") {
      if(checkParameter === "Micro") {
        styles.background = "#FFF4E4";
        styles.color = "#000";
      }
      else if(checkParameter === "Small") {
        styles.background = "#566E3D";
        styles.color = "#fff";
      }
      else if(checkParameter === "Medium") styles.background = "#FE9920";
      else if(checkParameter === "Big") styles.background = "#1AC8ED";
      else if(checkParameter === "VeryBig") {
        styles.background = "#8E5572";
        styles.color = "#fff";
      }
      else if(checkParameter === "Huge") styles.background = "#A7CECB";
    }

    return styles;
  }
}

export default RupRow;