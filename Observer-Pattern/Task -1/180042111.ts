interface Subject{
    notifyObserver(): void;
    addObserver(display: Display): void;
    removeObserver(display: Display): void;
}

interface Display{
    update(CourseNo : string, TopicName: string, TeacherName: string, date: Date): void;
    display(): void;
}

class ClassTimeData implements Subject{
    private CourseNo! : string;
    private TopicName! : string;
    private TeacherName! : string;
    private date! : Date;
    
    private displays : Array<Display> = [];

    getCourseNo = (): string => { return 'Swe 45xx' }
    getTopicName = (): string => { return 'xyz' }
    getTeacherName = (): string => { return 'ABC' }
    getDate = (): Date => { return new Date() }

    addObserver(display: Display):void{
        this.displays.push(display);
    }

    removeObserver(display: Display):void{
        this.displays.filter(obj => obj !== display);
    }
    
    notifyObserver(){
        this.displays.map(o => {
            o.update(this.CourseNo, this.TopicName, this.TeacherName, this.date)
        })
    }

    measureChange(courseNo: string, time: Date, topicName: string, teacherName: string): void {
        this.CourseNo = courseNo
        this.date = time
        this.TopicName = topicName
        this.TeacherName = teacherName
        this.notifyObserver()
    }
}

class TeacherDisplay implements Display{
    private CourseNo! : string;
    private TopicName! : string;
    private TeacherName! : string;
    private date! : Date;

    update(CourseNo : string, TopicName: string, TeacherName: string, date: Date){
        this.CourseNo = CourseNo;
        this.TopicName = TopicName;
        this.TeacherName = TeacherName;
        this.date = date;
        this.display()
    }

    display(){
        console.log("Teacher's Notice")
        console.log( "Course No.: ", this.CourseNo );
        console.log( "Topic Name: ", this.TopicName);
        console.log( "Teacher Name: ", this.TeacherName );
        console.log( "Class Time: ", this.date );
    }

}

class StudentDisplay implements Display{
    private CourseNo! : string;
    private TopicName! : string;
    private TeacherName! : string;
    private date! : Date;

    update(CourseNo : string, TopicName: string, TeacherName: string, date: Date){
        this.CourseNo = CourseNo;
        this.TopicName = TopicName;
        this.TeacherName = TeacherName;
        this.date = date;
        this.display();
    }

    display(){
        console.log("Students Notice:")
        console.log( "Course No.: ", this.CourseNo );
        console.log( "Topic Name: ", this.TopicName);
        console.log( "Teacher Name: ", this.TeacherName );
        console.log( "Class Time: ", this.date );
    }
}

let classTimeData = new ClassTimeData();

classTimeData.addObserver(new StudentDisplay())
classTimeData.addObserver(new TeacherDisplay())

classTimeData.measureChange('SWE-4501', new Date(), 'Observer Pattern', 'Nazmul Haque')