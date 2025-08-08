
document.querySelectorAll('.delete-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        const item = this.closest('.cart-item');
        item.remove();
        updateTotal();
    });
});

function updateTotal() {
    const items = document.querySelectorAll('.cart-item');
    let total = 0;

    items.forEach(item => {
        const priceText = item.querySelector('.price')?.innerText || "0";
        const quantity = parseInt(item.querySelector('select:nth-child(2)')?.value || 1);
        const price = parseFloat(priceText.replace(/[^0-9.]/g, ''));

        total += price * quantity;
    });

    document.getElementById('total-amount').innerText = `$${total.toFixed(2)}`;
}

document.querySelectorAll('.styled-select').forEach(select => {
    select.addEventListener('change', updateTotal);
});

// Gọi cập nhật tổng lần đầu
updateTotal();
