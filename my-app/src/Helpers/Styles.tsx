import { Categories, Disciplines } from "./Enums";

export default function setStyle(checkParameter: string, activeSystem: string): React.CSSProperties{
    const styles: React.CSSProperties = {
      background: "#FFF",
      color: "#000"
    }

    if(activeSystem === "Disciplines") {
      if(checkParameter === "-") styles.background = "#FFF4E4";
      else if(checkParameter === Disciplines.BusinessModelling) {
        styles.background = "#0C4767";
        styles.color = "#fff";
      }
      else if(checkParameter === Disciplines.Requirements) {
        styles.background = "#566E3D";
        styles.color = "#fff";
      }
      else if(checkParameter === Disciplines.AnalysisAndDesign) styles.background = "#FE9920";
      else if(checkParameter === Disciplines.Implementation) styles.background = "#FA7921";
      else if(checkParameter === Disciplines.Test) styles.background = "#B9A44C";
      else if(checkParameter === Disciplines.Deployment) styles.background = "#FF57BB";
      else if(checkParameter === Disciplines.ConfigurationAndChange) styles.background = "#1AC8ED";
      else if(checkParameter === Disciplines.ProjectManagement) {
        styles.background = "#8E5572";
        styles.color = "#fff";
      }
      else if(checkParameter === Disciplines.Environment) styles.background = "#A7CECB";
    }
    if(activeSystem === "Categories") {
      if(checkParameter === Categories.Micro) {
        styles.background = "#FFF4E4";
        styles.color = "#000";
      }
      else if(checkParameter === Categories.Small) {
        styles.background = "#566E3D";
        styles.color = "#fff";
      }
      else if(checkParameter === Categories.Medium) styles.background = "#FE9920";
      else if(checkParameter === Categories.Big) styles.background = "#1AC8ED";
      else if(checkParameter === Categories.VeryBig) {
        styles.background = "#8E5572";
        styles.color = "#fff";
      }
      else if(checkParameter === Categories.Huge) styles.background = "#A7CECB";
    }

    return styles;
  }