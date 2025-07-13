document.addEventListener('DOMContentLoaded', () => {
    const foodInput = document.getElementById('foodInput');
    const decideButton = document.getElementById('decideButton');
    const resultDisplay = document.getElementById('result');

    // 「食べる」と「食べない」の選択肢と割合 (1:1)
    const outcomes = [
        { text: '食べていいよ', class: 'result-win' },
        { text: '食べちゃダメ', class: 'result-lose' }
    ];

    // 結果表示の初期化関数
    function initializeResultDisplay() {
        const foodName = foodInput.value.trim();
        if (foodName) {
            resultDisplay.textContent = `${foodName}を…`;
            decideButton.disabled = false; // 食べ物が入力されたらボタンを有効化
        } else {
            resultDisplay.textContent = 'ここに結果が表示されます';
            decideButton.disabled = true; // 食べ物が未入力ならボタンを無効化
        }
        resultDisplay.className = 'result-box'; // スタイルをリセット
    }

    // 決定ボタンのクリックイベント
    decideButton.addEventListener('click', () => {
        const foodName = foodInput.value.trim();

        if (foodName === '') {
            alert('食べ物の名前を入力してください！');
            return;
        }

        // ボタンと入力フィールドを無効化
        decideButton.disabled = true;
        foodInput.disabled = true;

        resultDisplay.textContent = '考えています…';
        resultDisplay.className = 'result-box'; // スタイルをリセット

        // 3秒後に結果を表示
        setTimeout(() => {
            // ランダムに結果を選択 (1:1の割合)
            const randomIndex = Math.floor(Math.random() * outcomes.length);
            const chosenOutcome = outcomes[randomIndex];

            const resultText = `${foodName}、${chosenOutcome.text}！`;
            resultDisplay.textContent = resultText;
            resultDisplay.classList.add(chosenOutcome.class);

            // ボタンと入力フィールドを再度有効化
            decideButton.disabled = false;
            foodInput.disabled = false;
        }, 3000); // 3000ミリ秒 = 3秒
    });

    // 入力フィールドの内容が変更されたときに結果表示とボタンの状態を更新
    foodInput.addEventListener('input', initializeResultDisplay);

    // 初回ロード時に結果表示を初期化
    initializeResultDisplay();
});