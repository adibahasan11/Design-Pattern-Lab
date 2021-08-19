import java.util.*;
import java.text.*;

public class TeacherDisplay implements Display {
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
