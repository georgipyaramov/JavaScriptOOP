var domModule = (function(){
    var _allElementsInBuffer = [],
        appendChild,
        removeChild,
        addHandler,
        appendToBuffer;

    appendChild = function (element, selector) {
        var parrentNode = document.querySelector(selector);
        parrentNode.appendChild(element);
    };

    removeChild = function (parrent, child){
        var parrentNode = document.querySelector(parrent),
            childNode = document.querySelector(child);

        parrentNode.removeChild(childNode);
    };

    addHandler = function (selector, eventType, handler){
        var elements = document.querySelectorAll(selector);
        for (var i = 0; i < elements.length; i++) {
            elements[i].addEventListener(eventType, handler);
        }
    };

    appendToBuffer = function(selector, element) {
        if (!_allElementsInBuffer[selector]) {
            _allElementsInBuffer[selector] = document.createDocumentFragment();
        }
        _allElementsInBuffer[selector].appendChild(element);
        if (_allElementsInBuffer[selector].childElementCount >= 100) {
            document.querySelector(selector).appendChild(_allElementsInBuffer[selector]);
        }
    };

    return {
        appendChild : appendChild,
        removeChild : removeChild,
        addHandler : addHandler,
        appendToBuffer : appendToBuffer
    }
}());


