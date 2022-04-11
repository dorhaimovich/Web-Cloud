addSquares=() => {

    const main = document.getElementById("main-layout3");
    for (let i = 0; i < 10; i++) {
        const square = document.createElement("div");
        main.appendChild(square);
        for (let i = 0; i < 4; i++) {
            const miniSquare = document.createElement("div");
            miniSquare.setAttribute('id', 'square' + ((i % 4) + 1));
            miniSquare.setAttribute('onclick', 'colorFill(this)');
            square.appendChild(miniSquare);
        }
    }
}

numberRollet=() => {
    let myDiv = document.getElementById("main-layout3").getElementsByTagName("div")[4];
    if (myDiv.childNodes.length == 0) {
        const num = (Math.round(Math.random() * 100) % 100) + 1;
        let pElement = document.createElement("p");
        let button = document.createElement("button");
        let upperDiv = document.getElementById("main-layout3").getElementsByTagName("div")[2];
        pElement.innerHTML = num;
        myDiv.appendChild(pElement);
        
        button.innerHTML = 'Reset';
        button.setAttribute('onclick', 'reset()');
        upperDiv.style.opacity = '90%';
        upperDiv.appendChild(button);
    }
    else {
        let x = parseInt((myDiv.childNodes[0].innerHTML)) *2;
        if(x > 1000)
        {
            myDiv.childNodes[0].innerHTML = 1000;
            myDiv.style.backgroundColor = 'gold';
        }
        else
            myDiv.childNodes[0].innerHTML = x;
    }   
}

reset=() => {
    let myDiv = document.getElementById("main-layout3").getElementsByTagName("div")[4];
    let upperDiv = document.getElementById("main-layout3").getElementsByTagName("div")[2];
    console.log(myDiv);
    myDiv.style.backgroundColor = 'white';
    upperDiv.style.opacity = '50%';
    upperDiv.removeChild(upperDiv.lastElementChild);
    myDiv.removeChild(myDiv.lastElementChild);

}

colorFill = (e) => {
    if (e.style.backgroundColor === "rgb(204, 74, 72)") {
        e.style.backgroundColor = e.prevBackColor;
    }
    else {
        e.prevBackColor = e.style.backgroundColor;
        e.style.backgroundColor = "#CC4A48";
    }
}
