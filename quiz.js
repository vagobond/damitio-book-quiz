const quizData = {
  questions: [
    {
      question: "What's your current life situation?",
      options: [
        { text: "Living unconventionally, exploring the world", value: "adventure" },
        { text: "Stuck in tech/corporate bubble feeling disconnected", value: "tech" },
        { text: "Searching for deeper meaning and spirituality", value: "spiritual" },
        { text: "Dealing with relationships and personal struggles", value: "personal" }
      ]
    },
    {
      question: "What's your reading preference?",
      options: [
        { text: "Travel memoirs and real stories", value: "memoir" },
        { text: "Satirical fiction that critiques society", value: "satire" },
        { text: "Philosophical and thought-provoking narratives", value: "philosophy" },
        { text: "Unconventional and bizarre fiction", value: "bizarre" }
      ]
    },
    {
      question: "How do you feel about modern technology?",
      options: [
        { text: "It's ruining genuine human connection", value: "anti-tech" },
        { text: "Fascinating but deeply flawed", value: "critical-tech" },
        { text: "It's a tool, neither good nor bad", value: "neutral-tech" },
        { text: "I love it but see the irony", value: "ironic-tech" }
      ]
    },
    {
      question: "What kind of escape do you seek?",
      options: [
        { text: "Physical travel and new places", value: "travel" },
        { text: "Intellectual and spiritual journeys", value: "internal" },
        { text: "Dark humor and apocalyptic scenarios", value: "dark" },
        { text: "Intimate character-driven stories", value: "intimate" }
      ]
    },
    {
      question: "What era fascinates you most?",
      options: [
        { text: "Modern day and current issues", value: "modern" },
        { text: "History and legendary figures", value: "historical" },
        { text: "The future and speculation", value: "future" },
        { text: "Timeless and all eras", value: "timeless" }
      ]
    }
  ],

  books: [
    {
      title: "Rough Living: Tips and Tales of Vagabond",
      match: ["adventure", "memoir", "travel", "anti-tech", "modern"],
      description: "A practical guide and memoir about living unconventionally. Perfect if you're interested in alternative lifestyles, travel stories, and practical tips for living on your own terms.",
      emoji: "🧳",
      amazon: "https://www.amazon.com/s?i=stripbooks&rh=p_27%3ACD+Damitio"
    },
    {
      title: "Petshitter",
      match: ["tech", "satire", "critical-tech", "ironic-tech", "modern"],
      description: "A Silicon Valley romance and sharp critique of tech culture. For those who love satirical takes on the tech industry and can laugh at its absurdities while understanding them.",
      emoji: "💻",
      amazon: "https://www.amazon.com/s?i=stripbooks&rh=p_27%3ACD+Damitio"
    },
    {
      title: "Blue Eyed Bastards",
      match: ["bizarre", "dark", "future", "ironic-tech", "satire"],
      description: "The world's first novel co-written with AI. A bizarre, apocalyptic adventure that blends human and artificial intelligence in a wild story. Perfect for experimental readers.",
      emoji: "🤖",
      amazon: "https://www.amazon.com/s?i=stripbooks&rh=p_27%3ACD+Damitio"
    },
    {
      title: "Hasan-i-Sabah: How the World's Most Successful Mystic and Warlord Tuned In, Turned On, and Dropped Out",
      match: ["spiritual", "historical", "internal", "philosophy", "timeless"],
      description: "An exploration of a legendary historical figure who mastered both spirituality and strategy. Ideal for those interested in mysticism, history, and unconventional paths to enlightenment.",
      emoji: "🧘",
      amazon: "https://www.amazon.com/s?i=stripbooks&rh=p_27%3ACD+Damitio"
    },
    {
      title: "The Ghosts of Intimacy: A Novella of Regret",
      match: ["personal", "intimate", "internal", "timeless", "dark"],
      description: "A deeply personal exploration of relationships, regret, and intimate human connections. Perfect for those seeking emotionally resonant, introspective fiction.",
      emoji: "💔",
      amazon: "https://www.amazon.com/s?i=stripbooks&rh=p_27%3ACD+Damitio"
    },
    {
      title: "Notes from Nowhere: A Blueprint for a Better World",
      match: ["philosophy", "spiritual", "internal", "anti-tech", "future"],
      description: "Visionary and thought-provoking, offering alternative perspectives on society and personal fulfillment. Great for idealists and those reimagining how to live.",
      emoji: "🌍",
      amazon: "https://www.amazon.com/s?i=stripbooks&rh=p_27%3ACD+Damitio"
    },
    {
      title: "Not My America: A Stranger in My Strange Land",
      match: ["modern", "satire", "anti-tech", "travel", "critical-tech"],
      description: "A critical and often humorous examination of modern America from an outsider's perspective. Perfect for those questioning society and seeking alternative viewpoints.",
      emoji: "🗽",
      amazon: "https://www.amazon.com/s?i=stripbooks&rh=p_27%3ACD+Damitio"
    },
    {
      title: "Liminal Travel: The Spaces in Between",
      match: ["travel", "internal", "philosophy", "adventure", "timeless"],
      description: "A guide to more fulfilling travel and life through exploring liminal spaces and transitions. Ideal for thoughtful travelers seeking deeper meaning in movement.",
      emoji: "🚶",
      amazon: "https://www.amazon.com/s?i=stripbooks&rh=p_27%3ACD+Damitio"
    }
  ]
};

let currentQuestion = 0;
let answers = [];

function initQuiz() {
  renderQuestion();
}

function renderQuestion() {
  const container = document.getElementById('quizContainer');
  const question = quizData.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / quizData.questions.length) * 100;

  let html = `
    <div class="progress-bar">
      <div class="progress-fill" style="width: ${progress}%"></div>
    </div>

    <div class="quiz-section active">
      <div class="question">
        <h2>Question ${currentQuestion + 1} of ${quizData.questions.length}</h2>
        <h3 style="color: #555; margin-bottom: 20px;">${question.question}</h3>
        
        <div class="options">
  `;

  question.options.forEach((option, index) => {
    const isChecked = answers[currentQuestion] === option.value ? 'checked' : '';
    html += `
      <div class="option">
        <label>
          <input type="radio" name="answer" value="${option.value}" ${isChecked} onchange="updateAnswer('${option.value}')">
          ${option.text}
        </label>
      </div>
    `;
  });

  html += `
        </div>
      </div>

      <div class="buttons">
        ${currentQuestion > 0 ? '<button class="btn-prev" onclick="previousQuestion()">← Previous</button>' : ''}
        <button class="btn-next" onclick="nextQuestion()" ${!answers[currentQuestion] ? 'disabled' : ''}>
          ${currentQuestion === quizData.questions.length - 1 ? 'See Results' : 'Next →'}
        </button>
      </div>
    </div>
  `;

  container.innerHTML = html;
}

function updateAnswer(value) {
  answers[currentQuestion] = value;
  document.querySelector('.btn-next').disabled = false;
}

function nextQuestion() {
  if (currentQuestion < quizData.questions.length - 1) {
    currentQuestion++;
    renderQuestion();
  } else {
    showResults();
  }
}

function previousQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    renderQuestion();
  }
}

function showResults() {
  const matches = calculateMatches();
  const bestMatch = matches[0];
  const book = bestMatch.book;
  const matchPercentage = bestMatch.score;

  const container = document.getElementById('quizContainer');
  
  const html = `
    <div class="result-section">
      <h2 style="color: #764ba2; margin-bottom: 20px;">✨ Your Perfect Book Match! ✨</h2>
      
      <div class="result-book">
        <div class="book-title">${book.emoji} ${book.title}</div>
        <div class="book-match-percentage">${matchPercentage}% Match</div>
        <div class="book-description">${book.description}</div>
        <a href="${book.amazon}" target="_blank" class="amazon-link">Check on Amazon 🛒</a>
      </div>

      <div class="final-message">
        Based on your answers, this book aligns perfectly with your interests and worldview!
      </div>

      <button class="btn-restart" onclick="restartQuiz()">Take Quiz Again</button>
    </div>
  `;

  container.innerHTML = html;
}

function calculateMatches() {
  const scores = quizData.books.map(book => {
    let score = 0;
    answers.forEach((answer, index) => {
      if (book.match.includes(answer)) {
        score++;
      }
    });
    return {
      book: book,
      score: Math.round((score / quizData.questions.length) * 100)
    };
  });

  return scores.sort((a, b) => b.score - a.score);
}

function restartQuiz() {
  currentQuestion = 0;
  answers = [];
  renderQuestion();
}

// Initialize the quiz when page loads
document.addEventListener('DOMContentLoaded', initQuiz);
