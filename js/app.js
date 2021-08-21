
//memory buttons handle function

function memory(memorySixteen){
    const memoryCost = document.getElementById('extraMemoryPrice');
    if(memorySixteen == true){
        memoryCost.innerText = parseFloat(180);
    }
    else if(memorySixteen == false){
        memoryCost.innerText = parseFloat(0);
    }

}


//storage buttons handle function
function storage(SSD){
    const storageCost = document.getElementById('extraStorageCost');
    if(SSD == true){
        storageCost.innerText = parseFloat(180);
    }
    else if(SSD == false){
        storageCost.innerText = parseFloat(100);
    }
    else{
        storageCost.innerText = parseFloat(0);
    }
}

//delivery charge handle function
function delivery(deliveryCharge){
    const deliveryCost = document.getElementById('delivery-cost');
    if(deliveryCharge == true){
        deliveryCost.innerText = parseFloat(20);
    }
    else if(deliveryCharge == false){
        deliveryCost.innerText = parseFloat(0);
    }
}

//total price handle
function total(){
    const bestPrice = document.getElementById('best-price').innerText;
    const memory = document.getElementById('extraMemoryPrice').innerText;
    const storage = document.getElementById('extraStorageCost').innerText;
    const delivery = document.getElementById('delivery-cost').innerText;
     
    const totalPrice = parseFloat(bestPrice) + parseFloat(memory) + parseFloat(storage) + parseFloat(delivery);

    document.getElementById('total-price').innerText = totalPrice;
    document.getElementById('final-price').innerText = totalPrice ;


}


//update total price

document.getElementById('apply').addEventListener("click", function () {
    const promoCodeField = document.getElementById('input');
    const finalPrice = document.getElementById('final-price');
    const totalCost = document.getElementById('total-price').innerText;
    const totalPrice = parseInt(totalCost);
    if(promoCodeField.value == 'stevekaku'){
        finalPrice.innerText = (totalPrice - (totalPrice*0.2));
    }
    
    else{
        alert('Please enter valid promo code to get 20% discount ');
        finalPrice.innerText = totalPrice;
    }
    
    promoCodeField.value ='';

});


document.getElementById('sixteenGBMemory').addEventListener('click',function(){
   memory(true);
   total();
});


document.getElementById('eightGBMemory').addEventListener('click',function(){

    memory(false);
    total();
});


document.getElementById('twoFiftySix').addEventListener('click',function(){
    storage();
    total();
});


document.getElementById('fiveTwelve').addEventListener('click',function(){
    storage(false);
    total();
});


document.getElementById('oneTeraBite').addEventListener('click',function(){
    storage(true);
    total();
});


document.getElementById('delivery-zero').addEventListener('click',function(){
    delivery(false);
    total();
});


document.getElementById('delivery-twenty').addEventListener('click',function(){
    delivery(true);
    total();
});

