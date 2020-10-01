const incrementQty = (qty) => parseInt(qty) + 1;
const decrementQty = (qty) => parseInt(qty) - 1;
const mulSubTotal = (price, Qty) =>  price * Qty;
const codeDisc = (price, qty, code) =>{
    code = code.toUpperCase();
    if (code == 'PROMO30') {
        return (1 - parseFloat(30/100))*price*qty
    }
    else{
        return price * qty
    }
}

module.exports = { 
    incrementQty, 
    decrementQty,
    mulSubTotal,
    codeDisc
};
