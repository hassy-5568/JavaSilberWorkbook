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
    "ch08": "8章 関数型インターフェース、ラムダ式",
    "ch09": "9章 API",
    "ch10": "10章 例外処理",
    "ch11": "11章 モジュールシステム",
    "ch12": "12章 総仕上げ問題①",
   
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
3.     public void setNum(int num) {
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
        explanation: `Javaの System.out.println(obj); で「NULL」（すべて大文字）と出力させるには、文字列リテラル "NULL" を代入する必要があります。
A. (null) は小文字の null が出力されます。
B. (false) は false が出力されます。
C. (NULL) は予約語/変数エラーでコンパイルエラーになります。
D. (" ") は半角スペースが出力されます。`
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
        explanation: `変数cにて参照が保持される。`
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
    explanation: "ちなみに、intとintgerは同じように扱える。"
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
E. void sample() { }
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
4.         this.value = value;
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
    explanation: `クラスの中に{ }だけで囲んで記述することで、インスタンス初期化ブロックを作成できる。実行手順は、インスタンス初期化ブロック　→　コンストラクタの順番`,
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
        explanation: `インスタンスを生成していないため、static int numにはまだ初期値がはいっていない。`,
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
        explanation: `コンストラクタが二つあるため、Sample()コンストラクタから、Sample(String str, int num)コンストラクタを呼び出す必要がある。同じクラス内の別のコンストラクタを呼び出すときには、this(...)を使う。`,
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
        explanation: `thisは、コンストラクタの一番最初に来る必要がある。this("B")の跡に、println("A")を実行することは可能。`,
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
    explanation: `子クラスであっても、privateな変数は、別のパッケージからはアクセスできない。`,
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
4.         StoryBook story = new StoryBook();
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
    explanation: `protected。別パッケージにある子クラスにもアクセスできる修飾子`
},
{
    id: 28,
    chapter: "ch06",
    contents: [
        { type: "text", value: "次のプログラムを確認してください。" },
        { 
            type: "code", 
            value: `1. public class Sample {
2.     int num;
3.     int getNum( ){ return num; }
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
    explanation: `privateなどの修飾子がない場合は、パッケージ私的扱いになる。`,
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
    explanation: `toString(), equals(), hashCode() などの Object クラス由来のメソッドを default メソッドにするのは NG $\rightarrow$ コンパイルエラー`,
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
    explanation: `インターフェース名.super.メソッド名にて、オーバーライド前のインターフェースを呼び出せる。今回、CはimplementsBのため、Aのインターフェースは呼び出せない。;`
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
    explanation: ""
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
6.         a. create();
7.         b.work();
8.         c. report();
9.     }
10. }
`},
],
    options: `A. Mainクラスの6行目でコンパイルエラーが発生する
B. Mainクラスの7行目でコンパイルエラーが発生する
C. Mainクラスの8行目でコンパイルエラーが発生する
D. 選択肢AとBの両方
E. 選択肢とCの両方
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
7.             пеw D()
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
    explanation: ""
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
    explanation: ""
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
    explanation: ""
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
    options: `A. this.num num;
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
    explanation: ""
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
},
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
    chapter: "ch08",
    contents:[
        { type: "text", value: "次のプログラムの 「// insert code here」 に入るコードとして、誤っているものを選びなさい。(2つ選択)" },
        { 
            type: "code", 
            value: `1. public class Main {
2.     public static void main(String[] args) {
3.         // insert code here
4.     System.out.println(f.test("Lambda"));
5.     }
6.     private static interface Function {
7.         String test(String name);
8.     }
9. }
`},
],
    options: `A. Function f = (name) -> {
　     return "hello," + name;
　 };
B. Function f = (name) -> {
　     "hello, " + name;
　 };
C. Function f = (name) -> return "hello, " + name;
D. Function f = (name) -> "hello, " + name;
E. Function f = name -> {
　     return "hello, " + name;
　  };
`,
    answer: "B、C",
    explanation: `ラムダ式。
(引数) -> { 処理内容 }。
また、{ }を省略して記述する場合は、returnも省略できる。
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
    explanation: ""
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
4.          Runnable r = () -> {
5.              for (cnt = 0; cnt < 10; cnt++) {
6.                  System.out.println(cnt++);
7.              }
8.          };
9.      new Thread(r).start();
10.     }
11. }
`},
],
    options: `A. A 0123456789が表示される
B. 02468が表示される
C. 13579が表示される
D. コンパイルエラーが発生する
E. 実行時に例外がスローされる
`,
    answer: "D",
    explanation: ""
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
    explanation: ""
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
},
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
B. n = (int) (m * (Math.pow(x, (1 + r)) - 1) / г);
C. n = (int) (m * (Math.sqrt((1 + r)) - 1) / r);
D. n = (int) (m * (Math.sqrt((1 + r), x) - 1) / г);
`,
    answer: "B",
    explanation: ""
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
B. list.sort(() -> a. compareTo(b));
C. list.sort((a) -> a. compareTo(b));
D. list.sort((a, b) -> -a.compareTo(b));
`,
    answer: "D",
    explanation: ""
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
    explanation: ""
},
{
    id: 5,
    chapter: "ch09",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. import java. time. LocalDate;
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
    explanation: ""
},
{
    id: 6,
    chapter: "ch09",
    contents:[
        { type: "text", value: "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。なお、現在の日付を2019年8月20日とする。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  import java. time. DayOfWeek;
2.  import java. time. LocalDate:
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
    explanation: ""
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
    explanation: ""
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
    explanation: ""
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
    explanation: ""
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
    explanation: ""
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
    explanation: ""
},
{
    id: 14,
    chapter: "ch09",
    contents:[
        { type: "text", value: "次のうち、値を変更できないか、固定長のリストを作るものを選びなさい。(2つ選択)" },
        ],
    options: `A. var list = List. of(1,2,3);
B. var list = new ArrayList<Integer>();
C. var list = Arrays.asList(new Integer() {1,2,3});
D. var list = new ArrayList<Integer>(3);
`,
    answer: "A、C",
    explanation: ""
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
    explanation: ""
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
    explanation: ""
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
    explanation: ""
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
6.          Map<Integer, Iten> map = new HashMap<Integer, Item>();
7.          map.put(1, new Item(1, "A"));
8.          map.put(2. new Item(2. "B"));
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
    explanation: ""
},
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
},
{
    id: 1,
    chapter: "ch11",
    contents:[
        { type: "text", value: "次の説明のうち、正しいものを選びなさい。(2つ選択)" },
        
],
    options: `A. モジュールの設定は、module-info.javaに記述する
B. モジュールの設定では、どのパッケージを公開するかを記述する
C. モジュールの設定では、どのパッケージを利用するかを記述する
D. module-info.javaがなくてもモジュール化することができる
`,
    answer: "A、B",
    explanation: ""
},
{
    id: 2,
    chapter: "ch11",
    contents:[
        { type: "text", value: "libディレクトリにあるsampleモジュールを実行したい。エントリーポイントを持つクラスをcom.test. Helloとしたときのコマンドとして正しいものを選びなさい。(1つ選択)" },
        ],
    options: `A. java -m lib sample/com.test.Hello
B. java --module-path lib com.test.Hello
C. java --module-path lib -m com.test.Hello
D. java --module-path lib -m sample/com.test.Hello
E. java --module-path lib -m sample.com.test.Hello
`,
    answer: "D",
    explanation: ""
},
{
    id: 3,
    chapter: "ch11",
    contents:[
        { type: "text", value: "sampleモジュールは、com.sampleパッケージを公開し、testモジュールを利用している。module-info.javaの設定として、正しいものを選びなさい。(1つ選択)" },
        ],
    options: `A. module sample {
　     exports test;
　     requires com.sample;
　 }
B. module sample {
　     export com.sample;
　     require test;
　 }
C. module sample {
　     requires com.sample;
　     requires test;
　 }
D. module sample {
　     exports com.sample;
　     requires test;
　 }
`,
    answer: "D",
    explanation: ""
},
{
    id: 4,
    chapter: "ch11",
    contents:[
        { type: "text", value: "次の図のようなモジュールグラフがあったとき、module1 でmodule3 に属するパッケージのクラスを利用する際の説明として正しいものを選びなさい。(1つ選択)" },
        { type: "image",
          src: "Image/11_4.png",
          alt: "11章4問目の図"
        },
    ],
    options: `A. module1@module-info.javaで、module2をrequiresで宣言する
B. module1@module-info.javaで、module2をrequires transitiveで宣言する
C. module2のmodule-info.javaで、module3をrequiresで宣言する
D. module2@module-info.javaで、module3をrequires transitiveで宣言する
`,
    answer: "D",
    explanation: ""
},
{
    id: 5,
    chapter: "ch11",
    contents:[
        { type: "text", value: "あらかじめ用意されているモジュールのうち、標準で組み込まれるモジュールとして、正しいものを選びなさい。(1つ選択)" },

    ],
    options: `A. java.lang
B. java.base
C. jdk.lang
D. jdk.base
`,
    answer: "B",
    explanation: ""
},
{
    id: 6,
    chapter: "ch11",
    contents:[
        { type: "text", value: "module-info.javaに設定したモジュールの設定情報を調べるためのコマンドとして、正しいものを選びなさい。(2つ選択)" },
    ],
    options: `A. java --describe-module
B. jdeps --list-deps
C. jmod describe
D. java --show-module-resolution
`,
    answer: "A、C",
    explanation: ""
},
{
    id: 7,
    chapter: "ch11",
    contents:[
        { type: "text", value: "module-info.javaでexportsされていないパッケージを、一時的に利用してコンパイルしたい。javacコマンドのオプションとして正しいものを選びなさい。(1つ選択)" },
    ],
    options: `A. --add-exports
B. --exports
C. -add
D. --add-modules
`,
    answer: "A",
    explanation: ""
},
{
    id: 1,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次の2つのコードのクラスファイルを生成するためのコマンドとして、 正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. package b;
2.
3. public class B {
4.
5. }
`},
{ 
            type: "code", 
            value: `1. package a;
2. import b.B;
3.
4. public class A {
5.     public static void main(String[] args) {
6.         B b = new B();
7.     }
8. }
`},
    ],
    options: `A. java a/A.java
B. java b/B.java
C. javac b/B.java
　 java a/A.java
D. javac a/A.java
　 java a/A
`,
    answer: "D",
    explanation: ""
},
{
    id: 2,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次の3つのステートメントを記述する順番として正しいものを選びなさい。(1つ選択)" },
        
    ],
    options: `A. package　   import　   class
B. package　   class　    import
C. import　　  class　    package
D. class　　   package　  import
E. import　    package　  class
`,
    answer: "A",
    explanation: ""
},
{
    id: 3,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次のプログラムを確認し、Mainクラスの空欄に入るコードとして、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. package com.sample;
2. public class Sample {
3.     public void sample() {
4.         // any code
5.     }
6. }
`},
{ 
            type: "code", 
            value: `1. package com.sample.test;
2. public class Test {
3.     public void test(int num) {
4.         // any code
5.     }
6. }
`},
{ 
            type: "code", 
            value: `1. package com;
2. □□□□□□□
3. public class Main {
4.     public static void main(String[] args) {
5.         new Sample().sample();
6.         int num = Integer.parseInt(args[0]);
7.         new Test().test(num);
8.     }
9. }
`},
    ],
    options: `A. import java.lang. Integer;
　 import com.*;
B. import com.sample.*;
C. import com.sample.Sample;
　 import com.sample.test.*;
D. import java.lang.*;
`,
    answer: "C",
    explanation: ""
},
{
    id: 4,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. import java.util. function. Supplier;
2.
3. public class Sample {
4.     void sample() {
5.         int i = 0;
6.         Supplier<Integer> foo = () -> 1;
7.         i++;
8.         System.out.println(foo.get());
9.     }
10. }
`},
    ],
    options: `A. コンパイルできるが、何も表示されない
B. 実行時に例外がスローされる
C. 0が表示される
D. 1が表示される
E. コンパイルエラーが発生する
`,
    answer: "E",
    explanation: ""
},
{
    id: 5,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. public class Sample {
2.     static int num = 23;
3.     public static void main(String[] args) {
4.         int num = num;
5.         System.out.println(num);
6.     }
7. }
`},
    ],
    options: `A. 23が表示される
B. 想定外の結果が表示される
C. コンパイルエラーが発生する
D. 実行時に例外がスローされる
`,
    answer: "C",
    explanation: ""
},
{
    id: 6,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次の2つのモジュールの設定ファイルに関する説明として、正しいものを選びなさい。(2つ選択)" },
        { 
            type: "code", 
            value: `1. module A {
2.     requires B;
3. }
`},
{ 
            type: "code", 
            value: `1. module B {
2.     requires A;
3. }
`},
    ],
    options: `A. どちらのモジュールも、パッケージがエクスポートされない
B. どちらのモジュールもjava.baseモジュールを必要としない
C. モジュールの名前が短かすぎる
D. コンパイルエラーが発生する
`,
    answer: "A、D",
    explanation: ""
},
{
    id: 7,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  public class Main {
2.      public static void main(String[] args) {
3.          int data = 1;
4.          switch(data) {
5.              default:  System.out.print("C");
6.              case 0:   System.out.print("A");
7.                        break;
8.              case 10:  System.out.print("B");
9.                        break;
10.         }
11.     }
12. }
`},

    ],
    options: `A. 「A」と表示される
B. 「C」と表示される
C. 「CA」と表示される
D. 「CAB」と表示される
E. コンパイルエラーが発生する
`,
    answer: "C",
    explanation: ""
},
{
    id: 8,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  public class Sample {
2.      public static void main(String[] args) {
3.          String str = "hoge456test";
4.          int index = 5;
5.          if (Character. isAlphabetic(str.charAt(index))) {
6.              index = 0;
7.          } else if (Character.isDigit(str.charAt(index))) {
8.              index = 10;
9.          } else {
10.             ++index;
11.         }
12.         if (str.endsWith("test"))
13.             str = str.substring(0, index);
14.         System.out.println(str);
15.     }
16. }
`},
    ],
    options: `A. 「hoge」と表示される
B. 「hoge456」と表示される
C. 「456test」と表示される
D. 「hoge456test」と表示される
E. 「hoge456tes」と表示される
`,
    answer: "E",
    explanation: ""
},
{
    id: 9,
    chapter: "ch12",
    contents:[
        { type: "text", value: "クラスやモジュールの依存関係を調べるために使うコマンドとして、正しいものを選びなさい。(2つ選択)" },
        
    ],
    options: `A. jmod describe
B. jdeps --list-deps
C. java Hello.java
D. jar --show-module-resolution
E. java --show-module-resolution
`,
    answer: "B、E",
    explanation: ""
},
{
    id: 10,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次のプログラムのコンパイルを成功させるための方法として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. public interface A {
2.     abstract void x();
3. }
`},
{ 
            type: "code", 
            value: `1. public abstract class B /* position 1 */ {
2.     /* position 2 */
3.     public void x( ) { }
4.     public abstract void z();
5. }
`},
{ 
            type: "code", 
            value: `1. public class C extends B implements A {
2.     /* position 3 */
3. }
`},
    ],
    options: `A. 以下をposition 3に記述する
　 @Override
　 public void x( ) { }
B. 以下をposition 3に記述する
　 public void z() {}
C. 以下をposition 2に記述する
　 void x( ){ }
D. 以下をposition 1に記述する
　 implements A
`,
    answer: "B",
    explanation: ""
},
{
    id: 11,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次のプログラムを確認し、変数valueのデータ型として正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. public class Main {
2.     public static void main(String... args) {
3.         for (var value: args) {
4.             System.out.println(value);
5.         }
6.     }
7. }
`},
    ],
    options: `A. String
B. String[]
C. Character
D. var
`,
    answer: "A",
    explanation: ""
},
{
    id: 12,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. public class Main {
2.     public static void main(String[] args) {
3.         String str = "abcd ef gh";
4.         int x = str.indexOf("ef");
5.         str.substring(x + 3);
6.         x = str.indexOf("ef");
7.         System.out.println(str + " " + x);
8.     }
9. }
`},
    ],
    options: `A. 「ef gh5」と表示される
B. 「ef gh 4」と表示される
C. 「abcd ef gh 4」と表示される
D. 「abcd ef gh 5」と表示される
E. 実行時に例外がスローされる
`,
    answer: "D",
    explanation: ""
},
{
    id: 13,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  public class Sample {
2.      static String str;
3.      public static void main(String[] args) {
4.          switch(str) {
5.              case "10" : str += "10";
6.              default : str += "def";
7.              case "20": str += "20";
8.          }
9.          System.out.println(str);
10.     }
11. }
`},
    ],
    options: `A. 「10 def 20」と表示される
B. 「def 20」と表示される
C. 「null」と表示される
D. 実行時に例外がスローされる
`,
    answer: "D",
    explanation: ""
},
{
    id: 14,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次のプログラムを確認し、変数xのデータ型として正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1. import java.util.Arrays;
2. import java.util.List;
3.
4. public class Sample {
5.     public static void main(String[] args) {
6.         List<String> list Arrays.asList(new String[]{"a", "b", "c"]);
7.         list. forEach(x-> (System.out.println(x);});
8.     }
9. }
`},
    ],
    options: `A. List<Character>
B. String
C. char
D. List<String>
`,
    answer: "B",
    explanation: ""
},
{
    id: 15,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次のプログラムをコンパイルし、実行するためのコマンドとして、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  package ex15:
2.
3.  public class Sample {
4.      private final String name;
5.      public Sample(String name) {
6.          this.name = name;
7.      }
8.      public String getName() {
9.          return name;
10.     }
11.     public String toString() {
12.         return name;
13.     }
14. }
`},
{ 
            type: "code", 
            value: `1.  package ex15;
2.
3.  import java.util.logging.Logger;
4.
5.  public class Main {
6.      static final Logger logger = Logger.getAnonymousLogger();
7.      public static void main(String[] args) {
8.          var d = new Sample("sample");
9.          logger.info(d.toString());
10.     }
11. }
`},
    ],
    options: `A. javac ex15/Sample.java ex15/Main.java
　 java -cp build ex15. Main
B. javac -d build ex15/Sample.java ex15/Main.java
　 java -cp build ex15. Main
C. javac -d build ex15/Sample.java ex15/Main.java
　 java ex15.Main
D. javac-d build ex15/Sample.java ex15/Main.java
　 java build.ex15.Main
`,
    answer: "B",
    explanation: ""
},
{
    id: 16,
    chapter: "ch12",
    contents:[
        { type: "text", value: "次のプログラムをコンパイル、実行した結果として、正しいものを選びなさい。(1つ選択)" },
        { 
            type: "code", 
            value: `1.  import java.time.LocalDate;
2.  import static java.time.DayOfWeek.*;
3.
4.  public class Sample {
5.      public static void main(String[] args) {
6.          var today LocalDate.now().with(TUESDAY).getDayOfWeek();
7.          switch (today) {
8.          case SUNDAY:
9.          case SATURDAY:
10.             System.out.println("weekend");
11.             break;
12.         case MONDAY:
13.              FRIDAY: System.out.println("working");
14.         default:
15.             System.out.println("other");
16.         }
17.     }
18. }
`},
    ],
    options: `A. 「working」と表示される
B. 「working」「other」 と表示される
C. 「Tuesday」と表示される
D. 「other」と表示される
`,
    answer: "D",
    explanation: ""
},


];
