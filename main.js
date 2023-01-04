function preload() { }

function setup() {
    canvas = createCanvas(320, 280)
    canvas.center();

    webcam = createCapture(VIDEO)
    webcam.size(320, 280)
    webcam.hide();

    poseNet = ml5.poseNet(webcam, modelLoaded)
    poseNet.on('pose', gotPose)
}

function draw() {
    image(webcam, 0, 0, 320, 280)
}

function saveimg() {
    save("img.jpg")
}

function modelLoaded() {
    console.log("model Loaded")
}

function gotPose(result) {
    if(result.length > 0) {
    console.log(result)
    console.log("x = ", result[0].pose.nose.x)
    console.log("y = ", result[0].pose.nose.y)
    } else {
        window.alert("Error: cannot detect nose!")
    }
}