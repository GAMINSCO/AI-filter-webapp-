function preload() { }

function setup() {
    canvas = createCanvas(320, 280)
    canvas.center();

    webcam = createCapture(VIDEO)
    webcam.hide();
}

function draw() {
    image(webcam, 0, 0, 320, 280)
}

function saveimg() {
    save("img.jpg")
}