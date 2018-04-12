/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package school;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

/**
 *
 * @author matthew
 */
public class School {

    String name;
    Set<Course> courses;
    long schoolid;
    Map<Integer, Student> students;

    public School(String name, long schoolid, Map students) {
        this.name = name;
        this.courses = new HashSet<>();
        this.schoolid = schoolid;
        this.students = new HashMap<Integer, Student>();

    }

    public Set<Course> getAllCourses() {
        return this.courses;
    }

    public Set<Course> getACourseInfo(int n, Discipline d) {
        Set<Course> temp = new HashSet<>();
        for (Course c : this.courses) {
            if (n == c.number && d == c.discipline) {
                temp.add(c);
            }
        }
        return temp;
    }

    public Set<Course> getACourseID(int x) {
        Set<Course> temp = new HashSet<>();
        for (Course c : this.courses) {
            if (x == c.id) {
                temp.add(c);
            }
        }
        return temp;
    }

    public static void main(String[] args) {

        Course chemistry = new Course(1, "Chemistry", 15, "This is a chemistry class.",
                11111, Discipline.CHEM);
        Course math = new Course(2, "Mathematics", 18, "This is a math class.",
                22222, Discipline.MATH);
        Course english = new Course(2, "English", 12, "This is an English class.",
                22222, Discipline.ENG);
        Student student1 = new Student(1234567890, "Bob");
        System.out.println(chemistry.getCost());
        System.out.println(math.toString());
//        Map<K,V addStudent = new HashMap<1,student1>();
        Map<Integer, Student> studentMap = new HashMap();
        studentMap.put(1, student1);
        School acc = new School("ACC", 12345678910L, studentMap);
        acc.courses.add(math);
        acc.courses.add(chemistry);
//        System.out.println(acc.getAllCourses());
        System.out.println("course info " + acc.getACourseInfo(1, Discipline.CHEM));
        System.out.println("id locator " + acc.getACourseID(22222));
        System.out.println(student1.toString());
        student1.courses.add(english);
        student1.addCourse(math);
        System.out.println(student1.courses);
        student1.printToFile();

    }

}
