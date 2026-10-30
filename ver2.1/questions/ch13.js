
window.questionsData = window.questionsData || [];
window.questionsData.push(
{
    id: 1,
    chapter: "ch13",
    contents:[
        { type: "text", value: "次のプログラムの空欄に入るコードとして、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  import java.io.*;
2.
3.  public class Main {
4.      public static void main(String[] args) {
5.          try {
6.              test(0);
7.          } □□□□□□□
8.      }
9.      private static void test(int num) throws IOException, IndexOutOfBoundsException {
10.         if (num < 10) {
11.             throw new FileNotFoundException();
12.         } else {
13.             throw new IndexOutOfBoundsException();
14.         }
15.     }
16. }`},
    ],
    options: [
        { label: "A", code: `catch (FileNotFoundException e) {}
catch (IndexOutOfBoundsException e) {}` },
        { label: "B", code: `catch (IndexOutOfBoundsException e) {}
catch (FileNotFoundException e) {}` },
        { label: "C", code: `catch (FileNotFoundException | IOException e) {}` },
        { label: "D", code: `catch (IOException e) {}` },
        { label: "E", code: `catch (FileNotFoundException | IndexOutOfBoundsException e) {}` },
    ],
    answer: "D",
    explanation: `test メソッドは throws IOException と宣言しています。IOException はチェック例外なので、呼び出す側で必ず IOException（またはその親）を catch する必要があります。
IndexOutOfBoundsException は非チェック例外なので、catch しなくてもかまいません。

A・B・E：× FileNotFoundException は IOException の子クラスです。子クラスだけを catch しても、IOException 全体を処理したことにならないため、コンパイルエラーになります。
C：× マルチキャッチ（|）では、親子関係にある例外を並べて書けません。コンパイルエラーになります。
D：○ IOException を catch しているので、問題ありません。`
},
{
    id: 2,
    chapter: "ch13",
    contents:[
        { type: "text", value: "immutableなオブジェクトに関する説明として、正しいものを選びなさい。(3つ選択)" },
    ],
    options: `A. どのメソッドもオーバーライドできない
B. どのメソッドでもフィールドの値を変更しない
C. すべてのフィールドをpublicにする
D. すべてのフィールドをfinalにする
`,
    answer: "A、B、D",
    explanation: `イミュータブル（immutable）とは、「一度作ったら中身を変更できない」という意味です。String が代表例です。

A：○ サブクラスでメソッドをオーバーライドされると、中身を変更されるおそれがあります。そのため、クラスを final にするなどして、オーバーライドできないようにします。
B：○ setter のような、フィールドの値を変更するメソッドは用意しません。
C：× public にすると外から自由に書き換えられてしまうので、private にします。
D：○ final にすると、一度入れた値を変更できなくなります。`
},
{
    id: 3,
    chapter: "ch13",
    contents:[
        { type: "text", value: "次のプログラムのコンパイルエラーを修正する方法として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  public class Main {
2.      public static void main(String[] args) {
3.          int a = 10;
4.          float b = 10.0f;
5.          double c = 20;
6.          a = b;
7.          b = a;
8.          c = b;
9.          c = a;
10.     }
11. }`},
    ],
    options: `A. 6行目を「a = (int) b;」に置き換える
B. 7行目を「b = (float) a;」に置き換える
C. 8行目を「c = (double) b;」に置き換える
D. 9行目を「c = (double) a;」に置き換える
`,
    answer: "A",
    explanation: `小さい型 → 大きい型の代入は自動で変換されますが、大きい型 → 小さい型の代入にはキャストが必要です。
型の大きさの順番：byte < short < int < long < float < double

6行目：float → int は「大 → 小」なので、キャストが必要です。ここがコンパイルエラーの原因です。
7行目：int → float、8行目：float → double、9行目：int → double は、どれも「小 → 大」なので、そのままで問題ありません。

そのため、6行目にキャストを付ける A が正解です。`
},
{
    id: 4,
    chapter: "ch13",
    contents:[
        { type: "text", value: "次のプログラムの説明として、正しいものを選びなさい。(3つ選択)" },
        { 
            type: "code", 
            value: `1.  import java.util.ArrayList;
2.  import java.util.List;
3.
4.  public class Trash {
5.      List<String> list = new ArrayList<>();
6.      protected Trash(String val) {
7.          add(val);
8.      }
9.      public boolean test(String val) {
10.         return true;
11.     }
12.     public void delete(String val) {
13.         list.remove(val);
14.     }
15.     public final void add(String val) {
16.         list.add(val);
17.     }
18. }`},
        { 
            type: "code", 
            value: `1.  public class CacheTrash extends Trash {
2.      private String tmp = null;
3.      public CacheTrash() {
4.          super(null);
5.      }
6.      public boolean test(String val) {
7.          return list.contains(val);
8.      }
9.      public void delete(String val) {
10.         this.tmp = val;
11.     }
12.     public void flush() {
13.         super.delete(tmp);
14.     }
15. }`},
    ],
    options: `A. CacheTrashクラスのtestメソッドは常にtrueを戻す
B. CacheTrashクラスのdeleteメソッドは、Trashクラスのdeleteメソッドを呼び出す
C. CacheTrashクラスのaddメソッドは、引数をlistに追加する
D. Trashクラスのlistは、Trashクラスのすべてのサブクラスで参照できる
E. CacheTrashクラスのflushメソッドは、Trashクラスのdeleteメソッドを呼び出す
F. CacheTrashクラスのコンストラクタは、nullをlistに追加する
`,
    answer: "C、E、F",
    explanation: `A：× CacheTrash は test をオーバーライドしていて、list.contains(val) の結果（含まれていれば true、なければ false）を返します。
B：× CacheTrash の delete は tmp に値を入れるだけで、Trash の delete は呼んでいません。
C：○ add は final なのでオーバーライドできませんが、継承はされます。CacheTrash からも使え、list に追加します。
D：× list はアクセス修飾子なし（パッケージプライベート）です。別のパッケージのサブクラスからは参照できません。
E：○ super.delete(tmp) で、親の Trash の delete を呼んでいます。
F：○ super(null) で Trash のコンストラクタが呼ばれ、add(null) で list に null が追加されます。ArrayList には null も追加できます。`
},
{
    id: 5,
    chapter: "ch13",
    contents:[
        { type: "text", value: "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. public class Sample {
2.     private String value;
3.     public void setValue(String value) {
4.         value = "Hello, " + value;
5.     }
6.     public String toString() {
7.         return value;
8.     }
9. }`},
        { 
            type: "code", 
            value: `1. public class Main {
2.     public static void main(String[] args) {
3.         Sample s = new Sample();
4.         s.setValue("Java");
5.         System.out.println(s.toString());
6.     }
7. }`},
    ],
    options: `A. 「Hello, Java」と表示される
B. 「Hello, null」と表示される
C. 「null」と表示される
D. 実行時に例外がスローされる
`,
    answer: "C",
    explanation: `4行目の value は、this が付いていないので、引数の value を指します（引数とフィールドの名前が同じため）。
そのため、「Hello, Java」は引数の value に入るだけで、フィールドの value は null のままです。

toString() はフィールドの value（null）を返します。
println に null を渡すと、例外にはならず「null」と表示されます。`
},
{
    id: 6,
    chapter: "ch13",
    contents:[
        { type: "text", value: "次のプログラムを確認し、Bクラスの空欄への記述に関する説明として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. package ex06.a;
2.
3. public class A {
4.     String a = "A";
5.     protected String b = "B";
6.     public String c = "C";
7. }`},
        { 
            type: "code", 
            value: `1. package ex06.b;
2.
3. import ex06.a.A;
4.
5. public class B extends A {
6.     public void test() {
7.         System.out.println(□□□□□□);
8.     }
9. }`},
    ],
    options: `A. 「new B().b」と「new B().c」の両方でコンパイルエラーが発生する
B. 「new B().b」のみでコンパイルエラーが発生する
C. 「new B().a」のみでコンパイルエラーが発生する
D. 「new B().a」と「new B().b」の両方でコンパイルエラーが発生する
`,
    answer: "C",
    explanation: `A と B は別のパッケージにあります。

a（修飾子なし）：同じパッケージからしか使えません。別パッケージの B からは使えないので、コンパイルエラーになります。
b（protected）：別パッケージでも、サブクラスの中から、サブクラス型（B 型）の参照を通してなら使えます。new B().b は OK です。
c（public）：どこからでも使えます。

そのため、コンパイルエラーになるのは new B().a だけです。`
},
{
    id: 7,
    chapter: "ch13",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. public class Sample {
2.     public static void main(String[] args) {
3.         short a = 97;
4.         int b = 98;
5.         System.out.print((char) a + "");
6.         System.out.print((char) b);
7.     }
8. }`},
    ],
    options: `A. 「ab」と表示される
B. 「a」と表示されたあとに例外が発生する
C. コンパイルエラーが発生する
D. ClassCastExceptionがスローされる
`,
    answer: "A",
    explanation: `数値を char にキャストすると、その数値を文字コードとする文字に変換されます。
97 は 'a'、98 は 'b' です。

5行目：(char) a で 'a' になり、"" と連結して "a" が表示されます。
6行目：(char) b で 'b' が表示されます。
print は改行しないので、「ab」と表示されます。

数値同士（基本データ型）のキャストなので、ClassCastException は発生しません。`
},
{
    id: 8,
    chapter: "ch13",
    contents:[
        { type: "text", value: "BクラスからAクラスのtestメソッドを呼び出すために、Bクラスの空欄に入るコードとして正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. public class A {
2.     public void test() {
3.         // do something
4.     }
5. }`},
        { 
            type: "code", 
            value: `1. public class B extends A {
2.     public void test() {
3.         □□□□□□
4.     }
5. }`},
    ],
    options: `A. this.test();
B. public.test();
C. new.test();
D. super.test();
`,
    answer: "D",
    explanation: `親クラスのメソッドを呼ぶときは super. を使います。

A：× this.test() は B 自身の test() を呼ぶので、自分を呼び続けて StackOverflowError になります。
B・C：× public や new の後ろに「.」を付ける書き方はありません。コンパイルエラーになります。`
},
{
    id: 9,
    chapter: "ch13",
    contents:[
        { type: "text", value: "次のプログラムを確認し、コンパイルエラーとなる理由を選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  public class A {
2.      private String value;
3.      public String getValue() {
4.          return value;
5.      }
6.      public void setValue(String value) {
7.          this.value = value;
8.      }
9.      public String toString() {
10.         return getValue();
11.     }
12. }`},
        { 
            type: "code", 
            value: `1.  public class B extends A {
2.      public void setValue(String value) {
3.          super.setValue("[" + value + "]");
4.      }
5.      public void setValue(String... values) {
6.          setValue(test(values));
7.      }
8.      private String test(String... values) {
9.          var sb = new StringBuilder();
10.         for (String value : values) {
11.             sb.append(value + ",");
12.         }
13.         return sb.toString();
14.     }
15. }`},
        { 
            type: "code", 
            value: `1. public class Main {
2.     public static void main(String[] args) {
3.         A a = new B();
4.         a.setValue(args);
5.     }
6. }`},
    ],
    options: `A. BのインスタンスをA型で扱ったため
B. AクラスのtoStringメソッドをBクラスでオーバーライドしていないため
C. Bクラスのtestメソッドがprivateであるため
D. BクラスからAクラスのvalueにアクセスできないため
E. AクラスにはsetValue(String... values)というメソッドがないため
`,
    answer: "E",
    explanation: `変数 a の型は A です。どのメソッドを呼び出せるかは、変数の型で決まります。
args は String[] ですが、A クラスには setValue(String value) しかありません。String[] を String として渡すことはできないので、Main の4行目でコンパイルエラーになります。

setValue(String... values) は B クラスで追加したメソッドなので、A 型の変数からは呼び出せません。

A：× B のインスタンスを A 型で扱うこと自体は問題ありません。
C：× test は B クラスの中から呼んでいるので、private でも使えます。
D：× B は value に直接アクセスしておらず、super.setValue() を通して値を設定しています。`
},
{
    id: 10,
    chapter: "ch13",
    contents:[
        { type: "text", value: "次のプログラムを確認し、Testクラスの何行目でコンパイルエラーが発生するかを選びなさい。(2つ選択)" },
        { 
            type: "code", 
            value: `public class Sample { String name; }`},
        { 
            type: "code", 
            value: `1.  import java.util.ArrayList;
2.
3.  public class Test {
4.      var sample = new ArrayList<Sample>();
5.      public var test() {
6.          var sample = new Sample();
7.          var samples = new ArrayList<>();
8.          samples.add("Java");
9.          samples.add("Lambda");
10.         for (var s : samples) {
11.             System.out.println(s);
12.         }
13.     }
14. }`},
    ],
    options: `A. 5行目
B. 10行目
C. 7行目
D. 6行目
E. 4行目
`,
    answer: "A、E",
    explanation: `var は、メソッドの中で使う「ローカル変数」にしか使えません。

4行目：× フィールドには var を使えません。
5行目：× メソッドの戻り値の型にも var を使えません。

6行目：○ ローカル変数なので OK です。フィールドと同じ名前でもかまいません。
7行目：○ new ArrayList<>() と書くと、型は ArrayList<Object> になります。
10行目：○ 拡張 for 文の変数にも var を使えます。`
},
{
    id: 11,
    chapter: "ch13",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  public class Main {
2.      private static int num;
3.      static {
4.          num = 10;
5.      }
6.      static {
7.          num = 20;
8.      }
9.      static void test(int num) {
10.         num = num * num;
11.     }
12.     public static void main(String[] args) {
13.         test(num);
14.         System.out.println(num);
15.     }
16. }`},
    ],
    options: `A. 10が表示される
B. 20が表示される
C. 100が表示される
D. 400が表示される
E. コンパイルエラーが発生する
`,
    answer: "B",
    explanation: `static 初期化子（static { }）は、クラスが読み込まれたときに、上から順番に実行されます。
num は 10 になった後、20 になります。

test メソッドの num は引数なので、フィールドの num とは別の変数です。
引数の num を 400 にしても、フィールドの num は 20 のままです。
（int のような基本データ型は、値のコピーが渡されます。）
そのため、20 が表示されます。`
},
{
    id: 12,
    chapter: "ch13",
    contents:[
        { type: "text", value: "次のコードのうち、正常にコンパイルされるものを選びなさい。(2つ選択)" },
    ],
    options: `A. var a = {1.0, 2.0, 3.0, 4.0};
B. var b = new Double(1.0, 2.0, 3.0, 4.0);
C. var c = new Float[] {1.0F, 2.0F, 3.0F, 4.0F};
D. var d = new double[] {1.0, 2.0, 3.0, 4.0};
`,
    answer: "C、D",
    explanation: `A：× { } だけの初期化子では、何の型の配列なのか決められません。var と一緒には使えないので、コンパイルエラーになります。
B：× Double には、値を4つ受け取るコンストラクタはありません。
C：○ new Float[] と型を書いているので、var c は Float[] 型になります。
D：○ new double[] と型を書いているので、var d は double[] 型になります。`
},
{
    id: 13,
    chapter: "ch13",
    contents:[
        { type: "text", value: "次のプログラムの説明として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. package test;
2.
3. public class Sample {
4.     int a;
5.     private int b;
6.     protected int c;
7.     public int d;
8. }`},
        { 
            type: "code", 
            value: `1. import test.Sample;
2.
3. public class Main extends Sample {
4.     public static void main(String[] args) {
5.         Main s = new Main();
6.
7.     }
8. }`},
    ],
    options: `A. Mainクラスからはaとdの両方にアクセスできる
B. Mainクラスからはdのみアクセスできる
C. Mainクラスからはcとdの両方にアクセスできる
D. Mainクラスからはa、c、およびdにアクセスできる
`,
    answer: "C",
    explanation: `Main は Sample のサブクラスですが、別のパッケージにあります。

a（修飾子なし）：同じパッケージからしか使えないので、× です。
b（private）：Sample の中からしか使えないので、× です。
c（protected）：別パッケージでも、サブクラス（Main 型の参照）からなら使えるので、○ です。
d（public）：どこからでも使えるので、○ です。

そのため、アクセスできるのは c と d です。`
},
{
    id: 14,
    chapter: "ch13",
    contents:[
        { type: "text", value: "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. import java.util.Collection;
2.
3. public class A {
4.     private Collection collection;
5.     public void set(Collection collection) {
6.         this.collection = collection;
7.         System.out.println("A");
8.     }
9. }`},
        { 
            type: "code", 
            value: `1. import java.util.Collection;
2.
3. public class B extends A {
4.     public void set(Collection collection) {
5.         super.set(collection);
6.         System.out.println("B");
7.     }
8. }`},
        { 
            type: "code", 
            value: `1. import java.util.Collection;
2.
3. public class C extends B {
4.     @Override
5.     public void set(Collection collection) {
6.         super.super.set(collection);
7.         System.out.println("C");
8.     }
9. }`},
        { 
            type: "code", 
            value: `1. import java.util.List;
2.
3. public class Main {
4.     public static void main(String[] args) {
5.         new C().set(List.of(1, 2, 3));
6.     }
7. }`},
    ],
    options: `A. 「A」「B」「C」と表示される
B. 「A」「B」と表示される
C. 「A」と表示される
D. コンパイルエラーが発生する
E. 実行時に例外がスローされる
`,
    answer: "D",
    explanation: `super で呼び出せるのは、直接の親クラスだけです。
super.super.set() のように、親の親（A）のメソッドを直接呼ぶ書き方はできないため、C クラスの6行目でコンパイルエラーになります。

もし super.set(collection) と書いていれば、B → A の順に呼ばれ、「A」「B」「C」と表示されます。`
},
{
    id: 15,
    chapter: "ch13",
    contents:[
        { type: "text", value: "次のプログラムを確認してください。" },
        { 
            type: "code", 
            value: `1. public class A {
2.     private int num;
3.     public A(int num) {
4.         this.num = num;
5.     }
6. }`},
        { type: "text", value: "次のプログラムの空欄に入るコードとして、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. public class B extends A {
2.     private String val;
3.     public B(String val, int num) {
4.         □□□□□□
5.     }
6. }`},
    ],
    options: `A. this(num);
B. super(num);
C. this(val);
D. super(val);
E. super();
`,
    answer: "B",
    explanation: `A クラスには、引数が int のコンストラクタしかありません（引数なしのコンストラクタはありません）。
そのため、B のコンストラクタでは、super(num) で A(int num) を呼び出す必要があります。

A：× this(num) は B(int) を呼びますが、B にそのコンストラクタはありません。
C：× this(val) は B(String) を呼びますが、B にそのコンストラクタはありません。
D：× A には A(String) のコンストラクタがありません。
E：× A には引数なしのコンストラクタがありません。`
},
{
    id: 16,
    chapter: "ch13",
    contents:[
        { type: "text", value: "次のプログラムの説明として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  package ex16;
2.
3.  import java.util.*;
4.
5.  public class Sample {
6.      private List<String> list = List.of("A", "B", "C");
7.      public List<String> getList() {
8.          return list;
9.      }
10. }`},
        { 
            type: "code", 
            value: `1.  package ex16;
2.
3.  public class Main {
4.      public static void main(String[] args) {
5.          Sample s = new Sample();
6.          for (String str : s.getList()) {
7.              System.out.println(str);
8.          }
9.      }
10. }`},
    ],
    options: `A. 2つのクラスは同じパッケージに属するので、Mainクラスでjava.util.Listをインポートする必要はない
B. java.util.Listのみがインポートされる
C. コンパイルするには、Mainクラスでjava.util.Listをインポートしなければいけない
D. java.utilパッケージのすべてのクラスやインタフェースがSampleクラスにインポートされる
`,
    answer: "D",
    explanation: `import java.util.*; のように * を使うと、java.util パッケージのすべてのクラスやインタフェースがインポートされ、Sample クラスの中で使えるようになります。

A：× import は、ファイルごとに書くものです。同じパッケージでも、別のファイルの import は共有されません。Main で import が不要なのは、Main のコードに「List」という型名を書いていないからです。
B：× * を使っているので、List だけではなく、java.util のすべてのクラスやインタフェースがインポートされます。
C：× Main は getList() の戻り値を拡張 for 文で使っているだけで、List という型名は書いていません。そのため、インポートは不要です。`
},
{
    id: 17,
    chapter: "ch13",
    contents:[
        { type: "text", value: "次のコードのうち、正常にコンパイルされるものを選びなさい。(2つ選択)" },
    ],
    options: `A. int[] array; array = new int[] {};
B. int[] array2 = new int[3]; array2 = {1, 2, 3};
C. Double[] array3 = new Double[3] {};
D. int[] array4 = {array4[0], array4[1]};
E. Double[] array5 = {null, 1.0};
`,
    answer: "A、E",
    explanation: `A：○ new int[] {} で、要素数0の配列を作っています。宣言と代入を分けて書くこともできます。
B：× { } だけの初期化子は、宣言と同時にしか使えません。後から代入するときは new int[] {1, 2, 3} と書きます。
C：× 要素数 [3] と初期化子 { } を同時に書くことはできません。
D：× 自分自身（array4）をまだ作っている途中なのに、その要素を使おうとしているため、コンパイルエラーになります。
E：○ Double は参照型なので null を入れられます。1.0 は自動で Double に変換（オートボクシング）されます。`
},
{
    id: 18,
    chapter: "ch13",
    contents:[
        { type: "text", value: "次のプログラムを実行し、「A:B」と表示したい。Mainクラスの空欄に入るコードとして正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. public class Sample {
2.     static String header = "A:";
3.     private String value = "B";
4.     public static String getValue() {
5.         return new Sample().value;
6.     }
7. }`},
        { 
            type: "code", 
            value: `1. public class Main {
2.     public static void main(String[] args) {
3.         Sample s = new Sample();
4.         □□□□□□
5.     }
6. }`},
    ],
    options: `A. System.out.println(Sample.getValue() + s.header);
B. System.out.println(Sample.header + Sample.value);
C. System.out.println(new Sample().header + new Sample().value);
D. System.out.println(s.header + Sample.value);
E. System.out.println(Sample.header + Sample.getValue());
F. System.out.println(s.header + s.value);
`,
    answer: "E",
    explanation: `value は private なので、Main クラスから直接 .value と書くことはできません。
B・C・D・F は、どれも value に直接アクセスしているため、コンパイルエラーになります。（B と D は、static でない value を「クラス名.value」で呼んでいる点でもエラーです。）

E：○ header は static なので Sample.header で使えます。getValue() は public static なので、Sample.getValue() で "B" を取得できます。「A:B」と表示されます。
A：× 順番が逆なので、「BA:」と表示されます。`
},
{
    id: 19,
    chapter: "ch13",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. public class Main {
2.     public static void main(String[] args) {
3.         int a = 10;
4.         int b = 20;
5.         int c = b += a / 5;
6.         System.out.println(a + b + c);
7.     }
8. }`},
    ],
    options: `A. 52が表示される
B. 54が表示される
C. 38が表示される
D. 46が表示される
`,
    answer: "B",
    explanation: `5行目は、右から順番に処理されます。
① a / 5 = 2
② b += 2 → b は 22 になる（b = b + 2 と同じ）
③ 代入した結果の 22 が、c に入る

b += ... は、代入した後の値（22）を返すので、c も 22 になります。
6行目は 10 + 22 + 22 = 54 になります。

b も 22 に変わっていることを見落とすと、10 + 20 + 22 = 52（A）を選んでしまうので注意しましょう。`
},
{
    id: 20,
    chapter: "ch13",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  public class Main {
2.      public static void main(String[] args) {
3.          try {
4.              String[] array = new String[5];
5.              array[1] = "A";
6.              array[2] = "B";
7.              array[3] = "C";
8.              for (String str : array) {
9.                  System.out.println(str);
10.             }
11.         } catch (Exception e) {
12.             System.out.println("Error");
13.         }
14.     }
15. }`},
    ],
    options: `A. 「A」「B」「C」と表示される
B. 「null」「A」「B」「C」「null」と表示される
C. 「Error」と表示される
D. コンパイルエラーが発生する
`,
    answer: "B",
    explanation: `new String[5] で作った配列は、すべての要素の初期値が null です。
array[1]〜[3] に "A"、"B"、"C" を入れたので、array[0] と array[4] は null のままです。

println に null を渡しても例外にはならず、「null」と表示されます。
そのため、「null」「A」「B」「C」「null」と表示されます。`
},
{
    id: 21,
    chapter: "ch13",
    contents:[
        { type: "text", value: "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  public class Sample {
2.      private int num;
3.      private int test() {
4.          for (int i = 0; i < 3; i++) {
5.              num += 1;
6.          }
7.          return num;
8.      }
9.      public static void main(String[] args) {
10.         Sample s = new Sample();
11.         int num = s.test();
12.         s.test();
13.         System.out.println(num);
14.     }
15. }`},
    ],
    options: `A. 3が表示される
B. 6が表示される
C. 9が表示される
D. 実行時に例外がスローされる
`,
    answer: "A",
    explanation: `11行目：1回目の test() で、フィールドの num は 3 になり、3 が返されます。ローカル変数 num に 3 が入ります。
12行目：2回目の test() で、フィールドの num は 6 になりますが、戻り値はどこにも代入していません。
13行目：表示しているのはローカル変数の num なので、3 が表示されます。

フィールドの num とローカル変数の num は、名前が同じでも別の変数です。`
},
{
    id: 22,
    chapter: "ch13",
    contents:[
        { type: "text", value: "java.langパッケージを含むJava SEの基本的なAPIが提供されているモジュールとして正しいものを選びなさい。(1つ選択)" },
    ],
    options: `A. classes
B. jdk.base
C. java.se
D. java.base
`,
    answer: "D",
    explanation: `java.lang や java.util など、Java の基本的なパッケージは java.base モジュールにあります。
java.base は、すべてのモジュールが自動で読み込むので、requires を書く必要はありません。`
},
{
    id: 23,
    chapter: "ch13",
    contents:[
        { type: "text", value: "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. package ex23.a;
2.
3. public class A {
4.     public int num = 10;
5. }`},
        { 
            type: "code", 
            value: `1. package ex23.b;
2.
3. import ex23.a.A;
4.
5. public class B extends A {
6.     int num = 20;
7. }`},
        { 
            type: "code", 
            value: `1.  package ex23;
2.
3.  import ex23.a.A;
4.  import ex23.b.B;
5.
6.  public class Main {
7.      public static void main(String[] args) {
8.          A a = new B();
9.          System.out.println(a.num);
10.     }
11. }`},
    ],
    options: `A. Bクラスでコンパイルエラーが発生する
B. Mainクラスでコンパイルエラーが発生する
C. 10が表示される
D. 20が表示される
`,
    answer: "C",
    explanation: `B の num は、A の num を隠しているだけで、オーバーライドではありません。（フィールドはオーバーライドされません。）
フィールドは、変数の型で決まります。a の型は A なので、a.num は A の num（public）を指し、10 が表示されます。

B の num はアクセス修飾子なしですが、フィールドは隠すだけなので、アクセス範囲を狭めてもコンパイルエラーにはなりません。`
},
{
    id: 24,
    chapter: "ch13",
    contents:[
        { type: "text", value: "publicで修飾されたメソッドをオーバーライドするときに利用できるアクセス修飾子として、正しいものを選びなさい。(1つ選択)" },
    ],
    options: `A. public
B. public、protected
C. public、protected、デフォルト
D. 制限はない
`,
    answer: "A",
    explanation: `オーバーライドするときは、アクセス修飾子を親と同じか、より広くする必要があります。
広さの順番：public > protected > デフォルト（なし） > private
public より広い修飾子はないので、public しか使えません。`
},
{
    id: 25,
    chapter: "ch13",
    contents:[
        { type: "text", value: "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. package ex25.a;
2.
3. class Sample {
4.     public String value;
5.     public Sample(String value) {
6.         this.value = value;
7.     }
8. }`},
        { 
            type: "code", 
            value: `1. package ex25.b;
2.
3. import ex25.a.Sample;
4.
5. public class Main {
6.     public static void main(String[] args) {
7.         Sample s = new Sample("Hello Java");
8.         System.out.println(s.value);
9.     }
10. }`},
    ],
    options: `A. 「null」と表示される
B. 「Hello Java」と表示される
C. 何も表示されない
D. コンパイルエラーが発生する
E. 実行時に例外がスローされる
`,
    answer: "D",
    explanation: `Sample クラスには public が付いていません（class Sample）。
修飾子なしのクラスは、同じパッケージからしか使えません。
Main は別のパッケージ（ex25.b）にあるので、Sample をインポートすることも使うこともできず、コンパイルエラーになります。

コンストラクタやフィールドが public でも、クラス自体が見えなければ使えません。`
},
{
    id: 26,
    chapter: "ch13",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  public class Main {
2.      int num;
3.      private static void test() {
4.          num++;
5.          System.out.println(num);
6.      }
7.      public static void main(String[] args) {
8.          Main.test();
9.          Main.test();
10.     }
11. }`},
    ],
    options: `A. 「1」「2」と表示される
B. 1が2回表示される
C. testメソッドでコンパイルエラーが発生する
D. mainメソッドでコンパイルエラーが発生する
E. 実行時に例外がスローされる
`,
    answer: "C",
    explanation: `num は static が付いていない、インスタンスのフィールドです。
static メソッドは、インスタンスを作らなくても呼べるメソッドなので、「どのインスタンスの num か」が決まりません。
そのため、static メソッドの中から、インスタンスのフィールドを直接使うことはできず、test メソッドの4行目でコンパイルエラーになります。`
},
{
    id: 27,
    chapter: "ch13",
    contents:[
        { type: "text", value: "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. public class Sample {
2.     public static void main(String[] args) {
3.         String str = "abcde";
4.         str.replace('c', 'x');
5.         str.substring(2, 4);
6.         System.out.println(str);
7.     }
8. }`},
    ],
    options: `A. 「abxde」と表示される
B. 「abcde」と表示される
C. 「cde」と表示される
D. 「xde」と表示される
`,
    answer: "B",
    explanation: `String はイミュータブル（変更できない）です。
replace や substring は、元の文字列を変更せず、新しい文字列を作って返します。
4行目と5行目では、戻り値をどこにも代入していないので、str は "abcde" のままです。

もし str = str.replace('c', 'x'); のように代入していれば、str は変わります。`
},
{
    id: 28,
    chapter: "ch13",
    contents:[
        { type: "text", value: "次のプログラムを実行して、1、2、3と順に表示したい。空欄に入るコードとして、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. import java.util.List;
2.
3. public class Main {
4.     public static void main(String[] args) {
5.         List<Integer> list = List.of(1, 2, 3);
6.         □□□□□□
7.     }
8. }`},
    ],
    options: `A. list.forEach(() -> System.out.println(x));
B. list.forEach((x) -> System.out.println(x));
C. list.forEach((x) -> { return x; });
D. list.forEach(list);
`,
    answer: "B",
    explanation: `forEach は、要素を1つ受け取って処理する Consumer を引数にとります。Consumer は「受け取るだけで、何も返さない」ラムダ式です。

A：× 引数がない () になっているので、要素を受け取れません。x も定義されていません。
B：○ 要素を x で受け取り、表示しています。
C：× Consumer は何も返さないので、return x; と値を返すとコンパイルエラーになります。
D：× List は Consumer ではないので、forEach に渡せません。`
},
{
    id: 29,
    chapter: "ch13",
    contents:[
        { type: "text", value: "次のプログラムの説明として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  public class Sample {
2.      private final int num;
3.      public Sample(String str) {
4.          this(Integer.parseInt(str));
5.      }
6.      public Sample(int num) {
7.          this.num = num;
8.      }
9.      public Sample() {}
10.     public int getNum() {
11.         return this.num;
12.     }
13. }`},
    ],
    options: `A. 2行目でコンパイルエラーが発生する
B. 4行目でコンパイルエラーが発生する
C. 6行目でコンパイルエラーが発生する
D. 9行目でコンパイルエラーが発生する
`,
    answer: "D",
    explanation: `final のフィールドは、宣言時かコンストラクタで、必ず1回だけ値を入れなければいけません。

3行目のコンストラクタ：this(...) で6行目のコンストラクタを呼ぶので、num に値が入ります。○
6行目のコンストラクタ：this.num = num で値を入れています。○
9行目のコンストラクタ：num に値を入れていません。×

そのため、9行目でコンパイルエラーになります。`
},
{
    id: 30,
    chapter: "ch13",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. interface Function {
2.     void process();
3. }`},
        { 
            type: "code", 
            value: `1. class Sample implements Function {
2.     protected void process() {
3.         System.out.println("A");
4.     }
5. }`},
        { 
            type: "code", 
            value: `1.  public class Main extends Sample {
2.      public void process() {
3.          System.out.println("B");
4.      }
5.      public static void main(String[] args) {
6.          Sample s = new Main();
7.          Sample s2 = new Sample();
8.          test(s);
9.          test(s2);
10.     }
11.     public static void test(Function f) {
12.         f.process();
13.     }
14. }`},
    ],
    options: `A. 「A」「A」と表示される
B. 「B」「A」と表示される
C. Sampleクラスでコンパイルエラーが発生する
D. Mainクラスでコンパイルエラーが発生する
E. SampleクラスとMainクラスの両方でコンパイルエラーが発生する
`,
    answer: "C",
    explanation: `インタフェースの抽象メソッドは、自動的に public になります。
Sample は process() を protected で実装していますが、public より狭いため、コンパイルエラーになります。

Main の process() は public なので、Sample の protected より広く、問題ありません。
そのため、コンパイルエラーになるのは Sample クラスだけです。`
},
{
    id: 31,
    chapter: "ch13",
    contents:[
        { type: "text", value: "次のプログラムを確認し、Bクラスの空欄に入るコードとして、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. import java.util.Collection;
2.
3. public class A {
4.     private Collection collection;
5.     public void set(Collection collection) {
6.         this.collection = collection;
7.     }
8. }`},
        { 
            type: "code", 
            value: `1. import java.util.Map;
2.
3. public class B extends A {
4.     public void set(Map<String, String> map) {
5.         □□□□□□
6.     }
7. }`},
    ],
    options: `A. set(map.values());
B. super.set(List<String> map);
C. set(super.map);
D. map.forEach((k, v) -> set(v));
`,
    answer: "A",
    explanation: `B の set(Map) は、A の set(Collection) とは引数が違うので、オーバーロードです。B には両方の set があります。

A：○ map.values() は、Map の値をまとめた Collection を返します。引数が Collection なので、A の set(Collection) が呼ばれます。
B：× メソッドを呼ぶときに、引数に型（List<String>）を書くことはできません。
C：× A に map というフィールドはありません。
D：× v は String です。set(String) というメソッドはないので、コンパイルエラーになります。`
},
{
    id: 32,
    chapter: "ch13",
    contents:[
        { type: "text", value: "次の説明のうち、正しいものを選びなさい。(1つ選択)" },
    ],
    options: `A. Javaでは、クラスとインタフェースは多重継承できない
B. インタフェースで、抽象メソッドをオーバーライドして実装を提供できる
C. 抽象メソッドをオーバーライドした抽象メソッドでは、戻り値型を変更することはできない
D. インタフェースを継承したインタフェースでは、抽象メソッドの実装を提供しなければならない
`,
    answer: "B",
    explanation: `A：× クラスは多重継承できませんが、インタフェースは複数のインタフェースを継承（extends）できます。
B：○ 親インタフェースの抽象メソッドを、子インタフェースで default メソッドとしてオーバーライドし、処理を書くことができます。
C：× 抽象メソッド同士でも、戻り値をサブクラスの型に変えてオーバーライドできます（共変戻り値）。
D：× インタフェースを継承したインタフェースは、抽象メソッドをそのまま引き継げます。実装するのは、最終的にそれを implements するクラスです。`
},
{
    id: 33,
    chapter: "ch13",
    contents:[
        { type: "text", value: "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  public class Sample {
2.      public void test(Object[] val) {
3.          System.out.println("A");
4.      }
5.      public void test(long[] val) {
6.          System.out.println("B");
7.      }
8.      public void test(Object val) {
9.          System.out.println("C");
10.     }
11. }`},
        { 
            type: "code", 
            value: `1. public class Main {
2.     public static void main(String[] args) {
3.         new Sample().test(new int[3]);
4.     }
5. }`},
    ],
    options: `A. Aが表示される
B. Bが表示される
C. Cが表示される
D. Sampleクラスでコンパイルエラーが発生する
E. Mainクラスでコンパイルエラーが発生する
`,
    answer: "C",
    explanation: `int[] をどのメソッドで受け取れるか考えます。

Object[]：× Object[] に入れられるのは、参照型の配列だけです。int は基本データ型なので、int[] は Object[] になれません。
long[]：× int は long に自動で変換できますが、配列の int[] は long[] に変換できません。
Object：○ 配列自体はオブジェクトなので、int[] は Object として受け取れます。

そのため、test(Object val) が呼ばれ、「C」が表示されます。`
},
{
    id: 34,
    chapter: "ch13",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  public class Main {
2.      public static void main(String[] args) {
3.          int[][] array = new int[2][4];
4.          array[0] = new int[]{1, 2, 3, 4};
5.          array[1] = new int[]{1, 2};
6.          for (int[] a : array) {
7.              for (int b : a) {
8.                  System.out.print(b);
9.              }
10.             System.out.println();
11.         }
12.     }
13. }`},
    ],
    options: `A. 「1234」「12」と表示される
B. 「12」「12」と表示される
C. 「12」「1200」と表示される
D. コンパイルエラーが発生する
E. 実行時に例外がスローされる
`,
    answer: "A",
    explanation: `3行目で長さ4の配列を2つ作っていますが、4行目と5行目で、それぞれ新しい配列に置き換えています。
array[1] は長さ4から長さ2の配列 {1, 2} に置き換わるので、「1200」ではなく「12」と表示されます。

2次元配列の中の配列は、後から別の長さの配列に置き換えることができます。`
},
{
    id: 35,
    chapter: "ch13",
    contents:[
        { type: "text", value: "次の説明のうち、もっとも適切なものを選びなさい。(1つ選択)" },
    ],
    options: `A. Javaの実行環境は、異なるプログラミング言語のコンパイラによってコンパイルされた実行可能ファイルも処理できる
B. コンパイラはリフレクションを使い、メソッドがターゲットプラットフォームのリソースによってサポートされているかどうかをテストする
C. コンパイラは、特定のプラットフォームで実行するためにクラスを前処理する
D. 実行時に、クラスは必要に応じてロードされる
`,
    answer: "D",
    explanation: `A：× JVM が実行できるのはバイトコード（.class ファイル）です。ほかの言語の実行可能ファイル（.exe など）は実行できません。
B：× コンパイラはそのようなテストをしません。
C：× コンパイラは、特定のプラットフォーム（OS）に依存しないバイトコードを作ります。そのため、同じ .class ファイルがどの OS の JVM でも動きます。
D：○ JVM は、すべてのクラスを最初に読み込むのではなく、必要になったときに読み込みます。`
},
{
    id: 36,
    chapter: "ch13",
    contents:[
        { type: "text", value: "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. import java.util.function.Consumer;
2.
3. public class Main {
4.     public static void main(String[] args) {
5.         final String val = "Hello, Lambda";
6.         Consumer<String> func = (val) -> System.out.println(val);
7.         func.accept("Hello, Java");
8.     }
9. }`},
    ],
    options: `A. 「Hello, Lambda」と表示される
B. 「Hello, Java」と表示される
C. 何も表示されない
D. コンパイルエラーが発生する
E. 実行時に例外がスローされる
`,
    answer: "D",
    explanation: `ラムダ式の引数の名前は、同じメソッドの中にあるローカル変数と同じ名前にできません。
5行目に val というローカル変数があるのに、6行目のラムダ式の引数も val にしているため、コンパイルエラーになります。

引数を s などの別の名前にすれば、「Hello, Java」と表示されます。`
},
{
    id: 37,
    chapter: "ch13",
    contents:[
        { type: "text", value: "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. public class Main {
2.     public static void main(String[] args) {
3.         String str;
4.         test(str);
5.     }
6.     private static void test(String str) {
7.         System.out.println(str);
8.     }
9. }`},
    ],
    options: `A. 「null」と表示される
B. 何も表示されない
C. コンパイルエラーが発生する
D. 実行時に例外がスローされる
`,
    answer: "C",
    explanation: `ローカル変数は、初期値が自動で入りません。
3行目の str は宣言しただけで値が入っていないので、4行目で使うとコンパイルエラーになります。

フィールドなら初期値 null が自動で入りますが、ローカル変数は自分で値を入れる必要があります。`
},
{
    id: 38,
    chapter: "ch13",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. public class Main {
2.     public static void main(String[] args) {
3.         int result = 30 - 12 / (2 * 5) + 1;
4.         System.out.println(result);
5.     }
6. }`},
    ],
    options: `A. 2が表示される
B. 3が表示される
C. 28が表示される
D. 29が表示される
E. 30が表示される
`,
    answer: "E",
    explanation: `計算の順番は、① カッコの中 → ② * と / → ③ + と - （左から順番）です。
① (2 * 5) = 10
② 12 / 10 = 1（int 同士の割り算なので、小数点以下は切り捨て）
③ 30 - 1 + 1 = 30

12 / 10 を 1.2 と考えると 29.8 になり、29 を選んでしまうので注意しましょう。`
},
{
    id: 39,
    chapter: "ch13",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  public class Sample {
2.      public static void main(String[] args) {
3.          int[] array = {1, 2, 3, 4, 5};
4.          int key = 3;
5.          int cnt = 0;
6.          for (int i : array) {
7.              if (i != key) {
8.                  continue;
9.                  cnt++;
10.             }
11.         }
12.         System.out.println(cnt);
13.     }
14. }`},
    ],
    options: `A. 3が表示される
B. 2が表示される
C. 1が表示される
D. コンパイルエラーが発生する
`,
    answer: "D",
    explanation: `continue を実行すると、その後ろの処理は飛ばされて、次の周に進みます。
9行目の cnt++ は、同じブロックの中で continue の直後にあるため、絶対に実行されません。
Java では、絶対に実行されない文（到達不能コード）があるとコンパイルエラーになります。

break、return、throw の直後に処理を書いた場合も、同じくコンパイルエラーになります。`
},
{
    id: 40,
    chapter: "ch13",
    contents:[
        { type: "text", value: "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. public class Main {
2.     public static void main(String[] args) {
3.         int num = 0;
4.         System.out.println(num++ + num + "," + ++num + num);
5.     }
6. }`},
    ],
    options: `A. 「1,22」と表示される
B. 「2,22」と表示される
C. 「2,4」と表示される
D. コンパイルエラーが発生する
`,
    answer: "A",
    explanation: `左から順番に計算します。最初、num は 0 です。
① num++：0 を使ってから、num を 1 にする → 0
② + num：num は 1 → 0 + 1 = 1（ここまでは数値の足し算）
③ + ","：文字列と連結 → "1,"
④ + ++num：num を 2 にしてから使う → "1,2"
⑤ + num：num は 2 → "1,22"

③で文字列になった後は、+ はすべて文字列の連結になります。そのため、④と⑤は足し算（2 + 2 = 4）ではなく、「2」「2」と並びます。`
},
{
    id: 41,
    chapter: "ch13",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  public class Main {
2.      public static void main(String[] args) {
3.          String[] array = {"A", "B", "C", "D", "E"};
4.          for (String str : array) {
5.              if ("B".equals(str)) {
6.                  continue;
7.              }
8.              System.out.println(str);
9.              if ("C".equals(str)) {
10.                 break;
11.             }
12.         }
13.     }
14. }`},
    ],
    options: `A. 「A」「C」と表示される
B. 「A」「B」「C」と表示される
C. 「C」「D」と表示される
D. 「C」と表示される
E. コンパイルエラーが発生する
`,
    answer: "A",
    explanation: `"A"：continue されないので表示されます。"C" ではないので、ループを続けます。
"B"：continue で表示を飛ばし、次の要素に進みます。
"C"：表示された後、break でループを抜けます。

そのため、「A」「C」と表示されます。`
},
{
    id: 42,
    chapter: "ch13",
    contents:[
        { type: "text", value: "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. public class Sample implements AutoCloseable {
2.     @Override
3.     public void close() throws Exception {
4.         System.out.println("C");
5.     }
6. }`},
        { 
            type: "code", 
            value: `1.  public class Main {
2.      public static void main(String[] args) {
3.          try (Sample s = new Sample()) {
4.              throw new Exception();
5.          } catch (Exception e) {
6.              System.out.println("A");
7.          } finally {
8.              System.out.println("B");
9.          }
10.     }
11. }`},
    ],
    options: `A. 「A」「B」「C」と表示される
B. 「A」「C」「B」と表示される
C. 「C」「A」「B」と表示される
D. コンパイルエラーが発生する
`,
    answer: "C",
    explanation: `try-with-resources では、try ブロックが終わると（例外が発生した場合も）、catch や finally よりも先に、リソースの close() が自動で呼ばれます。

① 4行目で例外が発生する
② close() が呼ばれ「C」
③ catch で「A」
④ finally で「B」

close() の throws Exception も、catch (Exception e) で処理されるので、コンパイルエラーにはなりません。`
},
{
    id: 43,
    chapter: "ch13",
    contents:[
        { type: "text", value: "モジュールシステムに関する説明として、正しいものを選びなさい。(2つ選択)" },
    ],
    options: `A. module-info.javaは、module-path内のどこにでも配置できる
B. java.baseをエクスポートすると、すべてのコアパッケージがエクスポートされる
C. 利用するモジュールは、module-info.java内で宣言されていなければならない
D. デフォルトで、モジュールは、モジュールが動作するディレクトリ内にはアクセスができる
E. module-info.javaは空にはできない
`,
    answer: "B、C",
    explanation: `A：× module-info.java は、モジュールのルート（いちばん上のフォルダ）に置く必要があります。
B：○ java.base モジュールは、java.lang や java.util など、Java の中心的なパッケージ（コアパッケージ）をすべてエクスポートしています。
C：○ ほかのモジュールを使うには、module-info.java に requires で宣言する必要があります。（java.base だけは自動で読み込まれます。）
D：× 同じディレクトリにあっても、requires と exports がなければ、ほかのモジュールにはアクセスできません。
E：× module a {} のように、中身が空のモジュール宣言も書けます。`
},
{
    id: 44,
    chapter: "ch13",
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
            value: `1. public class Sample {
2.     public static void main(String[] args) {
3.         new C();
4.     }
5. }`},
    ],
    options: `A. 「ABC」と表示される
B. 「C」と表示される
C. 「CBA」と表示される
D. コンパイルエラーが発生する
`,
    answer: "A",
    explanation: `コンストラクタの1行目には、自動で super(); が入ります。
new C() → C() の super() で B() へ → B() の super() で A() へ
親のコンストラクタの処理が先に終わってから、子のコンストラクタの処理が実行されます。
そのため、A → B → C の順に表示され、「ABC」になります。`
},
{
    id: 45,
    chapter: "ch13",
    contents:[
        { type: "text", value: "次のプログラムの「// insert code here」に入るコードとして、正しいものを選びなさい。(3つ選択)" },
        { 
            type: "code", 
            value: `public abstract class Item {
    int num;
    // insert code here
}`},
    ],
    options: [
        { label: "A", code: `public void print();` },
        { label: "B", code: `public int calculate() { return num * 2; }` },
        { label: "C", code: `public abstract int getNum() {
    return num;
}` },
        { label: "D", code: `public abstract int test();` },
        { label: "E", code: `public static void sample() {
    // some codes
}` },
    ],
    answer: "B、D、E",
    explanation: `抽象クラスには、抽象メソッドと、処理を書いた普通のメソッドの両方を書けます。

A：× 処理（{ }）がないメソッドには、abstract が必要です。
B：○ 処理を書いた普通のメソッドです。
C：× abstract を付けたメソッドには、処理（{ }）を書けません。
D：○ abstract を付け、処理を書いていない抽象メソッドです。
E：○ 抽象クラスにも static メソッドを書けます。`
},
{
    id: 46,
    chapter: "ch13",
    contents:[
        { type: "text", value: "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. public class Sample {
2.     public static void main(String[] args) {
3.         int num = 2;
4.         int result = (int) Math.round(Math.pow(3.1, num));
5.         System.out.println(result);
6.     }
7. }`},
    ],
    options: `A. 8が表示される
B. 9が表示される
C. 10が表示される
D. 3が表示される
E. コンパイルエラーが発生する
F. 実行時に例外がスローされる
`,
    answer: "C",
    explanation: `Math.pow(3.1, 2) は 3.1 の2乗で、9.61（double）になります。
Math.round(9.61) は四捨五入して 10 になります（double を渡すと long が返ります）。
(int) で long を int にキャストしているので、コンパイルエラーにもなりません。
そのため、10 が表示されます。`
},
{
    id: 47,
    chapter: "ch13",
    contents:[
        { type: "text", value: "次のAクラスを継承したサブクラスに定義できるメソッドとして、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. public class A {
2.     public Number test() {
3.         return 100;
4.     }
5. }`},
    ],
    options: [
        { label: "A", code: `@Override public Integer test() { return 0; }` },
        { label: "B", code: `@Override public Number test(int num) { return num; }` },
        { label: "C", code: `@Override public void test() {
    // do something
}` },
        { label: "D", code: `public Number test() throws Exception { return 0; }` },
    ],
    answer: "A",
    explanation: `A：○ Integer は Number のサブクラスです。オーバーライドするときは、戻り値をサブクラスの型に変更できます（共変戻り値）。
B：× 引数が違うので、オーバーライドではなくオーバーロードです。@Override が付いているので、コンパイルエラーになります。
C：× 戻り値を void に変更することはできません。
D：× 引数も名前も同じなのでオーバーライドになりますが、親のメソッドにない検査例外（Exception）を throws に追加することはできません。`
},
{
    id: 48,
    chapter: "ch13",
    contents:[
        { type: "text", value: "次のプログラムを実行し、「sample」と表示したい。正しいコマンドを選びなさい。(2つ選択)" },
        { 
            type: "code", 
            value: `1. public class Sample {
2.     public static void main(String[] args) {
3.         System.out.println("sample");
4.     }
5. }`},
    ],
    options: [
        { label: "A", code: `java Sample.class` },
        { label: "B", code: `javac Sample.java
java Sample.class` },
        { label: "C", code: `java Sample` },
        { label: "D", code: `javac Sample.java
java Sample` },
        { label: "E", code: `java Sample.java` },
    ],
    answer: "D、E",
    explanation: `D：○ javac でコンパイルして Sample.class を作り、java コマンドにクラス名（Sample）を指定して実行します。
E：○ java コマンドにソースファイル（.java）を直接指定すると、コンパイルと実行をまとめて行えます（ソースファイルモード）。

A・B：× java コマンドに指定するのは、ファイル名（Sample.class）ではなくクラス名（Sample）です。
C：× コンパイルしていないので、Sample.class がなく実行できません。`
},
{
    id: 49,
    chapter: "ch13",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  public class Sample {
2.      int a, b;
3.      public Sample(int a, int b) {
4.          init(a, b);
5.      }
6.      public void init(int a, int b) {
7.          this.a = a * a;
8.          this.b = b * b;
9.      }
10.     public static void main(String[] args) {
11.         int a = 2, b = 3;
12.         Sample s = new Sample(a, b);
13.         System.out.println(a + "," + b);
14.     }
15. }`},
    ],
    options: `A. 「4,9」と表示される
B. 「0,0」と表示される
C. 「2,3」と表示される
D. コンパイルエラーが発生する
`,
    answer: "C",
    explanation: `コンストラクタから init を呼び、フィールドの a と b には 4 と 9 が入ります。

しかし、13行目で表示している a と b は、main メソッドのローカル変数（11行目）です。
ローカル変数は 2 と 3 のまま変わっていないので、「2,3」と表示されます。

フィールドの値（4 と 9）を表示したい場合は、s.a と s.b と書く必要があります。
main は static メソッドなので、a と書いても、フィールドではなくローカル変数を指します。`
},
{
    id: 50,
    chapter: "ch13",
    contents:[
        { type: "text", value: "次のプログラムのコンパイルエラーを修正する方法として、正しいものを選びなさい。(2つ選択)" },
        { 
            type: "code", 
            value: `1. abstract class Sample {
2.     protected void doProcess() {}
3.     abstract void doTest();
4. }`},
        { 
            type: "code", 
            value: `1. public class Test extends Sample {
2.     void doProcess() {}
3.     protected void doTest() {}
4. }`},
    ],
    options: `A. Sampleクラスの2行目のメソッドをpublicにする
B. Sampleクラスの3行目のメソッドをpublicにする
C. Testクラスの2行目のメソッドをpublicにする
D. Testクラスの2行目のメソッドをprotectedにする
E. Testクラスの3行目のメソッドをpublicにする
`,
    answer: "C、D",
    explanation: `オーバーライドするときは、アクセス修飾子を親と同じか、より広くする必要があります。
広さの順番：public > protected > なし > private

Test の2行目：親の doProcess() は protected なのに、修飾子なし（より狭い）でオーバーライドしているため、コンパイルエラーです。
Test の3行目：親の doTest() は修飾子なしで、protected（より広い）でオーバーライドしているので、問題ありません。

C：○ public にすると、protected より広くなるので OK です。
D：○ protected にすると、親と同じになるので OK です。
A：× 親を public にすると、子の修飾子なしとの差がさらに広がるだけで、エラーは直りません。
B：× 親の doTest() を public にすると、子の protected が狭くなり、新しいエラーが発生します。
E：× 3行目はもともと問題ありません。`
},
{
    id: 51,
    chapter: "ch13",
    contents:[
        { type: "text", value: "次のコードに記述されている変数valのデータ型として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `var list = new ArrayList<>();
list.forEach(val -> System.out.println(val));`},
    ],
    options: `A. String
B. ArrayList
C. Object
D. var
`,
    answer: "C",
    explanation: `var と <>（ダイヤモンド演算子）を一緒に使うと、型を推論する手がかりがないため、ArrayList<Object> になります。
list の要素の型は Object なので、forEach で受け取る val も Object 型になります。`
},
{
    id: 52,
    chapter: "ch13",
    contents:[
        { type: "text", value: "次のプログラムを実行して「0」と表示したい。Mainクラスの空欄に入るコードとして、正しいものを選びなさい。(3つ選択)" },
        { 
            type: "code", 
            value: `1.  class Test {
2.      public int num;
3.      public Test(int num) {
4.          this.num = num;
5.      }
6.      public int getNum() {
7.          return num;
8.      }
9.      public void modify(int x) {
10.         num += x;
11.     }
12. }`},
        { 
            type: "code", 
            value: `1. public class Main {
2.     public static void main(String[] args) {
3.         Test t = new Test(100);
4.         □□□□□□
5.         System.out.println(t.getNum());
6.     }
7. }`},
    ],
    options: `A. this.num = 0;
B. num = 0;
C. t(0);
D. t.num = 0;
E. t.getNum() = 0;
F. t.modify(0);
G. t.modify(-t.num);
H. t.modify(-t.getNum());
`,
    answer: "D、G、H",
    explanation: `最初、t.num は 100 です。

D：○ num は public なので、t.num = 0 で直接 0 にできます。
G：○ -t.num は -100 です。modify で num += -100 となり、0 になります。
H：○ -t.getNum() も -100 なので、G と同じく 0 になります。

A：× main は static メソッドなので、this は使えません。
B：× main の中に num という変数はありません。
C：× t はメソッドではないので、t(0) とは書けません。
E：× メソッドの戻り値に代入することはできません。
F：× num += 0 なので、100 のままです。`
},
{
    id: 53,
    chapter: "ch13",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  public class Main {
2.      private String val;
3.      private int num;
4.      public Main(int num) {
5.          this.num = num;
6.      }
7.      public Main() {
8.          this.val = "test";
9.          this.num = 10;
10.     }
11.     public static void main(String[] args) {
12.         Main m = new Main(20);
13.         System.out.println(m.val + "," + m.num);
14.     }
15. }`},
    ],
    options: `A. 「null,20」と表示される
B. 「test,20」と表示される
C. コンパイルエラーが発生する
D. 実行時に例外がスローされる
`,
    answer: "A",
    explanation: `new Main(20) では、引数が int のコンストラクタ（4行目）だけが呼ばれます。
引数なしのコンストラクタ（7行目）は呼ばれないので、val には何も入らず、初期値の null のままです。
num には 20 が入るので、「null,20」と表示されます。

main は Main クラスの中にあるので、private のフィールドにもアクセスできます。`
},
{
    id: 54,
    chapter: "ch13",
    contents:[
        { type: "text", value: "次の中から、インタフェースに記述できるコードを選びなさい。(2つ選択)" },
    ],
    options: [
        { label: "A", code: `public String methodA();` },
        { label: "B", code: `final void methodB();` },
        { label: "C", code: `public void methodC() {
    System.out.println("C");
}` },
        { label: "D", code: `public int d;` },
        { label: "E", code: `public abstract void methodE();` },
        { label: "F", code: `private abstract void methodF();` },
        { label: "G", code: `final void methodG() {
    System.out.println("G");
}` },
    ],
    answer: "A、E",
    explanation: `A：○ 抽象メソッドです。インタフェースでは abstract を省略できます。
E：○ abstract を明示的に書いた抽象メソッドです。

B・G：× final を付けると、実装（オーバーライド）できなくなるので、インタフェースのメソッドには付けられません。
C：× インタフェースで処理を書くには、default か static（または private）が必要です。
D：× インタフェースのフィールドは、自動的に public static final（定数）になります。定数には、宣言と同時に値を入れる必要があります。
F：× private メソッドは処理を書く必要があり、abstract と一緒には使えません。`
},
{
    id: 55,
    chapter: "ch13",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. interface A {
2.     public void sample();
3. }`},
        { 
            type: "code", 
            value: `1. interface B extends A {
2.     public void test();
3. }`},
        { 
            type: "code", 
            value: `1. abstract class C implements B {
2.     public void test() {
3.         System.out.println("A");
4.     }
5. }`},
        { 
            type: "code", 
            value: `1. class D extends C {
2.     public void test() {
3.         System.out.println("B");
4.     }
5. }`},
        { 
            type: "code", 
            value: `1. public class Main {
2.     public static void main(String[] args) {
3.         C c = new D();
4.         c.test();
5.     }
6. }`},
    ],
    options: `A. 「A」と表示される
B. 「B」と表示される
C. Bインタフェースでコンパイルエラーが発生する
D. Cクラスでコンパイルエラーが発生する
E. Dクラスでコンパイルエラーが発生する
`,
    answer: "E",
    explanation: `D は、A インタフェースの sample() と、B インタフェースの test() の両方を実装しなければいけません。

C：抽象クラスなので、sample() を実装しなくても問題ありません。
D：抽象クラスではない（具象クラス）ので、まだ実装されていない sample() を実装する必要があります。しかし、D は test() しか実装していないため、コンパイルエラーになります。`
},
{
    id: 56,
    chapter: "ch13",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. public class Main {
2.     public static void main(String[] args) {
3.         int a = 4;
4.         int b = 8;
5.         int c = b += a / 2;
6.         System.out.println(a + "," + b + "," + c);
7.     }
8. }`},
    ],
    options: `A. 「4,10,8」と表示される
B. 「4,10,10」と表示される
C. 「4,10,6」と表示される
D. 「4,12,6」と表示される
`,
    answer: "B",
    explanation: `5行目は、右から順番に処理されます。
① a / 2 = 2
② b += 2 → b は 10 になる
③ 代入した結果の 10 が、c に入る

a は変わらず 4 なので、「4,10,10」と表示されます。`
},
{
    id: 57,
    chapter: "ch13",
    contents:[
        { type: "text", value: "次のプログラムの空欄に入るコードとして、正しいものを選びなさい。なお、ex57.b.Sampleクラスのパスは次のとおりとする。(1つ選択)" },
        { type: "code", value: `/bin/ex57/b/Sample.class` },
        { 
            type: "code", 
            value: `1. package ex57.a;
2.
3. □□□□□□
4.
5. public class Main {
6.     public static void main(String[] args) {
7.         Sample s = new Sample();
8.     }
9. }`},
    ],
    options: `A. import ex57.b.Sample;
B. import ex57.b;
C. import bin.ex57.b.Sample;
D. import bin.ex57.b.*;
`,
    answer: "A",
    explanation: `import には「パッケージ名.クラス名」を書きます。
Sample クラスのパッケージは ex57.b なので、import ex57.b.Sample; と書きます。

B：× パッケージ名だけでは import できません。パッケージ全体なら import ex57.b.*; と書きます。
C・D：× bin はクラスファイルを置いているフォルダの名前で、パッケージ名ではありません。`
},
{
    id: 58,
    chapter: "ch13",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  public class Sample {
2.      public static void main(String[] args) {
3.          String a = "A";
4.          a = a.concat("B");
5.          String b = "C";
6.          a = a.concat(b);
7.          a.replace('C', 'D');
8.          a = a.concat(b);
9.          System.out.println(a);
10.     }
11. }`},
    ],
    options: `A. 「ABCD」と表示される
B. 「ACD」と表示される
C. 「ABCC」と表示される
D. 「ABD」と表示される
E. 「ABDC」と表示される
`,
    answer: "C",
    explanation: `String はイミュータブル（変更できない）なので、戻り値を代入したときだけ a が変わります。

4行目：a = "AB"
6行目：a = "ABC"
7行目：replace の結果を代入していないので、a は "ABC" のまま
8行目：a = "ABCC"

そのため、「ABCC」と表示されます。`
},
{
    id: 59,
    chapter: "ch13",
    contents:[
        { type: "text", value: "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. public class Sample {
2.     public static void main(String[] args) {
3.         int num = 10;
4.         Integer val = Integer.valueOf(10);
5.         System.out.println(num == val);
6.     }
7. }`},
    ],
    options: `A. trueが表示される
B. falseが表示される
C. コンパイルエラーが発生する
D. 実行時に例外がスローされる
`,
    answer: "A",
    explanation: `int と Integer を == で比べると、Integer が自動で int に変換（アンボクシング）されます。
数値同士の比較になり、10 == 10 なので true が表示されます。`
},
{
    id: 60,
    chapter: "ch13",
    contents:[
        { type: "text", value: "Bクラス内からAクラスにアクセスするコードとして、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `package sample;

public class A {
    // ...
}`},
        { 
            type: "code", 
            value: `package sample.sub;

public class B {
    // ...
}`},
    ],
    options: `A. String val = sample.A.getVal();
B. import sample.*;
C. import sample.sub.*;
D. String val = A.getVal();
`,
    answer: "B",
    explanation: `sample と sample.sub は、名前が似ていますが、別のパッケージです。（親子関係はありません。）
そのため、B から A を使うには、sample パッケージを import する必要があります。

B：○ import sample.*; で、sample パッケージのクラスを使えるようになります。
C：× B 自身のパッケージを import しても、A は使えません。
A・D：× A クラスに getVal() メソッドは定義されていません。また D は、import していないので A を見つけられません。`
},
{
    id: 61,
    chapter: "ch13",
    contents:[
        { type: "text", value: "次のプログラムをコンパイルし、以下に示すコマンドで実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { type: "code", value: `> java Sample a b c` },
        { 
            type: "code", 
            value: `1.  public class Sample {
2.      public static void main(String[] args) {
3.          for (int i = 0; i < args.length; i++) {
4.              System.out.println(args[i]);
5.              switch (args[i]) {
6.                  case "a":
7.                      continue;
8.                  case "b":
9.                      i--;
10.                     continue;
11.                 default:
12.                     break;
13.             }
14.         }
15.     }
16. }`},
    ],
    options: `A. 「a」「b」「c」と表示される
B. 無限ループになる
C. コンパイルエラーが発生する
D. 実行時に例外がスローされる
`,
    answer: "B",
    explanation: `i = 0：「a」を表示し、continue で次の周へ進みます。
i = 1：「b」を表示します。i-- で i が 0 に戻り、continue で i++ が実行されて、また i = 1 になります。
そのため、「b」の処理を永遠にくり返し、無限ループになります。

switch の中の continue は、switch ではなく、外側の for 文の次の周に進むという意味です。`
},
{
    id: 62,
    chapter: "ch13",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. public class Sample {
2.     public static void main(String[] args) {
3.         Test a = new Test();
4.         Test b = new Test();
5.         a.sample();
6.         b.sample();
7.         System.out.println(a.value + "," + b.value);
8.     }
9. }`},
        { 
            type: "code", 
            value: `1.  class Test {
2.      static int value = 0;
3.      int count = 0;
4.      public void sample() {
5.          while (count < 5) {
6.              count++;
7.              value++;
8.          }
9.      }
10. }`},
    ],
    options: `A. 「10,10」と表示される
B. 「5,5」と表示される
C. 「5,10」と表示される
D. コンパイルエラーが発生する
`,
    answer: "A",
    explanation: `count はインスタンスごとに別々ですが、value は static なので、すべてのインスタンスで共有されます。

a.sample()：a の count が 0 → 5 になり、value も 0 → 5 になります。
b.sample()：b の count は別なので 0 → 5 になり、共有の value は 5 → 10 になります。

a.value も b.value も同じ1つの value を指しているので、「10,10」と表示されます。`
},
{
    id: 63,
    chapter: "ch13",
    contents:[
        { type: "text", value: "次のプログラムを実行して「54321」と表示したい。空欄に入るコードとして正しいものを選びなさい。(2つ選択)" },
        { 
            type: "code", 
            value: `1. public class Main {
2.     public static void main(String[] args) {
3.         int[] array = {1, 2, 3, 4, 5};
4.         int x = array.length;
5.         □□□□□□
6.     }
7. }`},
    ],
    options: [
        { label: "A", code: `while (0 < x) {
    System.out.println(array[x]);
    x--;
}` },
        { label: "B", code: `do {
    x--;
    System.out.println(array[x]);
} while (0 <= x);` },
        { label: "C", code: `do {
    System.out.println(array[x]);
    x--;
} while (0 <= x);` },
        { label: "D", code: `while (0 < x) {
    x--;
    System.out.println(array[x]);
}` },
        { label: "E", code: `while (0 < x) {
    System.out.println(array[--x]);
}` },
    ],
    answer: "D、E",
    explanation: `x は array.length なので 5 です。配列の位置は 0〜4 なので、array[5] は存在しません。

D：○ 先に x-- で 4 にしてから表示するので、array[4]〜array[0] が表示されます。x が 0 になるとループが終わります。
E：○ --x は「減らしてから使う」ので、D と同じ動きになります。

A・C：× 最初に array[5] を表示しようとするので、ArrayIndexOutOfBoundsException がスローされます。
B：× array[0] を表示した後も、x = 0 で 0 <= 0 が true になるため、もう1周して array[-1] にアクセスし、例外がスローされます。`
},
{
    id: 64,
    chapter: "ch13",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. public class Sample {
2.     public static void main(String[] args) {
3.         var i = 3;
4.         var j = 2;
5.         i += (j * 2 + j) / i - 2;
6.         System.out.println(i);
7.     }
8. }`},
    ],
    options: `A. 9が表示される
B. 6が表示される
C. 3が表示される
D. 12が表示される
`,
    answer: "C",
    explanation: `var i = 3、var j = 2 と書くと、i と j は int 型になります。

i += 式 は、「右側の式を全部計算してから、i に足す」という意味です。
① カッコの中：j * 2 + j = 4 + 2 = 6
② / は - より先に計算：6 / i = 6 / 3 = 2
③ 2 - 2 = 0
④ i += 0 なので、i は 3 のまま

そのため、3 が表示されます。`
},
{
    id: 65,
    chapter: "ch13",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  public class Sample {
2.      public static void main(String[] args) {
3.          int a = 2;
4.          int b = 1;
5.          if (a++ > ++b) {
6.              System.out.print("A");
7.          } else {
8.              System.out.print("B");
9.          }
10.         System.out.println(a + ":" + b);
11.     }
12. }`},
    ],
    options: `A. 「A2:1」と表示される
B. 「A3:2」と表示される
C. 「B2:1」と表示される
D. 「B3:2」と表示される
`,
    answer: "D",
    explanation: `a++ は「使ってから増やす」、++b は「増やしてから使う」です。

① a++：比較には増やす前の 2 を使い、その後 a は 3 になる
② ++b：先に b を 2 にしてから、比較に使う
③ 2 > 2 は false なので、else の「B」が表示される

この時点で a は 3、b は 2 になっているので、「B3:2」と表示されます。`
},
{
    id: 66,
    chapter: "ch13",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. class Item {
2.     String name;
3.     public Item(String name) {
4.         this.name = name;
5.     }
6. }`},
        { 
            type: "code", 
            value: `1.  public class Sample {
2.      public static void main(String[] args) {
3.          Item[] items = new Item[3];
4.          items[1] = new Item("A");
5.          items[2] = new Item("B");
6.          for (Item item : items) {
7.              System.out.println(item.name);
8.          }
9.      }
10. }`},
    ],
    options: [
        { label: "A", code: `A
B` },
        { label: "B", code: `null
A
B` },
        { label: "C", text: "コンパイルエラーが発生する" },
        { label: "D", text: "ArrayIndexOutOfBoundsExceptionがスローされる" },
        { label: "E", text: "NullPointerExceptionがスローされる" },
    ],
    answer: "E",
    explanation: `items[0] には何も入れていないので、null のままです。
1周目で item が null になり、item.name で null のフィールドにアクセスしようとするため、NullPointerException がスローされます。

println(null) なら「null」と表示されますが、null.name のように null から何かを取り出そうとすると例外になります。`
},
{
    id: 67,
    chapter: "ch13",
    contents:[
        { type: "text", value: "Javaが高いパフォーマンスを実現していることと関連する説明として、もっとも適切なものを選びなさい。(1つ選択)" },
    ],
    options: `A. Javaの標準ライブラリは、パイプライン処理を行うための組み込み関数を持っている
B. Javaは頻繁に実行されるコードを監視して、実行を最適化する
C. Javaはガベージコレクションをアプリケーションのコードよりも優先して処理する
D. Javaは自動的にコードを並列処理する
`,
    answer: "B",
    explanation: `B：○ JVM は、何度も実行される部分（ホットスポット）を見つけて、その部分を機械語に変換して高速化します。これを JIT（Just-In-Time）コンパイルと呼びます。

A：× パフォーマンスとは関係ありません。
C：× ガベージコレクションを優先すると、アプリケーションの処理が止まってしまいます。
D：× 並列処理は、プログラマーがスレッドなどを使って書く必要があります。`
},
{
    id: 68,
    chapter: "ch13",
    contents:[
        { type: "text", value: "次のAクラスを継承したサブクラスに定義できるメソッドとして、正しいものを選びなさい。(2つ選択)" },
        { 
            type: "code", 
            value: `1. import java.util.*;
2.
3. public class A {
4.     public List<Number> test(Set<CharSequence> s) {
5.         return null;
6.     }
7. }`},
    ],
    options: `A. public ArrayList<Integer> test(Set<String> s) { ... }
B. public List<Integer> test(TreeSet<String> s) { ... }
C. public List<Integer> test(Set<String> s) { ... }
D. public List<Object> test(Set<CharSequence> s) { ... }
E. public List<Integer> test(Set<CharSequence> s) { ... }
F. public ArrayList<Number> test(Set<CharSequence> s) { ... }
`,
    answer: "B、F",
    explanation: `B：○ 引数が TreeSet で、Set とは別の型なので、オーバーロード（別のメソッド）になります。
F：○ 引数が同じなのでオーバーライドです。ArrayList<Number> は List<Number> のサブタイプなので、戻り値として使えます（共変戻り値）。

A・C：× Set<String> と Set<CharSequence> は、< > の中身が違うだけです。コンパイル後は < > の中身が消えて、どちらも Set になる（型消去）ため、同じ引数とみなされます。オーバーロードにもオーバーライドにもならず、コンパイルエラーになります。
D・E：× 引数が同じなのでオーバーライドですが、List<Object> や List<Integer> は List<Number> のサブタイプではありません。< > の中身は、親子関係があっても、まったく同じでなければいけません。`
},
{
    id: 69,
    chapter: "ch13",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  public class Main {
2.      public static void main(String[] args) {
3.          String[] array = {"A", "B"};
4.          int i = 0;
5.          while (i < array.length) {
6.              int j = 0;
7.              do {
8.                  ++j;
9.              } while (j < array[i].length());
10.             System.out.println(array[i] + ":" + j);
11.             i++;
12.         }
13.     }
14. }`},
    ],
    options: [
        { label: "A", code: `A:2
B:2` },
        { label: "B", code: `A:1
B:3` },
        { label: "C", code: `A:1
B:1` },
        { label: "D", text: "実行時に例外がスローされる" },
    ],
    answer: "C",
    explanation: `array[i].length() は文字列の長さです。"A" も "B" も1文字なので 1 です。

j は 0 から始まり、do の中で 1 になります。
j < 1 は false なので、do-while を抜けます。
どちらの文字列でも j は 1 なので、「A:1」「B:1」と表示されます。

配列の長さは array.length（カッコなし）、文字列の長さは length()（カッコあり）です。`
},
{
    id: 70,
    chapter: "ch13",
    contents:[
        { type: "text", value: "次のプログラムの「// insert code here」に入るコードとして、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `public class Sample {
    public static void main(String[] args) {
        // insert code here
        array[0] = 2;
        array[1] = 3;
        System.out.println(array[0] + array[1]);
    }
}`},
    ],
    options: [
        { label: "A", code: `int[] array = new int[2];` },
        { label: "B", code: `int[] array;
array = int[2];` },
        { label: "C", code: `int array = new int[2];` },
        { label: "D", code: `int array[2];` },
    ],
    answer: "A",
    explanation: `A：○ 要素数2の int 型配列を作っています。

B：× 配列を作るには new が必要です。
C：× 変数の型が int（配列ではない）なので、配列を入れられません。
D：× 宣言のときに、[ ] の中に要素数を書くことはできません。`
},
{
    id: 71,
    chapter: "ch13",
    contents:[
        { type: "text", value: "次のプログラムのコンパイルエラーを修正する方法として、正しいものを選びなさい。(2つ選択)" },
        { 
            type: "code", 
            value: `1.  public class Main {
2.      public static void main(String[] args) {
3.          try {
4.              if (args.length == 0) {
5.                  sample(null);
6.              } else {
7.                  sample(args[0]);
8.              }
9.          } catch (RuntimeException e) {
10.             System.out.println("error");
11.         }
12.     }
13.     private static void sample(String str) {
14.         if (str == null) throw new Exception();
15.         throw new RuntimeException();
16.     }
17. }`},
    ],
    options: `A. mainメソッドの宣言にthrows RuntimeExceptionを追加する
B. sampleメソッドの宣言にthrows Exceptionを追加する
C. sampleメソッドにExceptionを捕捉するcatchブロックを追加する
D. mainメソッドのcatchブロックでExceptionを捕捉するように修正する
`,
    answer: "B、D",
    explanation: `14行目で Exception（チェック例外）をスローしていますが、sample メソッドは throws 宣言もしておらず、catch もしていません。そのため、コンパイルエラーになります。

B で sample に throws Exception を追加すると、今度は呼び出す側の main で Exception を処理する必要があります。
main の catch は RuntimeException しか捕捉しないので、D で catch (Exception e) に変更します。
B と D を両方行うことで、コンパイルエラーが解消されます。

A：× RuntimeException は非チェック例外なので、throws に書いても意味がありません。`
},
{
    id: 72,
    chapter: "ch13",
    contents:[
        { type: "text", value: "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  public class Sample {
2.      public static final int length = 3;
3.      public static void main(String[] args) {
4.          int[] array = new int[length];
5.          for (int i = 0; i < 3; i++) {
6.              System.out.print(array[i]);
7.          }
8.          System.out.println();
9.          Integer[] array2 = new Integer[length];
10.         for (int i = 0; i < 3; i++) {
11.             System.out.print(array2[i]);
12.         }
13.     }
14. }`},
    ],
    options: [
        { label: "A", code: `nullnullnull
000` },
        { label: "B", code: `000
000` },
        { label: "C", code: `000
nullnullnull` },
        { label: "D", code: `nullnullnull
nullnullnull` },
        { label: "E", text: "実行時に例外がスローされる" },
    ],
    answer: "C",
    explanation: `配列を作ると、要素には型ごとの初期値が入ります。

int[]（基本データ型）：初期値は 0 なので、「000」と表示されます。
Integer[]（参照型）：初期値は null なので、「nullnullnull」と表示されます。

length は自分で定義した static 変数なので、変数名として問題なく使えます。`
},
{
    id: 73,
    chapter: "ch13",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. public class Main {
2.     public static void main(String[] args) {
3.         System.out.println("result=" + 2 + 3 + 4);
4.         System.out.println("result=" + 2 + 3 * 4);
5.     }
6. }`},
    ],
    options: [
        { label: "A", code: `result=9
result=24` },
        { label: "B", code: `result=9
result=20` },
        { label: "C", code: `result=234
result=212` },
        { label: "D", code: `result=212
result=212` },
    ],
    answer: "C",
    explanation: `3行目：左から順番に計算されます。"result=" + 2 で文字列になるので、その後の + はすべて連結になり「result=234」です。
4行目：* は + より先に計算されるので、3 * 4 = 12 が先に計算されます。"result=" + 2 + 12 で「result=212」です。`
},
{
    id: 74,
    chapter: "ch13",
    contents:[
        { type: "text", value: "次のコードを確認し、trueを戻すコードとして正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `char[][] array1 = {{'a', 'b'}, {'c', 'd'}};
char[][] array2 = array1.clone();
char[] array3 = array1[1].clone();`},
    ],
    options: `A. array1[1] == array3
B. array1[1] == array3[1]
C. array1[1] == array2[1]
D. array1.equals(array2)
`,
    answer: "C",
    explanation: `clone() は配列のコピーを作りますが、中に入っている配列はコピーせず、同じものを指したままです（シャローコピー）。

C：○ array2 は array1 のコピーですが、array2[1] と array1[1] は同じ {'c', 'd'} を指しているので、true です。

A：× array3 は array1[1] のコピーとして新しく作られた配列なので、別の配列です。false です。
B：× char[] と char を == で比べることはできないので、コンパイルエラーになります。
D：× 配列の equals は == と同じで、同じ配列かどうかを比べます。array2 は新しく作られた配列なので、false です。`
},
{
    id: 75,
    chapter: "ch13",
    contents:[
        { type: "text", value: "次のSampleクラスに、引数で受け取った値でフィールドvalueを変更するメソッドを追加したい。メソッドの定義として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. public class Sample {
2.     private String value;
3. }`},
    ],
    options: `A. public void setValue(String value) { value = value; }
B. public String setValue(String str) { String value = str; return value; }
C. public void setValue(String value) { this.value = value; }
D. public void setValue() { this.value = value; }
`,
    answer: "C",
    explanation: `C：○ this.value でフィールドを指し、引数の value を入れています。

A：× this がないので、引数の value に引数の value を入れるだけで、フィールドは変わりません。
B：× String value = str; はメソッドの中で新しく作ったローカル変数です。フィールドは変わりません。
D：× 引数がないので、値を受け取れません。this.value = value は、フィールドに自分自身を入れるだけです。`
},
{
    id: 76,
    chapter: "ch13",
    contents:[
        { type: "text", value: "次のプログラムを実行し、「HELLO」と表示したい。空欄に入るコードとして、正しいものを選びなさい。(2つ選択)" },
        { 
            type: "code", 
            value: `1. import java.util.function.Function;
2.
3. public class Main {
4.     public static void main(String[] args) {
5.         Function<String, String> func = □□□□□□
6.         System.out.println(func.apply("hello"));
7.     }
8. }`},
    ],
    options: `A. String::toUpperCase();
B. x -> x.toUpperCase();
C. x:toUpperCase();
D. x::toUpperCase();
E. (String x) -> { return x.toUpperCase(); };
`,
    answer: "B、E",
    explanation: `Function<String, String> は、String を受け取って String を返すラムダ式です。

B：○ x を受け取り、大文字にした文字列を返しています。
E：○ 引数の型を書き、{ } と return を使った書き方です。B と同じ意味です。

A：× メソッド参照の場合、String::toUpperCase とカッコなしで書きます。() を付けるとコンパイルエラーになります。
C：× コロン1つは、ラムダ式でもメソッド参照でもありません。
D：× x という変数は定義されていません。`
},
{
    id: 77,
    chapter: "ch13",
    contents:[
        { type: "text", value: "次のプログラムの説明として、正しいものを選びなさい。(1つ選択)" },
        { type: "code", value: `1. public class SampleException extends Exception {}` },
        { type: "code", value: `1. public class SubSampleException extends SampleException {}` },
        { 
            type: "code", 
            value: `1. public class Sample {
2.     public void test(int num) throws SampleException {
3.         if (num < 10) {
4.             throw new SubSampleException();
5.         }
6.     }
7. }`},
    ],
    options: `A. testメソッドでは、SampleExceptionクラスか、そのサブクラスであればスローできる
B. SampleExceptionは非検査例外である
C. SampleExceptionはプログラムで対処しきれないときに使う例外である
D. testメソッドでは、SampleExceptionしかスローできないためコンパイルエラーが発生する
`,
    answer: "A",
    explanation: `A：○ throws SampleException と宣言すると、SampleException だけでなく、そのサブクラス（SubSampleException）もスローできます。

B：× SampleException は Exception を継承していて、RuntimeException は継承していないので、検査例外（チェック例外）です。
C：× プログラムで対処しきれない問題に使うのは Error です。
D：× A の説明の通り、サブクラスもスローできます。`
},
{
    id: 78,
    chapter: "ch13",
    contents:[
        { type: "text", value: "次のプログラムをコンパイルすると、何行目でコンパイルエラーになるか。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  public class Main {
2.      public static void main(String[] args) {
3.          sample();
4.          int a = b;
5.          int b = num;
6.      }
7.      private static void sample() {
8.          System.out.println(num);
9.      }
10.     static int num;
11. }`},
    ],
    options: `A. 3行目
B. 4行目
C. 5行目
D. 8行目
`,
    answer: "B",
    explanation: `ローカル変数は、宣言した行より後でしか使えません。
4行目で使っている b は、5行目で宣言しているので、まだ存在しません。コンパイルエラーになります。

3行目：メソッドは、クラスの中のどこで定義していても呼び出せます。
5行目・8行目：フィールド（num）も、メソッドの中からなら、宣言した位置に関係なく使えます。`
},
{
    id: 79,
    chapter: "ch13",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  public class Main {
2.      public static void main(String[] args) {
3.          int[] array = {2, 3, 4};
4.          int[] array2 = array.clone();
5.          array2[0] = 5;
6.          for (int i : array) {
7.              System.out.println(i);
8.          }
9.      }
10. }`},
    ],
    options: `A. 「2」「3」「4」と表示される
B. 「5」「3」「4」と表示される
C. コンパイルエラーが発生する
D. 実行時に例外がスローされる
`,
    answer: "A",
    explanation: `clone() は、配列のコピーを新しく作ります。
array2 は array とは別の配列なので、array2[0] を変更しても、array は変わりません。
そのため、「2」「3」「4」と表示されます。

もし array2 = array; と代入していたら、同じ配列を指すので、「5」「3」「4」になります。`
},
{
    id: 80,
    chapter: "ch13",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  public class Main {
2.      public static void main(String[] args) {
3.          int num = 0;
4.          String[] array = {"A", "B", "C", "D"};
5.          for (String s : array) {
6.              switch (s) {
7.                  case "D":
8.                  case "A":
9.                      num -= 1;
10.                     break;
11.                 case "B":
12.                     num++;
13.                 case "C":
14.                     num += 2;
15.             }
16.         }
17.         System.out.println(num);
18.     }
19. }`},
    ],
    options: `A. 3が表示される
B. 4が表示される
C. -1が表示される
D. コンパイルエラーが発生する
`,
    answer: "A",
    explanation: `switch 文は、一致した case から処理を始め、break が来るまで下の case の処理も続けて実行します（フォールスルー）。

"A"：case "A" から始まり、num -= 1 → -1、break で抜けます。
"B"：case "B" から始まり、num++ → 0。break がないので case "C" の処理も実行し、num += 2 → 2 になります。
"C"：case "C" から始まり、num += 2 → 4 になります。
"D"：case "D" には処理がないので、そのまま case "A" の処理に進み、num -= 1 → 3、break で抜けます。

そのため、3 が表示されます。`
},
);

