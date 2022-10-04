import left from "./imgs/left.svg";
import right from "./imgs/right.svg";
import icon1 from "./imgs/one.jpeg";
import icon2 from "./imgs/two.jpeg";
import icon3 from "./imgs/three.jpeg";

let index = 0;
let imgs = [icon1, icon2, icon3];

function createSlider(){
    let container = document.createElement('div');
    container.classList.add('img-container');
    container.append(createImg(left, "left"));

    container.append(showslides(index));

    container.append(createImg(right, "right"));
    document.body.append(container);
}

function createImg(img, className = "img"){
    let image = document.createElement("img");
    image.src = img;
    image.classList.add(className);
    if(className === "left"){
        image.addEventListener("click", (e) => {
            index--;
            showslides(index);
        });
    }

    if(className === "right"){
        image.addEventListener("click", (e) => {
            index++;
            showslides(index);
        });
    }
    return image;
}

function showslides(i){
    if(i <= -1){
        index = imgs.length - 1;
    }
    else if(i >= imgs.length){
        index = 0;
    }
    let container = document.querySelector('.img-container');
    if(container){
        let img = document.querySelector(".img");
        let right = document.querySelector(".right");
        container.removeChild(img);
        container.insertBefore(createImg(imgs[index]), right);
    }
    return createImg(imgs[index]);
}


export default createSlider;