const {
  soma,
  ePar,
  inverteString,
  eAnoBissexto,
  contaVogais,
} = require("./questions");

//Exemplo de teste - npm run test
// describe("Descrição do grupo de testes", () => {
//   test("Descrição do teste", () => {
//     expect(true).toBe(true);
//   });
// });

describe('Testando a função soma', () => {
  it('deve retornar 2', () => {
    expect(soma(1, 1)).toBe(2);
  });

  it('deve retornar -2', () => {
    expect(soma(-1, -1)).toBe(-2);
  });

  it('deve retornar algo próximo de 1', () => {
    expect(soma(0.5, 0.5)).toBeCloseTo(1);
  });
});

describe('Testando a função ePar', () => {
  it('deve retornar verdadeiro', () => {
    expect(ePar(2)).toBeTruthy();
  });

  it('deve retornar verdadeiro', () => {
    expect(ePar(-2)).toBeTruthy();
  });

  it('deve retornar falso', () => {
    expect(ePar(3)).toBeFalsy();
  });
});

describe('Testando a função inverteString', () => {
  it('deve retornar "atatab"', () => {
    expect(inverteString('batata')).toBe('atatab');
  });

  it('deve retornar "123"', () => {
    expect(inverteString('123')).toBe('321');
  });

  it('deve retornar "123abc"', () => {
    expect(inverteString('123abc')).toBe('cba321');
  });

  it('deve dar erro', () => {
    expect(() => inverteString(1)).toThrow(new Error('O argumento deve ser uma string'));
  });

  it('deve dar erro', () => {
    expect(() => inverteString('')).toThrow(new Error('A string deve ter pelo menos um caractere'));
  });
});

describe('testando a função eAnoBissexto', () => {
  it('deve retornar verdadeiro', () => {
    expect(eAnoBissexto(2000)).toBeTruthy();
  });

  it('deve retornar falso', () => {
    expect(eAnoBissexto(2001)).toBeFalsy();
  });

  it('deve retornar falso', () => {
    expect(eAnoBissexto(0)).toBeFalsy();
  });

  it('deve dar erro', () => {
    expect(() => eAnoBissexto('')).toThrow(new Error('O argumento deve ser um número'));
  });
});

describe('testando a função contaVogais', () => {
  it('deve retornar 5', () => {
    expect(contaVogais('aeiou')).toBe(5);
  });

  it('deve retornar 0', () => {
    expect(contaVogais('bcdfghjklmnpqrstvwxyz1234567890')).toBe(0);
  });

  it('deve dar erro', () => {
    expect(() => contaVogais(1)).toThrow(new Error('O argumento deve ser uma string'));
  });
});