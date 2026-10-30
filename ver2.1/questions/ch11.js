
window.questionsData = window.questionsData || [];
window.questionsData.push(
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
    explanation: `モジュールは、いくつかのパッケージをまとめた、さらに大きなグループです。Java 9 から追加された仕組み。パッケージ内の各公開設定などを設定できる。`
},
{
    id: 2,
    chapter: "ch11",
    contents:[
        { type: "text", value: "libディレクトリにあるsampleモジュールを実行したい。エントリーポイントを持つクラスをcom.test.Helloとしたときのコマンドとして正しいものを選びなさい。(1つ選択)" },
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
    options: [
        {
        label: "A",
        code: `module sample {
    exports test;
    requires com.sample;
}`
    },
    {
        label: "B",
        code: `module sample {
    export com.sample;
    require test;
}`
    },
    {
        label: "C",
        code: `module sample {
    requires com.sample;
    requires test;
}`
    },
    {
        label: "D",
        code: `module sample {
    exports com.sample;
    requires test;
}`
    },
 ],
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
    options: `A. module1のmodule-info.javaで、module2をrequiresで宣言する
B. module1のmodule-info.javaで、module2をrequires transitiveで宣言する
C. module2のmodule-info.javaで、module3をrequiresで宣言する
D. module2のmodule-info.javaで、module3をrequires transitiveで宣言する
`,
    answer: "D",
    explanation: `requires は「1段階」しか届かない。`
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
});

