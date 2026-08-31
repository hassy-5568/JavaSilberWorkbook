
window.questionsData = window.questionsData || [];
window.questionsData.push(
{
    id: 1,
    chapter: "ch10",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  public class Main {
2.      public static void main(String[] args) {
3.          try {
4.              int[] array = { };
5.              array[0] = 10;
6.              System.out.println("finish");
7.          } catch (ArrayIndexOutOfBoundsException e) {
8.              System.out.println("error");
9.          }
10.     }
11. }
`},
],
    options: `A. 「finish」と表示される
B. 「error」と表示される
C. 「finish」「error」と表示される
D. 「error」「finish」 と表示される
E. コンパイルエラーが発生する
F. 実行時に例外がスローされる
`,
    answer: "B",
    explanation: ""
},
{
    id: 2,
    chapter: "ch10",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。なお、実行時には起動パラメータを何も渡さないこととする。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  public class Main {
2.      public static void main(String[] args) {
3.          try {
4.              if (args.length == 0) {
5.                  System.out.println("A");
6.              }
7.          } catch (NullPointerException e) {
8.              System.out.println("B");
9.          } finally {
10.             System.out.println("C");
11.         }
12.     }
13. }
`},
],
    options: `A. 「A」「B」「C」と表示される
B. 「A」「C」と表示される
C. 「B」「C」と表示される
D. 「A」「B」と表示される
E. コンパイルエラーが発生する
F. 実行時に例外がスローされる
`,
    answer: "B",
    explanation: ""
},
{
    id: 3,
    chapter: "ch10",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. public class SampleException extends Exception { }
`},
{ 
            type: "code", 
            value: `1. public class SubSampleException extends SampleException { }
`},
{ 
            type: "code", 
            value: `1.  public class Main {
2.      public static void main(String[] args) {
3.          try {
4.              sample();
5.              sub();
6.          } catch (SampleException e) {
7.              System.out.println("A");
8.          } catch (SubSampleException e) {
9.              System.out.println("B");
10.         }
11.     }
12.
13.     private static void sample() throws SampleException {
14.         throw new SampleException();
15.     }
16.
17.     private static void sub() throws SubSampleException {
18.         throw new SubSampleException();
19.     }
20.
21. }
`},

],
    options: `A. 「A」と表示される
B. 「B」と表示される
C. 「B」「A」と表示される
D. 何も表示されない
E. コンパイルエラーが発生する
F. 実行時に例外がスローされる
`,
    answer: "E",
    explanation: ""
},
{
    id: 4,
    chapter: "ch10",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  public class Main {
2.      public static void main(String[] args) {
3.          try {
4.              Object obj = null;
5.              System.out.println(obj.toString());
6.              System.out.println("A");
7.          } finally {
8.              System.out.println("B");
9.          } catch (NullPointerException e) {
10.             System.out.println("C");
11.         }
12.     }
13. }
`},
],
    options: `A. 「B」「C」と表示される
B. 「C」「B」と表示される
C. 「A」「C」と表示される
D. コンパイルエラーが発生する
E. 実行時に例外がスローされる
`,
    answer: "D",
    explanation: ""
},
{
    id: 5,
    chapter: "ch10",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  public class Main {
2.      public static void main(String[] args) {
3.          System.out.println(test(null));
4.      }
5.      private static String test(Object obj) {
6.          try {
7.              System.out.println(obj.toString());
8.          } catch (NullPointerException e) {
9.              return "A";
10.         } finally {
11.             System.out.println("B");
12.         }
13.         return "C";
14.     }
15. }
`},
],
    options: `A. 「A」と表示される
B. 「A」「B」と表示される
C. 「B」「A」と表示される
D. 「C」と表示される
E. コンパイルエラーが発生する
F. 実行時に例外がスローされる
`,
    answer: "C",
    explanation: ""
},
{
    id: 6,
    chapter: "ch10",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  public class Main {
2.      public static void main(String[] args) {
3.          int result = sample();
4.          System.out.println(result);
5.      }
6.      private static int sample() {
7.          try {
8.              throw new RuntimeException();
9.          } catch (RuntimeException e) {
10.             return 10;
11.         } finally {
12.             return 20;
13.         }
14.     }
15. } 
`},
],
    options: `A. 10が表示される
B. 20が表示される
C. 30が表示される
D. コンパイルエラーが発生する
E. 実行時に例外がスローされる
`,
    answer: "B",
    explanation: ""
},
{
    id: 7,
    chapter: "ch10",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  public class Main {
2.      public static void main(String[] args) {
3.          int result = sample();
4.          System.out.println(result);
5.      }
6.      private static int sample() {
7.          int val = 0;
8.          try {
9.              String[ ] array = {"A", "B", "C"};
10.             System.out.println(array[3]);
11.         } catch (RuntimeException e) {
12.             val = 10;
13.             return val;
14.         } finally {
15.             val += 10;
16.         }
17.         return val;
18.     }
19. }
`},
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
    id: 8,
    chapter: "ch10",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  public class Main {
2.      public static void main(String[] args) {
3.          try {
4.              System.out.println("A");
5.          } finally {
6.              System.out.println("B");
7.          } finally {
8.              System.out.println("C");
9.          }
10.     } 
11. }
`},
],
    options: `A. 「A」「B」「C」と表示される
B. 「A」「B」と表示される
C. 「A」「C」と表示される
D. コンパイルエラーが発生する
E. 実行時に例外がスローされる
`,
    answer: "D",
    explanation: ""
},
{
    id: 9,
    chapter: "ch10",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  public class Main {
2.      public static void main(String[] args) {
3.          try {
4.              try {
5.                  String[] array = {"A", "B", "C"};
6.                  System.out.println(array[3]);
7.              } catch (ArrayIndexOutOfBoundsException e) {
8.                  System.out.println("D");
9.              } finally {
10.                 System.out.println("E");
11.             }
12.         } catch (ArrayIndexOutOfBoundsException e) {
13.             System.out.println("F");
14.         } finally {
15.             System.out.println("G");
16.         }
17.     }
18. }
`},
],
    options: `A. 「C」「E」「G」と表示される
B. 「D」「E」「G」と表示される
C. 「E」「F」「G」と表示される
D. 「D」「E」と表示される
E. 「F」「G」と表示される
F. コンパイルエラーが発生する
G. 実行時に例外がスローされる
`,
    answer: "B",
    explanation: ""
},
{
    id: 10,
    chapter: "ch10",
    contents:[
        { type: "text", value: "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  import java.io.FileInputStream;
2.  import java.io.FileNotFoundException;
3.
4.  public class Sample {
5.      public static void main(String[] args) {
6.          try (FileInputStream is new FileInputStream("sample.txt")) {
7.              throw new FileNotFoundException();
8.          } catch (Exception e) {
9.              System.out.println("A");
10.         } finally {
11.             if (is != null) {
12.                 is.close();
13.             }
14.             System.out.println("B");
15.         }
16.     }
17. }
`},
],
    options: `A. 「A」と表示される
B. 「B」と表示される
C. 「A」「B」と表示される
D. 「B」「A」と表示される
E. コンパイルエラーが発生する
`,
    answer: "E",
    explanation: ""
},
{
    id: 11,
    chapter: "ch10",
    contents:[
        { type: "text", value: "次のSampleクラスの2行目の空欄に入るコードとして、正しいものを選びなさい。(2つ選択)" },
        { 
            type: "code", 
            value: `1. public class SampleException extends Exception { }
`},
{ 
            type: "code", 
            value: `1. public class TestException extends RuntimeException { }

`},
{ 
            type: "code", 
            value: `1.  public class Sample {
2.      public void hello(String name) □□□□□□□ {
3.          if (name == null) {
4.              throw new SampleException();
5.          }
6.          if ("".equals(name)){
7.              throw new TestException();
8.          }
9.          // do something
10.     }
11. }
`},

],
    options: `A. throws SampleException, TestException
B. throws SampleException; TestException
C. throws TestException
D. throws SampleException
E. 何も記述しなくてもよい
`,
    answer: "A、D",
    explanation: ""
},
{
    id: 12,
    chapter: "ch10",
    contents:[
        { type: "text", value: "エラーに関する説明として、誤っているものを選びなさい。(1つ選択)" },
        ],
    options: `A. エラーは、プログラムの実行環境に例外が発生したときにスローされる
B. エラーは、Errorクラスを継承しなければいけない
C. エラーはthrows句に宣言する必要はない
D. エラーは例外処理を記述できない
`,
    answer: "D",
    explanation: ""
},
{
    id: 13,
    chapter: "ch10",
    contents:[
        { type: "text", value: "次のプログラムを確認してください。" },
        { 
            type: "code", 
            value: `1. public class Main {
2.     public static void main(String[] args) {
3.         System.out.println(args[0].length());
4.     }
5. }
`},
{ type: "text", value: "このプログラムを次のコマンドで実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
{ 
            type: "code", 
            value: `> java Main
`},
],
    options: `A. 「null」と表示される
B. 「0」と表示される
C. ArrayIndexOutOfBoundsExceptionが発生する
D. NullPointerExceptionが発生する
`,
    answer: "C",
    explanation: ""
},
{
    id: 14,
    chapter: "ch10",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときに発生する例外の種類として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. import java.util.ArrayList;
2. import java.util.List;
3.
4. public class Main {
5.     public static void main(String[] args) {
6.         List<String> list = new ArrayList<>();
7.         list.get(0);
8.     }
9. }
`},
],
    options: `A. IndexOutOfBoundsException
B. ArrayIndexOutOfBoundsException
C. StringIndexOutOfBoundsException
D. ListindexOutOfBoundsException
`,
    answer: "A",
    explanation: ""
},
{
    id: 15,
    chapter: "ch10",
    contents:[
        { type: "text", value: "次のプログラムを確認してください。" },
        { 
            type: "code", 
            value: `1. public class A {
2.     private int num;
3.     public A(int num) {
4.         this.num = num;
5.     }
6.     public boolean equals(Object obj) {
7.         A a = (A) obj;
8.         return this.num == a.num;
9.     }
10. }
`},
{ 
            type: "code", 
            value: `1. public class B {
2.     private int num;
3.     public B(int num) {
4.         this.num = num;
5.     }
6.     public boolean equals(Object obj) {
7.         B b = (B) obj;
8.         return this.num == b.num;
9.     }
10. }
`},
{ type: "text", value: "これらのクラスを利用する以下のプログラムを、コンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. public class Main {
2.     public static void main(String[] args) {
3.         A a = new A(10);
4.         B b = new B(10);
5.         System.out.println(a.equals(b));
6.     }
7. }
`},
],
    options: `A. trueが表示される
B. falseが表示される
C. コンパイルエラーが発生する
D. 実行時に例外がスローされる
`,
    answer: "D",
    explanation: ""
},
{
    id: 16,
    chapter: "ch10",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. public class Main {
2.     public static void main(String[] args) {
3.         String str = null;
4.         if (str.equals("")) {
5.             System.out.println("blank");
6.         } else {
7.             System.out.println("null");
8.         }
9.     }
10. }
`},

],
    options: `A. 「blank」と表示される
B. 「null」と表示される
C. IllegalArgumentExceptionが発生する
D. NullPointerExceptionが発生する
`,
    answer: "D",
    explanation: ""
},
{
    id: 17,
    chapter: "ch10",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. public class Main {
2.     public static void main(String[] args) {
3.         main(args);
4.     }
5. }
`},

],
    options: `A. 何も表示されない
B. StackOverflowErrorが発生する
C. IllegalStateExceptionが発生する
D. Exceptionininitializer Errorが発生する
`,
    answer: "B",
    explanation: ""
});
