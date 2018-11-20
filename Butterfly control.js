test_id = 0;
//Выделение объектов подсветкой 
var listOption = document.getElementById('menu');
listOption.onclick = function(event) {
    target = event.target;

    if (target.tagName != 'P') return;
    target.style.backgroundColor = '#74dfff';
    test_id = 1;
};

function movingTables() {
    //Проверка на нажатие кнопок
    if (test_id === 0) {
        alert('Элемент не выбран');
        return;
    }
    if (target.tagName != 'P') return;
    var elem = target;
    elem.style.backgroundColor = 'transparent';
    parentElemGlobal.appendChild(elem);
    test_id = 0;
}

function moveAllTablesGoSelected() {
    for (var i = 0; i < 5; i++) {
        elemGlobal = document.querySelector('p');
        elemGlobal.style.backgroundColor = 'transparent';
        parentElemButton.appendChild(elemGlobal);
    }
}

function moveAllTablesGoAvailable() {
    var parent_table = document.getElementById('TableMenuSelected');
    for (var i = 0; i < 5; i++) {
        elemGlobal = parent_table.querySelector('p');
        if (elemGlobal === null) {
            return;
        }
        elemGlobal.style.backgroundColor = 'transparent';
        parentElemButton.appendChild(elemGlobal);
    }
}

//Перетаскивание объектов
var listButton = document.getElementById('MenuButton');
listButton.onclick = function(event) {
    var target = event.target;
    if (target.tagName != 'BUTTON') return;

    if (target.id === 'button_1') {
        parentElemButton = document.getElementById('TableMenuSelected');
        moveAllTablesGoSelected();
    } else if (target.id === 'button_2') {
        parentElemGlobal = document.getElementById('TableMenuSelected');
        movingTables();
    } else if (target.id === 'button_3') {
        parentElemGlobal = document.getElementById('TableMenuAvailable');
        movingTables();
    } else if (target.id === 'button_4') {
        parentElemButton = document.getElementById('TableMenuAvailable');
        moveAllTablesGoAvailable();
    }
}