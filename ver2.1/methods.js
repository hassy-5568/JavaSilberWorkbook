// ==========================================
// メソッドメモ データベース
// ==========================================
const methodMemos = [
    {
        id: "substring()",
        title: "substring(beginIndex, endIndex)",
        content: `
**説明**:  beginIndex から endIndex - 1 までの部分文字列を切り出すメソッド。Stringで使う。
**使用例**: "abcde"の場合、substring(2 , 4) だとcdが切り取られる。
**問題**: 2章13問
`
    },
    {
        id: "indexof",
        title: "String / StringBuilder.indexOf(String str)",
        content: `
- **説明**: 指定した文字列が最初に登場するインデックス番号（0始まり）を返します。
- **戻り値**: 見つかった場合はそのインデックス、存在しない場合は **-1** を返します。`
    },
    {
        id: "memo-charat",
        title: "String.charAt(int index)",
        content: `
- **説明**: 指定されたインデックス位置にある \`char\` 値を返します。
- **例外**: 範囲外のインデックス（0未満 または length()-1 以上）を指定した場合は **StringIndexOutOfBoundsException** が発生します。`
    },
    {
        id: "memo-可変長引数",
        title: "可変長引数 void Sample(int ... num){ }",
        content: `
- **説明**: 可変長引数を使うことで、引数を複数渡せる。
- **注意**: 同じ型でまとめる、可変長引数以外の引数を受け取る場合は、可変長引数を最後にする。`
    },
    {
        id: "memo-this()",
        title: "this()",
        content: `
- **説明**: 同じクラスにある、別のコンストラクタを呼び出すさいにつかう。
- **注意**: thisは、コンストラクタの一番最初に使用する必要がある。`
    },
    {
        id: "memo-lamda",
        title: "ラムダ式　(引数) -> { 処理内容 };",
        content: `
- **説明**: メソッド名を定義しなくても、引数を渡して処理ができる書き方。
- **注意**: `
    }
];