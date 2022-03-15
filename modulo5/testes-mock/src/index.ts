 export interface Character {  // Exercício 1 a)
	name: string;
	life: number;
	strength: number;
	defense: number;
  }

  export const validateCharacter = (input: Character): boolean => { // Exercício 1 b)
	if (
	  !input.name ||
	  input.life === undefined || 
	  input.strength === undefined ||
	  input.defense === undefined
	) {
	  return false;
	}
  
	if (input.life <=0 || input.strength <=0 || input.defense <=0) {
	  return false;
	}
  
	return true;
  };

  /* 
  export const performAttack = (attacker: Character, defender: Character) => { // Exercício 3 a)
	if (!validateCharacter(attacker) || !validateCharacter(defender)) {
	  throw new Error("Invalid character");
	}
  
	if (attacker.strength > defender.defense) {
	  defender.life -= attacker.strength - defender.defense;
	}
  };
  */

  export const performAttack = (  // Exercício 3 b)
	attacker: Character,
	defender: Character,
	validator: (input: Character) => boolean
  ) => {
	if (!validator(attacker) || !validator(defender)) {
	  throw new Error("Invalid character");
	}
  
	if (attacker.strength > defender.defense) {
	  defender.life -= attacker.strength - defender.defense;
	}
  };

  /* 
  Exercício 3 C) Explique, com as suas palavras, as diferenças entre as duas implementações
 
 Em vez de executar uma função, está recebendo por parametro pelo parametro.

---

 Exercício 4 a) De qual das duas funções (validateCharacter ou performAttack)  deveremos criar um Mock nos próximos testes? Justifique.

 Na função performAttack, porque ela utiliza a validateCharacter.
  */