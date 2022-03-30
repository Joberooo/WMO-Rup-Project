import React, { useState } from 'react';
import setStyle from '../../Helpers/Styles';
import Reader from '../ReaderComponent/Reader';
import './Nav.css';

function Nav() {
  const [disciplineCheck, setDsiciplineCheck] = useState<string>('- Active');
  const [categoriesCheck, setCategoriesCheck] = useState<string>('');
  const [activeElement, setActiveElement] = useState<string>('Disciplines');

  return (
    <>
      <div className="Nav">
        <h1>Navigation</h1>
        <div className='NavSection'>
          <h3 onClick={activeDisciplines}>Disciplines {disciplineCheck}</h3>
          <div className='NavElement' style={setStyle("-", activeElement)}>-</div>
          <div className='NavElement' style={setStyle("Modelowanie biznesowe", activeElement)}>Modelowanie biznesowe</div>
          <div className='NavElement' style={setStyle("Gromadzenie wymagan", activeElement)}>Gromadzenie wymagan</div>
          <div className='NavElement' style={setStyle("Analiza i projektowanie", activeElement)}>Analiza i projektowanie</div>
          <div className='NavElement' style={setStyle("Implementacja", activeElement)}>Implementacja</div>
          <div className='NavElement' style={setStyle("Test", activeElement)}>Test</div>
          <div className='NavElement' style={setStyle("Dostarczanie/wdrazanie", activeElement)}>Dostarczanie / wdrazanie</div>
          <div className='NavElement' style={setStyle("Konfiguracja i zmiany", activeElement)}>Konfiguracja i zmiany</div>
          <div className='NavElement' style={setStyle("Zarzadzanie projektami", activeElement)}>Zarzadzanie projektami</div>
          <div className='NavElement' style={setStyle("srodowisko", activeElement)}>Srodowisko</div>
        </div>

        <div className='NavSection'>
          <h3 onClick={activeCategories}>Categories {categoriesCheck}</h3>
          <div className='NavElement Bigger' style={setStyle("Micro", activeElement)}>Micro</div>
          <div className='NavElement Bigger' style={setStyle("Small", activeElement)}>Small</div>
          <div className='NavElement Bigger' style={setStyle("Medium", activeElement)}>Medium</div>
          <div className='NavElement Bigger' style={setStyle("Big", activeElement)}>Big</div>
          <div className='NavElement Bigger' style={setStyle("VeryBig", activeElement)}>Very Big</div>
          <div className='NavElement Bigger' style={setStyle("Huge", activeElement)}>Huge</div>
        </div>
      </div>
      <Reader activeSystem={activeElement}/>
    </>
  );

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
