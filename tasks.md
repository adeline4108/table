1) поправь форматирование функции createTable


2) const td1 = document.createElement('td');
        const tableDataNodeName = document.createTextNode(items[i].name);
        td1.appendChild(tableDataNodeName);
        tableRow.appendChild(td1);

это повторяется 4 раза - лучше в таком случае сделать функцию, что то типа createCell

3) я бы еще сделал функцию createTableHeaders и createTableRows