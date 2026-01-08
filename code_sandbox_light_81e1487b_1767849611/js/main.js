// 性格タイプ診断ツール - メインJavaScript

class PersonalityTest {
    constructor() {
        this.currentQuestion = 0;
        this.answers = [];
        this.totalQuestions = 10;
        this.scores = {
            passion: 0,    // 情熱型
            thinking: 0,   // 思考型
            harmony: 0,    // 協調型
            creative: 0    // 創造型
        };
        
        this.questions = [
            {
                title: "質問 1",
                text: "友人とのパーティーで、あなたはどのような行動を取りますか？",
                choices: [
                    { text: "積極的に話しかけて、場を盛り上げる", type: "passion" },
                    { text: "興味深い話題について深く議論する", type: "thinking" },
                    { text: "みんなが楽しめるよう気を配る", type: "harmony" },
                    { text: "ユニークな話や体験をシェアする", type: "creative" }
                ]
            },
            {
                title: "質問 2", 
                text: "新しいプロジェクトを始める時、最初に何をしますか？",
                choices: [
                    { text: "すぐに行動を開始して進めながら調整する", type: "passion" },
                    { text: "詳細な計画と戦略を立てる", type: "thinking" },
                    { text: "チームメンバーの意見を聞いて合意を得る", type: "harmony" },
                    { text: "従来とは違う新しいアプローチを考える", type: "creative" }
                ]
            },
            {
                title: "質問 3",
                text: "ストレスを感じた時、どのように対処しますか？",
                choices: [
                    { text: "運動やアクティビティで発散する", type: "passion" },
                    { text: "問題を分析して解決策を考える", type: "thinking" },
                    { text: "信頼できる人に相談する", type: "harmony" },
                    { text: "音楽や芸術など創作活動で気持ちを整理する", type: "creative" }
                ]
            },
            {
                title: "質問 4",
                text: "理想的な休日の過ごし方は？",
                choices: [
                    { text: "アウトドアやスポーツなどアクティブに過ごす", type: "passion" },
                    { text: "読書や学習で新しい知識を得る", type: "thinking" },
                    { text: "家族や友人と穏やかな時間を過ごす", type: "harmony" },
                    { text: "新しい場所を探索したり、趣味に没頭する", type: "creative" }
                ]
            },
            {
                title: "質問 5",
                text: "チームで意見が分かれた時、あなたの役割は？",
                choices: [
                    { text: "リーダーシップを取って決断を促す", type: "passion" },
                    { text: "データや事実に基づいて判断材料を提供する", type: "thinking" },
                    { text: "全員の意見を聞いて調整役になる", type: "harmony" },
                    { text: "全く新しい視点や代替案を提案する", type: "creative" }
                ]
            },
            {
                title: "質問 6",
                text: "あなたが最もやりがいを感じる瞬間は？",
                choices: [
                    { text: "目標を達成して成果を出した時", type: "passion" },
                    { text: "複雑な問題を解決できた時", type: "thinking" },
                    { text: "人の役に立てた時や感謝された時", type: "harmony" },
                    { text: "新しいアイデアを形にできた時", type: "creative" }
                ]
            },
            {
                title: "質問 7",
                text: "仕事や学習での優先順位は？",
                choices: [
                    { text: "効率性と成果を重視する", type: "passion" },
                    { text: "正確性と品質を重視する", type: "thinking" },
                    { text: "チームワークと協力を重視する", type: "harmony" },
                    { text: "独創性と革新性を重視する", type: "creative" }
                ]
            },
            {
                title: "質問 8",
                text: "将来への不安を感じた時、どう考えますか？",
                choices: [
                    { text: "行動することで道は開けると考える", type: "passion" },
                    { text: "リスクを分析して対策を立てる", type: "thinking" },
                    { text: "周りの人と支え合えば乗り越えられると考える", type: "harmony" },
                    { text: "変化をチャンスと捉えて新しい可能性を探る", type: "creative" }
                ]
            },
            {
                title: "質問 9",
                text: "あなたの学習スタイルは？",
                choices: [
                    { text: "実践しながら体験的に学ぶ", type: "passion" },
                    { text: "理論を理解してから応用する", type: "thinking" },
                    { text: "他の人と議論しながら学ぶ", type: "harmony" },
                    { text: "独自の方法で試行錯誤しながら学ぶ", type: "creative" }
                ]
            },
            {
                title: "質問 10",
                text: "人生で大切にしたい価値観は？",
                choices: [
                    { text: "挑戦と成長", type: "passion" },
                    { text: "知識と真実", type: "thinking" },
                    { text: "愛と調和", type: "harmony" },
                    { text: "自由と表現", type: "creative" }
                ]
            }
        ];

        this.results = {
            passion: {
                title: "情熱型 (Passionate)",
                icon: "fas fa-fire",
                color: "from-red-500 to-orange-500",
                bgColor: "from-red-100 to-orange-100",
                description: "エネルギッシュで行動力抜群のあなた",
                traits: [
                    "リーダーシップがあり、積極的に行動する",
                    "目標達成への意欲が強い", 
                    "チャレンジ精神旺盛",
                    "決断が早く、実行力がある",
                    "競争心があり、結果を重視する"
                ],
                advice: "あなたの行動力は素晴らしい強みです。時には立ち止まって周りの意見に耳を傾けることで、さらに大きな成果を得られるでしょう。",
                careers: ["営業", "起業家", "プロジェクトマネージャー", "コーチ", "イベントプランナー"]
            },
            thinking: {
                title: "思考型 (Analytical)", 
                icon: "fas fa-brain",
                color: "from-blue-500 to-cyan-500",
                bgColor: "from-blue-100 to-cyan-100",
                description: "論理的で分析力に優れたあなた",
                traits: [
                    "物事を論理的に考える能力に長けている",
                    "データや事実を重視する",
                    "問題解決能力が高い",
                    "慎重で計画的に行動する",
                    "知識欲が強く、学習意欲が高い"
                ],
                advice: "あなたの分析力は貴重な才能です。感情的な側面も大切にすることで、より豊かな人間関係を築けるでしょう。",
                careers: ["研究者", "エンジニア", "アナリスト", "コンサルタント", "財務専門家"]
            },
            harmony: {
                title: "協調型 (Harmonious)",
                icon: "fas fa-heart", 
                color: "from-green-500 to-emerald-500",
                bgColor: "from-green-100 to-emerald-100",
                description: "思いやりがあり人を大切にするあなた",
                traits: [
                    "他者への共感力が高い",
                    "チームワークを大切にする",
                    "協力的で支援することを好む",
                    "平和と調和を重視する",
                    "相手の立場に立って考えることができる"
                ],
                advice: "あなたの思いやりは周りの人を癒し、支えています。自分の意見もしっかりと表現することで、より良いバランスを保てるでしょう。",
                careers: ["カウンセラー", "教師", "看護師", "人事", "ソーシャルワーカー"]
            },
            creative: {
                title: "創造型 (Creative)",
                icon: "fas fa-lightbulb",
                color: "from-purple-500 to-indigo-500", 
                bgColor: "from-purple-100 to-indigo-100",
                description: "独創的で自由な発想力を持つあなた",
                traits: [
                    "独創性と想像力が豊か",
                    "従来の枠にとらわれない発想",
                    "新しいことへの好奇心が強い",
                    "自由な表現を重視する",
                    "変化を楽しみ、柔軟性がある"
                ],
                advice: "あなたの創造性は世界を豊かにします。アイデアを実現するための計画性も身につけることで、さらに大きなインパクトを与えられるでしょう。",
                careers: ["デザイナー", "アーティスト", "ライター", "建築家", "マーケター"]
            }
        };

        this.init();
    }

    init() {
        try {
            this.bindEvents();
            this.showStartScreen();
        } catch (error) {
            console.error('Initialization error:', error);
            this.showError('アプリケーションの初期化中にエラーが発生しました。ページを再読み込みしてください。');
        }
    }

    bindEvents() {
        try {
            console.log('Binding events...'); // デバッグログ

            // イベントリスナーをより確実に設定
            this.bindStartButton();
            this.bindNavigationButtons();
            this.bindActionButtons();
            
            console.log('All events bound successfully'); // デバッグログ
        } catch (error) {
            console.error('Event binding error:', error);
            this.showError('イベントの設定中にエラーが発生しました');
        }
    }

    bindStartButton() {
        const startBtn = document.getElementById('start-btn');
        if (startBtn) {
            // 複数の方法でイベントを設定（確実性向上）
            startBtn.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Start button clicked'); // デバッグログ
                this.startTest();
            });
            
            // タッチデバイス対応
            startBtn.addEventListener('touchstart', (e) => {
                e.preventDefault();
                console.log('Start button touched'); // デバッグログ
                this.startTest();
            });
            
            console.log('Start button event bound');
        } else {
            console.error('Start button not found');
        }
    }

    bindNavigationButtons() {
        // 次へボタン
        const nextBtn = document.getElementById('next-btn');
        if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Next button clicked'); // デバッグログ
                this.nextQuestion();
            });
        }

        // 前へボタン
        const prevBtn = document.getElementById('prev-btn');
        if (prevBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Previous button clicked'); // デバッグログ
                this.prevQuestion();
            });
        }
    }

    bindActionButtons() {
        // 再開始ボタン
        const restartBtn = document.getElementById('restart-btn');
        if (restartBtn) {
            restartBtn.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Restart button clicked'); // デバッグログ
                this.restartTest();
            });
        }

        // シェアボタン
        const shareBtn = document.getElementById('share-btn');
        if (shareBtn) {
            shareBtn.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Share button clicked'); // デバッグログ
                this.shareResult();
            });
        }
    }

    showError(message) {
        const errorDiv = document.createElement('div');
        errorDiv.style.cssText = `
            position: fixed; 
            top: 20px; 
            left: 50%; 
            transform: translateX(-50%); 
            background: #ef4444; 
            color: white; 
            padding: 15px 25px; 
            border-radius: 5px; 
            z-index: 1000;
            font-weight: bold;
        `;
        errorDiv.textContent = message;
        document.body.appendChild(errorDiv);
        
        setTimeout(() => {
            if (errorDiv.parentNode) {
                errorDiv.parentNode.removeChild(errorDiv);
            }
        }, 5000);
    }

    showStartScreen() {
        document.getElementById('start-screen').style.display = 'block';
        document.getElementById('question-screen').style.display = 'none';
        document.getElementById('result-screen').style.display = 'none';
        document.getElementById('progress-section').style.display = 'none';
    }

    startTest() {
        this.currentQuestion = 0;
        this.answers = [];
        this.scores = { passion: 0, thinking: 0, harmony: 0, creative: 0 };
        
        document.getElementById('start-screen').style.display = 'none';
        document.getElementById('question-screen').style.display = 'block';
        document.getElementById('result-screen').style.display = 'none';
        document.getElementById('progress-section').style.display = 'block';
        
        this.showQuestion();
    }

    showQuestion() {
        const question = this.questions[this.currentQuestion];
        
        document.getElementById('question-title').textContent = question.title;
        document.getElementById('question-text').textContent = question.text;
        
        // 選択肢を生成
        const choicesContainer = document.getElementById('choices-container');
        choicesContainer.innerHTML = '';
        
        question.choices.forEach((choice, index) => {
            const choiceBtn = document.createElement('button');
            choiceBtn.className = 'choice-button w-full p-4 text-left rounded-lg border-2 border-gray-200 hover:border-indigo-500 hover:bg-indigo-50 transition-all duration-300';
            choiceBtn.innerHTML = `
                <div class="flex items-center">
                    <div class="w-6 h-6 rounded-full border-2 border-gray-300 mr-4 flex items-center justify-center">
                        <span class="text-sm font-bold">${String.fromCharCode(65 + index)}</span>
                    </div>
                    <span class="flex-1">${choice.text}</span>
                </div>
            `;
            
            // 複数の方法でイベントを設定（確実性向上）
            choiceBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log(`Choice ${index} clicked: ${choice.text}`); // デバッグログ
                this.selectChoice(index, choice.type);
            });

            // タッチデバイス対応
            choiceBtn.addEventListener('touchstart', (e) => {
                e.preventDefault();
                console.log(`Choice ${index} touched: ${choice.text}`); // デバッグログ
                this.selectChoice(index, choice.type);
            });

            // カーソルポインターを設定
            choiceBtn.style.cursor = 'pointer';
            
            choicesContainer.appendChild(choiceBtn);
        });
        
        // 進行状況を更新
        this.updateProgress();
        
        // ボタンの状態を更新
        document.getElementById('prev-btn').style.display = this.currentQuestion > 0 ? 'block' : 'none';
        document.getElementById('next-btn').disabled = true;
        document.getElementById('next-btn').textContent = this.currentQuestion === this.totalQuestions - 1 ? '結果を見る' : '次の質問';
        
        // 前回の回答を復元
        if (this.answers[this.currentQuestion] !== undefined) {
            this.selectChoice(this.answers[this.currentQuestion].choiceIndex, this.answers[this.currentQuestion].type, false);
        }
    }

    selectChoice(choiceIndex, type, navigate = true) {
        try {
            // 前回の選択をクリア
            document.querySelectorAll('.choice-button').forEach(btn => {
                btn.classList.remove('selected');
            });
            
            // 新しい選択をハイライト
            const buttons = document.querySelectorAll('.choice-button');
            if (buttons[choiceIndex]) {
                buttons[choiceIndex].classList.add('selected');
            }
            
            // 回答を保存
            this.answers[this.currentQuestion] = { choiceIndex, type };
            
            // 次へボタンを有効化
            const nextBtn = document.getElementById('next-btn');
            if (nextBtn) {
                nextBtn.disabled = false;
            }
            
            // 自動的に次の質問へ（オプション）
            if (navigate) {
                setTimeout(() => {
                    try {
                        if (this.currentQuestion < this.totalQuestions - 1) {
                            this.nextQuestion();
                        } else {
                            this.showResults();
                        }
                    } catch (error) {
                        console.error('Navigation error:', error);
                    }
                }, 500);
            }
        } catch (error) {
            console.error('Choice selection error:', error);
            this.showError('選択の処理中にエラーが発生しました。');
        }
    }

    nextQuestion() {
        if (this.answers[this.currentQuestion] === undefined) return;
        
        if (this.currentQuestion < this.totalQuestions - 1) {
            this.currentQuestion++;
            this.showQuestion();
        } else {
            this.showResults();
        }
    }

    prevQuestion() {
        if (this.currentQuestion > 0) {
            this.currentQuestion--;
            this.showQuestion();
        }
    }

    updateProgress() {
        const progress = ((this.currentQuestion + 1) / this.totalQuestions) * 100;
        document.getElementById('progress-bar').style.width = `${progress}%`;
        document.getElementById('progress-text').textContent = `${this.currentQuestion + 1}/${this.totalQuestions}`;
    }

    calculateScores() {
        // スコアをリセット
        this.scores = { passion: 0, thinking: 0, harmony: 0, creative: 0 };
        
        // 各回答に基づいてスコアを計算
        this.answers.forEach(answer => {
            if (answer && answer.type) {
                this.scores[answer.type]++;
            }
        });
    }

    getResultType() {
        this.calculateScores();
        
        // 最高スコアのタイプを決定
        let maxScore = 0;
        let resultType = 'passion';
        
        for (const [type, score] of Object.entries(this.scores)) {
            if (score > maxScore) {
                maxScore = score;
                resultType = type;
            }
        }
        
        return resultType;
    }

    showResults() {
        const resultType = this.getResultType();
        const result = this.results[resultType];
        
        document.getElementById('question-screen').style.display = 'none';
        document.getElementById('result-screen').style.display = 'block';
        document.getElementById('progress-section').style.display = 'none';
        
        // 結果コンテンツを生成
        const resultContent = document.getElementById('result-content');
        resultContent.innerHTML = `
            <div class="mb-8">
                <div class="inline-block bg-gradient-to-r ${result.color} text-white p-6 rounded-full mb-6">
                    <i class="${result.icon} text-4xl"></i>
                </div>
                <h2 class="text-3xl font-bold text-gray-800 mb-4">${result.title}</h2>
                <p class="text-xl text-gray-600 mb-6">${result.description}</p>
            </div>
            
            <div class="bg-gradient-to-r ${result.bgColor} p-6 rounded-lg mb-8">
                <h3 class="text-xl font-bold text-gray-800 mb-4">あなたの特徴</h3>
                <ul class="text-left space-y-2">
                    ${result.traits.map(trait => `<li class="flex items-center"><i class="fas fa-check text-green-500 mr-2"></i>${trait}</li>`).join('')}
                </ul>
            </div>
            
            <div class="bg-yellow-50 p-6 rounded-lg mb-8">
                <h3 class="text-xl font-bold text-gray-800 mb-4">アドバイス</h3>
                <p class="text-gray-700">${result.advice}</p>
            </div>
            
            <div class="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 class="text-xl font-bold text-gray-800 mb-4">向いている職業</h3>
                <div class="flex flex-wrap gap-2 justify-center">
                    ${result.careers.map(career => `<span class="bg-white px-3 py-1 rounded-full text-sm border">${career}</span>`).join('')}
                </div>
            </div>
            
            <div class="bg-blue-50 p-6 rounded-lg">
                <h3 class="text-xl font-bold text-gray-800 mb-4">スコア詳細</h3>
                <div class="grid grid-cols-2 gap-4 text-sm">
                    <div class="text-center">
                        <div class="text-red-600 font-semibold">情熱型</div>
                        <div class="text-2xl font-bold">${this.scores.passion}</div>
                    </div>
                    <div class="text-center">
                        <div class="text-blue-600 font-semibold">思考型</div>
                        <div class="text-2xl font-bold">${this.scores.thinking}</div>
                    </div>
                    <div class="text-center">
                        <div class="text-green-600 font-semibold">協調型</div>
                        <div class="text-2xl font-bold">${this.scores.harmony}</div>
                    </div>
                    <div class="text-center">
                        <div class="text-purple-600 font-semibold">創造型</div>
                        <div class="text-2xl font-bold">${this.scores.creative}</div>
                    </div>
                </div>
            </div>
        `;
    }

    restartTest() {
        this.showStartScreen();
    }

    shareResult() {
        try {
            const resultType = this.getResultType();
            const result = this.results[resultType];
            
            const shareText = `私の性格タイプは「${result.title}」でした！\n\n${result.description}\n\nあなたも診断してみませんか？`;
            const fullText = shareText + '\n' + window.location.href;
            
            // Web Share API対応チェック
            if (navigator.share && navigator.canShare && navigator.canShare({
                title: '性格タイプ診断の結果',
                text: shareText,
                url: window.location.href
            })) {
                navigator.share({
                    title: '性格タイプ診断の結果',
                    text: shareText,
                    url: window.location.href
                }).catch(err => {
                    console.log('Share cancelled or failed:', err);
                    this.fallbackShare(fullText);
                });
            } else {
                this.fallbackShare(fullText);
            }
        } catch (error) {
            console.error('Share error:', error);
            this.fallbackShare('診断結果をシェアする機能でエラーが発生しました。');
        }
    }

    fallbackShare(text) {
        // クリップボードAPI対応チェック
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(() => {
                this.showShareSuccess('結果がクリップボードにコピーされました！');
            }).catch(() => {
                this.showShareFallback(text);
            });
        } else {
            this.showShareFallback(text);
        }
    }

    showShareSuccess(message) {
        alert(message);
    }

    showShareFallback(text) {
        // 最終フォールバック：テキストエリアを表示してコピーを促す
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed; 
            top: 0; left: 0; 
            width: 100%; height: 100%; 
            background: rgba(0,0,0,0.5); 
            display: flex; 
            align-items: center; 
            justify-content: center; 
            z-index: 1000;
        `;
        
        const content = document.createElement('div');
        content.style.cssText = `
            background: white; 
            padding: 20px; 
            border-radius: 10px; 
            max-width: 500px; 
            width: 90%;
        `;
        
        content.innerHTML = `
            <h3 style="margin-bottom: 15px;">結果をシェア</h3>
            <textarea readonly style="
                width: 100%; 
                height: 100px; 
                margin-bottom: 15px; 
                padding: 10px; 
                border: 1px solid #ddd; 
                border-radius: 5px;
                font-family: inherit;
            ">${text}</textarea>
            <div style="text-align: center;">
                <button onclick="this.parentElement.parentElement.parentElement.remove()" style="
                    background: #6366f1; 
                    color: white; 
                    border: none; 
                    padding: 10px 20px; 
                    border-radius: 5px; 
                    cursor: pointer;
                ">閉じる</button>
            </div>
        `;
        
        modal.appendChild(content);
        document.body.appendChild(modal);
        
        // テキストエリアを選択
        const textarea = content.querySelector('textarea');
        textarea.select();
        textarea.setSelectionRange(0, 99999); // モバイル対応
    }
}

// ページ読み込み時に診断ツールを初期化
function initializeApp() {
    console.log('🚀 Initializing Personality Test App...');
    
    try {
        // ブラウザサポート確認
        if (typeof window === 'undefined' || typeof document === 'undefined') {
            console.error('❌ Browser environment not detected');
            return;
        }
        console.log('✅ Browser environment OK');

        // 必要なDOM要素の存在確認
        const requiredElements = [
            'start-btn', 'question-screen', 'result-screen', 
            'start-screen', 'progress-section'
        ];
        
        const elementStatus = {};
        requiredElements.forEach(id => {
            const element = document.getElementById(id);
            elementStatus[id] = !!element;
            if (element) {
                console.log(`✅ Element found: ${id}`);
            } else {
                console.error(`❌ Element missing: ${id}`);
            }
        });
        
        const missingElements = requiredElements.filter(id => !document.getElementById(id));
        
        if (missingElements.length > 0) {
            console.error('❌ Required elements missing:', missingElements);
            showInitError('必要な要素が見つかりません: ' + missingElements.join(', '));
            return;
        }

        // 診断ツールを初期化
        console.log('🎯 Creating PersonalityTest instance...');
        const app = new PersonalityTest();
        console.log('✅ PersonalityTest initialized successfully');
        
        // グローバル変数として保存（デバッグ用）
        window.personalityApp = app;
        
    } catch (error) {
        console.error('💥 Application startup error:', error);
        showInitError('アプリケーションの初期化中にエラーが発生しました: ' + error.message);
    }
}

function showInitError(message) {
    // 緊急時フォールバック表示
    const fallbackMessage = document.createElement('div');
    fallbackMessage.style.cssText = `
        text-align: center; 
        padding: 50px; 
        font-family: Arial, sans-serif;
        color: #666;
        background: white;
        border-radius: 10px;
        margin: 20px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    `;
    fallbackMessage.innerHTML = `
        <h2>🚨 エラーが発生しました</h2>
        <p>${message}</p>
        <p>ページを再読み込みして再度お試しください。</p>
        <button onclick="location.reload()" style="
            background: #6366f1; 
            color: white; 
            border: none; 
            padding: 12px 24px; 
            border-radius: 6px; 
            cursor: pointer; 
            margin-top: 20px;
            font-size: 16px;
        ">🔄 ページを再読み込み</button>
        <br><br>
        <button onclick="console.log(document.getElementById('start-btn'))" style="
            background: #gray; 
            color: white; 
            border: none; 
            padding: 8px 16px; 
            border-radius: 4px; 
            cursor: pointer; 
            margin-top: 10px;
            font-size: 14px;
        ">🔍 デバッグ情報</button>
    `;
    
    document.body.appendChild(fallbackMessage);
}

// 複数の方法でアプリを初期化（確実性向上）
document.addEventListener('DOMContentLoaded', initializeApp);

// フォールバック：DOMContentLoadedが動作しない場合
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    // 既にDOMが読み込まれている場合はすぐに実行
    initializeApp();
}

// 追加のフォールバック：window.onloadイベント
window.addEventListener('load', () => {
    if (!window.personalityApp) {
        console.log('🔄 Fallback initialization on window load');
        initializeApp();
    }
});

// 古いブラウザ対応：Web APIのポリフィル
if (!window.console) {
    window.console = {
        log: function() {},
        error: function() {},
        warn: function() {}
    };
}

// デバッグ用の関数をグローバルに追加
window.debugPersonalityTest = function() {
    console.log('=== Personality Test Debug Info ===');
    console.log('App instance:', window.personalityApp);
    console.log('Start button:', document.getElementById('start-btn'));
    console.log('Question screen:', document.getElementById('question-screen'));
    console.log('Result screen:', document.getElementById('result-screen'));
    console.log('Start screen:', document.getElementById('start-screen'));
    
    const startBtn = document.getElementById('start-btn');
    if (startBtn) {
        console.log('Start button click test...');
        startBtn.click();
    }
};