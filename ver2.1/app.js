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

// HTMLエスケープ処理
function escapeHtml(str) {
    if(!str) return '';
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

document.addEventListener('DOMContentLoaded', () => {
    const sidebarList = document.getElementById('chapterList');
    const questionContainer = document.getElementById('questionContainer');

    // サイドバーに章リストを出力
    Object.keys(chapterTitles).forEach(key => {
        const li = document.createElement('li');
        li.className = 'list-item';
        li.setAttribute('data-chapter', key);
        li.textContent = chapterTitles[key];
        sidebarList.appendChild(li);
    });

    // 問題カードを生成する関数
    function renderQuestions(data) {
        questionContainer.innerHTML = '';
        
        data.forEach(q => {
            const card = document.createElement('div');
            card.className = 'question-card';
            card.setAttribute('data-chapter', q.chapter);

            // --- ここから追加・修正箇所 ---
            let bodyAndCodeHtml = '';

            // 1. 新しい「contents」形式（テキストとコードの交互表示）に対応
            if (Array.isArray(q.contents)) {
                bodyAndCodeHtml = q.contents.map(item => {
                    if (item.type === 'text') {
                      return `<div class="question-body">${parseMemoLinks(item.value)}</div>`;
                    } else if (item.type === 'code') {
                        return `<pre class="code-block"><code>${escapeHtml(item.value)}</code></pre>`;
                    }
                    else if (item.type === 'math') {
                    // 数式(KaTeX)の描画領域を出力
                    const html = katex.renderToString(item.value, { throwOnError: false });
                    return `<div class="math-block" style="font-size: 1.2em; margin: 10px 0; text-align: center;">${html}</div>`;
                    }
                    else if (item.type === 'image') {
                        // 画像要素の追加処理
                        return `<div class="question-image-container">
                            <img src="${escapeHtml(item.src)}" alt="${escapeHtml(item.alt || '問題画像')}" class="question-image">
                        </div>`;
                    }
                    return '';
                }).join('');
            } else {
                // 2. 従来の「text」と「code」形式への互換処理
                if (q.text) {
                    bodyAndCodeHtml += `<div class="question-body">${parseMemoLinks(q.text)}</div>`;
                }
                if (Array.isArray(q.code)) {
                    bodyAndCodeHtml += q.code.map(c => `<pre class="code-block"><code>${escapeHtml(c)}</code></pre>`).join('');
                } else if (q.code) {
                    bodyAndCodeHtml += `<pre class="code-block"><code>${escapeHtml(q.code)}</code></pre>`;
                }
            }
            // --- ここまで ---

            const optionsHtml = buildOptionsHtml(q.options);

            card.innerHTML = `
                <div class="question-header">
                    <span class="chapter-tag">${chapterTitles[q.chapter] || ''}</span>
                </div>
                <div class="question-title">問題 ${q.id}</div>
                
                <!-- テキスト・コード群の出力 -->
                ${bodyAndCodeHtml}
                
                <div class="options-container">
                    ${optionsHtml}
                </div>
                
                <details>
                    <summary>正解・解説を表示</summary>
                    <div class="answer-content">
                        <div class="correct-answer">正解：${escapeHtml(q.answer)}</div>
                        <div class="explanation">${escapeHtml(q.explanation)}</div>
                    </div>
                </details>
            `;
            questionContainer.appendChild(card);
        });
    }

    // 初期表示
    renderQuestions(questionsData);

    // フィルタリング処理（章選択）
    const chapterItems = document.querySelectorAll('#chapterList .list-item');
    const mainHeading = document.getElementById('mainHeading');

    chapterItems.forEach(item => {
        item.addEventListener('click', () => {
            chapterItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            const selectedChapter = item.getAttribute('data-chapter');
            mainHeading.textContent = item.textContent;

            // 章切り替え時に一番上へスクロールする処理を追加
            window.scrollTo({
                top: 0,
                // behavior: 'smooth'
            });

            if (selectedChapter === 'all') {
                renderQuestions(questionsData);
            } else {
                const filtered = questionsData.filter(q => q.chapter === selectedChapter);
                renderQuestions(filtered);
            }
        });
    });
});

// 簡易マークダウン変換（太字, コード記法, 改行をHTMLに変換）
function parseMarkdown(text) {
    return text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/`(.*?)`/g, '<code>$1</code>')
        .replace(/\n/g, '<br>');
}

// メソッドメモ画面の描画処理（methods.jsのmethodMemosを参照）
function renderMethodMemos(container) {
    container.innerHTML = '';

    const memoWrapper = document.createElement('div');
    memoWrapper.className = 'method-memo-container';

    methodMemos.forEach(memo => {
        const item = document.createElement('div');
        item.className = 'question-card';
        item.id = memo.id;

        item.innerHTML = `
            <h3 style="margin-bottom: 10px; color: #0056b3; border-bottom: 2px solid #e0e0e0; padding-bottom: 5px;">
                ${memo.title}
            </h3>
            <div style="line-height: 1.6; color: #333;">
                ${parseMarkdown(memo.content)}
            </div>
        `;
        memoWrapper.appendChild(item);
    });

    container.appendChild(memoWrapper);
}

// 特定のメソッドメモへ切り替えてスクロール移動する関数
window.goToMethodMemo = function(memoId) {
    const questionContainer = document.getElementById('questionContainer');
    const mainHeading = document.getElementById('mainHeading');

    // アクティブ表示の切り替え
    document.querySelectorAll('.list-item').forEach(i => i.classList.remove('active'));
    const memoBtn = document.querySelector('[data-chapter="method-memo"]');
    if (memoBtn) memoBtn.classList.add('active');

    // タイトル変更とメモ描画
    mainHeading.textContent = 'メソッドメモ';
    renderMethodMemos(questionContainer);

    // 該当のメモ位置までスクロール ＆ ハイライト
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

// イベントリスナー設定
document.addEventListener('DOMContentLoaded', () => {
    const questionContainer = document.getElementById('questionContainer');
    const mainHeading = document.getElementById('mainHeading');

    document.querySelectorAll('.list-item').forEach(item => {
        item.addEventListener('click', () => {
            document.querySelectorAll('.list-item').forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            const chapter = item.getAttribute('data-chapter');
            mainHeading.textContent = item.textContent;

            window.scrollTo({ top: 0 });

            if (chapter === 'method-memo') {
                renderMethodMemos(questionContainer);
            } else if (chapter === 'all') {
                renderQuestions(questionsData);
            } else {
                const filtered = questionsData.filter(q => q.chapter === chapter);
                renderQuestions(filtered);
            }
        });
    });
});

// 独自タグ [memo:メモID:表示テキスト] をリンクボタンに変換する関数
function parseMemoLinks(str) {
    if (!str) return '';
    // まず文字列を安全にエスケープ
    const escaped = escapeHtml(str);
    
    // [memo:memoId:Text] の形式を goToMethodMemo を呼び出す button タグに変換
    return escaped.replace(/\[memo:([^:]+):([^\]]+)\]/g, (match, memoId, text) => {
        return `<button type="button" class="memo-link-btn" onclick="goToMethodMemo('${memoId}')">${text}</button>`;
    });
}
