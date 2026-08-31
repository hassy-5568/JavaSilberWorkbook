
window.questionsData = window.questionsData || [];
window.questionsData.push(
{
    id: 1,
    chapter: "ch08",
    contents:[
        { type: "text", value: "次のプログラムを確認し、Mainクラスの空欄に入るコードとして、正しいものを選びなさい。(2つ選択)" },
        { 
            type: "code", 
            value: `1. interface Algorithm {
2.     void perform(String name);
3. }
`},
{ 
            type: "code", 
            value: `1.  class Service {
2.      private Algorithm logic;
3.      public void setLogic(Algorithm logic) {
4.          this.logic = logic;
5.      }
6.      public void doProcess (String name) {
7.          System.out.println("start");
8.          this.logic.perform(name);
9.          System.out.println("end");
10.     }
11. }
`},
{ 
            type: "code", 
            value: `1. public class Main {
2.     public static void main(String[] args) {
3.         Algorithm algorithm = □□□□□□□ -> {
4.             System.out.println("hello," + name);
5.         }
6.     Service s = new Service();
7.     s.setLogic(algorithm);
8.     s.doProcess("Lambda");
9.     }
10. }
`},
],
    options: `A. ()
B. (name)
C. (String)
D. (String name)
`,
    answer: "B、D",
    explanation: `ラムダ式の問題。
(引数) -> { 処理内容 }。メソッド名を定義しなくても、引数を渡して処理ができる書き方。`,
},
{
        id: 2,
        chapter: "ch01",
        text: "次のうち、パッケージ宣言が正しく記述されているコードを選びなさい。(1つ選択)",
        code: "",
        options: [
            {
                label: "A",
                code: `import java.io.*;
package aaa;
public class Sample { }`
            },
            {
                label: "B",
                code: `package aaa;
import java.io.*;
public class Sample { }`
            },
            {
                label: "C",
                code: `import java.io*;
package aaa {
  public class Sample { }
}`
            },
            {
                label: "D",
                code: `import java.io*;
package aaa {
  public class Sample { }
}`
            }
        ],
        answer: "B",
        explanation: "パッケージ宣言は必ずソースコードの先頭行に記述する。（コメントは可）"
    },
{
    id: 2,
    chapter: "ch08",
    contents:[
        { type: "text", value: "次のプログラムの 「// insert code here」 に入るコードとして、誤っているものを選びなさい。(2つ選択)" },
        { 
            type: "code", 
            value: `1. public class Main {
2.     public static void main(String[] args) {
3.         // insert code here
4.         System.out.println(f.test("Lambda"));
5.     }
6.     private static interface Function {
7.         String test(String name);
8.     }
9. }
`},
],
options: [
            {
                label: "A",
                code: `Function f = (name) -> {
    return "hello, " + name;
};`
            },
            {
                label: "B",
                code: `Function f = (name) -> {
    "hello, " + name;
};`
            },
            {
                label: "C",
                code: `iFunction f = (name) -> return "hello, " + name;`
            },
            {
                label: "D",
                code: `Function f = (name) -> "hello, " + name;`
            },
            {
                label: "E",
                code: `Function f = name -> {
    return "hello, " + name;
};`
            }
        ],
    answer: "B、C",
    explanation: `ラムダ式。
(引数) -> { 処理内容 }。
また、{ }を省略して記述する場合は、returnも省略できる。ラムダ式の処理が1つしかなく、何らかの戻り値を戻す場合は、returnキーワードがあると、逆にコンパイルエラーになる。
今回は、変数fに値を返す必要がある`,
},
{
    id: 3,
    chapter: "ch08",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  public class Main {
2.      public static void main(String[] args) {
3.          String val = "A";
4.          Function f = (val) -> {
5.              System.out.println(val);
6.          };
7.          f.test("B");
8.      }
9. }
10. interface Function {
11.     void test(String val);
12. }
`},
],
    options: `A. Aが表示される
B. Bが表示される
C. コンパイルエラーが発生する
D. 実行時に例外がスローされる
`,
    answer: "C",
    explanation: `String val = "A";で既に定義されている変数を、同じスコープで使うことはできない。同じスコープ内で定義するラムダ式の引数名（4行目の (val) -> ...）として再使用することはできません。
また、ラムダ式は、未完成の定義が「1つだけ」存在するインターフェースに限られる。`
},
{
    id: 4,
    chapter: "ch08",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  public class Sample {
2.      public static void main(String[] args) {
3.          int cnt = 0;
4.          Runnable r = ( ) -> {
5.              for (cnt = 0; cnt < 10; cnt++) {
6.                  System.out.println(cnt++);
7.              }
8.          };
9.          new Thread(r).start();
10.     }
11. }
`},
],
    options: `A. 0123456789が表示される
B. 02468が表示される
C. 13579が表示される
D. コンパイルエラーが発生する
E. 実行時に例外がスローされる
`,
    answer: "D",
    explanation: `ラムダ式の中で使う変数は、final及び、finalとみなせる変数しか使えない。今回はfor文の中で、cntが再代入されるため、コンパイルエラー。for文の中で定義している場合は可能。`,
},
{
    id: 5,
    chapter: "ch08",
    contents:[
        { type: "text", value: "次のプログラムを実行し、「ok」と表示したい。11行目の空欄に入るコードとして、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  import java.util.Arrays;
2.  import java.util.List;
3.  import java.util.function.*;
4.  
5.  public class Main {
6.      public static void main(String[] args) {
7.          List<Sample> list = Arrays.asList(
8.                              new Sample (10),
9.                              new Sample (20),
10.                             new Sample (30));
11.         □□□□□□□□
12.         if (x.test(new Sample(20))){
13.             System.out.println("ok");
14.         }
15.     }
16. }
17. class Sample {
18.     private int num;
19.     public Sample(int num) {
20.         this.num = num;
21.     }
22.     public boolean equals(Object obj) {
23.         if (obj instanceof Sample == false) {
24.             return false;
25.         }
26.         if (this.num == ((Sample) obj).num) {
27.             return true;
28.         }
29.         return false;
30.     }
31. }
`},
],
    options: `A. Predicate<Sample> x = s -> list.contains(s);
B. Supplier<Sample> x = s -> list.contains(s);
C. Consumer<Sample> x = s -> list.contains(s);
D. Function<Sample> x = s -> list.contains(s);
`,
    answer: "A",
    explanation: `ラムダ式の4第インターフェースについての問題。
1. Predicate<T> 値を1つ受取、booleanで返す。
2. Consumer<T> 値を1つ受け取り処理をするが、戻り値はvoid。
3. Supplier<T> 引数はなしで、新しいデータや値を1つ生成する。
4. Function<T, R> T型の値を受取、別のR型に加工、変換する。`,
},
{
    id: 6,
    chapter: "ch08",
    contents:[
        { type: "text", value: "java.util.function パッケージに属する関数型インタフェースで、引数を受け取らず、結果を戻すためのものを選びなさい。(1つ選択)" },
        ],
    options: `A. Consumer
B. Function
C. Supplier
D. Predicate
`,
    answer: "C",
    explanation: ""
},
{
    id: 7,
    chapter: "ch08",
    contents:[
        { type: "text", value: "次のプログラムの空欄に入るコードとして、正しいものを選びなさい。 (1つ選択)" },
        { 
            type: "code", 
            value: `1. import java.util.function.*;
2.
3. public class Main {
4.     public static void main(String[] args) {
5.         □□□□□□<String, Integer> func = (str) -> {
6.             return Integer.parseInt(str);
7.         };
8.         System.out.println(func.apply("100") * 2);
9.     }
10. }
`},
],
    options: `A. Consumer
B. Function
C. Supplier
D. Predicate
`,
    answer: "B",
    explanation: ""
},
{
    id: 8,
    chapter: "ch08",
    contents:[
        { type: "text", value: "java.util.function.Consumerの説明として、正しいものを選びなさい。" },
        ],
    options: `A. 引数を受け取り、その値を使って処理だけ行い、結果は戻さない
B. 引数を受け取らずに、結果だけを戻す
C. 引数を受け取り判定を行う
D. 引数を受け取り、それを使って何らかの処理をし、その処理結果を戻す
`,
    answer: "A",
    explanation: ""
});