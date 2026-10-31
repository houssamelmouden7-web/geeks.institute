
const catalogItems = [
  {
    id: 1,
    title: "Hajime no Ippo",
    category: "Anime",
    image: "image/ippo.jpg",
    metric: "⭐ 10000/10",
    ratingScore: 8.8,
    shortDescription: "Makunouchi Ippo, a bullied high school student, discovers boxing and starts his journey to become a champion.",
    fullDetails: {
      durationOrSeasons: "3 Seasons (126 Episodes)",
      releaseYear: 2000,
      story: "Ippo was a timid boy who was constantly harassed by bullies. Rescued one day by pro boxer Mamoru Takamura, he was introduced to the boxing gym where he uncovered his explosive punching power and set out to discover the true meaning of strength."
    }
  },
  {
    id: 2,
    title: "One Punch Man",
    category: "Anime",
    image: "image/one.jpg",
    metric: "⭐ 8.7/10",
    ratingScore: 8.7,
    shortDescription: "Saitama trained so hard that he lost his hair and can defeat any enemy with just a single punch.",
    fullDetails: {
      durationOrSeasons: "2 Seasons (24 Episodes)",
      releaseYear: 2015,
      story: "After three years of intense training, Saitama gained incomprehensible strength, capable of obliterating monsters effortlessly. His biggest challenge is no longer fighting villains, but the immense boredom of lacking a worthy opponent."
    }
  },
  {
    id: 3,
    title: "Black Clover",
    category: "Anime",
    image: "image/black.jpg",
    metric: "⭐ 8.3/10",
    ratingScore: 8.3,
    shortDescription: "Born without magic in a world where magic is everything, Asta strives to become the next Wizard King.",
    fullDetails: {
      durationOrSeasons: "4 Seasons (170 Episodes)",
      releaseYear: 2017,
      story: "In the Clover Kingdom, where magic defines social standing and power, orphan Asta has zero mana. Through raw physical dedication, he acquires a rare five-leaf clover grimoire wielding Anti-Magic, embarking on an epic rivalry with his genius foster brother Yuno."
    }
  },
  {
    id: 4,
    title: "Hunter x Hunter",
    category: "Anime",
    image: "image/hxh.jpg",
    metric: "⭐ 9.0/10",
    ratingScore: 9.0,
    shortDescription: "Gon Freecss embarks on a dangerous adventure to become an elite Hunter and find his missing father.",
    fullDetails: {
      durationOrSeasons: "6 Seasons (148 Episodes)",
      releaseYear: 2011,
      story: "Discovering that his absent father is an illustrious licensed Hunter, Gon leaves his island home to take the grueling Hunter Examination. Alongside his loyal companions Killua, Kurapika, and Leorio, he confronts deadly monsters and dark syndicates."
    }
  },

  {
    id: 5,
    title: "Breaking Bad",
    category: "Series",
    image: "image/bad.jpg",
    metric: "⭐ 9.5/10",
    ratingScore: 9.5,
    shortDescription: "A terminally ill high school chemistry teacher turns to manufacturing methamphetamine to secure his family's future.",
    fullDetails: {
      durationOrSeasons: "5 Seasons (62 Episodes)",
      releaseYear: 2008,
      story: "Diagnosed with Stage III lung cancer, mild-mannered teacher Walter White partners with former student Jesse Pinkman to cook pure crystal meth. His quest for financial security rapidly spirals into an intoxicating descent into ruthless drug kingpin Heisenberg."
    }
  },
  {
    id: 6,
    title: "Peaky Blinders",
    category: "Series",
    image: "image/tomy.jpg",
    metric: "⭐ 8.8/10",
    ratingScore: 8.8,
    shortDescription: "A notorious street gang in post-WWI Birmingham is led by the ambitious and fiercely calculating Tommy Shelby.",
    fullDetails: {
      durationOrSeasons: "6 Seasons (36 Episodes)",
      releaseYear: 2013,
      story: "Set in 1919 Birmingham, England, war veteran Thomas Shelby guides the Peaky Blinders criminal empire through illegal gambling, bootlegging, and political corruption while clashing with rival mobs and relentless law enforcement."
    }
  },
  {
    id: 7,
    title: "Daredevil",
    category: "Series",
    image: "image/devil.jpg",
    metric: "⭐ 8.6/10",
    ratingScore: 8.6,
    shortDescription: "A blind attorney fights legal injustice by day and wages war against organized crime as a vigilante by night.",
    fullDetails: {
      durationOrSeasons: "3 Seasons (39 Episodes)",
      releaseYear: 2015,
      story: "Blinded by toxic chemicals as a child, Matt Murdock developed superhuman sensory abilities. In Hell's Kitchen, New York, he operates a boutique law practice by day and dresses in armor at night to dismantle the criminal enterprise of crime lord Wilson Fisk."
    }
  },
  {
    id: 8,
    title: "Loki",
    category: "Series",
    image: "image/loki.jpg",
    metric: "⭐ 8.2/10",
    ratingScore: 8.2,
    shortDescription: "The mercurial God of Mischief is captured by a mysterious cosmic organization policing timeline deviations.",
    fullDetails: {
      durationOrSeasons: "2 Seasons (12 Episodes)",
      releaseYear: 2021,
      story: "After vanishing with the Tesseract, an alternate version of Loki is arrested by the Time Variance Authority (TVA). Faced with deletion from existence, he is recruited to hunt down a dangerous temporal threat threatening the stability of the entire multiverse."
    }
  },

  {
    id: 9,
    title: "Fight Club",
    category: "Movies",
    image: "image/club.jpg",
    metric: "⭐ 8.8/10",
    ratingScore: 8.8,
    shortDescription: "An insomniac office worker and an eccentric soap salesman form an underground fight club that evolves into anarchy.",
    fullDetails: {
      durationOrSeasons: "2h 19min",
      releaseYear: 1999,
      story: "Disillusioned by consumer culture and suffering from severe insomnia, an unnamed narrator bonds with soap maker Tyler Durden. Together, they establish a bare-knuckle fighting club in basement bars, which gradually metastasizes into an anti-capitalist revolutionary movement."
    }
  },
  {
    id: 10,
    title: "Inception",
    category: "Movies",
    image: "image/inception.jpg",
    metric: "⭐ 8.8/10",
    ratingScore: 8.8,
    shortDescription: "A skilled thief who steals secrets through subconscious dream-sharing is tasked with planting an idea instead.",
    fullDetails: {
      durationOrSeasons: "2h 28min",
      releaseYear: 2010,
      story: "Dom Cobb specializes in corporate espionage by infiltrating the dreams of targets. To erase his criminal history and return to his children, he accepts a nearly impossible assignment: perform inception—planting an original idea into a corporate heir's mind."
    }
  },
  {
    id: 11,
    title: "Pulp Fiction",
    category: "Movies",
    image: "image/pulp.jpg",
    metric: "⭐ 8.9/10",
    ratingScore: 8.9,
    shortDescription: "The lives of two hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.",
    fullDetails: {
      durationOrSeasons: "2h 34min",
      releaseYear: 1994,
      story: "Mob contract killers Vincent Vega and Jules Winnfield embark on a mission to retrieve a stolen briefcase for their employer Marsellus Wallace. Their routine spirals into absurd encounters involving a crime boss's wife, a rebellious boxer, and diner bandits."
    }
  },
  {
    id: 12,
    title: "City of God",
    category: "Movies",
    image: "image/gold.jpg",
    metric: "⭐ 8.6/10",
    ratingScore: 8.6,
    shortDescription: "Two boys growing up in a violent Rio favela take drastically divergent paths: one a photographer, the other a drug lord.",
    fullDetails: {
      durationOrSeasons: "2h 10min",
      releaseYear: 2002,
      story: "In the impoverished Cidade de Deus suburb of Rio de Janeiro, young Rocket dreams of escaping systemic neighborhood gang wars using his camera lens, while his peer Li'l Zé ruthlessly seizes absolute control of the local drug trade."
    }
  }
];