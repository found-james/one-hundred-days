import java.util.HashMap;

public class IsUnique {

    public static boolean uniquenessTest (String testWord){
        HashMap<Character, Boolean> cache = new HashMap<Character, Boolean>();

        for (int i = 0; i < testWord.length(); i++){
            char letter = testWord.charAt(i);

            if (cache.get(letter) == null){
                cache.put(letter, true);
            } else if (cache.get(letter) == true){
                System.out.println(cache);
                System.out.println(letter);
                return false;
            } else {
                cache.put(letter, true);
            }
        }

        System.out.println(cache);
        return true;
    }

    public static void main (String [] args){
        
        System.out.println(uniquenessTest("hello"));
    }
}
