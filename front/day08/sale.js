function calc(){
    const price = document.getElementById("price").value;
    const discount = document.getElementById("discount").value;
    let sale = price * (100-discount)/100

    const result = document.getElementById("result");
    result.innerHTML = "상품의 원래가격" + price + "할인된금액" + price*discount/100 + "구매가격" + sale + "입니다."
}