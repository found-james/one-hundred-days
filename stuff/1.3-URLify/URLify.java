
public class URLify {

    public static String convert (String x){

        String [] strArr = x.split("");
        
        for (int i = 0; i < strArr.length; i++){
        // System.out.println(i);

            if (strArr[i].isBlank()) {
                strArr[i] = "%20";
            } 
        }

        String urlReturn = String.join("", strArr);
        System.out.println(urlReturn);

        return urlReturn;
    }

    public static void main (String[]args){
        String x = new String("hello you");
        convert(x);
    }
}