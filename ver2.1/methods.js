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
        id: "charat",
        title: "String.charAt(int index)",
        content: `
- **説明**: 指定されたインデックス位置にある \`char\` 値を返します。
- **例外**: 範囲外のインデックス（0未満 または length()-1 以上）を指定した場合は **StringIndexOutOfBoundsException** が発生します。`
    },
    {
        id: "可変長引数",
        title: "可変長引数 void Sample(int ... num){ }",
        content: `
- **説明**: 可変長引数を使うことで、引数を複数渡せる。
- **注意**: 同じ型でまとめる、可変長引数以外の引数を受け取る場合は、可変長引数を最後にする。`
    },
    {
        id: "this()",
        title: "this()",
        content: `
- **説明**: 同じクラスにある、別のコンストラクタを呼び出すさいにつかう。
- **注意**: thisは、コンストラクタの一番最初に使用する必要がある。`
    },
    {
        id: "lamda",
        title: "ラムダ式　(引数) -> { 処理内容 };",
        content: `
- **説明**: メソッド名を定義しなくても、引数を渡して処理ができる書き方。
- **注意**: `
    },
    {
        id: "starsWith()",
        title: "starsWith()",
        content: `
- **説明**: 文章の始まりが引数で終わる場合に、trueを返す。
- **注意**: `
    },
    {
        id: "endWith()",
        title: "endWith()",
        content: `
- **説明**: 文章の終わりが引数で終わる場合に、trueを返す。
- **注意**: `
    },
{
        id: "indexOf()",
        title: "indexOf()",
        content: `
- **説明**: indexOf() メソッドは、指定した文字列が最初に登場するインデックス番号を返します。
対象の文字列の中に指定された文字列が存在しない場合、例外はスローされず -1 を返します。
- **注意**: `
    },
    {
        id: "replace(obj1,obj2)",
        title: "replace(obj1,obj2)",
        content: `
- **説明**: replace(obj1,obj2)。対象の文章にあるobj1を、obj2に置き換える。
- **注意**: `
    },
    {
        id: "StringBuilder",
        title: "StringBuilder",
        content: `
- **説明**: 【StringBuilderの容量（capacity）の仕組み】
StringBuilder の初期容量は「デフォルト16文字分のバッファ」です。
文字列（例: "abcde"）を指定してインスタンスを生成した場合、容量は「指定した文字列の長さ (5) + デフォルトバッファ (16) = 21」となります。
StringBuilderは、Stringと違い、可変（Mutable）で書き換え可能な結合。
- **注意**: `
    },
{
        id: "変数 instanceof クラス名",
        title: "変数 instanceof クラス名",
        content: `
- **説明**: その変数が、クラス名の型で作られているかどうかを判定するメソッド。true or falseが返り値。
- **注意**: `
    },
{
        id: "intern()",
        title: "intern()",
        content: `
- **説明**: str.intern()のように使うと、strの文の中身を取り出せる。
- **注意**: `
    },
{
        id: "clone()",
        title: "clone()",
        content: `
- **説明**: 複製する
- **注意**: `
    },
    {
        id: "可変長引数",
        title: "可変長引数",
        content: `
- **説明**: void Sample (int... num) { }のようにすることで、引数をいくつでも渡せる。
可変長引数を使う時の注意点。
・同じ型でまとめる必要がある。
・可変長引数以外の引数を受け取る場合は、可変長引数を最後の引数にする。
　（void method(int value, String... name) { }）
- **注意**: `
    },
    {
        id: "インターフェース名.super.メソッド名()",
        title: "インターフェース名.super.メソッド名()",
        content: `
- **説明**: 実装クラスでオーバーライドしたあとに、インターフェース側の元の default メソッドを呼びたいときは、次のように書きます。
インターフェース名.super.メソッド名();
ただし、ここに書けるのは「自分が直接 implements しているインターフェース」だけです。
- **注意**: `
    },
    {
        id: "ラムダ式",
        title: "ラムダ式",
        content: `
- **説明**: 抽象メソッドが１つだけのインターフェースのみ、ラムダ式で記述できる。
インターフェース：void perform(String name);
(引数) -> { 処理 }
・引数は、インターフェースの中と同一にしないといけない。（型は省略可能）
・引数が一つの場合は、()を省略可能。
・ラムダ式で記述する式に、戻り値が必要な場合、{}内にreturnを入れる必要がある。
・{}を省略して書く場合は、retrunを省略しなければならない。
- **注意**: `
    },
    {
        id: "関数型インターフェース",
        title: "関数型インターフェース",
        content: `
- **説明**: ラムダ式は、抽象クラスを作らないと使えないが、関数型インターフェースを使うことで、動かすことが可能。
・Runnable　：引数なし・戻り値なし
　イメージ：「とにかく実行するだけ」のボタン
　Runnable r = () -> System.out.println("hello");
　r.run();   // hello

・Supplier<T>：引数なし・戻り値あり。何も受け取らずに、値を一つ返す。<T>は返す値の型
　イメージ：「ボタンを押すと何かが出てくる」自動販売機
　Supplier<String> s = () -> "Java";
　System.out.println(s.get());   // Java
　Supplier<Integer> dice = () -> new Random().nextInt(6) + 1;
　System.out.println(dice.get());   // 1〜6のどれか（サイコロ）
　インターフェース：void perform(String name);

・Consumer<T>：引数あり・戻り値なし。値を受け取って、何かに使う。結果は返さない。T は受け取る値の型。
　イメージ：「受け取って使い切る」ゴミ箱やプリンター
　Consumer<String> c = str -> System.out.println("こんにちは、" + str);
　c.accept("Java");   // こんにちは、Java

・Function<T, R>：引数あり・戻り値あり。値を受け取って、別の値に変換して返す。<T, R> の T が受け取る型、R が返す型（R は Result＝結果）。
　イメージ：「材料を入れると、加工品が出てくる」工場
　Function<String, Integer> f = str -> str.length();
　System.out.println(f.apply("Java"));   // 4

・Predicate<T>：引数あり・戻り値は boolean。値を受け取って、条件に合うかどうか（true / false）を返す。戻り値は必ず boolean なので、<> には受け取る型だけを書く。
　イメージ：「合格か不合格かを判定する」試験官
　Predicate<Integer> p = n -> n >= 20;
　System.out.println(p.test(25));   // true
　System.out.println(p.test(15));   // false
- **注意**: `
    },
    {
        id: "Character.isAlphabetic()",
        title: "Character.isAlphabetic()",
        content: `
- **説明**: Character.isAlphabetic()。引数（char型）の文字の種類が、アルファベットだったらtrueを返す。
- **注意**: `
    },
    {
        id: "Character.isDigit()",
        title: "Character.isDigit()",
        content: `
- **説明**: Character.isDigit()。引数（char型）の文字の種類が、文字だったらtrueを返す。
- **注意**: `
    },
    {
        id: "Character.isLowerCase()",
        title: "Character.isLowerCase()",
        content: `
- **説明**: Character.isLowerCase()。引数（char型）の文字の種類が、小文字だったらtrueを返す。
- **注意**: `
    },
    {
        id: "LocalDate",
        title: "LocalDate",
        content: `
- **説明**: 「年・月・日」の日付を表すクラス（時刻は持たない）。
- **注意**: `
    },
    {
        id: "LocalDate.of(yyyy, mm, dd)",
        title: "LocalDate.of(yyyy, mm, dd)",
        content: `
- **説明**: 指定した日付を作るメソッド。mmは、1～12を指定する。
- **注意**: `
    },
    {
        id: "LocalDate.now()",
        title: "LocalDate.now()",
        content: `
- **説明**: 今日の日付を作るメソッド。
- **注意**: `
    },
    {
        id: ".with(DayOfWeek.MONDAY)",
        title: ".with(DayOfWeek.MONDAY)",
        content: `
- **説明**: 同じ週の月曜日の日付を、新しく作って返す。
- **注意**: `
    },
    {
        id: "list.add(番目,引数)",
        title: "list.add(番目,引数)",
        content: `
- **説明**: 対象のリストの、番目に引数を入れる。0から。
- **注意**: `
    },
    {
        id: "list.set(インデックス,要素)",
        title: "list.set(インデックス,要素)",
        content: `
- **説明**: 対象のリストの、インデックスを、要素に書き換える。
- **注意**: `
    },
    {
        id: "List.of()",
        title: "List.of()",
        content: `
- **説明**: 変更できない安全なリスト。値の変更も不可能。
- **注意**: `
    },
    {
        id: "Arrays.asList(new Integer[] {1,2,3})",
        title: "Arrays.asList(new Integer[] {1,2,3})",
        content: `
- **説明**: リストを配列として扱うための書き方。可変長だが、値は書き換え可能。
- **注意**: `
    },
    {
        id: "try{} catch(例外の型 e){}",
        title: "try{} catch(例外の型 e){}",
        content: `
- **説明**: try{ // エラーが起こるかもしれない時の処理 } // catch(例外の型 e) { // エラーが起きたときに行う処理}
- **注意**: `
    },
    

];
