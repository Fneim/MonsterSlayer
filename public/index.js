new Vue({
  el:"#start-game",
  data: {
    displayNone: "d-none",
    displayBlock: "d-block"
  }
});

new Vue({
  el: "#game",
  data: {
    text: "hello",
    playerHealth: 100,
    monsterHealth: 100,
    moves: [
    ]
  },
  methods: {
    attackMonster: function () {
      if (this.playerHealth <= 0) {
        alert("You lose!");
      } else if (this.monsterHealth <= 0) {
        alert("You won!");
      }
      var playerAttack = Math.ceil(Math.random() * 16);
      var monsterAttack = Math.ceil(Math.random() * 16);
      this.monsterHealth = this.monsterHealth - playerAttack;
      this.playerHealth = this.playerHealth - monsterAttack;
      this.moves.push({ msg: "Player attacked Monster for " + playerAttack });
      this.moves.push({ msg: "Monster attacked Player for " + monsterAttack });
    },

    specialAttack: function() {
      var specialAttackMove = 20;
      var monsterAttack = Math.ceil(Math.random() * 16);
      this.playerHealth = this.playerHealth - monsterAttack;
      this.monsterHealth = this.monsterHealth - specialAttackMove;
      this.moves.push({ msg: "Player attacked Monster for " + specialAttackMove },
      { msg: "Monster attacked Player for " + monsterAttack });

    },

    heal: function() {
      var numHeal = Math.ceil(Math.random() * 16);
      if (this.playerHealth < 100 && numHeal + this.playerHealth < 100) {
        this.playerHealth = this.playerHealth + numHeal;
        this.moves.push({ msg: "Player healed Monster for " + numHeal });
      }
    },

    giveUp: function() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.moves = [];
    }
  }
});
