const outputBtn = document.getElementById('btn');
const changeText = document.getElementById('text');

outputBtn.addEventListener('click', () => {
    changeText.textContent = 'ボタンをクリックしました';
})
