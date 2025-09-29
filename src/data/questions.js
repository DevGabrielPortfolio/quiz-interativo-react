export const questions = [

  // QUESTÕES DE MATEMÁTICA

  {

    id: 1,
    question: "Qual é o valor de x na equação 4x - 7 = 21?",
    options: ["x = 5", "x = 6", "x = 8", "x = 9", "x = 7"],
    answer: "x = 7",
    points: 10

  },

  {

    id: 2,
    question: "Quanto é 35% de 300?",
    options: ["105", "100", "120", "130", "115"],
    answer: "105",
    points: 10

  },

  {

    id: 3,
    question: "Qual é o perímetro de um triângulo equilátero com lado de 12 cm?",
    options: ["24 cm", "18 cm", "36 cm", "48 cm", "30 cm"],
    answer: "36 cm",
    points: 10

  },

  {

    id: 4,
    question: "Se 3x + 4 = 22, qual é o valor de x?",
    options: ["x = 4","x = 6", "x = 5", "x = 7", "x = 8"],
    answer: "x = 6",
    points: 10

  },

  {
    id: 5,
    question: "Qual é a área de um quadrado de lado 9 cm?",
    options: ["72 cm²", "63 cm²", "90 cm²", "100 cm²", "81 cm²"],
    answer: "81 cm²",
    points: 10
  },

  // QUESTÕES DE PORTUGUÊS

  {

    id: 6,
    question: "Assinale a alternativa que apresenta um sinônimo para a palavra 'alegria':",
    options: ["Felicidade", "Tristeza", "Angústia", "Raiva", "Medo"],
    answer: "Felicidade",
    points: 10

  },

  {

    id: 7,
    question: "Complete a frase corretamente: 'Eu gostaria ___ você me ajudasse com a tarefa.'",
    options: ["de", "que de", "a", "com", "que"],
    answer: "que",
    points: 10

  },

  {

    id: 8,
    question: "Qual é a forma correta de se escrever a palavra que representa um tipo de peixe?",
    options: ["Flamingo", "Piranha", "Pirãna", "Pirána", "Pirânha"],
    answer: "Piranha",
    points: 10

  },

  {

    id: 9,
    question: "Assinale a alternativa que apresenta um erro de concordância verbal: ",
    options: ["Nós fomos ao cinema.", "Eles foram ao cinema.", "Eu fui ao cinema.", "Tu foi ao cinema.", "Ela foi ao cinema."],
    answer: "Tu foi ao cinema.",
    points: 10

  },

  {

    id: 10,
    question: "Qual é o tipo de oração da seguinte frase: 'Se eu soubesse, teria ido ao evento.'",
    options: ["Oração subordinada substantiva", "Oração coordenada assindética", "Oração coordenada sindética", "Oração subordinada adverbial", "Oração subordinada condicional"],
    answer: "Oração subordinada condicional",
    points: 10

  }

];

// Retornar a letra da opção
export const getOptionLetter = (index) => String.fromCharCode(65 + index);
