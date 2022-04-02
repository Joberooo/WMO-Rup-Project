import React, { useEffect, useState } from 'react';
import RUPData from '../../Helpers/Classes';
import { getPhaseData } from '../../Helpers/Filters';
import SingleRupIteration from '../SingleRupIterationComponent/SingleRupIteration';
import './DataTable.css';

type DataTableState = {
  rupData: RUPData[];
  activeSystem: string;
}

export default function DataTable(state: DataTableState) {
  const [iterations, setIterations] = useState<any[]>([]);

  const tasksNumberInSingleIteration = 10;

  useEffect( () => {
    var inceptionData = getPhaseData(state.rupData, "Inception");
    var elaborationData = getPhaseData(state.rupData, "Elaboration");
    var constructionData = getPhaseData(state.rupData, "Construction");
    var transitionData = getPhaseData(state.rupData, "Transition");

    var maxLength = inceptionData.length;
    if(elaborationData.length > maxLength) maxLength = elaborationData.length;
    if(constructionData.length > maxLength) maxLength = constructionData.length;
    if(transitionData.length > maxLength) maxLength = transitionData.length;
    var iterationsNumber = Math.ceil(maxLength / tasksNumberInSingleIteration);

    var iterationsTable: number[] = [];
    var inceptionNumberOfTasksInSingleIteration: number[] = [];
    var inceptionNumberOfTasksInSingleIterationSum = 0;
    var elaborationNumberOfTasksInSingleIteration: number[] = [];
    var elaborationNumberOfTasksInSingleIterationSum = 0;
    var constructionNumberOfTasksInSingleIteration: number[] = [];
    var constructionNumberOfTasksInSingleIterationSum = 0;
    var transitionNumberOfTasksInSingleIteration: number[] = [];
    var transitionNumberOfTasksInSingleIterationSum = 0;
    for(let i = 0; i < iterationsNumber; i++) {
      iterationsTable.push(i);

      var help = Math.ceil((inceptionData.length - inceptionNumberOfTasksInSingleIterationSum) / (iterationsNumber - i));
      inceptionNumberOfTasksInSingleIteration.push(help);
      inceptionNumberOfTasksInSingleIterationSum += help;
      
      help = Math.ceil((elaborationData.length - elaborationNumberOfTasksInSingleIterationSum) / (iterationsNumber - i));
      elaborationNumberOfTasksInSingleIteration.push(help);
      elaborationNumberOfTasksInSingleIterationSum += help;

      help = Math.ceil((constructionData.length - constructionNumberOfTasksInSingleIterationSum) / (iterationsNumber - i));
      constructionNumberOfTasksInSingleIteration.push(help);
      constructionNumberOfTasksInSingleIterationSum += help;

      help = Math.ceil((transitionData.length - transitionNumberOfTasksInSingleIterationSum) / (iterationsNumber - i));
      transitionNumberOfTasksInSingleIteration.push(help);
      transitionNumberOfTasksInSingleIterationSum += help;
    }

    var inceptionIteratorStart = 0;
    var elaborationIteratorStart = 0;
    var constructionIteratorStart = 0;
    var transitionIteratorStart = 0;

    var inceptionIteratorEnd = 0;
    var elaborationIteratorEnd = 0;
    var constructionIteratorEnd = 0;
    var transitionIteratorEnd = 0;
    
    const completeIteration = iterationsTable.map( (value, key) => {
      inceptionIteratorStart += value === 0 ? 0 : inceptionNumberOfTasksInSingleIteration[value - 1];
      elaborationIteratorStart += value === 0 ? 0 : elaborationNumberOfTasksInSingleIteration[value - 1];
      constructionIteratorStart += value === 0 ? 0 : constructionNumberOfTasksInSingleIteration[value - 1];
      transitionIteratorStart += value === 0 ? 0 : transitionNumberOfTasksInSingleIteration[value - 1];

      inceptionIteratorEnd += inceptionNumberOfTasksInSingleIteration[value];
      elaborationIteratorEnd += elaborationNumberOfTasksInSingleIteration[value];
      constructionIteratorEnd += constructionNumberOfTasksInSingleIteration[value];
      transitionIteratorEnd += transitionNumberOfTasksInSingleIteration[value];

      var last = false;
      if(value === iterationsNumber - 1) last = true;

      return <SingleRupIteration key={key} iteration={value + 1} activeSystem={state.activeSystem} last={last}
        inceptionData={inceptionData.slice(inceptionIteratorStart, inceptionIteratorEnd)}
        elaborationData={elaborationData.slice(elaborationIteratorStart, elaborationIteratorEnd)} 
        constructionData={constructionData.slice(constructionIteratorStart, constructionIteratorEnd)} 
        transitionData={transitionData.slice(transitionIteratorStart, transitionIteratorEnd)} />
    })

    setIterations(completeIteration);
  },[state.rupData, state.activeSystem]);

  return (
    <div className='DataTable'>
      <h3>DataTable</h3>
      <div className='RupTable'>

        <div className='RupCell RupHeaders top left'><p>Iteration</p></div>
        <div className='RupCell RupHeaders top center'><p>Inception</p></div>
        <div className='RupCell RupHeaders top center'><p>Elaboration</p></div>
        <div className='RupCell RupHeaders top center'><p>Construction</p></div>
        <div className='RupCell RupHeaders top right'><p>Transition</p></div>

        {iterations}

      </div>
    </div>
  );
}