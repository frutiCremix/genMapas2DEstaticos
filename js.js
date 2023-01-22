let tileSheet = new Image();
tileSheet.src = "./tiles.png";

let tileWidth = 16;
let tileHeight = 16;
let tiles = [];

tileSheet.onload = function() {
  // obtener el canvas y su contexto
  let canvas = document.createElement("canvas");
  let context = canvas.getContext("2d");
  canvas.width = tileSheet.width;
  canvas.height = tileSheet.height;

  // dibujar la hoja de tiles en el canvas
  context.drawImage(tileSheet, 0, 0);

  // recorrer la hoja de tiles para separar en tiles individuales
  for (let y = 0; y < canvas.height; y += tileHeight) {
    for (let x = 0; x < canvas.width; x += tileWidth) {
      // obtener los datos de la imagen del tile
      let tileData = context.getImageData(x, y, tileWidth, tileHeight);
  
      // crear un nuevo canvas para el tile
      let tile = document.createElement("canvas");
      let tileContext = tile.getContext("2d");
      tile.width = tileWidth;
      tile.height = tileHeight;
  
      // dibujar los datos de la imagen del tile en el nuevo canvas
      tileContext.putImageData(tileData, 0, 0);
  
      // agregar el tile a la matriz de tiles individuales
      tiles.push(tile);
    }
  }
};

//fin de separacion de recursos

let map = [
  [0, 0, 2, 3],
  [4, 5, 6, 7],
  [8, 9, 10, 11],
  [12, 13, 14, 15]
];

window.onload = function(){
let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");


for (let row = 0; row < map.length; row++) {
  for (let col = 0; col < map[row].length; col++) {
    let tileNum = map[row][col];
    //obtenemos el tile a dibujar
    let tile = tiles[tileNum];
    let x = col * tileWidth;
    let y = row * tileHeight;
    context.drawImage(tile, x, y);
  }
}
}
