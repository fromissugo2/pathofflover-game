const config = {
  type: Phaser.AUTO,
  width: 480,
  height: 270,
  backgroundColor: "#2d2d2d",
  scene: {
    preload,
    create,
    update
  }
};

const game = new Phaser.Game(config);

function preload() {
  // 지금은 아무것도 안 불러옴
}

function create() {
  this.add.text(240, 135, "Path of flover", {
    font: "20px Arial",
    fill: "#ffffff"
  }).setOrigin(0.5);

  this.add.text(240, 170, "Game loading...", {
    font: "12px Arial",
    fill: "#cccccc"
  }).setOrigin(0.5);
}

function update() {
  // 나중에 캐릭터 이동, 충돌 처리
}
