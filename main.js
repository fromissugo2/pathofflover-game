alert("NEW STEP 4 CODE LOADED");

const config = {
  type: Phaser.AUTO,
  width: 480,
  height: 270,
  backgroundColor: "#222222",
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 600 },
      debug: false
    }
  },
  scene: {
    create,
    update
  }
};

new Phaser.Game(config);

let player;
let cursors;
const SPEED = 100;
const JUMP = 260;
const GROUND_Y = 220;

function create() {
  // 바닥
  const ground = this.add.rectangle(0, GROUND_Y, 480, 50, 0x555555);
  ground.setOrigin(0);
  this.physics.add.existing(ground, true);

  // 플레이어 (오른쪽에서 시작)
  player = this.add.rectangle(420, GROUND_Y - 20, 16, 24, 0x00ff88);
  this.physics.add.existing(player);

  player.body.setCollideWorldBounds(true);
  this.physics.add.collider(player, ground);

  cursors = this.input.keyboard.createCursorKeys();
}

function update() {
  // ← 방향 자동 이동
  player.body.setVelocityX(-SPEED);

  // 점프
  if (cursors.space.isDown && player.body.blocked.down) {
    player.body.setVelocityY(-JUMP);
  }

  // 화면 왼쪽 넘어가면 오른쪽에서 재등장
  if (player.x < -10) {
    player.x = 490;
  }
}
