var ClassTimeData = /** @class */ (function () {
    function ClassTimeData() {
        this.displays = [];
        this.getCourseNo = function () { return 'Swe 45xx'; };
        this.getTopicName = function () { return 'xyz'; };
        this.getTeacherName = function () { return 'ABC'; };
        this.getDate = function () { return new Date(); };
    }
    ClassTimeData.prototype.addObserver = function (display) {
        this.displays.push(display);
    };
    ClassTimeData.prototype.removeObserver = function (display) {
        this.displays.filter(function (obj) { return obj !== display; });
    };
    ClassTimeData.prototype.notifyObserver = function () {
        var _this = this;
        this.displays.map(function (o) {
            o.update(_this.CourseNo, _this.TopicName, _this.TeacherName, _this.date);
        });
    };
    ClassTimeData.prototype.measureChange = function (courseNo, time, topicName, teacherName) {
        this.CourseNo = courseNo;
        this.date = time;
        this.TopicName = topicName;
        this.TeacherName = teacherName;
        this.notifyObserver();
    };
    return ClassTimeData;
}());
var TeacherDisplay = /** @class */ (function () {
    function TeacherDisplay() {
    }
    TeacherDisplay.prototype.update = function (CourseNo, TopicName, TeacherName, date) {
        this.CourseNo = CourseNo;
        this.TopicName = TopicName;
        this.TeacherName = TeacherName;
        this.date = date;
        this.display();
    };
    TeacherDisplay.prototype.display = function () {
        console.log("Teacher's Notice");
        console.log("Course No.: ", this.CourseNo);
        console.log("Topic Name: ", this.TopicName);
        console.log("Teacher Name: ", this.TeacherName);
        console.log("Class Time: ", this.date);
    };
    return TeacherDisplay;
}());
var StudentDisplay = /** @class */ (function () {
    function StudentDisplay() {
    }
    StudentDisplay.prototype.update = function (CourseNo, TopicName, TeacherName, date) {
        this.CourseNo = CourseNo;
        this.TopicName = TopicName;
        this.TeacherName = TeacherName;
        this.date = date;
        this.display();
    };
    StudentDisplay.prototype.display = function () {
        console.log("Students Notice:");
        console.log("Course No.: ", this.CourseNo);
        console.log("Topic Name: ", this.TopicName);
        console.log("Teacher Name: ", this.TeacherName);
        console.log("Class Time: ", this.date);
    };
    return StudentDisplay;
}());
var classTimeData = new ClassTimeData();
classTimeData.addObserver(new StudentDisplay());
classTimeData.addObserver(new TeacherDisplay());
classTimeData.measureChange('SWE-4501', new Date(), 'Observer Pattern', 'Nazmul Haque');
