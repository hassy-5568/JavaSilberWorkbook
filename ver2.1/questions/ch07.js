
window.questionsData = window.questionsData || [];
window.questionsData.push(
    {
    id: 1,
    chapter: "ch07",
    contents: [
        { type: "text", value: "次のプログラムを確認してください。" },
        { 
            type: "code", 
            value: `1. public class Child extends Parent {
2.     Child( ) {
3.         name = "java";
4.     }
5.     void hello( ) {
6.         System.out.println("hello, " + name);
7.     }
8. }
` },
        { type: "text", value: "このクラスが継承しているParentクラスの説明として、正しいものを選びなさい。(1つ選択)" },
        ],
    options: `A. Parentクラスは、helloメソッドの定義を持っていなければいけない
B. Parentクラスには、フィールドを初期化するためのコンストラクタを定義しなければいけない
C. Parentクラスには、helloフィールドを定義しなければいけない
D. Parentクラスには、nameフィールドを定義しなければいけない
`,
    answer: "D",
    explanation: "クラスの継承問題。子クラスで定義されていないものは、親クラスで定義している必要がある。"
},
{
        id: 2,
        chapter: "ch07",
        text: "継承の説明として正しいものを選びなさい。(1つ選択)",
        code: "",
        options: `A. アクセス修飾子がデフォルトのままのフィールドは、すべてのサブクラスのメソッドからアクセスできる
B. アクセス修飾子がprivateなメソッドであっても、サブクラスからは利用できる
C. サブクラスであっても、コンストラクタは引き継がない
D. アクセス修飾子がprotectedなメソッドには、同じパッケージに属するサブクラスのみアクセスできる
`,
        answer: "C",
        explanation: ""
    },
    {
        id: 3,
        chapter: "ch07",
        text: "インタフェースに関する説明として、正しいものを選びなさい。(2つ選択)",
        code: "",
        options: `A. アクセス修飾子を省略しても、publicなメソッドとして扱われる
B. フィールドは一切定義できない
C. クラスは複数のインタフェースを同時に実現できない
D. インタフェースを継承することはできない
E. 抽象クラスは、インタフェースに定義されているメソッドを実現しなくてもよい
`,
        answer: "A、E",
        explanation: `A. 自動的にpublicになる。
B. 定数フィールドなら定義可能。
C. 複数のインターフェースを定義可能
D. インターフェースは別のインターフェースを定義可能。
E. 抽象クラスは実装をサブクラスにゆだねることが可能。
他、単体でインスタンスをもてない、処理の中身をもたない、など。`
    },
    {
    id: 4,
    chapter: "ch07",
    contents: [
        { type: "text", value: "次のプログラムの説明として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. public interface A {
2.     void sample( ) {
3.         System.out.println("sample");
4.     }
5. }
` },
        { 
            type: "code", 
            value: `1. public class B implements A {
2.
3. }
` },
{ 
            type: "code", 
            value: `1. public class Main {
2.     public static void main(String[] args) {
3.         A a = new B();
4.         a.sample();
5.     }
6. }
` },
        ],
    options: `A. インタフェースAのsampleメソッドをdefaultで修飾しなければいけない
B. インタフェースAのsampleメソッドを削除し、Bクラスにsampleメソッドを追加しなければいけない
C. 実行時に例外がスローされる
D. 「sample」と表示される
`,
    answer: "A",
    explanation: "default修飾子をつけることで、子クラスにインターフェースに記述されているメソッドを書かなくても、勝手に実装される。"
},
{
    id: 5,
    chapter: "ch07",
    contents: [
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. public interface A {
2.     @Override
3.     default String toString() {
4.         return "A";
5.     }
6. }
` },
        { 
            type: "code", 
            value: `1. public class B implements A {
2.     @Override
3.     public String toString() {
4.         return "B";
5.     }
6. }
` },
{ 
            type: "code", 
            value: `1. public class Main {
2.     public static void main(String[] args) {
3.         A a = new B();
4.         System.out.println(a);
5.     }
6. }
` },
        ],
    options: `A. Aインタフェースでコンパイルエラーとなる
B. Bクラスでコンパイルエラーとなる
C. Aが表示される
D. Bが表示される
E. 実行時に例外がスローされる
`,
    answer: "A",
    explanation: `toString(), equals(), hashCode() などの Objectクラス由来のメソッドを default メソッドにするのは NG。コンパイルエラーになる。`,
},
{
    id: 6,
    chapter: "ch07",
    contents: [
        { type: "text", value: "以下に示すコードをコンパイル、実行し、次のような結果を表示したい。 Cクラスの空欄に入るコードとして正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `Hello
Java` },
        { 
            type: "code", 
            value: `1. public interface A {
2.     default void sample() {
3.         System.out.println("Hello");
4.     }
5. }
` },
{ 
            type: "code", 
            value: `1. public interface B extends A {
2. 
3. }
` },
{ 
            type: "code", 
            value: `1. public class C implements B {
2.     @Override
3.     public void sample() {
4.         □□□□□□□
5.         System.out.println("Java");
6.     }
7. }
` },
{ 
            type: "code", 
            value: `1. public class Main {
2.     public static void main(String[] args) {
3.         A a = new C();
4.         a.sample();
5.     }
6. }
` },
],
    options: `A. super.sample();
B. A.super.sample();
C. public.sample();
D. new.sample();
E. 上記のいずれも誤りである
`,
    answer: "E",
    explanation: `インターフェース名.super.メソッド名にて、オーバーライド前のインターフェースを呼び出せる。今回、CはimplementsBのため、Aのインターフェースは呼び出せない。B.super.Sample()だったら、継承後のメソッドを使える。;`
},
{
    id: 7,
    chapter: "ch07",
    contents: [
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `Hello
Java` },
        { 
            type: "code", 
            value: `1. public interface A {
2.     default void test() {
3.         System.out.println("A");
4.     }
5. }
` },
{ 
            type: "code", 
            value: `1. public interface B {
2.     default void test() {
3.         System.out.println("B");
4.     }
5. }
` },
{ 
            type: "code", 
            value: `1. public class Main implements A, B {
2.     public static void main(String[] args) {
3.         new Main().test();
4.     }
5. }
` },
],
    options: `A. Aが表示される
B. Bが表示される
C. コンパイルエラーが発生する
D. 実行時に例外がスローされる
`,
    answer: "C",
    explanation: ""
},
{
    id: 8,
    chapter: "ch07",
    contents: [
        { type: "text", value: "抽象クラスに関する説明として、正しいものを選びなさい。(3つ選択)" },
        ],
    options: `A. インスタンスを生成することはできない
B. 抽象クラスのメソッドはオーバーライドできない
C. サブクラスから抽象クラスの公開フィールドに自由にアクセスできる
D. 抽象クラスを継承した抽象クラスを定義できる
E. 抽象メソッドは、すべてのサブクラスが実装しなければいけない
`,
    answer: "A、C、D",
    explanation: ""
},
{
    id: 9,
    chapter: "ch07",
    contents: [
        { type: "text", value: "次のプログラムを確認してください。" },
        { 
            type: "code", 
            value: `1. abstract class AbstractSample {
2.     public void sample() {
3.         System.out.println("A");
4.         test();
5.         System.out.println("C");
6.     }
7.     protected abstract void test();
8. }
` },
        { 
            type: "code", 
            value: `1. class ConcreteSample extends AbstractSample {
2.     protected void test() {
3.         System.out.println("B");
4.     }
5. }
` },
{ 
            type: "text", 
            value: `これらのクラスを利用する以下のプログラムを、コンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)` },
{ 
            type: "code", 
            value: `1. public class Main {
2.     public static void main(String[] args) {
3.         AbstractSample s = new ConcreteSample();
4.         s.sample();
5.     }
6. }
` },
],
    options: `A. 「A」「B」「C」と表示される
B. 「A」「C」と表示される
C. AbstractSampleクラスでコンパイルエラーが発生する
D. ConcreteSampleクラスでコンパイルエラーが発生する
E. Mainクラスでコンパイルエラーが発生する
F. 実行時に例外がスローされる
`,
    answer: "A",
    explanation: ""
},
{
    id: 10,
    chapter: "ch07",
    contents: [
        { type: "text", value: "オーバーライドに関する説明として、正しいものを選びなさい。(1つ選択)" },
],
    options: `A. 引数リストの定義は、型、数、順番のすべてが同じでなければいけない
B. 戻り値型は同じでなければいけない
C. 抽象メソッドはオーバーライドできない
D. オーバーロードされたメソッドはオーバーライドできない
`,
    answer: "A",
    explanation: ""
},
{
    id: 11,
    chapter: "ch07",
    contents:[
        { type: "text", value: "以下のクラスを継承したサブクラスを定義するとき、helloメソッドをオーバーライドしようとしている。サブクラスに定義するhelloメソッドに付けられるアクセス修飾子として、正しいものを選びなさい。(1 つ選択)" },
        { 
            type: "code", 
            value: `1. public class Sample {
2.     protected void hello() {
3.         System.out.println("hello.");
4.     }
5. }
`},],
    options: `A. デフォルト(アクセス修飾子なし)
B. private
C. public
D. アクセス修飾子は変えられない`,
    answer: "C",
    explanation: ""
},
{
    id: 12,
    chapter: "ch07",
    contents:[
        { type: "text", value: "次のプログラムを確認してください。" },
        { 
            type: "code", 
            value: `1.  class A {
2.      String val = "A";
3.      void print() {
4.          System.out.print(val);
5.      }
6.  }
7.
8.  class B extends A {
9.      String val = "B";
10. }
`},
{ type: "text", value: "これらのクラスを利用する以下のプログラムを、コンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
{ 
            type: "code", 
            value: `1.  public class Main {
2.      public static void main(String[] args) {
3.          A a = new A();
4.          A b = new B();
5.          System.out.print(a.val);
6.          System.out.print(b.val);
7.          a.print();
8.          b.print();
9.      }
10. }
`}
],
    options: `A. 「ABAB」と表示される
B. 「AAAA」と表示される
C. 「AAAB」と表示される
D. Bクラスでコンパイルエラーが発生する
E. Mainクラスでコンパイルエラーが発生する
F. 実行時に例外がスローされる
`,
    answer: "B",
    explanation: `ポリフォーリズムの問題。親クラスに定義しているものと、同じものを子クラスで定義する場合、子クラスは、親クラスの定義が崩壊しないように、親クラスの定義、子クラスの定義、両方もつことになる。そのため、どっちのクラスのメソッドを使うかで、参照先が変わってしまう問題がある。（シャドーイング）。今回、ABABと記載するには、Bクラスでメソッドをオーバーライドしたら可能になる。`
},
{
    id: 13,
    chapter: "ch07",
    contents:[
        { type: "text", value: "次のプログラムを確認してください。" },
        { 
            type: "code", 
            value: `1. interface Worker {
2.     void work();
3. }
4.
5. class Employee {
6.     public void work() {
7.         System.out.println("work");
8.     }
9. }
`},
{ 
            type: "code", 
            value: `class Engineer extends Employee implements Worker { }`},
{ type: "text", value: "これらのクラスを利用する以下のプログラムを、コンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
{ 
            type: "code", 
            value: `1. public class Main {
2.     public static void main(String[] args) {
3.         Worker worker = new Engineer();
4.         worker.work();
5.     }
6. }
`}
],
    options: `A. Engineerクラスでコンパイルエラーが発生する
B. Mainクラスでコンパイルエラーが発生する
C. 「work」と表示される
D. 実行時に例外がスローされる
`,
    answer: "C",
    explanation: ""
},
{
    id: 14,
    chapter: "ch07",
    contents:[
        { type: "text", value: "次のプログラムを確認し、これらのクラスとインタフェースを利用する Mainクラスをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. public interface Worker {
2.     void work();
3. }
`},
{ 
            type: "code", 
            value: `1. class Employee implements Worker {
2.     public void work() {
3.         System.out.println("work");
4.     }
5.     public void report() {
6.          System.out.println("report");
7.     }
8. }
`},
{ 
            type: "code", 
            value: `1. class Engineer extends Employee {
2.     public void create() {
3.         System.out.println("create future");
4.     }
5. }
`},
{ 
            type: "code", 
            value: `1. public class Main {
2.     public static void main(String[] args) {
3.         Worker a = new Engineer();
4.         Employee b = new Engineer();
5.         Engineer c = new Engineer();
6.         a.create();
7.         b.work();
8.         c.report();
9.     }
10. }
`},
],
    options: `A. Mainクラスの6行目でコンパイルエラーが発生する
B. Mainクラスの7行目でコンパイルエラーが発生する
C. Mainクラスの8行目でコンパイルエラーが発生する
D. 選択肢AとBの両方
E. 選択肢BとCの両方
`,
    answer: "A",
    explanation: ""
},
{
    id: 15,
    chapter: "ch07",
    contents:[
        { type: "text", value: "次のプログラムを確認してください。" },
        { 
            type: "code", 
            value: `1. public interface A{ }
`},
{ 
            type: "code", 
            value: `1. public class B implements A{ }
`},
{ 
            type: "code", 
            value: `1. public class C extends B{ }
`},
{ 
            type: "code", 
            value: `public class D {}
`},
{ type: "text", value: "これらのクラスやインタフェースを利用する以下のプログラムを、コンバイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
{ 
            type: "code", 
            value: `1. public class Main {
2.     public static void main(String[] args) {
3.         A[] array = {
4.             new B(),
5.             new C(),
6.             new A(),
7.             new D()
8.         };
9.     }
10. }
`},
],
    options: `A. 4行目でコンパイルエラーが発生する
B. 5行目でコンパイルエラーが発生する
C. 6行目でコンパイルエラーが発生する
D. 7行目でコンパイルエラーが発生する
E. 選択肢AとBの両方
F. 選択肢CとDの両方
G. 選択肢BとCの両方
H. 正常に動作する
`,
    answer: "F",
    explanation: `Aはインターフェースのため、new でインスタンス化できない。`
},
{
    id: 16,
    chapter: "ch07",
    contents:[
        { type: "text", value: "次のプログラムを確認してください。" },
        { 
            type: "code", 
            value: `1. class A { }
`},
{ 
            type: "code", 
            value: `1. class B extends A {
2.     void hello() {
3.         System.out.println("hello");
4.     }
5. }
`},
{ type: "text", value: "これらのクラスを利用する以下のプログラムを実行し、「hello」とコンソールに表示したい。4行目の空欄に入るコードとして、正しいものを選びなさい。(1つ選択)" },
{ 
            type: "code", 
            value: `1. public class Main {
2.     public static void main(String[] args) {
3.         A a = new B();
4.         □□□□□□□
5.         b.hello();
6.     }
7. }
`},
],
    options: `A. A b = a;
B. A b = new B();
C. A b = (A) a;
D. B b = a;
E. B b = (A) a;
F. B b = (B) a;
`,
    answer: "F",
    explanation: `hello()をもっている、Bクラスのインスタンスを作る必要がある。(B)aとかくことで、aの子クラスＢを明示（ダウンキャスト）することで、渡すことができる。`
},
{
    id: 17,
    chapter: "ch07",
    contents:[
        { type: "text", value: "次のプログラムを確認してください。" },
        { 
            type: "code", 
            value: `1. class A {
2.     void hello() {
3.         System.out.println("A");
4.     }
5. }
`},
{ 
            type: "code", 
            value: `1. class B extends A {
2.     void hello() {
3.         System.out.println("B");
4.     }
5. }
`},
{ type: "text", value: "これらのクラスを利用する以下のプログラムを、コンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
{ 
            type: "code", 
            value: `1. public class Main {
2.     public static void main(String[] args) {
3.         A a = new A();
4.         B b = (B) a;
5.         b.hello();
6.     }
7. }
`},
],
    options: `A. Aが表示される
B. Bが表示される
C. Mainクラスでコンパイルエラーが発生する
D. 実行時に例外がスローされる
`,
    answer: "D",
    explanation: `new A()で、クラスAのインスタンスを作っているので、Bクラスを代入できない。`
},
{
    id: 18,
    chapter: "ch07",
    contents:[
        { type: "text", value: "次のプログラムを確認してください。コンソールに 「10」と表示するために、Sampleクラスの4行目の空欄に入るコードとして正しいものを選びなさい。(2つ選択)" },
        { 
            type: "code", 
            value: `1.  class Sample {
2.      private int num;
3.      public Sample(int num) {
4.          □□□□□□□
5.      }
6.      public int getNum() {
7.          return num;
8.      }
9.      public void setNum(int num) {
10.         this.num = num;
11.     }
12. }
`},
{ 
            type: "code", 
            value: `1. public class Main {
2.     public static void main(String[] args) {
3.         Sample s = new Sample (10):
4.         System.out.println(s.getNum());
5.     }
6. }
`},
],
    options: `A. this.num = num;
B. this -> num = num;
C. num = num;
D. setNum(num);
E. super.setNum(num);
`,
    answer: "A、D",
    explanation: ""
},
{
    id: 19,
    chapter: "ch07",
    contents:[
        { type: "text", value: "次のプログラムを確認してください。" },
        { 
            type: "code", 
            value: `1. class Parent {
2.     String name;
3.     String getName() {
4.         return this.name;
5.     }
6. }
`},
{ 
            type: "code", 
            value: `1. public class Child extends Parent {
2.     String name;
3. }
`},
{ type: "text", value: "これらのクラスを利用する以下のプログラムを、コンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
{ 
            type: "code", 
            value: `1. public class Main {
2.     public static void main(String[] args) {
3.         Child child = new Child();
4.         child.name = "sample";
5.         System.out.println(child.getName());
6.     }
7. }
`},
],
    options: `A. 「sample」と表示される
B. 「null」と表示される
C. 何も表示されない
D. コンパイルエラーが発生する
E. 実行時に例外がスローされる
`,
    answer: "B",
    explanation: `シャドーイングに関する挙動。
Parentクラス、Childクラスの両方で、nameを宣言している。Parent側のメソッドで呼び出そうとすると、Parentの変数が返される。`
},
{
    id: 20,
    chapter: "ch07",
    contents:[
        { type: "text", value: "次のプログラムを確認してください。" },
        { 
            type: "code", 
            value: `1. class A {
2.     public A() {
3.         System.out.println("A");
4.     }
5. }
`},
{ 
            type: "code", 
            value: `1. class B extends A {
2.     public B() {
3.         System.out.println("B");
4.     }
5. }
`},
{ type: "text", value: "これらのクラスを利用する以下のプログラムを、コンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
{ 
            type: "code", 
            value: `1. public class Main {
2.     public static void main(String[] args) {
3.          A a = new B();
4.     }
5. }
`},
],
    options: `A. 「A」と表示される
B. 「B」と表示される
C. 「A」「B」と表示される
D. 「B」「A」と表示される
E. コンパイルエラーが発生する
F. 実行時に例外がスローされる
`,
    answer: "C",
    explanation: `子クラスのコンストラクタの先頭に super() または this() の呼び出しが明示されていない場合、Javaコンパイラによって自動的に親クラスの引数なしコンストラクタを呼ぶ super(); が補完されます。`
},
{
    id: 21,
    chapter: "ch07",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. class Parent {
2.     public Parent( ){
3.         System.out.println("A");
4.     }
5.     public Parent(String val) {
6.         this();
7.         System.out.println(val);
8.     }
9. }
`},
{ 
            type: "code", 
            value: `1. class Child extends Parent {
2.     public Child() {
3.         super("B");
4.         System.out.println("C");
5.     }
6.     public Child(String val) {
7.         this();
8.         System.out.println(val);
9.     }
10. }
`},
{ 
            type: "code", 
            value: `1. public class Main {
2.     public static void main(String[] args) {
3.         new Child("D");
4.     }
5. }
`},
],
    options: `A. 「A」「B」「C」「D」 と表示される
B. 「A」「B」と表示される
C. 「B」「A」「D」「C」と表示される
D. 「A」「B」「D」「C」と表示される
E. コンパイルエラーが発生する
F. 実行時に例外がスローされる
`,
    answer: "A",
    explanation: ""
});
