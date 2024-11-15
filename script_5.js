const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];


  // Va vérifier si tout les livres ont été empruntés au moins une fois
  let allBookRented = books.every(book => book.rented >= 1);
  console.log(allBookRented);

  // Reduce permet de parcourir chaque élément de mon tableau books et le réduit à un seul élément
  // Va m'afficher le livre le plus emprunté
  let maxRentedBook = books.reduce((maxBook, currentBook) => {
    return currentBook.rented > maxBook.rented ? currentBook : maxBook;
  });

  console.log(maxRentedBook);

  // Va m'afficher le livre le moins emprunté
  let minRentedBook = books.reduce((minBook, currentBook) => {
    return currentBook.rented < minBook.rented ? currentBook : minBook;
  });

  console.log(minRentedBook);


// Trouve le livre avec l'ID 873495
let bookFound = books.find(book => book.id === 873495);
console.log(bookFound); 

// Supprime le livre avec l'id = 133712 à partir de l'index trouvé si il est à la 1ère place du tableau ou à la 5ème
let bookDestroy = books.splice(books.findIndex(book => book.id === 133712), 1);
console.log(bookDestroy); // Affiche le livre supprimé
console.log("Liste des livres restants:", books);

// Compare les livres qui restent en fonctio de l'ordre alphabétique
// sort() trie les éléments et modifie le tableau
books.sort((a, b) => a.title.localeCompare(b.title));