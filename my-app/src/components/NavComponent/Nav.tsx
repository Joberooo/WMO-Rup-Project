import React, { useState } from 'react';
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
          <div className='NavElement' style={setStyle("-")}>-</div>
          <div className='NavElement' style={setStyle("Modelowanie biznesowe")}>Modelowanie biznesowe</div>
          <div className='NavElement' style={setStyle("Gromadzenie wymagan")}>Gromadzenie wymagan</div>
          <div className='NavElement' style={setStyle("Analiza i projektowanie")}>Analiza i projektowanie</div>
          <div className='NavElement' style={setStyle("Implementacja")}>Implementacja</div>
          <div className='NavElement' style={setStyle("Test")}>Test</div>
          <div className='NavElement' style={setStyle("Dostarczanie/wdrazanie")}>Dostarczanie / wdrazanie</div>
          <div className='NavElement' style={setStyle("Konfiguracja i zmiany")}>Konfiguracja i zmiany</div>
          <div className='NavElement' style={setStyle("Zarzadzanie projektami")}>Zarzadzanie projektami</div>
          <div className='NavElement' style={setStyle("srodowisko")}>Srodowisko</div>
        </div>

        <div className='NavSection'>
          <h3 onClick={activeCategories}>Categories {categoriesCheck}</h3>
          <div className='NavElement Bigger' style={setStyle("Micro")}>Micro</div>
          <div className='NavElement Bigger' style={setStyle("Small")}>Small</div>
          <div className='NavElement Bigger' style={setStyle("Medium")}>Medium</div>
          <div className='NavElement Bigger' style={setStyle("Big")}>Big</div>
          <div className='NavElement Bigger' style={setStyle("VeryBig")}>Very Big</div>
          <div className='NavElement Bigger' style={setStyle("Huge")}>Huge</div>
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

  function setStyle(checkParameter: string): React.CSSProperties{
    const styles: React.CSSProperties = {
      background: "#FFF",
      color: "#000"
    }

    if(activeElement === "Disciplines") {
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
    if(activeElement === "Categories") {
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

export default Nav;
