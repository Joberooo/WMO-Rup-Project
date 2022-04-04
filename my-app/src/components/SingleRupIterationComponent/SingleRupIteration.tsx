import { useState } from 'react';
import RUPData from '../../Helpers/Classes';
import SingleRupData from '../SingleRupDataComponent/SingleRupData';
import './SingleRupIteration.css';

type SingleRupIterationState = {
  iteration: number;
  activeSystem: string;
  last: boolean;
  inceptionData: RUPData[];
  elaborationData: RUPData[];
  constructionData: RUPData[];
  transitionData: RUPData[];
}

function SingleRupIteration(state: SingleRupIterationState) {
  const [toogleSign, setToogleSign] = useState<string>('-');

  return (
    <>
      <div className={'RupCell RupHeaders left' + (state.last ? ' bottom' : '')} onClick={toogleIteration}><p>Iteration {state.iteration} {toogleSign}</p></div>
      <div className={'RupCell center' + (state.last ? ' bottom' : '')}>{state.inceptionData?.map(item => <SingleRupData key={item.index} singleRupData={item} activeSystem={state.activeSystem} hide={toogleSign === '+' ? true : false} />)}</div>
      <div className={'RupCell center' + (state.last ? ' bottom' : '')}>{state.elaborationData?.map(item => <SingleRupData key={item.index} singleRupData={item} activeSystem={state.activeSystem} hide={toogleSign === '+' ? true : false} />)}</div>
      <div className={'RupCell center' + (state.last ? ' bottom' : '')}>{state.constructionData?.map(item => <SingleRupData key={item.index} singleRupData={item} activeSystem={state.activeSystem} hide={toogleSign === '+' ? true : false} />)}</div>
      <div className={'RupCell right' + (state.last ? ' bottom' : '')}>{state.transitionData?.map(item => <SingleRupData key={item.index} singleRupData={item} activeSystem={state.activeSystem} hide={toogleSign === '+' ? true : false} />)}</div>
    </>
  );

  function toogleIteration(){
    if(toogleSign === "+") {
      setToogleSign("-");
    }
    else {
      setToogleSign("+");
    }
  }
}

export default SingleRupIteration;
