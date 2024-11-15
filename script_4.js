const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];


    // Va m'afficher seulement les entrepreneurs nés entre 1970 et 1980
        const entrepreneursNesEntre1970Et1980 = entrepreneurs.filter(
        entrepreneur => entrepreneur.year >= 1970 && entrepreneur.year <= 1980
      );
        console.log(entrepreneursNesEntre1970Et1980);
    
     // Va m'afficher le prénom et le nom de chaque entrepreneur
        entrepreneurs.forEach(entrepreneur => {
        console.log(entrepreneur.first);
        console.log(entrepreneur.last);
      });

    // Compare les livres qui restent en fonctio de l'ordre alphabétique
    // sort() trie les éléments et modifie le tableau
    entrepreneurs.sort((a, b) => a.last.localeCompare(b.last));
    console.log(entrepreneurs);

