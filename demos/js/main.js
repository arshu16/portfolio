var movieData = {
  '2008': {
    'Iron Man': {
      genre: ['Action', 'Adventure', 'Sci-Fi'],
      rating: 7.9,
      synopsis: 'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.',
      link: 'http://www.imdb.com/title/tt0371746/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
    },
    'The Dark Knight': {
      genre: ['Action', 'Crime', 'Drama'],
      rating: 9.0,
      synopsis: 'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham, the Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
      link: 'http://www.imdb.com/title/tt0468569/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
    },
    'The Mentalist': {
      genre: ['Crime', 'Drama', 'Mystery'],
      rating: 8.1,
      synopsis: 'A famous "psychic" outs himself as a fake, and starts working as a consultant for the California Bureau of Investigation so he can find "Red John", the madman who killed his wife and daughter.',
      link: 'http://www.imdb.com/title/tt1196946/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ5OTgzOTczM15BMl5BanBnXkFtZTcwMDM2OTY4MQ@@._V1_UY268_CR9,0,182,268_AL__QL50.jpg'
    },
    'Mamma Mia!': {
      genre: ['Comedy', 'Family', 'Musical'],
      rating: 6.4,
      synopsis: "The story of a bride-to-be trying to find her real father told using hit songs by the popular '70s group ABBA.",
      link: 'http://www.imdb.com/title/tt0795421/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTA2MDU0MjM0MzReQTJeQWpwZ15BbWU3MDYwNzgwNzE@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
    },
    'True Blood': {
      genre: ['Drama', 'Fantasy', 'Mystery'],
      rating: 7.9,
      synopsis: 'Telepathic waitress Sookie Stackhouse encounters a strange new supernatural world when she meets the mysterious Bill, a southern Louisiana gentleman and vampire.',
      link: 'http://www.imdb.com/title/tt0844441/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjMyNDgxOTUwNl5BMl5BanBnXkFtZTgwNDc1NTg4MTE@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
    },
    'Sons of Anarchy': {
      genre: ['Crime', 'Drama', 'Thriller'],
      rating: 8.6,
      synopsis: 'A man in his early 30s struggles to find a balance in his life between being a new dad and his involvement in a motorcycle club.',
      link: 'http://www.imdb.com/title/tt1124373/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTEyODg2NzkwMDBeQTJeQWpwZ15BbWU4MDQwODI3MzIx._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
    },
    'Breaking Bad': {
      genre: ['Crime', 'Drama', 'Thriller'],
      rating: 9.5,
      synopsis: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
      link: 'http://www.imdb.com/title/tt0903747/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BZDNhNzhkNDctOTlmOS00NWNmLWEyODQtNWMxM2UzYmJiNGMyXkEyXkFqcGdeQXVyNTMxMjgxMzA@._V1_UY268_CR4,0,182,268_AL__QL50.jpg'
    },
    'The Curious Case of Benjamin Button': {
      genre: ['Drama', 'Fantasy', 'Romance'],
      rating: 7.8,
      synopsis: 'Tells the story of Benjamin Button, a man who starts aging backwards with bizarre consequences.',
      link: 'http://www.imdb.com/title/tt0421715/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNjQ0NTY2ODY2M15BMl5BanBnXkFtZTgwMjE4MzkxMDE@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
    },
    Twilight: {
      genre: ['Drama', 'Fantasy', 'Romance'],
      rating: 5.2,
      synopsis: 'A teenage girl risks everything when she falls in love with a vampire.',
      link: 'http://www.imdb.com/title/tt1099212/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ2NzUxMTAxN15BMl5BanBnXkFtZTcwMzEyMTIwMg@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
    },
    '90210': {
      genre: ['Comedy', 'Drama', 'Romance'],
      rating: 6.1,
      synopsis: 'A Kansas family relocates to Beverly Hills, where their two children adapt to the infamous social drama of West Beverly Hills High.',
      link: 'http://www.imdb.com/title/tt1225901/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxNzE4OTE2OV5BMl5BanBnXkFtZTcwNDQxMTY4MQ@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
    }
  },
  '2009': {
    'Parks and Recreation': {
      genre: ['Comedy'],
      rating: 8.6,
      synopsis: "The absurd antics of an Indiana town's public officials as they pursue sundry projects to make their city a better place.",
      link: 'http://www.imdb.com/title/tt1266020/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5MjUxNDgwNF5BMl5BanBnXkFtZTgwMDI5NjMwNDE@._V1_UY268_CR9,0,182,268_AL__QL50.jpg'
    },
    'The Good Wife': {
      genre: ['Crime', 'Drama', 'Mystery'],
      rating: 8.3,
      synopsis: "Alicia has been a good wife to her husband, a former state's attorney. After a very humiliating sex and corruption scandal, he is behind bars. She must now provide for her family and returns to work as a litigator in a law firm.",
      link: 'http://www.imdb.com/title/tt1442462/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTI2OTk4MDk3OF5BMl5BanBnXkFtZTcwMTY3NTc3Mg@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
    },
    'The Vampire Diaries': {
      genre: ['Drama', 'Fantasy', 'Horror'],
      rating: 7.8,
      synopsis: 'A young teen struggles to make a decision between two vampire brothers and their supernatural lives. Soon after she discovers the truth her whole world turns upside down.',
      link: 'http://www.imdb.com/title/tt1405406/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BN2IwMjAxMDktN2MyNi00Mzk1LWJmNmUtYWVmMTA2YzMyODIxXkEyXkFqcGdeQXVyNjQ0OTk1ODg@._V1_UY268_CR15,0,182,268_AL__QL50.jpg'
    },
    Archer: {
      genre: ['Animation', 'Action', 'Comedy'],
      rating: 8.7,
      synopsis: 'Covert black ops and espionage take a back seat to zany personalities and relationships between secret agents and drones.',
      link: 'http://www.imdb.com/title/tt1486217/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTg3NTMwMzY2OF5BMl5BanBnXkFtZTgwMDcxMjQ0NDE@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
    },
    Glee: {
      genre: ['Comedy', 'Drama', 'Music'],
      rating: 6.7,
      synopsis: 'A group of ambitious misfits try to escape the harsh realities of high school by joining a glee club, where they find strength, acceptance and, ultimately, their voice, while working to pursue dreams of their own.',
      link: 'http://www.imdb.com/title/tt1327801/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BZTE5ZGRhYjYtMjE1Ny00MGNlLWEyYjAtMmJlODM5ZTZhNmQ5XkEyXkFqcGdeQXVyMTkzODUwNzk@._V1_UY268_CR4,0,182,268_AL__QL50.jpg'
    },
    'Modern Family': {
      genre: ['Comedy', 'Romance'],
      rating: 8.5,
      synopsis: 'Three different, but related families face trials and tribulations in their own uniquely comedic ways.',
      link: 'http://www.imdb.com/title/tt1442437/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNzRjOTE1ZTEtMTkwYy00MDQ4LTkxMmYtNzgxMWFlY2YyZjU2XkEyXkFqcGdeQXVyMzAzNTY3MDM@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
    },
    Watchmen: {
      genre: ['Action', 'Drama', 'Mystery'],
      rating: 7.6,
      synopsis: 'In 1985 where former superheroes exist, the murder of a colleague sends active vigilante Rorschach into his own sprawling investigation, uncovering something that could completely change the course of history as we know it.',
      link: 'http://www.imdb.com/title/tt0409459/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BY2IzNGNiODgtOWYzOS00OTI0LTgxZTUtOTA5OTQ5YmI3NGUzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
    },
    Community: {
      genre: ['Comedy'],
      rating: 8.5,
      synopsis: 'A suspended lawyer is forced to enroll in a community college with an eclectic staff and student body.',
      link: 'http://www.imdb.com/title/tt1439629/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ2Njk2MzY2M15BMl5BanBnXkFtZTgwMDkxODg3MDE@._V1_UY268_CR9,0,182,268_AL__QL50.jpg'
    },
    'NCIS: Los Angeles': {
      genre: ['Crime', 'Drama', 'Mystery'],
      rating: 6.7,
      synopsis: "The Naval Criminal Investigation Service's Office of Special Projects takes on the undercover work and the hard to crack cases in LA. Key agents are G. Callen and Sam Hanna, streets kids risen through the ranks.",
      link: 'http://www.imdb.com/title/tt1378167/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM1MTMzMDU2M15BMl5BanBnXkFtZTgwMjY4NTQwMDI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
    },
    'Inglourious Basterds': {
      genre: ['Adventure', 'Drama', 'War'],
      rating: 8.3,
      synopsis: "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same.",
      link: 'http://www.imdb.com/title/tt0361748/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BOTJiNDEzOWYtMTVjOC00ZjlmLWE0NGMtZmE1OWVmZDQ2OWJhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
    }
  },
  '2007': {
    Transformers: {
      genre: ['Action', 'Adventure', 'Sci-Fi'],
      rating: 7.1,
      synopsis: 'An ancient struggle between two Cybertronian races, the heroic Autobots and the evil Decepticons, comes to Earth, with a clue to the ultimate power held by a teenager.',
      link: 'http://www.imdb.com/title/tt0418279/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNDg1NTU2OWEtM2UzYi00ZWRmLWEwMTktZWNjYWQ1NWM1OThjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
    },
    'Mad Men': {
      genre: ['Drama'],
      rating: 8.6,
      synopsis: "A drama about one of New York's most prestigious ad agencies at the beginning of the 1960s, focusing on one of the firm's most mysterious but extremely talented ad executives, Donald Draper.",
      link: 'http://www.imdb.com/title/tt0804503/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjMwNzk5Nzg2OV5BMl5BanBnXkFtZTgwMjg1OTk1NDE@._V1_UY268_CR1,0,182,268_AL__QL50.jpg'
    },
    Heartland: {
      genre: ['Drama', 'Family'],
      rating: 8.3,
      synopsis: 'A multi-generational saga set in Alberta, Canada and centered on a family getting through life together in both happy and trying times.',
      link: 'http://www.imdb.com/title/tt1094229/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjE0MDIwMzE0OF5BMl5BanBnXkFtZTgwMTE1ODY5ODE@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
    },
    Shooter: {
      genre: ['Action', 'Crime', 'Drama'],
      rating: 7.2,
      synopsis: 'A marksman living in exile is coaxed back into action after learning of a plot to kill the President. Ultimately double-crossed and framed for the attempt, he goes on the run to find the real killer and the reason he was set up.',
      link: 'http://www.imdb.com/title/tt0822854/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMGRjMzY0OGItNDc4YS00OGNlLWI3MGYtZjRkNjdiNWUyNDY4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
    },
    'Gossip Girl': {
      genre: ['Drama', 'Romance'],
      rating: 7.4,
      synopsis: 'Privileged teens living on the Upper East Side of New York can hide no secret from the ruthless blogger who is always watching.',
      link: 'http://www.imdb.com/title/tt0397442/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTg1NTc4Mzk1N15BMl5BanBnXkFtZTcwMjc4NjY4MQ@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
    },
    "St. Trinian's": {
      genre: ['Comedy', 'Family'],
      rating: 5.8,
      synopsis: 'In order to save their bankrupt school, a group of troublesome girls stage a robbery with a group of geniuses on their tails.',
      link: 'http://www.imdb.com/title/tt0964587/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTg5MjIwMzgwNF5BMl5BanBnXkFtZTcwOTg3NzI3Mg@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
    },
    'Hot Fuzz': {
      genre: ['Action', 'Comedy', 'Mystery'],
      rating: 7.9,
      synopsis: "A skilled London police officer is transferred to a small town that's harbouring a dark secret.",
      link: 'http://www.imdb.com/title/tt0425112/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMzg4MDJhMDMtYmJiMS00ZDZmLThmZWUtYTMwZDM1YTc5MWE2XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
    },
    'No Country for Old Men': {
      genre: ['Crime', 'Drama', 'Thriller'],
      rating: 8.1,
      synopsis: 'Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.',
      link: 'http://www.imdb.com/title/tt0477348/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_UY268_CR0,0,182,268_AL__QL50.jpg'
    },
    'The Tudors': {
      genre: ['Drama', 'History', 'Romance'],
      rating: 8.1,
      synopsis: 'A dramatic series about the reign and marriages of King Henry VIII.',
      link: 'http://www.imdb.com/title/tt0758790/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwNDM3MDE1NV5BMl5BanBnXkFtZTcwNzY3NDkyMw@@._V1_UY268_CR9,0,182,268_AL__QL50.jpg'
    },
    'Spider-Man 3': {
      genre: ['Action', 'Adventure'],
      rating: 6.2,
      synopsis: 'A strange black entity from another world bonds with Peter Parker and causes inner turmoil as he contends with new villains, temptations, and revenge.',
      link: 'http://www.imdb.com/title/tt0413300/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BYTk3MDljOWQtNGI2My00OTEzLTlhYjQtOTQ4ODM2MzUwY2IwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
    }
  },
  '2010': {
    'Blue Bloods': {
      genre: ['Crime', 'Drama'],
      rating: 7.5,
      synopsis: 'Revolves around a family of New York cops.',
      link: 'http://www.imdb.com/title/tt1595859/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjY0NTE1ODU3OV5BMl5BanBnXkFtZTgwOTI4NDQwMDI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
    },
    'Spartacus: Blood and Sand': {
      genre: ['Action', 'Adventure', 'Biography'],
      rating: 8.6,
      synopsis: "Watch the story of history's greatest gladiator unfold with graphic violence and the passions of the women that love them. This is Spartacus.",
      link: 'http://www.imdb.com/title/tt1442449/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BOTA2NDU2MzM5Nl5BMl5BanBnXkFtZTcwMTk3Njg3OA@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
    },
    'Shutter Island': {
      genre: ['Mystery', 'Thriller'],
      rating: 8.1,
      synopsis: 'In 1954, a U.S. Marshal investigates the disappearance of a murderer, who escaped from a hospital for the criminally insane.',
      link: 'http://www.imdb.com/title/tt1130884/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BY2NkNTcxNjAtODhjMS00Mjg2LWI1OGItMjRhMGJlODBkZTVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNzAxMjE1NDg@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
    },
    Sherlock: {
      genre: ['Crime', 'Drama', 'Mystery'],
      rating: 9.2,
      synopsis: 'A modern update finds the famous sleuth and his doctor partner solving crime in 21st century London.',
      link: 'http://www.imdb.com/title/tt1475582/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMWY3NTljMjEtYzRiMi00NWM2LTkzNjItZTVmZjE0MTdjMjJhL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTQ4NTc5OTU@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
    },
    Inception: {
      genre: ['Action', 'Adventure', 'Sci-Fi'],
      rating: 8.8,
      synopsis: 'A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.',
      link: 'http://www.imdb.com/title/tt1375666/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
    },
    'Downton Abbey': {
      genre: ['Drama', 'Romance'],
      rating: 8.7,
      synopsis: 'A chronicle of the lives of the British aristocratic Crawley family and their servants in the early 20th Century.',
      link: 'http://www.imdb.com/title/tt1606375/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BY2U1NmIwYzgtNjFkOS00YWUxLTg0YTMtZmE5NTA3YjRmY2NlXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY268_CR3,0,182,268_AL__QL50.jpg'
    },
    'Pretty Little Liars': {
      genre: ['Drama', 'Mystery', 'Romance'],
      rating: 7.6,
      synopsis: 'Four friends band together against an anonymous foe who threatens to reveal their darkest secrets, while unraveling the mystery of the murder of their best friend.',
      link: 'http://www.imdb.com/title/tt1578873/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5MDYzMzQ2Nl5BMl5BanBnXkFtZTgwMDE3MzU4MTI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
    },
    'The Walking Dead': {
      genre: ['Drama', 'Horror', 'Thriller'],
      rating: 8.5,
      synopsis: 'Sheriff Deputy Rick Grimes wakes up from a coma, to learn the world is in ruins, and must lead a group of survivors to stay alive.',
      link: 'http://www.imdb.com/title/tt1520211/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTczMDk1NDYyMV5BMl5BanBnXkFtZTgwNjE1NDU4MDI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
    },
    'Hawaii Five-0': {
      genre: ['Action', 'Crime', 'Drama'],
      rating: 7.4,
      synopsis: 'Steve McGarrett returns home to Oahu, in order to find his father\'s killer. The governor offers him the chance to run his own task force (Five-0). Steve\'s team is joined by Chin Ho Kelly, Danny "Danno" Williams, and Kono Kalakaua.',
      link: 'http://www.imdb.com/title/tt1600194/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTcwOTQ0MjA3MF5BMl5BanBnXkFtZTgwNDM4NDQwMDI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
    }
  },
  '2011': {
    'Game of Thrones': {
      genre: ['Adventure', 'Drama', 'Fantasy'],
      rating: 9.5,
      synopsis: 'Nine noble families fight for control over the mythical lands of Westeros, while a forgotten race returns after being dormant for thousands of years.',
      link: 'http://www.imdb.com/title/tt0944947/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjE3NTQ1NDg1Ml5BMl5BanBnXkFtZTgwNzY2NDA0MjI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
    },
    'Teen Wolf': {
      genre: ['Action', 'Comedy', 'Drama'],
      rating: 7.7,
      synopsis: 'A somewhat awkward teen is attacked by a werewolf and inherits the curse himself, as well as the enemies that come with it.',
      link: 'http://www.imdb.com/title/tt1567432/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTEwMzcyMjYwNzNeQTJeQWpwZ15BbWU4MDAwMTU2ODIy._V1_UY268_CR1,0,182,268_AL__QL50.jpg'
    },
    'New Girl': {
      genre: ['Comedy'],
      rating: 7.7,
      synopsis: 'After a bad break-up, Jess, an offbeat young woman, moves into an apartment loft with three single men. Although they find her behavior very unusual, the men support her - most of the time.',
      link: 'http://www.imdb.com/title/tt1826940/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ5MzM1NzMwMl5BMl5BanBnXkFtZTgwNjQ2MzI2NzE@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
    },
    'Black Mirror': {
      genre: ['Drama', 'Sci-Fi', 'Thriller'],
      rating: 8.9,
      synopsis: 'A television anthology series that shows the dark side of life and technology.',
      link: 'http://www.imdb.com/title/tt2085059/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMDRmOTZlOTEtNDdkMS00Yjg4LWJlYjgtZjA2NzkwZjMyNTk2XkEyXkFqcGdeQXVyMjYwNDA2MDE@._V1_UY268_CR4,0,182,268_AL__QL50.jpg'
    },
    Suits: {
      genre: ['Comedy', 'Drama'],
      rating: 8.6,
      synopsis: "On the run from a drug deal gone bad, Mike Ross, a brilliant college-dropout, finds himself a job working with Harvey Specter, one of New York City's best lawyers.",
      link: 'http://www.imdb.com/title/tt1632701/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTk1MjYzOTU2Nl5BMl5BanBnXkFtZTgwMzAxMTg5MTE@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
    },
    'Rise of the Planet of the Apes': {
      genre: ['Action', 'Drama', 'Sci-Fi'],
      rating: 7.6,
      synopsis: 'A substance designed to help the brain repair itself gives rise to a super-intelligent chimpanzee who leads an ape uprising.',
      link: 'http://www.imdb.com/title/tt1318514/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BYzE3ZmNlZTctMDdmNy00MjMzLWFmZmYtN2M5N2YyYTQ1ZDJjXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
    },
    Homeland: {
      genre: ['Crime', 'Drama', 'Mystery'],
      rating: 8.4,
      synopsis: 'A bipolar CIA operative becomes convinced a prisoner of war has been turned by al-Qaeda and is planning to carry out a terrorist attack on American soil.',
      link: 'http://www.imdb.com/title/tt1796960/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTA1MTA4MjU5MjReQTJeQWpwZ15BbWU4MDg3Mjc0NjAy._V1_UY268_CR7,0,182,268_AL__QL50.jpg'
    },
    'Once Upon a Time': {
      genre: ['Adventure', 'Fantasy', 'Romance'],
      rating: 7.9,
      synopsis: 'A young woman with a troubled past is drawn to a small town in Maine where fairy tales are to be believed.',
      link: 'http://www.imdb.com/title/tt1843230/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNmVjNGRlM2UtNTc3Zi00NDliLTg1NzItZjY1ZDFjNDI0MWFmXkEyXkFqcGdeQXVyMzAzNTY3MDM@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
    },
    'American Horror Story': {
      genre: ['Drama', 'Horror', 'Thriller'],
      rating: 8.2,
      synopsis: 'An anthology series centering on different characters and locations, including a house with a murderous past, an asylum, a witch coven, a freak show, a hotel, roanoke and a cult.',
      link: 'http://www.imdb.com/title/tt1844624/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTUxNjUzNTgzOV5BMl5BanBnXkFtZTgwNzAxODMwMzI@._V1_UY268_CR1,0,182,268_AL__QL50.jpg'
    },
    Shameless: {
      genre: ['Comedy', 'Drama'],
      rating: 8.7,
      synopsis: 'An alcoholic man lives in a perpetual stupor while his six children with whom he lives cope as best they can.',
      link: 'http://www.imdb.com/title/tt1586680/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5NDgyNTk0N15BMl5BanBnXkFtZTgwNzk1NTk4OTE@._V1_UY268_CR7,0,182,268_AL__QL50.jpg'
    }
  },
  '2012': {
    'Chicago Fire': {
      genre: ['Action', 'Drama'],
      rating: 7.9,
      synopsis: 'The story of firefighters in Chicago, both on a personal and professional level.',
      link: 'http://www.imdb.com/title/tt2261391/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTg4NDA4MDcyOV5BMl5BanBnXkFtZTgwMjgwNjMwMDI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
    },
    Veep: {
      genre: ['Comedy'],
      rating: 8.2,
      synopsis: 'Former Senator Selina Meyer finds that being Vice President of the United States is nothing like she hoped and everything that everyone ever warned her about.',
      link: 'http://www.imdb.com/title/tt1759761/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BODUxMDI2Mzc5Nl5BMl5BanBnXkFtZTgwNTQ0OTc2MTI@._V1_UY268_CR0,0,182,268_AL__QL50.jpg'
    },
    'The Amazing Spider-Man': {
      genre: ['Action', 'Adventure'],
      rating: 7.0,
      synopsis: "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to solve the mystery of his parent's mysterious death.",
      link: 'http://www.imdb.com/title/tt0948470/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
    },
    'The Hunger Games': {
      genre: ['Adventure', 'Sci-Fi', 'Thriller'],
      rating: 7.2,
      synopsis: "Katniss Everdeen voluntarily takes her younger sister's place in the Hunger Games: a televised competition in which two teenagers from each of the twelve Districts of Panem are chosen at random to fight to the death.",
      link: 'http://www.imdb.com/title/tt1392170/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjA4NDg3NzYxMF5BMl5BanBnXkFtZTcwNTgyNzkyNw@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
    },
    'The Avengers': {
      genre: ['Action', 'Sci-Fi'],
      rating: 8.1,
      synopsis: "Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.",
      link: 'http://www.imdb.com/title/tt0848228/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTk2NTI1MTU4N15BMl5BanBnXkFtZTcwODg0OTY0Nw@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
    },
    Nashville: {
      genre: ['Drama', 'Music', 'Romance'],
      rating: 7.7,
      synopsis: 'The lives and tragedies of rising and fading country music stars in Nashville, TN.',
      link: 'http://www.imdb.com/title/tt2281375/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTEzNDE2Mjg0MTdeQTJeQWpwZ15BbWU4MDUxNTczNzAy._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
    },
    'The Dark Knight Rises': {
      genre: ['Action', 'Thriller'],
      rating: 8.5,
      synopsis: "Eight years after the Joker's reign of anarchy, the Dark Knight, with the help of the enigmatic Selina, is forced from his exile to save Gotham City, now on the edge of total annihilation, from the brutal guerrilla terrorist Bane.",
      link: 'http://www.imdb.com/title/tt1345836/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
    },
    Arrow: {
      genre: ['Action', 'Adventure', 'Crime'],
      rating: 7.8,
      synopsis: 'Spoiled billionaire playboy Oliver Queen is missing and presumed dead when his yacht is lost at sea. He returns five years later a changed man, determined to clean up the city as a hooded vigilante armed with a bow.',
      link: 'http://www.imdb.com/title/tt2193021/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ3OTc3OTg4MV5BMl5BanBnXkFtZTgwMjE5MTIxMDI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
    },
    Elementary: {
      genre: ['Crime', 'Drama', 'Mystery'],
      rating: 7.9,
      synopsis: 'A modern take on the cases of Sherlock Holmes, with the detective now living in New York City.',
      link: 'http://www.imdb.com/title/tt2191671/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BOTMyNDcxNjg2Nl5BMl5BanBnXkFtZTgwODM4NDQwMDI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
    },
    Scandal: {
      genre: ['Drama', 'Thriller'],
      rating: 7.8,
      synopsis: 'A former White House Communications Director starts her own crisis management firm only to realize her clients are not the only ones with secrets.',
      link: 'http://www.imdb.com/title/tt1837576/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNmE5MGZjYmEtNjBlNS00YjI5LWJkMjAtZGI1N2UzYjM2YTllXkEyXkFqcGdeQXVyMzAzNTY3MDM@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
    }
  },
  '2016': {
    'The Tick': {
      genre: ['Action', 'Comedy'],
      rating: 7.2,
      synopsis: 'In a world where superheroes have been real for decades, an accountant with no superpowers comes to realize his city is owned by a super villain. As he struggles to uncover this conspiracy, he falls in league with a strange blue superhero.',
      link: 'http://www.imdb.com/title/tt5540054/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNTRkZWZlZWUtZjIyMC00OTU0LWFlYWMtM2RiODY1NTA1ZGFhXkEyXkFqcGdeQXVyNzQ0MDUyMzg@._V1_UY268_CR3,0,182,268_AL__QL50.jpg'
    },
    'Stranger Things': {
      genre: ['Drama', 'Fantasy', 'Horror'],
      rating: 8.9,
      synopsis: 'When a young boy disappears, his mother, a police chief, and his friends must confront terrifying forces in order to get him back.',
      link: 'http://www.imdb.com/title/tt4574334/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BODI0NjU5NTM0M15BMl5BanBnXkFtZTgwMTc4Mzc4MjI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
    },
    Shooter: {
      genre: ['Action', 'Drama'],
      rating: 7.7,
      synopsis: 'A conspiracy thriller that follows the journey of Bob Lee Swagger, a highly-decorated veteran who is coaxed back into action to prevent a plot to kill the President.',
      link: 'http://www.imdb.com/title/tt4181172/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNmViMGQzMzMtNzgyYy00YzA4LWIzYzAtYmU5OTA4YWJjZWNjXkEyXkFqcGdeQXVyNjgyMjQ2NjM@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
    },
    'The Lost City of Z': {
      genre: ['Action', 'Adventure', 'Biography'],
      rating: 6.7,
      synopsis: 'A true-life drama, centering on British explorer Col. Percival Fawcett, who disappeared while searching for a mysterious city in the Amazon in the 1920s.',
      link: 'http://www.imdb.com/title/tt1212428/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjQzNTk3MTkyNF5BMl5BanBnXkFtZTgwMDA2MDQzMTI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
    },
    'Suicide Squad': {
      genre: ['Action', 'Adventure', 'Fantasy'],
      rating: 6.2,
      synopsis: 'A secret government agency recruits some of the most dangerous incarcerated super-villains to form a defensive task force. Their first mission: save the world from the apocalypse.',
      link: 'http://www.imdb.com/title/tt1386697/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM1OTMxNzUyM15BMl5BanBnXkFtZTgwNjYzMTIzOTE@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
    },
    Moana: {
      genre: ['Animation', 'Adventure', 'Comedy'],
      rating: 7.7,
      synopsis: "In Ancient Polynesia, when a terrible curse incurred by the Demigod Maui reaches Moana's island, she answers the Ocean's call to seek out the Demigod to set things right.",
      link: 'http://www.imdb.com/title/tt3521164/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
    },
    Westworld: {
      genre: ['Drama', 'Mystery', 'Sci-Fi'],
      rating: 9.0,
      synopsis: 'Set at the intersection of the near future and the reimagined past, explore a world in which every human appetite, no matter how noble or depraved, can be indulged without consequence.',
      link: 'http://www.imdb.com/title/tt0475784/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTEyODk5NTc2MjNeQTJeQWpwZ15BbWU4MDQ5NTgwOTkx._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
    },
    Preacher: {
      genre: ['Adventure', 'Drama', 'Fantasy'],
      rating: 8.1,
      synopsis: 'After a supernatural event at his church, a preacher enlists the help of a vampire to find God.',
      link: 'http://www.imdb.com/title/tt5016504/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BZWE3ZTEwZmYtNjRkNy00M2E2LTlhOWQtNTNjYjZiNTdkMjgzXkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
    },
    'Rogue One': {
      genre: ['Action', 'Adventure', 'Sci-Fi'],
      rating: 7.9,
      synopsis: 'The Rebel Alliance makes a risky move to steal the plans for the Death Star, setting up the epic saga to follow.',
      link: 'http://www.imdb.com/title/tt3748528/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
    },
    Riverdale: {
      genre: ['Crime', 'Drama', 'Mystery'],
      rating: 7.9,
      synopsis: "A subversive take on Archie and his friends, exploring small town life, the darkness and weirdness bubbling beneath Riverdale's wholesome facade.",
      link: 'http://www.imdb.com/title/tt5420376/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNTkzOTA4ODE3Nl5BMl5BanBnXkFtZTgwODIzMTQzMTI@._V1_UY268_CR18,0,182,268_AL__QL50.jpg'
    }
  },
  '2013': {
    'The Originals': {
      genre: ['Drama', 'Fantasy', 'Horror'],
      rating: 8.3,
      synopsis: 'A family of power-hungry thousand year old vampires look to take back the city that they built and dominate all those who have done them wrong.',
      link: 'http://www.imdb.com/title/tt2632424/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTg3NTcwODMzNF5BMl5BanBnXkFtZTgwNjcxMjI1MTI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
    },
    'Agents of S.H.I.E.L.D.': {
      genre: ['Action', 'Drama', 'Sci-Fi'],
      rating: 7.5,
      synopsis: 'The missions of the Strategic Homeland Intervention, Enforcement and Logistics Division.',
      link: 'http://www.imdb.com/title/tt2364582/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM0NTAxMzI5OV5BMl5BanBnXkFtZTgwNDQ0OTc2MTI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
    },
    'Rick and Morty': {
      genre: ['Animation', 'Adventure', 'Comedy'],
      rating: 9.3,
      synopsis: 'An animated series that follows the exploits of a super scientist and his not so bright grandson.',
      link: 'http://www.imdb.com/title/tt2861424/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQxNDEwNTE0Nl5BMl5BanBnXkFtZTgwMzQ1MTg3MDE@._V1_UY268_CR2,0,182,268_AL__QL50.jpg'
    },
    Vikings: {
      genre: ['Action', 'Drama', 'History'],
      rating: 8.7,
      synopsis: 'The world of the Vikings is brought to life through the journey of Ragnar Lothbrok, the first Viking to emerge from Norse legend and onto the pages of history - a man on the edge of myth.',
      link: 'http://www.imdb.com/title/tt2306299/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BOTEzNzI3MDc0N15BMl5BanBnXkFtZTgwMzk1MzA5NzE@._V1_UY268_CR12,0,182,268_AL__QL50.jpg'
    },
    'Orphan Black': {
      genre: ['Action', 'Drama', 'Sci-Fi'],
      rating: 8.4,
      synopsis: 'A streetwise hustler is pulled into a compelling conspiracy after witnessing the suicide of a girl who looks just like her.',
      link: 'http://www.imdb.com/title/tt2234222/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNDUwMjA1NjE2N15BMl5BanBnXkFtZTgwOTM5OTkzODE@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
    },
    'House of Cards': {
      genre: ['Drama'],
      rating: 9.0,
      synopsis: 'A Congressman works with his equally conniving wife to exact revenge on the people who betrayed him.',
      link: 'http://www.imdb.com/title/tt1856010/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM3ODMyMjc3MV5BMl5BanBnXkFtZTgwNDgzNDc5NzE@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
    },
    'The Blacklist': {
      genre: ['Crime', 'Drama', 'Mystery'],
      rating: 8.1,
      synopsis: 'A new FBI profiler, Elizabeth Keen, has her entire life uprooted when a mysterious criminal, Raymond Reddington, who has eluded capture for decades, turns himself in and insists on speaking only to her.',
      link: 'http://www.imdb.com/title/tt2741602/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTU1NTcwNTUxM15BMl5BanBnXkFtZTgwNzU3MDk2OTE@._V1_UY268_CR12,0,182,268_AL__QL50.jpg'
    },
    'Peaky Blinders': {
      genre: ['Crime', 'Drama'],
      rating: 8.8,
      synopsis: 'A gangster family epic set in 1919 Birmingham, England and centered on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby, who means to move up in the world.',
      link: 'http://www.imdb.com/title/tt2442560/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQxODYzNTQzOV5BMl5BanBnXkFtZTgwMTI2MDYwMDE@._V1_UY268_CR1,0,182,268_AL__QL50.jpg'
    },
    'Orange Is the New Black': {
      genre: ['Comedy', 'Crime', 'Drama'],
      rating: 8.2,
      synopsis: 'Convicted of a decade old crime of transporting drug money to an ex-girlfriend, normally law abiding Piper Chapman is sentenced to a year and a half behind bars to face the reality of how life changing prison can really be.',
      link: 'http://www.imdb.com/title/tt2372162/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTU1OTcwNjg2Nl5BMl5BanBnXkFtZTgwOTk0NTk0MjI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
    },
    Broadchurch: {
      genre: ['Crime', 'Drama', 'Mystery'],
      rating: 8.4,
      synopsis: 'The murder of a young boy in a small coastal town brings a media frenzy, which threatens to tear the community apart.',
      link: 'http://www.imdb.com/title/tt2249364/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMWRmYjVjM2YtNDAwMi00ZGZmLTgzMjQtYjY4MTNjMTljNjhjXkEyXkFqcGdeQXVyMjExMjk0ODk@._V1_UY268_CR4,0,182,268_AL__QL50.jpg'
    }
  },
  '2014': {
    'The Leftovers': {
      genre: ['Drama', 'Fantasy', 'Mystery'],
      rating: 8.2,
      synopsis: 'Three years after the disappearance of 2% of the global population, a group of people from New York struggle to continue their lives, while they cope with the tragedy of the unexplained nature of the event.',
      link: 'http://www.imdb.com/title/tt2699128/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNzA5NDE0ODExMF5BMl5BanBnXkFtZTgwODQzNzY3MTI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
    },
    Power: {
      genre: ['Crime', 'Drama'],
      rating: 8.1,
      synopsis: 'James "Ghost" St. Patrick, a wealthy New York night club owner who has it all, catering for the city\'s elite and dreaming big, lives a double life as a drug kingpin.',
      link: 'http://www.imdb.com/title/tt3281796/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTg0NDMyMzEzOF5BMl5BanBnXkFtZTgwNTIzODQxMjI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
    },
    'The Flash': {
      genre: ['Action', 'Adventure', 'Drama'],
      rating: 8.1,
      synopsis: "After being struck by lightning, Barry Allen wakes up from his coma to discover he's been given the power of super speed, becoming the Flash, fighting crime in Central City.",
      link: 'http://www.imdb.com/title/tt3107288/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTY3NTgwNTA4NF5BMl5BanBnXkFtZTgwMDQ0MDUxMDI@._V1_UY268_CR16,0,182,268_AL__QL50.jpg'
    },
    Outlander: {
      genre: ['Drama', 'Romance', 'Sci-Fi'],
      rating: 8.5,
      synopsis: 'An English combat nurse from 1945 is mysteriously swept back in time to 1743.',
      link: 'http://www.imdb.com/title/tt3006802/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTEwMDUyMzgyNDVeQTJeQWpwZ15BbWU4MDQ3ODU3ODIy._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
    },
    'Dawn of the Planet of the Apes': {
      genre: ['Action', 'Adventure', 'Drama'],
      rating: 7.6,
      synopsis: 'A growing nation of genetically evolved apes led by Caesar is threatened by a band of human survivors of the devastating virus unleashed a decade earlier.',
      link: 'http://www.imdb.com/title/tt2103281/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTgwODk3NDc1N15BMl5BanBnXkFtZTgwNTc1NjQwMjE@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
    },
    Gotham: {
      genre: ['Action', 'Crime', 'Drama'],
      rating: 7.9,
      synopsis: "The story behind Detective James Gordon's rise to prominence in Gotham City in the years before Batman's arrival.",
      link: 'http://www.imdb.com/title/tt3749900/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTgwNDM0MTA5OV5BMl5BanBnXkFtZTgwMDg5MjU5MjI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
    },
    'Silicon Valley': {
      genre: ['Comedy'],
      rating: 8.6,
      synopsis: 'Follows the struggle of Richard Hendricks, a silicon valley engineer trying to build his own company called Pied Piper',
      link: 'http://www.imdb.com/title/tt2575988/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BOTA4MTE3MTQwMF5BMl5BanBnXkFtZTgwNzk4MTg4MTI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
    },
    'The 100': {
      genre: ['Drama', 'Mystery', 'Sci-Fi'],
      rating: 7.8,
      synopsis: "Set 97 years after a nuclear war has destroyed civilization, when a spaceship housing humanity's lone survivors sends 100 juvenile delinquents back to Earth in hopes of possibly re-populating the planet.",
      link: 'http://www.imdb.com/title/tt2661044/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNzI0NzM4Mjk3MV5BMl5BanBnXkFtZTgwNTg0MDQyMTI@._V1_UY268_CR16,0,182,268_AL__QL50.jpg'
    },
    Fargo: {
      genre: ['Crime', 'Drama', 'Thriller'],
      rating: 9.0,
      synopsis: 'Various chronicles of deception, intrigue and murder in and around frozen Minnesota. Yet all of these tales mysteriously lead back one way or another to Fargo, ND.',
      link: 'http://www.imdb.com/title/tt2802850/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTg5NTYxNjkyNl5BMl5BanBnXkFtZTgwNzY1Mjg4MTI@._V1_UY268_CR1,0,182,268_AL__QL50.jpg'
    },
    'The Strain': {
      genre: ['Drama', 'Horror', 'Thriller'],
      rating: 7.4,
      synopsis: 'A mysterious viral outbreak with hallmarks of an ancient and evil strain of vampirism ravages the city of New York.',
      link: 'http://www.imdb.com/title/tt2654620/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyNjY2OTMzNF5BMl5BanBnXkFtZTgwMDUxNzY3MjI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
    }
  },
  '2015': {
    iZombie: {
      genre: ['Comedy', 'Crime', 'Drama'],
      rating: 8.0,
      synopsis: 'A medical resident finds that being a zombie has its perks, which she uses to assist the police.',
      link: 'http://www.imdb.com/title/tt3501584/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTU1NDA1NDg4OF5BMl5BanBnXkFtZTgwMzU4MjA4MTI@._V1_UY268_CR16,0,182,268_AL__QL50.jpg'
    },
    'Dark Matter': {
      genre: ['Drama', 'Sci-Fi', 'Thriller'],
      rating: 7.5,
      synopsis: "Six people wake up on a deserted spaceship. They can't remember who they are or what they're doing there. They set off to find answers.",
      link: 'http://www.imdb.com/title/tt4159076/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BYjI5OGMxNzYtZmZiYS00NDI1LWI4NWMtOTZmNjY1MjMzZjExXkEyXkFqcGdeQXVyNTgxMjE3OTQ@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
    },
    Zoo: {
      genre: ['Drama', 'Sci-Fi', 'Thriller'],
      rating: 7.0,
      synopsis: "A young scientist searches to find out what's causing a rash of violent animal attacks.",
      link: 'http://www.imdb.com/title/tt3250026/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ4MjA3MzUwOF5BMl5BanBnXkFtZTgwNDU1MjMxNjE@._V1_UY268_CR4,0,182,268_AL__QL50.jpg'
    },
    Sense8: {
      genre: ['Drama', 'Mystery', 'Sci-Fi'],
      rating: 8.4,
      synopsis: "A group of people around the world are suddenly linked mentally, and must find a way to survive being hunted by those who see them as a threat to the world's order.",
      link: 'http://www.imdb.com/title/tt2431438/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTU3OTQwOTY2Ml5BMl5BanBnXkFtZTgwMjIzMjYxMjI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
    },
    Lucifer: {
      genre: ['Crime', 'Drama', 'Fantasy'],
      rating: 8.3,
      synopsis: 'Lucifer takes up residence in Los Angeles.',
      link: 'http://www.imdb.com/title/tt4052886/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjI4MTU0NzE1OF5BMl5BanBnXkFtZTgwODI3NDc0OTE@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
    },
    Narcos: {
      genre: ['Biography', 'Crime', 'Drama'],
      rating: 8.9,
      synopsis: 'A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar, as well as the many other drug kingpins who plagued the country through the years.',
      link: 'http://www.imdb.com/title/tt2707408/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTU0ODQ4NDg2OF5BMl5BanBnXkFtZTgwNzczNTE4OTE@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
    },
    'Mr. Robot': {
      genre: ['Crime', 'Drama', 'Thriller'],
      rating: 8.6,
      synopsis: 'Follows Elliot, a young programmer working as a cyber-security engineer by day, and a vigilante hacker by night.',
      link: 'http://www.imdb.com/title/tt4158110/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTYzMDE2MzI4MF5BMl5BanBnXkFtZTgwNTkxODgxOTE@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
    },
    'Better Call Saul': {
      genre: ['Crime', 'Drama'],
      rating: 8.7,
      synopsis: 'The trials and tribulations of criminal lawyer, Jimmy McGill, in the time leading up to establishing his strip-mall law office in Albuquerque, New Mexico.',
      link: 'http://www.imdb.com/title/tt3032476/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BODY2ODU0MTY5Nl5BMl5BanBnXkFtZTgwNjQ0OTc2MTI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
    },
    Supergirl: {
      genre: ['Action', 'Adventure', 'Drama'],
      rating: 6.6,
      synopsis: "The adventures of Superman's cousin in her own superhero career.",
      link: 'http://www.imdb.com/title/tt4016454/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM5Mjg2MDAxMl5BMl5BanBnXkFtZTgwMjE0NDg4OTE@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
    },
    'Fear the Walking Dead': {
      genre: ['Drama', 'Horror', 'Sci-Fi'],
      rating: 7.1,
      synopsis: 'A Walking Dead spin-off, set in Los Angeles, following two families who must band together to survive the undead apocalypse.',
      link: 'http://www.imdb.com/title/tt3743822/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM3ODM2MTUzN15BMl5BanBnXkFtZTgwNzE3NzUwMjI@._V1_UY268_CR3,0,182,268_AL__QL50.jpg'
    }
  },
  '2017': {
    'Spider-Man: Homecoming': {
      genre: ['Action', 'Adventure', 'Sci-Fi'],
      rating: 8.0,
      synopsis: 'Peter Parker, with the help of his mentor Tony Stark, tries to balance his life as an ordinary high school student in New York City while fighting crime as his superhero alter ego Spider-Man when a new threat emerges.',
      link: 'http://www.imdb.com/title/tt2250912/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNTk4ODQ1MzgzNl5BMl5BanBnXkFtZTgwMTMyMzM4MTI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
    },
    'Valerian and the City of a Thousand Planets': {
      genre: ['Action', 'Adventure', 'Fantasy'],
      rating: 6.9,
      synopsis: 'A dark force threatens Alpha, a vast metropolis and home to species from a thousand planets. Special operatives Valerian and Laureline must race to identify the marauding menace and safeguard not just Alpha, but the future of the universe.',
      link: 'http://www.imdb.com/title/tt2239822/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMDAxNDUyNV5BMl5BanBnXkFtZTgwOTc3MzcxMjI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
    },
    Dunkirk: {
      genre: ['Action', 'Drama', 'History'],
      rating: 8.6,
      synopsis: 'Allied soldiers from Belgium, the British Empire and France are surrounded by the German army and evacuated during a fierce battle in World War II.',
      link: 'http://www.imdb.com/title/tt5013056/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BN2YyZjQ0NTEtNzU5MS00NGZkLTg0MTEtYzJmMWY3MWRhZjM2XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
    },
    'War for the Planet of the Apes': {
      genre: ['Action', 'Adventure', 'Drama'],
      rating: 8.0,
      synopsis: 'After the apes suffer unimaginable losses, Caesar wrestles with his darker instincts and begins his own mythic quest to avenge his kind.',
      link: 'http://www.imdb.com/title/tt3450958/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BOGIxMjIxNDYtOGU5Ny00OWE5LWEwMjEtY2U5NTE0YzY4YTUyXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
    },
    'Wonder Woman': {
      genre: ['Action', 'Adventure', 'Fantasy'],
      rating: 7.9,
      synopsis: 'Before she was Wonder Woman, she was Diana, princess of the Amazons, trained warrior. When a pilot crashes and tells of conflict in the outside world, she leaves home to fight a war, discovering her full powers and true destiny.',
      link: 'http://www.imdb.com/title/tt0451279/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNDFmZjgyMTEtYTk5MC00NmY0LWJhZjktOWY2MzI5YjkzODNlXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
    },
    'Baby Driver': {
      genre: ['Action', 'Crime', 'Music'],
      rating: 8.2,
      synopsis: 'After being coerced into working for a crime boss, a young getaway driver finds himself taking part in a heist doomed to fail.',
      link: 'http://www.imdb.com/title/tt3890160/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM3MjQ1MzkxNl5BMl5BanBnXkFtZTgwODk1ODgyMjI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
    },
    'To the Bone': {
      genre: ['Comedy', 'Drama'],
      rating: 7.0,
      synopsis: 'A young woman is dealing with anorexia. She meets an unconventional doctor who challenges her to face her condition and embrace life.',
      link: 'http://www.imdb.com/title/tt5541240/?ref_=adv_li_i',
      imgLink: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTU1MTQ0NDAyNV5BMl5BanBnXkFtZTgwNjQ4MjE4MjI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
    }
  }
};

window.ChronosTimeline = function ChronosTimeline(target) {
  var gutter = 10;
  var width, height, svg, linksEle, nodesEle, nodes, links;
  var nodeFill = '#ccc',
    selectedNodeFill = '#8e44ad';
  var nodeRadius, selectedNodeRadius;

  function generateData() {
    nodes = [{ x: width / 2, y: height / 10, year: 2017 }, { x: width / 2, y: 2 * height / 10, year: 2016 }, { x: width / 2, y: 3 * height / 10, year: 2015 }, { x: width / 2, y: 4 * height / 10, year: 2014 }, { x: width / 2, y: 5 * height / 10, year: 2013 }, { x: width / 2, y: 6 * height / 10, year: 2012 }, { x: width / 2, y: 7 * height / 10, year: 2011 }, { x: width / 2, y: 8 * height / 10, year: 2010 }, { x: width / 2, y: 9 * height / 10, year: 2009 }, { x: width / 2, y: 10 * height / 10, year: 2008 }];

    links = [{ target: 1, source: 0 }, { target: 2, source: 1 }, { target: 3, source: 2 }, { target: 4, source: 3 }, { target: 5, source: 4 }, { target: 6, source: 5 }, { target: 7, source: 6 }, { target: 8, source: 7 }, { target: 9, source: 8 }];
  }

  function fillUpMovies(year) {
    var container = d3.select('.movies');
    var movieList = container.append('ol');
    movieList.classed('movie-list');
    var allTitles = movieData[year];
    Object.keys(allTitles).forEach(function(title, index, list) {
      movieContainer = movieList.append('li');
      movieContainer.classed('movie');
      var div = movieContainer.append('div');
      div.classed('movie-container', true);
      var titleHeading = div.append('h1');
      titleHeading
        .text(function() {
          return title + '  (';
        })
        .classed('movie-title');
      titleHeading
        .append('span')
        .attr('class', 'rating')
        .text(function() {
          return allTitles[title].rating + ' ';
        })
        .append('span')
        .text(function() {
          return ')';
        });

      div
        .append('h3')
        .text(function() {
          return 'Genre - ' + allTitles[title].genre.join(',');
        })
        .classed('movie-genre');
      var synopsisContainer = div.append('div');
      synopsisContainer.classed('synopsis-container', true);
      var anchor = synopsisContainer.append('a');
      anchor.attr('href', allTitles[title].link).classed('image-container', true);
      var img = anchor.append('img');
      img.attr('src', allTitles[title].imgLink).attr('title', 'Click to go to IMDB').classed('movie-image');
      synopsisContainer.append('p').text(allTitles[title].synopsis).classed('movie-synopsis');
    });
  }

  function nodeHovered(e, index, nodes) {
    d3.selectAll('circle').transition().attr('r', nodeRadius).style('fill', nodeFill);
    svg.select('text').remove();
    d3.select('.movies').selectAll('*').remove();
    d3.selectAll('circle[data-node-index="' + e.index + '"]').transition().attr('r', selectedNodeRadius).style('fill', selectedNodeFill);
    svg
      .append('text')
      .text(function() {
        return e.year; // Value of the text
      })
      .attr('x', function() {
        return e.x - 3 * selectedNodeRadius - this.getBBox().width - gutter;
      })
      .attr('y', function() {
        return e.y - 10;
      })
      .style('fill', '#e0a5ef')
      .style('font-size', '23px');
    window.requestAnimationFrame(fillUpMovies.bind(this, e.year));
  }

  function init() {
    var dimensions = target.getBoundingClientRect();
    width = dimensions.width;
    height = dimensions.height;
    nodeRadius = height / 40;
    selectedNodeRadius = height / 30;
    generateData();
    svg = d3.select(target).append('svg').attr('width', width).attr('height', height);
    linksEle = svg.append('g').attr('class', 'links').selectAll('line').data(links).enter().append('line').attr('stroke', 'black');
    nodesEle = svg.append('g').selectAll('.node').data(nodes).enter().append('circle').attr('class', 'node').style('fill', nodeFill).attr('data-node-index', (d, i) => i).on('mouseover', nodeHovered);
  }

  function render() {
    //forcesimulation
    var simulation = d3.forceSimulation().force(
      'link',
      d3.forceLink().distance(function(d) {
        return height / 10 - gutter;
      })
    );
    simulation.nodes(nodes).on('tick', function() {
      nodesEle
        .attr('r', nodeRadius)
        .attr('cx', function(d) {
          return d.x;
        })
        .attr('cy', function(d) {
          return d.y;
        });
      linksEle
        .attr('x1', function(d) {
          return d.source.x;
        })
        .attr('y1', function(d) {
          return d.source.y;
        })
        .attr('x2', function(d) {
          return d.target.x;
        })
        .attr('y2', function(d) {
          return d.target.y;
        });
    });
    simulation.force('link').links(links);
  }

  return {
    init: init,
    render: render
  };
};
