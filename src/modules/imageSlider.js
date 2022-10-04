import left from "./imgs/left.svg";
import right from "./imgs/right.svg";
import icon1 from "./imgs/one.jpeg";
import icon2 from "./imgs/two.jpeg";
import icon3 from "./imgs/three.jpeg";

function createSlider(){
    let container = document.createElement('div');
    container.classList.add('img-container');
    container.append(createImg(left, "left"));
    let imgs = [icon1, icon2, icon3];
    for(let i = 0; i < imgs.length ; i++){
        container.append(createImg(imgs[i]));
    }
    container.append(createImg(right, "right"));
    document.body.append(container);
}

function createImg(img, className = "img"){
    let image = document.createElement("img");
    image.src = img;
    image.classList.add(className);
    return image;
}


export default createSlider;