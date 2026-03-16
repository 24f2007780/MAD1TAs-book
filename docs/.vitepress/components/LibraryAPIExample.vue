<template>
  <div class="container">
    <h1 class="title">📘 SQLAlchemy Practice</h1>

    <div class="card">
      <div class="header">
        <span>Question {{ currentIndex + 1 }} / {{ questions.length }}</span>
      </div>

      <p class="question">{{ current.question }}</p>

      <input
        v-model="userAnswer"
        placeholder="Write SQLAlchemy query..."
        class="input"
      />

      <button class="btn" @click="checkAnswer">Submit</button>

      <div v-if="showResult" class="result-box">
        <p :class="isCorrect ? 'correct' : 'wrong'">
          {{ isCorrect ? '✅ Correct' : '❌ Try Again' }}
        </p>

        <p><strong>✔ Possible Answers:</strong></p>
        <ul>
          <li v-for="(ans, i) in current.answers" :key="i">{{ ans }}</li>
        </ul>

        <p><strong>💡 Effect:</strong> {{ current.effect }}</p>

        <button class="next-btn" @click="nextQuestion">Next →</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      userAnswer: "",
      showResult: false,
      isCorrect: false,

      questions: [
        {
          question: "Get student with id S101",
          answers: [
            'Student.query.get("S101")',
            'Student.query.filter_by(student_id="S101").first()',
            'Student.query.filter(Student.student_id=="S101").first()'
          ],
          effect: "Fetches a single student record or returns None"
        },
        {
          question: "Get all books",
          answers: [
            "Book.query.all()"
          ],
          effect: "Returns all books in the database"
        },
        {
          question: "Filter books by category CS",
          answers: [
            'Book.query.filter_by(category="CS").all()',
            'Book.query.filter(Book.category=="CS").all()'
          ],
          effect: "Returns all CS category books"
        },
        {
          question: "Get first borrow record",
          answers: [
            "Borrow.query.first()"
          ],
          effect: "Returns first row in Borrow table"
        },
        {
          question: "Check if student exists",
          answers: [
            'Student.query.get("S101") is not None',
            'Student.query.filter_by(student_id="S101").first() is not None'
          ],
          effect: "Returns True if student exists"
        },
        {
          question: "Get latest borrow record",
          answers: [
            "Borrow.query.order_by(Borrow.borrow_date.desc()).first()"
          ],
          effect: "Returns most recent borrow entry"
        }
      ]
    };
  },

  computed: {
    current() {
      return this.questions[this.currentIndex];
    }
  },

  methods: {
    normalize(str) {
      return str.replace(/\s/g, "").toLowerCase();
    },

    checkAnswer() {
      this.showResult = true;

      const user = this.normalize(this.userAnswer);

      this.isCorrect = this.current.answers.some(
        ans => this.normalize(ans) === user
      );
    },

    nextQuestion() {
      if (this.currentIndex < this.questions.length - 1) {
        this.currentIndex++;
        this.userAnswer = "";
        this.showResult = false;
      }
    }
  }
};
</script>

<style>
body {
  background: #f4f7fb;
  margin: 0;
  font-family: "Segoe UI", sans-serif;
}

.container {
  max-width: 650px;
  margin: 50px auto;
  padding: 20px;
}

.title {
  text-align: center;
  color: #2c3e50;
}

.card {
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.08);
}

.header {
  font-size: 14px;
  color: #888;
  margin-bottom: 10px;
}

.question {
  font-size: 18px;
  margin-bottom: 15px;
  font-weight: 500;
}

.input {
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ddd;
  margin-bottom: 15px;
  font-size: 14px;
}

.input:focus {
  border-color: #3498db;
  outline: none;
}

.btn {
  width: 100%;
  padding: 12px;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.btn:hover {
  background: #2980b9;
}

.result-box {
  margin-top: 20px;
  padding: 15px;
  background: #f9fafc;
  border-radius: 8px;
}

.correct {
  color: #27ae60;
  font-weight: bold;
}

.wrong {
  color: #e74c3c;
  font-weight: bold;
}

.next-btn {
  margin-top: 15px;
  padding: 10px;
  width: 100%;
  background: #2ecc71;
  color: white;
  border: none;
  border-radius: 8px;
}

.next-btn:hover {
  background: #27ae60;
}
</style>