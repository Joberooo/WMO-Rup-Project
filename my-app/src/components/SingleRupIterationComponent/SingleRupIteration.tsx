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

  return (
    <>
      <div className={'RupCell RupHeaders left' + (state.last ? ' bottom' : '')}><p>Iteration {state.iteration}</p></div>
      <div className={'RupCell center' + (state.last ? ' bottom' : '')}>{state.inceptionData?.map(item => <SingleRupData key={item.index} singleRupData={item} activeSystem={state.activeSystem} />)}</div>
      <div className={'RupCell center' + (state.last ? ' bottom' : '')}>{state.elaborationData?.map(item => <SingleRupData key={item.index} singleRupData={item} activeSystem={state.activeSystem} />)}</div>
      <div className={'RupCell center' + (state.last ? ' bottom' : '')}>{state.constructionData?.map(item => <SingleRupData key={item.index} singleRupData={item} activeSystem={state.activeSystem} />)}</div>
      <div className={'RupCell right' + (state.last ? ' bottom' : '')}>{state.transitionData?.map(item => <SingleRupData key={item.index} singleRupData={item} activeSystem={state.activeSystem} />)}</div>
    </>
  );
}

export default SingleRupIteration;
