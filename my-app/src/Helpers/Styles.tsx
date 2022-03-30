export default function setStyle(checkParameter: string, activeSystem: string): React.CSSProperties{
    const styles: React.CSSProperties = {
      background: "#FFF",
      color: "#000"
    }

    if(activeSystem === "Disciplines") {
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
    if(activeSystem === "Categories") {
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