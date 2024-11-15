let number = prompt("Salut, bienvenue dans ma chouette pyramide ! Combien d'étages veux-tu ?");

for (let i = 1; i <= number; i++) {

    let spaces = number - i; // Le nombre d'espaces diminue à chaque étage

    let line = " ".repeat(spaces) + "#".repeat(2 * i - 1); // Ajouter le bon nombre de # pour l'étage

    console.log(line);
}

