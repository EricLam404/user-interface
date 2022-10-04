//Drop-down menus
function createMenu(){
    document.body.append(createNavBar(["Home"]));
    add_not_clicked();
}

function createNavBar(elements){
    const bar = document.createElement('div');
    bar.classList.add('navbar');

    for(let i = 0; i < elements.length; i++){
        let element = document.createElement('a');
        element.classList.add(elements[i]);
        element.textContent = elements[i];
        element.append(dropdown(["Home", "About", "Contact"]));
        element.addEventListener('click', () => {
            element.lastChild.classList.toggle("show");
        });
        bar.append(element);
    }
    return bar;
}

function dropdown(elements){
    const content = document.createElement('div');
    content.classList.add("dropdown-content");

    for(let i = 0; i < elements.length; i++){
        let element = document.createElement('div');
        element.classList.add(elements[i]);
        element.textContent = elements[i];
        content.append(element);
    }

    return content;
}

function add_not_clicked(){
    window.addEventListener("click", (e) => {
        if (!e.target.matches('.Home')) {
          var dropdown = document.querySelector(".dropdown-content");
          dropdown.classList.remove('show');
        }
      });
}

export default createMenu;