function afficher()
{
  var name = 'Nom : '+document.getElementById('nom').value+'\n';
  var firstname = 'Prenom : '+document.getElementById('prenom').value+'\n';
  var city = 'Ville : '+document.getElementById('ville').value+'\n';
  var result= name + firstname + city;
  alert(result);
}
