class Store {
	constructor(paymentProcessor) {
		this.paymentProcessor = paymentProcessor;
	}

	purchaseBike(quantity) {
		this.paymentProcessor.pay(quantity * 100);
	}

	purchaseHelmet(quantity) {
		this.paymentProcessor.pay(quantity * 20);
	}
}

// Interface
class PaymentProcessor {
	constructor(user) {
		this.user = user;
	}
	pay(amountInDollars) {}
}

class StripePaymentProcessor extends PaymentProcessor {
	constructor(user) {
		super(user);
		this.stripe = new Stripe(user);
	}
	pay(amountInDollars) {
		this.stripe.makePayment(amountInDollars);
	}
}

class PaypalPaymentProcessor extends PaymentProcessor {
	constructor(user) {
		super(user);
		this.paypal = new Paypal(user);
	}
	pay(amountInDollars) {
		this.paypal.makePayment(amountInDollars);
	}
}

class Stripe {
	constructor(user) {
		this.user = user;
	}
	makePayment(amountInDollars) {
		console.log(`${this.user} made payment of $${amountInDollars} with Stripe`);
	}
}

class Paypal {
	constructor(user) {
		this.user = user;
	}
	makePayment(amountInDollars) {
		console.log(`${this.user} made payment of $${amountInDollars} with Paypal`);
	}
}

const store = new Store(new StripePaymentProcessor("Chondan"));
store.purchaseHelmet(2);
store.purchaseBike(2);

 new Store(new PaypalPaymentProcessor("Salah")).purchaseHelmet(10);