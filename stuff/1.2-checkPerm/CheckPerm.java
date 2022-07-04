import java.util.HashMap;

public class CheckPerm {

    public static boolean permutationCheck (String x, String y){
        HashMap<Character, Integer> cacheOne = new HashMap<Character, Integer>();
        // HashMap<Character, Integer> cacheTwo = new HashMap<Character, Integer>();

        for (int i = 0; i < x.length(); i++){
            char letter = x.charAt(i);

            if (cacheOne.get(letter) == null){
                cacheOne.put(letter, 1);
            } else if (cacheOne.get(letter) > 0){
                int count = cacheOne.get(letter);
                cacheOne.replace(letter, count, count + 1);

                System.out.println(cacheOne);
            }
        //         return false;
        //     } else {
        //         cacheOne.put(letter, 1);
        //     }
        // }
        }
        return true;
    }
    public static void main (String[]args){
        permutationCheck("hiii", "bii");
    }
}