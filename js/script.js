document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('dropdownBtn').addEventListener('click', function () {
      var dropdownOptions = document.getElementById('dropdownOptions');
      dropdownOptions.style.display = (dropdownOptions.style.display === 'none' || dropdownOptions.style.display === '') ? 'block' : 'none';
    });
  
    var dropdownButtons = document.querySelectorAll('#dropdownOptions .btn');
    for (var i = 0; i < dropdownButtons.length; i++) {
      dropdownButtons[i].classList.add('fixed-width'); // Ajoutez la classe fixed-width ici
  
      dropdownButtons[i].addEventListener('click', function () {
        // Réinitialise la couleur de tous les boutons
        dropdownButtons.forEach(function(button) {
          button.classList.remove('selected');
        });
  
        // Applique la classe 'selected' au bouton sélectionné
        this.classList.add('selected');

        // Met à jour le texte du bouton principal et masque les options
        document.getElementById('dropdownBtn').textContent = this.textContent;
        document.getElementById('dropdownOptions').style.display = 'none';
      });
    }
  });

  document.getElementById('textInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleEnterKeyPress();
    }
  });
  
  function handleEnterKeyPress() {
    const gameName = document.getElementById('textInput').value;
    if (gameName.trim() !== '') {
      console.log('Saisie dans l\'entrée texte:', gameName);
      document.getElementById("textdebug").innerHTML = String(gameName);
      const regionTag = document.getElementById('dropdownBtn').dataset.value; 

      fetch(`https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${gameName}/${regionTag}?api_key=RGAPI-6d1feb40-bef5-4d46-980a-48bcd17e33dd`)
      .then(response => {
        if (!response.ok) {
          throw new Error('HTTP Hatası: ' + response.status);
        }
        return response.json();
      })
      .then(data => {
        console.log('Alınan veri:', data);
      })
      .catch(error => {
        console.error('Hata:', error);
      });
    } else {
      console.log('Le champ est vide. Veuillez entrer du texte.');
    }
    
    // Ajoutez ici le code supplémentaire que vous souhaitez exécuter avec la saisie utilisateur
  }