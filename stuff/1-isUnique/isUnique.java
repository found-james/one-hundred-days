import java.util.HashMap;

class TestForUnique {
    String testWord;

    public TestForUnique (String x){
        this.testWord = x;
    }

    public boolean isUnique (){
        HashMap<Character, Boolean> cache = new HashMap<Character, Boolean>();

        for (int i = 0; i < this.testWord.length(); i++){
            char letter = this.testWord.charAt(i);

            if (cache.get(letter) == null){
                cache.put(letter, true);
            } else if (cache.get(letter) == true){
                return false;
            } else {
                cache.put(letter, true);
            }
        }

        System.out.println(cache);


        return true;
    }
}

class Test {
    public static void main (String [] args){
        TestForUnique word = new TestForUnique("helo");
        System.out.println(word.isUnique());
    }
}