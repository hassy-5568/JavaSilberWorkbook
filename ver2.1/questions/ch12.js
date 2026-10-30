
window.questionsData = window.questionsData || [];
window.questionsData.push(
{
    id: 1,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次の2つのコードのクラスファイルを生成するためのコマンドとして、 正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. package b;
2.
3. public class B {
4.
5. }
`},
{ 
            type: "code", 
            value: `1. package a;
2. import b.B;
3.
4. public class A {
5.     public static void main(String[] args) {
6.         B b = new B();
7.     }
8. }
`},
    ],
    options: `A. java a/A.java
B. java b/B.java
C. javac b/B.java
　 java a/A.java
D. javac a/A.java
　 java a/A
`,
    answer: "D",
    explanation: `javacはコンパイルのコマンド。今回はAクラスをコンパイルすれば、継承元のBクラスも自動でコンパイルされる。`
},
{
    id: 2,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次の3つのステートメントを記述する順番として正しいものを選びなさい。(1つ選択)" },
        
    ],
    options: `A. package　   import　   class
B. package　   class　    import
C. import　　  class　    package
D. class　　   package　  import
E. import　    package　  class
`,
    answer: "A",
    explanation: ""
},
{
    id: 3,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次のプログラムを確認し、Mainクラスの空欄に入るコードとして、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. package com.sample;
2. public class Sample {
3.     public void sample() {
4.         // any code
5.     }
6. }
`},
{ 
            type: "code", 
            value: `1. package com.sample.test;
2. public class Test {
3.     public void test(int num) {
4.         // any code
5.     }
6. }
`},
{ 
            type: "code", 
            value: `1. package com;
2. □□□□□□□
3. public class Main {
4.     public static void main(String[] args) {
5.         new Sample().sample();
6.         int num = Integer.parseInt(args[0]);
7.         new Test().test(num);
8.     }
9. }
`},
    ],
    options: `A. import java.lang. Integer;
　 import com.*;
B. import com.sample.*;
C. import com.sample.Sample;
　 import com.sample.test.*;
D. import java.lang.*;
`,
    answer: "C",
    explanation: `*（ワイルドカード）は、直下のクラスのみ。`
},
{
    id: 4,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. import java.util.function.Supplier;
2.
3. public class Sample {
4.     void sample() {
5.         int i = 0;
6.         Supplier<Integer> foo = () -> i;
7.         i++;
8.         System.out.println(foo.get());
9.     }
10. }
`},
    ],
    options: `A. コンパイルできるが、何も表示されない
B. 実行時に例外がスローされる
C. 0が表示される
D. 1が表示される
E. コンパイルエラーが発生する
`,
    answer: "E",
    explanation: `ラムダ式はローカル変数を使えない。`
},
{
    id: 5,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. public class Sample {
2.     static int num = 23;
3.     public static void main(String[] args) {
4.         int num = num;
5.         System.out.println(num);
6.     }
7. }
`},
    ],
    options: `A. 23が表示される
B. 想定外の結果が表示される
C. コンパイルエラーが発生する
D. 実行時に例外がスローされる
`,
    answer: "C",
    explanation: ""
},
{
    id: 6,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次の2つのモジュールの設定ファイルに関する説明として、正しいものを選びなさい。(2つ選択)" },
        { 
            type: "code", 
            value: `1. module A {
2.     requires B;
3. }
`},
{ 
            type: "code", 
            value: `1. module B {
2.     requires A;
3. }
`},
    ],
    options: `A. どちらのモジュールも、パッケージがエクスポートされない
B. どちらのモジュールもjava.baseモジュールを必要としない
C. モジュールの名前が短かすぎる
D. コンパイルエラーが発生する
`,
    answer: "A、D",
    explanation: `どちらの module-info.java にも exports が書かれていない。そのため、どのパッケージも外に公開されない。
A と B がお互いを requiresしていて、循環依存になっている。（循環依存になると、どこから始めたらいいかわからないため、コンパイルエラーになる。）`
},
{
    id: 7,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  public class Main {
2.      public static void main(String[] args) {
3.          int data = 1;
4.          switch(data) {
5.              default:  System.out.print("C");
6.              case 0:   System.out.print("A");
7.                        break;
8.              case 10:  System.out.print("B");
9.                        break;
10.         }
11.     }
12. }
`},

    ],
    options: `A. 「A」と表示される
B. 「C」と表示される
C. 「CA」と表示される
D. 「CAB」と表示される
E. コンパイルエラーが発生する
`,
    answer: "C",
    explanation: ""
},
{
    id: 8,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  public class Sample {
2.      public static void main(String[] args) {
3.          String str = "hoge456test";
4.          int index = 5;
5.          if (Character.isAlphabetic(str.charAt(index))) {
6.              index = 0;
7.          } else if (Character.isDigit(str.charAt(index))) {
8.              index = 10;
9.          } else {
10.             ++index;
11.         }
12.         if (str.endsWith("test"))
13.             str = str.substring(0, index);
14.         System.out.println(str);
15.     }
16. }
`},
{ type: "text", value: "[memo:endWith():endWith()]"},
{ type: "text", value: "[memo:substring():substring()]"},
    ],
    options: `A. 「hoge」と表示される
B. 「hoge456」と表示される
C. 「456test」と表示される
D. 「hoge456test」と表示される
E. 「hoge456tes」と表示される
`,
    answer: "E",
    explanation: `indexは10になっている。substring(0,10)で、hoge456tesまで取り出される。`
},
{
    id: 9,
    chapter: "ch12",
    contents:[
        { type: "text", value: "クラスやモジュールの依存関係を調べるために使うコマンドとして、正しいものを選びなさい。(2つ選択)" },
        
    ],
    options: `A. jmod describe
B. jdeps --list-deps
C. java Hello.java
D. jar --show-module-resolution
E. java --show-module-resolution
`,
    answer: "B、E",
    explanation: ""
},
{
    id: 10,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次のプログラムのコンパイルを成功させるための方法として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. public interface A {
2.     abstract void x();
3. }
`},
{ 
            type: "code", 
            value: `1. public abstract class B /* position 1 */ {
2.     /* position 2 */
3.     public void x( ) { }
4.     public abstract void z();
5. }
`},
{ 
            type: "code", 
            value: `1. public class C extends B implements A {
2.     /* position 3 */
3. }
`},
    ],
    options: `A. 以下をposition 3に記述する
　 @Override
　 public void x( ) { }
B. 以下をposition 3に記述する
　 public void z() {}
C. 以下をposition 2に記述する
　 void x( ){ }
D. 以下をposition 1に記述する
　 implements A
`,
    answer: "B",
    explanation: ""
},
{
    id: 11,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次のプログラムを確認し、変数valueのデータ型として正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. public class Main {
2.     public static void main(String... args) {
3.         for (var value: args) {
4.             System.out.println(value);
5.         }
6.     }
7. }
`},
    ],
    options: `A. String
B. String[]
C. Character
D. var
`,
    answer: "A",
    explanation: ""
},
{
    id: 12,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. public class Main {
2.     public static void main(String[] args) {
3.         String str = "abcd ef gh";
4.         int x = str.indexOf("ef");
5.         str.substring(x + 3);
6.         x = str.indexOf("ef");
7.         System.out.println(str + " " + x);
8.     }
9. }
`},
    ],
    options: `A. 「ef gh5」と表示される
B. 「ef gh 4」と表示される
C. 「abcd ef gh 4」と表示される
D. 「abcd ef gh 5」と表示される
E. 実行時に例外がスローされる
`,
    answer: "D",
    explanation: ""
},
{
    id: 13,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  public class Sample {
2.      static String str;
3.      public static void main(String[] args) {
4.          switch(str) {
5.              case "10" : str += "10";
6.              default : str += "def";
7.              case "20": str += "20";
8.          }
9.          System.out.println(str);
10.     }
11. }
`},
    ],
    options: `A. 「10 def 20」と表示される
B. 「def 20」と表示される
C. 「null」と表示される
D. 実行時に例外がスローされる
`,
    answer: "D",
    explanation: ""
},
{
    id: 14,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次のプログラムを確認し、変数xのデータ型として正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. import java.util.Arrays;
2. import java.util.List;
3.
4. public class Sample {
5.     public static void main(String[] args) {
6.         List<String> list = Arrays.asList(new String[]{"a", "b", "c"]);
7.         list. forEach(x-> {System.out.println(x);});
8.     }
9. }
`},
    ],
    options: `A. List<Character>
B. String
C. char
D. List<String>
`,
    answer: "B",
    explanation: ""
},
{
    id: 15,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次のプログラムをコンパイルし、実行するためのコマンドとして、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  package ex15:
2.
3.  public class Sample {
4.      private final String name;
5.      public Sample(String name) {
6.          this.name = name;
7.      }
8.      public String getName() {
9.          return name;
10.     }
11.     public String toString() {
12.         return name;
13.     }
14. }
`},
{ 
            type: "code", 
            value: `1.  package ex15;
2.
3.  import java.util.logging.Logger;
4.
5.  public class Main {
6.      static final Logger logger = Logger.getAnonymousLogger();
7.      public static void main(String[] args) {
8.          var d = new Sample("sample");
9.          logger.info(d.toString());
10.     }
11. }
`},
    ],
    options: `A. javac ex15/Sample.java ex15/Main.java
　 java -cp build ex15.Main
B. javac -d build ex15/Sample.java ex15/Main.java
　 java -cp build ex15.Main
C. javac -d build ex15/Sample.java ex15/Main.java
　 java ex15.Main
D. javac-d build ex15/Sample.java ex15/Main.java
　 java build.ex15.Main
`,
    answer: "B",
    explanation: ""
},
{
    id: 16,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行した結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  import java.time.LocalDate;
2.  import static java.time.DayOfWeek.*;
3.
4.  public class Sample {
5.      public static void main(String[] args) {
6.          var today LocalDate.now().with(TUESDAY).getDayOfWeek();
7.          switch (today) {
8.          case SUNDAY:
9.          case SATURDAY:
10.             System.out.println("weekend");
11.             break;
12.         case MONDAY:
13.              FRIDAY: System.out.println("working");
14.         default:
15.             System.out.println("other");
16.         }
17.     }
18. }
`},
    ],
    options: `A. 「working」と表示される
B. 「working」「other」 と表示される
C. 「Tuesday」と表示される
D. 「other」と表示される
`,
    answer: "D",
    explanation: ""
},
{
    id: 17,
    chapter: "ch12",
    contents:[
        { type: "text", value: "修飾子に関する説明として正しいものを選びなさい。(2つ選択)" },,
    ],
    options: `A. ローカル変数は、finalを付けて宣言できる
B. インタフェースは、protectedを付けて宣言できる
C. インスタンス変数は、staticを付けて宣言できる
D. 抽象メソッドは、privateを付けて宣言できる
E. インナークラスは、publicを付けて宣言できる
`,
    answer: "A、E",
    explanation: ""
},
{
    id: 18,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次のコマンドを実行した結果、以下のような内容がコンソールに表示された。この内容を表すモジュールグラフとして、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `> java--describe-module com.sample

com.sample
exports com.sql
exports com.foo
requires java.base mandated
requires com.logging transitive
requires com.xml transitive
uses java.sql.Driver
`},
{ type: "image",
          src: "Image/12_18_1.png",
          alt: "12章18問目の図1"
        },
        { type: "image",
          src: "Image/12_18_2.png",
          alt: "12章18問目の図1"
        },
    ],
    answer: "D",
    explanation: `requiresをみると、java.base、logging、com.xmlに依存していることがわかる。java.baseは、他のモジュールも依存される存在のため、Dが正解。`
},
{
    id: 19,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次のプログラムを確認し、これらのクラスを利用するMainクラスをコンバイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. public class A {
2.     public void hello() {
3.         System.out.println("hello");
4.     }
5. }
`},
{ 
            type: "code", 
            value: `1. public class B extends A {
2.     public void bye() {
3.         System.out.println("bye");
4.     }
5. }
`},
{ 
            type: "code", 
            value: `1. public class Main {
2.     public static void main(String[] args) {
3.         A a = new B();
4.         a.bye();
5.     }
6. }
`},
    ],
    options: `A. 「bye」と表示される
B. 「null」と表示される
C. 何も表示されない
D. コンパイルエラーが発生する
E. 実行時に例外がスローされる
`,
    answer: "D",
    explanation: `Aクラスとしてプログラム上はみるため、byeメソッドがないとコンパイルエラーになる。`
},
{
    id: 20,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  public class Sample {
2.      private char a;
3.      private int b = 1;
4.      String test(char a, int b) {
5.          return a + ", " + b;
6.      }
7.      public static void main(String[] args) {
8.          Sample app = new Sample();
9.          System.out.println(app.test('A'));
10.     }
11. }
`},
    ],
    options: `A. 「A, 0」と表示される
B. 「A, 1」と表示される
C. 「A, null」と表示される
D. コンパイルエラーが発生する
`,
    answer: "D",
    explanation: ``
},
{
    id: 21,
    chapter: "ch12",
    contents:[
        { type: "text", value: "多次元配列のインスタンス化と初期化のコードとして、正しいものを選びなさい。(2つ選択)" },
    ],
    options: `A. int[][] array = {{1, 2, 3}, {4, 5, 6}};
B. int[][][] array = {{1,2}, {3,4}, {5,6}};
C. int[][] array = {0, 1};
D. int[][] array new int[][2];
　 array[0][0] = 1;
　 array[0][1] = 2;
　 array[1][0] = 3;
　 array[1][1] = 4:
E. int[] array = {0, 1};
　 int[][][] array2 = new int[2][2][2];
　 array2[0][0] = array:
　 array2[0][1] = array:
　 array2[1][0] = array:
　 array2[1][1] = array:
`,
    answer: "A、E",
    explanation: ``
},
{
    id: 22,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次のプログラムの説明として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. public class A {
2.     int num = 10;
3.     public double getValue() {
4.     return 0.0;
5.     }
6. }
`},
{ 
            type: "code", 
            value: `1. public class B extends A {
2.     @Override
3.     public double getValue() {
4.     // ...
5.     return 1.0;
6.     }
7. }
`},
{ 
            type: "code", 
            value: `1. public class C extends B {
2.     @Override
3.     public double getValue() {
4.         System.out.println(super.num);
5.         return super.getValue();
6.     }
7. }
`},
    ],
    options: `A. Bクラスのサブクラスでは、getValueメソッドでAクラスのフィールドにアクセスすることができる
B. Bクラスのサブクラスでは、Bクラスのメソッドを呼び出すためにsuper.getValue()を使えるが、Aクラスのフィールドにはアクセスできない
C. Bクラスのサブクラスでは、Bクラスのメソッドを呼び出すためにnew.getValue()を使う
D. Bクラスのサブクラスでは、Bクラスのメソッドを呼び出すためにpublic.getValue()を使う
`,
    answer: "A",
    explanation: `まず、Bクラスには、Aから引き継いだnumをもっているため、Cクラスのsuper.numの時は、Aクラスのnumを参照しているわけではなく、Bクラスの、Aクラスから受け継いだnumを参照しているため、今回の問題は成立している。`
},
{
    id: 23,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次のプログラムの説明として、正しいものを選びなさい。(3つ選択)" },
        { 
            type: "code", 
            value: `1. import java.util.Collection;
2.
3. public class A {
4.     public void sample (Collection arg) {
5.         System.out.println("A");
6.     }
7. }
`},
{ 
            type: "code", 
            value: `1.  import java.util. Collection;
2.  import java.util.List;
3.
4.  public class B extends A {
5.      public void sample(Collection arg) {
6.          System.out.println("B");
7.      }
8.      public void sample(List arg) {
9.          System.out.println("C");
10.     }
11. }
`},
{ 
            type: "code", 
            value: `1.  import java.util.ArrayList;
2.  import java.util.List;
3.
4.  public class Main {
5.      public static void main(String[] args) {
6.
7.          A a1 = new A();
8.          A a2 = new B();
9.          B b1 = new B();
10. 
11.         List<String> list = new ArrayList<>();
12.
13.         // do something
14.
15.     }
16. }
`},
    ],
    options: `A. 「a1.sample(list)」を実行すると、Aが表示される
B. 「a2.sample(list)」を実行すると、Aが表示される
C. 「a2.sample(list)」を実行すると、Bが表示される
D. 「b1.sample(list)」を実行すると、Bが表示される
E. 「b1.sample(list)」を実行すると、Cが表示される
`,
    answer: "A、C、E",
    explanation: `Collectionは配列、リストの上位概念であるため、Collectionはリストも受け取れる。
コンパイル時は、クラスのメソッドを参照するが、実行時にはオーバーライドしたメソッドを使う。`
},
{
    id: 24,
    chapter: "ch12",
    contents:[
        { type: "text", value: "Dクラスの説明として正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. public interface A {
2.     void sample();
3. }
`},
{ 
            type: "code", 
            value: `1. public interface B extends A {
2.     default void sample() {
3.         System.out.println("B");
4.     }
5. }
`},
{ 
            type: "code", 
            value: `1. public interface C extends A {
2.     @Override
3.     default void sample() {
4.         System.out.println("C");
5.     }
6. }
`},
{ 
            type: "code", 
            value: `1. public class D implements B, C {
2.     @Override
3.     public void sample() {
4.         super.sample();
5.     }
6. }
`},
    ],
    options: `A. Bインタフェースのsampleメソッドを実装している
B. Cインタフェースのsampleメソッドを実装している
C. Dクラスがsampleメソッドを使わないのであれば、オーバーライドをする必要はない
D. コンパイルエラーが発生する
`,
    answer: "D",
    explanation: ``
},
{
    id: 25,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. public abstract class A {
2.     abstract void sample();
3. }
`},
{ 
            type: "code", 
            value: `1. public class B extends A {
2.     @Override
3.     void sample(int i) {
4.         System.out.println(10);
5.     }
6.     public static void main(String[] args) {
7.         A a = new B();
8.         a.sample();
9.     }
10. }
`},
    ],
    options: `A. 0が表示される
B. 10が表示される
C. コンパイルエラーが発生する
D. 実行時に例外がスローされる
`,
    answer: "C",
    explanation: `オーバーライドは引数を変更できない。`
},
{
    id: 26,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次のプログラムを確認し、コンパイルエラーとなるコードを選びなさい。 (1つ選択)" },
        { 
            type: "code", 
            value: `public abstract class A ()`},
        { 
            type: "code", 
            value: `public interface B ()`},
        { 
            type: "code", 
            value: `public class C extends A implements B ()`},
        { 
            type: "code", 
            value: `public class D extends C ()`},
    ],
    options: `A. List<A> listA new ArrayList<>();
　 ListA.add(new D());
B. List<B> listB new ArrayList<>();
　 listB.add(new C());
C. List<B> listC new ArrayList<>(); 
　 listC.add(new D());
D. List<D> listD new ArrayList<>();
　 listD.add(new C());
E. List<A> listE new ArrayList<>(); 
　 listE.add(new C());
`,
    answer: "D",
    explanation: ``
},
{
    id: 27,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  public class Main {
2.      public static void test(Integer a, Integer b) {
3.          System.out.println("A");
4.      }
5.      public static void test(double a, double b) {
6.          System.out.println("B");
7.      }
8.      public static void test(float a, float b) {
9.          System.out.println("C");
10.     }
11.     public static void test(int a, int b) {
12.         System.out.println("D");
13.     }
14.     public static void main(String[] args) {
15.         test(10, 20);
16.         test(10.0, 20.0);
17.     }
18. }`},
    ],
    options: `A. 「D」「C」と表示される
B. 「D」「B」と表示される
C. 「A」「B」と表示される
D. 「A」「C」と表示される
`,
    answer: "B",
    explanation: `オーバーロードされたメソッドは、渡した値の型に一番ぴったり合うものが選ばれます。
優先順位は「ぴったり同じ型 → 型を広げる → オートボクシング → 可変長引数」です。

test(10, 20)：10 と 20 は int なので、ぴったり合う test(int, int) が選ばれ「D」が表示されます。
int と Integer は別の型なので、test(int, int) と test(Integer, Integer) はオーバーロードとして共存できます。Integer 版はオートボクシングが必要なので、優先順位が低くなります。

test(10.0, 20.0)：小数点のある数字は、f を付けなければ double になります。ぴったり合う test(double, double) が選ばれ「B」が表示されます。
double → float は範囲が狭くなるため、自動では変換できません。そのため test(float, float) は選ばれません。`
},
{
    id: 28,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次のプログラムの説明として、正しいものを選びなさい。(3つ選択)" },
        { 
            type: "code", 
            value: `1. public interface A {
2.     public A build(String str);
3. }`},
        { 
            type: "code", 
            value: `1. public class B implements A {
2.     public B(String str) {
3.         // ...
4.     }
5.     @Override
6.     public B build(String str) {
7.         return new B(str);
8.     }
9. }`},
    ],
    options: `A. Aはfinalにできない
B. Bはabstractにできない
C. Bはfinalにできない
D. AはBのサブタイプである
E. Aはabstractにできない
F. BはAのサブタイプである
`,
    answer: "A、B、F",
    explanation: `A：○ インタフェースは、実装クラスに中身を書いてもらうためのものです。final（継承・実装できない）を付けると意味がなくなるため、コンパイルエラーになります。
B：○ Bクラスの7行目で new B(str) と、自分自身のインスタンスを作っています。abstractクラスは new できないため、Bをabstractにすると7行目でコンパイルエラーになります。
C：× Bをfinalにしても、Bを継承するクラスがなくなるだけなので問題ありません。
D：× 関係が逆です。BがAを実装しているので、Bが「サブタイプ（子）」、Aが「スーパータイプ（親）」です。
E：× インタフェースは、もともと抽象的なものなので、abstractを付けても付けなくても同じ意味になります。付けてもコンパイルエラーにはなりません。
F：○ BはAを実装しているので、BはAのサブタイプです。A a = new B("x"); のように、A型の変数にBを入れられます。

補足：Aのbuildメソッドの戻り値はA型ですが、Bでは戻り値をB型にしてオーバーライドしています。オーバーライドでは、戻り値を親の戻り値の型のサブタイプ（ここではB）にすることが認められています（共変戻り値）。`
},
{
    id: 29,
    chapter: "ch12",
    contents:[
        { type: "text", value: "JDKをモジュール化する理由の説明として、正しいものを選びなさい。(2つ選択)" },
    ],
    options: `A. アプリケーションモジュールとJDKのモジュールのリンクが容易に構築できる
B. Java言語を理解することが簡単になる
C. 実装の詳細を簡単に公開しやすくなる
D. セキュリティとメンテナンス性が向上する
E. アプリケーションの堅牢性が向上する
`,
    answer: "A、D",
    explanation: `A：○ JDKがモジュールに分かれたことで、jlink というツールを使い、アプリケーションのモジュールと、必要なJDKのモジュールだけをリンク（結合）して、専用の小さな実行環境を作れるようになりました。
B：× Java言語の理解しやすさとは関係ありません。
C：× 逆です。モジュール化によって、exports していないパッケージは外から使えなくなるため、実装の詳細を「隠しやすく」なります。
D：○ 公開するパッケージを限定して内部の実装を隠せるため、外部から内部の実装を勝手に使われることがなくなり、セキュリティとメンテナンス性が向上します。
E：× この問題では正解に含まれていません。モジュール化の主な理由として問われているのは、リンクのしやすさ（A）と、セキュリティ・メンテナンス性の向上（D）です。`
},
{
    id: 30,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. class A {
2.     public A() {
3.         System.out.print("A");
4.     }
5. }`},
        { 
            type: "code", 
            value: `1. class B extends A {
2.     public B() {
3.         System.out.print("B");
4.     }
5. }`},
        { 
            type: "code", 
            value: `1. class C extends B {
2.     public C() {
3.         System.out.print("C");
4.     }
5. }`},
        { 
            type: "code", 
            value: `1. public class Main {
2.     public static void main(String[] args) {
3.         new C();
4.     }
5. }`},
    ],
    options: `A. 「CBA」と表示される
B. 「C」と表示される
C. 「ABC」と表示される
D. コンパイルエラーが発生する
`,
    answer: "C",
    explanation: `子クラスのコンストラクタの1行目には、書かなくても super(); が自動で追加されます。
そのため、new C() を実行すると、C → B → A の順に親のコンストラクタが呼び出されます。
実際の表示は、一番上の親から順番に行われるので、A → B → C の順になります。

C() の1行目：super(); → B() を呼ぶ
B() の1行目：super(); → A() を呼ぶ
A()：「A」を表示 → B() に戻って「B」を表示 → C() に戻って「C」を表示`
},
{
    id: 31,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  import java.util.ArrayList;
2.  import java.util.Arrays;
3.
4.  public class Main {
5.      public static void main(String[] args) {
6.          var alphabet = new ArrayList<>(
7.              Arrays.asList(
8.                  new String[] {"A", "B", "C", "D", "E"}
9.          ));
10.         alphabet.sort((var a, var b) -> -a.compareTo(b));
11.         alphabet.forEach(System.out::println);
12.     }
13. }`},
    ],
    options: `A. 何も表示されない
B. 「A」「B」「C」「D」「E」と表示される
C. 「E」「D」「C」「B」「A」と表示される
D. 「A」「B」と表示される
`,
    answer: "C",
    explanation: `6〜9行目：String の配列を Arrays.asList でリストにし、それを元に ArrayList を作っています。var と <> を使っていますが、引数の型から ArrayList<String> と判断されます。

10行目：sort メソッドで並べ替えています。
a.compareTo(b) は、a が b より辞書順で前なら負の数、後なら正の数を返します。この値に「-」を付けて符号を逆にしているので、通常とは逆の順番（降順）に並びます。
また、ラムダ式の引数には、var を使って (var a, var b) と書くこともできます。

11行目：forEach とメソッド参照 System.out::println で、要素を1つずつ表示します。

そのため、「E」「D」「C」「B」「A」の順に表示されます。`
},
{
    id: 32,
    chapter: "ch12",
    contents:[
        { type: "text", value: "抽象クラスの定義として、正しいものを選びなさい。(1つ選択)" },
    ],
    options: [
        { label: "A", code: `abstract class Item {
    public abstract int calcPrice(Item item);
    public void print(Item item) {
        // do something
    }
}` },
        { label: "B", code: `abstract class Item {
    public int calcPrice(Item item);
    public void print(Item item);
}` },
        { label: "C", code: `abstract class Item {
    public int calcPrice(Item item);
    public final void print(Item item) {
        // do something
    }
}` },
        { label: "D", code: `abstract class Item {
    public abstract int calcPrice(Item item) {
        // do something
    }
    public abstract void print(Item item) {
        // do something
    }
}` },
    ],
    answer: "A",
    explanation: `抽象クラスには、次の2種類のメソッドを書けます。
・抽象メソッド：abstract を付けて、中身 { } を書かない（セミコロンで終わる）
・普通のメソッド：abstract を付けずに、中身 { } を書く

A：○ calcPrice は abstract で中身なし、print は普通のメソッドで中身あり。正しい書き方です。
B：× calcPrice と print に abstract が付いていないのに、中身 { } がありません。
C：× calcPrice に abstract が付いていないのに、中身 { } がありません。
D：× abstract を付けたメソッドに、中身 { } を書いています。`
},
{
    id: 33,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  import java.util.HashMap;
2.  import java.util.List;
3.  import java.util.Map;
4.
5.  public class Main {
6.      static Map<String, String> map = new HashMap<>();
7.      static List<String> keys = List.of("A", "B", "C");
8.      static String[] values = {"1", "2", "3"};
9.      static {
10.         for (var i = 0; i < keys.size(); i++) {
11.             map.put(keys.get(i), values[i]);
12.         }
13.     }
14.     public static void main(String[] args) {
15.         keys.clear();
16.         values = new String[0];
17.         System.out.println(map.size() + "," + keys.size() + "," + values.length);
18.     }
19. }`},
    ],
    options: `A. 「3,3,0」と表示される
B. 「3,0,0」と表示される
C. 「3,3,3」と表示される
D. コンパイルエラーが発生する
E. 実行時に例外がスローされる
`,
    answer: "E",
    explanation: `9〜13行目の static { } は static 初期化ブロックで、クラスが最初に使われたときに1回だけ実行されます。ここで map に A=1、B=2、C=3 の3つが登録されます。

15行目：keys は List.of で作ったリストです。List.of で作ったリストは変更できない（イミュータブル）ため、clear() を呼ぶと UnsupportedOperationException がスローされます。
そのため、16行目以降は実行されません。

なお、もし keys が new ArrayList<>(...) で作った普通のリストであれば、「3,0,0」と表示されます。`
},
{
    id: 34,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  public class Sample {
2.      public static void main(String[] args) {
3.          char c = 'b';
4.          int i = 0;
5.          switch (c) {
6.              case 'a':
7.                  i++;
8.                  break;
9.              case 'b':
10.                 i++;
11.             case 'c':
12.             case 'd':
13.                 i++;
14.             case 'e':
15.                 i++;
16.                 break;
17.             case 'f':
18.                 i++;
19.                 break;
20.             default:
21.                 System.out.println(c);
22.         }
23.         System.out.println(i);
24.     }
25. }`},
    ],
    options: `A. 3が表示される
B. b1が表示される
C. 1が表示される
D. b2が表示される
`,
    answer: "A",
    explanation: `switch文は、一致した case から処理を始め、break が来るまで下の case の処理も続けて実行します（フォールスルー）。
c は 'b' なので、9行目の case 'b' から始まります。
10行目で i = 1 → break がないので 13行目へ進み i = 2 → さらに 15行目へ進み i = 3 → 16行目の break で switch を抜けます。
default は、どの case にも一致しなかったときだけ実行されるので、c は表示されません。
そのため、3 が表示されます。`
},
{
    id: 35,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. public class A {
2.     private void print() {
3.         System.out.println("A");
4.     }
5.     public void a() {
6.         print();
7.     }
8. }`},
        { 
            type: "code", 
            value: `1.  public class B extends A {
2.      private void print() {
3.          System.out.println("B");
4.      }
5.      public void b() {
6.          print();
7.      }
8.      public static void main(String... args) {
9.          B b = new B();
10.         b.a();
11.         b.b();
12.     }
13. }`},
    ],
    options: `A. 「A」「B」と表示される
B. 「B」「B」と表示される
C. コンパイルエラーが発生する
D. 実行時に例外がスローされる
`,
    answer: "A",
    explanation: `private メソッドは継承されないため、オーバーライドもされません。
A の print() と B の print() は、名前が同じだけの、まったく別のメソッドです。

b.a()：A クラスの a() の中で print() を呼んでいます。A クラスの中から見える print() は A の print() なので、「A」が表示されます。
b.b()：B クラスの b() の中で print() を呼んでいるので、B の print() が呼ばれ、「B」が表示されます。

もし print() が public でオーバーライドされていれば、b.a() でも実物（B）の print() が呼ばれ、「B」「B」になります。`
},
{
    id: 36,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次の繰り返し処理のコードと同じ結果となるfor文を選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `int x = 0;
while (x < 10) {
    System.out.print(x++);
}`},
    ],
    options: [
        { label: "A", code: `for (int a = 0; a < 10;) {
    System.out.print(a);
    a++;
}` },
        { label: "B", code: `int b = 0;
for (; b < 10;) {
    System.out.print(++b);
}` },
        { label: "C", code: `int c = 0;
for (;; c++) {
    System.out.print(c);
}` },
        { label: "D", code: `for (int d = 0; d < 10; d++) {
    System.out.print(d++);
}` },
    ],
    answer: "A",
    explanation: `元のコードは、x を表示してから1増やすので「0123456789」と表示されます。

A：○ a を表示してから a++ で1増やしています。for 文の3つ目（更新部分）は省略できます。「0123456789」と表示されます。
B：× ++b は「増やしてから使う」ので、「12345678910」と表示されます。
C：× 2つ目（条件部分）を省略すると、条件は常に true になり、無限ループになります。
D：× 表示するときの d++ と、for 文の d++ で、1周に2回増えるので、「02468」と表示されます。`
},
{
    id: 37,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次のうち、メソッドの定義として正しいものを選びなさい。(2つ選択)" },
    ],
    options: [
        { label: "A", code: `public void methodA(int x) {
    return ++x;
}` },
        { label: "B", code: `public String methodB() {
    System.out.println("B");
}` },
        { label: "C", code: `public boolean methodC(int a) {
    return a > 0;
}` },
        { label: "D", code: `public char methodD(String str) {
    return str;
}` },
        { label: "E", code: `public void methodE() {
    return;
}` },
    ],
    answer: "C、E",
    explanation: `A：× 戻り値が void（何も返さない）なのに、値を return しています。
B：× 戻り値が String なのに、return がありません。
C：○ 戻り値が boolean で、a > 0 の結果（true / false）を返しています。
D：× 戻り値が char なのに、String を返しています。
E：○ void のメソッドでも、値を付けない return; は書けます。その場でメソッドを終了するという意味です。`
},
{
    id: 38,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  import java.util.List;
2.
3.  public class Main {
4.      public static void main(String[] args) {
5.          List<Character> list = List.of();
6.          list.add('a');
7.          list.add('b');
8.          list.add('c');
9.          System.out.println(list);
10.     }
11. }`},
    ],
    options: `A. [a, b, c]
B. [c, b, a]
C. コンパイルエラーが発生する
D. 実行時に例外がスローされる
`,
    answer: "D",
    explanation: `List.of で作ったリストは、変更できない（イミュータブル）リストです。
6行目で add を呼ぶと、UnsupportedOperationException がスローされます。
文法としては正しいので、コンパイルエラーにはなりません。`
},
{
    id: 39,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次のプログラムを以下に示したコマンドで実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { type: "code", value: `> java A "A B" A B` },
        { 
            type: "code", 
            value: `1. public class A {
2.     public static void main(String[] args) {
3.         for (String str : args) {
4.             System.out.print(str);
5.         }
6.     }
7. }`},
    ],
    options: `A. 「AA BAB」と表示される
B. 「A BAB」と表示される
C. 「A B A B」と表示される
D. 「ABAB」と表示される
E. 実行時に例外がスローされる
`,
    answer: "B",
    explanation: `起動パラメータは、スペースで区切られます。ただし、ダブルクォーテーション（"）で囲んだ部分は、スペースを含めて1つの値になります。
そのため、args は ["A B", "A", "B"] の3つになります。
1行目の A は実行するクラス名なので、args には入りません。

print は改行もスペースも入れずに続けて表示するので、「A B」「A」「B」がつながって「A BAB」と表示されます。`
},
{
    id: 40,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  public class Main {
2.      public static void main(String[] args) {
3.          String[] array = {"A", "B", "C", "D"};
4.          for (int i = 0; i < array.length; i++) {
5.              System.out.print(array[i] + " ");
6.              if (array[i].equals("C")) {
7.                  continue;
8.              }
9.              System.out.println("end");
10.             break;
11.         }
12.     }
13. }`},
    ],
    options: `A. 「A B C end」と表示される
B. 「A B C D end」と表示される
C. 「A end」と表示される
D. コンパイルエラーが発生する
`,
    answer: "C",
    explanation: `1周目は array[0] の "A" を表示します。
"A" は "C" ではないので、6行目の if は false になり、continue は実行されません。
9行目で「end」を表示し、10行目の break で for 文を抜けます。
そのため、2周目には進まず、「A end」と表示されます。`
},
{
    id: 41,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次のプログラムを確認し、Dインタフェースでコンパイルエラーが発生する理由として考えられるものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. public interface A {
2.     public Iterable a();
3. }`},
        { 
            type: "code", 
            value: `1. import java.util.Collection;
2.
3. public interface B extends A {
4.     public Collection a();
5. }`},
        { 
            type: "code", 
            value: `1. import java.nio.file.Path;
2.
3. public interface C extends A {
4.     public Path a();
5. }`},
        { 
            type: "code", 
            value: `1. public interface D extends B, C {
2.
3. }`},
    ],
    options: `A. Dインタフェースが2つ以上継承しているため
B. BインタフェースがAインタフェースとは異なる戻り値型の同名メソッドを定義しているため
C. BとCインタフェースから継承したメソッドの戻り値型が異なるため
D. Dインタフェースで継承したメソッドを再定義しなかったため
`,
    answer: "C",
    explanation: `D は B と C の両方を継承しています。
B の a() は Collection を返し、C の a() は Path を返します。Collection と Path は、どちらも Iterable のサブタイプですが、お互いには関係がない型です。
そのため、D は「Collection と Path の両方として扱える型」を返すメソッドを用意できず、コンパイルエラーになります。

A：× インタフェースは、複数のインタフェースを継承（extends）できます。
B：× B の Collection は、A の Iterable のサブタイプなので、戻り値の型を変えてオーバーライドできます（共変戻り値）。C の Path も同じです。
D：× D で再定義しても、Collection と Path の両方を満たす戻り値の型はないので、解決できません。`
},
{
    id: 42,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. package ex42.a;
2.
3. public class A {
4.     public String x = "A";
5.     protected A() { }
6. }`},
        { 
            type: "code", 
            value: `1.  package ex42.b;
2.
3.  import ex42.a.A;
4.
5.  public class B extends A {
6.      String x = "B";
7.      public B() {
8.          super();
9.      }
10. }`},
        { 
            type: "code", 
            value: `1.  package ex42;
2.
3.  import ex42.a.A;
4.  import ex42.b.B;
5.
6.  public class Main {
7.      public static void main(String[] args) {
8.          A a = new B();
9.          System.out.println(a.x);
10.     }
11. }`},
    ],
    options: `A. コンパイルエラーが発生する
B. 実行時に例外がスローされる
C. Aが表示される
D. Bが表示される
`,
    answer: "C",
    explanation: `A のコンストラクタは protected ですが、別パッケージのサブクラス B の中から super() で呼び出すことはできるので、コンパイルエラーにはなりません。

B は x を宣言していますが、これはオーバーライドではなく、A の x を「隠蔽」しているだけです。B のオブジェクトの中には、A の x と B の x の両方が存在します。
フィールドは、変数の型で決まります。変数 a の型は A なので、a.x は A の x を指し、「A」が表示されます。

覚え方：メソッドは実物（右側）、フィールドは変数の型（左側）で決まる。`
},
{
    id: 43,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. public class A {
2.     private boolean isValue(int val) {
3.         return true;
4.     }
5. }`},
        { 
            type: "code", 
            value: `1.  public class B extends A {
2.      public int test(int num) {
3.          if (isValue(num)) {
4.              return num;
5.          }
6.          return 0;
7.      }
8.      public static void main(String[] args) {
9.          B b = new B();
10.         System.out.println(b.test(10));
11.     }
12. }`},
    ],
    options: `A. 0が表示される
B. 10が表示される
C. 実行時に例外がスローされる
D. コンパイルエラーが発生する
`,
    answer: "D",
    explanation: `A の isValue メソッドは private なので、A クラスの中からしか使えません。
private メソッドは継承されないため、子クラスの B から isValue を呼ぶと、B クラスの3行目でコンパイルエラーになります。`
},
{
    id: 44,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. public class Sample {
2.     String name;
3.     int num;
4.     public Sample(String name, int num) {
5.         this.name = name;
6.         this.num = num;
7.     }
8. }`},
        { 
            type: "code", 
            value: `1.  public class SubSample extends Sample {
2.      int price;
3.      public SubSample(int price) {
4.          this.price = price;
5.      }
6.      public SubSample(String name, int num, int price) {
7.          super(name, num);
8.          this(price);
9.      }
10. }`},
        { 
            type: "code", 
            value: `1. public class Main {
2.     public static void main(String[] args) {
3.         SubSample s1 = new SubSample(100);
4.         SubSample s2 = new SubSample("sample", 200, 100);
5.         System.out.println(s1.name + ", " + s1.num + ", " + s1.price);
6.         System.out.println(s2.name + ", " + s2.num + ", " + s2.price);
7.     }
8. }`},
    ],
    options: `A. sample 200 100
　 sample 200 100
B. null 0 100
　 sample 200 100
C. SubSampleクラスの3行目だけでコンパイルエラーになる
D. SubSampleクラスの8行目だけでコンパイルエラーになる
E. SubSampleクラスの3行目と8行目の両方でコンパイルエラーになる
`,
    answer: "E",
    explanation: `3行目：SubSample(int price) の1行目には、自動で super(); が追加されます。しかし、親の Sample には引数なしのコンストラクタがない（引数ありのコンストラクタしか定義していない）ため、コンパイルエラーになります。
8行目：this() と super() は、どちらもコンストラクタの1行目にしか書けません。7行目に super() があるので、8行目の this() はコンパイルエラーになります。`
},
{
    id: 45,
    chapter: "ch12",
    contents:[
        { type: "text", value: "testメソッドのオーバーライドとして正しくないものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. public interface Sample {
2.     void test();
3. }`},
    ],
    options: [
        { label: "A", code: `public class SampleTest implements Sample {
    @Override
    public void test() { System.out.println("test"); }
}` },
        { label: "B", code: `public class SampleTest2 {
    @Override
    public void test() { System.out.println("test"); }
}` },
        { label: "C", code: `public abstract class SampleTest3 implements Sample {
    @Override
    public abstract void test();
}` },
        { label: "D", code: `public abstract class SampleTest4 implements Sample {
    @Override
    public void test() {
        System.out.println("test");
    }
}` },
    ],
    answer: "B",
    explanation: `B：SampleTest2 は Sample を implements していないので、test() は何もオーバーライドしていません。それなのに @Override を付けているため、コンパイルエラーになります。

A：○ Sample を実装し、test() をオーバーライドしています。
C：○ 抽象クラスでは、抽象メソッドを abstract のまま再宣言できます。
D：○ 抽象クラスでも、中身のあるメソッドでオーバーライドできます。`
},
{
    id: 46,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。なお、現在の日付は2019年8月14日とする。(1つ選択)" },
        { 
            type: "code", 
            value: `1. import java.time.LocalDate;
2.
3. public class Diary {
4.     private LocalDate now = LocalDate.now();
5.     public LocalDate getNow() {
6.         return this.now;
7.     }
8. }`},
        { 
            type: "code", 
            value: `1. public class Main {
2.     public static void main(String[] args) {
3.         Diary d = new Diary();
4.         System.out.println(d.getNow());
5.     }
6. }`},
    ],
    options: `A. 「2019-08-14」と表示される
B. 「08-14-2019」と表示される
C. 「14-08-2019」と表示される
D. 「08-14」と表示される
E. 「2019-08」と表示される
`,
    answer: "A",
    explanation: `LocalDate.now() は、現在の日付を表す LocalDate を作ります。
LocalDate を println で表示すると、toString() が呼ばれ、「年-月-日」（yyyy-MM-dd）の形式で表示されます。
月や日が1桁のときは、先頭に0が付きます。そのため、「2019-08-14」と表示されます。`
},
{
    id: 47,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次の数式を表したコードとして、正しいものを選びなさい。(1つ選択)" },
        { type: "math", value: "a = b \\frac{c(1+c)^n}{(1+c)^n - 1}" },
    ],
    options: `A. a = b * (c * Math.pow(1 + c, n) / (Math.pow(1 + c, n) - 1));
B. a = b * c * Math.pow(1 + c, n) / Math.pow(1 + c, n) - 1;
C. a = b * c * (Math.pow(1 + c, n) / (Math.pow(1 + c, n) - 1));
D. a = b * Math.pow(1 + c, n) - 1 / (c * Math.pow(1 + c, n));
`,
    answer: "A",
    explanation: `Math.pow(x, y) は、x の y 乗を計算するメソッドです。(1+c)^n は Math.pow(1 + c, n) と書きます。
分数は「分子 / 分母」で表しますが、分母の (1+c)^n - 1 は、カッコで囲まないと、割り算が先に計算されてしまいます。

A：○ 分子 c * (1+c)^n を、カッコで囲んだ分母 ((1+c)^n - 1) で割り、それに b を掛けています。
B：× 分母にカッコがないため、「÷ (1+c)^n」を計算した後に「- 1」をしてしまいます。
D：× 分子と分母が逆になっているうえ、カッコの位置も正しくありません。`
},
{
    id: 48,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次のプログラムを以下に示したコマンドで実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { type: "code", value: `> java Main a b c` },
        { 
            type: "code", 
            value: `1. public class Main {
2.     public static void main(String[] args) {
3.         int i = 1;
4.         for (String s : args) {
5.             System.out.println((i++) + ") " + s);
6.         }
7.     }
8. }`},
    ],
    options: [
        { label: "A", code: `1) a
2) b
3) c` },
        { label: "B", code: `2) a
3) b
4) c` },
        { label: "C", code: `1) Main
2) a
3) b
4) c` },
        { label: "D", code: `2) Main
3) a
4) b
5) c` },
    ],
    answer: "A",
    explanation: `args には、クラス名（Main）は含まれず、その後ろの a、b、c だけが入ります。
i++ は「使ってから増やす」ので、最初は 1 が表示され、その後 i が 2 になります。
そのため、「1) a」「2) b」「3) c」と表示されます。`
},
{
    id: 49,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  public class Sample {
2.      int a;
3.      int b;
4.      int c;
5.      int d;
6.      void setA(int a) {
7.          a = a;
8.      }
9.      void setB() {
10.         this.b = b;
11.     }
12.     int setC() {
13.         return c;
14.     }
15.     int setD(int num) {
16.         d = num;
17.         return d;
18.     }
19.     void setAll(int x) {
20.         a = b = this.c = setD(x);
21.     }
22.     @Override
23.     public String toString() {
24.         return "Sample [a=" + a + ", b=" + b + ", c=" + c + ", d=" + d + "]";
25.     }
26.     public static void main(String[] args) {
27.         Sample s = new Sample();
28.         s.setAll(10);
29.         System.out.println(s);
30.     }
31. }`},
    ],
    options: `A. Sample [a=10, b=10, c=10, d=10]
B. Sample [a=0, b=10, c=10, d=10]
C. Sample [a=0, b=0, c=0, d=10]
D. コンパイルエラーが発生する
E. 実行時に例外がスローされる
`,
    answer: "A",
    explanation: `main から呼ばれているのは setAll(10) だけです。setA、setB、setC は呼ばれていないので、結果には関係ありません。
thisを使った明示的な宣言がない場合、基本的にローカル変数を使うようになっているので、この場合は特に問題なし。

20行目の a = b = this.c = setD(x); は、右から順番に代入されます。
① setD(10) で d = 10 になり、10 が返される
② this.c = 10
③ b = 10
④ a = 10
そのため、すべて 10 になります。`
},
{
    id: 50,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  public class Main {
2.      public static void main(String[] args) {
3.          int num = 0;
4.          do {
5.              num++;
6.              if (num == 1) {
7.                  continue;
8.              }
9.              System.out.println(num);
10.         } while (num < 1);
11.     }
12. }`},
    ],
    options: `A. 「0」「1」と表示される
B. 「0」と表示される
C. 「1」と表示される
D. 何も表示されない
`,
    answer: "D",
    explanation: `5行目で num が 1 になります。
6行目の if が true になり、7行目の continue で、残りの処理（9行目）を飛ばして、10行目の条件判定に進みます。
num < 1 は 1 < 1 なので false になり、ループが終了します。
9行目の println は一度も実行されないので、何も表示されません。

do-while 文の continue は、ループの先頭ではなく、while の条件判定に進むことに注意しましょう。`
},
{
    id: 51,
    chapter: "ch12",
    contents:[
        { type: "text", value: "例外処理に関する説明として、正しいものを選びなさい。(2つ選択)" },
    ],
    options: `A. finallyブロックは、tryブロックまたはcatchブロックのすぐ後ろに配置しなければいけない
B. try-with-resourcesのリソースを閉じる前に、finallyブロックが実行される
C. tryブロックは複数のcatchブロックを持つことができる
D. catchブロックは、一般的な型から特定の型への順に並べなければいけない
E. tryブロックは、catchブロックとfinallyブロックを持たなければいけない
`,
    answer: "A、C",
    explanation: `A：○ finally は、try または catch のすぐ後ろに書きます。catch より前に書くことはできません。
B：× try-with-resources では、リソースが自動で閉じられた後に、catch や finally が実行されます。
C：○ 例外の種類ごとに、catch を複数書けます。
D：× 逆です。特定の型（子クラス）から、一般的な型（親クラス）の順に並べます。親を先に書くと、子の catch に到達できず、コンパイルエラーになります。
E：× try には、catch か finally のどちらか一方があれば十分です。（try-with-resources なら、どちらもなくても書けます。）`
},
{
    id: 52,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  import java.util.Arrays;
2.
3.  public class Main {
4.      public static void main(String[] args) {
5.          int[] array1 = {1, 2, 3, 4, 5};
6.          int[] array2 = {1, 2, 4, 5, 3};
7.          int result1 = Arrays.mismatch(array1, array2);
8.          int result2 = Arrays.compare(array1, array2);
9.          System.out.println(result1 + ":" + result2);
10.     }
11. }`},
    ],
    options: `A. 「-1:2」と表示される
B. 「2:3」と表示される
C. 「2:-1」と表示される
D. 「3:0」と表示される
`,
    answer: "C",
    explanation: `Arrays.mismatch は、2つの配列を先頭から比べて、最初に違う値が出てきた位置を返します（全部同じなら -1）。
位置0と1は同じで、位置2で 3 と 4 が違うので、2 が返されます。

Arrays.compare は、最初に違う値が出てきた位置で大小を比べます。
位置2で、array1 の 3 は array2 の 4 より小さいので、負の数（-1）が返されます。

そのため、「2:-1」と表示されます。`
},
{
    id: 53,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次のプログラムを実行したときに「2.5」と表示されるようにしたい。空欄に入るコードとして、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. public class Main {
2.     public static void main(String[] args) {
3.         byte x = 5, y = 2;
4.         □□□□□□□
5.         System.out.println(a);
6.     }
7. }`},
    ],
    options: `A. float a = Math.round((float) x / y * 100) / (float) 100;
B. float a = (float) (Math.round((float) x / y * 100) / 100);
C. float a = Math.round((int) (x / y), 2);
D. float a = Math.round((float) x / y, 2);
`,
    answer: "A",
    explanation: `A：○ (float) x / y で 2.5 になり、100 を掛けて 250.0 になります。Math.round で四捨五入すると int の 250 になります。(float) 100 で割ると、float 同士の割り算になり、2.5 が表示されます。
B：× Math.round の結果 250 を、int の 100 で割っているため、int 同士の割り算になり 2 になります。それを float にしても 2.0 です。
C・D：× Math.round には、桁数を指定する引数はありません。引数が2つのメソッドは存在しないので、コンパイルエラーになります。`
},
{
    id: 54,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次のプログラムの説明として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. public interface Sample {
2.     void test();
3. }`},
        { 
            type: "code", 
            value: `1. class SampleImpl implements Sample {
2.     @Override
3.     public void test() {
4.         // do something
5.     }
6. }`},
        { 
            type: "code", 
            value: `1. class SubSampleImpl extends SampleImpl {
2.     void test(int x) {
3.         // do something...
4.     }
5. }`},
    ],
    options: `A. Sampleインタフェースでコンパイルエラーが発生する
B. SampleImplクラスでコンパイルエラーが発生する
C. SubSampleImplクラスでコンパイルエラーが発生する
D. 正常にコンパイル、実行できる
`,
    answer: "D",
    explanation: `Sample：抽象メソッド test() を宣言しているだけなので、問題ありません。
SampleImpl：test() を public でオーバーライドしています。インタフェースのメソッドは自動的に public になるため、実装するときも public にする必要があります。ここも問題ありません。

SubSampleImpl：test(int x) は、引数があるので、親の test() とは別のメソッドです。オーバーライドではなく、オーバーロード（同じ名前で引数が違うメソッドを追加すること）になります。
オーバーロードなら、アクセス修飾子が親より狭くても（public → なし）問題ありません。

そのため、どこもコンパイルエラーにならず、正常にコンパイルできます。

もし test(int x) ではなく、引数なしの void test() を書いていたら、親の public を狭めてしまうオーバーライドになるため、コンパイルエラーになります。`
},
{
    id: 55,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次のステートメントのうち、正しいものを選びなさい。(4つ選択)" },
    ],
    options: `A. int[][] a = {{1, 1}, {2, 2}};
B. short b = (short) 'A';
C. byte c1 = 10;
　 char c2 = c1;
D. boolean d = (10 == 10);
E. float e = 1.99;
F. int f = 12_34;
G. String g = 'a';
`,
    answer: "A、B、D、F",
    explanation: `A：○ 2次元配列を、初期化子 {} を使って作っています。
B：○ char の 'A'（文字コード65）を、キャストで short に変換しています。
C：× byte から char への代入は、キャストが必要です。byte はマイナスの値を持てますが、char はマイナスの値を持てないため、自動では変換されません。
D：○ 10 == 10 の結果は true なので、boolean に代入できます。
E：× 1.99 のような小数は double 型として扱われます。float に入れるには 1.99f のように f を付ける必要があります。
F：○ 数値の間には _（アンダースコア）を入れられます。12_34 は 1234 と同じです。
G：× 'a' はシングルクォーテーションなので、char 型です。String には "a" のようにダブルクォーテーションを使います。`
},
{
    id: 56,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  public class Main {
2.      public static void main(String[] args) {
3.          String[][] array = {
4.              {"A", "B"},
5.              {"C"},
6.              {"D", "E", "F", "G"}
7.          };
8.          for (int i = 0; i < array.length; i++) {
9.              int j = 0;
10.             for (; j < array[i].length; j++) {
11.                 System.out.println("[" + i + ", " + j + "] = " + array[i][j]);
12.             }
13.         }
14.     }
15. }`},
    ],
    options: [
        { label: "A", code: `[0, 0] = A
[0, 1] = B
[1, 0] = C
[1, 1] = D
[2, 0] = E
[2, 1] = F
[2, 2] = G` },
        { label: "B", code: `[0, 0] = A
[0, 1] = B
[1, 0] = C
[2, 0] = D
[2, 1] = E
[2, 2] = F
[2, 3] = G` },
        { label: "C", code: `[0, 0] = A
[0, 1] = B
[1, 0] = C
[1, 1] = D
[2, 0] = E
[2, 1] = F
[3, 0] = G` },
        { label: "D", code: `[0, 0] = A
[0, 1] = B
[0, 2] = C
[1, 0] = D
[1, 1] = E
[1, 2] = F
[1, 3] = G` },
    ],
    answer: "B",
    explanation: `2次元配列は、「配列の中に配列が入っている」ものです。中の配列の長さは、それぞれ違っていてもかまいません。
array[0] は {"A", "B"}、array[1] は {"C"}、array[2] は {"D", "E", "F", "G"} です。

10行目の for 文は、1つ目（初期化部分）を省略していますが、9行目で j = 0 にしているので問題ありません。
外側のループで i を、内側のループで j を回すので、各配列の要素が順番に表示されます。`
},
{
    id: 57,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  public class Main {
2.      public static void main(String[] args) {
3.          try {
4.              throw new Exception();
5.          } catch (Exception e) {
6.              throw new RuntimeException();
7.          } catch (RuntimeException e) {
8.              System.out.println("A");
9.          } finally {
10.             System.out.println("B");
11.         }
12.     }
13. }`},
    ],
    options: `A. Aが表示される
B. Bが表示される
C. コンパイルエラーが発生する
D. 実行時に例外がスローされる
`,
    answer: "C",
    explanation: `RuntimeException は Exception のサブクラスです。
5行目の catch (Exception e) が、RuntimeException も受け止めてしまうため、7行目の catch (RuntimeException e) には絶対に到達できません。
そのため、7行目でコンパイルエラーになります。
catch は「子クラス（特定の型）→ 親クラス（一般的な型）」の順に書く必要があります。`
},
{
    id: 58,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  public class Main {
2.      public static void main(String[] args) {
3.          int num = 9;
4.          if (num++ < 10) {
5.              System.out.println(num);
6.          } else {
7.              System.out.println("B");
8.          }
9.      }
10. }`},
    ],
    options: `A. 10が表示される
B. Bが表示される
C. 9が表示される
D. コンパイルエラーが発生する
`,
    answer: "A",
    explanation: `num++ は「使ってから増やす」ので、条件判定には増やす前の 9 が使われます。
9 < 10 は true なので、5行目に進みます。
この時点で num は 10 に増えているので、10 が表示されます。`
},
{
    id: 59,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. public class Main {
2.     public static void main(String[] args) {
3.         int a = 4;
4.         int b = 2;
5.         System.out.println(a + b + "=(a+b)=" + a + b);
6.     }
7. }`},
    ],
    options: `A. 「6=(a+b)=42」と表示される
B. 「6=(a+b)=6」と表示される
C. 「42=(a+b)=42」と表示される
D. 「42=(a+b)=6」と表示される
`,
    answer: "A",
    explanation: `+ は左から順番に計算されます。
① a + b：どちらも int なので、足し算になり 6
② 6 + "=(a+b)="：文字列とつなぐと、文字列の連結になり "6=(a+b)="
③ "6=(a+b)=" + a：文字列なので連結になり "6=(a+b)=4"
④ "6=(a+b)=4" + b：連結になり "6=(a+b)=42"
一度文字列になると、それ以降の + はすべて文字列の連結になります。`
},
{
    id: 60,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. public class Sample {
2.     public static void main(String[] args) {
3.         short s1 = 10;
4.         Integer s2 = 20;
5.         Long s3 = (long) s1 + s2;
6.         String s4 = (String) (s3 + s2);
7.         System.out.println(s4);
8.     }
9. }`},
    ],
    options: `A. 30が表示される
B. 5行目でコンパイルエラーが発生する
C. 6行目でコンパイルエラーが発生する
D. 5行目でClassCastExceptionがスローされる
E. 6行目でClassCastExceptionがスローされる
`,
    answer: "C",
    explanation: `5行目：(long) s1 は long、s2 は Integer から int に自動で変換（アンボクシング）されます。long + int は long になり、Long に自動で変換（オートボクシング）されるので、問題ありません。
6行目：s3 + s2 の結果は long（数値）です。数値を (String) でキャストすることはできないため、コンパイルエラーになります。
数値を文字列にしたいときは、String.valueOf() を使ったり、"" + を付けたりします。`
},
{
    id: 61,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行した結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  public class Main {
2.      public static void main(String[] args) {
3.          String s1 = new String("Java");
4.          String s2 = "Java";
5.          String s3 = s2.intern();
6.          System.out.print((s1 == s2) + ", ");
7.          System.out.print((s2 == s3) + ", ");
8.          System.out.println(s1 == s3);
9.      }
10. }`},
    ],
    options: `A. 「false, true, false」と表示される
B. 「true, true, true」と表示される
C. 「true, false, false」と表示される
D. 「true, true, false」と表示される
E. 「false, false, false」と表示される
`,
    answer: "A",
    explanation: `s1：new String で作ったので、コンスタントプールとは別の場所にある実体です。
s2："Java" と直接書いたので、コンスタントプールにある実体です。
s3：s2.intern() は、コンスタントプールにある実体を返すので、s2 と同じ実体です。

s1 == s2：別の実体 → false
s2 == s3：同じ実体 → true
s1 == s3：別の実体 → false`
},
{
    id: 62,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  public class Main {
2.      public static void main(String[] args) {
3.          char[][] arrays = {{'a', 'd'}, {'b', 'e'}, {'c', 'f'}};
4.          for (char[] array : arrays) {
5.              for (char ch : array) {
6.                  System.out.print(ch);
7.              }
8.              System.out.print(" ");
9.          }
10.     }
11. }`},
    ],
    options: `A. 「ad be cf」と表示される
B. 「abc def」と表示される
C. 「adbecf」と表示される
D. 「adb ecf」と表示される
`,
    answer: "A",
    explanation: `外側の for 文で、{'a', 'd'}、{'b', 'e'}、{'c', 'f'} の配列を1つずつ取り出します。
内側の for 文で、その配列の文字を順番に表示し、内側のループが終わるたびに8行目でスペースを表示します。
そのため、「ad be cf」と表示されます。`
},
{
    id: 63,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  public class Main {
2.      public static void main(String[] args) {
3.          int x;
4.          int y = 3;
5.          if (y > 2) {
6.              x = ++y;
7.              y = x + 5;
8.          } else {
9.              y++;
10.         }
11.         System.out.println(x + "," + y);
12.     }
13. }`},
    ],
    options: `A. 「4,9」と表示される
B. 「3,8」と表示される
C. コンパイルエラーが発生する
D. 実行時に例外がスローされる
`,
    answer: "C",
    explanation: `ローカル変数 x は、3行目で宣言しただけで、初期値が入っていません。
if の中（6行目）では x に値を入れていますが、else の中では入れていません。
コンパイラは「else を通った場合、x に値が入っていない」と判断するため、11行目で x を使った時点でコンパイルエラーになります。
実際には y > 2 が true になりますが、コンパイラは実行時の値までは考えません。`
},
{
    id: 64,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次のプログラムを以下に示したコマンドで実行した結果として、正しいものを選びなさい。(1つ選択)" },
        { type: "code", value: `> java Main 1 2 3` },
        { 
            type: "code", 
            value: `1.  public class Main {
2.      public static void main(int[] args) {
3.          System.out.println("A");
4.      }
5.      public static void main(Object[] args) {
6.          System.out.println("B");
7.      }
8.      public static void main(String[] args) {
9.          System.out.println("C");
10.     }
11. }`},
    ],
    options: `A. Aが表示される
B. Bが表示される
C. Cが表示される
D. コンパイルエラーが発生する
E. 実行時に例外がスローされる
`,
    answer: "C",
    explanation: `main メソッドも、引数の型が違えばオーバーロードできます。
ただし、プログラムを起動したときに最初に呼ばれるのは、public static void main(String[] args) の形のものだけです。
起動パラメータの 1 2 3 は、数字であっても String として渡されます。
そのため、8行目の main が呼ばれ、「C」が表示されます。`
},
{
    id: 65,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. public class A {
2.     protected A() {
3.         this(2);
4.         System.out.print("1");
5.     }
6.     protected A(int a) {
7.         System.out.print(a);
8.     }
9. }`},
        { 
            type: "code", 
            value: `1. public class B extends A {
2.     B() {
3.         this(4);
4.         System.out.print("3");
5.     }
6.     B(int b) {
7.         System.out.print(b);
8.     }
9. }`},
        { 
            type: "code", 
            value: `1. public class Main {
2.     public static void main(String[] args) {
3.         B b = new B();
4.     }
5. }`},
    ],
    options: `A. 2143が表示される
B. 1234が表示される
C. 4321が表示される
D. 3421が表示される
`,
    answer: "A",
    explanation: `コンストラクタの呼び出しを、順番にたどります。
① new B() → B() の1行目 this(4) で B(int b) を呼ぶ
② B(int b) の1行目には、自動で super(); が入る → A() を呼ぶ
③ A() の1行目 this(2) で A(int a) を呼ぶ
④ A(int a)：「2」を表示
⑤ A() に戻る：「1」を表示
⑥ B(int b) に戻る：「4」を表示
⑦ B() に戻る：「3」を表示
そのため、「2143」と表示されます。
this() を書いたコンストラクタ（B() と A()）には、自動の super(); は入りません。`
},
{
    id: 66,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次のプログラムの空欄に入るコードとして、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. public class Sample {
2.     public static void print(Integer num) {
3.         System.out.println(num);
4.     }
5. }`},
        { 
            type: "code", 
            value: `1. import java.util.List;
2.
3. public class Main {
4.     public static void main(String[] args) {
5.         List<Integer> list = List.of(1, 2, 3);
6.         list.forEach(□□□□□□);
7.     }
8. }`},
    ],
    options: `A. new Sample()::print
B. Sample.print
C. Sample:print
D. Sample::print
`,
    answer: "D",
    explanation: `メソッド参照は「クラス名::メソッド名」と、コロン2つで書きます。
forEach は、リストの要素を1つずつ受け取る Consumer を引数にとります。Sample::print は「受け取った値を Sample.print に渡す」という意味になり、num -> Sample.print(num) と同じです。

A：× print は static メソッドなので、インスタンスを作って new Sample()::print と書くことはできません。
B：× Sample.print は、メソッド参照の書き方ではありません。
C：× コロンが1つしかありません。`
},
{
    id: 67,
    chapter: "ch12",
    contents:[
        { type: "text", value: "Javaの開発環境のセットアップに関する説明として、正しいものを選びなさい。(1つ選択)" },
    ],
    options: `A. JDKをインストールするときには、特定のオペレーティングシステム用のJava開発環境をセットアップする
B. Javaの開発環境はデフォルトですべてのOS用に設定されている
C. Javaの開発環境をセットアップするにはJREが必要である
D. JDKよりも前にIDE(統合開発環境)をインストールすれば、Javaの開発環境はセットアップされる
`,
    answer: "A",
    explanation: `A：○ JDK は、Windows 用、Mac 用、Linux 用など、OS ごとに用意されています。自分の OS に合ったものをインストールします。
B：× OS ごとに別のものをインストールする必要があります。
C：× JDK には、プログラムを動かす仕組みも含まれているので、JRE を別にインストールする必要はありません。
D：× IDE はプログラムを書くための道具です。Java の開発には JDK が必要です。`
},
{
    id: 68,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次のクラスのコンストラクタのうち、コンパイル可能で、かつarrayフィールドに参照をセットすることができるものを選びなさい。(2つ選択)" },
        { 
            type: "code", 
            value: `1. public class Sample {
2.     private String[] array;
3. }`},
    ],
    options: `A. public Sample(String[] array) { this.array = array; }
B. public Sample(String... array) { array = array; }
C. public Sample(String str) { this.array = str; }
D. public Sample(String[] array) { array = array; }
E. public Sample(String... array) { this.array = array; }
F. public Sample(Object[] array) { this.array = array; }
`,
    answer: "A、E",
    explanation: `A：○ 引数の String[] を、this.array（フィールド）に入れています。
E：○ String... は可変長引数です。メソッドの中では String[] として扱えるので、フィールドに入れられます。

B・D：△ コンパイルはできますが、array = array は「引数の array に、引数の array を入れる」だけです。フィールドには何も入りません。フィールドを指すには this. が必要です。
C：× String を String[] に入れることはできないので、コンパイルエラーになります。
F：× Object[] を String[] に入れるには、キャストが必要です。コンパイルエラーになります。`
},
{
    id: 69,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  import java.util.List;
2.  import java.util.ArrayList;
3.
4.  public class Main {
5.      public static void main(String[] args) {
6.          List<String> list = new ArrayList<>();
7.          try {
8.              while (true) {
9.                  list.add("hello");
10.             }
11.         } catch (RuntimeException e) {
12.             System.out.println("A");
13.         } catch (Exception e) {
14.             System.out.println("B");
15.         }
16.         System.out.println("C");
17.     }
18. }`},
    ],
    options: `A. Aが表示される
B. Bが表示される
C. Cが表示される
D. 実行時に例外がスローされる
E. throws宣言がないためコンパイルエラーが発生する
`,
    answer: "D",
    explanation: `while (true) で、リストに要素を追加し続けます。いつかメモリが足りなくなり、OutOfMemoryError が発生します。

OutOfMemoryError は Error のサブクラスで、Exception の仲間ではありません。
そのため、catch (RuntimeException e) にも catch (Exception e) にも捕まらず、プログラムは異常終了します。「C」も表示されません。

E：× Error は、throws 宣言をしなくてもコンパイルできます。`
},
{
    id: 70,
    chapter: "ch12",
    contents:[
        { type: "text", value: "com.exampleモジュール内にあるmainメソッドを持つcom.sample.Mainクラスを、コマンドラインから実行するためのコマンドとして、正しいものを選びなさい。(1つ選択)" },
    ],
    options: `A. java -classpath com.example.jar -m com.example/com.sample.Main
B. java -classpath com.example.jar com.sample.Main
C. java --module-path mods -m com.example/com.sample.Main
D. java --module-path mods com.example/com.sample.Main
`,
    answer: "C",
    explanation: `モジュールのプログラムを実行するときは、次のように書きます。
java --module-path モジュールの場所 -m モジュール名/クラスの完全修飾名

--module-path（または -p）：モジュールが置いてあるフォルダを指定します。
-m（または --module）：実行するモジュールと、main メソッドを持つクラスを指定します。

A・B：× -classpath は、モジュールではなく、普通のクラスを探す場所の指定です。
D：× -m がないので、どのモジュールを実行するのか伝わりません。`
},
{
    id: 71,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次のプログラムを実行し、「abcd」と表示したい。「// insert code here」に入るコードとして、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  public class Sample {
2.      public static void main(String[] args) {
3.          String[][] array = new String[2][2];
4.          array[0][0] = "a";
5.          array[0][1] = "b";
6.          array[1][0] = "c";
7.          array[1][1] = "d";
8.          // insert code here
9.      }
10. }`},
    ],
    options: [
        { label: "A", code: `for (int i = 1; i < 2; i++) {
    for (int j = 1; j < 2; j++) {
        System.out.print(array[i][j]);
    }
}` },
        { label: "B", code: `for (int i = 0; i < 2; ++i) {
    for (int j = 0; j < i; ++j) {
        System.out.print(array[i][j]);
    }
}` },
        { label: "C", code: `for (String[] a : array) {
    for (String b : a) {
        System.out.print(b);
    }
}` },
        { label: "D", code: `for (int i = 0; i < 2;) {
    for (int j = 0; j < 2;) {
        System.out.print(array[i][j]);
        i++;
        j++;
    }
}` },
    ],
    answer: "C",
    explanation: `C：○ 外側の拡張 for 文で、{"a", "b"} と {"c", "d"} の配列を順番に取り出します。内側で、その中の文字列を1つずつ表示するので、「abcd」と表示されます。

A：× i も j も 1 から始まるので、array[1][1] の「d」だけが表示されます。
B：× 内側の条件が j < i です。i = 0 のときは何も表示されず、i = 1 のときは j = 0 だけなので、「c」だけが表示されます。
D：× 内側のループで、i と j を同時に増やしています。array[0][0] と array[1][1] だけが表示されるので、「ad」になります。`
},
{
    id: 72,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次のプログラムを実行して「AXCD」と表示したい。空欄に入るコードとして、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. public class Sample {
2.     public static void main(String[] args) {
3.         StringBuilder sb = new StringBuilder("ABCD");
4.         □□□□□□□
5.         System.out.println(sb);
6.     }
7. }`},
    ],
    options: `A. sb.replace(sb.indexOf("B"), sb.indexOf("B"), "X");
B. sb.replace(sb.indexOf("B"), sb.indexOf("C"), "X");
C. sb.replace(sb.indexOf("A"), sb.indexOf("B"), "X");
D. sb.replace(sb.indexOf("A"), sb.indexOf("C"), "X");
`,
    answer: "B",
    explanation: `replace(開始, 終了, 文字列) は、「開始」から「終了の1つ手前」までを、指定した文字列に置き換えます（終了の位置は含みません）。
位置は A=0、B=1、C=2、D=3 です。

A：× replace(1, 1, "X")：置き換える範囲が空なので、位置1に X が挿入され「AXBCD」になります。
B：○ replace(1, 2, "X")：位置1の B だけが X に置き換わり「AXCD」になります。
C：× replace(0, 1, "X")：A が X に置き換わり「XBCD」になります。
D：× replace(0, 2, "X")：AB が X に置き換わり「XCD」になります。`
},
{
    id: 73,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次のプログラムを実行し、「135」と表示したい。4行目の空欄に入るコードとして、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. public class Main {
2.     public static void main(String[] args) {
3.         int[] array = {1, 2, 3, 4, 5};
4.         for (□□□□□□□) {
5.             System.out.print(array[i]);
6.         }
7.     }
8. }`},
    ],
    options: `A. int i = 0; i < 4; i++
B. int i = 0; i < 5; i += 2
C. int i = 1; i < 5; i++
D. int i = 1; i < 5; i += 2
`,
    answer: "B",
    explanation: `「1」「3」「5」は、配列の位置0、2、4 にあります。
そのため、i を 0 から始めて、2ずつ増やし、5 未満の間くり返せばよいです。

A：× 位置0〜3 を表示するので「1234」になります。
B：○ 位置0、2、4 を表示するので「135」になります。
C：× 位置1〜4 を表示するので「2345」になります。
D：× 位置1、3 を表示するので「24」になります。`
},
{
    id: 74,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  public class Main {
2.      public static void main(String[] args) {
3.          String[] str = new String[2];
4.          int i = 0;
5.          for (String s : str) {
6.              str[i].concat("e" + i);
7.              i++;
8.          }
9.          for (i = 0; i < str.length; i++) {
10.             System.out.println(str[i]);
11.         }
12.     }
13. }`},
    ],
    options: [
        { label: "A", code: `e0
e1` },
        { label: "B", code: `nulle0
nulle1` },
        { label: "C", code: `null
null` },
        { label: "D", text: "実行時に例外がスローされる" },
    ],
    answer: "D",
    explanation: `new String[2] で作った配列は、要素の初期値が null です（まだ文字列が入っていない状態）。
6行目で str[0].concat(...) を呼ぶと、null に対してメソッドを呼んだことになり、NullPointerException がスローされます。

もし null でなかったとしても、String はイミュータブル（変更できない）なので、concat の結果を代入しない限り、str[i] の中身は変わりません。`
},
{
    id: 75,
    chapter: "ch12",
    contents:[
        { type: "text", value: "モジュールaはモジュールbに依存し、ほかのすべてのモジュールからcom.sampleパッケージにアクセスできるようにしたい。この要件に合致するmodule-info.javaを選びなさい。(1つ選択)" },
    ],
    options: [
        { label: "A", code: `module a {
    requires com.sample;
    exports b;
}` },
        { label: "B", code: `module a {
    requires b;
    exports com.sample;
}` },
        { label: "C", code: `module a {
    import com.sample;
    export b;
}` },
        { label: "D", code: `module a {
    import b;
    export com.sample;
}` },
    ],
    answer: "B",
    explanation: `requires の後ろには、依存する（使わせてもらう）「モジュール名」を書きます。→ requires b;
exports の後ろには、ほかのモジュールに公開する「パッケージ名」を書きます。→ exports com.sample;

A：× requires と exports の対象が逆です。
C・D：× module-info.java では import や export（s なし）は使いません。正しくは requires と exports です。`
},
{
    id: 76,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  public class Main {
2.      public void test(Object[] array) {
3.          System.out.println("A");
4.      }
5.      public void test(String[] array) {
6.          System.out.println("B");
7.      }
8.      public void test(Object obj) {
9.          System.out.println("C");
10.     }
11.     public static void main(String[] args) {
12.         new Main().test(args);
13.     }
14. }`},
    ],
    options: `A. Aが表示される
B. Bが表示される
C. Cが表示される
D. 実行時に例外がスローされる
E. コンパイルエラーが発生する
`,
    answer: "B",
    explanation: `args は String[] 型です。
String[] は、Object[] としても、Object としても受け取れるので、3つの test メソッドのどれでも呼び出せます。
オーバーロードでは、型が「いちばんぴったり合う」メソッドが選ばれます。
String[] にぴったり合うのは test(String[] array) なので、「B」が表示されます。`
},
{
    id: 77,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. public class Sample {
2.     public void test() {
3.         System.out.println("Sample#test()");
4.     }
5. }`},
        { 
            type: "code", 
            value: `1. public class SubSample extends Sample {
2.     @Override
3.     public void test() {
4.         System.out.println("SubSample#test()");
5.     }
6. }`},
        { 
            type: "code", 
            value: `1. public class Main {
2.     public static void main(String[] args) {
3.         SubSample sub = new SubSample();
4.         Sample sample = new SubSample();
5.         sub = sample;
6.         sub.test();
7.         sample.test();
8.     }
9. }`},
    ],
    options: [
        { label: "A", code: `Sample#test()
Sample#test()` },
        { label: "B", code: `SubSample#test()
SubSample#test()` },
        { label: "C", code: `SubSample#test()
Sample#test()` },
        { label: "D", text: "実行時に例外がスローされる" },
        { label: "E", text: "コンパイルエラーが発生する" },
    ],
    answer: "E",
    explanation: `5行目の sub = sample; が問題です。
sample の変数の型は Sample（親クラス）です。中身が実際には SubSample でも、コンパイラは変数の型しか見ません。
親クラス型の変数を、子クラス型の変数に入れるには、(SubSample) sample のようにキャストが必要です。
キャストがないので、5行目でコンパイルエラーになります。

子 → 親の代入はそのままでOK、親 → 子の代入はキャストが必要、と覚えましょう。`
},
{
    id: 78,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次のプログラムを確認し、Bクラスの空欄に入るコードとして正しいものを選びなさい。(2つ選択)" },
        { 
            type: "code", 
            value: `1. package ex78.a;
2.
3. public abstract class A {
4.     protected abstract void test();
5. }`},
        { 
            type: "code", 
            value: `1. package ex78.b;
2.
3. import ex78.a.A;
4.
5. public class B extends A {
6.     □□□□□□□
7. }`},
    ],
    options: `A. public void test() {}
B. private void test() {}
C. void test() {}
D. protected void test() {}
`,
    answer: "A、D",
    explanation: `B は A の抽象メソッド test() をオーバーライドしなければいけません。
オーバーライドするときは、アクセス修飾子を親と同じか、より広くする必要があります。
広さの順番：public > protected > なし（パッケージプライベート） > private

A：○ public は protected より広いのでOKです。
D：○ protected は同じなのでOKです。
B・C：× private や修飾子なしは protected より狭いので、コンパイルエラーになります。`
},
{
    id: 79,
    chapter: "ch12",
    contents:[
        { type: "text", value: "モジュールに関する説明として、正しいものを選びなさい。(2つ選択)" },
    ],
    options: `A. コマンドラインからモジュールのエクスポートを設定することはできるが望ましくない
B. Javaの基本APIはjava.baseモジュールにある
C. JDKがモジュール化されたため、APIは非推奨になった
D. モジュール式JDKで実行するには、アプリケーションをモジュールとして構造化する必要がある
`,
    answer: "A、B",
    explanation: `A：○ --add-exports オプションを使えば、コマンドラインからエクスポートを追加できます。ただし、module-info.java で決めた公開範囲を無視することになるため、望ましくありません。
B：○ String や Object などの基本的なクラスは java.base モジュールにあります。java.base は、requires を書かなくても自動で読み込まれます。
C：× モジュール化されても、API が非推奨になったわけではありません。
D：× モジュールにしていない従来のプログラムも、クラスパスを使えばそのまま実行できます。`
},
{
    id: 80,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  public class Test {
2.      public static void main(String[] args) {
3.          String[][] array = new String[2][];
4.          array[0] = new String[2];
5.          array[1] = new String[5];
6.          int i = 97;
7.          for (int a = 0; a < array.length; a++) {
8.              for (int b = 0; b < array.length; b++) {
9.                  array[a][b] = "" + i;
10.                 i++;
11.             }
12.         }
13.         for (String[] tmp : array) {
14.             for (String s : tmp) {
15.                 System.out.print(s + " ");
16.             }
17.             System.out.println();
18.         }
19.     }
20. }`},
    ],
    options: [
        { label: "A", code: `97 98
99 100 null null null` },
        { label: "B", code: `97 98
99 100 101 102 103` },
        { label: "C", text: "コンパイルエラーが発生する" },
        { label: "D", text: "実行時にNullPointerExceptionがスローされる" },
        { label: "E", text: "実行時にArrayIndexOutOfBoundsExceptionがスローされる" },
    ],
    answer: "A",
    explanation: `array[0] は長さ2、array[1] は長さ5の配列です。

8行目の内側のループの条件に注目します。b < array[a].length ではなく b < array.length になっています。
array.length は外側の配列の長さなので 2 です。そのため、内側のループは、どちらの配列でも b = 0、1 の2回しか回りません。
array[0][0]="97"、array[0][1]="98"、array[1][0]="99"、array[1][1]="100" が入り、array[1][2]〜[4] は null のままです。

表示するときは、配列の長さ通りに全部表示するので、
1行目は「97 98」、2行目は「99 100 null null null」になります。
null を + でつなぐと、文字列の「null」として表示されるので、例外にはなりません。`
},
);

