const allBtn = document.getElementsByClassName('btn-cart');

let count = 0;

for (const btn of allBtn) {
    btn.addEventListener('click', function (event) {
        count += 1;

        const placeName = event.target.parentNode.childNodes[1].innerText;

        const price = event.target.parentNode.childNodes[3].childNodes[1].innerText

        const selectedContainer = document.getElementById('selected-place-container');

        const li = document.createElement('li');
        const p = document.createElement('p');
        p.innerText = placeName;
        const p2 = document.createElement('p');

        event.target.parentNode.parentNode.style.backgroundColor = 'aqua';

        p2.innerText = price;
        li.appendChild(p);
        li.appendChild(p2);

        const budget = document.getElementById('budget').innerText;
        const convertedBudget = parseInt(budget);
        if(convertedBudget - parseInt(price) < 0){
            alert("low budget, Please earn more!");
            return;
        }

        document.getElementById('budget').innerText = convertedBudget - parseInt(price);
        

        selectedContainer.appendChild(li);

        totalCost('total-cost', parseInt(price));

        grandTotalCost('grand-total', parseInt(price));


        setInnerText('cart-count', count);
    });
};


function totalCost(elementId, value) {
    const totalCost = document.getElementById(elementId).innerText;
    const convertedTotalCost = parseInt(totalCost);
    const sum = convertedTotalCost + parseInt(value);
    setInnerText('total-cost', sum);
}

function grandTotalCost(category) {
    const totalCost = document.getElementById('total-cost').innerText;
    const convertedTotalCost = parseInt(totalCost);

    if (category === 'bus') {
        setInnerText('grand-total', convertedTotalCost + 100);
    }
    else if (category === 'train') {
        setInnerText('grand-total', convertedTotalCost - 200);
    }
    else if (category === 'flight') {
        setInnerText('grand-total', convertedTotalCost + 500);
    }
    else {
        setInnerText('grand-total', convertedTotalCost);
    }
};


function setInnerText(elementId, value) {
    document.getElementById(elementId).innerText = value;
};