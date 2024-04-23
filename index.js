// circulos concentricos

function setup() {
  createCanvas(500, 500)
}

function draw() {
  background(230) //en cada ciclo, "borro" el Canvas (lo pinto)
  noFill() //elijo dibujar figuras sin relleno

  strokeWeight(1)

  for (let i = 1; i <= 10; i++) {
    ellipse(250, 250, 50 * i) 
    //¿Qué diámetros tendrán las elipses?
  }

}
