
window.questionsData = window.questionsData || [];
window.questionsData.push(
{
    id: 1,
    chapter: "ch09",
    contents:[
        { type: "text", value: "次の計算式を使い、毎年積立を行って複利運用したときの金額を計算したい。この計算を行うコードとして正しいものを選びなさい。(1つ選択)" },
        { type: "math", value: "n = m \\frac{(1 + r)^x - 1}{r}" },
        { 
            type: "text", 
            value: "n : 受け取り総額\nm : 毎年の積立額\nr : 年利率\nx : 年数" 
        },
        
],
    options: `A. n = (int) (m * (Math.pow((1 + r), x) - 1) / r);
B. n = (int) (m * (Math.pow(x, (1 + r)) - 1) / r);
C. n = (int) (m * (Math.sqrt((1 + r)) - 1) / r);
D. n = (int) (m * (Math.sqrt((1 + r), x) - 1) / r);
`,
    answer: "A",
    explanation: `Math.pow(a, b)。aのb乗を計算する。戻り値はdouble型。
Math.sqrt(a)。aの平方根を計算する。戻り値はdouble型。`
},
{
    id: 2,
    chapter: "ch09",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  public class Sample {
2.      private int id:
3.      private String name;
4.      public Sample(int id, String name) {
5.          super();
6.          this.id = id;
7.          this.name = name;
8.      }
9.      public int getId() {
10.         return id;
11.     }
12.     public String getName(){
13.         return name;
14.     }
15. }
`},
{ 
            type: "code", 
            value: `1.  import java.util.Comparator;
2.
3.  public class SampleComparator implements Comparator<Sample> {
4.      @Override
5.      public int compare (Sample s1, Sample s2) {
6.          if (s1.getId() < s2.getId()) {
7.              return 1;
8.          }
9.          if (s2.getId() < s1.getId()) {
10.             return -1;
11.         }
12.         return 0;
13.     }
14. }
`},
{ 
            type: "code", 
            value: `1.  import java.util.ArrayList;
2.  import java.util.Arrays;
3.  import java.util.List;
4.
5.  public class Main {
6.      public static void main(String[] args) {
7.          Sample[ ] samples = {
8.              new Sample(2, "B"),
9.              new Sample(3, "C"),
10.             new Sample(1, "A")
11.         };
12.         List<Sample> list = new ArrayList<Sample>(Arrays.asList(samples));
13.         list.sort(new SampleComparator());
14.         for (Sample s: list) {
15.              System.out.println(s.getName());
16.         }
17.     }
18. }
`},
],
    options: `A. 「A」「B」「C」と表示される
B. 「B」「C」「A」と表示される
C. 「C」「B」「A」と表示される
D. 何も表示されない
`,
    answer: "C",
    explanation: ""
},
{
    id: 3,
    chapter: "ch09",
    contents:[
        { type: "text", value: "次のプログラムを実行し、「3」 「2」 「1」と表示したい。空欄に入るコードとして正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  import java.util.Arrays;
2.  import java.util.List;
3.
4.  public class Main {
5.      public static void main(String[] args) {
6.          List<Integer> list = Arrays.asList(new Integer[] {1, 2, 3});
7.          □□□□□□□
8.          for (Integer num: list) {
9.              System.out.println(num);
10.         }
11.     }
12. }
`},
],
    options: `A. list.sort((a, b) -> a.compareTo(b));
B. list.sort(() -> a.compareTo(b));
C. list.sort((a) -> a.compareTo(b));
D. list.sort((a, b) -> -a.compareTo(b));
`,
    answer: "D",
    explanation: `utli.ListのAPI。二つの引数が必要。-だと降順。+だと昇順になる。`
},
{
    id: 4,
    chapter: "ch09",
    contents:[
        { type: "text", value: "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  public class Sample {
2.      public static void main(String[] args) {
3.          char a = '0';
4.          int num = 0;
5.          if (Character.isAlphabetic(a)) {
6.              num++;
7.          }
8.          if (Character.isDigit(a)) {
9.              num++;
10.         }
11.         if (Character.isLowerCase(a)) {
12.             num++;
13.         }
14.         System.out.println(num);
15.     }
16. }
`},
],
    options: `A. 0が表示される
B. 1が表示される
C. 2が表示される
D. 3が表示される
E. コンパイルエラーが発生する
`,
    answer: "B",
    explanation: `isAlphabetic()。char型のメソッド。戻り値はboolean。引数の文字がアルファベットかどうかを判定。
isDigit()。引数が文字かどうか。isLowerCase()。引数が小文字かどうか。`
},
{
    id: 5,
    chapter: "ch09",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. import java.time.LocalDate;
2.
3. public class Sample {
4.     public static void main(String[] args) {
5.         LocalDate a = LocalDate.of(2015, 0, 1);
6.         LocalDate b = LocalDate.parse("2015-01-01");
7.         System.out.println(a.equals(b));
8.     }
9. }
`},
],
    options: `A. trueが表示される
B. falseが表示される
C. 5行目でコンパイルエラーが発生する
D. 6行目でコンパイルエラーが発生する
E. 実行時に例外がスローされる
`,
    answer: "E",
    explanation: `LocalDateの、LocalData.of(year, month, dayOfMonth)の月は、1~12を指定するため、実行時エラー。
LocalDate.parse()は、指定した文字列を解析して、日付オブジェクトに変換するメソッド。`
},
{
    id: 6,
    chapter: "ch09",
    contents:[
        { type: "text", value: "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。なお、現在の日付を2019年8月20日とする。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  import java.time.DayOfWeek;
2.  import java.time.LocalDate;
3.
4.  public class Sample {
5.      public static void main(String[] args) {
6.          LocalDate a = LocalDate.of (2019,8,19);
7.          LocalDate b = LocalDate.now();
8.          b.with(DayOfWeek.MONDAY);
9.          System.out.println(a.equals(b)
10.             + ", " + a.isBefore(b));
11.     }
12. }
`},
],
    options: `A 「true, true」と表示される
B. 「false, false」と表示される
C. 「true, false」と表示される
D. 「false, true」と表示される
`,
    answer: "D",
    explanation: `b.with()で、前日に変更しようとしているが、LocalDataオブジェクトは、不変オブジェクトのため、b.with()で値が変わらない。`
},
{
    id: 7,
    chapter: "ch09",
    contents:[
        { type: "text", value: "次のうち、ArrayListの説明として正しいものを選びなさい。(3つ選択)" },
],
    options: `A. nullは扱えない
B. 動的な配列として動作する
C. 重複した値は扱えない
D. スレッドセーフではない
E. 値を追加する箇所を制御できる
`,
    answer: "B、D、E",
    explanation: ""
},
{
    id: 8,
    chapter: "ch09",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  import java.util.ArrayList;
2.
3.  public class Main {
4.      public static void main(String[] args) {
5.          ArrayList list = new ArrayList<>();
6.          list.add("A");
7.          list.add(10);
8.          list.add('B');
9.          for (Object obj: list) {
10.             System.out.print(obj);
11.         }
12.     }
13. }
`},
],
    options: `A. 5行目でコンパイルエラーが発生する
B. 6行目でコンパイルエラーが発生する
C. 7行目でコンパイルエラーが発生する
D. 8行目でコンパイルエラーが発生する
E. 9行目でコンパイルエラーが発生する
F. 「A10B」と表示される
G. 実行時に例外がスローされる
`,
    answer: "F",
    explanation: ""
},
{
    id: 9,
    chapter: "ch09",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  import java.util.ArrayList;
2.
3.  public class Main {
4.      public static void main(String[] args) {
5.          ArrayList<String> list = new ArrayList<>();
6.          list.add("A");
7.          list.add(2, "B");
8.          list.add("C");
9.          list.add("D");
10.         for (String str: list) {
11.             System.out.print(str);
12.         }
13.     }
14. }
`},
],
    options: `A. 「ABCD」と表示される
B. 「ACBD」と表示される
C. 「ACDB」と表示される
D. コンパイルエラーが発生する
E. 実行時に例外がスローされる
`,
    answer: "E",
    explanation: `list.add(インデックス,要素)。リストのインデックスに要素を追加する。後ろの要素は全て後ろにずれる。今回は、要素が1しかない時にインデックス2を参照しているため、実行時エラー。`
},
{
    id: 10,
    chapter: "ch09",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  import java.util.ArrayList;
2.
3.  public class Main {
4.      public static void main(String[] args) {
5.          ArrayList<String> list = new ArrayList<>();
6.          list.add("A");
7.          list.set(0, "B");
8.          list.add("C");
9.          list.set(1, "D");
10.         for (String str: list) {
11.             System.out.print(str);
12.         }
13.     }
14. }
`},
],
    options: `A. 「BD」と表示される
B. 「AD」と表示される
C. 「BC」と表示される
D. 「BCD」 と表示される
E. 「ABCD」と表示される
F. コンパイルエラーが発生する
G. 実行時に例外がスローされる
`,
    answer: "A",
    explanation: `list.set(インデックス,要素)。インデックスの要素を上書きする。`
},
{
    id: 11,
    chapter: "ch09",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  public class Item {
2.      private String name;
3.      private int price;
4.      public Item(String name, int price) {
5.          this.name = name;
6.          this.price = price;
7.      }
8.      public boolean equals(Object obj) {
9.          if (obj instanceof Item) {
10.             Item tmp = (Item) obj;
11.             if (tmp.name.equals(this.name)) {
12.                 return true;
13.             }
14.         }
15.         return false;
16.     }
17.     public String getName() {
18.         return name;
19.     }
20. }
`},
{ 
            type: "code", 
            value: `1.  import java.util.ArrayList;
2.
3.  public class Main {
4.      public static void main(String[] args) {
5.          ArrayList<Item> list = new ArrayList<>();
6.          list.add(new Item("A", 100));
7.          list.add(new Item("B", 200));
8.          list.add(new Item("C", 300));
9.          list.add(new Item("A", 100));
10.         list.remove(new Item("A", 500));
11.         for (Item item: list) {
12.             System.out.println(item.getName());
13.         }
14.     }
15. }
`},
],
    options: `A. 「A」「B」「C」「A」と表示される
B. 「B」「C」「A」と表示される
C. 「B」「C」と表示される
D. コンパイルエラーが発生する
E. 実行時に例外がスローされる
`,
    answer: "C",
    explanation: `list.remove()。実際には、引数で渡されたものを、リストに対して、上からequalsメソッドを使い、同じものだったら排除する仕組み。今回は、equalsをオーバーライドして、nameだけ一致していたら削除している。`
},
{
    id: 12,
    chapter: "ch09",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  import java.util.ArrayList;
2.
3.  public class Main {
4.      public static void main(String[] args) {
5.          ArrayList<String> list = new ArrayList<>();
6.          list.add("A");
7.          list.add("B");
8.          list.add("C");
9.          for (String str: list) {
10.             if ("B".equals(str)) {
11.                 list.remove(str);
12.             } else {
13.                 System.out.println(str);
14.             }
15.         }
16.     }
17. }
`},

],
    options: `A. 「A」「C」と表示される
B. 「A」「B」「C」と表示される
C. 「A」と表示される
D. コンパイルエラーが発生する
E. 実行時に例外がスローされる
`,
    answer: "C",
    explanation: `拡張for文のカーソルがどう移動するかの問題。試験的にはCだが、実際には実行時エラーになりそう。`
},
{
    id: 13,
    chapter: "ch09",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  import java.util.ArrayList;
2.
3.  public class Main {
4.      public static void main(String[] args) {
5.          ArrayList<String> list = new ArrayList<>();
6.          list.add("A");
7.          list.add("B");
8.          list.add("C");
9.          list.add("D");
10.         list.add("E");
11.         for (String str: list) {
12.             if ("C".equals(str)) {
13.                 list.remove(str);
14.             }
15.         }
16.         for (String str: list) {
17.             System.out.println(str);
18.         }
19.     }
20. }
`},
],
    options: `A. 「A」「B」「D」「E」と表示される
B. 「A」「B」「C」「D」「E」と表示される
C. 「A」「B」「E」と表示される
D. コンパイルエラーが発生する
E. 実行時に例外がスローされる
`,
    answer: "E",
    explanation: `removeメソッドの後に、呼び出そうとすると実行時エラーになる。`
},
{
    id: 14,
    chapter: "ch09",
    contents:[
        { type: "text", value: "次のうち、値を変更できないか、固定長のリストを作るものを選びなさい。(2つ選択)" },
        ],
    options: `A. var list = List.of(1, 2, 3);
B. var list = new ArrayList<Integer>();
C. var list = Arrays.asList(new Integer[] {1,2,3});
D. var list = new ArrayList<Integer>(3);
`,
    answer: "A、C",
    explanation: `List.of()。完全不変なリストを作る方法。
asList(new 型[] {})。指定された配列をラップした、固定長リストを作る。配列の要素を変更することは可能だが、配列の長さを変更することはできない。`
},
{
    id: 15,
    chapter: "ch09",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. import java.util.Arrays;
2.
3. public class Main {
4.     public static void main(String[] args) {
5.         String[ ] a = {"b", "c"};
6.         String[ ] b = {"a", "b", "c"};
7.         System.out.println(Arrays.mismatch(a, b));
8.     }
9. }
`},
],
    options: `A. falseが表示される
B. trueが表示される
C. -1が表示される
D. 0が表示される
E. 1が表示される
`,
    answer: "D",
    explanation: `mismatchメソッド。引数で渡された配列の要素を、先頭から比較し、一致しない要素のインデックスを返す。`
},
{
    id: 16,
    chapter: "ch09",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. import java.util.Arrays;
2.
3. public class Main {
4.     public static void main(String[] args) {
5.         String[] a = {"B", "A"};
6.         String[] b = {"A", "B"};
7.         System.out.println(Arrays.compare(a, b));
8.     }
9. }
`},
],
    options: `A. trueが表示される
B. falseが表示される
C. 1が表示される
D. 0が表示される
E. -1が表示される
`,
    answer: "C",
    explanation: `compare()メソッド。辞書の順番を返すメソッド。`
},
{
    id: 17,
    chapter: "ch09",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  import java.util.ArrayList;
2.  import java.util.Arrays;
3.  import java.util.List;
4.
5.  public class Main {
6.      public static void main(String[] args) {
7.          List<String> list = new ArrayList<>(
8.              Arrays.asList(new String[]{"A", "B", "C"})
9.          );
10.         list.removeIf(
11.             (String s) -> {
12.                 return s.equals("B");
13.             }
14.         );
15.         System.out.println(list);
16.     }
17. }
`},
],
    options: `A. [A, B, C]
B. [A, C]
C. コンパイルエラーが発生する
D. 実行時に例外がスローされる
`,
    answer: "B",
    explanation: `removeIf()リストの中から、trueを返すものを取り除くメソッド。`
},
{
    id: 18,
    chapter: "ch09",
    contents:[
        { type: "text", value: "次のプログラムの実行結果として「A」 「B」 「C」 と順に表示したい。以下の空欄に入るコードとして正しいものを選びなさい。(2つ選択)" },
        { 
            type: "code", 
            value: `1. import java.util.List;
2.
3. public class Main {
4.     public static void main(String[] args) {
5.         List<String> list = List.of("A", "B", "C");
6.         □□□□□□□
7.     }
8. }
`},
],
    options: `A. list.forEach(str -> System.out.println(str));
B. list.for(str -> System.out.println(str));
C. list.forEach(System.out::println);
D. list.forEach(System.out::println());
E. list.for(System.out::println);
`,
    answer: "A、C",
    explanation: ""
},
{
    id: 19,
    chapter: "ch09",
    contents:[
        { type: "text", value: "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  public class Item {
2.      private int id;
3.      private String name;
4.      public Item(int id, String name) {
5.          this.id = id;
6.          this.name = name;
7.      }
8.      public int getId() {
9.          return id;
10.     }
11.     public String getName() {
12.         return name;
13.     }
14. }
`},
{ 
            type: "code", 
            value: `1.  import java.util.HashMap;
2.  import java.util.Map;
3.
4.  public class Sample {
5.      public static void main(String[] args) {
6.          Map<Integer, Item> map = new HashMap<Integer, Item>();
7.          map.put(1, new Item(1, "A"));
8.          map.put(2, new Item(2. "B"));
9.          map.put(3, new Item(3, "C"));
10.         map.put(1, new Item(1, "A"));
11.         map.put(null, new Item(0, "default"));
12.
13.         System.out.println(map.size());
14.     }
15. }
`},
],
    options: `A. 3が表示される
B. 4が表示される
C. 5が表示される
D. コンパイルエラーが発生する
E. 実行時に例外がスローされる
`,
    answer: "B",
    explanation: `HashMap。10行目は、HashMapの1を書き換えている。HashMapは、nullを1つだけ許容する。`
});
