package ClassFiles;
class Employee {
    String name;
    int age;
    String designation;
    double salary;

    public Employee (String name) {
        this.name = name;
    }

    public void empAge (int empAge) {
        age = empAge;
    }

    public void empDesignation (String empDesig) {
        designation = empDesig;
    }

    public void printEmployee( ){
        System.out.println("name: " + name);
        System.out.println("age: " + age);
        System.out.println("designation: " + designation);
        System.out.println("salary: " + salary);
    }

}

class EmployeeTest {
    public static void main(String args[]){
        Employee empOne = new Employee("James");
        Employee empTwo = new Employee("Mar");

        empOne.empAge(26);
        empTwo.empAge(21);

        empOne.printEmployee();
        empTwo.printEmployee();

    }
}
