// Les dimensions du canvas
const width = 800;
const height = 600;

//Notre modèle de balle
var ball = {
  x: width/2,
  y: height/2,
  vx : 5,
  vy : 5,
  radius: 50,
  col:  '#35abc0'
};

// Appelée une fois au début du programme (fournie par p5)
function setup() {
  //Créer le canvas (zone de peinte sur la page web)
  createCanvas(width, height);
  //Préparer le pot de peinture de la couleur de la balle
  fill(ball.col);
}


//Appelée en boucle (fournie par p5)
function draw() {
  
  //Repeindre le canvas à chaque frame
  background(222);
  
  //Détection des collisions avec les bords
  if(ball.x + ball.radius >= width || ball.x - ball.radius <= 0){
    //Faire rebondir la balle
    ball.vx = ball.vx * (-1);
  }
  
  if(ball.y + ball.radius >= height  || ball.y - ball.radius <= 0){
    //Faire rebondir la balle
    ball.vy = ball.vy * (-1);
  }
  
  //Faire avancer la balle
  ball.x = ball.x + ball.vx;
  ball.y = ball.y + ball.vy;
  
  //Dessiner la balle
  circle(ball.x, ball.y, ball.radius * 2);
}
