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




 

    // for (let i = 0; i < headers.length; i++) {
    //     const tableHeadNode = tableHead.innerText(headers[i])
        
    // }
      

for (let i = 0; i < items.length; i++) {
    const tableRow = document.createElement('tr');
    table.appendChild(tableRow);
    
    const tableData = document.createElement('td');
    tableData.id = 'tableData';
    
        const tableDataNodeName = document.createTextNode(items[i].name);
        tableData.appendChild(tableDataNodeName);
        
    
        const tableDataNodePrice = document.createTextNode(items[i].price);
         tableData.appendChild(tableDataNodePrice);

         const tableDataNodeDescription = document.createTextNode(items[i].description);
         tableData.appendChild(tableDataNodeDescription);

         const tableDataNodeitemsAvailable = document.createTextNode(items[i].itemsAvailable);
         tableData.appendChild(tableDataNodeitemsAvailable);
     tableRow.appendChild(tableData);  
}