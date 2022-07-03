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
            cache.put(letter, true);
        }

        System.out.println(cache);


        return true;
    }
}

class Test {
    public static void main (String [] args){
        TestForUnique word = new TestForUnique("helo");
        word.isUnique();
    }
}