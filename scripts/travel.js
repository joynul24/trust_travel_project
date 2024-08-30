const allBtn = document.getElementsByClassName('btn-cart');

let count = 0;

for (const btn of allBtn) {
    btn.addEventListener('click', function(event){
        count += 1;
        document.getElementById('cart-count').innerText = count;
    });
};

function setInnerText(elementId, value){
    document.getElementById(elementId).innerText = value;
}