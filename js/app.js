$(function () {

  let hands = ["狐", "鉄砲", "庄屋"];

  let enemyHand = "";

  let combo = 0;

  let hp = 3;

  $("#startBtn").on("click", function () {

    startGame();

  });

  $("#restartBtn").on("click", function () {

    startGame();

  });

  $(".handBtn").on("click", function () {

    let playerHand =
      $(this).data("hand");

    if (playerHand === "狐") {

      playSound("foxSound");

    }

    else if (playerHand === "庄屋") {

      playSound("shoyaSound");

    }

    else if (playerHand === "鉄砲") {

      playSound("gunSound");

    }

    let randomNum =
      Math.floor(Math.random() * hands.length);

    enemyHand =
      hands[randomNum];

    $("#enemyHand").text(enemyHand);

    judge(playerHand, enemyHand);

    if (hp <= 0) {

      gameOver();

    }

  });

  function playSound(id) {

    const sound =
      document.getElementById(id);

    sound.currentTime = 0;

    sound.play();

  }

  function startGame() {

    playSound("startSound");

    combo = 0;

    hp = 3;

    $("#combo").text(combo);

    $("#hp").text(hp);

    $("#enemyHand").text("？");

    $("#result").text("いざ、勝負！");

    $("#startBtn").hide();

    $(".game-over").hide();

    $(".game").show();

  }

  function judge(player, enemy) {

    if (player === enemy) {

      $("#result").text("あいこでござる！");

      combo = 0;

    }

    else if (

      player === "狐" &&
      enemy === "庄屋" ||

      player === "庄屋" &&
      enemy === "鉄砲" ||

      player === "鉄砲" &&
      enemy === "狐"

    ) {

      $("#result").text("勝ちでござる！");

      combo += 1;

    }

    else {

      $("#result").text("負けでござる…");

      hp -= 1;

      combo = 0;

    }

    $("#combo").text(combo);

    $("#hp").text(hp);

  }

  function gameOver() {

    $(".game").hide();

    $(".game-over").show();

    $("#startBtn").show();

  }

});