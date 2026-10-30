// まとめノート
// Workbook.html で methods.js の下に読み込むだけで、「リファレンス」に「まとめノート」が追加されます。
//
// 書き方：
//   { type: "list",  items: ["1行目", "2行目"] }              … 箇条書き
//   { type: "table", head: ["見出し1", "見出し2"], rows: [["A", "B"]] } … 表
//   { type: "code",  value: `コード` }                          … コード
//   文字の中では **太字** と `コード` が使えます。

const summaryNotes = [
    {
        title: "試験中に意識すること",
        blocks: [
            { type: "list", items: [
                "**変数の型か、実物か**：呼べるメソッドとフィールドは変数の型、動くメソッドは実物",
                "**this() と super() は1行目だけ**：書いていなければ `super();` が自動で入る",
                "**String は代入しないと変わらない**：`str.replace(...)` だけでは str は同じまま",
                "**ローカル変数は初期化が必要**：if だけで値を入れて else で入れないとエラー",
            ]},
        ]
    },
    {
        title: "1. コンストラクタ（this() と super()）",
        blocks: [
            { type: "list", items: [
                "`this()` と `super()` は、**コンストラクタの1行目**にしか書けない（両方は書けない）",
                "1行目に `this()` も `super()` もないコンストラクタには、**自動で `super();` が入る**",
                "`this()` を書いたコンストラクタには入らないが、**呼び出し先で親が呼ばれる**ので、親のコンストラクタは必ず1回は通る",
                "親に引数なしのコンストラクタがないと、子で `super(値)` を書かない限りコンパイルエラー",
                "表示の順番は**親が先**（`new C()` → A → B → C）",
            ]},
        ]
    },
    {
        title: "2. this が必要なとき（シャドウイング）",
        blocks: [
            { type: "table", head: ["書き方", "フィールドに入る？"], rows: [
                ["`d = num;`（引数と名前が違う）", "○"],
                ["`this.value = value;`", "○"],
                ["`value = value;`（名前が同じで this なし）", "×（引数に引数を入れるだけ）"],
            ]},
            { type: "list", items: [
                "static メソッド（main など）の中では `this` は使えない。インスタンスのフィールドも直接使えない",
                "ローカル変数とフィールドは、名前が同じでも別の変数",
            ]},
        ]
    },
    {
        title: "3. ポリモーフィズム（A a = new B();）",
        blocks: [
            { type: "table", head: ["項目", "何で決まる？"], rows: [
                ["呼び出せるメソッド", "**変数の型（左側の A）**"],
                ["実際に動くメソッド", "**実物（右側の B）**"],
                ["フィールド", "**変数の型（左側の A）**"],
                ["static メソッド", "変数の型（左側の A）"],
            ]},
            { type: "list", items: [
                "**private メソッドは継承されない** → オーバーライドもされない。子から呼ぶとコンパイルエラー",
                "親型の変数 → 子型の変数への代入はキャストが必要（ないとコンパイルエラー）",
                "実物と違う型にキャストすると、実行時に ClassCastException",
            ]},
        ]
    },
    {
        title: "4. オーバーライドのルール",
        blocks: [
            { type: "list", items: [
                "アクセス修飾子は親と同じか、より広く（public > protected > なし > private）",
                "インタフェースのメソッドは自動的に public → 実装するときも **public が必須**",
                "戻り値は同じ型かサブクラスの型にできる（共変戻り値）。void や関係ない型には変更できない",
                "`List<Number>` に対して `List<Integer>` はダメ。< > の中身は完全一致が必要",
                "親のメソッドにない検査例外を throws に追加できない",
                "引数が違えばオーバーロード（別のメソッド）。`@Override` を付けるとエラー",
                "`Set<String>` と `Set<CharSequence>` は型消去で同じ `Set` になる → 名前の衝突でエラー",
                "親のメソッドは `super.m()` で呼ぶ。`super.super.m()` は書けない",
            ]},
        ]
    },
    {
        title: "5. インタフェースと抽象クラス",
        blocks: [
            { type: "list", items: [
                "インタフェースのフィールドは自動的に `public static final`（定数）→ 宣言と同時に値が必要",
                "インタフェースで処理を書けるのは `default`、`static`、`private` だけ。`final` は付けられない",
                "2つのインタフェースに同じ default メソッドがあると、実装クラスでオーバーライドしないとエラー",
                "`X.super.m()` で呼べるのは、**直接** implements / extends しているインタフェースだけ",
                "抽象クラスは抽象メソッドを実装しなくてよい。継承した**具象クラス**は残りを全部実装する必要がある",
                "`abstract` のメソッドには `{ }` を書けない。`{ }` がないメソッドには `abstract` が必要",
            ]},
        ]
    },
    {
        title: "6. アクセス修飾子",
        blocks: [
            { type: "table", head: ["修飾子", "同じクラス", "同じパッケージ", "別パッケージのサブクラス", "どこでも"], rows: [
                ["public", "○", "○", "○", "○"],
                ["protected", "○", "○", "○（サブクラス型の参照から）", "×"],
                ["なし", "○", "○", "×", "×"],
                ["private", "○", "×", "×", "×"],
            ]},
            { type: "list", items: [
                "修飾子なしの**クラス**は、別パッケージからは import もできない",
                "`sample` と `sample.sub` は別のパッケージ（親子関係はない）",
            ]},
        ]
    },
    {
        title: "7. 演算子のひっかけ",
        blocks: [
            { type: "list", items: [
                "`i++` は使ってから増やす、`++i` は増やしてから使う",
                "`+` は**左から順番**。一度文字列になると、それ以降はすべて連結（`1 + 2 + \"a\" + 1 + 2` → `\"3a12\"`）",
                "`*` と `/` は `+` と `-` より先（`\"r=\" + 2 + 3 * 4` → `\"r=212\"`）",
                "int 同士の割り算は切り捨て（`5 / 12` → `0`）",
                "`int c = b += 2;` → b を更新して、その結果を c にも入れる（代入は右から）",
                "`i += 式` は、右側の式を全部計算してから足す",
                "byte < short < int < long < float < double。大 → 小はキャストが必要",
                "`float f = 1.99;` はエラー（1.99 は double）。`byte` → `char` もキャストが必要",
                "`int == Integer` は、Integer が int に変換されて数値で比較",
            ]},
        ]
    },
    {
        title: "8. オーバーロードで選ばれる順番",
        blocks: [
            { type: "list", items: [
                "**① 完全一致 → ② 型の拡大（int → long） → ③ オートボクシング（int → Integer） → ④ 可変長引数**",
                "候補が複数あるときは、**いちばん型がぴったり合うもの**（String[] なら `(String[])` が `(Object[])` や `(Object)` より優先）",
                "`int[]` は `Object[]` にも `long[]` にもなれない。受け取れるのは `Object`",
                "どのオーバーロードかは**コンパイル時**、どのオーバーライドが動くかは**実行時**に決まる",
            ]},
        ]
    },
    {
        title: "9. String と StringBuilder",
        blocks: [
            { type: "list", items: [
                "String はイミュータブル。`str.replace(...)` などは**代入しない限り**元の文字列は変わらない",
                "`\"Java\"` と直接書くとプールの同じ実体。`new String(\"Java\")` は別の実体。`intern()` はプールの実体を返す",
                "`sb.replace(開始, 終了, 文字列)` は終了の位置を**含まない**。開始と終了が同じなら挿入になる",
                "`indexOf` は見つからないと `-1`（例外にならない）",
                "長さ：配列は `array.length`、文字列は `str.length()`",
            ]},
        ]
    },
    {
        title: "10. 配列",
        blocks: [
            { type: "list", items: [
                "初期値：`int[]` は `0`、`boolean[]` は `false`、参照型（`String[]`、`Integer[]`）は `null`",
                "`{1, 2}` だけの初期化子は**宣言と同時のみ**。後から代入するときは `new int[]{1, 2}`",
                "`new int[3]{...}` のように、要素数と初期化子は同時に書けない",
                "`println(null)` は「null」と表示。`null.name` は NullPointerException",
                "`clone()` はシャローコピー（中の配列は同じものを指す）",
                "`Arrays.mismatch` は最初に違う位置（同じなら -1）、`Arrays.compare` はその位置の大小で負・0・正",
            ]},
        ]
    },
    {
        title: "11. 制御構文",
        blocks: [
            { type: "list", items: [
                "switch は break がないと下の case に進み続ける（フォールスルー）",
                "switch の中の `continue` は、外側のループの次の周へ",
                "do-while の `continue` は、ループの先頭ではなく **while の条件判定**へ",
                "`continue`、`break`、`return`、`throw` の直後に処理を書くと、到達不能コードでコンパイルエラー",
                "**ローカル変数は初期値が自動で入らない**（if だけで値を入れて else で入れないとエラー）",
                "ローカル変数は宣言した行より前では使えない。フィールドとメソッドはどこで宣言しても使える",
            ]},
        ]
    },
    {
        title: "12. var",
        blocks: [
            { type: "list", items: [
                "使えるのは**ローカル変数だけ**（フィールド、戻り値の型、引数はダメ）",
                "`var x;`、`var x = null;`、`var a = {1, 2};` はエラー",
                "`var list = new ArrayList<>();` は `ArrayList<Object>` になる",
            ]},
        ]
    },
    {
        title: "13. ラムダ式と関数型インタフェース",
        blocks: [
            { type: "table", head: ["インタフェース", "メソッド", "引数 → 戻り値"], rows: [
                ["Runnable", "`run()`", "なし → なし"],
                ["Supplier<T>", "`get()`", "なし → T"],
                ["Consumer<T>", "`accept(t)`", "T → なし"],
                ["Function<T,R>", "`apply(t)`", "T → R"],
                ["Predicate<T>", "`test(t)`", "T → boolean"],
            ]},
            { type: "list", items: [
                "ラムダ式の中で使うローカル変数は**実質的 final**（後で `i++` しただけでもエラー）",
                "ラムダ式の引数は、**同じメソッド内のローカル変数と同じ名前**にできない",
                "`{ }` を使って値を返すなら `return` と `;` が必要。`{ }` を省略したら `return` は書けない",
                "メソッド参照は `String::toUpperCase` と**カッコなし**",
            ]},
        ]
    },
    {
        title: "14. コレクション",
        blocks: [
            { type: "table", head: ["作り方", "追加・削除", "値の変更（set）"], rows: [
                ["`new ArrayList<>()`", "○", "○"],
                ["`Arrays.asList(...)`", "×（固定長）", "○"],
                ["`List.of(...)`", "×", "×（UnsupportedOperationException）"],
            ]},
            { type: "list", items: [
                "拡張 for 文の中で `remove` → ConcurrentModificationException（**最後から2番目**を削除したときだけ例外なしで終わる）",
                "拡張 for 文の中で削除したいときは `removeIf`",
                "HashMap はキーに null を1つ使える",
            ]},
        ]
    },
    {
        title: "15. 例外",
        blocks: [
            { type: "list", items: [
                "**検査例外**：Exception のうち RuntimeException 以外 → catch か throws が必須",
                "**非検査例外**：RuntimeException とその子、Error とその子",
                "catch は「子 → 親」の順。逆にすると子の catch に到達できずエラー",
                "マルチキャッチ（`|`）に親子関係の例外は並べられない",
                "`throws 親` と宣言すると、その子クラスの例外もスローできる",
                "try には catch か finally のどちらかが必要（try-with-resources なら両方なくても可）",
                "finally は return の後でも必ず実行。**finally で return するとその値で上書き**",
                "try-with-resources は **close() → catch → finally** の順。リソースの変数は try ブロックの中だけ",
                "OutOfMemoryError や StackOverflowError は Error なので `catch (Exception e)` では捕まらない",
            ]},
        ]
    },
    {
        title: "コマンド一覧：コンパイルと実行",
        blocks: [
            { type: "table", head: ["やりたいこと", "コマンド"], rows: [
                ["コンパイル（出力先を指定）", "`javac -d out src/com/sample/Main.java`"],
                ["クラスパスを指定して実行", "`java -cp out com.sample.Main`（`-classpath` でも可）"],
                ["ソースファイルを直接実行", "`java Main.java`（コンパイル不要）"],
                ["注意", "実行はクラス名で指定する。`java Main.class` は誤り"],
            ]},
        ]
    },
    {
        title: "コマンド一覧：モジュール",
        blocks: [
            { type: "table", head: ["やりたいこと", "コマンド"], rows: [
                ["モジュールをコンパイル", "`javac -d mods --module-source-path src -m mod.a`"],
                ["モジュールを実行", "`java --module-path mods -m mod.a/com.sample.Main`"],
                ["上の短い書き方", "`java -p mods -m mod.a/com.sample.Main`"],
                ["JDK のモジュールを一覧表示", "`java --list-modules`"],
                ["モジュールの情報を表示", "`java --describe-module mod.a`（短縮形は `-d`。自作なら `-p mods` も付ける）"],
                ["JAR のモジュール情報を表示", "`jar --describe-module --file mod.jar`（`jar -d -f mod.jar`）"],
                ["**依存関係を調べる**", "`jdeps mod.jar`"],
                ["依存関係の要約だけ表示", "`jdeps -s mod.jar`（`-summary`）"],
                ["依存しているモジュールを一覧表示", "`jdeps --list-deps mod.jar`"],
                ["JMOD ファイルの情報を表示", "`jmod describe xxx.jmod`"],
                ["モジュールの解決の様子を表示", "`java --show-module-resolution ...`"],
                ["コマンドで公開を追加", "`--add-exports mod.a/com.pkg=mod.b`（使えるが望ましくない）"],
                ["独自のランタイムを作成", "`jlink --module-path mods --add-modules mod.a --output myjre`"],
            ]},
        ]
    },
    {
        title: "module-info.java の書き方",
        blocks: [
            { type: "code", value: `module mod.a {
    requires mod.b;                  // mod.b に依存する（モジュール名を書く）
    requires transitive mod.c;       // mod.a を使う側も、自動で mod.c を読める
    exports com.sample;              // パッケージを公開する（パッケージ名を書く）
    exports com.sample.api to mod.x; // mod.x にだけ公開する
}` },
            { type: "list", items: [
                "**requires にはモジュール名**、**exports にはパッケージ名**。`import` や `export` は使わない",
                "`java.base` は自動で読み込まれる（requires 不要）。java.lang や java.util などのコアパッケージはすべて java.base",
                "モジュール同士の循環依存（A → B → A）はエラー",
                "module-info.java はモジュールのルートに置く。中身が空の `module a {}` も書ける",
                "モジュール化していないプログラムも、クラスパスを使えば実行できる",
            ]},
        ]
    },
];

// ---------- ここから下は表示の処理 ----------

// HTMLエスケープ（< > などをそのまま表示するため）
function noteEscape(str) {
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

// **太字** と `コード` を変換
function noteFormat(str) {
    return noteEscape(str)
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/`(.*?)`/g, '<code>$1</code>');
}

// まとめノートを表示
function renderSummaryNotes(container) {
    container.innerHTML = '';

    summaryNotes.forEach(note => {
        const card = document.createElement('div');
        card.className = 'question-card';

        const blocksHtml = note.blocks.map(block => {
            if (block.type === 'list') {
                const items = block.items.map(text => `<li style="margin-bottom: 6px;">${noteFormat(text)}</li>`).join('');
                return `<ul style="line-height: 1.6; padding-left: 20px;">${items}</ul>`;
            } else if (block.type === 'table') {
                const cell = 'border: 1px solid #ccc; padding: 6px 8px; text-align: left;';
                const head = block.head.map(h => `<th style="${cell} background: #f0f4f8;">${noteFormat(h)}</th>`).join('');
                const rows = block.rows.map(row =>
                    `<tr>${row.map(c => `<td style="${cell}">${noteFormat(c)}</td>`).join('')}</tr>`
                ).join('');
                return `<div style="overflow-x: auto; margin: 10px 0;">
                    <table style="border-collapse: collapse; width: 100%;"><tr>${head}</tr>${rows}</table>
                </div>`;
            } else if (block.type === 'code') {
                return `<pre class="code-block"><code>${noteEscape(block.value)}</code></pre>`;
            }
            return '';
        }).join('');

        card.innerHTML = `
            <h3 style="margin-bottom: 10px; color: #0056b3; border-bottom: 2px solid #e0e0e0; padding-bottom: 5px;">
                ${noteEscape(note.title)}
            </h3>
            ${blocksHtml}
        `;
        container.appendChild(card);
    });
}

// 「リファレンス」に「まとめノート」ボタンを追加
// （app.js の処理が終わった後に追加するため、load イベントを使う）
window.addEventListener('load', () => {
    const referenceList = document.querySelector('.reference-box .list-group');
    if (!referenceList) return;

    const li = document.createElement('li');
    li.className = 'list-item';
    li.textContent = 'まとめノート';
    referenceList.appendChild(li);

    li.addEventListener('click', () => {
        document.querySelectorAll('.list-item').forEach(i => i.classList.remove('active'));
        li.classList.add('active');
        document.getElementById('mainHeading').textContent = 'まとめノート';
        window.scrollTo({ top: 0 });
        renderSummaryNotes(document.getElementById('questionContainer'));
    });
});
