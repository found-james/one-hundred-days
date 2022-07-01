package ClassFiles;

public class Variables {
    public static void main (String[] args){

        InstanceVariableUpdate y = new InstanceVariableUpdate ("hello");
        y.leggo();

        SampleLocalVar z = new SampleLocalVar();
        z.pupAge();
    }
}

class InstanceVariableUpdate {
    String x;

    public InstanceVariableUpdate (String localVar){
        this.x = localVar;
    }

    public void leggo (){
        System.out.println(x);
    }
}

class SampleLocalVar {

    public void pupAge(){
        int age = 0;
        age = age + 7;

        System.out.println("puppy age is: " + age);
    }
}

