document.addEventListener('DOMContentLoaded', function () {
    const khodams = ["Nugget Rebus", "siput kayang", "Rawa Rontek", "Kucing Miauw", "Tidak Ada", "tehyung", "Kuda Terbang", "Burung Jawir", "Singa Pargoy"];
    const checkButton = document.getElementById('checkButton');
    const retryButton = document.getElementById('retryButton');
    const inputSection = document.getElementById('input-section');
    const resultSection = document.getElementById('result-section');
    const resultText = document.getElementById('result');

    checkButton.addEventListener('click', function () {
        const username = document.getElementById('username').value.trim();
        if (username) {
            const randomKhodam = khodams[Math.floor(Math.random() * khodams.length)];
            resultText.textContent = `${username} khodam anda adalah ${randomKhodam}`;
            inputSection.style.display = 'none';
            resultSection.style.display = 'block';
        } else {
            alert('Masukkan nama anda!');
        }
    });

    retryButton.addEventListener('click', function () {
        document.getElementById('username').value = '';
        inputSection.style.display = 'block';
        resultSection.style.display = 'none';
    });
});
