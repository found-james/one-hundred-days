package ClassFiles;

public class Variables {
    public static void main (String[] args){

        LocalVariable y = new LocalVariable ("hello");
        y.leggo();

        SampleLocalVar z = new SampleLocalVar();
        z.pupAge();
    }
}

class LocalVariable {
    String x;

    public LocalVariable (String localVar){
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

