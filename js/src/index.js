import app from 'flarum/forum/app';

app.initializers.add('your-namespace/language-switcher', () => {
  // 1. ESSENTIAL REFRESH FUNCTION
  function refreshLanguage() {
    // Get currently selected language from button text
    const activeButton = document.querySelector('.Dropdown-toggle .Button-label');
    const activeLang = activeButton ? activeButton.textContent.trim() : 'Hungarian';
    
    // Hide all language elements
    document.querySelectorAll('[class*="language-"], .no-lang').forEach(el => {
      el.style.display = 'none';
    });
    
    // Show current language elements
    const langClass = getLangClass(activeLang);
    const activeElements = langClass 
      ? document.querySelectorAll(`.language-${langClass}`) 
      : document.querySelectorAll('.no-lang');
    
    activeElements.forEach(el => {
      el.style.display = 'block';
    });
  }

  // Helper function to convert language name to class
  function getLangClass(langName) {
    const langMap = {
      'Hungarian': 'hu',
      'English': 'en'
      'Germany': 'ge' 
      'France': 'fr'
      // Add more languages as needed
    };
    return langMap[langName] || null;
  }

  // 2. COMPREHENSIVE EVENT LISTENING
  function setupLanguageWatcher() {
    // Immediate refresh
    refreshLanguage();
    
    // Watch for button clicks
    document.addEventListener('click', (e) => {
      if (e.target.closest('.Dropdown-menu button') || 
          e.target.closest('.Dropdown-toggle')) {
        setTimeout(refreshLanguage, 100);
      }
    });
    
    // Periodic check (safety net)
    setInterval(refreshLanguage, 100);
  }

  // 3. INITIALIZATION
  document.addEventListener('DOMContentLoaded', setupLanguageWatcher);
  setTimeout(setupLanguageWatcher, 1000); // Just to be sure
});
