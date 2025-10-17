// Fügt aktuelles Jahr im Footer ein
document.getElementById('year').textContent = new Date().getFullYear();

// PayPal.me-Name
const PAYPAL_ME_NAME = "alexanderonitiu172";

// Buttons automatisch verlinken
document.querySelectorAll('.btn.pay').forEach(btn => {
  const amount = btn.dataset.amount;
  btn.href = `https://www.paypal.me/${PAYPAL_ME_NAME}/${amount}`;
});
