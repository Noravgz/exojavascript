let answer = prompt("De quel nombre veux-tu calculer la factorielle ?");
// Convertit la saisie de l'utilisateur (qui est initialement une chaîne de caractères) en un nombre entier
let number = parseInt(answer);
// Initialise le résultat à 1, car c'est la base pour la multiplication
let result = 1;
// Vérifie si la saisie est un nombre non valide (NaN) ou un nombre négatif
if (isNaN(number) || number < 0) {
    // Si c'est le cas, affiche un message d'erreur pour demander un entier positif
    console.log("Veuillez entrer un nombre entier positif.");
} else {
// Boucle pour multiplier chaque nombre de 1 jusqu'à `number`
for (let i = 1; i <= number; i++) {
    result *= i; // Multiplie `result` par `i` et stocke le nouveau résultat
}
// Affiche le résultat
console.log(`Le résultat est : ${result}`);
}