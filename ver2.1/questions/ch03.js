
window.questionsData = window.questionsData || [];
window.questionsData.push(
    {
        id: 1,
        chapter: "ch03",
        text: "次のプログラムをコンパイル、実行したときの結果として正しいものを選びなさい。(1つ選択)",
        code: `1. public class Main {
2.     public static void main(String[] args) {
3.         int a = 3;
4.         int b = a += 5;
5.         System.out.println(a + b);
6.     }
7. }`,
        options: `A. 8が表示される
B. 10が表示される
C. 16が表示される
D. コンパイルエラーが発生する
E. 実行時に例外がスローされる`,
        answer: "C",
        explanation: `a += 5が処理され、それがbにも代入されるため、aとbには8が入っている。`
    },
    {
        id: 2,
        chapter: "ch03",
        text: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)",
        code: `1. public class Sample {
2.     public static void main(String[] args) {
3.         int num = -10;
4.         System.out.println(10 * -num);
5.     }
6. }`,
        options: `A. 100が表示される
B. -100が表示される
C. コンパイルエラーが発生する
D. 実行時に例外がスローされる`,
        answer: "A",
        explanation: `仮に- numでも正負が反転する。`
    },
    {
        id: 3,
        chapter: "ch03",
        text: "次の式のうち、コンパイルエラーになるものを選びなさい。(3つ選択)",
        code: ``,
        options: `A. byte a = 0b10000000;
B. short b = 128 + 128;
C. int c = 2 * 3L;
D. float d = 10.0;`,
        answer: "A、C、D",
        explanation: `リキャストの問題。
        選択肢A：byteは、-128～127まで扱える。(8桁まで)0b10000000は128なので、オーバー。
        選択肢B：short 型の範囲は -32,768 ～ 32,767のため、問題なし。
        選択肢C：int型にlong型Ｌを入れようとしているため、不正解。
        選択肢D：小数点を含むリテラルは、自動的にdouble型として扱われるため、floatにするには、10.0fとする必要がある。`
    },
    {
        id: 4,
        chapter: "ch03",
        text: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)",
        code: `1. public class Main {
2.     public static void main(String[] args) {
3.         int a = 10;
4.         int b = a++ + a + a-- - a-- + ++a;
5.         System.out.println(b);
6.     }
7. }`,
        options: `A. 7が表示される
B. 32が表示される
C. 33が表示される
D. 43が表示される
E. コンパイルエラーが発生する
F. 実行時に例外がスローされる`,
        answer: "B",
        explanation: `内容を処理すると、10 + 11 + 11 - 10 + 10、になる。`
    },
    {
        id: 5,
        chapter: "ch03",
        text: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)",
        code: `1. public class Main {
2. public static void main(String[] args) {
3.     boolean a = true;
4.     boolean b = true;
5.     System.out.println(a <= b);
6.     }
7. }`,
        options: `A trueが表示される
B. falseが表示される
C. コンパイルエラーが発生する
D. 実行時に例外がスローされる`,
        answer: "C",
        explanation: `比較演算子のうち、大小の比較演算子は数字以外のものは比べられない。`
    },
    {
        id: 6,
        chapter: "ch03",
        text: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)",
        code: `1. public class Main {
2.     public static void main(String[] args) {
3.         int a = 10;
4.         int b = 10;
5.         if (10 < a && 10 < b) {
6.             a++;
7.         }
8.         System.out.println(a + b);
9.     }
10. }`,
        options: `A. 20が表示される
B. 21が表示される
C. 22が表示される
D. コンパイルエラーが発生する
E. 実行時に例外がスローされる
`,
        answer: "A",
        explanation: ``
    },
    {
        id: 7,
        chapter: "ch03",
        text: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)",
        code: `1. public class Main {
2.     public static void main(String[] args) {
3.     int a = 100, b = 20, c = 30;
4.     System.out.println(a % b * c + a / b);
5.     }
6. }
`,
        options: `A. 5が表示される
B. 35が表示される
C. 90が表示される
D. コンパイルエラーが発生する
E. 実行時に例外がスローされる
`,
        answer: "A",
        explanation: ``
    },
    {
    id: 8,
    chapter: "ch03",
    // 交互に並べられる配列に変更
    contents: [
        { type: "text", value: "次のプログラムを確認してください。" },
        { 
            type: "code", 
            value: `1. public class Sample {
2.     private int num;
3.     public Sample(int num) {
4.         this.num = num;
5.     }
6. }` 
        },
        { type: "text", value: "このクラスを利用する以下のプログラムを、コンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. public class Main {
2.     public static void main(String[] args) {
3.         Sample s1 = new Sample(10);
4.         Sample s2 = s1;
5.         s1 = new Sample(10);
6.         System.out.println(s1 == s2);
7.     }
8. }` 
        }
    ],
    options: `A. trueが表示される
B. falseが表示される
C. コンパイルエラーが発生する
D. 実行時に例外がスローされる`,
    answer: "B",
    explanation: "5行目で新たなインスタンスを作っているため、s1とs2は同じものではなくなった。"
},
{
    id: 9,
    chapter: "ch03",
    // 交互に並べられる配列に変更
    contents: [
        { type: "text", value: "次のプログラムを確認してください。" },
        { 
            type: "code", 
            value: `1.  public class Sample {
2.      private int num;
3.      private String name;
4.      public Sample(int num, String name) {
5.          this.num = num;
6.          this.name = name;
7.      }
8.      public boolean equals(Object obj) {
9.          if (obj == null) {
10.         return false;
11.         }
12.         if (obj instanceof Sample) {
13.             Sample s = (Sample) obj;
14.             return s.num == this.num;
15.         }
16.         return false;
17.     }
18. }
` 
        },
        { type: "text", value: "このクラスを利用する以下のプログラムを、コンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. public class Main {
2.     public static void main(String[] args) {
3.         Sample a = new Sample(10, "a");
4.         Sample b = new Sample(10, "b");
5.         System.out.println(a.equals(b));
6.     }
7. }
` 
        }
    ],
    options: `A. trueが表示される
B. falseが表示される
C. Sampleクラスでコンパイルエラーが発生する
D. Mainクラスでコンパイルエラーが発生する
E. 実行時に例外がスローされる
`,
    answer: "A",
    explanation: `オブジェクト instanceof クラス名（またはインターフェース名）
そのオブジェクトが特定のクラスのインスタンスかどうかを判定するメソッド。一致しない場合、nullの場合はfalseを返す。
この問題では、Sampleクラスかどうかの判定をして、実行時エラーを防いでいる。`
},
{
    id: 10,
    chapter: "ch03",
    contents: [
        { type: "text", value: "次のプログラムを確認してください。" },
        { 
            type: "code", 
            value: `1.  public class Sample {
2.      private int num;
3.      public Sample(int num) {
4.          this.num = num;
5.      }
6.      public boolean equals(Sample obj) {
7.          if (obj == null) {
8.              return false;
9.          }
10.         return this.num == obj.num;
11.      }
12. }` 
        },
        { type: "text", value: "このクラスを利用する以下のプログラムを、コンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. public class Main {
2.     public static void main(String[] args) {
3.         Object a = new Sample(10);
4.         Object b = new Sample(10);
5.         System.out.println(a.equals(b));
6.     }
7. }
` 
        }
    ],
    options: `A. Sampleクラスでコンパイルエラーが発生する
B. Mainクラスでコンパイルエラーが発生する
C. 「true」 と表示される
D. 「false」 と表示される
E. 実行時に例外がスローされる
`,
    answer: "D",
    explanation: `オーバーロードに関する問題。
オーバーライド：親クラスのメソッドを上書きする。
オーバーロード：同じ名前のメソッドを増やす（多重定義）。この際、引数の数や型が異なっている必要がある。
public boolean equals(Sample obj) { にて、Sampleクラスのequalsメソッドを定義しているが、そもそもObjectにequalsメソッドが定義されているため、
Object a 変数を使ってしまうと、Objectのequalsメソッドが呼び出される。
`
},
{
        id: 11,
        chapter: "ch03",
        text: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)",
        code: `1. public class Main {
2.     public static void main(String[] args) {
3.         Object a = new Object();
4.         Object b = null;
5.         System.out.println(a.equals(b));
6.     }
7. }
`,
        options: `A. trueが表示される
B. falseが表示される
C. コンパイルエラーが発生する
D. 実行時に例外がスローされる
`,
        answer: "B",
        explanation: ``
    },
    {
        id: 12,
        chapter: "ch03",
        text: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)",
        code: `1. public class Main {
2.     public static void main(String[] args) {
3.         String a = "sample";
4.         String b = "sample";
5.         System.out.print(a == b);
6.         System.out.print(", ");
7.         System.out.println(a.equals(b));
8.     }
9. }
`,
        options: `A. 「false, true」と表示される
B. 「false, false」と表示される
C. 「true, false」と表示される
D. 「true, true」と表示される
`,
        answer: "D",
        explanation: `Stringのインスタンスは、コンスタントプールという仕組みがある。同じ文字列の場合は、参照が使いまわされるため、同一である。`
    },
    {
        id: 13,
        chapter: "ch03",
        text: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)",
        code: `1. public class Main {
2.     public static void main(String[] args) {
3.         String a = new String("sample");
4.         String b = "sample";
5.         System.out.print(a == b);
6.         System.out.print(", ");
7.         System.out.println(a.equals(b));
8.     }
9. }
`,
        options: `A. 「false, true」と表示される
B. 「false, false」と表示される
C. 「true, false」と表示される
D. 「true, true」と表示される
`,
        answer: "A",
        explanation: `文字列リテラルは、コンスタントプールという仕組みがあるが、new演算子を使って、明示的に新しいインスタンスをつくる事にした場合は、異なるインスタンスとなる。== は同じインスタンスであるかどうかを判定する。文字列リテラルのequalsメソッドは、同じ文字列かどうかを判定している。`
    },
    {
        id: 14,
        chapter: "ch03",
        text: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)",
        code: `1.  public class Main {
2.      public static void main(String[] args) {
3.
4.          String a = "abc";
5.          String b = new String(a);
6.
7.          int count = 0;
8.          if (a.intern( ) == "abc") {
9.              count++;
10.         }
11.         if (b.intern( ) == "abc") {
12.             count++;
13.         }
14.         if (a.intern( ) == b.intern( )) {
15.             count++;
16.         }
17.         System.out.println(count);
18.     }
19. }
`,
        options: `A. 0が表示される
B. 1が表示される
C. 2が表示される
D. 3が表示される
`,
        answer: "D",
        explanation: `intern()メソッド。文字列プールの中に入っている文字列の内容を返す。`
    },
    {
        id: 15,
        chapter: "ch03",
        text: "次のプログラムを実行し、「ok」と表示したい。4行目の空欄に入るコードとして、正しいものを選びなさい。(1つ選択)",
        code: `1. public class Main {
2.     public static void main(String[] args) {
3.         int num = 10;
4.         □□□□□□□□□□□□□□
5.             System.out.println("ok");
6.     }
7. }
`,
        options: `A if (num <= 10)
B. if num <= 10
C. if (num < 10) then
D. if num <= 10 then
`,
        answer: "A",
        explanation: `if文の{}は、省略可能。その場合、次の一文のみ対象になる。`
    },
    {
        id: 16,
        chapter: "ch03",
        text: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)",
        code: `1. public class Main {
2.     public static void main(String[] args) {
3.         if (false)
4.         System.out.println("A");
5.         System.out.println("B");
6.     }
7. }
`,
        options: `A. 「A」と表示される
B. 「B」と表示される
C. 「A」「B」と表示される
D. 何も表示されない
E. コンパイルエラーが発生する
F. 実行時に例外がスローされる
`,
        answer: "B",
        explanation: `if文の{}は、省略可能。その場合、次の一文のみ対象になる。`
    },
    {
        id: 17,
        chapter: "ch03",
        text: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)",
        code: `1.  public class Main {
2.      public static void main(String[] args) {
3.          int num = 10;
4.          if (num < 10)
5.              System.out.println("A");
6.          else
7.              System.out.println("B");
8.          if (num == 10)
9.              System.out.println("C");
10.     }
11. }

`,
        options: `A. 「A」「B」「C」と表示される
B. 「A」「C」と表示される
C. 「B」「C」と表示される
D. 「A」と表示される
E. 「B」と表示される
F. 「C」と表示される
`,
        answer: "C",
        explanation: ``
    },
    {
        id: 18,
        chapter: "ch03",
        text: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)",
        code: `1.  public class Main {
2.      public static void main(String[] args) {
3.          int num = 10;
4.          if (num == 100)
5.              System.out.println("A");
6.          else if (10 < num)
7.              System.out.println("B");
8.          else
9.          if (num == 10)
10.             System.out.println("C");
11.         else
12.         if (num == 10)
13.             Systen.out.println("D");
14.     }
15. }
`,
        options: `A. Cが表示される
B. Dが表示される
C. CとDが表示される
D. 何も表示されない
E. コンパイルエラーが発生する
E. 実行時に例外がスローされる
`,
        answer: "A",
        explanation: ``
    },
    {
        id: 19,
        chapter: "ch03",
        text: "switch文の条件式が戻せる型として、正しいものを選びなさい。(6つ選択)",
        code: ``,
        options: `A. char
B. byte
C. short
D. int
E. long
F. String
G. enum
H. boolean
`,
        answer: "A、B、C、D、F、G",
        explanation: `char,byte,short,int,Character,Byte,Short,Integer,String,Enum
基本的には、以下のパターン。
・Int型以下の整数型とそのラッパークラス
・文字と文字列
・列挙型`
    },
    {
        id: 20,
        chapter: "ch03",
        text: "次のプログラムのコンパイルエラーが発生するのは何行目か。正しいものを選びなさい。(2つ選択)",
        code: `1.  public class Main {
2.      public static void main(String[] args) {
3.          final int NUM = 0;
4.          int num = 10;
5.          switch (num) {
6.          case "10":    System.out.println("A");
7.                        break:
8.          case num :    Systen.out.println("B");
9.                        break;
10.         case 2*5 :    System.out.println("C");
11.                       break;
12.         case NUM :    System.out.println("D");
13.                       break;
14.         }
15.     }
16. }
`,
        options: `A. 6行目
B. 8行目
C. 10行目
D. 12行目
`,
        answer: "A、B",
        explanation: `Switch文のcase値に使える条件の問題。
・条件式が戻す値と同じ型か、互換性がある。
・定数か、コンパイル時に値が決められるか。
・nullでないか
6行目の case "10": は文字列リテラルを使っているため、コンパイルエラー。
8行目は、変数のため、コンパイルエラー。
ちなみに、finalは、一度値を代入したら、後から変更できない定数を作るための修飾子のため、12行目はコンパイルエラーじゃない。
`
    },
    {
        id: 21,
        chapter: "ch03",
        text: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)",
        code: `1.  public class Main {
2.      public static void main(String[] args) {
3.          int num = 1;
4.          switch (num) {
5.          case 1:
6.          case 2:
7.          case 3: System.out.println("A");
8.          case 4: System.out.println("B");
9.          default:
10.             System.out.println("C");
11.         }
12.     }
13. }
`,
        options: `A. 「A」と表示される
B. 「A」「B」と表示される
C. 「A」「B」「C」と表示される
D. 何も表示されない
E. コンパイルエラーが発生する
F. 実行時に例外がスローされる
`,
        answer: "C",
        explanation: `break文がないと、下の条件式もすべて実行される。`
    });
