const config = {
  type: Phaser.AUTO,
  width: 480,
  height: 270,
  backgroundColor: "#222222",
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: false
    }
  },
  scene: {
    preload,
    create,
    update
  }
};

new Phaser.Game(config);

let player;
let speed = 60;

function preload() {}

function create() {
  // 바닥
  this.ground = this.add.rectangle(0, 220, 480, 50, 0x444444);
  this.ground.setOrigin(0);

  // 플레이어 (임시 사각형)
  player = this.add.rectangle(50, 200, 16, 24, 0x00ff88);
  this.physics.add.existing(player);

  player.body.setCollideWorldBounds(true);
}

function update() {
  // 자동 걷기
  player.x += speed * 0.016;

  // 화면 끝에 가면 다시 왼쪽으로
  if (player.x > 480) {
    player.x = -10;
  }
}
