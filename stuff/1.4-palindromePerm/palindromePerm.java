import java.util.HashMap;

public class palindromePerm {

    public static boolean checkPerm (String x){
        HashMap<Character, Integer> freqCounter = new HashMap<Character, Integer>();


        for (int j = 0; j < x.length(); j++ ){
            char key = x.charAt(j); 

            if (freqCounter.get(key) == null){
                freqCounter.put(key, 1);
            } else if (freqCounter.get(key) > 0) {
                int count = freqCounter.get(key);
                freqCounter.replace(key, count, count + 1);
            }
        }

        System.out.println(freqCounter);
        return true;
    }

    public static void main (String[]args){
        String y = new String("okkaay");
        checkPerm(y);

    }
}
