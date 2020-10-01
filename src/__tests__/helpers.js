/*
    Gunakan file ini untuk membuat test case dengan Jest
*/

const { incrementQty, decrementQty, mulSubTotal, codeDisc } = require("../helpers")

test('Qty 1 ditambah 1 hasilnya 2', () =>{
    expect(incrementQty(1)).toBe(2);
});

test('Qty "1" ditambah 1 hasilnya 2', () =>{
    expect(incrementQty("1")).toBe(2);
});

test('Qty 2 dikurangi 1 hasilnya 1', () =>{
    expect(decrementQty(2)).toBe(1);
});

test('Qty "2" dikurangi 1 hasilnya 1', () =>{
    expect(decrementQty("2")).toBe(1);
});

test('subTotal 1000 dikali 2 haasilnya 2000', () =>{
    expect(mulSubTotal(1000, 2)).toBe(2000);
});

test('qty 2 dengan harga 50000 dan kode diskon PROMO30 hasilnya 70000', () =>{
    expect(codeDisc(50000, 2, "PROMO30")).toBe(70000);
});

test('qty 2 dengan harga 50000 dan kode diskon kosong hasilnya 100000', () =>{
    expect(codeDisc(50000, 2, "")).toBe(100000);
});

test('qty 2 dengan harga 50000 dan kode diskon keliru hasilnya 100000', () =>{
    expect(codeDisc(50000, 2, "PROMO20")).toBe(100000);
});