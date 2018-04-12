/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package school;

/**
 *
 * @author matthew
 */
public class Course {

    int number;
    String name;
    int credits;
    String description;
    static double pricePerCredit = 100.0;
    int id;
    Discipline discipline;

    public Course(int number, String name,
            int credits,
            String description,
            int id,
            Discipline discipline
    ) {
        this.number = number;
        this.name = name;
        this.credits = credits;
        this.description = description;
        this.id = id;
        this.discipline = discipline;
    }
//    Course chemistry = new Course(1, "Chemistry 101",3,"This is the first chemistry class.",
//            12345, Discipline.CHEM);
    


    public int getID() {
        return id;
    }

    public void setID(int ID) {
        this.id = ID;
    }

    public Discipline getDiscipline() {
        return discipline;
    }

    public void setDiscipline(Discipline Discipline) {
        this.discipline = Discipline;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int Number) {
        this.number = Number;
    }

    public String getName() {
        return name;
    }

    public void setName(String Name) {
        this.name = Name;
    }

    public int getCredits() {
        return credits;
    }

    public void setCredits(int Credits) {
        this.credits = Credits;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String Description) {
        this.description = Description;
    }

    public static double getPricePerCredit() {
        return pricePerCredit;
    }

    public static void setPricePerCredit(double PricePerCredit) {
        Course.pricePerCredit = PricePerCredit;
    }
    
    public double getCost(){
        double cost = this.credits * pricePerCredit;
        return cost;
    }
      @Override
    public String toString() {
        return String.format(this.name + ": " + this.description);
    }

}
