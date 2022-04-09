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

const headers = ['name', 'price', 'description', 'itemsAvailable'];

const table = document.createElement('table');
table.id = 'table';
document.body.appendChild(table);


    const tableHeader = document.createElement('thead');
    tableHeader.id = 'tableHead';
    table.appendChild(tableHeader);
    const tableRow = document.createElement('tr');
    tableHeader.appendChild(tableRow);
    const tableHead = document.createElement('th');
    


    for (let i = 0; i < 4; i++) {
        const tableHead = document.createElement('th');
        tableRow.appendChild(tableHead);    
    }

    // for (let i = 0; i < headers.length; i++) {
    //     const tableHeadNode = tableHead.innerText(headers[i])
        
    // }
      

for (let i = 0; i < items.length; i++) {
    const tableRow = document.createElement('tr');
    table.appendChild(tableRow);
    for (let i = 0; i < 4; i++) {
    const tableData = document.createElement('td');
    tableData.id = 'tableData';
    const tableDataNode = document.createTextNode(items[i].name);

    tableData.appendChild(tableDataNode);
    tableRow.appendChild(tableData);
    }
    
}
