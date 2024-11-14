let number = prompt("De quel nombre veux-tu calculer la factorielle ?");

// Initialise le résultat à 1, car c'est la base pour la multiplication
let result = 1;

// Boucle pour multiplier chaque nombre de 1 jusqu'à `number`
for (let i = 1; i <= number; i++) {
    result *= i; // Multiplie `result` par `i` et stocke le nouveau résultat
}

console.log(`Le résultat est : ${result}`);
