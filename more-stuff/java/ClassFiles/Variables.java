package ClassFiles;

public class Variables {
    public static void main (String[] args){

        LocalVariable y = new LocalVariables("hello");

        System.out.println(y + " this is an example of a local var because...");
    }
}

class LocalVariable {
    String x;

    public LocalVariable (String localVar){
        this.x = localVar;
    }
}