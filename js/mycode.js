function disTourPoint(){
    var price = document.querySelector('#tour').value;
    var tourPoint = document.querySelector('.tour__point');
    tourPoint.innerHTML = `${price}$/Person`
}




function CalTotal(){
    var amount = 0;
    var amountText = document.querySelector('.price');
    var price = document.querySelector('#tour').value;
    var nop = document.querySelector('#nop').value;
    amount = price * nop;

    amountText.innerHTML = `Total amount : ${amount}$`;
}

