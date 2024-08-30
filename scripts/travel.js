const allBtn = document.getElementsByClassName('btn-cart');

let count = 0;

for (const btn of allBtn) {
    btn.addEventListener('click', function(event){
        count += 1;

        const placeName = event.target.parentNode.childNodes[1].innerText;

        const price = event.target.parentNode.childNodes[3].childNodes[1].innerText
        console.log()

        setInnerText('cart-count', count);
    });
};


function setInnerText(elementId, value){
    document.getElementById(elementId).innerText = value;
};