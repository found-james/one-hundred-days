
public class URLify {

    public static String convert (String x){

        String [] strArr = x.split("");
        
        for (String i: strArr){
            System.out.println(i);
        }
        return x;
    }

    public static void main (String [] args){
        String x = "hello";
        convert(x);
    }
}