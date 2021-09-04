abstract class ComputerDirectory {
    public add(computerDirectory: ComputerDirectory) {
    }
    public remove(computerDirectory: ComputerDirectory) {
    }

    public getName(): string {
        throw new RangeError();
    }
    public getDescription(): string {
        throw new RangeError();
    }

    public singleClick() {
    }

    public doubleClick(){
    }
}

class Files extends ComputerDirectory {
    name!: string;
    description!: string;

    constructor(name: string, description: string) {
        super();
        this.name = name;
        this.description = description;
    }

    public getName(): string {
        return this.name;
    }

    public getDescription(): string {
        return this.description;
    }

    public singleClick(){
         console.log(`Name: ${this.getName()}, Type: ${this.getDescription()}`);
    }

    public doubleClick(){
        console.log(`${this.getName()} ${this.getDescription()} is opened`);
   }

}

class Folders extends ComputerDirectory {
    private computerDirectories: Array<ComputerDirectory> = []
    name!: string;
    description!: string;

    constructor(name: string, description: string) {
        super();
        this.name = name;
        this.description = description;
    }

    public add(folderComponent: ComputerDirectory) {
        this.computerDirectories.push(folderComponent);
    }
    public remove(folderComponent: ComputerDirectory) {
        this.computerDirectories = this.computerDirectories.filter(folder => folder !== folderComponent);
    }
    
    public getName(): string {
        return this.name;
    }
    public getDescription(): string {
        return this.description;
    }

    public singleClick(){
         console.log(`Name: ${this.getName()}, Type: ${this.getDescription()}`);
    }

    public doubleClick(){
         console.log(`${this.getName()} ${this.getDescription()} is opened`);
         console.log('Contents:');

         for (let entry of this.computerDirectories) {
            entry.singleClick();
        }    
    }
}


let strategy: Files = new Files ('Strategy Pattern', "ppt")
let observer: Files = new Files ("Observer Pattern", "pdf")
let composite: Files = new Files ("Composite Pattern", "ppt")

let midSyllabus: Files = new Files ("Mid Syllabus", "doc")
let finalSyllabus: Files = new Files ("Final Syllabus", "pdf")

let assignment1: Files = new Files ("Assignment-1", "pdf")
let assignment2: Files = new Files ("Assignment-2", "pdf")
let readME: Files = new Files ("readME", "text")

let midExam: Folders = new Folders("Mid Exam", "Folder")
let finalExam: Folders = new Folders("Final Exam", "Folder")

let lectures: Folders = new Folders("Lectures", "Folder")

let assignments: Folders = new Folders("Assignments", "Folder")

let DP: Folders = new Folders("Design Pattern", "Folder")

midExam.add(strategy);
midExam.add(observer);
midExam.singleClick();
midExam.doubleClick();

midExam.add(midSyllabus);

finalExam.add(composite);
finalExam.add(finalSyllabus);

lectures.add(midExam);
lectures.add(finalExam);

assignments.add(assignment1);
assignments.add(assignment2);

DP.add(lectures);
DP.add(readME);
DP.add(assignments);

DP.singleClick();
DP.doubleClick();

DP.remove(readME);
DP.doubleClick();