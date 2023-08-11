function calcArea () {
    var width = parseFloat(document.getElementById('width').value);
    var length = parseFloat(document.getElementById('length').value);

    if(!isNaN(width) && !isNaN(length)) {
        var area = width * length;
        document.getElementById('result').innerHTML=`Area: ${area}`;
    } else {
        document.getElementById('result').innerHTML= 'Please enter valid width and length values'
    }
}