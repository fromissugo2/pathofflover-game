console.log("main.js loaded");

const config = {
  type: Phaser.AUTO,
  width: 480,
  height: 270,
  backgroundColor: "#2d2d2d",
  parent: null,
  scene: {
    preload,
    create,
    update
  }
};

new Phaser.Game(config);

function preload() {
  console.log("preload()");
}

function create() {
  console.log("create()");

  // 배경 사각형 (Scene 실행 확인용)
  const bg = this.add.rectangle(0, 0, 480, 270, 0x1e1e1e);
  bg.setOrigin(0);

  // 텍스트
  this.add.text(240, 120, "Path of flover", {
    fontFamily: "Arial",
    fontSize: "24px",
    color: "#ffffff"
  }).setOrigin(0.5);

  this.add.text(240, 160, "Game loading...", {
    fontFamily: "Arial",
    fontSize: "14px",
    color: "#bbbbbb"
  }).setOrigin(0.5);
}

function update() {}
