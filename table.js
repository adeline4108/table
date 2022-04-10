const items = [
    {
        name: 'shovel',
        price: 15,
        description: 'to dig',
        itemsAvailable: 10
    },
    {
        name: 'hammer',
        price: 10,
        description: 'to nail',
        itemsAvailable: 5 
    },
    {
        name: 'pickaxe',
        price: 20,
        description: 'to break stones',
        itemsAvailable: 4
    },
    {
        name: 'sword',
        price: 100,
        description: 'to attack and defend',
        itemsAvailable: 50 
    }
]


function createTable(){
const table = document.createElement('table');
table.id = 'table';
document.body.appendChild(table);


    const tableHeader = document.createElement('thead');
    tableHeader.id = 'tableHead';
    table.appendChild(tableHeader);
    const tableRow = document.createElement('tr');
    tableHeader.appendChild(tableRow);
    const tableHead = document.createElement('th');


    const headers = ['name', 'price', 'description', 'itemsAvailable'];
for (let i = 0; i < headers.length; i++) {
    const tableHead = document.createElement('th');
    const headerNode = document.createTextNode(headers[i]);
    tableHead.appendChild(headerNode);
    tableRow.appendChild(tableHead);
}


for (let i = 0; i < items.length; i++) {
    const tableRow = document.createElement('tr');
    table.appendChild(tableRow);
    
        const td1 = document.createElement('td');
        const tableDataNodeName = document.createTextNode(items[i].name);
        td1.appendChild(tableDataNodeName);
        tableRow.appendChild(td1);
        
      
        const td2 = document.createElement('td');
        const tableDataNodePrice = document.createTextNode(`${items[i].price}$`);
        td2.appendChild(tableDataNodePrice);
        tableRow.appendChild(td2);

        const td3 = document.createElement('td');
        const tableDataNodeDescription = document.createTextNode(items[i].description);
        td3.appendChild(tableDataNodeDescription);
        tableRow.appendChild(td3);

        const td4 = document.createElement('td');
        const tableDataNodeitemsAvailable = document.createTextNode(items[i].itemsAvailable);
        td4.appendChild(tableDataNodeitemsAvailable);
        tableRow.appendChild(td4);
  
}
}

createTable();

function addElement(params) {
    
}

function deleteElement(params) {
    
}

function editElement(params) {
    
}
