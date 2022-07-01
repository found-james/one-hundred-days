package ClassFiles;
class Constructors {
    public static void main (String args[]){
        NoArgsCon first = new NoArgsCon();
        ParamCon second = new ParamCon(4);
        System.out.println(first.num);
        System.out.println(second.num);
    }
}
class NoArgsCon {

    int num;

    NoArgsCon ( ) {
        num = 100;
    }
}

class ParamCon {

    int num;

    ParamCon ( int i ) {
        num = i;
    }
}