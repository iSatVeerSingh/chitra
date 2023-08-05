window.addEventListener("load", () => {
  const root = document.getElementById("root");

  const canvas = document.createElement("canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  root?.appendChild(canvas);

  const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!


  ctx.beginPath()
  ctx.rect(20, 20, 300, 400)
  ctx.stroke()
  ctx.closePath()
});
