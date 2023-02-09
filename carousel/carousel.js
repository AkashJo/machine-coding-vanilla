
const data = [
    { id: 1,link: 'https://sadanandpai.github.io/frontend-mini-challenges/src/mc/carousel/images/1.jpg' , imageName: 'earphone'}, 
    { id: 2, link: 'https://sadanandpai.github.io/frontend-mini-challenges/src/mc/carousel/images/2.jpg', imageName: 'earphone' },
    { id: 3, link: 'https://sadanandpai.github.io/frontend-mini-challenges/src/mc/carousel/images/3.jpg', imageName: 'bag' },
    { id: 4, link: 'https://sadanandpai.github.io/frontend-mini-challenges/src/mc/carousel/images/4.jpg', imageName: 'mouse' },
    { id: 5, link: 'https://sadanandpai.github.io/frontend-mini-challenges/src/mc/carousel/images/5.jpg', imageName: 'laptop' }
];

var trackCurrentElement = 0;
var carouselImage = document.getElementById("images")

let interval = 0;

interval = setInterval(handleRightClick,2000);

function onFirstLoad() {
    carouselImage.src = data[trackCurrentElement].link;
    

    for(let i=0 ; i<data.length ; i++) {
        const node = document.createElement("button");
        node.addEventListener('click',()=>{
            console.log(i);
            handleDotClick(i);
        })
        const textnode = document.createTextNode("○");
        node.setAttribute("id",`button-${i}`)
        node.appendChild(textnode);
        document.getElementById("dot-container").appendChild(node);
    }

    document.getElementById(`button-${trackCurrentElement}`).innerText = "◉";
}

onFirstLoad();

function handleDotClick(id) {

    carouselImage.src = data[id].link;
    document.getElementById(`button-${trackCurrentElement}`).innerText = "○";
    trackCurrentElement = id;
    document.getElementById(`button-${id}`).innerText = "◉";

}

function handleLeftClick() {

    let previous ;

    if(trackCurrentElement-1 < 0) {
        previous = data.length - 1;
    } else {
        previous = trackCurrentElement - 1;
    }

    handleDotClick(previous)
}

function handleRightClick() {

    let next ;

    if(trackCurrentElement+1 >= data.length) {
        next = 0 ;
    } else {
        next = trackCurrentElement + 1;
    }

    handleDotClick(next)

}



