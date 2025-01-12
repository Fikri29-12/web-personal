const toggleTheme = document.getElementById('toggleTheme');

// Variabel untuk melacak mode saat ini
let isDarkMode = false;

toggleTheme.addEventListener('click', () => {
    if (!isDarkMode) {
        // Mode Gelap
        document.documentElement.style.setProperty('--bg-color', '#333');
        document.documentElement.style.setProperty('--text-color', '#fff');
        document.documentElement.style.setProperty('--secondary-bg', '#444');
        toggleTheme.textContent = '☀️ Mode Terang'; // Ubah teks tombol
        isDarkMode = true;
    } else {
        // Mode Terang
        document.documentElement.style.setProperty('--bg-color', '#ffffff');
        document.documentElement.style.setProperty('--text-color', '#000000');
        document.documentElement.style.setProperty('--secondary-bg', '#f5f5f5');
        toggleTheme.textContent = '🌙 Mode Gelap'; // Ubah teks tombol
        isDarkMode = false;
    }
});
