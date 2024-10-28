var totalPrice = function (_a) {
    var price = _a.price, discount = _a.discount, isInstallment = _a.isInstallment, months = _a.months;
    var discountedPrice = price * (1 - discount / 100);
    if (isInstallment && months > 0) {
        return discountedPrice / months;
    }
    return discountedPrice;
};
var price = totalPrice({
    price: 100000,
    discount: 25,
    isInstallment: true,
    months: 12,
});
console.log(price); // 6250
