import { 
  incrementQty, 
  decrementQty,
  mulSubTotal,
  codeDisc
} from './helpers.js';

const incrButton = document.querySelector('#incr');
const decrButton = document.querySelector('#decr');
const confButton = document.querySelector('#confirmButton');
const qtyInput = document.querySelector('#qty');
const price = document.querySelector('#price');
const subTotal = document.querySelector('#subtotal');
const kode = document.querySelector('#code');
const bayar = document.querySelector('#byr');

incrButton.addEventListener('click', () => {
  qtyInput.value = incrementQty(qtyInput.value);
  subTotal.textContent = `Rp. ${mulSubTotal(price.value, qtyInput.value)}`;
});

decrButton.addEventListener('click', () => {
  if(qtyInput.value < 2){
    qtyInput.value = 1;
  }else{
    qtyInput.value = decrementQty(qtyInput.value);
  }
  subTotal.textContent = `Rp. ${mulSubTotal(price.value, qtyInput.value)}`;
});

confButton.addEventListener('click', () =>{
  subTotal.textContent = `Rp. ${codeDisc(price.value, qtyInput.value, kode.value)}`;  
});

