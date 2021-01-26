function setup() {
  createCanvas(400,400);
}

function draw() {
  background(0)

  hr = hour()
  mn = minute()
  sc = second()

  stroke(255,0,0)
  strokeWeight(7)
  line(200,200,sc,40)
  angleMode(DEGREES)
  scAngle=map(sc,200,60,0,360)

  stroke(0,255,0)
  strokeWeight(7)
  line(200,200,mn,80)
  mnAngle=map(200,200,60,0,360)

  stroke(0,0,255)
  strokeWeight(7)
  line(200,200,hr,140)
  hrAngle=map(200,200,60,0,360)

}