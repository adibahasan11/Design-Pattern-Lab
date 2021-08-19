import java.util.*;
import java.text.*;

interface ClassTime{
    public void notifyObserver();
    public void AddDisplay(Display display);
    public void RemoveDisplay(Display display);
}

interface Display{
    public void update(String CourseNo, String TopicName, String TeacherName, String date);
    public void displayData();
}

class ClassTimeData implements ClassTime{
    public ArrayList<Display>displays;
    
    public String CourseNo ;
    public String TopicName;
    public String TeacherName;
    public String date;

    ClassTimeData(){
        displays = new ArrayList<Display>();
    }

    @Override
    public void AddDisplay(Display display) {
        displays.add(display);
    }

    @Override
    public void RemoveDisplay(Display display) {
        displays.remove(display);
    }

    public void SetChanges (String CourseNo, String TopicName, String TeacherName, String date){
        this.CourseNo = CourseNo;
        this.TopicName = TopicName;
        this.TeacherName = TeacherName;
        this.date = date;
        notifyObserver();
    }
    
    @Override
    public void notifyObserver() {
        //ServiceLoader<Display> loader = ServiceLoader.load(Display.class);
        for (Display i : displays) {
            i.update(CourseNo, TopicName, TeacherName, date);
        }
    }
}

class TeacherDisplay implements Display {
    public String CourseNo ;
    public String TopicName;
    public String TeacherName;
    public String Classdate;

    SimpleDateFormat dateFormat  = new SimpleDateFormat("dd.MM.yyyy, HH:mm");
    SimpleDateFormat sdf = new SimpleDateFormat("E MMM dd HH:mm:ss z yyyy");

    public ClassTimeData classTimeData;

    public TeacherDisplay (ClassTimeData classTimeData){
        this.classTimeData = classTimeData;
        classTimeData.AddDisplay(this);
    }

    @Override
    public void displayData() {
        System.out.println("Teacher's Display:");
        System.out.println("Course No: " + CourseNo);
        System.out.println("Topic Name: " + TopicName);
        System.out.println("Teacher Name: " + TeacherName);
        System.out.println("Date: " + Classdate);
    }
    @Override
    public void update(String CourseNo, String TopicName, String TeacherName, String date) {
        this.CourseNo = CourseNo;
        this.TopicName = TopicName;
        this.TeacherName = TeacherName;
        
        try {
            Date currentdate = sdf.parse(date);
            this.Classdate = dateFormat.format(currentdate);
        }
        catch (Exception e) {
            e.printStackTrace();
        }
        
        this.displayData();
    }
}

class StudentDisplay implements Display {
    public String CourseNo ;
    public String TopicName;
    public String TeacherName;
    public String Classdate;

    SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy, hh:mm a");
    SimpleDateFormat sdf = new SimpleDateFormat("E MMM dd HH:mm:ss z yyyy");

    public ClassTimeData classTimeData;

    public StudentDisplay (ClassTimeData classTimeData){
        this.classTimeData = classTimeData;
        classTimeData.AddDisplay(this);
    }

    @Override
    public void displayData() {
        System.out.println("Student's Display:");
        System.out.println("Course No: " + CourseNo);
        System.out.println("Topic Name: " + TopicName);
        System.out.println("Teacher Name: " + TeacherName);
        System.out.println("Date: " + Classdate);
        
    }
    @Override
    public void update(String CourseNo, String TopicName, String TeacherName, String date) {
        this.CourseNo = CourseNo;
        this.TopicName = TopicName;
        this.TeacherName = TeacherName;
        
        try {
            Date currentdate = sdf.parse(date);
            this.Classdate = dateFormat.format(currentdate);
        }
        catch (Exception e) {
            e.printStackTrace();
        }

        this.displayData();
    }
}

class NoticeBoard{
    public static void main(String[] args) {

        SimpleDateFormat sdf = new SimpleDateFormat("E MMM dd HH:mm:ss z yyyy");
        String date = sdf.format(new Date());

        ClassTimeData classTimeData = new ClassTimeData();

        new TeacherDisplay(classTimeData);
        new StudentDisplay(classTimeData);
        classTimeData.SetChanges("Design Pattern", "Observer Design Pattern", "Nazmul Haque", date);
    }
} 