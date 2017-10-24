function afficher()
{
  var name = document.getElementById('nom').value;
  var firstname = document.getElementById('prenom').value;
  var city = document.getElementById('ville').value;
  if (isNaN(name) == true && isNaN(firstname) == true && isNaN(city) && name && firstname && city){ //vérification que les données saisis sont bien des chaine de caractère
          name = 'Nom :' + name;
          firstname = 'Prénom :' + firstname;
          town  = 'Ville :' + city;
          alert(name + '\n' + firstname + '\n' + city); //affichage du message dans une box
        }
        else{
          alert('Veuillez vérifier votre saisis');
        }
}
