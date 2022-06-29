public class HelloWorld {
    public static void main(String[] args){
        System.out.print("enter string: ");

        String name = System.console().readLine();
        System.out.println("You have entered: "+ name);
        }
}
