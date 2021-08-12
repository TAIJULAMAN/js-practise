২. [ ফাংশন নেম দিতে হবে totalSales]: তিনটা প্যারামিটার লাগবে। ভিডিও ভালো করে দেখবে। 

১ টি শার্টের দাম – ১০০ টাকা

১ টি প্যান্টের দাম – ২০০ টাকা 

১ টি জুতার দাম – ৫০০ টাকা 

এখন সে যদি বিভিন্ন সংখ্যার শার্ট, প্যান্ট বা জুতা বিক্রি করে তাহলে টোটাল কত বিক্রি হলো সেই সংখ্যা রিটার্ন করতে হবে। 
//..................................................
// totalSales
//..................................................

function totalSales(tshirtQuantity, pantQuantity, shoeQuantity) {
    if (typeof tshirtQuantity != 'number' && typeof pantQuantity != 'number' && typeof shoeQuantity != 'number') {
        return 'check input';
    }
    let tshirtPrice = 100, pantPrice = 200, shoePrice = 500;
    return answer = tshirtQuantity * tshirtPrice + pantQuantity * pantPrice + shoeQuantity * shoePrice;
}

// output check
//
// let result = totalSales(1, 1, 1);
// console.log(result);