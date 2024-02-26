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
    const userInput = document.getElementById('textInput').value;
    if (userInput.trim() !== '') {

      if(userInput.includes("#")) {
        const userInputSplit = userInput.split("#")
        const gameName = userInputSplit[0];
        const gameTag = userInputSplit[1];
        console.log(userInputSplit);

        if(gameName.trim() !== '' && gameTag.trim() !== '') {

          console.log('Saisie dans l\'entrée texte:', userInput);
          document.getElementById("textdebug").innerHTML = String(userInput);

          var regionName = document.getElementById('dropdownBtn').dataset.value;
    
          fetch(`http://localhost:4000/playerPUUID?gameName=${gameName}&gameTag=${gameTag}&regionName=${regionName}`)
          .then(response => {
            if (!response.ok) {
              throw new Error('HTTP response: ' + response.status);
            }
            return response.json();
          })
          .then(data => {
            console.log('Data:', data);
          })
          .catch(error => {
            console.error('Error:', error);
          });

        } else {
          console.log("Petit oublie dans le nom ou le tag ???")
        }
        
      } else {
        console.log('Connard le #');
      }

    } else {
      console.log('Le champ est vide. Veuillez entrer du texte.');
    }
    
    // Ajoutez ici le code supplémentaire que vous souhaitez exécuter avec la saisie utilisateur
  }