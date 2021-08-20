document.getElementById('sixteenGBMemory').addEventListener('click',function(){
    const memoryCost = document.getElementById('extraMemoryPrice');
    const memoryCostInnertext = memoryCost.innerText;
    memoryCost.innerText = parseInt(180);
});
document.getElementById('eightGBMemory').addEventListener('click',function(){
    const memoryCost = document.getElementById('extraMemoryPrice');
    const memoryCostInnertext = memoryCost.innerText;
    memoryCost.innerText = parseInt(0);
});
document.getElementById('twoFiftySix').addEventListener('click',function(){
    const storageCost = document.getElementById('extraStorageCost');
    const storageCostInnertext = storageCost.innerText;
    storageCost.innerText = parseInt(0);
});
document.getElementById('fiveTwelve').addEventListener('click',function(){
    const storageCost = document.getElementById('extraStorageCost');
    const storageCostInnertext = storageCost.innerText;
    storageCost.innerText = parseInt(100);
});
document.getElementById('oneTeraBite').addEventListener('click',function(){
    const storageCost = document.getElementById('extraStorageCost');
    const storageCostInnertext = storageCost.innerText;
    storageCost.innerText = parseInt(180);
});
document.getElementById('delivery-zero').addEventListener('click',function(){
    const deliveryCost = document.getElementById('delivery-cost');
    const deliveryCostInnertext = deliveryCost.innerText;
    deliveryCost.innerText = parseInt(0);
});
document.getElementById('delivery-twenty').addEventListener('click',function(){
    const deliveryCost = document.getElementById('delivery-cost');
    const deliveryCostInnertext = deliveryCost.innerText;
    deliveryCost.innerText = parseInt(20);
});