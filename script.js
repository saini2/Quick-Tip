function update(){
    let bill = document.getElementById('money').value > 0 ? document.getElementById('money').value : 0;
    let selecttip = document.getElementById('myRange').value;
    let splitperson = document.getElementById('myRange2').value;
    let tip = (bill * selecttip)/100;
    let total = tip + parseInt(bill);
    let billeach = total/splitperson;
    let tipeach = tip/splitperson;
    document.getElementById('demo').innerHTML = selecttip +'%';
    document.getElementById('tipno').innerHTML = tip;
    document.getElementById('total').innerHTML = total;
    document.getElementById('people').innerHTML = splitperson;
    document.getElementById('billeach').innerHTML = billeach;
    document.getElementById('tipeach').innerHTML = tipeach;
}
let container = document.getElementById('container');
container.addEventListener('input',update);