const allBtn = document.getElementsByClassName('btn-cart');

let count = 0;

for (const btn of allBtn) {
    btn.addEventListener('click', function(event){
        count += 1;

        const placeName = event.target.parentNode.childNodes[1].innerText;

        const price = event.target.parentNode.childNodes[3].childNodes[1].innerText

        const selectedContainer = document.getElementById('selected-place-container');

        const li = document.createElement('li');
        const p = document.createElement('p');
        p.innerText = placeName;
        const p2 = document.createElement('p');
        p2.innerText = price;
        li.appendChild(p);
        li.appendChild(p2);
        selectedContainer.appendChild(li);


        setInnerText('cart-count', count);
    });
};


function setInnerText(elementId, value){
    document.getElementById(elementId).innerText = value;
};