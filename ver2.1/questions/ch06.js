
window.questionsData = window.questionsData || [];
window.questionsData.push(
    {
    id: 1,
    chapter: "ch06",
    contents: [
        { type: "text", value: "次のプログラムを確認してください。" },
        { 
            type: "code", 
            value: `1. public class Item {
2.     private int num = 10;
3.     public void setNum(int num) {
4.         this.num = num;
5.     }
6.     public int getNum() {
7.         return this.num;
8.     }
9. }
` },
        { type: "text", value: "このクラスを利用する以下のプログラムを、コンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. public class Main {
2.     public static void main(String[] args) {
3.         Item a = new Item();
4.         Item b = new Item();
5.         b.setNum(20);
6.         System.out.println(a.getNum());
7.     }
8. }
` }
    ],
    options: `A. 0が表示される
B. 10が表示される
C. 20が表示される
D. コンパイルエラーが発生する
E. 実行時に例外がスローされる
`,
    answer: "B",
    explanation: ""
},
{
    id: 2,
    chapter: "ch06",
    contents: [
        { type: "text", value: "次のプログラムを確認してください。" },
        { 
            type: "code", 
            value: `1. public class Item {
2.     public String name;
3.     public int price;
4.     public void printInfo() {
5.         System.out.println(name + ", " + price);
6.     }
7. }
` },
        { type: "text", value: "このクラスを利用する以下のプログラムを、コンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  public class Main {
2.      public static void main(String[] args) {
3.          Item a = new Item();
4.          Item b = new Item();
5.          a.name = "apple";
6.          b.price = 100;
7.          a.price = 200;
8.          b.name = "banana";
9.          a = b;
10.         a.printInfo();
11.     }
12. }
` }
    ],
    options: `A. 「apple, 100」と表示される
B. 「banana, 100」と表示される
C. 「apple, 200」と表示される
D. 「banana, 200」と表示される
E. 実行時に例外がスローされる
F. コンパイルエラーが発生する
`,
    answer: "B",
    explanation: ""
},
    {
        id: 3,
        chapter: "ch06",
        text: "次のプログラムを実行し、「NULL」と表示したい。3行目の空欄に入るコードとして、正しいものを選びなさい。(1つ選択)",
        code: `1. public class Main {
2.     public static void main(String[] args) {
3.         □□□□□□□□
4.         System.out.println(obj);
5.     }
6. }
`,
        options: `A. Object obj = null;
B. Object obj = false;
C. Object obj = NULL;
D. Object obj = " ";
E. 選択肢AとCのどちらも可能である
F. 選択肢A~Eはすべて誤りである
`,
        answer: "F",
        explanation: `Javaの System.out.println(obj); で「NULL」（すべて大文字）と出力させるには、文字列リテラル "NULL" を代入する必要があります。
A. (null) は小文字の null が出力されます。
B. (false) は false が出力されます。
C. (NULL) は予約語/変数エラーでコンパイルエラーになります。
D. (" ") は半角スペースが出力されます。`
    },
    {
        id: 4,
        chapter: "ch06",
        text: "次のプログラムを実行し、7行目が終了したときにガベージコレクションの対象となるインスタンスはどれか。正しい説明を選びなさい。(1つ選択)",
        code: `1.  public class Main {
2.      public static void main(String[] args) {
3.      Object a = new Object();
4.      Object b = new Object();
5.      Object c = a;
6.      a = null;
7.      b = null;
8.      // more code
9.      }
10. }
`,
        options: `A. 3行目で作成したインスタンスだけが、ガベージコレクションの対象となる
B. 4行目で作成したインスタンスだけが、ガベージコレクションの対象となる
C. 3行目と4行目で作成したインスタンスが、ガベージコレクションの対象となる
D. ガベージコレクションの対象となるインスタンスは存在しない
`,
        answer: "B",
        explanation: `変数cにて参照が保持される。`
    },
    {
    id: 5,
    chapter: "ch06",
    contents: [
        { type: "text", value: "次のプログラムを確認してください。" },
        { 
            type: "code", 
            value: `1. public class Sample {
2.     static int num = 0;
3. }
` },
        { type: "text", value: "このクラスを利用する以下のクラスを、コンパイル、実行したときの結果として正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  public class Main {
2.      public static void main(String[] args) {
3.          Sample.num = 10;
4.          Sample s = new Sample();
5.          Sample s2 = new Sample();
6.          s.num += 10;
7.          s2.num = 30;
8.          System.out.println(Sample.num);
9.      }
10. }
` }
    ],
    options: `A. 10が表示される
B. 20が表示される
C. 30が表示される
D. Mainクラスの3行目でコンパイルエラーが発生する
E. 実行時に例外がスローされる
`,
    answer: "C",
    explanation: "staticクラスは、static領域上にあるひとつの変数を参照することになる。"
},
    {
        id: 6,
        chapter: "ch06",
        text: "次の中から、正しい説明を選びなさい。(2つ選択)",
        code: ``,
        options: `A. staticなメソッドからは、staticなメソッドを呼び出せない
B. staticなメソッドからは、staticではないフィールドにアクセスできる
C. staticなメソッドからは、staticではないメソッドを呼び出せる
D. staticなメソッドからは、staticなフィールドにアクセスできる
E. staticではないメソッドからは、staticなフィールドにアクセスできる
F. staticではないメソッドからは、staticなメソッドを呼び出せない
`,
        answer: "D、E",
        explanation: ``
    },
    {
    id: 8,
    chapter: "ch06",
    contents: [
        { type: "text", value: "次のプログラムを確認してください。" },
        { 
            type: "code", 
            value: `1. public class Sample {
2.     public int add(Integer a, Integer b) {
3.         return a + b;
4.     }
5. }
`},
        { type: "text", value: "このクラスを利用する以下のプログラムを、コンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. public class Main {
2.     public static void main(String[] args) {
3.         Sample s = new Sample();
4.         System.out.println(s.add(10));
5.     }
6. }
` }],
    options: `A. 「10」と表示される
B. 「10null」 と表示される
C. 「void」と表示される
D. コンパイルエラーが発生する
E. 実行時に例外がスローされる
`,
    answer: "D",
    explanation: "ちなみに、intとintgerは同じように扱える。"
    },
    {
        id: 9,
        chapter: "ch06",
        text: "次のプログラムの5行目に記述できるコードとして、正しいものを選びなさい。(2つ選択)",
        code: `1. public class Main {
2.     public static void main(String[] args) {
3.         int a = 1;
4.         int b = 2;
5.         □□□□□□□
6.         int c = b;
7.     }
8. }
`,
        options: `A. System.out.println(a);
B. System.out.println(b + 2);
C. System.out.println(c);
D. System.out.println(d);
`,
        answer: "A、B",
        explanation: ``
    },
    {
        id: 10,
        chapter: "ch06",
        text: "次の中から、メソッド宣言の記述として正しいものを選びなさい。(1 つ選択)",
        code: ``,
        options: `A. Void sample( ) { }
B. void sample( ) { return "sample"; }
C. sample() { }
D. int sample() {return "sample";}
E. void sample() { }
`,
        answer: "E",
        explanation: ``
    },
    {
    id: 11,
    chapter: "ch06",
    contents: [
        { type: "text", value: "次のプログラムを確認してください。" },
        { 
            type: "code", 
            value: `1. public class Sample {
2.     private String value;
3.     public void setValue(String value) {
4.         this.value = value;
5.     }
6.     public String getValue() {
7.         return this.value;
8.     }
9. }
` },
        { type: "text", value: "このクラスを利用する以下のプログラムの説明として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. public class Main {
2.     public static void main(String[] args) {
3.         Sample s = new Sample();
4.         String val = s.setValue("hello");
5.         s.getValue();
6.         System.out.println(val);
7.     }
8. }
` }
    ],
    options: `A. Mainクラスの4行目でコンパイルエラーが発生する
B. Mainクラスの5行目でコンパイルエラーが発生する
C. Mainクラスの4行目と5行目でコンパイルエラーが発生する
D. 何も表示されない
E. nullが表示される
F. 実行時に例外がスローされる
`,
    answer: "A",
    explanation: "戻り値voidのため、String valで受け取れない。"
    },
    {
    id: 12,
    chapter: "ch06",
    contents: [
        { type: "text", value: "次のプログラムを確認してください。" },
        { 
            type: "code", 
            value: `1. public class Sample {
2.     float divide(int a, int b) {
3.         return (float) a / (float) b;
4.     }
5. }
` },
        { type: "text", value: "このクラスを利用する以下のプログラムの空欄に入るコードとして、正しいものを選びなさい。(2つ選択)" },
        { 
            type: "code", 
            value: `1. public class Main {
2.     public static void main(String[] args) {
3.         Sample s = new Sample();
4.         ☐☐☐☐☐☐ result = s.divide(10, 2);
5.         System.out.println(result);
6.     }
7. }
` }
    ],
    options: `A. int
B. float
C. double
D. Integer
E. String
F. dim
`,
    answer: "B、C",
    explanation: ""
    },
    {
    id: 13,
    chapter: "ch06",
    contents: [
        { type: "text", value: "次のプログラムを確認してください。" },
        { 
            type: "code", 
            value: `1. public class Sample {
2.     public int method(int a, int b) {
3.         return a + b;
4.     }
5. }
` },
        { type: "text", value: "このクラスを利用する以下のプログラムを、コンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. public class Main {
2.     public static void main(String[] args) {
3.         Sample s = new Sample();
4.         int result = s.method(2);
5.         System.out.println(result);
6.     }
7. }
` }
    ],
    options: `A. 0が表示される
B. 2が表示される
C. コンパイルエラーが発生する
D. 実行時に例外がスローされる
`,
    answer: "C",
    explanation: ""
    },
    {
        id: 14,
        chapter: "ch06",
        text: "次の中から、メソッドの宣言として正しいものを選びなさい。(1つ選択)",
        code: "",
        options: `A void method (void){ }
B. void method(int values...) { }
C. void method(int... values, String name) { }
D. void method(int... a. int... b) { }
E. 選択肢CとDの両方とも正しい
F. 選択肢はすべて正しい
G. 選択肢はすべて間違っている
`,
        answer: "G",
        explanation: `可変長引数に関する問題。
void Sample (int... num) { }のようにすることで、引数をいくつでも渡せる。
可変長引数を使う時の注意点。
・同じ型でまとめる必要がある。
・可変長引数以外の引数を受け取る場合は、可変長引数を最後の引数にする`
    },
    {
        id: 15,
        chapter: "ch06",
        text: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)",
        code: `1. public class Sample {
2.     public void method(int num) {
3.         if (num < 0) return;
4.         System.out.println("A");
5.         return;
6.         System.out.println("B");
7.     }
8. }
`,
        options: `A. 3行目でコンパイルエラーが発生する
B. 5行目でコンパイルエラーが発生する
C. 6行目でコンパイルエラーが発生する
D. 「A」と表示される
E. 「A」「B」と表示される
`,
        answer: "C",
        explanation: `return文の下など、到達不可能なコードがあるとコンパイルエラーになる。`
    },
    {
        id: 16,
        chapter: "ch06",
        text: "次のメソッドをオーバーロードしていないメソッド定義を選びなさい。 (2つ選択)",
        code: `1. int calc(double a, int b) {
2.     return (int) a + b;
3. }
`,
        options: `A. int calc (int a) { }
B. double calc(double a, int b) { }
C. int calc(double a, double b) { }
D. int calc(double num1, int num2) { }
E. int calc( ) { }
F. int calc(int a, double b) { }
`,
        answer: "B、D",
        explanation: `オーバーロードに関する問題。引数の数や型、順番が異なることで、同名のメソッドを複数定義可能。`
    },
    {
        id: 17,
        chapter: "ch06",
        text: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)",
        code: `1.  public class Main {
2.      public static void main(String[] args) {
3.          Main m = new Main();
4.          System.out.println(m.calc(2, 3));
5.      }
6.      private double calc(double a, int b) {
7.          return (a + b) / 2;
8.      }
9.      private double calc(int a, double b) {
10.         return (a + b) / 2;
11.     }
12. }
`,
        options: `A. 4行目でコンパイルエラーが発生する
B. 6行目でコンパイルエラーが発生する
C. 9行目でコンパイルエラーが発生する
D. 選択肢BとCの両方
E. 2.5が表示される
`,
        answer: "A",
        explanation: `calc()メソッドを、オーバーロードにて複数定義しているため、呼び出すときにはどっちのメソッドが、分かりやすく引数の型を明示する必要がある。`
    },
    {
        id: 18,
        chapter: "ch06",
        text: "次のメソッドをオーバーロードするメソッド定義として、正しいものを選びなさい。(1つ選択)",
        code: `1. void method() {
2.     // do something
3. }
`,
        options: `A. public void method( ) { }
B. protected void method( ) { }
C. private void method( ) { }
D. 選択肢A~Cまで、すべて正しい
E. 選択肢A~Cまで、すべて誤りである
`,
        answer: "E",
        explanation: `アクセス修飾子が異なるだけではオーバーロードではない。`
    },
    {
        id: 19,
        chapter: "ch06",
        text: "Sampleというクラスを定義しようと考えている。このクラスに定義するコンストラクタを修飾できるアクセス修飾子についての説明として、 正しいものを選びなさい。(1つ選択)",
        code: ``,
        options: `A. publicなコンストラクタのみ定義できる
B. public protectedなコンストラクタのみ定義できる
C. private以外のコンストラクタが定義できる
D. コンストラクタを修飾するアクセス修飾子に制限はない
E. アクセス修飾子で修飾することはできない
`,
        answer: "D",
        explanation: `コンストラクタのアクセス修飾子に関する問題。
・メソッド名とクラス名は同じにすること
・戻り値型は記述できない
・newと一緒にしか使えない`
    },
{
    id: 20,
    chapter: "ch06",
    contents: [
        { type: "text", value: "次のプログラムを確認してください。" },
        { 
            type: "code", 
            value: `1. public class Sample {
2.     void Sample( ) {
3.         System.out.println("hello.");
4.     }
5. }
` 
        },
        { type: "text", value: "このクラスを利用する以下のプログラムを、コンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. public class Main {
2.     public static void main(String[] args) {
3.         Sample s = new Sample();
4.         s.Sample();
5.     }
6. }
` 
        }
    ],
    options: `A. 「hello.」と表示される
B. 「hello.hello.」と表示される
C. Sampleクラスでコンパイルエラーが発生する
D. Mainクラスでコンパイルエラーが発生する
E. 実行時に例外がスローされる
`,
    answer: "A",
    explanation: "今回は戻り値があるので、void Sample()はメソッド。Javaでは、クラス名とメソッド名が同じでも問題ない。"
},
{
    id: 21,
    chapter: "ch06",
    contents: [
        { type: "text", value: "次のプログラムを確認してください。" },
        { 
            type: "code", 
            value: `1. public class Sample {
2.     Sample( ) {
3.         System.out.println("A");
4.     }
5.     {
6.         System.out.println("B");
7.     }
8. }
` 
        },
        { type: "text", value: "このクラスを利用する以下のプログラムを、コンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. public class Main {
2.     public static void main(String[] args) {
3.         Sample s = new Sample();
4.     }
5. }
` 
        }
    ],
    options: `A. 「A」「B」と表示される
B. 「B」「A」と表示される
C. 「A」と表示される
D. 「B」と表示される
E. Sampleクラスでコンパイルエラーが発生する
F. Mainクラスでコンパイルエラーが発生する
G. 実行時に例外がスローされる
`,
    answer: "B",
    explanation: `クラスの中に{ }だけで囲んで記述することで、インスタンス初期化ブロックを作成できる。実行手順は、インスタンス初期化ブロック　→　コンストラクタの順番`,
},
{
        id: 22,
        chapter: "ch06",
        text: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)",
        code: [ 
                `1. public class Sample {
2.     static int num;
3.     {
4.         num = 10;
5.     }
6.     public Sample( ) {
7.         num = 100;
8.     }
9. }
`,
                `1. public class Main {
2.     public static void main(String[] args) {
3.         System.out.println(Sample.num);
4.     }
5. }
`],
        options: `A. 0が表示される
B. 10が表示される
C. 100が表示される
D. コンパイルエラーが発生する
`,
        answer: "A",
        explanation: `インスタンスを生成していないため、static int numにはまだ初期値がはいっていない。`,
    },
{
    id: 23,
    chapter: "ch06",
    contents: [
        { type: "text", value: "次のプログラムを確認してください。" },
        { 
            type: "code", 
            value: `1. public class Sample {
2.     void Sample( ) {
3.         System.out.println("A");
4.     }
5.     Sample(String str) {
6.         System.out.println(str);
7.     }
8. }
` 
        },
        { type: "text", value: "このクラスを利用する以下のプログラムを、コンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. public class Main {
2.     public static void main(String[] args) {
3.         Sample s = new Sample();
4.     }
5. }
` 
        }],
    options: `A.「A」と表示される
B. 「null」と表示される
C. 何も表示されない
D. コンパイルエラーが発生する
E. 実行時に例外がスローされる
`,
    answer: "D",
    explanation: ""
},
{
        id: 24,
        chapter: "ch06",
        text: "次のプログラムを実行し、コンソールに「ok.」と表示したい。3行目の空欄に入るコードとして、正しいものを選びなさい。(1つ選択)",
        code: [ 
                `
1. public class Sample {
2.     public Sample() {
3.         □□□□□□
4.     }
5.     public Sample(String str, int num) {
6.         System.out.println("ok.");
7.     }
8. }
`,
                `1. public class Main {
2.     public static void main(String[] args) {
3.         Sample s = new Sample();
4.     }
5. }
`],
        options: `A. Sample(null, 0);
B. this (null, 0);
C. super (null, 0);
D. this.Sample(null, 0);
`,
        answer: "B",
        explanation: `コンストラクタが二つあるため、Sample()コンストラクタから、Sample(String str, int num)コンストラクタを呼び出す必要がある。同じクラス内の別のコンストラクタを呼び出すときには、this(...)を使う。`,
    },
{
        id: 25,
        chapter: "ch06",
        text: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)",
        code: [ 
                `1. public class Sample {
2.     public Sample() {
3.         System.out.println("A");
4.         this("B");
5.     }
6.     public Sample(String str) {
7.         System.out.println(str);
8.     }
9. }
`,
                `1. public class Main {
2.     public static void main(String[] args) {
3.         Sample s = new Sample();
4.     }
5. }
`],
        options: `A. 「A」「B」と表示される
B. 「B」「A」と表示される
C. 「A」と表示される
D. 「B」と表示される
E. コンパイルエラーが発生する
F. 実行時に例外がスローされる
`,
        answer: "E",
        explanation: `thisは、コンストラクタの一番最初に来る必要がある。this("B")の跡に、println("A")を実行することは可能。`,
    },
    {
    id: 26,
    chapter: "ch06",
    contents: [
        { type: "text", value: "次のプログラムを確認してください。" },
        { 
            type: "code", 
            value: `1. package ex26;
2.
3. public class Parent {
4.     int num = 10;
5. }
` 
        },
        { type: "text", value: "このクラスを利用する以下のプログラムを、コンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. package other;
2. import ex26.Parent;
3.
4. public class Child extends Parent {
5.     public static void main(String[] args) {
6.         System.out.println(new Child().num);
7.     }
8. }
` 
        }],
    options: `A. 0が表示される
B. 10が表示される
C. Childクラスの4行目でコンパイルエラーが発生する
D. Childクラスの6行目でコンパイルエラーが発生する
E. 実行時に例外がスローされる
`,
    answer: "D",
    explanation: `子クラスであっても、privateな変数は、別のパッケージからはアクセスできない。`,
},
{
    id: 27,
    chapter: "ch06",
    contents: [
        { type: "text", value: "次のプログラムを確認してください。" },
        { 
            type: "code", 
            value: `1.  package other;
2. 
3.  public class Book {
4.      private String isbn;
5.      public void setIsbn(String isbn) {
6.          this.isbn = isbn;
7.      }
8.      protected void printInfo() {
9.          System.out.println(isbn);
10.     }
11. }
` },
        { type: "text", value: "このクラスを利用する以下のプログラムを、コンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. package ex27;
2. import other.Book:
3.
4. public class StoryBook extends Book {}
` 
        },
{ 
            type: "code", 
            value: `1. package ex27;
2. public class Main {
3.     public static void main(String[] args) {
4.         StoryBook story = new StoryBook();
5.         story.setIsbn("xxx-x-xxxxxx-xx-x");
6.         story.printInfo();
7.     }
8. }
` 
        }],
        
    options: `A. 「null」と表示される
B. 「ххх-х-хxхххх-хх-х」と表示される
C. コンパイルエラーが発生する
D. 実行時に例外がスローされる
`,
    answer: "C",
    explanation: `protected。別パッケージにある子クラスにもアクセスできる修飾子`
},
{
    id: 28,
    chapter: "ch06",
    contents: [
        { type: "text", value: "次のプログラムを確認してください。" },
        { 
            type: "code", 
            value: `1. public class Sample {
2.     int num;
3.     int getNum( ){ return num; }
4.     void setNum(int num) { this.num = num; }
5. }
` },
        { type: "text", value: "このクラスにカプセル化を適用したい。次の中から正しいコードを選びなさい。(1つ選択)" },
        ],
    options: [
            {
                label: "A",
                code: `public class Sample {
    private int num;
    private int getNum() { return num; }
    private void setNum(int nun) {this.num = num; }
}
`},
            {
                label: "B",
                code: `public class Sample {
    public int num;
    public int getNum( ) {return num; }
    public void setNum(int num) {this.num = num;}`
            },
            {
                label: "C",
                code: `public class Sample {
    public int num;
    private int getNum() {return nun; } 
    private void setNum(int num) {this.num = num;}
}`
            },
            {
                label: "D",
                code: `public class Sample {
    private int num; 
    public int getNum( ) { return num; } 
    private void setNum(int nun) { this.num = num; }`
            }
        ],
    answer: "D",
    explanation: ""
},
{
    id: 29,
    chapter: "ch06",
    contents: [
        { type: "text", value: "次のプログラムを確認してください。" },
        { 
            type: "code", 
            value: `1. public class Sample {
2.     int num;
3.     public Sample(int num) {
4.         this.num = num;
5.     }
6. }
` },
        { type: "text", value: "このクラスを利用する以下のプログラムを、コンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  public class Main {
2.      public static void main(String[] args) {
3.          Sample s = new Sample(10);
4.          modify(s.num);
5.          System.out.println(s.num);
6.      }
7.      private static void modify(int num) {
8.          num *= 2;
9.      }
10. }
` 
        },],
    options: `A. 10が表示される
B. 20が表示される
C. コンパイルエラーが発生する
D. 実行時に例外がスローされる
`,
    answer: "A",
    explanation: `privateなどの修飾子がない場合は、パッケージ私的扱いになる。`,
},
{
    id: 30,
    chapter: "ch06",
    contents: [
        { type: "text", value: "次のプログラムを確認してください。" },
        { 
            type: "code", 
            value: `1. public class Sample {
2.     int num;
3.     public Sample(int num) {
4.         this.num = num;
5.     }
6. }
` },
        { type: "text", value: "このクラスを利用する以下のプログラムを、コンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  public class Main {
2.      public static void main(String[] args) {
3.          Sample s = new Sample(10);
4.          modify(s);
5.          System.out.println(s.num);
6.      }
7.      private static void modify(Sample s) {
8.          s.num *= 2;
9.      }
10. }
` 
        },],
    options: `A. 10が表示される
B. 20が表示される
C. コンパイルエラーが発生する
D. 実行時に例外がスローされる
`,
    answer: "B",
    explanation: `int numは、privateではなく、パッケージプライベートになっている。同じパッケージからならアクセス可能。`
});