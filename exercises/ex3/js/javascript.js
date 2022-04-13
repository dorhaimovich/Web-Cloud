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
        const num = 50;
        let pElement = document.createElement("p");
        pElement.innerHTML = num;
        pElement.style.fontSize = '70px';
        myDiv.appendChild(pElement);
    }
    else {
        let num = parseInt(myDiv.childNodes[0].innerHTML);
        let checker = parseFloat(myDiv.childNodes[0].innerHTML);
        let font = parseInt(myDiv.childNodes[0].style.fontSize) + 10;
        if(checker > 99)
        {
            let resetButton = document.getElementsByClassName("header-layout3")[0].getElementsByTagName("div")[0];
            let button = document.createElement("button");
            document.getElementsByTagName("header")[0].getElementsByTagName("div")[0].firstElementChild.hidden = true;
            myDiv.childNodes[0].innerHTML = 100;
            myDiv.childNodes[0].style.fontSize = font + 10 + 'px';
            myDiv.style.backgroundColor = 'gold';
            button.innerHTML = 'Reset';
            button.setAttribute('onclick', 'reset()');
            resetButton.appendChild(button);
        }
        else
        {
            num += (100 - num)/2;
            myDiv.childNodes[0].innerHTML = num;
            myDiv.childNodes[0].style.fontSize = font + 'px';
        }  
    }   
}

reset=() => {
    let myDiv = document.getElementById("main-layout3").getElementsByTagName("div")[4];
    let resetButton = document.getElementsByClassName("header-layout3")[0].getElementsByTagName("div")[0];
    myDiv.style.backgroundColor = 'white';
    resetButton.removeChild(resetButton.lastElementChild);
    myDiv.removeChild(myDiv.lastElementChild);
    document.getElementsByTagName("header")[0].getElementsByTagName("div")[0].firstElementChild.hidden = false;

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
