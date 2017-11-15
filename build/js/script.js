"use strict";

var cards = {
  /* Goblins */
  goblinranger: {text: "<p><span class='highlight'>On play:</span> deal 1 damage to an enemy minion</p>", name: "Goblin Ranger", mana: 1, attack: 1, brute: 2, health: 3, race: "Goblin"},
  warmonger: {text: "<p><span class='highlight'>On play:</span> If an enemy minion is damaged gain 0/0/+2</p>", name: "Warmonger", mana: 2, attack: 3, brute: 6, health: 1, race: "Goblin"},
  goblintwins: {text: "<p><span class='highlight'>On play:</span> Summon another 2/3/2 Goblin on the battlefield</p>", name: "Goblin Twins", mana: 3, attack: 2, brute: 3, health: 2, race: "Goblin"},
  cultmage: {text: "<p><span class='highlight'>On play:</span> Deal 3 damage to a character</p><p><span class='highlight'>Passive:</span> Whenever this minion kills an enemy deal 3 damage to the opponent and gain Spelldamage +2</p>", name: "Cult Mage", mana: 4, attack: 1, brute: 2, health: 6, race: "Goblin"},
  sewerassassin: {text: "<p><span class='highlight'>On play:</span> If you have atleast 2 other Goblins on the board assassinate an enemy minion</p><p><span class='highlight'>Passive:</span> Whenever this minion kills an enemy deal 3 damage to the opponent</p>", name: "Sewer Assassin", mana: 5, attack: 4, brute: 5, health: 3, race: "Goblin"},
  goblincharger: {text: "<p><span class='highlight'>Rush</span></p><p>At the end of your turn gain +1/+2/0</p>", name: "Goblin Charger", mana: 6, attack: 5, brute: 7, health: 3, race: "Goblin"},
  crookedservant: {text: "<p><span class='highlight'>Stealth</span></p><p><span class='highlight'>Passive:</span> Whenever this kills an enemy restore 4 health to your hero</p>", name: "Crooked Servant", mana: 7, attack: 7, brute: 10, health: 3, race: "Goblin"},
  dirtymage: {text: "<p>At the end of your turn deal 4 damage to the opponent</p><p><span class='highlight'>On death:</span> Explode and deal 2 damage to all minions</p><p><span class='highlight'>Passive:</span> Spelldamage +3</p>", name: "Dirty Mage", mana: 8, attack: 2, brute: 4, health: 10, race: "Goblin"},
  giant: {text: "<p><span class='highlight'>On play:</span> If you have atleast 2 other goblins on the board gain Guard</p>", name: "Giant", mana: 9, attack: 9, brute: 12, health: 9, race: "Goblin"},
  goblinprince: {text: "<p><span class='highlight'>On play:</span> All other goblins restore their health</p><p><span class='highlight'>On play:</span> Gain +1/0/0 for each damaged enemy minion</p><p><span class='highlight'>Passive:</span> Your Goblins gain +3/+3/+3</p>", name: "Goblin Prince", mana: 10, attack: 4, brute: 10, health: 4, race: "Goblin", legend: 1},
  kingnilbog: {text: "<p><span class='highlight'>On play:</span> The next minion you play is free</p><p><span class='highlight'>On death:</span> The next spell you cast is free</p>", name: "King Nilbog", mana: 10, attack: 4, brute: 4, health: 10, race: "Goblin", legend: 1},
  /* Beasts */
  thragtusk: {text: "<p><span class='highlight'>Rush</span></p><p><span class='highlight'>On Death:</span> If it's your turn deal 1 damage to an enemy minion</p>", name: "Thragtusk", mana: 1, attack: 2, brute: 3, health: 1, race: "Beast"},
  lionheartwarrior: {text: "<p><span class='highlight'>Guard</span></p><p><span class='highlight'>On death:</span> Restore 3 health to your hero</p>", name: "Lionheart Warrior", mana: 2, attack: 2, brute: 2, health: 3, race: "Beast"},
  dodongo: {text: "<p>At the end of your turn deal 1 damage to all other minions who aren't beasts</p>", name: "Dodongo", mana: 3, attack: 3, brute: 3, health: 4, race: "Beast"},
  lycan: {text: "<p><span class='highlight'>On play:</span> If an enemy minion is damaged gain Rush</p>", name: "Lycan", mana: 4, attack: 5, brute: 2, health: 4, race: "Beast"},
  lurkingcreature: {text: "<p><span class='highlight'>Stealth</span></p><p><span class='highlight'>Passive:</span> Whenever this minion kills an enemy regain Stealth</p>", name: "Lurking Creature", mana: 5, attack: 6, brute: 4, health: 4, race: "Beast"},
  jazallionheart: {text: "<p><span class='highlight'>Guard</span></p><p><span class='highlight'>On play:</span> Restore 3 health to your hero</p><p><span class='highlight'>On death:</span> Restore 3 health to your hero</p>", name: "Jazal Lionheart", mana: 6, attack: 4, brute: 3, health: 7, race: "Beast"},
  baloth: {text: "<p><span class='highlight'>Passive:</span> Gain 0/+1/0 for each damaged minion</p>", name: "Baloth", mana: 7, attack: 8, brute: 6, health: 7, race: "Beast"},
  titan: {text: "<p>At the start of your turn restore this minion's health to full</p>", name: "Titan", mana: 8, attack: 8, brute: 5, health: 10, race: "Beast"},
  mountayn: {text: "<p><span class='highlight'>Guard</span></p><p><span class='highlight'>On play:</span> Gain 0/0/+2 for each other beast on the board</p>", name: "Mountayn", mana: 9, attack: 4, brute: 4, health: 12, race: "Beast"},
  grommash: {text: "<p>At the end of your turn gain +1/+1/+1</p><p><span class='highlight'>Passive:</span> If this minion takes damage gain +2/+2/+2</p>", name: "Grommash", mana: 10, attack: 10, brute: 10, health: 10, race: "Beast", legend: 1},
  /* Demons */
  goathead: {text: "<p><span class='highlight'>On death:</span> Deal 3 damage to your hero</p>", name: "Goathead", mana: 1, attack: 2, brute: 2, health: 3, race: "Demon"},
  brutedemon: {text: "<p><span class='highlight'>Passive:</span> Whenever this minion takes damage deal 2 damage to your hero</p>", name: "Brute Demon", mana: 2, attack: 3, brute: 7, health: 3, race: "Demon"},
  fallenknight: {text: "<p><span class='highlight'>Stealth</span></p><p>At the end of your turn deal 1 damage to this minion and restore 1 health to your hero</p>", name: "Fallen Knight", mana: 3, attack: 1, brute: 1, health: 7, race: "Demon"},
  hellequin: {text: "<p><span class='highlight'>Stealth</span></p><p><span class='highlight'>On play:</span> Gain +2/+2/+2 for each card played this turn</p><p><span class='highlight'>On death:</span> Deal damage equal to this minion's attack to all non-Demon minions</p>", name: "Hellequin", mana: 4, attack: 0, brute: 0, health: 1, race: "Demon"},
  dusk: {text: "<p><span class='highlight'>Swift</span></p><p>At the end of your turn deal 1 damage to all your other minions who aren't demons", name: "Dusk", mana: 5, attack: 5, brute: 3, health: 5, race: "Demon"},
  fallen: {text: "<p><span class='highlight'>Stealth</span></p><p>At the end of your turn deal 3 damage to both players</p>", name: "Fallen", mana: 6, attack: 7, brute: 7, health: 6, race: "Demon"},
  inquisitor: {text: "<p><span class='highlight'>Stealth</span></p><p><span class='highlight'>Passive:</span> Spells cost health instead of mana</p><p><span class='highlight'>Passive:</span> Spelldamage +3</p>", name: "Inquisitor", mana: 7, attack: 8, brute: 2, health: 2, race: "Demon"},
  demonknight: {text: "<p><span class='highlight'>On play:</span> Deal 3 damage to all other minions who aren't demons</p><p><span class='highlight'>On death:</span> Deal 7 damage to your hero</p>", name: "Demon Knight", mana: 8, attack: 7, brute: 8, health: 7, race: "Demon"},
  bellakor: {text: "<p><span class='highlight'>On play:</span> Deal 5 damage to a minion, if it dies gain +3/+3/+3</p><p><span class='highlight'>On death:</span> Destroy all your other minions who aren't demons</p>", name: "Bel Lakor", mana: 9, attack: 6, brute: 6, health: 6, race: "Demon"},
  doom: {text: "<p><span class='highlight'>On death:</span> Destroy all minions, restore 1 health to your hero for each minion destroyed</p><p><span class='highlight'>Passive:</span> All your Demons gain +2/+2/+2</p>", name: "Doom", mana: 10, attack: 6, brute: 6, health: 6, race: "Demon", legend: 1},
  /* Druids */
  themire: {text: "<p><span class='highlight'>Guard</span></p>", name: "The Mire", mana: 1, attack: 1, brute: 1, health: 4, race: "Druid"},
  youngmarshsnake: {text: "<p><span class='highlight'>Passive:</span> Destroy any minion that got damaged by this</p>", name: "Marsh Snake", mana: 2, attack: 1, brute: 1, health: 4, race: "Druid"},
  healingelf: {text: "<p><span class='highlight'>On play:</span> Restore 4 health to your hero</p><p><span class='highlight'>On death:</span> Restore 2 health to all friendly minions</p>", name: "Healing Elf", mana: 3, attack: 2, brute: 1, health: 4, race: "Druid"},
  vorstclaw: {text: "<p><span class='highlight'>Passive:</span> Whenever this minion kills an enemy restore 5 health to your hero</p>", name: "Vorstclaw", mana: 4, attack: 4, brute: 1, health: 4, race: "Druid"},
  junglemage: {text: "<p><span class='highlight'>On death:</span> Give all Druid minions 0/0/+3</p><p>At the end of your turn restore 2 health to all friendly minions</p>", name: "Jungle Mage", mana: 5, attack: 2, brute: 2, health: 6, race: "Druid"},
  kurnou: {text: "<p><span class='highlight'>Rush</span></p><p><span class='highlight'>Passive:</span> All Druid minions gain rush</p>", name: "Kurnou", mana: 6, attack: 7, brute: 0, health: 5, race: "Druid"},
  voodoodoctor: {text: "<p><span class='highlight'>On play:</span> Add a Voodoo spell to your hand</p><p><span class='highlight'>Passive:</span> Whenever the opponent gets damaged restore 2 health to your hero</p>", name: "Voodoo Doctor", mana: 7, attack: 2, brute: 1, health: 8, race: "Druid"},
  treantprotector: {text: "<p><span class='highlight'>Guard</span></p><p><span class='highlight'>Passive:</span> Whenever this minion takes damage restore 2 health to your hero</p>", name: "Treant Protector", mana: 8, attack: 6, brute: 3, health: 10, race: "Druid"},
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
var battlefield = {};
var songDuration = [249, 234, 190, 195, 191, 135, 37, 243, 124];
var mute = 0;
var statusList = ["rush", "guard", "poison", "shield", "stealth", "swift"];
var stealthAnim = [];
var time = 0;
var targetAble = "any";
var shooter = {};
var races = [];
var wait = 0;

/* ============ SETUP ============ */
function interval(dly){
  for(let i = 0; i < stealthAnim.length; i++){
    if(document.getElementsByClassName(stealthAnim[i])[0]){
      let curCard = document.getElementsByClassName(stealthAnim[i])[0];

      curCard.getElementsByClassName("stealth")[0].style.opacity = 0.55+Math.sin(time/10)/6.5;
    }
  }

  time++;
  window.setTimeout(function(){ interval(dly); }, dly);
}

function first(){
  interval(100);

  for(let u = 0; u <= 1; u++){
    for(let key in cards){
      random[random.length] = key
    }

    for(let i = 0; i < 30; i++){
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

  for(let key in cards){
    if(races.indexOf(cards[key]["race"].toLowerCase()) < 0){
      races.push(cards[key]["race"].toLowerCase());
    }
  }

  startGame();
}

document.body.addEventListener("load", first());

/* ============ MOUSE POSITION / CUSTOM CURSORS ============ */
function updateMouse(e){
  if(document.getElementsByClassName("crosshair")[0]){
    let cross = document.getElementsByClassName("crosshair")[0];

    cross.style.top = e.pageY+"px";
    cross.style.left = e.pageX+"px";
    document.body.style.cursor = "none";
  }
}

document.addEventListener("mousemove", updateMouse);

/* ============ START GAME - CREATE FIELD ============ */
function startGame(){
  game = 1;

  document.body.innerHTML = `
  <audio>
    <source src="" type="audio/ogg">
  </audio>
  <audio>
    <source src="" type="audio/ogg">
  </audio>
  <div class="battlefield">
    <div class="field field--up"></div>
    <div class="player-health player-health--player2" onmouseover="hover('player-health--player2')" onmouseleave="mouseLeft('player-health--player2')" onclick="selectPlayer('2')">50</div>
    <div class="player-mana player-mana--player2"></div>
    <div class="turn-button" onclick="endTurn()">End Turn</div>
    <div class="player-health player-health--player1" onmouseover="hover('player-health--player1')" onmouseleave="mouseLeft('player-health--player1')" onclick="selectPlayer('1')">50</div>
    <div class="player-mana player-mana--player1"></div>
    <div class="field field--down"></div>
  </div>
  <div class="hand"></div>
  <div class="mute" onclick="muteMusic()">MUTE MUSIC</div>
  `;

  //playMusic();
  endTurn();
  drawCard("goblintwins");
  drawCard("lionheartwarrior");
  drawCard("goblincharger");
  drawCard("demonknight");
  drawCard("bellakor");
}

/* ============ PLAY A RANDOM SONG FROM LIBRARY ============ */
function playMusic(){
  if(!mute){
    let randInt = Math.round(Math.random()*8);
    window.setTimeout(playMusic, songDuration[randInt]*1000);
    document.getElementsByTagName("source")[1].src = "sounds/music/"+randInt+".ogg";
    document.getElementsByTagName("audio")[1].load();
    document.getElementsByTagName("audio")[1].play();
  }
}

/* ============ MUTE MUSIC ============ */
function muteMusic(){
  mute = 1 - mute;

  if(mute){
    document.getElementsByClassName("mute")[0].innerHTML = `PLAY MUSIC`;
    document.getElementsByTagName("audio")[1].pause();
  }
  else{
    document.getElementsByClassName("mute")[0].innerHTML = `MUTE MUSIC`;
    document.getElementsByTagName("audio")[1].play();
  }
}

/* ============ DRAW CARD TO HAND ============ */
function drawCard(amount){
  let id = (1+turn)%2;

  if(typeof amount === "number"){
    for(let i = 0; i < amount; i++){
      let rand = Math.round(Math.random()*(players[id]["deck"].length-1));

      players[id]["leftInDeck"][players[id]["deck"][rand]] = players[id]["leftInDeck"][players[id]["deck"][rand]] - 1;
      players[id]["hand"][players[id]["hand"].length] = players[id]["deck"][rand];
      createCard(players[id]["deck"][rand], "hand");

      if(players[id]["leftInDeck"][players[id]["deck"][rand]] <= 1){
        players[id]["deck"].splice(rand, 1);
      }
    }
  }
  else if(typeof amount === "string"){
    for(let key in cards){
      if(key == amount){
        players[id]["hand"][players[id]["hand"].length] = key;
        createCard(key, "hand");
      }
    }
  }
}

/* ============ CREATE CARD INTO HAND ============ */
function createCard(cardName, place, summoned, summName, summCost, summArt, summStats, summDesc, summRace){
  let placement = document.getElementsByClassName(place)[0];
  (summStats ? console.log(summStats[1]) : "");
  placement.innerHTML = placement.innerHTML + `
  <div class="card `+cardName+(cards[cardName] ? (cards[cardName]["legend"] == 1 ? " legendary" : "") : "")+(cards[cardName] ? (cards[cardName]["race"] == "Spell" ? " spell" : "") : "")+" "+cardID+`" onmouseover="hover(`+cardID+`)" onmouseleave="mouseLeft(`+cardID+`)" `+(place == "hand" ? `onclick="clicked(`+cardID+`)"` : `onclick="selectCard(`+cardID+`)"`)+`>
    <div class="card--header">
      <div class="card--name">${(summName ? summName : cards[cardName]["name"])}</div>
      <div class="card--mana">${(summCost ? summCost : cards[cardName]["mana"])}</div>
    </div>
    <div class="card--image">
      <img src="img/cards/${(summArt ? summArt : cards[cardName]["name"])}.jpg">
    </div>
    `+(cards[cardName] ? (cards[cardName]["race"] == "Spell" ? `
    <div class="card--stats">
    </div>
    ` : `
    <div class="card--stats">
      <div class="attack">${(summStats ? summStats[0] : cards[cardName]["attack"])}</div>
      <div class="brute">${(summStats ? summStats[1] : cards[cardName]["brute"])}</div>
      <div class="health">${(summStats ? summStats[2] : cards[cardName]["health"])}</div>
    </div>`
    ) : "")+`
    <div class="card--desc">
      ${(summoned ? "" : cards[cardName]["text"])}
    </div>
    <div class="card--race">
      <p>${(summRace ? summRace : cards[cardName]["race"])}</p>
    </div>
  </div>
  `;

  cardID++;

  let id = (1+turn)%2;
  let curCard = document.getElementsByClassName(cardID-1)[0];
  curCard.style.width = "206.25px";
  curCard.style.height = "375px";
  curCard.style.margin = "10px";

  if(place == "field--down" || place == "field--up"){
    curCard.style.width = "165px";
    curCard.style.height = "300px";
    curCard.style.margin = "0 5px";

    battlefield[cardID-1] = {"name": cardName, "maxattack": (cards[cardName] ? cards[cardName]["attack"] : summStats[0]), "maxbrute": (cards[cardName] ? cards[cardName]["brute"] : summStats[1]), "maxhealth": (cards[cardName] ? cards[cardName]["health"] : summStats[2]), "field": (1+turn)%2, "scale": 1};
  }
}

/* ============ HOVER OVER CARD ============ */
function hover(id){
  if(!battlefield[id] || !battlefield[id]["selected"])
  {
    if(canBeTargeted(id))
    {
      let playID = (turn+1)%2;
      let curCard = document.getElementsByClassName(id)[0];

      scale(id, 1.15);
      curCard.style.zIndex = "1";

      if(typeof id === "string"){
        curCard.style.transform = "scale(0.9) translate(-50%, -50%)";
      }
    }
  }
}

/* ============ MOUSE LEAVE HOVER STATE ============ */
function mouseLeft(id){
  if(!battlefield[id] || !battlefield[id]["selected"]){
    let curCard = document.getElementsByClassName(id)[0];

    scale(id, 1);
    curCard.style.zIndex = "0";

    if(typeof id === "string"){
      curCard.style.transform = "scale(1) translate(-50%, -50%)";
    }
  }
}

/* ============ ADD CARD FROM HAND TO BATTLEFIELD WHEN CLICKED ============ */
function clicked(id){
  let curCard = document.getElementsByClassName(id)[0];
  let cardName = curCard.classList[1];
  let field = ((1+turn)%2 == 0 ? document.getElementsByClassName("field--down")[0] : document.getElementsByClassName("field--up")[0]);
  let playID = (turn+1)%2;

  battlefield[id] = {"name": cardName, "maxattack": cards[cardName]["attack"], "maxbrute": cards[cardName]["brute"], "maxhealth": cards[cardName]["health"], "field": (1+turn)%2, "scale": 1};

  for(let i = 0; i < players[playID]["hand"].length; i++){
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

/* ============ END TURN ============ */
function endTurn(){
  if(targetAble == "any" && !wait){
    let id = turn%2;

    turn++;
    document.getElementsByClassName("hand")[0].innerHTML = "";

    for(let key in battlefield){
      if(battlefield[key]["selected"] == 1){
        let oldCard =  document.getElementsByClassName(key)[0];

        oldCard.style.opacity = 1;
        scale(key, 1);
        battlefield[key]["selected"] = 0;
      }
    }

    for(let key in battlefield){
      for(let i = 0; i < battlefield[key]["sections"]; i++){
        switch(battlefield[key][i]["trigger"]){
          case "turn_end":
            runAction(key, i);
          break;
          case "player_turn_end":
            if(battlefield[key]["field"] == (turn%2)){
              runAction(key, i);
            }
          break;
          case "enemy_turn_end":
            if(battlefield[key]["field"] == ((turn+1)%2)){
              runAction(key, i);
            }
          break
        }
      }
    }

    if(turn <= 20){
      document.getElementsByClassName("player-mana--player"+(id+1))[0].innerHTML = document.getElementsByClassName("player-mana--player"+(id+1))[0].innerHTML + `
      <div class="player-mana--crystal"></div>
      `;
    }

    for(let i = 0; i < Object.keys(battlefield).length; i++){
      document.getElementsByClassName("battlefield")[0].getElementsByClassName("card")[i].style.boxShadow = "none";
    }

    if(id == 0){
      let fieldDown = document.getElementsByClassName("field--down")[0];

      fieldDown.classList.add("field--active");
      document.getElementsByClassName("field--up")[0].classList.remove("field--active");

      for(let i = 0; i < fieldDown.childElementCount; i++){
        let curCard = fieldDown.getElementsByClassName("card")[i];
        let localID = curCard.classList[curCard.classList.length-1];

        curCard.style.boxShadow = "0px 0px 20px 3px #0C0";
        battlefield[localID]["canAttack"] = 1;

        if(battlefield[localID]["attackReset"]){
          battlefield[localID]["attackReset"] = 0;
        }
      }
    }
    else if(!wait){
      let fieldUp = document.getElementsByClassName("field--up")[0];

      fieldUp.classList.add("field--active");
      document.getElementsByClassName("field--down")[0].classList.remove("field--active");
    
      for(let i = 0; i < fieldUp.childElementCount; i++){
        let curCard = fieldUp.getElementsByClassName("card")[i];

        curCard.style.boxShadow = "0px 0px 20px 3px #0C0";
        battlefield[curCard.classList[curCard.classList.length-1]]["canAttack"] = 1;
      }
    }

    if(turn == 2){
      drawCard(3)
    }
    else{
      for(let i = 0; i < players[id]["hand"].length; i++){
        createCard(players[id]["hand"][i], "hand");
      }
    }

    drawCard(1);
  }
}

/* ============ WHERE THE MAGIC HAPPENS ============ */

function activateCard(cardName, id){
  /*document.getElementsByTagName("source")[0].src = "sounds/minions/"+cardName+"/"+cardName+"_play.ogg";
  document.getElementsByTagName("audio")[0].load();
  document.getElementsByTagName("audio")[0].play();*/

  let desc = "";
  let ignore = 0;

  /* GET DESCRIPTION WITHOUT HTML TAGS */
  for(let i = 0; i < cards[cardName]["text"].length; i++){
    if(cards[cardName]["text"][i] == "<"){
      ignore = 1;
    }

    if(!ignore){
      desc += cards[cardName]["text"][i];
    }

    if(cards[cardName]["text"][i] == ">"){
      ignore = 0;

      if(i != (cards[cardName]["text"].length-1) && cards[cardName]["text"][i-1] == "p" && cards[cardName]["text"][i-2] == "/"){
        desc += " * ";
      }
    }
  }

  desc = desc.toLowerCase().split(" ");
  console.log(desc);

  /* CHECKING FOR STATUS */
  for(let i = 0; i < desc.length; i++){
    if(i == 0 || (!desc[i+1] && desc[i-1] == "*")){
      for(let u = 0; u < statusList.length; u++){
        if(desc[i] == statusList[u]){
          battlefield[id][statusList[u]] = 1;
        }
      }
    }
  }

  if(battlefield[id]["rush"] == 1){
    battlefield[id]["canAttack"] = 1;
    document.getElementsByClassName(id)[0].style.boxShadow = "0px 0px 20px 3px #0C0";
  }

  if(battlefield[id]["stealth"] == 1){
    let image = document.getElementsByClassName(id)[0].getElementsByClassName("card--image")[0];
    
    image.innerHTML = image.innerHTML + `
    <img src="img/misc/fog.jpg" class="stealth"></img>
    `;

    stealthAnim.push(id);

    hover(id);
    mouseLeft(id);
  }

  if(battlefield[id]["swift"] == 1){
    let image = document.getElementsByClassName(id)[0].getElementsByClassName("card--image")[0];
    
    image.innerHTML = image.innerHTML + `
    <div class="swift"></div>
    `;

    hover(id);
    mouseLeft(id);
  }

  if(battlefield[id]["guard"] == 1){
    let image = document.getElementsByClassName(id)[0].getElementsByClassName("card--image")[0];

    image.innerHTML = image.innerHTML + `
    <div class="guard"></div>
    `;

    for(let key in battlefield){
      if(battlefield[key]["field"] == (turn+1)%2 && !battlefield[key]["guard"]){
        let curCard = document.getElementsByClassName(key)[0];

        curCard.style.transform = "scale(0.75)";
        battlefield[key]["scale"] = 0.75;
      }
    }

    hover(id);
    mouseLeft(id);
  }
  else{
    for(let key in battlefield){
      if(battlefield[key]["field"] == (turn+1)%2 && battlefield[key]["guard"]){
        let curCard = document.getElementsByClassName(id)[0];

        curCard.style.transform = "scale(0.75)";
        battlefield[id]["scale"] = 0.75;
      }
    }
  }

  let section = 0;

  /* TRANSLATE CARD DESCRIPTION INTO CODE */
  /* CHECKING FOR TRIGGER */
  for(let i = 0; i < desc.length; i++){
    if(desc[i] == "*" || i == 0){
      if(i != 0){
        section++;
      }

      battlefield[id][section] = {};
      battlefield[id][section]["trigger"] = "none";
      battlefield[id]["sections"] = (section+1);
    }

    // On Play
    if(desc[i] == "on" && desc[i+1] == "play:"){
      console.log("Trigger: On play");
      battlefield[id][section]["trigger"] = "on_play";
    }
    // On Death
    else if(desc[i] == "on" && desc[i+1] == "death:"){
      console.log("Trigger: On death");
      battlefield[id][section]["trigger"] = "on_death";
    }
    // Passive
    else if(desc[i] == "passive:"){
      console.log("Trigger: Passive");
      battlefield[id][section]["trigger"] = "passive";
    }

    /* CHECKING FOR CONDITIONS */
    if(desc[i] == "if"){
      for(let u = i; u < desc.length; u++){
        if(desc[u] == "*" || u == (desc.length-1)){
          break;
        }

        if(desc[u] == "is" && desc[u+1] == "damaged"){
          console.log("Condition: is_damaged");
          battlefield[id][section]["condition"] = "is_damaged";
        }
        else if(desc[u] == "dies" || desc[u] == "kills"){
          console.log("Condition: minion_dies");
          battlefield[id][section]["condition"] = "minion_dies";
          battlefield[id][section]["condition_target"] = "self";
        }
      }

      if(desc[i+1] == "an" && desc[i+2] == "enemy"){
        // If an enemy minion
        if(desc[i+3] == "minion"){
          console.log("Condition target: enemy_minion");
          battlefield[id][section]["condition_target"] = "enemy_minion";
        }
        // If an enemy race
        else if(races.indexOf(desc[i+2]) >= 0){
          console.log("Condition target: enemy_"+races[races.indexOf(desc[i+2])]);
          battlefield[id][section]["condition_target"] = "enemy_"+races[races.indexOf(desc[i+2])];
        }
      }
    }
    else if(desc[i] == "at" && desc[i+1] == "the"){
      // AT THE START OF YOUR TURN
      if(desc[i+2] == "start"){
        console.log("Trigger: At the start of a turn");
        battlefield[id][section]["trigger"] = "turn_start";
      }
      // AT THE END OF YOUR TURN
      else if(desc[i+2] == "end"){
        console.log("Trigger: At the end of your turn");
        battlefield[id][section]["trigger"] = "turn_end";

        for(let u = i; u < desc.length; u++){
          if(desc[u] == "*"){
            break;
          }

          if(desc[u] == "your" && desc[u+1] == "turn"){
            battlefield[id][section]["trigger"] = "player_turn_end";
          }
          else if((desc[u] == "enemy" || desc[u] == "enemy's" || desc[u] == "opponents" || desc[u] == "opponent's") && desc[u+1] == "turn"){
            battlefield[id][section]["trigger"] = "enemy_turn_end";
          }
        }
      }
    }
    
    if(!battlefield[id][section]["action"]){
      battlefield[id][section]["action"] = [];
      battlefield[id][section]["target"] = [];
      battlefield[id][section]["value"] = [];
    }

    let actID = battlefield[id][section]["action"].length;

    // Check for 'and' keyword
    if(desc[i] == "and"){
      actID++;
      console.log("and");
    }

    /* CHECKING FOR ACTION AND VALUE */
    if(desc[i] == "deal" && (desc[i+1] == "damage" || desc[i+2] == "damage")){
      battlefield[id][section]["action"][actID] = "deal_damage";

      if(Number(desc[i+1]) > 0){
        battlefield[id][section]["value"][actID] = Number(desc[i+1]);
        console.log("Deal "+Number(desc[i+1])+" damage");
      }
    }
    else if(desc[i] == "destroy" && (desc[i+1] == "minion" || desc[i+1] == "minions" || desc[i+2] == "minion" || desc[i+2] == "minions" || desc[i+4] == "minion" || desc[i+4] == "minions")){
      battlefield[id][section]["action"][actID] = "deal_damage";
      battlefield[id][section]["value"][actID] = 999999999999;
      console.log("Destroy");
    }
    else if(desc[i] == "restore" && (desc[i+1] == "health" || desc[i+2] == "health")){
      battlefield[id][section]["action"][actID] = "restore_health";

      if(Number(desc[i+1]) > 0){
        battlefield[id][section]["value"][actID] = Number(desc[i+1]);
        console.log("Restore "+Number(desc[i+1])+" health");
      }
    }
    else if(desc[i] == "gain"){
      if(desc[i+1] != "guard"){
        let stats = [];

        for(let u = 0; u < desc[i+1].length; u++){
          if(Number(desc[i+1][u]) >= 0){
            stats[stats.length] = Number(desc[i+1][u]);
          }
        }

        battlefield[id][section]["action"][actID] = "gain";
        battlefield[id][section]["value"][actID] = stats;
      }
    }
    else if(desc[i] == "summon"){
      let stats = [];
      let curCard = document.getElementsByClassName(id)[0];

      for(let u = 0; u < desc[i+2].length; u++){
        if(Number(desc[i+2][u]) >= 0){
          stats[stats.length] = Number(desc[i+2][u]);
        }
      }

      battlefield[id][section]["action"][actID] = "summon_minion";
      battlefield[id][section]["value"][actID] = stats;

      if(!battlefield[id][section]["summon"]){
        battlefield[id][section]["summon"] = [];
        battlefield[id][section]["summon"][actID] = {};
      }

      let summ = battlefield[id][section]["summon"][actID];

      summ["name"] = desc[i+3];
      summ["cost"] = curCard.getElementsByClassName("card--mana")[0].innerText;
      summ["art"] = curCard.getElementsByClassName("card--name")[0].innerText;
      summ["stats"] = stats;
      summ["desc"] = "";
      summ["race"] = curCard.getElementsByClassName("card--race")[0].innerText.slice(0,curCard.getElementsByClassName("card--race")[0].innerText.length-1);
      console.log("Summ: "+summ);
    }

    /* CHECKING FOR TARGET(s) */
    if(battlefield[id][section]["action"][actID-1]){
      // Self
      if(desc[i] == "this" && desc[i+1] == "minion"){
        console.log("to self");
        battlefield[id][section]["target"][actID-1] = "self";
      }
      // Your Hero
      else if(desc[i] == "your" && desc[i+1] == "hero"){
        console.log("to your hero");
        battlefield[id][section]["target"][actID-1] = "player_hero";
      }
      // Choose an enemy minion
      else if(desc[i] == "enemy" && desc[i+1] == "minion"){
        console.log("to an enemy minion");
        battlefield[id][section]["target"][actID-1] = "enemy_minion";
      }
      // Choose a minion
      else if(desc[i] == "a" && (desc[i+1] == "minion" || desc[i+1] == "minion,")){
        console.log("to a minion");
        battlefield[id][section]["target"][actID-1] = "a_minion";
      }
      // All (other) minions
      else if((desc[i-1] == "to" || desc[i-1] == "destroy") && desc[i] == "all"){
        for(let x = i; x < desc.length; x++){
          if(desc[x] == "*"){
            break;
          }
          // All minions with this race
          if(races.indexOf(desc[x].slice(0, desc[x].length-1)) >= 0){
            console.log("to all "+desc[x]+" race cards");
            battlefield[id][section]["target"][actID-1] = "all_"+desc[x].slice(0, desc[x].length-1);
            break;
          }
          // All other minions with this race
          else if(desc[x] == "other" && races.indexOf(desc[x+1].slice(0, desc[x+1].length-1)) >= 0){
            console.log("to all other "+desc[x]+" race cards");
            battlefield[id][section]["target"][actID-1] = "all_other_"+desc[x].slice(0, desc[x].length-1);
            break;
          }
          // All other minions
          else if(desc[x] == "other"){
            let ignore = 0;
            // All other minions who aren't this race
            console.log("other");
            for(let u = x; u < desc.length; u++){
              if(desc[u-1] == "aren't" && races.indexOf(desc[u].slice(0, desc[u].length-1)) >= 0){
                console.log("to all other minions who aren't "+desc[u].slice(0, desc[u].length-1)+" race");
                battlefield[id][section]["target"][actID-1] = "all_other_not_"+desc[u].slice(0, desc[u].length-1);
                ignore = 1;
              }
            }

            if(!ignore){
              console.log("to all other minions");
              battlefield[id][section]["target"][actID-1] = "all_other_minions";
            }

            break;
          }
          // All minions
          else{
            let ignore = 0;
            // All minions who aren't this race
            for(let u = x; u < desc.length; u++){
              console.log(desc[u-1]+" ---> "+desc[u].slice(0, desc[u].length-1)+" ::: "+desc[x+1]);
              if(desc[u-1] == "aren't" && races.indexOf(desc[u].slice(0, desc[u].length-1)) >= 0){
                if(desc[x+1] == "your" || desc[x+2] == "your"){
                  console.log("to all your minions who aren't "+desc[u].slice(0, desc[u].length-1)+" race");
                  battlefield[id][section]["target"][actID-1] = "all_your_other_not_"+desc[u].slice(0, desc[u].length-1);
                }
                else{
                  console.log("to all minions who aren't "+desc[u].slice(0, desc[u].length-1)+" race");
                  battlefield[id][section]["target"][actID-1] = "all_other_not_"+desc[u].slice(0, desc[u].length-1);
                }

                ignore = 1;
              }
            }

            if(!ignore){
              console.log("to all minions");
              battlefield[id][section]["target"][actID-1] = "all_minions";
            }

            break;
          }
        }
      }
    }
  }

  ignore = 1;
  let sectionAmount = battlefield[id]["sections"];

  if(battlefield[id] && battlefield[id]["sections"]){
    console.log(battlefield[id]);
    for(let i = 0; i < sectionAmount; i++){
      if(battlefield[id][i]["trigger"] == "on_play"){
        if(battlefield[id][i]["condition"]){
          switch(battlefield[id][i]["condition"]){
            case "is_damaged":
              if(battlefield[id][i]["condition_target"] == "enemy_minion"){
                for(let key in battlefield){
                  let damaged = document.getElementsByClassName(key)[0].getElementsByClassName("damaged")[0];

                  if(battlefield[key]["field"] == (turn%2) && damaged){
                    ignore = 0;
                  }
                }
              }
            break;
            case "minion_dies":
              runAction(id, i);
            break;
          }

          if(!ignore){
            runAction(id, i);
          }
        }
        else{
          runAction(id, i);
        }
      }
    }
  }
}

/* CHECK IF THE ATTACKING ACTION IS VALID */
function selectCard(id){
  if(canBeTargeted(id)){
    if(targetAble == "any"){
      let curCard = document.getElementsByClassName(id)[0];
      let playerID = turn%2;
      let field = (playerID == 0 ? document.getElementsByClassName("field--up")[0] : document.getElementsByClassName("field--down")[0]);
      let oppField = (playerID == 0 ? document.getElementsByClassName("field--down")[0] : document.getElementsByClassName("field--up")[0]);
      let ignore = 0;

      for(let i = 0; i < field.childElementCount; i++){
        if(field.getElementsByClassName("card")[i].classList[field.getElementsByClassName("card")[i].classList.length-1] == id){
          if(battlefield[id]["selected"]){
            curCard.style.opacity = "1";
            scale(id, 1);
            battlefield[id]["selected"] = 0;
          }
          else if(battlefield[id]["canAttack"] == 1 && (Number(curCard.getElementsByClassName("attack")[0].innerHTML) > 0 || Number(curCard.getElementsByClassName("brute")[0].innerHTML) > 0)){
            for(let key in battlefield){
              if(battlefield[key]["selected"] == 1){
                let oldCard = document.getElementsByClassName(key)[0];

                oldCard.style.opacity = "1";
                scale(key, 1);
                battlefield[key]["selected"] = 0;
              }
            }

            curCard.style.opacity = "0.85";
            scale(id, 1.2);
            battlefield[id]["selected"] = 1;
          }
        }
      }

      if(!battlefield[id]["guard"]){
        for(let key in battlefield){
          if(battlefield[key]["field"] == turn%2 && battlefield[key]["guard"]){
            ignore = 1;
          }
        }
      }

      if(!battlefield[id]["stealth"] && !ignore){
        for(let i = 0; i < oppField.childElementCount; i++){
          if(oppField.getElementsByClassName("card")[i].classList[oppField.getElementsByClassName("card")[i].classList.length-1] == id){
            for(let key in battlefield){
              if(battlefield[key]["selected"] == 1){
                let victim = document.getElementsByClassName(id)[0];
                let attacker = document.getElementsByClassName(key)[0];

                removeStealth(key);
                damage(key, id);
              }
            }
          }
        }
      }
    }
    else{
      targetAble = "any";
      effectDamage(id, shooter["damage"]);
      document.getElementsByClassName("crosshair")[0].remove();
      document.body.style.cursor = "auto";
    }
  }
}

function runAction(id, section){
  // DEAL DAMAGE
  let stop = 0

  for(let i = 0; i < battlefield[id][section]["action"].length; i++){
    if(!stop){
      console.log("Run action "+i);
      console.log(battlefield[id][section]["target"][i]);
      let found = 0;
      let value = battlefield[id][section]["value"][i];

      switch(battlefield[id][section]["action"][i]){
        case "deal_damage":
          switch(battlefield[id][section]["target"][i]){
            case "self":
              effectDamage(id, value);
            break;
            case "player_hero":
              damagePlayer(battlefield[id]["field"]+1, value);
            break;
            case "enemy_minion":
              wait = 0;

              for(let key in battlefield){
                if(battlefield[key]["field"] == (turn%2)){
                  found = 1;
                  console.log("Found 1! "+key);
                }
              }

              if(found && battlefield[id]["field"] == ((turn+1)%2)){
                console.log("Get crosshair ready");
                targetAble = "enemy_minion";
                shooter = {"id": id, "damage": value};
                document.body.innerHTML = document.body.innerHTML + `
                <div class="crosshair"></div>
                `;
              }
            break
            case "a_minion":
              wait = 0;

              for(let key in battlefield){
                if(key != id){
                  found = 1;
                }
              }

              if(found){
                targetAble = "a_minion";
                shooter = {"id": id, "damage": value};
                document.body.innerHTML = document.body.innerHTML + `
                <div class="crosshair"></div>
                `;
              }
            break;
            default:
              let act = "";

              if(battlefield[id] && battlefield[id][section]["target"][i]){
                act = battlefield[id][section]["target"][i];
              }

              if(act.slice(0, 14) == "all_other_not_" && races.indexOf(act.slice(14, act.length)) >= 0){
                for(let key in battlefield){
                  let curCard = document.getElementsByClassName(key)[0];
                  let getRace = curCard.getElementsByClassName("card--race")[0].innerText.toLowerCase();
                  getRace = getRace.slice(0, getRace.length-1);
                  
                  if(key != id && getRace != act.slice(14, act.length)){
                    effectDamage(key, value);
                  }
                }
              }
              else if(act.slice(0, 19) == "all_your_other_not_" && races.indexOf(act.slice(19, act.length)) >= 0){
                for(let key in battlefield){
                  let curCard = document.getElementsByClassName(key)[0];
                  let getRace = curCard.getElementsByClassName("card--race")[0].innerText.toLowerCase();
                  let fieldSide;

                  for(let key2 in battlefield){
                    if(key2 == id){
                      fieldSide = battlefield[key2]["field"];
                      break;
                    }
                  }

                  getRace = getRace.slice(0, getRace.length-1);

                  if(key != id && getRace != act.slice(19, act.length) && battlefield[key]["field"] == fieldSide){
                    effectDamage(key, value);
                  }
                }
              }
          }

          if(battlefield[id][section]["condition"] == "minion_dies"){
            stop = 1;
            battlefield[id][section]["action"].splice(0, (i+1))
            battlefield[id][section]["value"].splice(0, (i+1))
            battlefield[id]["waiting_for_kill"] = 1;
          }
        break;
        case "restore_health":
          switch(battlefield[id][section]["target"][i]){
            case "player_hero":
              restoreHealth("player-health--player"+(battlefield[id]["field"]+1), battlefield[id][section]["value"][i]);
            break;
          }
        break
        case "gain":
          switch(battlefield[id][section]["target"][i]){
            case "":
              
            break
            default:
              gainStats(id, battlefield[id][section]["value"][i]);
          }
        break;
        case "summon_minion":
          let field = (battlefield[id]["field"] == 0 ? "field--down" : "field--up");
          let summ = battlefield[id][section]["summon"][i];

          createCard(summ["art"], field, 1, summ["name"], summ["cost"], summ["art"], summ["stats"], summ["desc"], summ["race"]);
        break;
      }
    }
  }

  if(battlefield[id] && battlefield[id][section]["trigger"] == "on_death"){
    console.log("Removed card "+id+" (on death)");
    document.getElementsByClassName(id)[0].remove();
    delete battlefield[id];
  }
}

function damagePlayer(id, damage){
  console.log("ID "+id);
  let curHealth = document.getElementsByClassName("player-health--player"+id)[0];
  let health = Number(curHealth.innerHTML) - damage;
  
  curHealth.innerHTML = health;
}

function selectPlayer(id){
  let ignore = 0;
  
  for(let key in battlefield){
    if(battlefield[key]["field"] == (id-1) && battlefield[key]["guard"]){
      ignore = 1;
    }
  }

  if(!ignore){
    for(let key in battlefield){
      if(battlefield[key]["selected"] == 1 && battlefield[key]["field"] != (id-1)){
        let curCard = document.getElementsByClassName(key)[0];

        damagePlayer(id, Number(curCard.getElementsByClassName("brute")[0].innerHTML));
        battlefield[key]["selected"] = 0;
        curCard.style.opacity = 1;
        curCard.style.transform = "scale(1)";

        if(!battlefield[key]["swift"] || battlefield[key]["attackReset"])
        {
          battlefield[key]["canAttack"] = 0;
          battlefield[key]["attackReset"] = 0;
          curCard.style.boxShadow = "none";
        }
        else{
          battlefield[key]["attackReset"] = 1;
        }

        scale(key, 1);
        removeStealth(key);
      }
    }
  }
}

function removeStealth(id){
  let curCard = document.getElementsByClassName(id)[0];

  if(battlefield[id]["stealth"] == 1){
    battlefield[id]["stealth"] = 0;
    curCard.getElementsByClassName("card--image")[0].removeChild(curCard.getElementsByClassName("stealth")[0]);

    for(let u = 0; u < stealthAnim.length; u++){
      if(stealthAnim[u] == id){
        stealthAnim.splice(u, 1);
      }
    }
  }
}

function effectDamage(victimID, damage){
  let victim = document.getElementsByClassName(victimID)[0];
  console.log("Deal effect damage to "+victim);
  victim.getElementsByClassName("health")[0].innerHTML = (Number(victim.getElementsByClassName("health")[0].innerHTML) - damage);

  let vicHealth = (Number(victim.getElementsByClassName("health")[0].innerHTML));

  if(vicHealth < battlefield[victimID]["maxhealth"]){
    victim.getElementsByClassName("health")[0].classList.add("damaged");
  }
  else if(victim.getElementsByClassName("damaged")[0]){
    victim.getElementsByClassName("health")[0].classList.remove("damaged");
  }

  if(vicHealth <= 0){
    for(let key in battlefield){
      if(battlefield[key]["waiting_for_kill"]){
        battlefield[key]["waiting_for_kill"] = 0;
        runAction(key, 0);
      }
    }

    removeCard(victimID);
  }
}

function restoreHealth(targetID, amount){
  let target = document.getElementsByClassName(targetID)[0];
  let health = target.getElementsByClassName("health")[0];
  let targHealth = 0;

  if(target.getElementsByClassName("health")[0]){
    health.innerHTML = (Number(health.innerHTML) + amount);
    targHealth = Number(health.innerHTML);
  }
  else{
    target.innerHTML = (Number(target.innerHTML) + amount);
    targHealth = Number(target.innerHTML);
    health = target;
  }

  if(targHealth > 50){
    health.innerHTML = 50;
  }
}

function gainStats(targetID, stats){
  let target = document.getElementsByClassName(targetID)[0];
  let attack = target.getElementsByClassName("attack")[0];
  let brute = target.getElementsByClassName("brute")[0];
  let health = target.getElementsByClassName("health")[0];

  attack.innerHTML = Number(attack.innerHTML) + stats[0];
  brute.innerHTML = Number(brute.innerHTML) + stats[1];
  health.innerHTML = Number(health.innerHTML) + stats[2];

  if(Number(attack.innerHTML) > battlefield[targetID]["maxattack"]){
    attack.classList.add("upgraded");
  }
  else if(attack.getElementsByClassName("upgraded")[0]){
    attack.classList.remove("upgraded");
  }

  if(Number(brute.innerHTML) > battlefield[targetID]["maxbrute"]){
    brute.classList.add("upgraded");
  }
  else if(brute.getElementsByClassName("upgraded")[0]){
    brute.classList.remove("upgraded");
  }

  if(Number(health.innerHTML) > battlefield[targetID]["maxhealth"]){
    health.classList.add("upgraded");
  }
  else if(health.getElementsByClassName("upgraded")[0]){
    health.classList.remove("upgraded");
  }
}

function damage(attackID, victimID){
  let victim = document.getElementsByClassName(victimID)[0];
  let attacker = document.getElementsByClassName(attackID)[0];
  let healthVictim = Number(victim.getElementsByClassName("health")[0].innerHTML);
  let healthAttack = Number(attacker.getElementsByClassName("health")[0].innerHTML);
  let damageVictim = Number(attacker.getElementsByClassName("attack")[0].innerHTML);
  let damageAttack = Number(victim.getElementsByClassName("attack")[0].innerHTML);
  let ignore = 0;

  console.log(victim.classList[1]+" took "+damageVictim+" damage and "+attacker.classList[1]+" took "+damageAttack+" damage");
  
  if((healthVictim - damageVictim) <= 0){
    removeCard(victimID);
  }
  else{
    victim.getElementsByClassName("health")[0].innerHTML = (healthVictim - damageVictim);
  }

  healthVictim = Number(victim.getElementsByClassName("health")[0].innerHTML);

  if(battlefield[victimID]){
    if(healthVictim < battlefield[victimID]["maxhealth"]){
      victim.getElementsByClassName("health")[0].classList.add("damaged");
    }
    else if(victim.getElementsByClassName("damaged")[0]){
      victim.getElementsByClassName("health")[0].classList.remove("damaged");
    }
  }

  if((healthAttack - damageAttack) <= 0){
    removeCard(attackID);
  }
  else{
    attacker.style.opacity = 1;
    scale(attackID, 1);
    attacker.getElementsByClassName("health")[0].innerHTML = (healthAttack - damageAttack);
  }

  for(let i = 0; i < stealthAnim.length; i++){
    if(stealthAnim[i] == attackID){
      stealthAnim.splice(i,1);
    }
  }

  healthAttack = Number(attacker.getElementsByClassName("health")[0].innerHTML);

  if(battlefield[attackID]){
    if(healthAttack < battlefield[attackID]["maxhealth"]){
      attacker.getElementsByClassName("health")[0].classList.add("damaged");
    }
    else if(attacker.getElementsByClassName("damaged")[0]){
      attacker.getElementsByClassName("health")[0].classList.remove("damaged");
    }

    battlefield[attackID]["selected"] = 0;

    if(!battlefield[attackID]["swift"] || battlefield[attackID]["attackReset"])
    {
      attacker.style.boxShadow = "none";
      battlefield[attackID]["canAttack"] = 0;
      battlefield[attackID]["attackReset"] = 0;
    }
    else{
      battlefield[attackID]["attackReset"] = 1;
    }
  }
}

function scale(id, size){
  let curCard = document.getElementsByClassName(id)[0];

  if(battlefield[id]){
    curCard.style.transform = "scale("+((size - 1) + battlefield[id]["scale"])+")";
  }
  else{
    curCard.style.transform = "scale("+size+")";
  }
}

function removeCard(id){
  console.log("Remove card "+id);
  let victim = document.getElementsByClassName(id)[0];
  let ignore = 0;

  victim.getElementsByClassName("health")[0].innerHTML = 0;
  victim.style.transition = "1s";
  victim.style.opacity = 0;
  victim.transform = "scale(0.3)";

  if(battlefield[id]["guard"] == 1){
    for(let key in battlefield){
      if(key != id && battlefield[key]["field"] == battlefield[id]["field"] && battlefield[key]["guard"] == 1){
        ignore = 1;
      }
    }
  }

  if(!ignore){
    for(let key in battlefield){
      if(battlefield[key]["field"] == battlefield[id]["field"]){
        battlefield[key]["scale"] = 1;
        scale(key, 1);
      }
    }
  }

  let ran = 0;
  let count = battlefield[id]["sections"];

  if(battlefield[id] && count){
    for(let i = 0; i < count; i++){
      if(battlefield[id][i]["trigger"] == "on_death"){
        ran = 1;
        wait = 1;

        window.setTimeout(function(){
          runAction(id, i);
          wait = 0;
        }, 751);
      }
    }
  }

  if(!ran){
    window.setTimeout(function(){
      console.log("Removed card");
      wait = 0;
      victim.remove();
      delete battlefield[id];
    }, 750);
  }
}

function canBeTargeted(id){
  if(document.getElementsByClassName(id)[0].classList[0] == "card"){
    if(targetAble == "any" || targetAble == "a_minion" || battlefield[id]){
      if(battlefield[id] && battlefield[id]["stealth"] && battlefield[id]["field"] == (turn%2)){
        return false;
      }
      else if(targetAble == "any" || (targetAble == "a_minion" && id != shooter["id"]) || (targetAble == "enemy_minion" && battlefield[id]["field"] == (turn%2)) || (targetAble == "friendly_minion" && battlefield[id]["field"] == ((turn+1)%2))){
        return true;
      }
      else{
        return false;
      }
    }
    else{
      return false;
    }
  }
  else{
    false;
  }
}
