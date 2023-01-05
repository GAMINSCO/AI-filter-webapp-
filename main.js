noseX = 0;
noseY = 0;

filter_img =  ""

function preload() {
    blue = loadImage("https://i.postimg.cc/59YfZg3f/glasses2.png")
    glasses = loadImage("https://i.postimg.cc/L5zBJfzh/glasses.png")
    mustache = loadImage("https://i.postimg.cc/rpnhTSJk/mustache.png")
}

function setup() {
    canvas = createCanvas(320, 280)
    canvas.position(525, 130);

    webcam = createCapture(VIDEO)
    webcam.size(320, 280)
    webcam.hide();

    poseNet = ml5.poseNet(webcam, modelLoaded)
    poseNet.on('pose', gotPose)
}

function draw() {
    image(webcam, 0, 0, 320, 280)

    fill(171, 219, 255)
    stroke(88, 184, 255)
    circle(noseX, noseY, 10)

    if(filter_img == "M") {
        console.log("M")
        image(mustache, noseX - 40, noseY - 5, 80, 40)
    } else if (filter_img == "G") {
        console.log("G")
        image(glasses, noseX - 40, noseY - 35, 80, 40)
    } else if (filter_img == "B") {
        console.log("B")
        image(blue, noseX - 40, noseY - 35, 80, 40)
    }
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
    noseX = result[0].pose.nose.x;
    noseY = result[0].pose.nose.y;
    console.log("x = ", noseX)
    console.log("y = ", noseY)
    } else {
//        window.alert("Error: cannot detect nose!")
    }
}

function img1() {
    filter_img = "M"
}

function img2() {
    filter_img = "G"
}

function img3() {
    filter_img = "B"
}