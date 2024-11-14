let number = prompt("Salut, bienvenue dans ma chouette pyramide ! Combien d'étages veux-tu ?");

for (let i = 1; i <= number; i++) {

    let spaces = " ".repeat(number - i); // Le nombre d'espaces diminue à chaque étage

    let line = spaces + "#".repeat(i); // Ajouter le bon nombre de # pour l'étage

    console.log(line);
}

