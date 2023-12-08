const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };

  const gameEvents = new Map([
    [17, '⚽️ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽️ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽️ GOAL'],
    [80, '⚽️ GOAL'],
    [92, '🔶 Yellow card'],
  ]);

  const [players1, players2] = game.players;
  console.log(players1, players2);

  const [gk, ...fieldPlayers] = players1;
  
  const allPlayers = [...players1,...players2];
  console.log(allPlayers); 

  const players1final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
  console.log(players1final);

  const team1 = 1.55;
  const draw = 2.44;
  const team2 = 5.8;

  function printGoals(...players) {
    console.log(players);
    console.log(`${players.length} goals were scored`);
  }

  for (const [i,player] of game.scored.entries()) {
      console.log(`Goal ${i + 1}: ${player}`);
  }

  let sum = 0;
  const odds = Object.values(game.odds);
  for (const odd of odds) {
      sum += odd;
  }

  console.log((sum / odds.length));

  const entries = Object.entries(game.odds);
  for (const [key,value] of entries) {
    const stringed = key === 'x' ? 'draw' : `victory ${game[key]}`
    console.log(`Odd of ${stringed} are: ${value}`);
  }

  const scorers = {};
  for (const scorer of game.scored) {
    scorers[scorer] ? scorers[scorer]++ : (scorers[scorer] = 1);
  }

  console.log(scorers);



  const events = [...new Set(gameEvents.values())]
  console.log(gameEvents.values());
  console.log(events);

  gameEvents.delete(64);
  console.log(gameEvents);

  console.log ([...gameEvents.keys()].length);

  console.log(`An event happened, on average, every ${90 / [...gameEvents.keys()].length} minutes`);


  for (const [min, event] of gameEvents.entries()) {
    const half = min <= 45 ? "FIRST" : "SECOND";
    console.log(`[${half} HALF] ${min}: ${event}`);
  }