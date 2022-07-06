import java.util.Arrays;

public class URLify {

    public static String convert (String x){

        String [] strArr = x.split("");
        
        for (int i = 0; i < strArr.length; i++){

        // System.out.println(i);

            if (strArr[i].isBlank()) {
                strArr[i] = "%20";
            } 
        }

        System.out.println(Arrays.toString(strArr));
        return x;
    }

    public static void main (String [] args){
        String x = "hello you";
        convert(x);
    }
}