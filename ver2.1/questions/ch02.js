
window.questionsData = window.questionsData || [];
window.questionsData.push(
    {
        id: 1,
        chapter: "ch02",
        text: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)",
        code: `1. public class Main {
2.     public static void main(String[] args) {
3.         int val = 7;
4.         bool flg = true;
5.         if (flg == true) {
6.             do {
7.                 System.out.println(val);
8.             } while (val > 10);
9.         }
10.     }
11. }`,
        options: `A. 7が1回だけ表示される
B. 何も表示されない
C. コンパイルエラーが発生する
D. 実行時に例外がスローされる`,
        answer: "C",
        explanation: `Javaの真偽値型は boolean です（bool ではありません）。
4行目の bool flg = true; で型名が誤っているため、コンパイルエラーとなります。

なお、do-while文は条件式（while）の判定に関わらず、最初のブロック（do）を必ず1回は実行する特徴があります。`
    },
    {
        id: 2,
        chapter: "ch02",
        text: "次の式のうち、コンパイルエラーになるものを選びなさい。(1つ選択)",
        code: "",
        options: `A. int a = 267;
B. int b = 0413;
C. int c = 0x10B;
D. int d = 0b10001011;
E. int e = 0827;`,
        answer: "E",
        explanation: `整数リテラルの表記ルール：
・10進数：そのまま記述（例: 267）
・2進数：接頭辞 0b または 0B（例: 0b10001011）
・8進数：接頭辞 0（例: 0413）※使用できる数字は 0～7
・16進数：接頭辞 0x または 0X（例: 0x10B）

選択肢Eは 0 で始まるため8進数とみなされますが、8進数では使えない数字「8」が含まれているためコンパイルエラーとなります。`
    },
    {
        id: 3,
        chapter: "ch02",
        text: "次の式のうち、コンパイルエラーになるものを選びなさい。(5つ選択)",
        code: "",
        options: `A. int a = 123_456_789;
B. int b = 5________2;
C. int c = _123_456_789;
D. int d = 123_456_789_;
E. float e = 3_.1415F;
F. long f = 999_99_9999_L;
G. byte g = 0b0_1;
H. int h = 0_52;
I. int i = 0x_52;`,
        answer: "C、D、E、F、I",
        explanation: `Java SE 7から、数値リテラルの視認性を高めるためにアンダースコア（_）が使用できるようになりました。
【アンダースコアが配置できない場所】
1. リテラルの先頭および末尾（例: _123, 123_）
2. 記号（ピリオド . や型指定子 F, L など）の前後（例: 3_.14, 999_L）
3. 接頭辞（0b, 0x など）の直後（例: 0x_52）

したがって、C, D, E, F, I がコンパイルエラーとなります。`
    },
    {
        id: 4,
        chapter: "ch02",
        text: "char型の変数の初期化として、正しいものを選びなさい。(1つ選択)",
        code: "",
        options: `A. char a = "a";
B. char b = 'abc';
C. char c = 89;
D. char d = null;`,
        answer: "C",
        explanation: `char型は1つの文字を保持する基本データ型です。
・A：""（ダブルクォーテーション）はString型リテラルのためNG。
・B：''（シングルクォーテーション）内は1文字で指定する必要があるためNG（'abc'は複数文字）。
・C：char型は内部的に0～65535の整数値（Unicodeコードポイント）として扱われるため、数値の代入はOK。
・D：基本データ型に null は代入できません。`
    },
    {
        id: 5,
        chapter: "ch02",
        text: "次の式のうち、コンパイルエラーになるものを選びなさい。(2つ選択)",
        code: "",
        options: `A. int $a = 100;
B. int b_ = 200;
C. int _0 = 300;
D. int \${d} = 400;
E. int g.a = 700;`,
        answer: "D、E",
        explanation: `識別子（変数名など）の命名規則：
・使える文字：半角英数字、アンダースコア（_）、通貨記号（$ など）
・記号（{} や . など）は識別子名に使用できません。

Dは {} が含まれており、Eはピリオド . が含まれているためコンパイルエラーとなります。
_0は、test1みたいな変数と同じ。`
    },
    {
        id: 6,
        chapter: "ch02",
        text: "次の変数宣言のうち、コンパイルエラーとならないものを選びなさい。 (1つ選択)",
        code: "",
        options: `A. var a;
B. var b = null;
C. var c = ( ) -> { };
D. var d = {1, 2, 3};
E. var e = new ArrayList<>();`,
        answer: "E",
        explanation: `Java SE 10より。varの型推論。
型推論のため、代入される値がないと推論できないためコンパイルエラー。
var a = sample();など、メソッドの戻り値の場合は、変数の方を推論可能。`
    },
    {
        id: 7,
        chapter: "ch02",
        text: "次のプログラムをコンパイル、実行したときの結果として正しいものを選びなさい。(1つ選択)",
        code: [`// Sample.java
1. public class Sample {
2.     private var value;
3.     public Sample(var value) {
4.         this.value = value;
5.     }
6.     public void test () {
7.         System.out.println(value);
8.     }
9. }`,
`// Main.java
1. public class Main {
2.     public static void main(String[] args) {
3.         Sample s = new Sample("sample");
4.         s.test();
5.     }
6. }`
],
        options: `A. 「sample」と表示される
B. 「null」と表示される
C. コンパイルエラーが発生する
D. 実行時に例外がスローされる`,
        answer: "C",
        explanation: `var（ローカル変数型推論）が使用できるのは「ローカル変数」の宣言時のみです。
フィールド（インスタンス変数・2行目）やメソッド/コンストラクタの引数（3行目）には var を使用できません。そのためコンパイルエラーとなります。
コンストラクタの使い方を復習する。`
    },
    {
        id: 8,
        chapter: "ch02",
        text: "次のプログラムをコンパイル、実行したときの結果として正しいものを選びなさい。(1つ選択)",
        code: [`// A.java
1. public class A {
2.     public void test() {
3.         System.out.println("A");
4.     }
5. }`,
`// B.java
1. public class B extends A {
2.     @Override
3.     public void test() {
4.         System.out.println("B");
5.     }
6. }`,
`// C.java
1. public class C extends A {
2.     @Override
3.     public void test() {
4.         System.out.println("C");
5.     }
6. }`,
`// Main.java
1. public class Main {
2.     public static void main(String[] args) {
3.         var a = new B();
4.         a = new C();
5.         a.test();
6.     }
7. }`],
        options: `A. コンパイルエラーが発生する
B. 実行時例外がスローされる
C. Aが表示される
D. Bが表示される
E. Cが表示される`,
        answer: "A",
        explanation: `var a = new B(); の時点で、変数 a の型はクラス B として推論されます（親クラス A ではなく B 型になります）。
その後、a = new C(); と代入しようとしますが、クラス C はクラス B のサブクラスではないため型互換性がなく、コンパイルエラーが発生します。`
    },
    {
        id: 9,
        chapter: "ch02",
        text: "Stringオブジェクトを作成するコードとして、正しいものを選びなさい。(2つ選択)",
        code: "",
        options: `A. String a = new String("sample");
B. String b = "sample";
C. String c = String.newInstance("sample");
D. String d = String.valueOf('sample');`,
        answer: "A、B",
        explanation: `A：new キーワードを使った通常のインスタンス生成。
B：文字列リテラルによる直接代入（ストリングプールを利用した生成）。
C：String クラスに newInstance メソッドは存在しません。
D：'sample' はシングルクォーテーションで囲まれた複数文字のため、文法エラーとなります。
　  String.valueOf()。int型などのものをString型に変換するメソッド。;`
    },
    {
        id: 10,
        chapter: "ch02",
        text: "次のプログラムをコンパイル、実行したときの結果として正しいものを選びなさい。(1つ選択)",
        code: `1. public class Main {
2.     public static void main(String[] args) {
3.         String str = "hoge, world.";
4.         hello(str);
5.         System.out.println(str);
6.     }
7.     private static void hello(String msg) {
8.         msg.replaceAll("hoge", "hello");
9.     }
10. }`,
        options: `A. 「hoge, world.」と表示される
B. 「hello, world」と表示される
C. 「hello」と表示される
D. 「hello, hello.」と表示される
E. コンパイルエラーが発生する
F. 実行時に例外がスローされる`,
        answer: "A",
        explanation: `Stringオブジェクトは不変（Immutable）です。
replaceAll などの操作メソッドを実行しても、元の文字列自身が変更されることはなく、置換された新しい String オブジェクトが返されるだけです。
hello メソッド内ではその戻り値を保持していないため、変数 str の値は「hoge, world.」のまま変更されません。
replaceAll()メソッドは、「対象の文字を置換する」メソッド。`
    },
    {
        id: 11,
        chapter: "ch02",
        text: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)",
        code: `1. public class Main {
2.     public static void main(String[] args) {
3.         String str = "abcde";
4.         System.out.println(str.charAt(5));
5.     }
6. }`,
        options: `A. dが表示される
B. eが表示される
C. 何も表示されない
D. nullが表示される
E. コンパイルエラーが発生する
F. 実行時に例外がスローされる`,
        answer: "F",
        explanation: `String のインデックスは 0 から始まります。"abcde" の長さは 5 なので、インデックスは 0～4 となります。
charAt(5) を呼び出すと、存在しない範囲を指定したため実行時に java.lang.StringIndexOutOfBoundsException 例外がスローされます。
charAt()は、対象の文字列の該当文字を参照するメソッド。 `
    },
    {
        id: 12,
        chapter: "ch02",
        text: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)",
        code: `1. public class Main {
2.     public static void main(String[] args) {
3.         String str = "abcde";
4.         System.out.println(str.indexOf("abcdef"));
5.     }
6. }`,
        options: `A. 0が表示される
B. 1が表示される
C. 4が表示される
D. 5が表示される
E. -1が表示される
F. コンパイルエラーが発生する
G. 実行時に例外がスローされる`,
        answer: "E",
        explanation: `indexOf() メソッドは、指定した文字列が最初に登場するインデックス番号を返します。
対象の文字列の中に指定された文字列が存在しない場合、例外はスローされず -1 を返します。`
    },
{
    id: 13,
    chapter: "ch02",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. public class Main {
2.     public static void main(String[] args) {
3.         String str = "abcde";
4.         System.out.println(str.substring(2, 4));
5.     }
6. }`},
{ type: "text", value: "[memo:substring():substring()]"},
],
    options: `A. 「bcd」 と表示される
B. 「cde」と表示される
C. 「bc」と表示される
D. 「cd」と表示される`,
    explanation: `substring(beginIndex, endIndex) は、beginIndex から endIndex - 1 までの部分文字列を切り出します。
"abcde" において、インデックス 2 は 'c'、インデックス 4 は 'e' です。
したがって、インデックス 2 から 3 までの文字（'c' と 'd'）が切り出され、「cd」と表示されます。`
    },
    {
        id: 14,
        chapter: "ch02",
        text: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)",
        code: `1. public class Main {
2.     public static void main(String[] args) {
3.         String str = "aaaa";
4.         System.out.println(str.replace("aa", "b"));
5.     }
6. }`,
        options: `A. 「baa」と表示される
B. 「aab」と表示される
C. 「bb」と表示される
D. 「aba」と表示される`,
        answer: "C",
        explanation: `replace メソッドは、指定したターゲット文字列を先頭から順に走査し、マッチした部分をすべて置換します。
"aaaa" の先頭の "aa" が "b" に置換され、残りの "aa" も "b" に置換されるため、結果は「bb」となります。`
    },
    {
        id: 15,
        chapter: "ch02",
        text: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)",
        code: `1. public class Main {
2.     public static void main(String[] args) {
3.         String str = "abcde";
4.         System.out.println(str.charAt(str.length()));
5.     }
6. }`,
        options: `A. aが表示される
B. eが表示される
C. 5が表示される
D. -1が表示される
E. コンパイルエラーが発生する
F. 実行時に例外がスローされる`,
        answer: "F",
        explanation: `"abcde" の length() は 5 です。
有効なインデックス範囲は 0～4（str.length() - 1 まで）であるため、str.charAt(5) を呼び出すと問題11同様に StringIndexOutOfBoundsException 例外がスローされます。`
    },
    {
        id: 16,
        chapter: "ch02",
        text: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)",
        code: `1. public class Main {
2.     public static void main(String[] args) {
3.         String str = "abcde";
4.         System.out.println(str.substring(1, 3).startsWith("b"));
5.     }
6. }`,
        options: `A. 「true」 と表示される
B. 「false」と表示される
C. 「bc」と表示される
D. 「abc」 と表示される
E. コンパイルエラーが発生する
F. 実行時に例外がスローされる`,
        answer: "A",
        explanation: `1. str.substring(1, 3) により、インデックス 1～2 の部分文字列である "bc" が抽出されます。
2. "bc".startsWith("b") は、"bc" が "b" で始まっているかを検証するため true を返します。`
    },
    {
        id: 17,
        chapter: "ch02",
        text: "次のプログラムを実行し、「Hello, Java!」と表示したい。3行目の空欄に入るコードとして、正しいものを選びなさい。(1つ選択)",
        code: `1. public class Sample {
2.     public static void main(String[] args) {
3.         String str = □□□□□□□;
4.         System.out.println(str);
5.     }
6. }`,
        options: `A. "Hello, ".concat("Java!")
B. "Hello, ".append("Java!")
C. "Hello, ".add("Java!")
D. "Hello, ".plus ("Java!")`,
        answer: "A",
        explanation: `String クラスで文字列同士を結びつける（結合する）標準メソッドは concat() です。
（※append() は StringBuilder や StringBuffer のメソッドです）`
    },
    {
        id: 18,
        chapter: "ch02",
        text: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)",
        code: `1. public class Main {
2.     public static void main(String[] args) {
3.         System.out.println(10 + 20 + "30" + 40);
4.     }
5. }`,
        options: `A. 100が表示される
B. 10203040が表示される
C. 303040が表示される
D. コンパイルエラーが発生する
E. 実行時に例外がスローされる`,
        answer: "C",
        explanation: `演算子 + は左から順に評価されます：
1. 10 + 20 → 数値どうしの加算で 30
2. 30 + "30" → 数値と文字列の結合となり "3030"
3. "3030" + 40 → 文字列と数値の結合となり "303040"
よって、「303040」が表示されます。
ちなみに、一度文字列が挟まると、以後同様に文字列として扱うため、(10 + 20 + "30" + 40 + 50)の場合は、「30304050」となる。`
    },
    {
        id: 19,
        chapter: "ch02",
        text: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)",
        code: `1. public class Main {
2.     public static void main(String[] args) {
3.         String str = null;
4.         str += "null";
5.         System.out.println(str);
6.     }
7. }`,
        options: `A. 「null」と表示される
B. 「nullnull」と表示される
C. 何も表示されない
D. コンパイルエラーが発生する
E. 実行時に例外がスローされる`,
        answer: "B",
        explanation: `複合代入演算子（+=）で null 状態の String 変数に結合を行う場合、null は文字列の "null" として自動変換されます。
元々 null だった変数は文字列 "null" になり、そこに += "null" が実行されるため "nullnull" となります。
ちなみに、varの肩推論は、nullを扱えず、charや、intなどの基本データを扱うものも、nullは扱えない。Stringは参照型なので扱える。
また、演算子で書く場合は、自動でnullを文字列に変換するが、.Concat()の場合はエラーになる模様。`
    },
    {
        id: 20,
        chapter: "ch02",
        text: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)",
        code: `1. public class Main {
2.     public static void main(String[] args) {
3.         StringBuilder sb = new StringBuilder("abcde");
4.         System.out.println(sb.capacity());
5.     }
6. }`,
        options: `A. 0が表示される
B. 5が表示される
C. 16が表示される
D. 21が表示される`,
        answer: "D",
        explanation: `【StringBuilderの容量（capacity）の仕組み】
StringBuilder の初期容量は「デフォルト16文字分のバッファ」です。
文字列（例: "abcde"）を指定してインスタンスを生成した場合、容量は「指定した文字列の長さ (5) + デフォルトバッファ (16) = 21」となります。
StringBuilderは、Stringと違い、可変（Mutable）で書き換え可能な結合。`
    },
    {
        id: 21,
        chapter: "ch02",
        text: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)",
        code: `1. public class Main {
2.     public static void main(String[] args) {
3.         StringBuilder sb = new StringBuilder();
4.         sb.append("abcde");
5.         sb.reverse();
6.         sb.replace(1, 3, "a");
7.         System.out.println(sb);
8.     }
9. }`,
        options: `A. 「aade」 と表示される
B. 「ade」 と表示される
C. 「aba」と表示される
D. 「eaba」と表示される`,
        answer: "D",
        explanation: `1. sb.append("abcde") → "abcde"
2. sb.reverse() → "edcba" に反転
3. sb.replace(1, 3, "a") → インデックス 1 から 2（'d' と 'c'）が "a" に置換されるため "eaba" に変化します。`
    },
    {
        id: 22,
        chapter: "ch02",
        text: "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。(1つ選択)",
        code: `1. public class Sample {
2.     public static void main(String[] args) {
3.         StringBuilder sb = new StringBuilder("abcde");
4.         System.out.println(sb.indexOf("bcd"));
5.     }
6. }`,
        options: `A. 1が表示される
B. 2が表示される
C. 3が表示される
D. 4が表示される`,
        answer: "A",
        explanation: `StringBuilder の indexOf メソッドも String と同様の動きをします。
"abcde" の中で "bcd" が始まる位置のインデックス（'b' の位置）を返すため、1 となります。`
    });
