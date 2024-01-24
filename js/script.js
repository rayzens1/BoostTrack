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