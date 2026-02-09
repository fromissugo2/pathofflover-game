const config = {
  type: Phaser.AUTO,
  width: 480,
  height: 270,
  backgroundColor: "#222222",
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 500 },
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
let cursors;
const SPEED = 80;
const JUMP_POWER = 220;
const GROUND_Y = 220;

function preload() {}

function create() {
  // 바닥
  const ground = this.add.rectangle(0, GROUND_Y, 480, 50, 0x444444);
  ground.setOrigin(0);
  this.physics.add.existing(ground, true); // static body

  // 플레이어 (임시 도트)
  player = this.add.rectangle(400, GROUND_Y - 20, 16, 24, 0x00ff88);
  this.physics.add.existing(player);

  player.body.setCollideWorldBounds(true);
  player.body.setBounce(0);

  // 충돌 설정
  this.physics.add.collider(player, ground);

  // 키 입력
  cursors = this.input.keyboard.createCursorKeys();
}

function update() {
  // ← 방향 자동 이동
  player.body.setVelocityX(-SPEED);

  // 점프 (바닥에 있을 때만)
  if (cursors.space.isDown && player.body.blocked.down) {
    player.body.setVelocityY(-JUMP_POWER);
  }

  // 화면 왼쪽 넘어가면 오른쪽에서 다시 등장
  if (player.x < -10) {
    player.x = 490;
  }
}
