# quiz-interativo-react


🧠 Quiz Interativo em React: Domine Seus Conhecimentos! 🚀
Bem-vindo ao Quiz Interativo em React, um projeto dinâmico e envolvente criado para testar seus conhecimentos e mergulhar fundo nos conceitos fundamentais do React! Prepare-se para responder 10 perguntas desafiadoras, onde cada segundo conta! ⏱️



🎯 Objetivo do Projeto
O principal objetivo deste projeto é demonstrar a aplicação prática de conceitos-chave do React em um ambiente divertido e funcional. O foco está em criar uma experiência de quiz fluida com:

10 Perguntas Desafiadoras: Um conjunto fixo de questões para testar seu raciocínio.

Temporizador por Questão: Um timer reiniciável para medir a velocidade da sua resposta. ⚡

ScoreBoard Detalhado: Exibição completa de resultados, incluindo pontuação, tempo gasto por questão e estatísticas de acertos.



✨ Funcionalidades e Recursos Técnicos
Este quiz não é apenas um jogo; é uma vitrine de boas práticas de desenvolvimento em React:



⚛️ Fundamentos do React em Ação

        Conceito	              |              Aplicação
    ******************************-***********************************************************************************************    
    useState & useEffect	      |          Gerenciamento centralizado do estado do quiz e controle do temporizador.
    Passagem de Props	          |          Comunicação eficiente entre componentes (ex: passar a questão para o QuestionCard).
    Componentização	              |          Uma arquitetura limpa e modular com componentes de responsabilidade única.



🎨 Estilização e Estrutura
CSS Modules: Garante que os estilos sejam isolados em cada componente, evitando conflitos globais e promovendo a manutenção.

Manipulação de Tempo: Lógica refinada para registrar e calcular com precisão o tempo de resposta em cada pergunta. ⏳



🛠️ Requisitos Funcionais Detalhados
📝 O Quiz
O coração da aplicação. O usuário navega por 10 questões, cada uma com 5 opções de múltipla escolha.



🔝 Componente Header
Exibe o título do quiz.

Informa o progresso: Questão X de 10.

Temporizador Vital: Um contador que é zerado e reiniciado a cada nova pergunta.



❓ Componente QuestionCard
Apresenta o enunciado da questão.

Lista as 5 alternativas como botões clicáveis (prefixados A, B, C, D, E).

Fluxo de Resposta: Um clique na opção registra a resposta, para o tempo da questão e avança automaticamente para a próxima.



🏆 Componente ScoreBoard
O grande final! Exibe uma análise completa da performance:

Pontuação Final Total e Percentual de Acertos.

Estatísticas de Acertos e o menor tempo de resposta registrado. 🚀

Análise de Questões: Lista as perguntas com o status de resposta (destaque em verde/vermelho) e o Tempo Exato gasto em cada uma.



📂 Estrutura de Pastas Elegante
A organização é a chave para a escalabilidade. Nossa estrutura é limpa e fácil de navegar:


src/
├─ components/
│  ├─ Header/         
│  │  ├─ index.jsx
│  │  └─ Header.module.css
│  ├─ QuestionCard/   
│  │  ├─ index.jsx
│  │  └─ QuestionCard.module.css
│  ├─ ScoreBoard/     
│  │  ├─ index.jsx
│  │  └─ ScoreBoard.module.css
├─ data/
│  └─ questions.js    # Fonte de dados
├─ App.jsx            # Componente principal e lógica de estado
├─ App.module.css
└─ main.jsx           # Ponto de entrada
📖 Estrutura de Dados (data/questions.js)

As perguntas são armazenadas em um array de objetos JavaScript, permitindo fácil manutenção e expansão:


```js
export const questions = [
{
    id: 1,
    question: "Qual hook é usado para gerenciar estados em componentes funcionais?",
    options: ["useEffect", "useState", "useProps", "useClass"],
    answer: "useState",
    points: 2 // Ponderação de dificuldade
},
// ...
];
```

⚙️ Como Rodar o Projeto Localmente
Pronto para começar? Siga estes comandos bash simples no seu terminal:

1. Clonar o Repositório
```Bash
$ git clone https://github.com/seu-usuario/quiz-react.git
```

2. Instalar as Dependências
Navegue até a pasta do projeto e use seu gerenciador de pacotes favorito:

```Bash
$ cd quiz-react
$ npm install
3. Rodar a Aplicação
Inicie o servidor de desenvolvimento:
```

```Bash
$ npm start
O projeto estará disponível em http://localhost:3000. Divirta-se! 🎉
```



🤝 Como Contribuir
Adora este quiz? Quer adicionar mais perguntas, melhorar o design ou otimizar a lógica? Suas contribuições são incrivelmente bem-vindas!

Faça um Fork deste repositório.

Crie uma branch para a sua feature:

```Bash
$ git checkout -b feature/minha-melhoria
```
Faça suas alterações e commit (com mensagens descritivas!):



```Bash
$ git commit -am 'feat: Adiciona sistema de pontuação bônus'
```
Envie suas alterações:

```Bash
$ git push origin feature/minha-melhoria
```
Abra um Pull Request para o repositório original. Estarei ansioso para revisar! 🥳



📜 Licença
Este projeto é distribuído sob a MIT License. Sinta-se à vontade para usar, modificar e distribuir o código.