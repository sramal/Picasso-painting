function paintPicasso() {
    // Get window width and height.
    let canvasWidth;
    let canvasHeight;
    if (window.innerWidth > window.innerHeight) {
        canvasWidth = window.innerHeight * 1.7 * 0.9;
        if (canvasWidth > window.innerWidth) {
            canvasWidth = window.innerWidth * 0.9;
            canvasHeight = (window.innerWidth * 0.9) / 1.7;
        } else {
            canvasHeight = window.innerHeight * 0.9;
        }
    } else {
        canvasWidth = window.innerWidth * 0.9;
        canvasHeight = (window.innerWidth * 0.9) / 1.7;
    }

    // calculate the canvas size based on window width and height.
    const canvas = document.getElementById("canvas");
    canvas.style.width = canvasWidth + "px";
    canvas.style.height = canvasHeight + "px";
    canvas.style.margin = "5%";

    // divide canvas into 3 row with gap between
    let gap = canvasWidth * 0.015;
    canvas.style.gap = gap + "px";
    let row3 = (canvasHeight - 2 * gap) / 16;
    let row4 = row3 / 2;
    let row1 = row3 * 5;
    let row2 = canvasHeight - row1 - row3 - row4 - 2 * gap;
    canvas.style.gridTemplateRows =
        row1 + "px " + row2 + "px " + row3 + "px " + row4 + "px";

    // divide the top row into 3 equal column and 2 gaps.
    let col = (canvasWidth - 2 * gap) / 3;
    const row1Element = document.getElementById("top");
    row1Element.style.gridTemplateColumns =
        col + "px " + col + "px " + col + "px";
    row1Element.style.gap = gap + "px";

    // calulate width and height of big circle based screen size
    const bigCircles = document.getElementsByClassName("circle-big");
    if (canvasWidth > canvasHeight) {
        for (let i = 0; i < bigCircles.length; i++) {
            bigCircles[i].style.width = canvasWidth * 0.1 + "px";
            bigCircles[i].style.height = canvasWidth * 0.1 + "px";
        }
    }

    // calulate width and height of small circle based screen size
    const smallCircles = document.getElementsByClassName("circle-small");
    if (canvasWidth > canvasHeight) {
        for (let i = 0; i < smallCircles.length; i++) {
            smallCircles[i].style.width = canvasWidth * 0.05 + "px";
            smallCircles[i].style.height = canvasWidth * 0.05 + "px";
        }
    }

    // set the position on circle-1 using px based on window size;
    let top = canvasWidth * 0.01;
    let left = canvasWidth * 0.04;
    const circle1 = document.getElementById("circle-1");
    circle1.style.top = top + "px";
    circle1.style.left = left + "px";

    // set the position on circle-2 using px based on window size;
    top = canvasWidth * 0.04;
    let right = canvasWidth * 0.04;
    const circle2 = document.getElementById("circle-2");
    circle2.style.top = top + "px";
    circle2.style.right = right + "px";

    // set the position on circle-3 using px based on window size;
    right = canvasWidth * 0.04;
    let bottom = canvasWidth * 0.008;
    const circle3 = document.getElementById("circle-3");
    circle3.style.bottom = -bottom + "px";
    circle3.style.left = left + "px";

    // set the position on circle-4 using px based on window size;
    right = canvasWidth * 0.056;
    bottom = canvasWidth * 0.055;
    const circle4 = document.getElementById("circle-4");
    circle4.style.bottom = -bottom + "px";
    circle4.style.right = -right + "px";

    // set the position on circle-5 using px based on window size;
    top = canvasWidth * 0.025;
    left = canvasWidth * 0.05;
    const circle5 = document.getElementById("circle-5");
    circle5.style.top = top + "px";
    circle5.style.left = left + "px";

    // set the position on circle-5 using px based on window size;
    top = canvasWidth * 0.032;
    left = canvasWidth * 0.17;
    const circle6 = document.getElementById("circle-6");
    circle6.style.top = top + "px";
    circle6.style.left = left + "px";

    // set the position for blue people using px based on window size;
    let personOriginalHeight = 127;
    let personOriginalWidth = 60;
    let personHeight = personOriginalHeight * canvasWidth * 0.00055;
    let personWidth = personOriginalWidth * canvasWidth * 0.00055;
    bottom = -5;
    left = 0;

    // Blue person 1
    const person1 = document.getElementById("person-1");
    const imagePerson1 = document.getElementById("image-person-1");
    person1.style.bottom = bottom + "px";
    person1.style.left = left + "px";
    imagePerson1.style.width = personWidth + "px";
    imagePerson1.style.height = personHeight + "px";

    // Blue person 2
    const person2 = document.getElementById("person-2");
    const imagePerson2 = document.getElementById("image-person-2");
    left += personWidth;
    person2.style.bottom = bottom + "px";
    person2.style.left = left + "px";
    imagePerson2.style.width = personWidth + "px";
    imagePerson2.style.height = personHeight + "px";

    // Blue person 3
    const person3 = document.getElementById("person-3");
    const imagePerson3 = document.getElementById("image-person-3");
    left += personWidth;
    person3.style.bottom = bottom + "px";
    person3.style.left = left + "px";
    imagePerson3.style.width = personWidth + "px";
    imagePerson3.style.height = personHeight + "px";

    // Blue person 4
    const person4 = document.getElementById("person-4");
    const imagePerson4 = document.getElementById("image-person-4");
    left += personWidth;
    person4.style.bottom = bottom + "px";
    person4.style.left = left + "px";
    imagePerson4.style.width = personWidth + "px";
    imagePerson4.style.height = personHeight + "px";

    // Blue person 5
    const person5 = document.getElementById("person-5");
    const imagePerson5 = document.getElementById("image-person-5");
    left += personWidth;
    person5.style.bottom = bottom + "px";
    person5.style.left = left + "px";
    imagePerson5.style.width = personWidth + "px";
    imagePerson5.style.height = personHeight + "px";

    // Blue person 6
    const person6 = document.getElementById("person-6");
    const imagePerson6 = document.getElementById("image-person-6");
    left += personWidth;
    person6.style.bottom = bottom + "px";
    person6.style.left = left + "px";
    imagePerson6.style.width = personWidth + "px";
    imagePerson6.style.height = personHeight + "px";

    // Blue person 7
    const person7 = document.getElementById("person-7");
    const imagePerson7 = document.getElementById("image-person-7");
    left += personWidth;
    person7.style.bottom = bottom + "px";
    person7.style.left = left + "px";
    imagePerson7.style.width = personWidth + "px";
    imagePerson7.style.height = personHeight + "px";

    // Blue person 8
    const person8 = document.getElementById("person-8");
    const imagePerson8 = document.getElementById("image-person-8");
    left += personWidth;
    person8.style.bottom = bottom + "px";
    person8.style.left = left + "px";
    imagePerson8.style.width = personWidth + "px";
    imagePerson8.style.height = personHeight + "px";

    // Blue person 9
    const person9 = document.getElementById("person-9");
    const imagePerson9 = document.getElementById("image-person-9");
    left += personWidth;
    person9.style.bottom = bottom + "px";
    person9.style.left = left + "px";
    imagePerson9.style.width = personWidth + "px";
    imagePerson9.style.height = personHeight + "px";

    // Blue person 10
    const person10 = document.getElementById("person-10");
    const imagePerson10 = document.getElementById("image-person-10");
    left += personWidth;
    person10.style.bottom = bottom + "px";
    person10.style.left = left + "px";
    imagePerson10.style.width = personWidth + "px";
    imagePerson10.style.height = personHeight + "px";

    // set the position for gray people using px based on window size;
    personOriginalHeight = 127;
    personOriginalWidth = 63;
    personHeight = personOriginalHeight * canvasWidth * 0.00055;
    personWidth = personOriginalWidth * canvasWidth * 0.00055;

    // Gray person 1
    const person11 = document.getElementById("person-11");
    const imagePerson11 = document.getElementById("image-person-11");
    left += personWidth;
    person11.style.bottom = bottom + "px";
    person11.style.left = left + "px";
    imagePerson11.style.width = personWidth + "px";
    imagePerson11.style.height = personHeight + "px";

    // Gray person 2
    const person12 = document.getElementById("person-12");
    const imagePerson12 = document.getElementById("image-person-12");
    left += personWidth;
    person12.style.bottom = bottom + "px";
    person12.style.left = left + "px";
    imagePerson12.style.width = personWidth + "px";
    imagePerson12.style.height = personHeight + "px";

    // Gray person 3
    const person13 = document.getElementById("person-13");
    const imagePerson13 = document.getElementById("image-person-13");
    left += personWidth;
    person13.style.bottom = bottom + "px";
    person13.style.left = left + "px";
    imagePerson13.style.width = personWidth + "px";
    imagePerson13.style.height = personHeight + "px";

    // Gray person 4
    const person14 = document.getElementById("person-14");
    const imagePerson14 = document.getElementById("image-person-14");
    left += personWidth;
    person14.style.bottom = bottom + "px";
    person14.style.left = left + "px";
    imagePerson14.style.width = personWidth + "px";
    imagePerson14.style.height = personHeight + "px";

    // set the position for triangle-1 using px based on window size;
    borderLeftRight = canvasWidth * 0.15;
    borderBottom = canvasWidth * 0.39;
    right = canvasWidth * 0.17;
    const triangle1 = document.getElementById("triangle-1");
    triangle1.style.borderLeft = borderLeftRight + "px solid transparent";
    triangle1.style.borderRight = borderLeftRight + "px solid transparent";
    triangle1.style.borderBottom = borderBottom + "px solid green";
    triangle1.style.right = right + "px";

    // set the position for triangle-2 using px based on window size;
    borderLeftRight = canvasWidth * 0.15;
    borderBottom = canvasWidth * 0.3;
    right = 0;
    const triangle2 = document.getElementById("triangle-2");
    triangle2.style.borderLeft = borderLeftRight + "px solid transparent";
    triangle2.style.borderRight = borderLeftRight + "px solid transparent";
    triangle2.style.borderBottom = borderBottom + "px solid rgb(157, 241, 157)";
    triangle2.style.right = right + "px";
}

window.addEventListener("resize", paintPicasso);
