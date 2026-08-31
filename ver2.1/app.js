// 章タイトルの定義
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
    "ch12": "12章 総仕上げ問題①"
};

// HTMLエスケープ処理
function escapeHtml(str) {
    if (!str) return '';
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// 簡易マークダウン変換（太字, コード記法, 改行をHTMLに変換）
function parseMarkdown(text) {
    if (!text) return '';
    return text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/`(.*?)`/g, '<code>$1</code>')
        .replace(/\n/g, '<br>');
}

// 独自タグ [memo:メモID:表示テキスト] をリンクボタンに変換する関数
function parseMemoLinks(str) {
    if (!str) return '';
    const escaped = escapeHtml(str);
    return escaped.replace(/\[memo:([^:]+):([^\]]+)\]/g, (match, memoId, text) => {
        return `<button type="button" class="memo-link-btn" onclick="goToMethodMemo('${memoId}')">${text}</button>`;
    });
}

// 選択肢HTMLを生成するヘルパー関数
function buildOptionsHtml(options) {
    if (!options) return '';

    if (Array.isArray(options)) {
        return options.map(opt => {
            const textHtml = opt.text ? `<div class="option-text">${escapeHtml(opt.text)}</div>` : '';
            const codeHtml = opt.code ? `<pre class="code-block"><code>${escapeHtml(opt.code)}</code></pre>` : '';
            
            return `
                <div class="option-item">
                    <span class="option-label">${escapeHtml(opt.label)}.</span>
                    <div class="option-content">
                        ${textHtml}
                        ${codeHtml}
                    </div>
                </div>
            `;
        }).join('');
    }

    return `<div class="options-text-legacy">${escapeHtml(options)}</div>`;
}

// 問題カードを生成・表示する関数
function renderQuestions(data, container) {
    container.innerHTML = '';
    
    data.forEach(q => {
        const card = document.createElement('div');
        card.className = 'question-card';
        card.setAttribute('data-chapter', q.chapter);

        let bodyAndCodeHtml = '';

        if (Array.isArray(q.contents)) {
            bodyAndCodeHtml = q.contents.map(item => {
                if (item.type === 'text') {
                    return `<div class="question-body">${parseMemoLinks(item.value)}</div>`;
                } else if (item.type === 'code') {
                    return `<pre class="code-block"><code>${escapeHtml(item.value)}</code></pre>`;
                } else if (item.type === 'math') {
                    const html = typeof katex !== 'undefined' 
                        ? katex.renderToString(item.value, { throwOnError: false }) 
                        : item.value;
                    return `<div class="math-block" style="font-size: 1.2em; margin: 10px 0; text-align: center;">${html}</div>`;
                } else if (item.type === 'image') {
                    return `<div class="question-image-container">
                        <img src="${escapeHtml(item.src)}" alt="${escapeHtml(item.alt || '問題画像')}" class="question-image">
                    </div>`;
                }
                return '';
            }).join('');
        } else {
            if (q.text) {
                bodyAndCodeHtml += `<div class="question-body">${parseMemoLinks(q.text)}</div>`;
            }
            if (Array.isArray(q.code)) {
                bodyAndCodeHtml += q.code.map(c => `<pre class="code-block"><code>${escapeHtml(c)}</code></pre>`).join('');
            } else if (q.code) {
                bodyAndCodeHtml += `<pre class="code-block"><code>${escapeHtml(q.code)}</code></pre>`;
            }
        }

        const optionsHtml = buildOptionsHtml(q.options);

        card.innerHTML = `
            <div class="question-header">
                <span class="chapter-tag">${chapterTitles[q.chapter] || ''}</span>
            </div>
            <div class="question-title">問題 ${q.id}</div>
            ${bodyAndCodeHtml}
            <div class="options-container">
                ${optionsHtml}
            </div>
            <details>
                <summary>正解・解説を表示</summary>
                <div class="answer-content">
                    <div class="correct-answer">正解：${escapeHtml(q.answer)}</div>
                    <div class="explanation">${parseMemoLinks(q.explanation)}</div>
                </div>
            </details>
        `;
        container.appendChild(card);
    });
}

// メソッドメモ画面の描画処理
function renderMethodMemos(container) {
    container.innerHTML = '';

    const memoWrapper = document.createElement('div');
    memoWrapper.className = 'method-memo-container';

    if (typeof methodMemos !== 'undefined') {
        methodMemos.forEach(memo => {
            const item = document.createElement('div');
            item.className = 'question-card';
            item.id = memo.id;

            item.innerHTML = `
                <h3 style="margin-bottom: 10px; color: #0056b3; border-bottom: 2px solid #e0e0e0; padding-bottom: 5px;">
                    ${escapeHtml(memo.title)}
                </h3>
                <div style="line-height: 1.6; color: #333;">
                    ${parseMarkdown(memo.content)}
                </div>
            `;
            memoWrapper.appendChild(item);
        });
    }

    container.appendChild(memoWrapper);
}

// 特定のメソッドメモへ切り替えてスクロール移動する関数
window.goToMethodMemo = function(memoId) {
    const questionContainer = document.getElementById('questionContainer');
    const mainHeading = document.getElementById('mainHeading');

    document.querySelectorAll('.list-item').forEach(i => i.classList.remove('active'));
    const memoBtn = document.querySelector('[data-chapter="method-memo"]');
    if (memoBtn) memoBtn.classList.add('active');

    mainHeading.textContent = 'メソッドメモ';
    renderMethodMemos(questionContainer);

    setTimeout(() => {
        const target = document.getElementById(memoId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            target.style.transition = 'background-color 0.4s';
            target.style.backgroundColor = '#e8f4f8';
            setTimeout(() => {
                target.style.backgroundColor = '';
            }, 2000);
        }
    }, 50);
};

// メインの初期化・イベントバインド処理
document.addEventListener('DOMContentLoaded', () => {
    const sidebarList = document.getElementById('chapterList');
    const questionContainer = document.getElementById('questionContainer');
    const mainHeading = document.getElementById('mainHeading');

    // 動的に章リストを作成
    Object.keys(chapterTitles).forEach(key => {
        const li = document.createElement('li');
        li.className = 'list-item';
        li.setAttribute('data-chapter', key);
        li.textContent = chapterTitles[key];
        sidebarList.appendChild(li);
    });

    // 初期化：全問題を出力
    renderQuestions(window.questionsData || [], questionContainer);

    // サイドバー＆リファレンスボタンの統合クリックイベント
    document.querySelectorAll('.list-item').forEach(item => {
        item.addEventListener('click', () => {
            document.querySelectorAll('.list-item').forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            const selectedChapter = item.getAttribute('data-chapter');
            mainHeading.textContent = item.textContent;

            window.scrollTo({ top: 0 });

            if (selectedChapter === 'method-memo') {
                renderMethodMemos(questionContainer);
            } else if (selectedChapter === 'all') {
                renderQuestions(window.questionsData || [], questionContainer);
            } else {
                const filtered = (window.questionsData || []).filter(q => q.chapter === selectedChapter);
                renderQuestions(filtered, questionContainer);
            }
        });
    });
});