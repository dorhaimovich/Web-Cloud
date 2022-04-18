
checkBoxCount = () => {
    var checkBoxList = document.getElementsByTagName("input");
    console.log(checkBoxList);
    let counter = 0;
    let firstCheckBox = document.getElementById("flexCheck1");
    for (let i = 0; i < checkBoxList.length; i++) {
        if (checkBoxList[i].type.toLowerCase() === "checkbox" && checkBoxList[i].checked) {
            counter = counter + 1;
            console.log(checkBoxList[i]);
        }
        
    }
    if (counter < 2) {
        firstCheckBox.setCustomValidity("You must choose at least 2 interests.");
    }
    else
    {
        firstCheckBox.setCustomValidity("");
    }
}
