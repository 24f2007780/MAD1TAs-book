<template>
  <div class="container">
    <h2>SQLAlchemy Practice</h2>

    <div class="card">
      <p><strong>Question {{ currentIndex + 1 }}</strong></p>
      <p>{{ current.question }}</p>

      <input
        v-model="userAnswer"
        placeholder="Write SQLAlchemy query..."
        class="input"
      />

      <button @click="checkAnswer">Submit</button>

      <div v-if="showResult">
        <p :class="isCorrect ? 'correct' : 'wrong'">
          {{ isCorrect ? '✅ Correct' : '❌ Incorrect' }}
        </p>

        <p><strong>Answer:</strong> {{ current.answer }}</p>
        <p><strong>Effect:</strong> {{ current.effect }}</p>
      </div>

      <button v-if="showResult" @click="nextQuestion">Next</button>
    </div>
  </div>
<div class="progress-container">
  <div
    class="progress-bar"
    :style="{ width: progress + '%' }"
  ></div>
</div>

<p class="progress-text">
  {{ currentIndex + 1 }} / {{ questions.length }} completed
</p>
</template>

<script>
export default {
  name: "LibrarySQlalchemy",
  data() {
    return {
      currentIndex: 0,
      userAnswer: "",
      showResult: false,
      isCorrect: false,

        questions: [
  {
    question: 'Get student with id "S101"',
    answers: [
      'Student.query.get("S101")',
      'Student.query.filter_by(student_id="S101").first()',
      'Student.query.filter(Student.student_id=="S101").first()',
      'Student.query.get_or_404("S101")'
    ],
    effect: "Fetches a single student record"
  },
  {
    question: "Get all books",
    answers: ["Book.query.all()"],
    effect: "Returns all books"
  },
  {
    question: 'Filter books by category "CS"',
    answers: [
      'Book.query.filter_by(category="CS").all()',
      'Book.query.filter(Book.category=="CS").all()'
    ],
    effect: "Returns CS books"
  },
  {
    question: "Get first borrow record",
    answers: ["Borrow.query.first()"],
    effect: "Returns first row"
  },
  {
    question: 'Check if student "S101" exists',
    answers: [
      'Student.query.get("S101") is not None',
      'Student.query.filter_by(student_id="S101").first() is not None'
    ],
    effect: "Returns True/False"
  },
  {
    question: "Get latest borrow record",
    answers: [
      "Borrow.query.order_by(Borrow.borrow_date.desc()).first()"
    ],
    effect: "Latest borrow"
  },


  {
    question: 'Get all students in "CSE" department',
    answers: [
      'Student.query.filter_by(dept="CSE").all()',
      'Student.query.filter(Student.dept=="CSE").all()'
    ],
    effect: "Returns all CSE students"
  },
  {
    question: 'Get book with id "B1"',
    answers: [
      'Book.query.get("B1")',
      'Book.query.filter_by(book_id="B1").first()',
      'Book.query.get_or_404("B1")'
    ],
    effect: "Fetches book B1"
  },
  {
    question: 'Delete student "S101"',
    answers: [
      'Student.query.filter_by(student_id="S101").delete()',
      'db.session.delete(Student.query.get("S101"))'
    ],
    effect: "Removes student S101"
  },
  {
    question: "Get all borrow records",
    answers: ["Borrow.query.all()"],
    effect: "Returns all borrow entries"
  },
  {
    question: 'Get books with publisher "Pearson"',
    answers: [
      'Book.query.filter_by(publisher="Pearson").all()',
      'Book.query.filter(Book.publisher=="Pearson").all()'
    ],
    effect: "Returns Pearson books"
  },
  {
    question: 'Get books containing "Data" in title',
    answers: [
      'Book.query.filter(Book.title.contains("Data")).all()'
    ],
    effect: "Search in titles"
  },
  {
    question: "Get borrow record with id 1",
    answers: [
      'Borrow.query.get(1)',
      'Borrow.query.filter_by(borrow_id=1).first()',
      'Borrow.query.get_or_404(1)'
    ],
    effect: "Fetches borrow record"
  },
  {
    question: "Count total books",
    answers: [
      "Book.query.count()",
      "db.session.query(Book).count()"
    ],
    effect: "Returns number of books"
  },
  {
    question: "Get latest book added",
    answers: [
      "Book.query.order_by(Book.book_id.desc()).first()"
    ],
    effect: "Last inserted book"
  },
  {
    question: 'Get all borrow records of "S101"',
    answers: [
      'Borrow.query.filter_by(student_id="S101").all()',
      'Borrow.query.filter(Borrow.student_id=="S101").all()'
    ],
    effect: "Returns borrow history"
  }
]
    };
  },


  computed: {
    current() {
        return this.questions[this.currentIndex];
    },
    progress() {
        return ((this.currentIndex) / this.questions.length) * 100;
    }
},

  methods: {
    checkAnswer() {
        this.showResult = true;

        const normalize = str =>
            str.replace(/\s/g, "").toLowerCase();

        const user = normalize(this.userAnswer);

        this.isCorrect = this.current.answers.some(ans => {
            const normalizedAns = normalize(ans);

            return (
            user === normalizedAns ||
            user.includes(normalizedAns) ||      // allows extra syntax
            normalizedAns.includes(user)
            );
        });
        },

    nextQuestion() {
      this.currentIndex++;
      this.userAnswer = "";
      this.showResult = false;
    }
  }
};
</script>

<style>
.container {
  max-width: 600px;
  margin: auto;
  font-family: Arial;
}

.card {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
}

.input {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
}

.correct {
  color: green;
}

.wrong {
  color: red;
}
.progress-container {
  width: 100%;
  height: 8px;
  background: #eee;
  border-radius: 10px;
  margin-bottom: 15px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #3498db, #2ecc71);
  transition: width 0.4s ease;
}

.progress-text {
  font-size: 13px;
  color: #777;
  margin-bottom: 10px;
}
</style>