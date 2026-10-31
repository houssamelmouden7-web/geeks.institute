const catalogItems = [
  {
    id: 1,
    title: "Hajime no Ippo",
    category: "Anime",
    image: "https://www.themoviedb.org/t/p/w600_and_h900_face/fEYVJu08En9A7n0e5TTpeoSjtIm.jpg",
    metric: "⭐ 10000/10",
    ratingScore: 8.8,
    shortDescription: "Makunouchi Ippo, a bullied student, discovers boxing and begins his relentless ascent to glory.",
    fullDetails: {
      durationOrSeasons: "3 Seasons (126 Episodes)",
      releaseYear: 2000,
      story: "Rescued from street thugs by pro boxer Mamoru Takamura, timid Ippo discovers explosive punching power and commits his heart and soul to boxing in order to understand what it means to be truly strong."
    }
  },
  {
    id: 2,
    title: "One Punch Man",
    category: "Anime",
    image: "https://www.themoviedb.org/t/p/w600_and_h900_face/dT10AxJIXVvRwFAew4tt2RhzJrD.jpg",
    metric: "⭐ 8.7/10",
    ratingScore: 8.7,
    shortDescription: "Saitama can destroy any galactic enemy with a single punch, leaving him desperately bored.",
    fullDetails: {
      durationOrSeasons: "2 Seasons (24 Episodes)",
      releaseYear: 2015,
      story: "After rigorous physical training caused him to lose his hair, Saitama became the strongest hero on Earth. Facing existential boredom, he seeks a rival capable of withstanding more than one blow."
    }
  },
  {
    id: 3,
    title: "Black Clover",
    category: "Anime",
    image: "https://www.themoviedb.org/t/p/w600_and_h900_face/uZUtoVChBGhNj9OfrM2LYpwBm8E.jpg",
    metric: "⭐ 8.3/10",
    ratingScore: 8.3,
    shortDescription: "Born with zero magic in a mystical realm, Asta sets out to become the respected Wizard King.",
    fullDetails: {
      durationOrSeasons: "4 Seasons (170 Episodes)",
      releaseYear: 2017,
      story: "In a world where magical affinity determines status, orphan Asta unlocks a rare five-leaf clover grimoire holding powerful Anti-Magic, fueling a lifelong rivalry with his brother Yuno."
    }
  },
  {
    id: 4,
    title: "Hunter x Hunter",
    category: "Anime",
    image: "https://www.themoviedb.org/t/p/w600_and_h900_face/i2EEr2uBvRlAwJ8d8zTG2Y19mIa.jpg",
    metric: "⭐ 9.0/10",
    ratingScore: 9.0,
    shortDescription: "Gon Freecss embarks on a dangerous global odyssey to become an elite Hunter and locate his father.",
    fullDetails: {
      durationOrSeasons: "6 Seasons (148 Episodes)",
      releaseYear: 2011,
      story: "Determined to reunite with his legendary father, young Gon enters the grueling Hunter Examination alongside companions Killua, Kurapika, and Leorio to navigate an unforgiving world."
    }
  },
  {
    id: 5,
    title: "Naruto",
    category: "Anime",
    image: "https://www.themoviedb.org/t/p/w600_and_h900_face/xppeysfvDKVx775MFuH8Z9BlpMk.jpg",
    metric: "⭐ 8.4/10",
    ratingScore: 8.4,
    shortDescription: "An orphaned outcast ninja strives for village recognition while dreaming of becoming the ultimate Hokage.",
    fullDetails: {
      durationOrSeasons: "9 Seasons (220 Episodes)",
      releaseYear: 2002,
      story: "Shunned by the Hidden Leaf Village for harboring the Nine-Tailed Fox spirit inside his body, mischievous youth Naruto Uzumaki battles adversity, tests his resolve, and fights for acceptance."
    }
  },
  {
    id: 6,
    title: "Fullmetal Alchemist: Brotherhood",
    category: "Anime",
    image: "https://www.themoviedb.org/t/p/w600_and_h900_face/5ZFUEOULaVml7pQuXxhpR2SmVUw.jpg",
    metric: "⭐ 9.1/10",
    ratingScore: 9.1,
    shortDescription: "Two alchemist brothers seek the Philosopher's Stone to restore bodies lost to forbidden human transmutation.",
    fullDetails: {
      durationOrSeasons: "5 Seasons (64 Episodes)",
      releaseYear: 2009,
      story: "After a disastrous attempt to resurrect their deceased mother, Edward and Alphonse Elric scour Amestris for the fabled Philosopher's Stone, uncovering a vast military conspiracy."
    }
  },
  {
    id: 7,
    title: "Takopi's Original Sin",
    category: "Anime",
    image: "https://www.themoviedb.org/t/p/w600_and_h900_face/xPXDVhVKt0XM34ihoUVMHtLYTw8.jpg",
    metric: "⭐ 8.2/10",
    ratingScore: 8.2,
    shortDescription: "A cheerful extraterrestrial arrives on Earth seeking to spread happiness, encountering tragic human realities.",
    fullDetails: {
      durationOrSeasons: "1 Season (Upcoming / Adaptation)",
      releaseYear: 2024,
      story: "An innocent alien named Takopi lands on Earth to spread joy. Upon befriending Shizuka, a neglected schoolgirl enduring severe bullying, Takopi attempts to use cosmic gadgets with heartbreaking consequences."
    }
  },
  {
    id: 8,
    title: "Chainsaw Man",
    category: "Anime",
    image: "https://www.themoviedb.org/t/p/w600_and_h900_face/npdB6eFzizki0WaZ1OvKcJrWe97.jpg",
    metric: "⭐ 8.5/10",
    ratingScore: 8.5,
    shortDescription: "A debt-ridden devil hunter merges with his chainsaw pet to become an unstoppable hybrid weapon.",
    fullDetails: {
      durationOrSeasons: "1 Season (12 Episodes)",
      releaseYear: 2022,
      story: "Betrayed and murdered by yakuza, destitute youth Denji is resurrected by his pet devil Pochita. Gaining the power to sprout roaring chainsaws from his limbs, he is conscripted into the Public Safety Devil Hunters."
    }
  },

  {
    id: 9,
    title: "Breaking Bad",
    category: "Series",
    image: "https://www.themoviedb.org/t/p/w600_and_h900_face/anFx9aTOOYqgS3v7x3R84Kz67ly.jpg",
    metric: "⭐ 9.5/10",
    ratingScore: 9.5,
    shortDescription: "A cancer-stricken chemistry teacher builds a narcotics empire to secure his family's financial future.",
    fullDetails: {
      durationOrSeasons: "5 Seasons (62 Episodes)",
      releaseYear: 2008,
      story: "Facing a terminal lung cancer diagnosis, suburban teacher Walter White turns to illicit meth production alongside slacker partner Jesse Pinkman, morphing into ruthless kingpin Heisenberg."
    }
  },
  {
    id: 10,
    title: "Peaky Blinders",
    category: "Series",
    image: "https://www.themoviedb.org/t/p/w600_and_h900_face/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg",
    metric: "⭐ 8.8/10",
    ratingScore: 8.8,
    shortDescription: "A ruthless post-WWI gang empire in Birmingham is directed by mastermind tactician Thomas Shelby.",
    fullDetails: {
      durationOrSeasons: "6 Seasons (36 Episodes)",
      releaseYear: 2013,
      story: "In 1919 England, traumatic veteran Tommy Shelby expands his family mob's influence across horse racing, weapons trafficking, and parliament while battling ruthless rivals."
    }
  },
  {
    id: 11,
    title: "Daredevil",
    category: "Series",
    image: "https://www.themoviedb.org/t/p/w600_and_h900_face/QWbPaDxiB6LW2LjASknzYBvjMj.jpg",
    metric: "⭐ 8.6/10",
    ratingScore: 8.6,
    shortDescription: "A blind defense lawyer wages nightly urban combat against Hell's Kitchen's entrenched syndicates.",
    fullDetails: {
      durationOrSeasons: "3 Seasons (39 Episodes)",
      releaseYear: 2015,
      story: "Blinded by toxic chemicals during childhood, Matt Murdock utilizes radar-like senses to serve justice through the courts by day and vigilantism against Wilson Fisk by night."
    }
  },
  {
    id: 12,
    title: "Loki",
    category: "Series",
    image: "https://www.themoviedb.org/t/p/w600_and_h900_face/kEl2t3OhXc3Zb9FBh1AuYzRTgZp.jpg",
    metric: "⭐ 8.2/10",
    ratingScore: 8.2,
    shortDescription: "The God of Mischief is captured by a bureaucracy managing timeline continuity across reality.",
    fullDetails: {
      durationOrSeasons: "2 Seasons (12 Episodes)",
      releaseYear: 2021,
      story: "Following his getaway with the Tesseract, Loki is dragged into the Time Variance Authority, where he must decipher existential cosmic mysteries and face alternate temporal variants."
    }
  },
  {
    id: 13,
    title: "The Office",
    category: "Series",
    image: "https://www.themoviedb.org/t/p/w600_and_h900_face/7DJKHzAi83BmQrWLrYYOqcoKfhR.jpg",
    metric: "⭐ 9.0/10",
    ratingScore: 9.0,
    shortDescription: "A documentary crew chronicles everyday absurdities at a Scranton branch of a mid-tier paper company.",
    fullDetails: {
      durationOrSeasons: "9 Seasons (201 Episodes)",
      releaseYear: 2005,
      story: "Bumbling regional manager Michael Scott presides over Dunder Mifflin's eccentric sales staff, delivering iconic workplace humor, office pranks, and enduring romances."
    }
  },
  {
    id: 14,
    title: "Prison Break",
    category: "Series",
    image: "https://www.themoviedb.org/t/p/w600_and_h900_face/wnmNPaLvhnMeOqnWlhNkYCZxtda.jpg",
    metric: "⭐ 8.3/10",
    ratingScore: 8.3,
    shortDescription: "A structural engineer deliberately gets imprisoned to orchestrate his framed brother's escape from death row.",
    fullDetails: {
      durationOrSeasons: "5 Seasons (90 Episodes)",
      releaseYear: 2005,
      story: "Convinced his brother Lincoln was framed for assassination, structural prodigy Michael Scofield tattoos the maximum-security prison blueprints across his torso and executes a daring jailbreak."
    }
  },
  {
    id: 15,
    title: "The Mentalist",
    category: "Series",
    image: "https://www.themoviedb.org/t/p/w600_and_h900_face/acYXu4KaDj1NIkMgObnhe4C4a0T.jpg",
    metric: "⭐ 8.2/10",
    ratingScore: 8.2,
    shortDescription: "A former fake psychic consultant uses razor-sharp observation skills to hunt his family's murderer, Red John.",
    fullDetails: {
      durationOrSeasons: "7 Seasons (151 Episodes)",
      releaseYear: 2008,
      story: "Patrick Jane collaborates with the California Bureau of Investigation, solving complex homicides with psychological manipulation while pursuing the enigmatic serial killer who destroyed his family."
    }
  },
  {
    id: 16,
    title: "The Sopranos",
    category: "Series",
    image: "https://www.themoviedb.org/t/p/w600_and_h900_face/rTc7ZXdroqjkKivFPvCPX0Ru7uw.jpg",
    metric: "⭐ 9.2/10",
    ratingScore: 9.2,
    shortDescription: "A New Jersey mob chieftain navigates panic attacks, therapy sessions, and ruthless organized crime feuds.",
    fullDetails: {
      durationOrSeasons: "6 Seasons (86 Episodes)",
      releaseYear: 1999,
      story: "Tony Soprano balances suburban household tensions with the brutal realities of running an Italian-American crime syndicate, confiding his deepest anxieties to his psychiatrist Dr. Melfi."
    }
  },

  {
    id: 17,
    title: "Fight Club",
    category: "Movies",
    image: "https://www.themoviedb.org/t/p/w600_and_h900_face/jSziioSwPVrOy9Yow3XhWIBDjq1.jpg",
    metric: "⭐ 8.8/10",
    ratingScore: 8.8,
    shortDescription: "An insomniac office worker and an eccentric soap salesman launch an underground brawl society.",
    fullDetails: {
      durationOrSeasons: "2h 19min",
      releaseYear: 1999,
      story: "Alienated by corporate life, an unnamed narrator creates bare-knuckle basement bouts alongside Tyler Durden, sparking an explosive anti-consumerist uprising."
    }
  },
  {
    id: 18,
    title: "Inception",
    category: "Movies",
    image: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
    metric: "⭐ 8.8/10",
    ratingScore: 8.8,
    shortDescription: "A subconscious infiltration thief accepts an unprecedented mission to plant an idea into a mind.",
    fullDetails: {
      durationOrSeasons: "2h 28min",
      releaseYear: 2010,
      story: "Espionage specialist Dom Cobb extracts classified commercial secrets through shared dream states. To win back his family, he must execute the reverse feat: inception inside an heir's psyche."
    }
  },
  {
    id: 19,
    title: "Pulp Fiction",
    category: "Movies",
    image: "https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg",
    metric: "⭐ 8.9/10",
    ratingScore: 8.9,
    shortDescription: "Hitmen, an aging prizefighter, and crime figures collide across non-linear Los Angeles vignettes.",
    fullDetails: {
      durationOrSeasons: "2h 34min",
      releaseYear: 1994,
      story: "Vincent Vega and Jules Winnfield handle messy mafia business for Marsellus Wallace in a witty, gritty exploration of redemption, bad luck, and pop culture."
    }
  },
  {
    id: 20,
    title: "City of God",
    category: "Movies",
    image: "https://upload.wikimedia.org/wikipedia/en/1/10/CidadedeDeus.jpg",
    metric: "⭐ 8.6/10",
    ratingScore: 8.6,
    shortDescription: "Two young men in Rio's dangerous slums choose opposite roads: one an aspiring photographer, the other a kingpin.",
    fullDetails: {
      durationOrSeasons: "2h 10min",
      releaseYear: 2002,
      story: "Across decades in Brazil's Cidade de Deus favela, young Rocket relies on photojournalism to survive gang wars while ruthless Li'l Zé eliminates all rivals to monopolize turf."
    }
  },
  {
    id: 21,
    title: "Forrest Gump",
    category: "Movies",
    image: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
    metric: "⭐ 8.8/10",
    ratingScore: 8.8,
    shortDescription: "A kind-hearted Alabama man unwittingly witnesses and shapes historic moments across 20th-century America.",
    fullDetails: {
      durationOrSeasons: "2h 22min",
      releaseYear: 1994,
      story: "Possessing limited intelligence but immense warmth, Forrest Gump excels in college football, survives the Vietnam War, and builds an empire while remaining devoted to his childhood love Jenny."
    }
  },
  {
    id: 22,
    title: "The Pianist",
    category: "Movies",
    image: "https://www.themoviedb.org/t/p/w600_and_h900_face/j3YM6A7Ii2N9ilkaWTylEk15XEk.jpg",
    metric: "⭐ 8.5/10",
    ratingScore: 8.5,
    shortDescription: "A Polish Jewish radio musician struggles to survive the devastation of the Warsaw Ghetto in WWII.",
    fullDetails: {
      durationOrSeasons: "2h 30min",
      releaseYear: 2002,
      story: "Władysław Szpilman witnesses the Nazi occupation of Poland, suffering tragic family separation and seeking refuge within the ruins of Warsaw with help from an unlikely German officer."
    }
  },
  {
    id: 23,
    title: "Parasite",
    category: "Movies",
    image: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    metric: "⭐ 8.5/10",
    ratingScore: 8.5,
    shortDescription: "An impoverished family infiltrates the household of a wealthy clan through elaborate deceptive schemes.",
    fullDetails: {
      durationOrSeasons: "2h 12min",
      releaseYear: 2019,
      story: "The destitute Kim family devises fraudulent personas to secure lucrative domestic jobs inside the glamorous Park family residence, leading to unexpected and sinister discoveries."
    }
  },
  {
    id: 24,
    title: "Inglourious Basterds",
    category: "Movies",
    image: "https://www.themoviedb.org/t/p/w600_and_h900_face/aupnPtagH9JVBuMrGEanf4iqXEQ.jpg",
    metric: "⭐ 8.4/10",
    ratingScore: 8.4,
    shortDescription: "A Jewish-American commando squad and a cinema owner execute parallel plans to assassinate Nazi leaders.",
    fullDetails: {
      durationOrSeasons: "2h 33min",
      releaseYear: 2009,
      story: "Lieutenant Aldo Raine leads guerrilla soldiers targeting Nazi officers in occupied France, converging on a Parisian movie theater premiere run by Shosanna Dreyfus for a fiery showdown."
    }
  }
];