
window.questionsData = window.questionsData || [];
window.questionsData.push(
{
    id: 1,
    chapter: "ch11",
    contents:[
        { type: "text", value: "次の説明のうち、正しいものを選びなさい。(2つ選択)" },
        
],
    options: `A. モジュールの設定は、module-info.javaに記述する
B. モジュールの設定では、どのパッケージを公開するかを記述する
C. モジュールの設定では、どのパッケージを利用するかを記述する
D. module-info.javaがなくてもモジュール化することができる
`,
    answer: "A、B",
    explanation: ""
},
{
    id: 2,
    chapter: "ch11",
    contents:[
        { type: "text", value: "libディレクトリにあるsampleモジュールを実行したい。エントリーポイントを持つクラスをcom.test. Helloとしたときのコマンドとして正しいものを選びなさい。(1つ選択)" },
        ],
    options: `A. java -m lib sample/com.test.Hello
B. java --module-path lib com.test.Hello
C. java --module-path lib -m com.test.Hello
D. java --module-path lib -m sample/com.test.Hello
E. java --module-path lib -m sample.com.test.Hello
`,
    answer: "D",
    explanation: ""
},
{
    id: 3,
    chapter: "ch11",
    contents:[
        { type: "text", value: "sampleモジュールは、com.sampleパッケージを公開し、testモジュールを利用している。module-info.javaの設定として、正しいものを選びなさい。(1つ選択)" },
        ],
    options: `A. module sample {
　     exports test;
　     requires com.sample;
　 }
B. module sample {
　     export com.sample;
　     require test;
　 }
C. module sample {
　     requires com.sample;
　     requires test;
　 }
D. module sample {
　     exports com.sample;
　     requires test;
　 }
`,
    answer: "D",
    explanation: ""
},
{
    id: 4,
    chapter: "ch11",
    contents:[
        { type: "text", value: "次の図のようなモジュールグラフがあったとき、module1 でmodule3 に属するパッケージのクラスを利用する際の説明として正しいものを選びなさい。(1つ選択)" },
        { type: "image",
          src: "Image/11_4.png",
          alt: "11章4問目の図"
        },
    ],
    options: `A. module1@module-info.javaで、module2をrequiresで宣言する
B. module1@module-info.javaで、module2をrequires transitiveで宣言する
C. module2のmodule-info.javaで、module3をrequiresで宣言する
D. module2@module-info.javaで、module3をrequires transitiveで宣言する
`,
    answer: "D",
    explanation: ""
},
{
    id: 5,
    chapter: "ch11",
    contents:[
        { type: "text", value: "あらかじめ用意されているモジュールのうち、標準で組み込まれるモジュールとして、正しいものを選びなさい。(1つ選択)" },

    ],
    options: `A. java.lang
B. java.base
C. jdk.lang
D. jdk.base
`,
    answer: "B",
    explanation: ""
},
{
    id: 6,
    chapter: "ch11",
    contents:[
        { type: "text", value: "module-info.javaに設定したモジュールの設定情報を調べるためのコマンドとして、正しいものを選びなさい。(2つ選択)" },
    ],
    options: `A. java --describe-module
B. jdeps --list-deps
C. jmod describe
D. java --show-module-resolution
`,
    answer: "A、C",
    explanation: ""
},
{
    id: 7,
    chapter: "ch11",
    contents:[
        { type: "text", value: "module-info.javaでexportsされていないパッケージを、一時的に利用してコンパイルしたい。javacコマンドのオプションとして正しいものを選びなさい。(1つ選択)" },
    ],
    options: `A. --add-exports
B. --exports
C. -add
D. --add-modules
`,
    answer: "A",
    explanation: ""
},
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
    explanation: ""
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
    explanation: ""
},
{
    id: 4,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. import java.util. function. Supplier;
2.
3. public class Sample {
4.     void sample() {
5.         int i = 0;
6.         Supplier<Integer> foo = () -> 1;
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
    explanation: ""
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
    explanation: ""
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
5.          if (Character. isAlphabetic(str.charAt(index))) {
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
    ],
    options: `A. 「hoge」と表示される
B. 「hoge456」と表示される
C. 「456test」と表示される
D. 「hoge456test」と表示される
E. 「hoge456tes」と表示される
`,
    answer: "E",
    explanation: ""
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
6.         List<String> list Arrays.asList(new String[]{"a", "b", "c"]);
7.         list. forEach(x-> (System.out.println(x);});
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
　 java -cp build ex15. Main
B. javac -d build ex15/Sample.java ex15/Main.java
　 java -cp build ex15. Main
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
},);

