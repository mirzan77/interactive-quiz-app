const quizData = [
    {
      question: "What is the capital of France?",
      options: ["London", "Paris", "Rome", "Madrid"],
      correct: "Paris"
    },
    {
      question: "Which language runs in a web browser?",
      options: ["Python", "C", "Java", "JavaScript"],
      correct: "JavaScript"
    },
    {
      question: "What does CSS stand for?",
      options: [
        "Creative Style Sheets",
        "Colorful Style Sheets",
        "Cascading Style Sheets",
        "Computer Style Sheets"
      ],
      correct: "Cascading Style Sheets"
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionEl = document.getElementById("question");
  const answersEl = document.getElementById("answers");
  const nextBtn = document.getElementById("next-btn");
  const resultEl = document.getElementById("result");
  
  function showQuestion() {
    const q = quizData[currentQuestion];
    questionEl.textContent = `Q${currentQuestion + 1}: ${q.question}`;
    answersEl.innerHTML = "";
  
    q.options.forEach(option => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.className = "block w-full text-left bg-gray-100 p-3 rounded-md hover:bg-blue-100 transition duration-200 shadow-sm";
      btn.addEventListener("click", () => selectAnswer(option));
      answersEl.appendChild(btn);
    });
  
    nextBtn.classList.add("hidden");
  }
  
  function selectAnswer(selected) {
    const correct = quizData[currentQuestion].correct;
    const buttons = answersEl.querySelectorAll("button");
  
    buttons.forEach(btn => {
      btn.disabled = true;
      btn.classList.remove("hover:bg-blue-100");
      if (btn.textContent === correct) {
        btn.classList.add("bg-green-200", "text-green-800", "font-semibold");
      } else if (btn.textContent === selected) {
        btn.classList.add("bg-red-200", "text-red-800", "font-semibold");
      } else {
        btn.classList.add("text-gray-500");
      }
    });
  
    if (selected === correct) score++;
  
    nextBtn.classList.remove("hidden");
  }
  
  nextBtn.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
  });
  
  function showResult() {
    document.getElementById("quiz-container").style.display = "none";
    resultEl.textContent = `🎉 You scored ${score} out of ${quizData.length}!`;
    resultEl.classList.remove("hidden");
  }
  
  showQuestion();
  
  showQuestion();
  