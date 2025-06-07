// ゲームデータ
const gameData = {
    easy: [
        "Elastic Compute Cloud",
        "Simple Storage Service",
        "Lambda",
        "Relational Database Service",
        "Virtual Private Cloud",
        "Identity and Access Management",
        "CloudWatch",
        "CloudFormation",
        "Elastic Load Balancing",
        "Auto Scaling",
        "Route 53",
        "CloudFront",
        "API Gateway",
        "DynamoDB",
        "Simple Queue Service",
        "Simple Notification Service",
        "Elastic Container Service",
        "Elastic Kubernetes Service",
        "Fargate",
        "ElastiCache",
        "Redshift",
        "Kinesis",
        "Glue",
        "Athena",
        "Elastic MapReduce",
        "SageMaker",
        "Rekognition",
        "Comprehend",
        "Polly",
        "Lex",
        "Connect",
        "WorkSpaces",
        "Direct Connect",
        "Virtual Private Network Gateway",
        "Transit Gateway",
        "Network Address Translation Gateway",
        "Internet Gateway",
        "Elastic IP",
        "Security Group",
        "Network Access Control List",
        "Key Management Service",
        "Secrets Manager",
        "Systems Manager",
        "CloudTrail",
        "Config",
        "GuardDuty",
        "Inspector",
        "Macie",
        "Shield",
        "Web Application Firewall",
        "Certificate Manager"
    ],
    normal: [
        "EC2 provides scalable computing capacity.",
        "S3 is object storage for any amount of data.",
        "Lambda runs code without managing servers.",
        "RDS makes it easy to set up databases.",
        "VPC provides isolated AWS Cloud sections.",
        "IAM manages access to AWS services securely.",
        "CloudWatch is a monitoring service for DevOps.",
        "CloudFormation creates AWS infrastructure easily.",
        "ELB distributes traffic across multiple targets.",
        "Auto Scaling adjusts capacity automatically.",
        "Route 53 is a scalable DNS service.",
        "CloudFront delivers content globally and securely.",
        "API Gateway helps developers create APIs easily.",
        "DynamoDB delivers millisecond database performance.",
        "SQS is a message queuing service.",
        "SNS provides messaging for applications.",
        "ECS is a container management service.",
        "EKS makes running Kubernetes easy on AWS.",
        "Fargate is serverless compute for containers.",
        "ElastiCache offers in-memory data storage.",
        "Redshift is a fast data warehouse service.",
        "Kinesis processes real-time streaming data.",
        "Glue is an ETL service for data preparation.",
        "Athena queries data in S3 interactively.",
        "EMR is a big data processing platform.",
        "SageMaker provides machine learning for developers.",
        "Rekognition adds image analysis to applications.",
        "Comprehend is a natural language processing service.",
        "Polly turns text into lifelike speech.",
        "Lex builds conversational interfaces easily.",
        "Connect is a cloud contact center service.",
        "WorkSpaces provides secure desktop solutions.",
        "Direct Connect establishes dedicated network connections.",
        "VPN Gateway connects VPC to on-premises networks.",
        "Transit Gateway connects VPCs through a hub.",
        "NAT Gateway connects private subnets to internet.",
        "Internet Gateway enables VPC internet communication.",
        "Elastic IP provides static IPv4 addresses.",
        "Security Groups control instance inbound traffic.",
        "Network ACLs provide VPC firewall security.",
        "KMS creates and manages cryptographic keys.",
        "Secrets Manager protects application secrets.",
        "Systems Manager controls AWS infrastructure.",
        "CloudTrail enables account governance and audit.",
        "Config assesses resource configurations.",
        "GuardDuty detects malicious activity continuously.",
        "Inspector improves application security automatically.",
        "Macie is a data security and privacy service.",
        "Shield protects against DDoS attacks.",
        "WAF protects web applications from attacks."
    ],
    hard: [
        "Amazon EC2 provides scalable computing capacity in the Amazon Web Services cloud.",
        "Amazon S3 is object storage built to store and retrieve any amount of data from anywhere.",
        "AWS Lambda lets you run code without provisioning or managing servers.",
        "Amazon RDS makes it easy to set up, operate, and scale a relational database in the cloud.",
        "Amazon VPC lets you provision a logically isolated section of the AWS Cloud.",
        "AWS IAM enables you to manage access to AWS services and resources securely.",
        "Amazon CloudWatch is a monitoring and observability service built for DevOps engineers.",
        "AWS CloudFormation gives developers and businesses an easy way to create infrastructure.",
        "Elastic Load Balancing automatically distributes incoming application traffic across multiple targets.",
        "Amazon Auto Scaling monitors your applications and automatically adjusts capacity.",
        "Amazon Route 53 is a highly available and scalable cloud Domain Name System service.",
        "Amazon CloudFront is a fast content delivery network service that securely delivers data.",
        "Amazon API Gateway is a fully managed service that makes it easy for developers to create APIs.",
        "Amazon DynamoDB is a key-value and document database that delivers single-digit millisecond performance.",
        "Amazon SQS is a fully managed message queuing service that enables you to decouple applications.",
        "Amazon SNS is a fully managed messaging service for both application-to-application communication.",
        "Amazon ECS is a highly scalable, high-performance container management service.",
        "Amazon EKS is a managed service that makes it easy for you to run Kubernetes on AWS.",
        "AWS Fargate is a serverless compute engine for containers that works with both ECS and EKS.",
        "Amazon ElastiCache offers fully managed in-memory data store and cache services.",
        "Amazon Redshift is a fast, scalable data warehouse that makes it simple to analyze data.",
        "Amazon Kinesis makes it easy to collect, process, and analyze real-time streaming data.",
        "AWS Glue is a fully managed extract, transform, and load service that makes data preparation easy.",
        "Amazon Athena is an interactive query service that makes it easy to analyze data in S3.",
        "Amazon EMR is the industry-leading cloud big data platform for processing vast amounts of data.",
        "Amazon SageMaker is a fully managed service that provides every developer with machine learning.",
        "Amazon Rekognition makes it easy to add image and video analysis to your applications.",
        "Amazon Comprehend is a natural language processing service that uses machine learning.",
        "Amazon Polly is a service that turns text into lifelike speech using deep learning.",
        "Amazon Lex is a service for building conversational interfaces into any application.",
        "Amazon Connect is an easy to use omnichannel cloud contact center service.",
        "Amazon WorkSpaces is a managed, secure Desktop-as-a-Service solution.",
        "AWS Direct Connect makes it easy to establish a dedicated network connection to AWS.",
        "AWS VPN Gateway connects your VPC to your on-premises network using IPsec VPN.",
        "AWS Transit Gateway connects VPCs and on-premises networks through a central hub.",
        "NAT Gateway enables instances in a private subnet to connect to the internet.",
        "Internet Gateway enables communication between instances in your VPC and the internet.",
        "Elastic IP address is a static IPv4 address designed for dynamic cloud computing.",
        "Security Groups act as a virtual firewall for your instance to control inbound traffic.",
        "Network ACLs provide an optional layer of security for your VPC that acts as a firewall.",
        "AWS KMS makes it easy for you to create and manage cryptographic keys.",
        "AWS Secrets Manager helps you protect secrets needed to access your applications.",
        "AWS Systems Manager gives you visibility and control of your infrastructure on AWS.",
        "AWS CloudTrail is a service that enables governance, compliance, and audit of your AWS account.",
        "AWS Config is a service that enables you to assess and audit the configurations of your resources.",
        "Amazon GuardDuty is a threat detection service that continuously monitors for malicious activity.",
        "Amazon Inspector is an automated security assessment service that helps improve security.",
        "Amazon Macie is a fully managed data security and data privacy service.",
        "AWS Shield is a managed Distributed Denial of Service protection service.",
        "AWS WAF is a web application firewall that helps protect your web applications."
    ]
};

// ゲーム状態
let gameState = {
    mode: null,
    currentQuestion: 0,
    score: 0,
    startTime: null,
    timeLeft: 0,
    timer: null,
    questions: [],
    currentAnswer: '',
    typedText: '',
    maxQuestions: 10,
    totalQuestions: 0,
    rankings: {
        easy: [],
        normal: [],
        hard: []
    }
};

// 画面切り替え
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.style.display = 'none';
    });
    document.getElementById(screenId).style.display = 'block';
}

// ゲーム開始
function startGame(mode) {
    gameState.mode = mode;
    gameState.currentQuestion = 0;
    gameState.score = 0;
    gameState.totalQuestions = 0;
    gameState.startTime = Date.now();
    gameState.questions = [...gameData[mode]].sort(() => Math.random() - 0.5);
    gameState.typedText = '';
    
    document.getElementById('mode-display').textContent = mode.toUpperCase() + ' モード';
    document.getElementById('score').textContent = 'クリア数: 0';
    
    showScreen('game');
    showNextQuestion();
}

// 次の問題を表示
function showNextQuestion() {
    // 10問終了チェック
    if (gameState.totalQuestions >= gameState.maxQuestions) {
        endGame();
        return;
    }
    
    // 既存のタイマーをクリア
    if (gameState.timer) {
        clearInterval(gameState.timer);
        gameState.timer = null;
    }
    
    if (gameState.currentQuestion >= gameState.questions.length) {
        // 問題をシャッフルして継続
        gameState.questions = [...gameData[gameState.mode]].sort(() => Math.random() - 0.5);
        gameState.currentQuestion = 0;
    }
    
    gameState.currentAnswer = gameState.questions[gameState.currentQuestion];
    gameState.typedText = '';
    gameState.totalQuestions++;
    
    displayQuestion();
    displayTypedText();
    
    document.getElementById('feedback').textContent = '';
    document.getElementById('feedback').className = 'feedback';
    
    // 問題数表示を更新
    document.getElementById('score').textContent = `クリア数: ${gameState.score} / 問題: ${gameState.totalQuestions}/${gameState.maxQuestions}`;
    
    // タイマー設定（全モード10秒に統一）
    gameState.timeLeft = 10;
    updateTimer();
    
    gameState.timer = setInterval(() => {
        gameState.timeLeft--;
        updateTimer();
        
        if (gameState.timeLeft <= 0) {
            clearInterval(gameState.timer);
            gameState.timer = null;
            showFeedback('timeout', 'タイムアウト！');
            setTimeout(() => {
                gameState.currentQuestion++;
                showNextQuestion();
            }, 1500);
        }
    }, 1000);
    
    // 入力フィールドにフォーカス
    setTimeout(() => {
        document.getElementById('answer').focus();
    }, 100);
}

// 問題文を表示（文字単位で色分け）
function displayQuestion() {
    const questionDisplay = document.getElementById('question-display');
    const answer = gameState.currentAnswer;
    const typed = gameState.typedText;
    
    let html = '';
    
    for (let i = 0; i < answer.length; i++) {
        const char = answer[i];
        let className = '';
        
        if (i < typed.length) {
            if (typed[i].toLowerCase() === char.toLowerCase()) {
                className = 'char correct';
            } else {
                className = 'char incorrect';
            }
        } else if (i === typed.length) {
            className = 'char current';
        } else {
            className = 'char';
        }
        
        html += `<span class="${className}">${char === ' ' ? '&nbsp;' : char}</span>`;
    }
    
    questionDisplay.innerHTML = html;
}

// 入力済みテキストを表示
function displayTypedText() {
    const typedTextElement = document.getElementById('typed-text');
    const answer = gameState.currentAnswer;
    const typed = gameState.typedText;
    
    let html = '';
    
    for (let i = 0; i < typed.length; i++) {
        const char = typed[i];
        let className = '';
        
        if (i < answer.length && typed[i].toLowerCase() === answer[i].toLowerCase()) {
            className = 'typed-char correct';
        } else {
            className = 'typed-char incorrect';
        }
        
        html += `<span class="${className}">${char === ' ' ? '&nbsp;' : char}</span>`;
    }
    
    // カーソル表示
    html += '<span class="cursor"></span>';
    
    typedTextElement.innerHTML = html;
}

// キー入力処理
function handleKeyInput(e) {
    // ゲーム画面でない場合は処理しない
    if (document.getElementById('game').style.display === 'none') {
        return;
    }
    
    // 特殊キーの処理
    if (e.key === 'Escape') {
        quitGame();
        return;
    }
    
    if (e.key === 'Backspace') {
        e.preventDefault();
        if (gameState.typedText.length > 0) {
            gameState.typedText = gameState.typedText.slice(0, -1);
            displayQuestion();
            displayTypedText();
        }
        return;
    }
    
    // 通常の文字入力
    if (e.key.length === 1) {
        e.preventDefault();
        
        const newChar = e.key;
        const currentPos = gameState.typedText.length;
        
        // 最大文字数チェック
        if (currentPos >= gameState.currentAnswer.length) {
            return;
        }
        
        gameState.typedText += newChar;
        displayQuestion();
        displayTypedText();
        
        // 完全一致チェック
        if (gameState.typedText.toLowerCase() === gameState.currentAnswer.toLowerCase()) {
            if (gameState.timer) {
                clearInterval(gameState.timer);
                gameState.timer = null;
            }
            gameState.score++;
            showFeedback('correct', '正解！');
            
            setTimeout(() => {
                gameState.currentQuestion++;
                showNextQuestion();
            }, 1000);
        }
    }
}

// タイマー更新
function updateTimer() {
    document.getElementById('timer').textContent = `残り時間: ${gameState.timeLeft}秒`;
}

// 答えをチェック（削除 - リアルタイム入力に変更）

// フィードバック表示
function showFeedback(type, message) {
    const feedback = document.getElementById('feedback');
    feedback.textContent = message;
    feedback.className = `feedback ${type}`;
}

// ゲーム終了（10問完了時）
function endGame() {
    if (gameState.timer) {
        clearInterval(gameState.timer);
        gameState.timer = null;
    }
    
    const playTime = Math.floor((Date.now() - gameState.startTime) / 1000);
    
    // ランキングに追加
    const newRecord = {
        score: gameState.score,
        time: playTime,
        timestamp: Date.now()
    };
    
    gameState.rankings[gameState.mode].push(newRecord);
    gameState.rankings[gameState.mode].sort((a, b) => {
        if (a.score !== b.score) return b.score - a.score; // スコア降順
        return a.time - b.time; // 時間昇順
    });
    
    // 結果表示
    document.getElementById('result-mode').textContent = gameState.mode.toUpperCase() + ' モード';
    document.getElementById('result-score').textContent = gameState.score + ' / ' + gameState.maxQuestions + ' 問';
    document.getElementById('result-time').textContent = formatTime(playTime);
    
    displayCurrentRanking();
    showScreen('result');
}

// ゲーム終了（途中終了時）
function quitGame() {
    endGame();
}

// 現在のランキング表示
function displayCurrentRanking() {
    const rankingList = document.getElementById('current-ranking-list');
    const rankings = gameState.rankings[gameState.mode];
    
    if (rankings.length === 0) {
        rankingList.innerHTML = '<p class="no-data">記録がありません</p>';
        return;
    }
    
    let html = '';
    rankings.slice(0, 10).forEach((record, index) => {
        html += `
            <div class="ranking-item">
                <span class="rank">${index + 1}位</span>
                <div class="rank-info">
                    <div>クリア数: ${record.score}/${gameState.maxQuestions}問</div>
                    <div>時間: ${formatTime(record.time)}</div>
                </div>
            </div>
        `;
    });
    
    rankingList.innerHTML = html;
}

// 時間フォーマット
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

// メニューに戻る
function backToMenu() {
    updateMenuRankings();
    showScreen('menu');
}

// メニューのランキング更新
function updateMenuRankings() {
    ['easy', 'normal', 'hard'].forEach(mode => {
        const rankingElement = document.getElementById(`ranking-${mode}`);
        const rankings = gameState.rankings[mode];
        
        if (rankings.length === 0) {
            rankingElement.innerHTML = '<p class="no-data">まだ記録がありません</p>';
            return;
        }
        
        let html = '';
        rankings.slice(0, 5).forEach((record, index) => {
            html += `
                <div class="ranking-item">
                    <span class="rank">${index + 1}位</span>
                    <div class="rank-info">
                        <div>クリア数: ${record.score}/${gameState.maxQuestions}問</div>
                        <div>時間: ${formatTime(record.time)}</div>
                    </div>
                </div>
            `;
        });
        
        rankingElement.innerHTML = html;
    });
}

// ランキングタブ切り替え
function showRanking(mode) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[onclick="showRanking('${mode}')"]`).classList.add('active');
    
    document.querySelectorAll('.ranking-list').forEach(list => {
        list.style.display = 'none';
    });
    document.getElementById(`ranking-${mode}`).style.display = 'block';
}

// キーボードイベント
document.addEventListener('DOMContentLoaded', function() {
    const answerInput = document.getElementById('answer');
    
    // タイピングエリアクリックでフォーカス
    document.getElementById('typed-text').addEventListener('click', function() {
        answerInput.focus();
    });
    
    document.querySelector('.typing-area').addEventListener('click', function() {
        answerInput.focus();
    });
    
    // キー入力イベント
    document.addEventListener('keydown', handleKeyInput);
    
    // 入力フィールドの値をクリア（リアルタイム入力のため不要）
    answerInput.addEventListener('input', function(e) {
        e.target.value = '';
    });
});

// モバイル対応: タッチイベント
document.addEventListener('DOMContentLoaded', function() {
    // モバイルでの入力フィールド自動フォーカス防止
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // モバイルデバイスの場合、自動フォーカスを無効化
        const style = document.createElement('style');
        style.textContent = `
            input:focus {
                font-size: 16px; /* iOS Safariでのズーム防止 */
            }
        `;
        document.head.appendChild(style);
        
        // モバイルでのキーボード表示
        document.addEventListener('touchstart', function() {
            if (document.getElementById('game').style.display !== 'none') {
                document.getElementById('answer').focus();
            }
        });
    }
});
