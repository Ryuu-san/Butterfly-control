test_id = 0;
//Выделение объектов подсветкой 
var listOption = document.getElementById('menu');
listOption.onclick = function(event) {
    target = event.target;

    if (target.tagName != 'P') return;
    target.style.backgroundColor = '#74dfff';
    test_id = 1;
};

function moveOne() {
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

function moveAll() {
    for (var i = 0; i = parentElem.childNodes.length; i++) {
        elemGlobal = parentElem.querySelector('p');
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
        parentElem = document.getElementById('TableMenuAvailable');
        parentElemButton = document.getElementById('TableMenuSelected');
        moveAll();
    } else if (target.id === 'button_2') {
        parentElemGlobal = document.getElementById('TableMenuSelected');
        moveOne();
    } else if (target.id === 'button_3') {
        parentElemGlobal = document.getElementById('TableMenuAvailable');
        moveOne();
    } else if (target.id === 'button_4') {
        parentElem = document.getElementById('TableMenuSelected');
        parentElemButton = document.getElementById('TableMenuAvailable');
        moveAll();
    }
}
