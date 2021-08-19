import java.util.*;
import java.text.*;

public class App {
    public static void main(String[] args) throws Exception {
        SimpleDateFormat sdf = new SimpleDateFormat("E MMM dd HH:mm:ss z yyyy");
        String date = sdf.format(new Date());

        ClassTimeData classTimeData = new ClassTimeData();
        
        new TeacherDisplay(classTimeData);
        new StudentDisplay(classTimeData);
        
        //Display teacher_1 = new TeacherDisplay(classTimeData);
        //Display student_1 = new StudentDisplay(classTimeData);
        //Display student_2 = new StudentDisplay(classTimeData);

        //classTimeData.RemoveDisplay(teacher_1);
        classTimeData.SetChanges("SWE-4501", "Observer Design Pattern", "Nazmul Haque", date);
    }
}
