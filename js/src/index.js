app.initializers.add('manubazsi/language-switcher', () => {
  // Nyelvfrissítő funkció
  function refreshLanguage() {
    const activeButton = document.querySelector('.Dropdown-toggle .Button-label');
    const activeLang = activeButton?.textContent.trim() || 'Hungarian';
    
    document.querySelectorAll('[class*="language-"], .no-lang').forEach(el => {
      el.style.display = 'none';
    });
    
    const langClass = getLangClass(activeLang);
    const activeElements = langClass 
      ? document.querySelectorAll(`.language-${langClass}`) 
      : document.querySelectorAll('.no-lang');
    
    activeElements.forEach(el => el.style.display = 'block');
  }

  // Nyelv osztály generálás
  function getLangClass(langName) {
    const langMap = {
      'Hungarian': 'hu',
      'English': 'en',
      'German': 'de',
      'French': 'fr'
    };
    return langMap[langName] || null;
  }

  // Eseményfigyelők beállítása
  function setupLanguageWatcher() {
    refreshLanguage();
    
    document.addEventListener('click', (e) => {
      if (e.target.closest('.Dropdown-menu button') || e.target.closest('.Dropdown-toggle')) {
        setTimeout(refreshLanguage, 100);
      }
    });
    
    setInterval(refreshLanguage, 100);
  }

  // Inicializálás
  document.addEventListener('DOMContentLoaded', setupLanguageWatcher);
  setTimeout(setupLanguageWatcher, 1000);
});
