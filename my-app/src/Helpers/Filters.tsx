import Filters from "./Interfaces";
import RUPData from "./Classes";
import { Categories } from "./Enums";

export default function getNewFilters(id: string, filters: Filters[]): Filters[]{
  var timeFilters: Filters[] = [];

  filters.forEach(element => {
    if(element.id === id){
      var x: Filters;
      if(element.style.background === '#fff'){
        timeFilters.push({id: element.id, status: !element.status, style: {background: '#0f0'}});
      }
      else {
        timeFilters.push({id: element.id, status: !element.status, style: {background: '#fff'}});
      }
    }
    else timeFilters.push(element);
  })

  return timeFilters;
}

export function getNewFilteredRupData(rupData: RUPData[], filters: Filters[]): RUPData[]{
  var timeRupData: RUPData[] = [];

  filters.forEach(filter => {
    if(filter.status){
      rupData.forEach(singleRupData => {
        if(singleRupData.discipline == filter.id) timeRupData.push(singleRupData);
      });
    }
  });

  var timeRupDataTwo: RUPData[] = [];

  filters.forEach(filter => {
    if(filter.status){
      timeRupData.forEach(singleRupData => {
        var checkParameter;
        if(singleRupData.microProjects == 1) checkParameter = Categories.Micro;
        else if(singleRupData.smallProjects == 1) checkParameter = Categories.Small;
        else if(singleRupData.avgProjects == 1) checkParameter = Categories.Medium;
        else if(singleRupData.bigProjects == 1) checkParameter = Categories.Big;
        else if(singleRupData.veryBigProjects == 1) checkParameter = Categories.VeryBig;
        else if(singleRupData.hugeProjects == 1) checkParameter = Categories.Huge;

        if(checkParameter === filter.id) timeRupDataTwo.push(singleRupData);
      })
    }
  });

  timeRupDataTwo.sort((a, b) => a.index - b.index);

  return timeRupDataTwo;
}

export function getPhaseData(rupData: RUPData[], phaseName: string): RUPData[]{
  var phaseData: RUPData[] = [];

  rupData.forEach(element => {
    if(element.phase === phaseName && element.type === "Task") phaseData.push(element);
  })

  return phaseData;
}