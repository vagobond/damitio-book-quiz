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
    },
    {
      question: "How do you feel about strange and unusual content?",
      options: [
        { text: "I love weird, the weirder the better", value: "weird" },
        { text: "I appreciate experimental work", value: "experimental" },
        { text: "I prefer grounded reality", value: "grounded" },
        { text: "I like thought-provoking regardless of form", value: "thoughtful" }
      ]
    },
    {
      question: "What draws you to books?",
      options: [
        { text: "Learning practical tips and skills", value: "practical" },
        { text: "Entertainment and storytelling", value: "entertainment" },
        { text: "Exploring new ideas and perspectives", value: "exploration" },
        { text: "Understanding human nature and relationships", value: "human" }
      ]
    },
    {
      question: "How do you view the current state of the world?",
      options: [
        { text: "Cynical but hopeful", value: "cynical-hopeful" },
        { text: "Optimistic about change", value: "optimistic" },
        { text: "Apocalyptic but amused", value: "apocalyptic" },
        { text: "Deeply concerned and searching", value: "concerned" }
      ]
    }
  ],

  books: [
    {
      title: "Rough Living: Tips and Tales of Vagobond",
      match: ["adventure", "memoir", "travel", "anti-tech", "modern", "practical", "grounded", "cynical-hopeful"],
      description: "A practical guide and memoir about living unconventionally. Perfect if you're interested in alternative lifestyles, travel stories, and real-world tips for living on your own terms.",
      emoji: "🧳"
    },
    {
      title: "Petshitter: Unfortunate Names Made Good",
      match: ["tech", "satire", "critical-tech", "ironic-tech", "modern", "entertainment", "exploration", "cynical-hopeful"],
      description: "A Silicon Valley romance and sharp critique of tech culture. For those who love satirical takes on the tech industry and can laugh at its absurdities.",
      emoji: "💻"
    },
    {
      title: "Blue Eyed Bastards",
      match: ["bizarre", "dark", "future", "ironic-tech", "satire", "experimental", "weird", "entertainment"],
      description: "The world's first novel co-written with AI. A bizarre, apocalyptic adventure blending human and artificial intelligence. Perfect for experimental readers.",
      emoji: "🤖"
    },
    {
      title: "Hasan-i-Sabah: How the World's Most Successful Mystic and Warlord Tuned In, Turned On, and Dropped Out",
      match: ["spiritual", "historical", "internal", "philosophy", "timeless", "exploration", "thoughtful", "concerned"],
      description: "An exploration of a legendary historical figure who mastered both spirituality and strategy. Ideal for those interested in mysticism, history, and unconventional enlightenment.",
      emoji: "🧘"
    },
    {
      title: "The Ghosts of Intimacy: A Novella of Regret",
      match: ["personal", "intimate", "internal", "timeless", "dark", "human", "thoughtful", "philosophy"],
      description: "A deeply personal exploration of relationships, regret, and intimate human connections. Perfect for those seeking emotionally resonant, introspective fiction.",
      emoji: "💔"
    },
    {
      title: "Notes from Nowhere: A Blueprint for a Better World",
      match: ["philosophy", "spiritual", "internal", "anti-tech", "future", "exploration", "optimistic", "concerned"],
      description: "Visionary and thought-provoking, offering alternative perspectives on society and personal fulfillment. Great for idealists reimagining how to live.",
      emoji: "🌍"
    },
    {
      title: "Not My America: A Stranger in My Strange Land",
      match: ["modern", "satire", "anti-tech", "travel", "critical-tech", "exploration", "cynical-hopeful", "concerned"],
      description: "A critical and humorous examination of modern America from an outsider's perspective. Perfect for those questioning society and seeking alternative viewpoints.",
      emoji: "🗽"
    },
    {
      title: "Liminal Travel: The Spaces in Between",
      match: ["travel", "internal", "philosophy", "adventure", "timeless", "exploration", "thoughtful", "practical"],
      description: "A guide to more fulfilling travel and life through exploring liminal spaces and transitions. Ideal for thoughtful travelers seeking deeper meaning in movement.",
      emoji: "🚶"
    },
    {
      title: "Lost in Transmedia: Exploring Fandom, Transmedia, and the Birth of Electronic Anthropology",
      match: ["philosophy", "exploration", "tech", "modern", "experimental", "thoughtful", "entertainment", "future"],
      description: "An academic exploration of fandom, media, and culture in the digital age. Perfect for those interested in how technology shapes human storytelling and community.",
      emoji: "📺"
    },
    {
      title: "What Am I Doing Here?: 52 Weeks of Wandering and Wondering",
      match: ["adventure", "memoir", "travel", "internal", "exploration", "grounded", "thoughtful", "timeless"],
      description: "A year-long journey of self-discovery told through weekly reflections. Ideal for those on their own journey of introspection and wanderlust.",
      emoji: "❓"
    },
    {
      title: "A Very Good Novel Coronavirus: Book 1",
      match: ["modern", "dark", "satire", "bizarre", "apocalyptic", "entertainment", "weird", "cynical-hopeful"],
      description: "A satirical take on pandemic times with dark humor. Perfect for those who appreciate societal commentary wrapped in speculative fiction.",
      emoji: "🦠"
    },
    {
      title: "The Fucking People: A Bizarre Apocalyptic Novel",
      match: ["dark", "bizarre", "apocalyptic", "satire", "weird", "entertainment", "cynical-hopeful", "future"],
      description: "An unapologetically strange apocalyptic tale. For readers who want boundary-pushing, unconventional storytelling with dark humor.",
      emoji: "💣"
    },
    {
      title: "The Odd Decade: Ten Years of Stories Too Strange to Make Up",
      match: ["memoir", "travel", "weird", "entertainment", "adventure", "grounded", "modern", "cynical-hopeful"],
      description: "A collection of real stories from a decade of unconventional living. Perfect for those who appreciate bizarre true tales over fiction.",
      emoji: "📖"
    },
    {
      title: "Sly Doubt of Uranus: The History of a Lovable Asshole",
      match: ["satire", "dark", "weird", "entertainment", "cynical-hopeful", "bizarre", "philosophy", "human"],
      description: "A comedic and irreverent look at a flawed character. Great for those who enjoy satirical character studies with dark humor.",
      emoji: "😈"
    },
    {
      title: "TFP2: The Wide Path",
      match: ["dark", "bizarre", "apocalyptic", "entertainment", "weird", "thoughtful", "future", "satire"],
      description: "The sequel to The Fucking People. Continues the apocalyptic saga with more strange characters and dark humor.",
      emoji: "🛣️"
    },
    {
      title: "You Are the Hero We Need: How to Save the World Without Losing Yourself",
      match: ["spiritual", "philosophy", "optimistic", "internal", "exploration", "practical", "human", "concerned"],
      description: "An empowering guide about personal transformation and making a difference. Perfect for those seeking purpose and positive change.",
      emoji: "🦸"
    },
    {
      title: "Sly Doubt of Uranus: The Ethereum Priests",
      match: ["tech", "future", "philosophy", "experimental", "modern", "ironic-tech", "exploration", "thoughtful"],
      description: "A speculative exploration of cryptocurrency, religion, and future technology. For tech-curious minds interested in where society might be headed.",
      emoji: "⛪"
    },
    {
      title: "The Anarchist Manifesto Project: Manifestos from AI Anarchists",
      match: ["philosophy", "experimental", "tech", "future", "dark", "exploration", "thoughtful", "concerned"],
      description: "A collection of manifestos exploring anarchism through the lens of AI. Perfect for those interested in political philosophy and technological futures.",
      emoji: "🚩"
    },
    {
      title: "Kitsune No Haru: Satoshi Manor",
      match: ["weird", "bizarre", "experimental", "entertainment", "thoughtful", "timeless", "dark", "philosophy"],
      description: "A peculiar tale blending Japanese mythology with mystery. For those who enjoy unconventional narratives and cultural fusion.",
      emoji: "🦊"
    },
    {
      title: "The Eye of Zogozogora",
      match: ["bizarre", "future", "weird", "experimental", "entertainment", "dark", "ironic-tech", "thoughtful"],
      description: "Book 2 in the Blue Eyed Bastards series. Continues the wild AI-human collaborative storytelling adventure into increasingly strange territory.",
      emoji: "👁️"
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
        <a href="https://www.amazon.com/s?i=stripbooks&rh=p_27%3ACD+Damitio" target="_blank" class="amazon-link">Check on Amazon 🛒</a>
      </div>

      <div class="final-message">
        ${matchPercentage === 100 ? "🎉 PERFECT ALIGNMENT! This book was made for you!" : "Based on your answers, this book aligns perfectly with your interests and worldview!"}
      </div>

      <button class="btn-restart" onclick="restartQuiz()">Take Quiz Again</button>
    </div>
  `;

  container.innerHTML = html;
}

function calculateMatches() {
  const scores = quizData.books.map(book => {
    let score = 0;
    answers.forEach((answer) => {
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
