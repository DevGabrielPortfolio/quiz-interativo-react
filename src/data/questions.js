export const questions = [

  {

    id: 1,
    question: "Qual é o valor de x na equação 3x + 5 = 20?",
    options: ["x = 5", "x = 4", "x = 3", "x = 6", "x = 2"],
    answer: "x = 5",
    points: 2

  },

  {

    id: 2,
    question: "Quanto é 25% de 200?",
    options: ["50", "40", "45", "60", "55"],
    answer: "50",
    points: 2

  },

  {

    id: 3,
    question: "Qual é o perímetro de um quadrado com lado de 8 cm?",
    options: ["32 cm", "64 cm", "24 cm", "16 cm", "40 cm"],
    answer: "32 cm",
    points: 3

  },

  {

    id: 4,
    question: "Se 2x = 18, qual é o valor de x?",
    options: ["x = 8", "x = 9", "x = 7", "x = 5", "x = 10"],
    answer: "x = 9",
    points: 2

  },

  {

    id: 5,
    question: "Qual é a área de um círculo de raio 7 cm? (Use π ≈ 3,14)",
    options: ["153,86 cm²", "49 cm²", "154 cm²", "120 cm²", "150 cm²"],
    answer: "153,86 cm²",
    points: 3

  },

  {

    id: 6,
    question: "Qual é a média dos seguintes números: 4, 8, 6, 10 e 12?",
    options: ["8", "9", "7", "6", "10"],
    answer: "8",
    points: 2

  },

  {

    id: 7,
    question: "Em uma progressão aritmética, o primeiro termo é 5 e a razão é 3. Qual é o quinto termo?",
    options: ["14", "20", "17", "15", "18"],
    answer: "17",
    points: 4

  },

  {

    id: 8,
    question: "Qual é o valor de 7² - 3²?",
    options: ["40", "44", "48", "50", "46"],
    answer: "40",
    points: 3

  },

  {

    id: 9,
    question: "Em um triângulo retângulo, os catetos medem 6 cm e 8 cm. Qual é o valor da hipotenusa?",
    options: ["10 cm", "12 cm", "9 cm", "14 cm", "11 cm"],
    answer: "10 cm",
    points: 4

  },

  {

    id: 10,
    question: "Se um número é divisível por 2 e por 3, ele também é divisível por:",
    options: ["6", "4", "5", "8", "9"],
    answer: "6",
    points: 2

  }

];

// Retornar a letra da opção
export const getOptionLetter = (index) => String.fromCharCode(65 + index);