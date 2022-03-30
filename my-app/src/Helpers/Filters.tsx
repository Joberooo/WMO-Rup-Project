import Filters from "./Interfaces";
import RUPData from "./Classes";
import { Categories } from "./Enums";

export default function getNewFilters(id: string, filters: Filters[]): Filters[]{
  var timeFilters: Filters[] = [];

  filters.forEach(element => {
    if(element.id === id){
      var x: Filters;
      if(element.style.background === '#fff'){
        x = {id: element.id, status: !element.status, style: {background: '#0f0'}};
        timeFilters = [...timeFilters, x];
      }
      else {
        x = {id: element.id, status: !element.status, style: {background: '#fff'}};
        timeFilters = [...timeFilters, x];
      }
    }
    else timeFilters = [...timeFilters, element];
  })

  return timeFilters;
}

export function getNewFilteredRupData(rupData: RUPData[], filters: Filters[]): RUPData[]{
  var timeRupData: RUPData[] = [];

  filters.forEach(filter => {
    if(filter.status){
      rupData.forEach(singleRupData => {
        if(singleRupData.discipline == filter.id) timeRupData = [...timeRupData, singleRupData];
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

        if(checkParameter === filter.id) timeRupDataTwo = [...timeRupDataTwo, singleRupData];
      })
    }
  });

  timeRupDataTwo.sort((a, b) => a.index - b.index);

  return timeRupDataTwo;
}