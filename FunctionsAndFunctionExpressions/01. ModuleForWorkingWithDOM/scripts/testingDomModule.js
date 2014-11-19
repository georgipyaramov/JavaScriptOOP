var someLink = document.createElement('a'),
    someText = document.createElement('span');

someLink.setAttribute('href', '#');
someLink.innerText = 'Some link';
someText.innerText = 'Some text ';

domModule.appendChild(someLink, 'body');

domModule.addHandler('.someClass', 'click', function(){
    alert('Clicked!');
});

//This will append "some text" only 100 times. If the loop is ran another 90 times, then will be appended
//another 100 "some text".
for (var i = 0; i < 110; i++) {
    domModule.appendToBuffer('.buffer-test', someText.cloneNode(true));
}

//Uncomment to test it.
//domModule.removeChild('body', 'a');
