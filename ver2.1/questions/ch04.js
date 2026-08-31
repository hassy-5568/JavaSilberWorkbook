
window.questionsData = window.questionsData || [];
window.questionsData.push(
    {
        id: 1,
        chapter: "ch04",
        text: "コンソールに0~4までの数字を順に表示したい。プログラムの5行目の空欄に入るコードとして、正しいものを選びなさい。(1つ選択)",
        code: `1.  public class Main {
2.      public static void main(String[] args) {
3.          int a = 11;
4.          int b = 0;
5.          while ( □□□□□□□□ ) {
6.              if (5 < a) {
7.                  System.out.println(b);
8.              }
9.              a--;
10.             b++;
11.         }
12.     }
13. }
`,
        options: `A. b < 5
B. 5 < b
C. 5 < a
D. a < 5
E. true
F. false
`,
        answer: "A",
        explanation: ``
    },
    {
        id: 2,
        chapter: "ch04",
        text: "コンソールに0~4までの数字を表示したい。プログラムの空欄①と② に入るコードの組み合わせとして、正しいものを選びなさい。(1つ選択)",
        code: `1. public class Main {
2.     public static void main(String[] args) {
3.         int a = 0;
4.         ①□□□□□□ {
5.             System.out.println(a++);
6.         } ②□□□□□□
7.     }
8. }
`,
        options: `A.  ①do (a < 5)  ②while;
B.  ①do (5 < a)  ②while;
C.  ①do          ②while (a < 5);
D.  ①do          ②while (5 < a);
`,
        answer: "C",
        explanation: ``
    },
    {
        id: 3,
        chapter: "ch04",
        text: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)",
        code: `1.  public class Main {
2.      public static void main(String[] args) {
3.          int a = 0;
4.          while (a < 5)
5.              do
6.                  a++;
7.                  System.out.print(a);
8.              while (true);
9.      }
10. }
`,
        options: `A. 012が表示される
B. 012が5回表示される
C. 何も表示されない
D. 無限ループになる
E. コンパイルエラーが発生する
F. 実行時に例外がスローされる`,
        answer: "E",
        explanation: ``
    },
    {
        id: 4,
        chapter: "ch04",
        text: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)",
        code: `1. public class Main {
2.     public static void main(String[] args) {
3.         for (int i = 1, long j = 2; i < 5; i++){
4.             System.out.print(i, j);
5.         }
6.     }
7. }
`,
        options: `A. 「2468」と表示される
B. 「246810」と表示される
C. コンパイルエラーが発生する
D. 実行時に例外がスローされる
`,
        answer: "C",
        explanation: `forの初期化文に関する問題。
複数の変数を使う場合は、型は同じでないといけない。`
    },
    {
        id: 5,
        chapter: "ch04",
        text: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)",
        code: `1. public class Main {
2.     public static void main(String[] args) {
3.         int a = 1;
4.         for (int b = 2, total = 0; b <= 5; b++) {
5.             total = a * b;
6.         }
7.         System.out.println(total);
8.     }
9. }
`,
        options: `A. 「2」「3」「4」と表示される
B. 「2」「3」「4」「5」と表示される
C. 「0」と表示される
D. 何も表示されない
E. コンパイルエラーが発生する
F. 実行時に例外がスローされる
`
,
        answer: "E",
        explanation: `スコープの問題。`
    },
    {
        id: 6,
        chapter: "ch04",
        text: "次のプログラムを実行し、コンソールに 「0」と表示したい。3行目の空欄に入るコードとして、正しいものを選びなさい。(1つ選択)",
        code: `1. public class Main {
2.     public static void main(String[] args) {
3.         for (int i = 0; □□□□□; i++) {
4.             System.out.println(i);
5.         }
6.     }
7. }
`,
        options: `A. i < 0
B. i == 0
C. 0 < i
D. i < 2
`
,
        answer: "B",
        explanation: ``
    },
    {
        id: 7,
        chapter: "ch04",
        text: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)",
        code: `1. public class Main {
2.     public static void main(String[] args) {
3.         for (int i = 0; j = 0; i < 3; j < 5; i++) {
4.             System.out.println(i++);
5.             j += i;
6.         }
7.     }
8. }`,
        options: `A. 「0」「1」「2」と表示される
B. 「0」「2」「4」と表示される
C. 「1」「2」「3」と表示される
D. コンパイルエラーが発生する
E. 実行時に例外がスローされる
`
,
        answer: "D",
        explanation: `条件文は複数記述できない。`
    },
    {
        id: 8,
        chapter: "ch04",
        text: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)",
        code: `1.  public class Main {
2.      public static void main(String[] args) {
3.          for (int i = 0; i < 3; i++, period()) {
4.              System.out.print(i);
5.          }
6.      }
7.      private static void period() {
8.          System.out.print(",");
9.      }
10. }
`,
        options: `A. 「0,1,2,」と表示される
B. 「,0,1,2」と表示される
C. 「0,1,2」と表示される
D. 「,0,1,2,」と表示される
E. コンパイルエラーが発生する
F. 実行時に例外がスローされる
`
,
        answer: "A",
        explanation: `更新分でメソッドの呼び出しは可能。`
    },
    {
        id: 9,
        chapter: "ch04",
        text: "次のプログラムを実行し、コンソールに 「10」と表示したい。6行目の空欄に入るコードとして、正しいものを選びなさい。(1つ選択)",
        code: `1.  public class Nain {
2.      public static void main(String[] args) { 
3.          int array[][]= new int[][] { {1, 2}, {2, 3, 4} };
4.          int total = 0;
5.          for (int i = 0; i < array.length; i++) {
6.              for ( □□□□□□□□□ ) {
7.                  total += array[i][j];
8.              }
9.          }
10.     System.out.println(total);
11.     }
12. }
`,
        options: `A. int j = 0; j < array[i].length; j++
B. int j = 0; j < array[j].length; j++
C. int j = i; j < array[i].length; j++
D. int j = i; j < array[j].length; j++
`,
        answer: "C",
        explanation: `array.lengthについて
配列全体の行の数（外側の要素数）を出力する。今回の場合でいうと、array.lengthは「2」。array[0].lengthは0行目にある要素の数「2」 (1, 2 の2つ)。array[1].length1行目にある要素の数「3」 (2, 3, 4 の3つ)になる。

`
    },
    {
        id: 10,
        chapter: "ch04",
        text: "次のプログラムの3行目の空欄に記述すると無限ループになるコードを選びなさい。(3つ選択)",
        code: `1. public class Main {
2.     public static void main(String[] args) {
3.         for ( □□□□□□□□□ ){
4.             System.out.println(i);
5.         }
6.     }
7. }
`,
        options: `A. int i = 0; true; i++
B. int i = 0; false; i++
C. int i = 0; ; 1++
D. int i = 0; i < 5;
`,
        answer: "A、C、D",
        explanation: ``
    },
    {
        id: 11,
        chapter: "ch04",
        text: "次のプログラムの4行目の空欄に記述するコードとして、正しいものを選びなさい。(1つ選択)",
        code: `1. public class Main {
2.     public static void main(String[] args) {
3.         String[][] array = { {"A", "B", "C"} };
4.         for ( □□□□□□□□□ ) {
5.             System.out.print(obj);
6.         }
7.     }
8. }
`,
        options: `A. Object obj : array
B. String str : array
C. String[] array : array
D. array : Object obj
E. array : String str
F. array : String[] array
`,
        answer: "A",
        explanation: `拡張for文の問題。
拡張for文とは、「for ( 型 変数名 : 集合 ) { // 繰り返し処理 }。選択肢CはString[] obj : arrayだったら正解。
// 」`
    },
    {
        id: 12,
        chapter: "ch04",
        text: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)",
        code: `1.  public class Main {
2.      public static void main(String[] args) {
3.          String[] array = {"A", "B", "C"};
4.          for (String str: array) {
5.              str = "D";
6.          }
7.          for (String str: array) {
8.              System.out.print(str);
9.          }
10.     }
11. }
`,
        options: `A. 「DDD」と表示される
B. 「ABC」と表示される
C. コンパイルエラーが発生する
D. 実行時に例外がスローされる
`,
        answer: "B",
        explanation: `拡張for文。変数strの値を変えているだけで、集合の値は変わらない。`
    },
    {
        id: 13,
        chapter: "ch04",
        text: "次のコードと同じ結果を出力するコードを選びなさい。(1つ選択)",
        code: `1. int num = 10;
2. do {
3.    num++;
4. } while (++num < 10);
5. System.out.println(num);
`,
                options: [
            {
                label: "A",
                code: `int num = 10;
while (++num < 10) {
    num++;
}
System.out.println(num);
`
            },
            {
                label: "B",
                code: `int num = 10;
while (++num <= 10) {
    num++;
}
System.out.println(num);
`
            },
            {
                label: "C",
                code: `int num = 10;
while (num++ < 10) {
    num++;
}
System.out.println(num);
`
            },
            {
                label: "D",
                code: `int num = 10;
while (num++ <= 10) {
    num++;
}
System.out.println(num);
`
            },
            {
                label: "E",
                code: `選択肢A～Dはすべて誤りである`
            },
        ],
        answer: "E",
        explanation: `この時のnumに入っている値は12。`
    },
    {
        id: 14,
        chapter: "ch04",
        text: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)",
        code: `1.  public class Main {
2.      public static void main(String[] args) {
3.          String[] array = { "A", "B" };
4.          for (String a : array) {
5.              for (String b : array) {
6.                  if ("B".equals(b))
7.                      break;
8.                  System.out.print(b);
9.              }
10.         }
11.     }
12. }
`,
        options: `A. 「AA」と表示される
B. 「ABAB」と表示される
C. 「A」と表示される
D. 「AB」と表示される
E. 「BB」と表示される
`,
        answer: "A",
        explanation: ``
    },
    {
        id: 15,
        chapter: "ch04",
        text: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)",
        code: `1.  public class Main {
2.      public static void main(String[] args) {
3.          int[] array = {1, 2, 3, 4, 5};
4.          int total = 0;
5.          for (int i: array) {
6.              if (i % 2 == 0)
7.                  continue;
8.                  total += i;
9.          }
10.         System.out.println(total);
11.     }
12. }
`,
        options: `A. 1が表示される
B. 9が表示される
C. 15が表示される
D. コンパイルエラーが発生する
E. 実行時に例外がスローされる
`,
        answer: "B",
        explanation: `for文のcontinueは、条件に合致したら、それ以降の処理を無視し、次の繰り返し処理を実行する。`
    },
        {
        id: 16,
        chapter: "ch04",
        text: "次の中から、ラベルが記述できるものを選びなさい。(1つ選択)",
        code: ``,
        options: `A. if文やswitch文
B. 式
C. 代入
D. return文
E. tryブロック
F. 選択肢A～Eすべて
`,
        answer: "F",
        explanation: `ラベルとは、breakやcontinueのときなど、制御を戻す場所を指定する時に使う。
コードブロック、if文、switch文、式、代入、return文、tryブロック、throw文などに使う。`
    },
    {
        id: 17,
        chapter: "ch04",
        text: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)",
        code: `1.  public class Main {
2.      public static void main(String[] args) {
3.          int total = 0;
4.          a: for (int i = 0; i < 5; i++) {
5.              b: for (int j = 0; j < 5; j++) {
6.                  if (i % 2 == 0) continue a;
7.                  if (3 < j) break b;
8.                  total += j;
9.              }
10.         }
11.         Systen.out.println(total);
12.     }
13. }
`,
        options: `A. 6が表示される
B. 12が表示される
C. 20が表示される
D. コンパイルエラーが発生する
E. 実行時に例外がスローされる
`,
        answer: "B",
        explanation: ``
    });
