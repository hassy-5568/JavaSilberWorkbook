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

            let codeHtml = '';
            if (Array.isArray(q.code)) {
                codeHtml = q.code.map(c => `<pre class="code-block"><code>${escapeHtml(c)}</code></pre>`).join('');
            } else if (q.code) {
                codeHtml = `<pre class="code-block"><code>${escapeHtml(q.code)}</code></pre>`;
            }

            const optionsHtml = buildOptionsHtml(q.options);

            card.innerHTML = `
                <div class="question-header">
                    <span class="chapter-tag">${chapterTitles[q.chapter] || ''}</span>
                </div>
                <div class="question-title">問題 ${q.id}</div>
                <div class="question-body">${escapeHtml(q.text)}</div>
                ${codeHtml}
                
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

            if (selectedChapter === 'all') {
                renderQuestions(questionsData);
            } else {
                const filtered = questionsData.filter(q => q.chapter === selectedChapter);
                renderQuestions(filtered);
            }
        });
    });
});