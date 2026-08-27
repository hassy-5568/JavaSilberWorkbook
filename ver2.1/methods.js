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
    }
];