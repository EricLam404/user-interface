import icon1 from "./imgs/one.jpeg";
import icon2 from "./imgs/two.jpeg";
import icon3 from "./imgs/three.jpeg";

function createSlider(){
    let imgs = [icon1, icon2, icon3];
    for(let i = 0; i < imgs.length ; i++){
        document.body.append(createImg(imgs[i]));
    }
}

function createImg(img){
    let image = document.createElement("img");
    image.src = img;
    return image;
}
export default createSlider;