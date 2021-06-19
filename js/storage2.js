let textarea = document.getElementById('textarea');
let arrowLeft = document.getElementById('arrowLeft');
let arrowRight = document.getElementById('arrowRight');
let saveText = document.getElementById('saveText');


saveText.addEventListener('click', function() {
    document.getElementById('output').innerHTML += document.getElementById('textarea').value;
	localStorage.setItem(localStorage.length + 1, textarea.value);
    document.getElementById('output').innerHTML = '';		
});


arrowLeft.addEventListener('click', function() {
    let result1 = Object.values(localStorage);    
    let output1 = document.getElementById('output');
    let index1 = output1.getAttribute("data-index") || 0;
    output1.innerHTML = result1[index1];
    index1++;
    index1 = result1[index1] ? index1 : 0;
    output1.setAttribute("data-index", index1); 
});


arrowRight.addEventListener('click', function() {
    let result2 = Object.values(localStorage);    
    let output2 = document.getElementById('output');
    let index2 = output2.getAttribute("data-index") || 0;
    output2.innerHTML = result2[index2];
    index2++;
    index2 = result2[index2] ? index2 : 0;
    output2.setAttribute("data-index", index2);    
});