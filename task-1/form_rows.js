function main() {

        const button = document.getElementById("add_row");
    button.addEventListener('click', function (event) {
        const container = document.querySelector('.container');
        const label = document.getElementsByTagName('label');



        const labelParam = label[label.length - 1].getAttribute('for');
        console.log("labelParam: " + labelParam);
        const separatorIndex = labelParam.indexOf('_');
        const labelParamLastID = labelParam.slice(separatorIndex + 1, labelParam.length);

        console.log("lastid:" + labelParamLastID);


        const idToBeInserted = parseInt(labelParamLastID) + 1;
        console.log(idToBeInserted)
        const formAdder = document.createElement("FORM");
        formAdder.setAttribute("method", "GET");
        console.log(formAdder);
        const labelAdder = document.createElement("LABEL");
        labelAdder.setAttribute("for", "item_" + idToBeInserted);
        labelAdder.innerText = "Item " + idToBeInserted + ":";
        const inputAdder = document.createElement("INPUT");

        inputAdder.setAttribute("type", "text");
        inputAdder.setAttribute("name", "item_" + idToBeInserted);
        inputAdder.setAttribute("id", "item_" + idToBeInserted);

        const brAdderTop = document.createElement("BR");
        const brAdderBottom = document.createElement("BR");

        formAdder.appendChild(brAdderTop);
        formAdder.appendChild(labelAdder);
        formAdder.appendChild(inputAdder);
        formAdder.appendChild(brAdderBottom);
        container.appendChild(formAdder);
    });



}

main();