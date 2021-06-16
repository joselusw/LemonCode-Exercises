class SlotMachine {
	coins;
	slots;

	constructor() {
		this.coins = 0;
		this.slots = [];
	}

	checkResult = () => this.slots.every((slot) => slot === true);
	generateBool = () => Math.random() < 0.5;

	play = () => {
		this.slots = [];
		this.slots.push(
			this.generateBool(),
			this.generateBool(),
			this.generateBool()
		);

		if (this.checkResult()) {
			console.log(`Congratulations! You won ${this.coins} coins.`);
			this.coins = 0;
		} else {
			this.coins += Math.floor(Math.random() * 10);
			console.log(
				`Better luck next time!. Current jackpot: ${this.coins}.`
			);
		}
	};
}

let slotMachine = new SlotMachine();

for (i = 0; i < 25; i++) {
	slotMachine.play();
}
