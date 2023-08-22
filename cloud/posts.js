const crypto = require('crypto');

const postsC = [
  {
    id: crypto.randomUUID(),
    title: 'Máximo Divisor',
    description:
      'O maior divisor comum (MDC) é o maior número que divide dois ou mais números sem deixar resto. O MDC é obtido encontrando os fatores comuns aos números e selecionando o maior deles.',
    githubLink:
      'https://github.com/Vttrium/UTFPR-Codes/blob/master/Códigos%20de%20Auxilio/Divisores/Maximo%20Divisor.h',
    code: `
int maxDiv(int num, int num2) {

    int i, soma = 0, max1 = 0, max2 = 0, max3 = 0;
    
    for (i = 1; i <= num; i++) {
        if (num%i == 0) {
            if (max1 < i) {
                max1 = i;
            }
        }
    }

    for (i = 1; i <= num2; i++) {
        if (num2%i == 0) {
            if (max2 < i) {
                max2 = i;
            }
        }
        if (max1 == max2 && max3 < max1) {
            max3 = max1;
        }
    }
    return max3;
}
        `,
  }
]

const postsJava = [
  {
    id: crypto.randomUUID(),
    title: 'Post em java!',
    description:
      'descricao java',
    githubLink:
      'https://github.com/Vttrium/UTFPR-Codes/blob/master/Códigos%20de%20Auxilio/Divisores/Maximo%20Divisor.h',
    code: `
int maxDiv(int num, int num2) {

    int i, soma = 0, max1 = 0, max2 = 0, max3 = 0;
    
    for (i = 1; i <= num; i++) {
        if (num%i == 0) {
            if (max1 < i) {
                max1 = i;
            }
        }
    }

    for (i = 1; i <= num2; i++) {
        if (num2%i == 0) {
            if (max2 < i) {
                max2 = i;
            }
        }
        if (max1 == max2 && max3 < max1) {
            max3 = max1;
        }
    }
    return max3;
}
        `,
  }
]

const postsSql = [
  {
    id: crypto.randomUUID(),
    title: 'Post em sql!',
    description:
      'descricao sql',
    githubLink:
      'https://github.com/Vttrium/UTFPR-Codes/blob/master/Códigos%20de%20Auxilio/Divisores/Maximo%20Divisor.h',
    code: `
SELECT * FROM tabela01 WHERE tabelaID = 10
        `,
  }
]

const posts = {
  c: [
    postsC,
  ],
  java: [
    postsJava,
  ],
  sql: [
    postsSql
  ]
};

module.exports = posts;