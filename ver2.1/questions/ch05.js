
window.questionsData = window.questionsData || [];
window.questionsData.push(
{
        id: 1,
        chapter: "ch05",
        text: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)",
        code: `1. public class Main {
2.     public static void main(String[] args) {
3.         int[] array = new int[0];
4.         System.out.println(array);
5.     }
6. }
`,
        options: `A. 0が表示される
B. nullが表示される
C. 何も表示されない
D. {}が表示される
E. ハッシュコードが表示される
F. コンパイルエラーが発生する
G. 実行時に例外がスローされる
`,
        answer: "E",
        explanation: ``
    },
    {
        id: 2,
        chapter: "ch05",
        text: "次のプログラムの説明として、正しいものを選びなさい。(1つ選択)",
        code: `1.  public class Main {
2.      public static void main(String[] args) {
3.          int[] a;
4.          int b[];
5.          int[][] c;
6.          int d[][];
7.          int[] e[];
8.          int[][] f[];
9.      }
10. }
`,
        options: `A. 3行目でコンパイルエラーが発生する
B. 4行目でコンパイルエラーが発生する
C. 5行目でコンパイルエラーが発生する
D. 6行目でコンパイルエラーが発生する
E. 4行目と6行目でコンパイルエラーが発生する
F. 7行目と8行目でコンパイルエラーが発生する
G. コンパイルエラーは発生しない
`,
        answer: "G",
        explanation: `配列宣言の規則。データ型の後ろだけでなく、変数名の後ろに記述することも可能。
int[] array;　int array[];　など
また、7行目は2次元配列、8行目は3次元配列として機能する。
`
    },
    {
        id: 3,
        chapter: "ch05",
        text: "配列型変数の宣言として、正しいものを選びなさい。(1つ選択)",
        code: ``,
        options: `A. int[3] a;
B. int b[2];
C. int[2] c[ ];
D. int d[3][ ];
E. 選択肢A~Dまで、すべて誤りである
F. 選択肢A~Dまで、すべて正しい
`,
        answer: "E",
        explanation: `配列変数を宣言するときは、要素数を指定できない。`
    },
    {
        id: 4,
        chapter: "ch05",
        text: "次の中から、コンパイルエラーになるコードを選びなさい。(3つ選択)",
        code: ``,
        options: `A. int a[ ] = new int[2][3];
B. int[ ] b = new int[2.3];
C. int c[ ] = new int[2*3];
D. int x = 2, y = 3;
　 int[ ] d = new int [x * y];
E. int[ ][ ] e = new int[2][ ];
F. int f[ ][ ]= new int[ ][3];
`,
        answer: "A、B、F",
        explanation: ``
    },
    {
        id: 5,
        chapter: "ch05",
        text: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)",
        code: [ 
                `1. public class Item {
2.     String name;
3.     int price = 100;
4. }
`,                
                `1.  public class Main {
2.      public static void main(String[] args) {
3.          Item[] items = new Item[3];
4.          int total = 0;
5.          for (int i = 0; i < items.length; i++) {
6.              total += items[i].price;
7.          }
8.          System.out.println(total);
9.      }
10. }`],
        options: `A. 0が表示される
B. 200が表示される
C. 300が表示される
D. コンパイルエラーが発生する
E. 実行時に例外がスローされる
`,
        answer: "E",
        explanation: "配列インスタンスのみの生成で、オブジェクトは生成されていない。"
    },
    {
        id: 6,
        chapter: "ch05",
        text: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)",
        code: `1. public class Main {
2.     public static void main(String[] args) {
3.         String[] array = {"A", "B", "C", "D"};
4.         array[0] = null;
5.         for (String str: array) {
6.             System.out.print(str);
7.         }
8.     }
9. }
`,
        options: `A. 「ABCD」と表示される
8. 「BCD」と表示される
C. 「nullBCD」と表示される
D. 「null」と表示される
E. コンパイルエラーが発生する
F. 実行時に例外がスローされる
`,
        answer: "C",
        explanation: ``
    },
    {
        id: 7,
        chapter: "ch05",
        text: "次の中から、コンパイルエラーにならないコードを選びなさい。(3つ選択)",
        code: ``,
        options: `A. int[ ] a = new int[2]{2, 3};
B. int b[ ][ ] = { };
C. int[ ][ ] c = new int[ ][ ]{ };
D. int[ ] d;
　 d = new int[ ] {2, 3};
E. int e[ ];
　 e = {2, 3};
   `,
        answer: "B、C、D",
        explanation: `A. 不可。new int[ ]{2,3}なら可。
C. 可。int[] a や、int a[]の書き方はjavaは許容されている。
D. 可。
E. 不可。new int[] で明示すれば可。`
    },
    {
        id: 8,
        chapter: "ch05",
        text: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)",
        code: `1.  public class Main {
2.      public static void main(String[] args) {
3.          String[][] array = { {"A", "B"}, null, { "C", "D", "E" } };
4.          int total = 0;
5.          for (String[] tmp : array) {
6.              total += tmp.length;
7.          }
8.          System.out.println(total);
9.      }
10. }
`,
        options: `A. 0が表示される
8. 5が表示される
C. 9が表示される
D. コンパイルエラーが発生する
E. 実行時に例外がスローされる
`,
        answer: "E",
        explanation: `0[A,B]、1[null]、2[C,D,E]みたいな配列になっている。拡張for文で、変数tmpに代入されるのは、一次元目に格納されている、配列0、1、2。lengthで長さを取る時に、nullだと参照エラーがでる。`
    },
    {
        id: 9,
        chapter: "ch05",
        text: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)",
        code: [ 
                `1. public interface A { }`,
                `1. public abstract class B implements A { }`,
                `1. public class C extends B { }`,
                `1. public class D extends C { }`,
                `1. public class Main {
2.     public static void main (String[] args) {
3.         A[ ] array = {new C( ), null, new D( )};
4.         Object[ ] objArray = array;
5.     }
6. }
`,],
        options: `A. Mainクラスの3行目でコンパイルエラーが発生する
B. Mainクラスの4行目でコンパイルエラーが発生する
C. 実行時に例外がスローされる
D. コンパイルも実行もできる
`,
        answer: "D",
        explanation: `abstract。抽象クラス。これだけではインスタンス化(new B())できない、作成途中の未完成なクラス。共通の枠組みや、処理だけをまとめて用意しておき、具体的な細かな処理は子クラスに実装させたいときに使う。
interface。インターフェース。クラスが守るべき『操作のルール（仕様）』をまとめたもの。必ず同様の処理、メソッドなどを持つように定義するもの。
implements。Bクラスが、Aクラスに属しているという宣言。クラスBは、Aとしても扱う。
今回の問題の骨子。
A[ ] array = {new C(),null,new D()}。
CやDが、Aクラスとして扱われない場合は、コンパイルエラーとなるが、今回はＡクラスとして扱うＢクラスの継承をしていっているため、代入可能。Objectクラスは、全てのクラスの親みたいな存在のため、Object objArrayにも代入可能。`
    },
    {
        id: 10,
        chapter: "ch05",
        text: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)",
        code: `1.  public class Main {
2.      public static void main(String[] args) {
3.          int[ ][ ] arrayA = {{1, 2}, {1, 2}, {1, 2, 3}};
4.          int[ ][ ] arrayB = arrayA.clone();
5.          int total = 0;
6.          for (int[ ] tmp : arrayB) {
7.              for (int val : tmp) {
8.                  total += val;
9.              }
10.         }
11.         System.out.println(total);
12.     }
13. }
`,
        options: `A. 0が表示される
B. 12が表示される
C. コンパイルエラーが発生する
D. 実行時に例外がスローされる
`,
        answer: "B",
        explanation: `.clone()メソッドで、複製できる。`
    });
 