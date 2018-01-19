function createTableHeader(tableId) {
    var tableHeaderRow = document.createElement('tr');
    var th1 = document.createElement('th');
    var th2 = document.createElement('th');
    var th3 = document.createElement('th');
    var th4 = document.createElement('th');
    th1.appendChild(document.createTextNode('Product Id'));
    th2.appendChild(document.createTextNode('Type'));
    th3.appendChild(document.createTextNode('Price'));
    th4.appendChild(document.createTextNode('Examine'));
    tableHeaderRow.appendChild(th1);
    tableHeaderRow.appendChild(th2);
    tableHeaderRow.appendChild(th3);
    tableHeaderRow.appendChild(th4);
    document.getElementById(tableId).appendChild(tableHeaderRow);
};
function updateTable(tableId, productArray) {
    var tableBody = document.getElementById(tableId);
    //reset table
    while (tableBody.hasChildNodes()) {
        tableBody.removeChild(tableBody.firstChild);
    }
    //create table header
    createTableHeader(tableId);
    //populate table rows
    for (i = 0; i < productArray.length; i++) {
        var tr = document.createElement('TR');
        var td1 = document.createElement('TD');
        var td2 = document.createElement('TD');
        var td3 = document.createElement('TD');
        var td4 = document.createElement('button');

        td4.addEventListener('click', function () {

        });
        td1.appendChild(document.createTextNode(productArray[i].id));
        td2.appendChild(document.createTextNode(productArray[i].type));
        td3.appendChild(document.createTextNode(productArray[i].price));
        td4.appendChild(document.createTextNode("Examine"));
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tableBody.appendChild(tr);
    }
}
api.searchAllProducts().then(function (value) {
    updateTable('allTable', value);
});

function updateExaminedText(product) {
    var outputString = "Product Id: " + product.id;
    outputString += "<br> Price: " + product.price;
    outputString += "<br> Type: " + product.type;
    document.getElementById("productText").innerHTML = outputString;
}

function getIntersection(arrA, arrB, currentId) {
    var samePrice = arrA;
    var sameType = arrB;
    var similarArray = [];
    samePrice.forEach(function (obj1) {
        sameType.forEach(function (obj2) {
            if (obj1.id === obj2.id && obj1.id != currentId) {
                similarArray.push(obj1);
            }
        });
    });
}