var cards = {
  /* Goblins */
  goblinranger: {text: "<p><span class='highlight'>On play:</span> deal 1 damage to an enemy minion</p>", name: "Goblin Ranger", mana: 1, attack: 1, brute: 2, health: 3, race: "Goblin"},
  warmonger: {text: "<p><span class='highlight'>On play:</span> If an enemy minion is damaged gain +2 Health</p>", name: "Warmonger", mana: 2, attack: 3, brute: 6, health: 1, race: "Goblin"},
  goblintwins: {text: "<p><span class='highlight'>On play:</span> Summon another 2/3/2 Goblin on the battlefield</p>", name: "Goblin Twins", mana: 3, attack: 2, brute: 3, health: 2, race: "Goblin"},
  cultmage: {text: "<p><span class='highlight'>On play:</span> Deal 3 damage to a character</p><p><span class='highlight'>Passive:</span> Whenever this minion kills an enemy deal 3 damage to the opponent and gain Spelldamage +2</p>", name: "Cult Mage", mana: 4, attack: 1, brute: 2, health: 6, race: "Goblin"},
  sewerassassin: {text: "<p><span class='highlight'>On play:</span> If you have atleast 2 other Goblins on the board assassinate an enemy minion</p><p><span class='highlight'>Passive:</span> Whenever this minion kills an enemy deal 3 damage to the opponent</p>", name: "Sewer Assassin", mana: 5, attack: 4, brute: 5, health: 3, race: "Goblin"},
  goblincharger: {text: "<p><span class='highlight'>Charge</span></p><p>At the end of your turn gain +1/+2/0</p>", name: "Goblin Charger", mana: 6, attack: 5, brute: 7, health: 3, race: "Goblin"},
  crookedservant: {text: "<p><span class='highlight'>Stealth</span></p><p><span class='highlight'>Passive:</span> Whenever this kills an enemy restore 4 health to your hero</p>", name: "Crooked Servant", mana: 7, attack: 7, brute: 10, health: 3, race: "Goblin"},
  dirtymage: {text: "<p>At the end of your turn deal 4 damage to the opponent</p><p><span class='highlight'>On death:</span> Explode and deal 2 damage to all minions</p><p><span class='highlight'>Passive:</span> Spelldamage +3</p>", name: "Dirty Mage", mana: 8, attack: 2, brute: 4, health: 10, race: "Goblin"},
  giant: {text: "<p><span class='highlight'>On play:</span> If you have atleast 2 other goblins on the board gain Taunt</p>", name: "Giant", mana: 9, attack: 9, brute: 12, health: 9, race: "Goblin"},
  goblinprince: {text: "<p><span class='highlight'>On play:</span> All other goblins restore their health</p><p><span class='highlight'>On play:</span> Gain +1/0/0 for each damaged enemy minion</p><p><span class='highlight'>Passive:</span> Your Goblins gain +3/+3/+3</p>", name: "Goblin Prince", mana: 10, attack: 4, brute: 10, health: 4, race: "Goblin", legend: 1},
  kingnilbog: {text: "<p><span class='highlight'>On play:</span> The next minion you play is free</p><p><span class='highlight'>On death:</span> The next spell you cast is free</p>", name: "King Nilbog", mana: 10, attack: 4, brute: 4, health: 10, race: "Goblin", legend: 1},
  /* Beasts */
  thragtusk: {text: "<p><span class='highlight'>Charge</span></p>", name: "Thragtusk", mana: 1, attack: 2, brute: 3, health: 1, race: "Beast"},
  lionheartwarrior: {text: "<p><span class='highlight'>Taunt</span></p><p><span class='highlight'>On death:</span> Restore 3 health to your hero</p>", name: "Lionheart Warrior", mana: 2, attack: 2, brute: 2, health: 3, race: "Beast"},
  dodongo: {text: "<p>At the end of your turn deal 1 damage to all other minions who aren't beasts</p>", name: "Dodongo", mana: 3, attack: 3, brute: 3, health: 4, race: "Beast"},
  lycan: {text: "<p><span class='highlight'>On play:</span> If an enemy minion is damaged gain Charge</p>", name: "Lycan", mana: 4, attack: 5, brute: 2, health: 4, race: "Beast"},
  lurkingcreature: {text: "<p><span class='highlight'>Stealth</span></p><p><span class='highlight'>Passive:</span> Whenever this minion kills an enemy regain Stealth</p>", name: "Lurking Creature", mana: 5, attack: 6, brute: 4, health: 4, race: "Beast"},
  jazallionheart: {text: "<p><span class='highlight'>Taunt</span></p><p><span class='highlight'>On play:</span> Restore 3 health to your hero</p><p><span class='highlight'>On death:</span> Restore 3 health to your hero</p>", name: "Jazal Lionheart", mana: 6, attack: 4, brute: 3, health: 7, race: "Beast"},
  baloth: {text: "<p><span class='highlight'>Passive:</span> Gain 0/+1/0 for each damaged minion</p>", name: "Baloth", mana: 7, attack: 8, brute: 6, health: 7, race: "Beast"},
  titan: {text: "<p>At the start of your turn restore this minion's health to full</p>", name: "Titan", mana: 8, attack: 8, brute: 5, health: 10, race: "Beast"},
  mountayn: {text: "<p><span class='highlight'>Taunt</span></p><p><span class='highlight'>On play:</span> Gain 0/0/+2 for each other beast on the board</p>", name: "Mountayn", mana: 9, attack: 4, brute: 4, health: 12, race: "Beast"},
  grommash: {text: "<p>At the end of your turn gain +1/+1/+1</p><p><span class='highlight'>Passive:</span> If this minion takes damage gain +2/+2/+2</p>", name: "Grommash", mana: 10, attack: 10, brute: 10, health: 10, race: "Beast", legend: 1},
  /* Demons */
  goathead: {text: "<p><span class='highlight'>On death:</span> Deal 3 damage to your hero</p>", name: "Goathead", mana: 1, attack: 2, brute: 2, health: 3, race: "Demon"},
  brutedemon: {text: "<p><span class='highlight'>Passive:</span> Whenever this minion takes damage deal 2 damage to your hero</p>", name: "Brute Demon", mana: 2, attack: 3, brute: 7, health: 3, race: "Demon"},
  fallenknight: {text: "<p><span class='highlight'>Stealth</span></p><p>At the end of your turn deal 1 damage to this minion and restore 1 health to your hero</p>", name: "Fallen Knight", mana: 3, attack: 1, brute: 1, health: 7, race: "Demon"},
  hellequin: {text: "<p><span class='highlight'>Stealth</span></p><p><span class='highlight'>On play:</span> Gain +2/+2/+2 for each card played this turn</p><p><span class='highlight'>On death:</span> Deal damage equal to this minion's attack to all non-Demon minions</p>", name: "Hellequin", mana: 4, attack: 0, brute: 0, health: 1, race: "Demon"},
  dusk: {text: "<p><span class='highlight'>Fury</span></p><p>At the end of your turn deal 1 damage to your other non-Demons minions", name: "Dusk", mana: 5, attack: 5, brute: 3, health: 5, race: "Demon"},
  fallen: {text: "<p><span class='highlight'>Stealth</span></p><p>At the end of your turn deal 3 damage to both players</p>", name: "Fallen", mana: 6, attack: 7, brute: 7, health: 6, race: "Demon"},
  inquisitor: {text: "<p><span class='highlight'>Stealth</span></p><p><span class='highlight'>Passive:</span> Spells cost health instead of mana</p><p><span class='highlight'>Passive:</span> Spelldamage +3</p>", name: "Inquisitor", mana: 7, attack: 8, brute: 2, health: 2, race: "Demon"},
  demonknight: {text: "<p><span class='highlight'>On play:</span> Deal 3 damage to all non-Demon minions</p><p><span class='highlight'>On death:</span> Deal 7 damage to your hero</p>", name: "Demon Knight", mana: 8, attack: 7, brute: 8, health: 7, race: "Demon"},
  bellakor: {text: "<p><span class='highlight'>On play:</span> Deal 5 damage to a minion, if it dies gain +3/+3/+3</p><p><span class='highlight'>On death:</span> Destroy all non-Demon minions on your board</p>", name: "Bel Lakor", mana: 9, attack: 6, brute: 6, health: 6, race: "Demon"},
  doom: {text: "<p><span class='highlight'>On death:</span> Destroy all minions, restore 1 health to your hero for each minion destroyed</p><p><span class='highlight'>Passive:</span> All your Demons gain +2/+2/+2</p>", name: "Doom", mana: 10, attack: 6, brute: 6, health: 6, race: "Demon", legend: 1},
  /* Druids */
  themire: {text: "<p><span class='highlight'>Taunt</span></p>", name: "The Mire", mana: 1, attack: 1, brute: 1, health: 4, race: "Druid"},
  youngmarshsnake: {text: "<p><span class='highlight'>Passive:</span> Destroy any minion that got damaged by this</p>", name: "Marsh Snake", mana: 2, attack: 1, brute: 1, health: 4, race: "Druid"},
  healingelf: {text: "<p><span class='highlight'>On play:</span> Restore 4 health to your hero</p><p><span class='highlight'>On death:</span> Restore 2 health to all friendly minions</p>", name: "Healing Elf", mana: 3, attack: 2, brute: 1, health: 4, race: "Druid"},
  vorstclaw: {text: "<p><span class='highlight'>Passive:</span> Whenever this minion kills an enemy restore 5 health to your hero</p>", name: "Vorstclaw", mana: 4, attack: 4, brute: 1, health: 4, race: "Druid"},
  junglemage: {text: "<p><span class='highlight'>On death:</span> Give all Druid minions 0/0/+3</p><p>At the end of your turn restore 2 health to all friendly minions</p>", name: "Jungle Mage", mana: 5, attack: 2, brute: 2, health: 6, race: "Druid"},
  kurnou: {text: "<p><span class='highlight'>Charge</span></p><p><span class='highlight'>Passive:</span> All Druid minions gain charge</p>", name: "Kurnou", mana: 6, attack: 7, brute: 0, health: 5, race: "Druid"},
  voodoodoctor: {text: "<p><span class='highlight'>On play:</span> Add a Voodoo spell to your hand</p><p><span class='highlight'>Passive:</span> Whenever the opponent gets damaged restore 2 health to your hero</p>", name: "Voodoo Doctor", mana: 7, attack: 2, brute: 1, health: 8, race: "Druid"},
  treantprotector: {text: "<p><span class='highlight'>Taunt</span></p><p><span class='highlight'>Passive:</span> Whenever this minion takes damage restore 2 health to your hero</p>", name: "Treant Protector", mana: 8, attack: 6, brute: 3, health: 10, race: "Druid"},
  basilisk: {text: "<p><span class='highlight'>Passive:</span> Whenever a minion gets healed deal 2 damage to all enemy minions</p><p><span class='highlight'>On death:</span> Restore all minions to full health</p>", name: "Basilisk", mana: 9, attack: 8, brute: 9, health: 8, race: "Druid"},
  colosuss: {text: "<p><span class='highlight'>On play:</span> Restore health of all friendly minions</p><p><span class='highlight'>Passive:</span> Your hero is immune to damage</p>", name: "Colosuss", mana: 10, attack: 12, brute: 0, health: 12, race: "Druid", legend: 1},
  /*Spells */
  invasion: {text: "<p><span class='highlight'>Effect:</span> Fill your entire board with 2/3/2 Goblins</p>", name: "Invasion", mana: 7, race: "Spell"},
  silentdeath: {text: "<p><span class='highlight'>Target:</span> Enemy minion</p><p><span class='highlight'>Effect:</span> Destroy an enemy minion</p>", name: "Silent Death", mana: 5, race: "Spell"},
  voodoo: {text: "<p><span class='highlight'>Target:</span> Friendly minion</p><p><span class='highlight'>Effect:</span> Whenever this minion loses health deal that much back to the opponent</p>", name: "Voodoo", mana: 3, race: "Spell"},
  playingwithfire: {text: "<p><span class='highlight'>Target:</span> Friendly minion</p><p><span class='highlight'>Effect:</span> If at the start of your next turn the friendly minion still lives deal 5 damage to all enemy minions. If this is not the case deal 5 damage to all of your own minions</p>", name: "Playing With Fire", mana: 6, race: "Spell"},
  manacrystal: {text: "<p><span class='highlight'>Effect:</span> Gain 1 extra Mana crystal this turn</p>", name: "Mana Crystal", mana: 0, race: "Spell"}
};
var players = [
  {
    deck: [],
    leftInDeck: {},
    hand: []
  },
  {
    deck: [],
    leftInDeck: {},
    hand: []
  }
];
var game = 0;
var turn = 0;
var random = [];
var cardID = 0;
var listener = {};
var hitmarker = 0;
var battlefield = [];
var activeID = -1;
var targeted = -1;
var targeting = "";
var hoverID = -1;
var action = [];

function interval(int){


  //window.setTimeout(function(){ interval(int) }, int);
}

function updateMouse(e){
  if(game){
    if(document.body.classList[1] == "hitmark"){
      let mark = document.getElementsByClassName("hitmarker")[0];

      mark.style.top = e.clientY+"px";
      mark.style.left = e.clientX+"px";
    }
  }
}

document.addEventListener("mousemove", updateMouse);

function first(){
  interval(10);

  /*document.body.innerHTML = `
  <div class="buttons">
    <div class="buttons--switch">Switch Player</div>
    <div class="buttons--clear">Clear Deck</div>
    <div class="buttons--generate">Generate Deck</div>
  </div>
  `;*/

  for(u = 0; u <= 1; u++){
    for(key in cards){
      random[random.length] = key
    }

    for(i = 0; i < 30; i++){
      let rand = Math.round(Math.random()*(random.length-1));
      players[u]["deck"][i] = random[rand];

      if(!players[u]["leftInDeck"][players[u]["deck"][i]]){
        players[u]["leftInDeck"][players[u]["deck"][i]] = 1;
      }
      else{
        players[u]["leftInDeck"][players[u]["deck"][i]] = players[u]["leftInDeck"][players[u]["deck"][i]] + 1;
        random.splice(rand, 1);
      }
    }
  }

  startGame();
}

function startGame(){
  game = 1;

  document.body.innerHTML = `
  <div class="battlefield">
    <div class="field field--up"></div>
    <div class="player-health player-health--player2" onmouseover="hover('player-health--player2')" onmouseleave="mouseLeft('player-health--player2')" onclick="selectPlayer('player-health--player2')">50</div>
    <div class="player-mana player-mana--player2"></div>
    <div class="turn-button" onclick="endTurn()">End Turn</div>
    <div class="player-health player-health--player1" onmouseover="hover('player-health--player1')" onmouseleave="mouseLeft('player-health--player1')" onclick="selectPlayer('player-health--player1')">50</div>
    <div class="player-mana player-mana--player1"></div>
    <div class="field field--down"></div>
  </div>
  <div class="hand"></div>
  `;

  endTurn();
  drawCard("goblinranger");
}

function drawCard(amount){
  let id = (1+turn)%2;

  if(typeof amount === "number"){
    for(i = 0; i < amount; i++){
      let rand = Math.round(Math.random()*(players[id]["deck"].length-1));

      players[id]["leftInDeck"][players[id]["deck"][rand]] = players[id]["leftInDeck"][players[id]["deck"][rand]] - 1;
      players[id]["hand"][players[id]["hand"].length] = players[id]["deck"][rand];
      createCard(players[id]["deck"][rand]);

      if(players[id]["leftInDeck"][players[id]["deck"][rand]] <= 1){
        players[id]["deck"].splice(rand, 1);
      }
    }
  }
  else if(typeof amount === "string"){
    for(var key in cards){
      if(key == amount){
        players[id]["hand"][players[id]["hand"].length] = key;
        createCard(key);
      }
    }
  }
}

function createCard(cardName){
  placement = document.getElementsByClassName("hand")[0];
  //placement = document.getElementsByClassName("deck")[0];
  placement.innerHTML = placement.innerHTML + `
  <div class="card `+cardName+(cards[cardName]["legend"] == 1 ? " legendary" : "")+(cards[cardName]["race"] == "Spell" ? " spell" : "")+" "+cardID+`" onmouseover="hover(`+cardID+`)" onmouseleave="mouseLeft(`+cardID+`)" onclick="clicked(`+cardID+`)">
    <div class="card--header">
      <div class="card--name">${cards[cardName]["name"]}</div>
      <div class="card--mana">${cards[cardName]["mana"]}</div>
    </div>
    <div class="card--image">
      <img src="img/cards/${cards[cardName]["name"]}.jpg">
    </div>
    `+(cards[cardName]["race"] == "Spell" ? `
    <div class="card--stats">
    </div>
    ` : `
    <div class="card--stats">
      <div class="attack">${cards[cardName]["attack"]}</div>
      <div class="brute">${cards[cardName]["brute"]}</div>
      <div class="health">${cards[cardName]["health"]}</div>
    </div>`
    )+`
    <div class="card--desc">
      ${cards[cardName]["text"]}
    </div>
    <div class="card--race">
      <p>${cards[cardName]["race"]}</p>
    </div>
  </div>
  `;

  cardID++;

  let id = (1+turn)%2;
  let curCard = document.getElementsByClassName(cardID-1)[0];
  curCard.style.width = "206.25px";
  curCard.style.height = "375px";
  curCard.style.margin = "10px";
}

function hover(id){
  var playID = (turn+1)%2;

  if(typeof id === "string"){
    if((targeting == "enemies" && (Number(id[id.length-1]) - 1) != playID) || targeting == "any" || targeting == ""){
      let curCard = document.getElementsByClassName(id)[0];
      curCard.style.transform = "scale(1.1) translate(-50%, -50%)";
      curCard.style.zIndex = "1";
      hoverID = id;
    }
  }
  else if(id != activeID){
    var field = (playID == 0 ? document.getElementsByClassName("field--up")[0] : document.getElementsByClassName("field--down")[0])
    var children = field.childElementCount;
    var valid = 0;

    for(i = 0; i < children; i++){
      if(field.getElementsByClassName(id)[0]){
        valid = 1;
      }
    }

    if(targeting == "minion" || targeting == "" || targeting == "any" || (targeting == "enemy" && valid)){
      let curCard = document.getElementsByClassName(id)[0];
      curCard.style.transform = "scale(1.3)";
      curCard.style.zIndex = "1";
      hoverID = id;
    }
  }
}

function mouseLeft(id){
  let curCard = document.getElementsByClassName(id)[0];
  curCard.style.transform = "scale(1)";
  curCard.style.zIndex = "0";

  if(typeof id === "string"){
    curCard.style.transform = "scale(1) translate(-50%, -50%)";
  }
}

function clicked(id){
  let curCard = document.getElementsByClassName(id)[0];
  let cardName = curCard.classList[1];
  let field = ((1+turn)%2 == 0 ? document.getElementsByClassName("field--down")[0] : document.getElementsByClassName("field--up")[0]);
  let playID = (turn+1)%2;

  battlefield.push(id);

  for(i = 0; i < players[playID]["hand"].length; i++){
    if(players[playID]["hand"][i] == cardName){
      players[playID]["hand"].splice(i, 1);
      window.scrollTo(0, 0);
      window,setTimeout(function(){
        activateCard(cardName, id);
      },0);
    }
  }

  field.innerHTML = field.innerHTML + `
  <div class="card `+cardName+(cards[cardName]["legend"] == 1 ? " legendary" : "")+(cards[cardName]["race"] == "Spell" ? " spell" : "")+" "+id+`" onmouseover="hover(`+id+`)" onmouseleave="mouseLeft(`+id+`)" onclick="selectCard(`+id+`)">
  `+curCard.innerHTML+`
  </div>`;
  curCard.remove();

  curCard = document.getElementsByClassName(id)[0];
  curCard.style.width = "165px";
  curCard.style.height = "300px";
  curCard.style.margin = "0 5px";
}

function selectCard(id){
  let health = document.getElementsByClassName(id)[0].getElementsByClassName("health")[0];

  if(id == hoverID && id != activeID){
    if(action[0] == "dealdamage"){
      health.innerHTML = (Number(health.innerHTML) - action[1]);
      document.body.classList.remove("hitmark");
      document.getElementsByClassName("hitmarker")[0].remove();
      activeID = -1;
      action = [];
      checkStats(id);
    }
  }
}

function selectPlayer(id){
  let health = document.getElementsByClassName(id)[0];

  if(id == hoverID){
    if(action[0] == "dealdamage"){
      health.innerHTML = (Number(health.innerHTML) - action[1]);
      document.body.classList.remove("hitmark");
      document.getElementsByClassName("hitmarker")[0].remove();
      activeID = -1;
      action = [];
    }
  }
}

function checkStats(id){
  let curCard = document.getElementsByClassName(id)[0];
  let cardName = document.getElementsByClassName(id)[0].classList[1];

  if(Number(curCard.getElementsByClassName("health")[0].innerHTML) < cards[cardName]["health"]){
    curCard.getElementsByClassName("health")[0].classList.add("damaged");
  }
}

function endTurn(){
  if(activeID < 0){
    turn++;
    let id = (turn+1)%2;
    document.getElementsByClassName("hand")[0].innerHTML = "";

    if(turn <= 20){
      document.getElementsByClassName("player-mana--player"+(id+1))[0].innerHTML = document.getElementsByClassName("player-mana--player"+(id+1))[0].innerHTML + `
      <div class="player-mana--crystal"></div>
      `;
    }

    if(id == 0){
      document.getElementsByClassName("field--down")[0].classList.add("field--active");
      document.getElementsByClassName("field--up")[0].classList.remove("field--active");
    }
    else{
      document.getElementsByClassName("field--up")[0].classList.add("field--active");
      document.getElementsByClassName("field--down")[0].classList.remove("field--active");
    }

    if(turn == 2){
      drawCard(3)
    }
    else{
      for(i = 0; i < players[id]["hand"].length; i++){
        createCard(players[id]["hand"][i]);
      }
    }

    drawCard(1);
  }
}

/* Where the magic happens */

function activateCard(cardName, id){
  var ignore = 0;
  var desc = "";
  var damage = 0;

  for(i = 0; i < cards[cardName]["text"].length; i++){
    if(cards[cardName]["text"][i] == "<"){
      ignore = 1;

      if(desc.length > 0 && cards[cardName]["text"][i+1] == "p" && cards[cardName]["text"][i+2] == ">"){
        desc += " * ";
      }
    }
    else if(!ignore){
      desc += cards[cardName]["text"][i];
    }
    else if(ignore && cards[cardName]["text"][i] == ">"){
      ignore = 0;
    }
  }

  desc = desc.toLowerCase().split(" ");

  console.log(desc);
  var runNow = 0;
  var onDeath = 0;

  for(i = 0; i < desc.length; i++){
    var end = desc.length;

    if(desc[i] == "on" && desc[i+1] == "play:"){
      runNow = 1;
    }
    else if(desc[i] == "on" && desc[i+1] == "death:"){
      onDeath = 1;
    }

    // Deal damage
    for(u = (i+2); u < desc.length; u++){
      if(desc[u] == "*"){
        end = u;
      }
    }

    for(u = (i+2); u < end; u++){
      if(desc[u] == "deal" && desc[u+1] == "damage"){

      }
      else if(desc[u] == "deal" && Number(desc[u+1] >= 1) && desc[u+2] == "damage"){
        damage = Number(desc[u+1]);
        for(p = (u+3); p < end; p++){
          if(desc[p] == "minion"){
            if(desc[p-1] == "enemy"){
              targeting = "enemy";
            }
            else{
              targeting = "minion";
            }
          }
          else if(desc[p] == "minions" && desc[p-1] == "all"){
            targeting = "all";
          }
          else if(desc[p] == "enemy" && desc[p-1] == "an"){
            targeting = "enemies";
          }
          else if(desc[p] == "opponent" || (desc[p-1] == "enemy" && desc[p] == "player")){
            targeting = "opponent";
          }
        }
      }
    }
  }

  console.log("deal "+damage+" damage to (an/a) "+targeting);

  if(runNow){
    dealDamage(damage, id);
  }
  else if(onDeath){
    listener["ondeath"]["action"] = "dealdamage";
    listener["ondeath"]["damage"] = damage;
    listener["ondeath"]["target"] = id;
  }
}

function dealDamage(damage, id){
  var playID = (turn+1)%2;
  var enemySide = (playID == 0 ? document.getElementsByClassName("field--up")[0] : document.getElementsByClassName("field--down")[0]);

  if((targeting == "enemy" && enemySide.childElementCount > 0) || (battlefield.length > 1 && (targeting == "minion" || targeting == "all")) || targeting == "any"){
    activeID = id;
    action[0] = "dealdamage";
    action[1] = damage;

    document.body.classList.add("hitmark");
    document.body.innerHTML = document.body.innerHTML + `<div class="hitmarker"></div>`;
  }

  console.log("t: "+targeting);
}

document.body.addEventListener("load", first());
