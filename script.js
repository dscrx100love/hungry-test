document.addEventListener('DOMContentLoaded', () => {
    // 設問データ
    const questions = [
        { text: "PCのショートカットキーを10個以上覚えており、日常的に使っている。", category: "効率化を徹底していること" },
        { text: "自分が今すぐ働けなくなっても、収入が完全にはゼロにならない仕組みがある。", category: "労働以外の収入があること" },
        { text: "「要するにどういうこと？」と聞かれたときに、複雑な話を一言でシンプルに要約できる。", category: "具体抽象が得意であること" },
        { text: "週に1日は、仕事を忘れて休める「完全オフの日」をつくっている。", category: "仕事ばかりしていないこと" },
        { text: "仕事を頼まれた際、後で「こんなはずじゃなかった」と思われないよう、最初に「完成形のイメージ」や「作業範囲」を相手とすり合わせるようにしている。", category: "期待値の調整をできること" },
        { text: "食事の内容に気を使い、ジャンクフードや過度な飲酒を避けている。", category: "健康状態が整っていること" },
        { text: "他人の意見や社会の流行に流されず、自分の「好き嫌い」や「快・不快」を優先できている。", category: "価値観が明確であること" },
        { text: "自分より詳しい人に「教えてください」と素直に聞くことができる。", category: "無知の知を知っていること" },
        { text: "収入に対する貯蓄や投資の割合を自分で決めて、実行している。", category: "会計意識をもっていること" },
        { text: "困ったときに「助けて」と頼れる人が、家族以外に3人以上いる。", category: "人との繋がりを断たないこと" },
        { text: "「この作業は本当にやる必要があるか？」と問いかけ、不要なタスクをやめた経験がある。", category: "効率化を徹底していること" },
        { text: "自分の価値観（人生で何を大切にしたいか）を3つ以上、言葉で明確に書ける。", category: "価値観が明確であること" },
        { text: "趣味や家族との時間、一人の時間を「重要な予定」としてスケジュールに入れている。", category: "仕事ばかりしていないこと" },
        { text: "投資（NISAなど）、アフィリエイト、自作コンテンツなど、労働以外の収入源について、具体的な知識を持っている。", category: "労働以外の収入があること" },
        { text: "自分を過大に見せようとせず、できないことは「できない」と正直に伝えられる。", category: "期待値の調整をできること" },
        { text: "学んだ抽象的なノウハウを、自分の状況に合わせて具体的な行動に落とし込むことができる。", category: "具体抽象が得意であること" },
        { text: "利害関係がなくても、定期的に連絡を取り合ったり、会ったりする友人がいる。", category: "人との繋がりを断たないこと" },
        { text: "毎日7時間以上の睡眠を確保することを、他の何よりも優先している。", category: "健康状態が整っていること" },
        { text: "自分の専門外の分野についても、好奇心を持って情報収集することがある。", category: "無知の知を知っていること" },
        { text: "先月の支出額と収入額を、おおよそでも把握している。", category: "会計意識をもっていること" },
        { text: "何か大きな決断をするとき、自分の価値観を基準に判断している。", category: "価値観が明確であること" },
        { text: "週に2回以上、汗をかくような運動や、30分以上の散歩を習慣にしている。", category: "健康状態が整っていること" },
        { text: "他人に対して「これぐらいやってくれるだろう」と過剰に期待せず、裏切られてもあまり落ち込まない。", category: "期待値の調整をできること" },
        { text: "収入源を増やす、または育てるための行動（情報収集、少額投資など）を定期的におこなっている。", category: "労働以外の収入があること" },
        { text: "「今の働き方は、長期的に見て自分の幸福に繋がっているか？」と自問することがある。", category: "仕事ばかりしていないこと" },
        { text: "毎日おこなう単純作業（PC操作、家事など）を、より速く、より楽にする工夫を常に探している。", category: "効率化を徹底していること" },
        { text: "来年支払う税金を考慮して、お金を管理している。", category: "会計意識をもっていること" },
        { text: "分からない言葉に出会ったとき、すぐに調べる癖がついている。", category: "無知の知を知っていること" },
        { text: "一つの具体的な出来事から、他のことにも応用できる教訓（抽象的な学び）を見つけるのが好きだ。", category: "具体抽象が得意であること" },
        { text: "新しい人と出会えるコミュニティや場所に、意識的に顔を出すようにしている。", category: "人との繋がりを断たないこと" }
    ];

    const principles = [
        "価値観が明確であること", "労働以外の収入があること", "仕事ばかりしていないこと", 
        "健康状態が整っていること", "効率化を徹底していること", "会計意識をもっていること", 
        "無知の知を知っていること", "期待値の調整をできること", "具体抽象が得意であること", 
        "人との繋がりを断たないこと"
    ];

    // DOM要素
    const startPage = document.getElementById('start-page');
    const quizPage = document.getElementById('quiz-page');
    const resultPage = document.getElementById('result-page');

    const startBtn = document.getElementById('start-btn');
    const restartBtn = document.getElementById('restart-btn');

    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const questionText = document.getElementById('question-text');
    const answerButtonsContainer = document.getElementById('answer-buttons');

    const resultTitle = document.getElementById('result-title');
    const resultScore = document.getElementById('result-score');
    const resultDescription = document.getElementById('result-description');
    const adviceText = document.getElementById('advice-text');
    const resultChartCanvas = document.getElementById('result-chart');
    const badgePlaceholder = document.getElementById('badge-placeholder');
    const principlesContainer = document.getElementById('principles-container');
    const resultCharImg = document.getElementById('result-char-img');

    // アイコンデータ
    const principleIcons = {
        "価値観が明確であること": `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/><path d="M10.5 10.5l6 6" stroke="#0a2c4e" stroke-width="2" fill="none"/><path d="M16.5 10.5l-6 6" stroke="#0a2c4e" stroke-width="2" fill="none"/></svg>`,
        "労働以外の収入があること": `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM15 8H9v2h6V8zm0 4H9v2h6v-2zm-3 4H9v2h3v-2z"/></svg>`,
        "仕事ばかりしていないこと": `<svg viewBox="0 0 24 24"><path d="M20 3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h6v2H8v2h8v-2h-2v-2h6c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H4V5h16v11z"/></svg>`,
        "健康状態が整っていること": `<svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`,
        "効率化を徹底していること": `<svg viewBox="0 0 24 24"><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/></svg>`,
        "会計意識をもっていること": `<svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2zm-4 4H7v-2h6v2zm4-8H7V7h10v2z"/></svg>`,
        "無知の知を知っていること": `<svg viewBox="0 0 24 24"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z"/></svg>`,
        "期待値の調整をできること": `<svg viewBox="0 0 24 24"><path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H3V8h18v8zM9 14h6v-4H9v4z"/></svg>`,
        "具体抽象が得意であること": `<svg viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>`,
        "人との繋がりを断たないこと": `<svg viewBox="0 0 24 24"><path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>`
    };

    // 状態変数
    let currentQuestionIndex = 0;
    let userScores = [];
    let chart;

    // イベントリスナー
    startBtn.addEventListener('click', startQuiz);
    restartBtn.addEventListener('click', resetQuiz);

    // --- 関数定義 ---

    function startQuiz() {
        currentQuestionIndex = 0;
        userScores = [];
        startPage.classList.add('hidden');
        resultPage.classList.add('hidden');
        quizPage.classList.remove('hidden');
        showQuestion();
    }

    function showQuestion() {
        updateProgress();
        const question = questions[currentQuestionIndex];
        questionText.innerHTML = question.text.replace(/（/g, '<span class="small-text">（').replace(/）/g, '）</span>');

        answerButtonsContainer.innerHTML = '';
        for (let i = 1; i <= 5; i++) {
            const button = document.createElement('button');
            button.innerText = i;
            button.classList.add('answer-btn');
            button.addEventListener('click', () => selectAnswer(i));
            answerButtonsContainer.appendChild(button);
        }
    }
    
    function selectAnswer(score) {
        userScores.push({ score: score, category: questions[currentQuestionIndex].category });
        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            calculateResults();
        }
    }

    function updateProgress() {
        const progressPercentage = (currentQuestionIndex / questions.length) * 100;
        progressBar.style.width = `${progressPercentage}%`;
        progressText.innerText = `質問 ${currentQuestionIndex + 1} / ${questions.length}`;
    }

    function calculateResults() {
        const totalScore = userScores.reduce((sum, s) => sum + s.score, 0);

        const principleScores = principles.reduce((acc, principle) => {
            acc[principle] = { total: 0, count: 0 };
            return acc;
        }, {});

        userScores.forEach(score => {
            principleScores[score.category].total += score.score;
            principleScores[score.category].count++;
        });

        const principleAverages = principles.map(p => {
            const score = principleScores[p];
            return score.count > 0 ? (score.total / (score.count * 5)) * 100 : 0; // 100点満点に正規化
        });

        let resultType, description;

        const minScore = Math.min(...principleAverages);
        let weakestPrinciples = principles.filter((p, i) => principleAverages[i] === minScore);

        // 3つ以上ある場合はランダムに2つ選ぶ
        if (weakestPrinciples.length > 2) {
            weakestPrinciples.sort(() => 0.5 - Math.random());
            weakestPrinciples = weakestPrinciples.slice(0, 2);
        }

        let advice;
        if (weakestPrinciples.length > 1) {
            advice = `【${weakestPrinciples.join('】と【')}】`;
        } else {
            advice = `【${weakestPrinciples[0]}】`;
        }

        if (totalScore >= 120) {
            resultType = "盤石最強タイプ";
            description = `<strong>素晴らしい！あなたは既に「食いっぱぐれない」ための強固な土台を築いています。</strong><br><br>10の原則のほとんどを高いレベルで実践できており、自己管理能力が非常に高いです。自信を持って、そのスタイルを続けていきましょう。<br><br>次のステージは「より深く」探求し、影響力を「より広く」展開していくことです。<br><br>今後のメルマガでは、あなたのレベルをさらに引き上げるための応用的な思考法や、新しい時代の稼ぎ方、生き方についてもお届けします。いっしょに学び続けてレベルアップしていきましょう。`;
        } else if (totalScore >= 75) {
            resultType = "伸びしろタイプ";
            description = `<strong>可能性の塊！あなたは「食いっぱぐれない」自分に変わる大きなポテンシャルを秘めています。</strong><br><br>いくつかの原則は実践できています。しかし、まだ改善の余地があるようです。特に <strong>${advice}</strong> の項目は、あなたの「伸びしろ」です。ここを意識的に改善するだけで、人生の安定度と幸福度はUPしていくでしょう。<br><br>ただし、完璧を目指す必要はありません。まずは、最も点数が低かった項目から「一つ行動を変えてみる」ことから始めてみませんか？<br><br>今後のメルマガでは、あなたの「伸びしろ」である各原則の改善につながる考え方を一つずつ解説していきます。診断で明らかになった課題を、メルマガを読みながら一緒にクリアしていきましょう！`;
        } else {
            resultType = "リスクタイプ";
            description = `<strong>今が絶好のチャンス！ここから人生を好転させていきましょう。</strong><br><br>診断お疲れ様でした。正直すこし不安を感じているかもしれません。しかし、いま最も大事なのは、あなたが「自分の現在地を正直に把握できた」という事実です。何事も変化は小さなところから。特に <strong>${advice}</strong> は、人生を好転させるための最優先課題です。<br><br>絶望しないでくださいね。今後のメルマガでは、まず何から手をつけるべきか、人生の土台となる基本的な原則から、必要な考え方をお伝えしていきます。一つずつ一緒に乗り越え、盤石な自分を築き上げていきましょう。`;
        }

        displayResults(totalScore, resultType, description, principleAverages, advice);
    }

    function displayResults(totalScore, resultType, description, principleAverages, advice) {
        quizPage.classList.add('hidden');
        resultPage.classList.remove('hidden');

        // 結果に応じてキャラクターの画像を変更
        let charImgSrc;
        if (resultType === "盤石最強タイプ") {
            charImgSrc = 'images/char-happy.png';
        } else if (resultType === "伸びしろタイプ") {
            charImgSrc = 'images/char-worried.png';
        } else { // リスクタイプ
            charImgSrc = 'images/char-crying.png';
        }
        resultCharImg.src = charImgSrc;

        resultTitle.innerText = resultType;
        resultScore.innerText = `${totalScore}点 / 150点満点`;
        resultDescription.innerHTML = description;
        adviceText.innerText = advice;

        // アイコンとスコア表示
        principlesContainer.innerHTML = '';
        principles.forEach((principle, index) => {
            const score = principleAverages[index];
            const item = document.createElement('div');
            item.classList.add('principle-item');
            
            item.innerHTML = `
                <div class="principle-icon">
                    ${principleIcons[principle]}
                </div>
                <div class="principle-details">
                    <p class="principle-name">${principle}</p>
                    <div class="principle-score-bar">
                        <div class="principle-score-fill" style="width: ${score}%;"></div>
                    </div>
                </div>
            `;
            principlesContainer.appendChild(item);
        });


        if (chart) {
            chart.destroy();
        }

        chart = new Chart(resultChartCanvas, {
            type: 'radar',
            data: {
                labels: principles.map(p => p.split('を')[0]), // ラベルを短縮
                datasets: [{
                    label: 'あなたのスコア',
                    data: principleAverages,
                    backgroundColor: 'rgba(255, 165, 0, 0.2)',
                    borderColor: 'rgba(255, 165, 0, 1)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(255, 165, 0, 1)',
                }]
            },
            options: {
                animation: {
                    duration: 1000,
                    delay: 500 // アイコン表示からの遅延
                },
                scales: {
                    r: {
                        angleLines: {
                            display: true
                        },
                        suggestedMin: 0,
                        suggestedMax: 100,
                        pointLabels: {
                            font: {
                                size: 10
                            }
                        },
                        ticks: {
                            display: false,
                            stepSize: 25
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                },
                maintainAspectRatio: true,
            }
        });
    }

    function resetQuiz() {
        resultPage.classList.add('hidden');
        startPage.classList.remove('hidden');
    }
});
