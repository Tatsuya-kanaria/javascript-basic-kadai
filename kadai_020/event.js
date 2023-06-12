const outputBtn = document.getElementById('btn');
const changeText = document.getElementById('text');

outputBtn.addEventListener('click', () => {
    setTimeout(() => {
        changeText.textContent = 'ボタンをクリックしました';
    }, 2000);
});
