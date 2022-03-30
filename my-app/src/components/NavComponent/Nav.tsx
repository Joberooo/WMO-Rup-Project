import React, { useState } from 'react';
import { Categories, Disciplines } from '../../Helpers/Enums';
import getNewFilters from '../../Helpers/Filters';
import Filters from '../../Helpers/Interfaces';
import { setStyle } from '../../Helpers/Styles';
import Reader from '../ReaderComponent/Reader';
import './Nav.css';

function Nav() {
  const [disciplineCheck, setDsiciplineCheck] = useState<string>('- Active');
  const [categoriesCheck, setCategoriesCheck] = useState<string>('');
  const [activeElement, setActiveElement] = useState<string>('Disciplines');
  const [filters, setFilters] = useState<Filters[]>(
    [
      {id: Disciplines.Null, status: true, style: {background: '#0f0'}},
      {id: Disciplines.BusinessModelling, status: true, style: {background: '#0f0'}},
      {id: Disciplines.Requirements, status: true, style: {background: '#0f0'}},
      {id: Disciplines.AnalysisAndDesign, status: true, style: {background: '#0f0'}},
      {id: Disciplines.Implementation, status: true, style: {background: '#0f0'}},
      {id: Disciplines.Test, status: true, style: {background: '#0f0'}},
      {id: Disciplines.Deployment, status: true, style: {background: '#0f0'}},
      {id: Disciplines.ConfigurationAndChange, status: true, style: {background: '#0f0'}},
      {id: Disciplines.ProjectManagement, status: true, style: {background: '#0f0'}},
      {id: Disciplines.Environment, status: true, style: {background: '#0f0'}},
      {id: Categories.Micro, status: true, style: {background: '#0f0'}},
      {id: Categories.Small, status: true, style: {background: '#0f0'}},
      {id: Categories.Medium, status: true, style: {background: '#0f0'}},
      {id: Categories.Big, status: true, style: {background: '#0f0'}},
      {id: Categories.VeryBig, status: true, style: {background: '#0f0'}},
      {id: Categories.Huge, status: true, style: {background: '#0f0'}},
    ]);

  return (
    <>
      <div className="Nav">
        <h1>Navigation</h1>
        <div className='NavSection'>
          <h3 onClick={activeDisciplines}>Disciplines {disciplineCheck}</h3>
          <div id={filters[0].id} className='NavElement' onClick={(e) => changeFilter(e.currentTarget.id)} style={setStyle("-", activeElement)}>
            -<div className='my-checkbox' style={filters[0].style}></div></div>
          <div id={filters[1].id} className='NavElement' onClick={(e) => changeFilter(e.currentTarget.id)} style={setStyle("Modelowanie biznesowe", activeElement)}>
            Modelowanie biznesowe<div className='my-checkbox' style={filters[1].style}></div></div>
          <div id={filters[2].id} className='NavElement' onClick={(e) => changeFilter(e.currentTarget.id)} style={setStyle("Gromadzenie wymagan", activeElement)}>
            Gromadzenie wymagan<div className='my-checkbox' style={filters[2].style}></div></div>
          <div id={filters[3].id} className='NavElement' onClick={(e) => changeFilter(e.currentTarget.id)} style={setStyle("Analiza i projektowanie", activeElement)}>
            Analiza i projektowanie<div className='my-checkbox' style={filters[3].style}></div></div>
          <div id={filters[4].id} className='NavElement' onClick={(e) => changeFilter(e.currentTarget.id)} style={setStyle("Implementacja", activeElement)}>
            Implementacja<div className='my-checkbox' style={filters[4].style}></div></div>
          <div id={filters[5].id} className='NavElement' onClick={(e) => changeFilter(e.currentTarget.id)} style={setStyle("Test", activeElement)}>
            Test<div className='my-checkbox' style={filters[5].style}></div></div>
          <div id={filters[6].id} className='NavElement' onClick={(e) => changeFilter(e.currentTarget.id)} style={setStyle("Dostarczanie/wdrazanie", activeElement)}>
            Dostarczanie / wdrazanie<div className='my-checkbox' style={filters[6].style}></div></div>
          <div id={filters[7].id} className='NavElement' onClick={(e) => changeFilter(e.currentTarget.id)} style={setStyle("Konfiguracja i zmiany", activeElement)}>
            Konfiguracja i zmiany<div className='my-checkbox' style={filters[7].style}></div></div>
          <div id={filters[8].id} className='NavElement' onClick={(e) => changeFilter(e.currentTarget.id)} style={setStyle("Zarzadzanie projektami", activeElement)}>
            Zarzadzanie projektami<div className='my-checkbox' style={filters[8].style}></div></div>
          <div id={filters[9].id} className='NavElement' onClick={(e) => changeFilter(e.currentTarget.id)} style={setStyle("srodowisko", activeElement)}>
            Srodowisko<div className='my-checkbox' style={filters[9].style}></div></div>
        </div>

        <div className='NavSection'>
          <h3 onClick={activeCategories}>Categories {categoriesCheck}</h3>
          <div id={filters[10].id}className='NavElement Bigger' onClick={(e) => changeFilter(e.currentTarget.id)} style={setStyle("Micro", activeElement)}>
            Micro<div className='my-checkbox' style={filters[10].style}></div></div>
          <div id={filters[11].id}className='NavElement Bigger' onClick={(e) => changeFilter(e.currentTarget.id)} style={setStyle("Small", activeElement)}>
            Small<div className='my-checkbox' style={filters[11].style}></div></div>
          <div id={filters[12].id}className='NavElement Bigger' onClick={(e) => changeFilter(e.currentTarget.id)} style={setStyle("Medium", activeElement)}>
            Medium<div className='my-checkbox' style={filters[12].style}></div></div>
          <div id={filters[13].id}className='NavElement Bigger' onClick={(e) => changeFilter(e.currentTarget.id)} style={setStyle("Big", activeElement)}>
            Big<div className='my-checkbox' style={filters[13].style}></div></div>
          <div id={filters[14].id}className='NavElement Bigger' onClick={(e) => changeFilter(e.currentTarget.id)} style={setStyle("VeryBig", activeElement)}>
            Very Big<div className='my-checkbox' style={filters[14].style}></div></div>
          <div id={filters[15].id}className='NavElement Bigger' onClick={(e) => changeFilter(e.currentTarget.id)} style={setStyle("Huge", activeElement)}>
            Huge<div className='my-checkbox' style={filters[15].style}></div></div>
        </div>
      </div>
      <Reader activeSystem={activeElement} filters={filters}/>
    </>
  );

  function changeFilter(id: string){
    setFilters(getNewFilters(id, filters));
  }

  function activeDisciplines(){
    setDsiciplineCheck("- Active");
    setCategoriesCheck("");
    setActiveElement('Disciplines');
  }

  function activeCategories(){
    setDsiciplineCheck("");
    setCategoriesCheck("- Active");
    setActiveElement('Categories');
  }
}

export default Nav;
