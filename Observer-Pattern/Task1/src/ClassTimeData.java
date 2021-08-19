import java.util.*;

public class ClassTimeData implements ClassTime {
    public ArrayList<Display>displays;
    
    public String CourseNo ;
    public String TopicName;
    public String TeacherName;
    public String date;

    public ClassTimeData(){
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
        for (Display i : displays) {
            i.update(CourseNo, TopicName, TeacherName, date);
        }
    }
}
