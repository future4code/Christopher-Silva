import { validateCharacter } from "../src";

describe("Testing validateCharacter", () => {
	test("Should return false for empty name", () => { // Exercício 2 a)
		const result = validateCharacter({
			name: "",
			life: 1500,
			strength: 300,
			defense: 500,
		});

		expect(result).toBe(false);
	});

	test("Should return false for life 0", () => { // Exercício 2 b)
		const result = validateCharacter({
			name: "Scorpion",
			life: 0,
			strength: 300,
			defense: 500,
		});

		expect(result).toBe(false);
	});

	test("Should return false for strength 0", () => { // Exercício 2 c)
		const result = validateCharacter({
			name: "Scorpion",
			life: 1500,
			strength: 0,
			defense: 500,
		});

		expect(result).toBe(false);
	});

	test("Should return false for defense 0", () => { // Exercício 2 d)
		const result = validateCharacter({
			name: "Scorpion",
			life: 1500,
			strength: 500,
			defense: 0,
		});

		expect(result).toBe(false);
	});

	test("Should return false for strength or defense or life is negative", () => { // Exercício 2 e)
		const result = validateCharacter({
			name: "Scorpion",
			life: 1500,
			strength: -100,
			defense: 500,
		});

		expect(result).toBe(false);
	});

	test("Should return true for all valid inputs", () => { // Exercício 2 f)
		const result = validateCharacter({
			name: "Scorpion",
			life: 1500,
			strength: 300,
			defense: 500,
		});

		expect(result).toBe(true);
	});
})