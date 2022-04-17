export const items = [
    {
        name: 'shovel',
        price: '15$',
        description: 'to dig',
        itemsAvailable: 10,
    },
    {
        name: 'hammer',
        price: '15$',
        description: 'to nail',
        itemsAvailable: 5 ,
    },
    {
        name: 'pickaxe',
        price: '15$',
        description: 'to break stones',
        itemsAvailable: 4,
    },
    {
        name: 'sword',
        price: '15$',
        description: 'to attack and defend',
        itemsAvailable: 50 ,
    }
]

export const table = document.createElement('table');

function createTableHeader() {
    document.body.appendChild(table);


    const tableHeader = document.createElement('thead');
    table.appendChild(tableHeader);

    const tableRow = document.createElement('tr');
    tableHeader.appendChild(tableRow);


    const headers = Object.keys(items[0]);

    for (let i = 0; i < headers.length; i++) {
        const tableHead = document.createElement('th');
        const headerNode = document.createTextNode(headers[i]);
        tableHead.appendChild(headerNode);
        tableRow.appendChild(tableHead);
    }

    return headers;
}

export function createTable() {
    const headers =  createTableHeader();

    for (let i = 0; i < items.length; i++) {
        const tableRow = document.createElement('tr');
        table.appendChild(tableRow);

        headers.forEach(header => {
            const td = document.createElement('td');
            const name = document.createTextNode(items[i][header]);

            td.appendChild(name);

            tableRow.appendChild(td);
        })
    }
}



function addElement(params) {
    
}

function deleteElement(params) {
    
}

function editElement(params) {
    
}
