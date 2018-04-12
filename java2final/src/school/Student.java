/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package school;

import java.io.BufferedWriter;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.IOException;
/**
 *
 * @author matthew
 */
public class Student {
    long id;
    String name;
    List<Course> courses;
    
    public Student(long id, String name){
        this.id = id;
        this.name = name;
        this.courses = new ArrayList<>();
    } 

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Course> getCourses() {
        return courses;
    }

    public void setCourses(List<Course> courses) {
        this.courses = courses;
    }
    
       @Override
    public String toString() {
        return String.format("student name: " + this.name + " student id: " + this.id + " courses " + this.courses);
    }
    
    public List<Course> addCourse(Course h){
        this.courses.add(h);
        return courses;
    }
    public void printToFile(){
String fileName = "/users/matthew/desktop/Java/student.txt";
    
    try {
            // Assume default encoding.
            FileWriter fileWriter =
                new FileWriter(fileName);

            // Always wrap FileWriter in BufferedWriter.
            BufferedWriter bufferedWriter =
                new BufferedWriter(fileWriter);

            // Note that write() does not automatically
            // append a newline character.
            bufferedWriter.write(this.toString());


            // Always close files.
            bufferedWriter.close();
        }
        catch(IOException ex) {
            System.out.println(
                "Error writing to file '"
                + fileName + "'");
            // Or we could just do this:
            // ex.printStackTrace();
        }
    }

    
}
