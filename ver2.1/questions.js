// ==========================================
// 1. 章タイトルの定義
// ==========================================
const chapterTitles = {
    "ch01": "1章 簡単なJavaプログラムの作成",
    "ch02": "2章 Javaの基本データ型の使用",
    "ch03": "3章 演算子と判定構造",
    "ch04": "4章 制御構造",
    "ch05": "5章 配列の操作",
    "ch06": "6章 インスタントとメソッド",
    "ch07": "7章 クラスの継承、インタフェース、抽象クラス",
   
};

// ==========================================
// 2. 問題データベース
// ==========================================
const questionsData = [
    {
        id: 1,
        chapter: "ch01",
        text: "パッケージに関する説明として、正しいものを選びなさい。（3つ選択）",
        code: "",
        options: `A. 名前空間を提供する
B. パッケージ名にはドメイン名を逆にしたものを使用しなければならない
C. アクセス制御を提供する
D. クラスの分類を可能にする
E. パッケージに属さないクラスもある`,
        answer: "A、C、D",
        explanation: `【パッケージの目的】
1. 名前空間を提供し、名前の衝突を避ける
2. アクセス修飾子と組み合わせてアクセス制御機能を提供する
3. クラスの分類を可能にする

選択肢A：クラス名が重複してもよいように、コンパイラやJVMは、クラスを「パッケージ名、クラス名」の完全修飾クラス名で扱う。
選択肢B：パッケージ名はできるだけ一意であることが推奨され、慣習としてドメイン名を逆にした文字列がパッケージ名に利用されるが、これはあくまでも慣習であって決まりごとではない。
選択肢C：パッケージごとに公開、非公開を制御できる。(public)
選択肢D：パッケージとディレクトリ構造をマッピングし、多数のクラスを分類整理可能。
選択肢E：クラスは何らかのパッケージに属する。無名パッケージがある。`
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
        id: 3,
        chapter: "ch01",
        text: "次のうち、インポート宣言をしなくても、自動的にインポートされるものはどれか。正しいものを選びなさい。(2つ選択)",
        code: "",
        options: `A. java.langパッケージに属するクラス
B. java.langパッケージのうち、StringクラスとSystemクラスの2つだけ
C. 同じパッケージに属するクラス
D. サブパッケージに属するクラス`,
        answer: "A、C",
        explanation: "java.lang.String、java.lang.Integerなど、import宣言しなくても省略可能。"
    },
    {
        id: 4,
        chapter: "ch01",
        text: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)",
        code: [ 
                `// Sample.java
1. public class Sample {
2.     protected int num = 10;
3. }`,
                
                `// SampleImpl.java
1. package ex4;
2. 
3. public class SampleImpl extends Sample {
4.     public static void main(String[] args) {
5.         System.out.println(num);
6.     }
7. }`],
        options: `A. 0が表示される
B. 10が表示される
C. コンパイルエラーが発生する
D. 実行時に例外がスローされる`,
        answer: "C",
        explanation: "同じパッケージに所属しているクラスならば可能。Javaでは、無名パッケージにあるクラスを、名前付きパッケージ（ex4など）からインポートして使用することはできません。そのため、そもそも extends Sample の時点で参照エラーとなります。そのため、コンパイルエラーになる。"
    },
    {
        id: 5,
        chapter: "ch01",
        text: "アプリケーションのエントリーポイントとなるメソッドの条件として、正しいものを選びなさい。(3つ選択)",
        code: "",
        options: `A. publicであること
B. staticであること
C. 1つのソースファイルに複数記述できる
D. 戻り値型はintであること
E. 引数は String配列型もしくはString型の可変長引数であること
F. 戻り値として0、もしくは1を戻すこと`,
        answer: "A、B、E",
        explanation: `mainメソッドに関する問題。（エントリーポイント→処理を始めるためのメソッド）
【エントリーポイントの規則】
・公開されていること（public）
・インスタンスを生成しなくても実行できること（static）
・戻り値は戻せない（void）
・メソッド名はmainであること
・引数はString配列型を1つ受け取ること
public void main (String args[]) { } // argsは可変のもよう。`
    },
    {
        id: 6,
        chapter: "ch01",
        text: "次のプログラムを以下に示したコマンドで実行したときの結果として、正しいものを選びなさい。(1つ選択)",
        code: [
            `> java Main java one two`,
            `1. public class Main {
2.     public static void main (String[] args) {
3.         System.out.println (args[0] + " " + args[1]);
4.     }
5. }`
        ],
        options: `A. 「Main java」と表示される
B. 「java one」と表示される
C. 「one two」と表示される
D. コンパイルエラーが発生する
E. 実行時に例外がスローされる`,
        answer: "B",
        explanation: `javaコマンドの問題。
java 完全修飾クラス名 [ 引数 引数 … ]
今回は、「java」、「one」、「two」の引数が与えられている。`
    },
    {
        id: 7,
        chapter: "ch01",
        text: "次のうち、Javaのクラスを実行するコマンドとして、正しいものを選びなさい。(2つ選択)",
        code: "",
        options: `A. javac Test.java
B. java Test
C. java Test.java
D. javac Test
E. javap Test
F. jmod Test.java`,
        answer: "B、C",
        explanation: `javaコマンドの問題。
java 完全修飾クラス名 [ 引数 引数 … ]
（※Java 11以降では 「java Test.java」 のようにソースコードを直接実行することも可能です）`
    },
    {
        id: 8,
        chapter: "ch01",
        text: "以下に示したSampleクラスを実行したときの結果として、正しいものを選びなさい。なお、実行時のコマンドは次のとおりとする。(1つ選択)",
        code: [`> java Sample a \\\" a\\\" \"a \"b c`,
                `1. public class Sample {
2.     public static void main(String... args) {
3.         System.out.println(args.length);
4.     }
5. }`

        ]
        ,
        options: `A. 4が表示される
B. 5が表示される
C. 6が表示される
D. 7が表示される`,
        answer: "B",
        explanation: `起動パラメータの問題。空白のみで区切る。ダブルクォーテーションは反映されない。エスケープされると、ダブルクォーテーションも文字として反映される。また、空白を含めた文字をパラメータに指定したい場合は、ダブルクォーテーションで区切る。（スペースがないものは1つの塊とみなされるため、直後に空白がなければ連結される）
今回実行すると、①a ②" ③a" ④a b ⑤c が表示される。（今回はlengthなので、正解は5）。`
    },

    
// ==========================================
// 2章 問題データベース
// ==========================================

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
D：'sample' はシングルクォーテーションで囲まれた複数文字のため、文法エラーとなります。`
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
        text: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)",
        code: `1. public class Main {
2.     public static void main(String[] args) {
3.         String str = "abcde";
4.         System.out.println(str.substring(2, 4));
5.     }
6. }`,
        options: `A. 「bcd」 と表示される
B. 「cde」と表示される
C. 「bc」と表示される
D. 「cd」と表示される`,
        answer: "D",
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
    },
// ==========================================
// 3章 問題データベース
// ==========================================
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
        explanation: ``
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
14.             return s.nun == this.num;
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
3.     Sample a = new Sample(10, "a");
4.     Sample b = new Sample(10, "b");
5.     System.out.println(a.equals(b));
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
    explanation: ""
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
    explanation: ""
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
        explanation: ``
    },
    {
        id: 13,
        chapter: "ch03",
        text: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)",
        code: `1. public class Main {
2.     public static void main(String[] args) {
3.         String a = new String("sample");
4.         String b = "sample":
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
        explanation: ``
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
8.          if (a. intern() == "abc") {
9.              count++;
10.         }
11.         if (b.intern() == "abc") {
12.             count++;
13.         }
14.         if (a. intern() == b. intern()) {
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
        explanation: ``
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
        explanation: ``
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
    },
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
3.          int array[][]= new int[][] { {1, 2}, {2, 3, 4}};
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
3.          String[] array("A", "B", "C");
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
        explanation: `拡張for文`
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
        explanation: ``
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
8.                  total += 1;
9.          }
10.     System.out.println(total);
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
        explanation: ``
    },
    {
        id: 17,
        chapter: "ch04",
        text: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)",
        code: `1.  public class Main {
2.      public static void main(String[] args) {
3.          int total = 0;
4.          a: for (int i = 0; i < 5; 1++) {
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
    },
// ==========================================
// 5章 問題データベース
// ==========================================
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
        explanation: ``
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
        explanation: ``
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
        explanation: ""
    },
    {
        id: 10,
        chapter: "ch05",
        text: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)",
        code: `1.  public class Main {
2.      public static void main(String[] args) {
3.          int[ ][ ] arrayA = {{1, 2}, {1, 2)}, {1, 2, 3}};
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
    },
// ==========================================
// 6章 問題データベース
// ==========================================
    {
    id: 1,
    chapter: "ch06",
    contents: [
        { type: "text", value: "次のプログラムを確認してください。" },
        { 
            type: "code", 
            value: `1. public class Item {
2.     private int num = 10;
3.     public void setNun(int num) {
4.         this.num = num;
5.     }
6.     public int getNum() {
7.         return this.num;
8.     }
9. }
` },
        { type: "text", value: "このクラスを利用する以下のプログラムを、コンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. public class Main {
2.     public static void main(String[] args) {
3.         Item a = new Item();
4.         Item b = new Item();
5.         b.setNum(20);
6.         System.out.println(a.getNum());
7.     }
8. }
` }
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
    id: 2,
    chapter: "ch06",
    contents: [
        { type: "text", value: "次のプログラムを確認してください。" },
        { 
            type: "code", 
            value: `1. public class Item {
2.     public String name;
3.     public int price;
4.     public void printInfo() {
5.         System.out.println(name + ", " + price);
6.     }
7. }
` },
        { type: "text", value: "このクラスを利用する以下のプログラムを、コンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  public class Main {
2.      public static void main(String[] args) {
3.          Item a = new Item();
4.          Item b = new Item();
5.          a.name = "apple";
6.          b.price = 100;
7.          a.price = 200;
8.          b.name = "banana";
9.          a = b;
10.         a.printInfo();
11.     }
12. }
` }
    ],
    options: `A. 「apple, 100」と表示される
B. 「banana, 100」と表示される
C. 「apple, 200」と表示される
D. 「banana, 200」と表示される
E. 実行時に例外がスローされる
F. コンパイルエラーが発生する
`,
    answer: "B",
    explanation: ""
},
    {
        id: 3,
        chapter: "ch06",
        text: "次のプログラムを実行し、「NULL」と表示したい。3行目の空欄に入るコードとして、正しいものを選びなさい。(1つ選択)",
        code: `1. public class Main {
2.     public static void main(String[] args) {
3.         □□□□□□□□
4.         System.out.println(obj);
5.     }
6. }
`,
        options: `A. Object obj = null;
B. Object obj = false;
C. Object obj = NULL;
D. Object obj = " ";
E. 選択肢AとCのどちらも可能である
F. 選択肢A~Eはすべて誤りである
`,
        answer: "F",
        explanation: ``
    },
    {
        id: 4,
        chapter: "ch06",
        text: "次のプログラムを実行し、7行目が終了したときにガベージコレクションの対象となるインスタンスはどれか。正しい説明を選びなさい。(1つ選択)",
        code: `1.  public class Main {
2.      public static void main(String[] args) {
3.      Object a = new Object();
4.      Object b = new Object();
5.      Object c = a;
6.      a = null;
7.      b = null;
8.      // more code
9.      }
10. }
`,
        options: `A. 3行目で作成したインスタンスだけが、ガベージコレクションの対象となる
B. 4行目で作成したインスタンスだけが、ガベージコレクションの対象となる
C. 3行目と4行目で作成したインスタンスが、ガベージコレクションの対象となる
D. ガベージコレクションの対象となるインスタンスは存在しない
`,
        answer: "B",
        explanation: ``
    },
    {
    id: 5,
    chapter: "ch06",
    contents: [
        { type: "text", value: "次のプログラムを確認してください。" },
        { 
            type: "code", 
            value: `1. public class Sample {
2.     static int num = 0;
3. }
` },
        { type: "text", value: "このクラスを利用する以下のクラスを、コンパイル、実行したときの結果として正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  public class Main {
2.      public static void main(String[] args) {
3.          Sample.num = 10;
4.          Sample s = new Sample();
5.          Sample s2 = new Sample();
6.          s.num += 10;
7.          s2.num = 30;
8.          System.out.println(Sample.num);
9.      }
10. }
` }
    ],
    options: `A. 10が表示される
B. 20が表示される
C. 30が表示される
D. Mainクラスの3行目でコンパイルエラーが発生する
E. 実行時に例外がスローされる
`,
    answer: "C",
    explanation: "staticクラスは、static領域上にあるひとつの変数を参照することになる。"
},
    {
        id: 6,
        chapter: "ch06",
        text: "次の中から、正しい説明を選びなさい。(2つ選択)",
        code: ``,
        options: `A. staticなメソッドからは、staticなメソッドを呼び出せない
B. staticなメソッドからは、staticではないフィールドにアクセスできる
C. staticなメソッドからは、staticではないメソッドを呼び出せる
D. staticなメソッドからは、staticなフィールドにアクセスできる
E. staticではないメソッドからは、staticなフィールドにアクセスできる
F. staticではないメソッドからは、staticなメソッドを呼び出せない
`,
        answer: "D、E",
        explanation: ``
    },
    {
    id: 8,
    chapter: "ch06",
    contents: [
        { type: "text", value: "次のプログラムを確認してください。" },
        { 
            type: "code", 
            value: `1. public class Sample {
2.     public int add(Integer a, Integer b) {
3.         return a + b;
4.     }
5. }
`},
        { type: "text", value: "このクラスを利用する以下のプログラムを、コンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. public class Main {
2.     public static void main(String[] args) {
3.         Sample s = new Sample();
4.         System.out.println(s.add(10));
5.     }
6. }
` }],
    options: `A. 「10」と表示される
B. 「10null」 と表示される
C. 「void」と表示される
D. コンパイルエラーが発生する
E. 実行時に例外がスローされる
`,
    answer: "D",
    explanation: ""
    },
    {
        id: 9,
        chapter: "ch06",
        text: "次のプログラムの5行目に記述できるコードとして、正しいものを選びなさい。(2つ選択)",
        code: `1. public class Main {
2.     public static void main(String[] args) {
3.         int a = 1;
4.         int b = 2;
5.         □□□□□□□
6.         int c = b;
7.     }
8. }
`,
        options: `A. System.out.println(a);
B. System.out.println(b + 2);
C. System.out.println(c);
D. System.out.println(d);
`,
        answer: "A、B",
        explanation: ``
    },
    {
        id: 10,
        chapter: "ch06",
        text: "次の中から、メソッド宣言の記述として正しいものを選びなさい。(1 つ選択)",
        code: ``,
        options: `A. Void sample( ) { }
B. void sample( ) { return "sample"; }
C. sample() { }
D. int sample() {return "sample";}
E void sample() { }
`,
        answer: "E",
        explanation: ``
    },
    {
    id: 11,
    chapter: "ch06",
    contents: [
        { type: "text", value: "次のプログラムを確認してください。" },
        { 
            type: "code", 
            value: `1. public class Sample {
2.     private String value;
3.     public void setValue(String value) {
4.         this.value = value:
5.     }
6.     public String getValue() {
7.         return this.value;
8.     }
9. }
` },
        { type: "text", value: "このクラスを利用する以下のプログラムの説明として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. public class Main {
2.     public static void main(String[] args) {
3.         Sample s = new Sample();
4.         String val = s.setValue("hello");
5.         s.getValue();
6.         System.out.println(val);
7.     }
8. }
` }
    ],
    options: `A. Mainクラスの4行目でコンパイルエラーが発生する
B. Mainクラスの5行目でコンパイルエラーが発生する
C. Mainクラスの4行目と5行目でコンパイルエラーが発生する
D. 何も表示されない
E. nullが表示される
F. 実行時に例外がスローされる
`,
    answer: "A",
    explanation: "戻り値voidのため、String valで受け取れない。"
    },
    {
    id: 12,
    chapter: "ch06",
    contents: [
        { type: "text", value: "次のプログラムを確認してください。" },
        { 
            type: "code", 
            value: `1. public class Sample {
2.     float divide(int a, int b) {
3.         return (float) a / (float) b;
4.     }
5. }
` },
        { type: "text", value: "このクラスを利用する以下のプログラムの空欄に入るコードとして、正しいものを選びなさい。(2つ選択)" },
        { 
            type: "code", 
            value: `1. public class Main {
2.     public static void main(String[] args) {
3.         Sample s = new Sample();
4.         ☐☐☐☐☐☐ result = s.divide(10, 2);
5.         System.out.println(result);
6.     }
7. }
` }
    ],
    options: `A. int
B. float
C. double
D. Integer
E. String
F. dim
`,
    answer: "B、C",
    explanation: ""
    },
    {
    id: 13,
    chapter: "ch06",
    contents: [
        { type: "text", value: "次のプログラムを確認してください。" },
        { 
            type: "code", 
            value: `1. public class Sample {
2.     public int method(int a, int b) {
3.         return a + b;
4.     }
5. }
` },
        { type: "text", value: "このクラスを利用する以下のプログラムを、コンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. public class Main {
2.     public static void main(String[] args) {
3.         Sample s = new Sample();
4.         int result = s.method(2);
5.         System.out.println(result);
6.     }
7. }
` }
    ],
    options: `A. 0が表示される
B. 2が表示される
C. コンパイルエラーが発生する
D. 実行時に例外がスローされる
`,
    answer: "C",
    explanation: ""
    },
    {
        id: 14,
        chapter: "ch06",
        text: "次の中から、メソッドの宣言として正しいものを選びなさい。(1つ選択)",
        code: "",
        options: `A void method (void){ }
B. void method(int values...) { }
C. void method(int... values, String name) { }
D. void method(int... a. int... b) { }
E. 選択肢CとDの両方とも正しい
F. 選択肢はすべて正しい
G. 選択肢はすべて間違っている
`,
        answer: "G",
        explanation: `可変長引数に関する問題。
void Sample (int... num) { }のようにすることで、引数をいくつでも渡せる。
可変長引数を使う時の注意点。
・同じ型でまとめる必要がある。
・可変長引数以外の引数を受け取る場合は、可変長引数を最後の引数にする`
    },
    {
        id: 15,
        chapter: "ch06",
        text: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)",
        code: `1. public class Sample {
2.     public void method(int num) {
3.         if (num < 0) return;
4.         System.out.println("A");
5.         return;
6.         System.out.println("B");
7.     }
8. }
`,
        options: `A. 3行目でコンパイルエラーが発生する
B. 5行目でコンパイルエラーが発生する
C. 6行目でコンパイルエラーが発生する
D. 「A」と表示される
E. 「A」「B」と表示される
`,
        answer: "C",
        explanation: `return文の下など、到達不可能なコードがあるとコンパイルエラーになる。`
    },
    {
        id: 16,
        chapter: "ch06",
        text: "次のメソッドをオーバーロードしていないメソッド定義を選びなさい。 (2つ選択)",
        code: `1. int calc(double a, int b) {
2.     return (int) a + b;
3. }
`,
        options: `A. int calc (int a) { }
B. double calc(double a, int b) { }
C. int calc(double a, double b) { }
D. int calc(double num1, int num2) { }
E. int calc( ) { }
F. int calc(int a, double b) { }
`,
        answer: "B、D",
        explanation: `オーバーロードに関する問題。引数の数や型、順番が異なることで、同名のメソッドを複数定義可能。`
    },
    {
        id: 17,
        chapter: "ch06",
        text: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)",
        code: `1.  public class Main {
2.      public static void main(String[] args) {
3.          Main m = new Main();
4.          System.out.println(m.calc(2, 3));
5.      }
6.      private double calc(double a, int b) {
7.          return (a + b) / 2;
8.      }
9.      private double calc(int a, double b) {
10.         return (a + b) / 2;
11.     }
12. }
`,
        options: `A. 4行目でコンパイルエラーが発生する
B. 6行目でコンパイルエラーが発生する
C. 9行目でコンパイルエラーが発生する
D. 選択肢BとCの両方
E. 2.5が表示される
`,
        answer: "A",
        explanation: ``
    },
    {
        id: 18,
        chapter: "ch06",
        text: "次のメソッドをオーバーロードするメソッド定義として、正しいものを選びなさい。(1つ選択)",
        code: `1. void method() {
2.     // do something
3. }
`,
        options: `A. public void method( ) { }
B. protected void method( ) { }
C. private void method( ) { }
D. 選択肢A~Cまで、すべて正しい
E. 選択肢A~Cまで、すべて誤りである
`,
        answer: "E",
        explanation: `アクセス修飾子が異なるだけではオーバーロードではない。`
    },
    {
        id: 19,
        chapter: "ch06",
        text: "Sampleというクラスを定義しようと考えている。このクラスに定義するコンストラクタを修飾できるアクセス修飾子についての説明として、 正しいものを選びなさい。(1つ選択)",
        code: ``,
        options: `A. publicなコンストラクタのみ定義できる
B. public protectedなコンストラクタのみ定義できる
C. private以外のコンストラクタが定義できる
D. コンストラクタを修飾するアクセス修飾子に制限はない
E. アクセス修飾子で修飾することはできない
`,
        answer: "D",
        explanation: `コンストラクタのアクセス修飾子に関する問題。
・メソッド名とクラス名は同じにすること
・戻り値型は記述できない
・newと一緒にしか使えない`
    },
{
    id: 20,
    chapter: "ch06",
    contents: [
        { type: "text", value: "次のプログラムを確認してください。" },
        { 
            type: "code", 
            value: `1. public class Sample {
2.     void Sample( ) {
3.         System.out.println("hello.");
4.     }
5. }
` 
        },
        { type: "text", value: "このクラスを利用する以下のプログラムを、コンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. public class Main {
2.     public static void main(String[] args) {
3.         Sample s = new Sample();
4.         s.Sample();
5.     }
6. }
` 
        }
    ],
    options: `A. 「hello.」と表示される
B. 「hello.hello.」と表示される
C. Sampleクラスでコンパイルエラーが発生する
D. Mainクラスでコンパイルエラーが発生する
E. 実行時に例外がスローされる
`,
    answer: "A",
    explanation: "今回は戻り値があるので、void Sample()はメソッド。Javaでは、クラス名とメソッド名が同じでも問題ない。"
},
{
    id: 21,
    chapter: "ch06",
    contents: [
        { type: "text", value: "次のプログラムを確認してください。" },
        { 
            type: "code", 
            value: `1. public class Sample {
2.     Sample( ) {
3.         System.out.println("A");
4.     }
5.     {
6.         System.out.println("B");
7.     }
8. }
` 
        },
        { type: "text", value: "このクラスを利用する以下のプログラムを、コンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. public class Main {
2.     public static void main(String[] args) {
3.         Sample s = new Sample();
4.     }
5. }
` 
        }
    ],
    options: `A. 「A」「B」と表示される
B. 「B」「A」と表示される
C. 「A」と表示される
D. 「B」と表示される
E. Sampleクラスでコンパイルエラーが発生する
F. Mainクラスでコンパイルエラーが発生する
G. 実行時に例外がスローされる
`,
    answer: "B",
    explanation: ""
},
{
        id: 22,
        chapter: "ch06",
        text: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)",
        code: [ 
                `1. public class Sample {
2.     static int num;
3.     {
4.         num = 10;
5.     }
6.     public Sample( ) {
7.         num = 100;
8.     }
9. }
`,
                `1. public class Main {
2.     public static void main(String[] args) {
3.         System.out.println(Sample.num);
4.     }
5. }
`],
        options: `A. 0が表示される
B. 10が表示される
C. 100が表示される
D. コンパイルエラーが発生する
`,
        answer: "A",
        explanation: ""
    },
{
    id: 23,
    chapter: "ch06",
    contents: [
        { type: "text", value: "次のプログラムを確認してください。" },
        { 
            type: "code", 
            value: `1. public class Sample {
2.     void Sample( ) {
3.         System.out.println("A");
4.     }
5.     Sample(String str) {
6.         System.out.println(str);
7.     }
8. }
` 
        },
        { type: "text", value: "このクラスを利用する以下のプログラムを、コンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. public class Main {
2.     public static void main(String[] args) {
3.         Sample s = new Sample();
4.     }
5. }
` 
        }],
    options: `A.「A」と表示される
B. 「null」と表示される
C. 何も表示されない
D. コンパイルエラーが発生する
E. 実行時に例外がスローされる
`,
    answer: "D",
    explanation: ""
},
{
        id: 24,
        chapter: "ch06",
        text: "次のプログラムを実行し、コンソールに「ok.」と表示したい。3行目の空欄に入るコードとして、正しいものを選びなさい。(1つ選択)",
        code: [ 
                `
1. public class Sample {
2.     public Sample() {
3.         □□□□□□
4.     }
5.     public Sample(String str, int num) {
6.         System.out.println("ok.");
7.     }
8. }
`,
                `1. public class Main {
2.     public static void main(String[] args) {
3.         Sample s = new Sample();
4.     }
5. }
`],
        options: `A. Sample(null, 0);
B. this (null, 0);
C. super (null, 0);
D. this.Sample(null, 0);
`,
        answer: "B",
        explanation: ""
    },
{
        id: 25,
        chapter: "ch06",
        text: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)",
        code: [ 
                `1. public class Sample {
2.     public Sample() {
3.         System.out.println("A");
4.         this("B");
5.     }
6.     public Sample(String str) {
7.         System.out.println(str);
8.     }
9. }
`,
                `1. public class Main {
2.     public static void main(String[] args) {
3.         Sample s = new Sample();
4.     }
5. }
`],
        options: `A. 「A」「B」と表示される
B. 「B」「A」と表示される
C. 「A」と表示される
D. 「B」と表示される
E. コンパイルエラーが発生する
F. 実行時に例外がスローされる
`,
        answer: "E",
        explanation: ""
    },
    {
    id: 26,
    chapter: "ch06",
    contents: [
        { type: "text", value: "次のプログラムを確認してください。" },
        { 
            type: "code", 
            value: `1. package ex26;
2.
3. public class Parent {
4.     int num = 10;
5. }
` 
        },
        { type: "text", value: "このクラスを利用する以下のプログラムを、コンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. package other;
2. import ex26.Parent;
3.
4. public class Child extends Parent {
5.     public static void main(String[] args) {
6.         System.out.println(new Child().num);
7.     }
8. }
` 
        }],
    options: `A. 0が表示される
B. 10が表示される
C. Childクラスの4行目でコンパイルエラーが発生する
D. Childクラスの6行目でコンパイルエラーが発生する
E. 実行時に例外がスローされる
`,
    answer: "D",
    explanation: ""
},
{
    id: 27,
    chapter: "ch06",
    contents: [
        { type: "text", value: "次のプログラムを確認してください。" },
        { 
            type: "code", 
            value: `1.  package other;
2. 
3.  public class Book {
4.      private String isbn;
5.      public void setIsbn(String isbn) {
6.          this.isbn = isbn;
7.      }
8.      protected void printInfo() {
9.          System.out.println(isbn);
10.     }
11. }
` },
        { type: "text", value: "このクラスを利用する以下のプログラムを、コンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. package ex27;
2. import other.Book:
3.
4. public class StoryBook extends Book {}
` 
        },
{ 
            type: "code", 
            value: `1. package ex27;
2. public class Main {
3.     public static void main(String[] args) {
4.         StoryBook story new StoryBook();
5.         story.setIsbn("xxx-x-xxxxxx-xx-x");
6.         story.printInfo();
7.     }
8. }
` 
        }],
        
    options: `A. 「null」と表示される
B. 「ххх-х-хxхххх-хх-х」と表示される
C. コンパイルエラーが発生する
D. 実行時に例外がスローされる
`,
    answer: "C",
    explanation: ""
},
{
    id: 28,
    chapter: "ch06",
    contents: [
        { type: "text", value: "次のプログラムを確認してください。" },
        { 
            type: "code", 
            value: `1. public class Sample {
2.     int nun;
3.     int getNun( ){ return num; }
4.     void setNum(int num) { this.num = num; }
5. }
` },
        { type: "text", value: "このクラスにカプセル化を適用したい。次の中から正しいコードを選びなさい。(1つ選択)" },
        ],
    options: [
            {
                label: "A",
                code: `public class Sample {
    private int num;
    private int getNum() { return num; }
    private void setNum(int nun) {this.num = num; }
}
`},
            {
                label: "B",
                code: `public class Sample {
    public int num;
    public int getNum( ) {return num; }
    public void setNum(int num) {this.num = num;}`
            },
            {
                label: "C",
                code: `public class Sample {
    public int num;
    private int getNum() {return nun; } 
    private void setNum(int num) {this.num = num;}
}`
            },
            {
                label: "D",
                code: `public class Sample {
    private int num; 
    public int getNum( ) { return num; } 
    private void setNum(int nun) { this.num = num; }`
            }
        ],
    answer: "D",
    explanation: ""
},
{
    id: 29,
    chapter: "ch06",
    contents: [
        { type: "text", value: "次のプログラムを確認してください。" },
        { 
            type: "code", 
            value: `1. public class Sample {
2.     int num;
3.     public Sample(int num) {
4.         this.num = num;
5.     }
6. }
` },
        { type: "text", value: "このクラスを利用する以下のプログラムを、コンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  public class Main {
2.      public static void main(String[] args) {
3.          Sample s = new Sample(10);
4.          modify(s.num);
5.          System.out.println(s.num);
6.      }
7.      private static void modify(int num) {
8.          num *= 2;
9.      }
10. }
` 
        },],
    options: `A. 10が表示される
B. 20が表示される
C. コンパイルエラーが発生する
D. 実行時に例外がスローされる
`,
    answer: "A",
    explanation: ""
},
{
    id: 30,
    chapter: "ch06",
    contents: [
        { type: "text", value: "次のプログラムを確認してください。" },
        { 
            type: "code", 
            value: `1. public class Sample {
2.     int num;
3.     public Sample(int num) {
4.         this.num = num;
5.     }
6. }
` },
        { type: "text", value: "このクラスを利用する以下のプログラムを、コンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  public class Main {
2.      public static void main(String[] args) {
3.          Sample s = new Sample(10);
4.          modify(s);
5.          System.out.println(s.num);
6.      }
7.      private static void modify(Sample s) {
8.          s.num *= 2;
9.      }
10. }
` 
        },],
    options: `A. 10が表示される
B. 20が表示される
C. コンパイルエラーが発生する
D. 実行時に例外がスローされる
`,
    answer: "B",
    explanation: ""
},
// ==========================================
// 7章 問題データベース
// ==========================================
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
        explanation: ""
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
    options: `A インタフェースAのsampleメソッドをdefaultで修飾しなければいけない
B. インタフェースAのsampleメソッドを削除し、Bクラスにsampleメソッドを追加しなければいけない
C. 実行時に例外がスローされる
D. 「sample」と表示される
`,
    answer: "A",
    explanation: "クラスの継承問題。子クラスで定義されていないものは、親クラスで定義している必要がある。"
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
3.         А а = пеw В();
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
    explanation: ""
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
3.         А а = пеw C();
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
    explanation: ""
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
3.         AbstractSamples new ConcreteSample();
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


];
