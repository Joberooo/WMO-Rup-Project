import React, { useState } from 'react';
import Reader from '../ReaderComponent/Reader';
import './Nav.css';

function Nav() {
  const [disciplineCheck, setDsiciplineCheck] = useState<string>('- Active');
  const [categoriesCheck, setCategoriesCheck] = useState<string>('');

  return (
    <>
      <div className="Nav">
        <h1>Navigation</h1>
        <div className='NavSection'>
          <h3 onClick={activeDisciplines}>Disciplines {disciplineCheck}</h3>
          <div className='NavElement' style={setStyle("-")}>-</div>
          <div className='NavElement' style={setStyle("Modelowanie biznesowe")}>Modelowanie biznesowe</div>
          <div className='NavElement' style={setStyle("Gromadzenie wymagan")}>Gromadzenie wymagan</div>
          <div className='NavElement' style={setStyle("Analiza i projetkowanie")}>Analiza i projetkowanie</div>
          <div className='NavElement' style={setStyle("Implementacja")}>Implementacja</div>
          <div className='NavElement' style={setStyle("Test")}>Test</div>
          <div className='NavElement' style={setStyle("Dostarczanie/wdrazanie")}>Dostarczanie / wdrazanie</div>
          <div className='NavElement' style={setStyle("Konfiguracja i zmiany")}>Konfiguracja i zmiany</div>
          <div className='NavElement' style={setStyle("Zarządzanie projektami")}>Zarządzanie projektami</div>
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
      <Reader />
    </>
  );

  function activeDisciplines(){
    setDsiciplineCheck("- Active");
    setCategoriesCheck("");
  }

  function activeCategories(){
    setDsiciplineCheck("");
    setCategoriesCheck("- Active");
  }

  function setStyle(discipline: string): React.CSSProperties{
    const styles: React.CSSProperties = {
      background: "#FFF",
      color: "#000"
    }

    if(disciplineCheck !== "") {
      if(discipline === "-") styles.background = "#FFF4E4";
      else if(discipline === "Modelowanie biznesowe") {
        styles.background = "#0C4767";
        styles.color = "#fff";
      }
      else if(discipline === "Gromadzenie wymagan") {
        styles.background = "#566E3D";
        styles.color = "#fff";
      }
      else if(discipline === "Analiza i projetkowanie") styles.background = "#FE9920";
      else if(discipline === "Implementacja") styles.background = "#FA7921";
      else if(discipline === "Test") styles.background = "#B9A44C";
      else if(discipline === "Dostarczanie/wdrazanie") styles.background = "#FF57BB";
      else if(discipline === "Konfiguracja i zmiany") styles.background = "#1AC8ED";
      else if(discipline === "Zarządzanie projektami") {
        styles.background = "#8E5572";
        styles.color = "#fff";
      }
      else if(discipline === "srodowisko") styles.background = "#A7CECB";
    }
    if(categoriesCheck !== "") {
      if(discipline === "Micro") {
        styles.background = "#FFF4E4";
        styles.color = "#000";
      }
      else if(discipline === "Small") {
        styles.background = "#566E3D";
        styles.color = "#fff";
      }
      else if(discipline === "Medium") styles.background = "#FE9920";
      else if(discipline === "Big") styles.background = "#1AC8ED";
      else if(discipline === "VeryBig") {
        styles.background = "#8E5572";
        styles.color = "#fff";
      }
      else if(discipline === "Huge") styles.background = "#A7CECB";
    }

    return styles;
  }
}

export default Nav;
