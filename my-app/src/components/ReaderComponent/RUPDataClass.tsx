export default class RUPData{
    phase: string;
    name: string;
    index: number;
    predecessors: string;
    type: string;
    microProjects: number;
    smallProjects: number;
    avgProjects: number;
    bigProjects: number;
    veryBigProjects: number;
    hugeProjects: number;
    category: string;
    discipline: string;
    description: string;
    author: string;

    constructor(phase: string, name: string, index: number, predecessors: string, type: string, microProjects: number, 
        smallProjects: number, avgProjects: number, bigProjects: number, veryBigProjects: number, hugeProjects: number,
        category: string, discipline: string, description: string, author: string){
            this.phase = phase;
            this.name = name;
            this.index = index;
            this.predecessors = predecessors;
            this.type = type;
            this.microProjects = microProjects;
            this.smallProjects = smallProjects;
            this.avgProjects = avgProjects;
            this.bigProjects = bigProjects;
            this.veryBigProjects = veryBigProjects;
            this.hugeProjects = hugeProjects;
            this.category = category;
            this.discipline = discipline;
            this.description = description;
            this.author = author;
    }
}