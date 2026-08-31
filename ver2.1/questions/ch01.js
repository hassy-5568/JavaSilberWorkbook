
window.questionsData = window.questionsData || [];
window.questionsData.push(
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
        explanation: "protectedは、同一クラス＋同一パッケージ＋サブクラスからアクセス可のため、同じパッケージに所属しているクラスならば可能。Javaでは、無名パッケージにあるクラスを、名前付きパッケージ（ex4など）からインポートして使用することはできません。そのため、そもそも extends Sample の時点で参照エラーとなります。そのため、コンパイルエラーになる。"
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
    }
);
