<template>
  <div class="api-container">

    <!-- HEADER -->
    <div class="top-bar">
      <h1>Library API</h1>
      <p class="subtitle">CRUD → HTTP → Route Mapping</p>
    </div>

    <!-- NAVBAR -->
    <nav class="navbar">
      <button 
        :class="{ active: active === 'books' }"
        @click="active = 'books'">
        📚 Book
      </button>

      <button 
        :class="{ active: active === 'students' }"
        @click="active = 'students'">
        🎓 Student
      </button>

      <button 
        :class="{ active: active === 'borrows' }"
        @click="active = 'borrows'">
        📖 Borrow
      </button>
    </nav>

    <!-- ROUTES DISPLAY -->
    <section class="controller">

      <!-- BOOKS -->
      <div v-if="active === 'books'">
        <h3>📚 Book Controller</h3>

        <div class="endpoint">
          <span class="crud">CREATE</span>
          <span class="method">POST</span> /books
        </div>

        <div class="endpoint">
          <span class="crud">READ</span>
          <span class="method">GET</span> /books
        </div>

        <div class="endpoint">
          <span class="crud">READ</span>
          <span class="method">GET</span> /books/{book_id}
        </div>

        <div class="endpoint">
          <span class="crud">UPDATE</span>
          <span class="method">PUT</span> /books/{book_id}
        </div>

        <div class="endpoint">
          <span class="crud">DELETE</span>
          <span class="method">DELETE</span> /books/{book_id}
        </div>
      </div>

      <!-- STUDENTS -->
      <div v-if="active === 'students'">
        <h3>🎓 Student Controller</h3>

        <div class="endpoint">
          <span class="crud">CREATE</span>
          <span class="method">POST</span> /students
        </div>

        <div class="endpoint">
          <span class="crud">READ</span>
          <span class="method">GET</span> /students
        </div>

        <div class="endpoint">
          <span class="crud">READ</span>
          <span class="method">GET</span> /students/{student_id}
        </div>

        <div class="endpoint">
          <span class="crud">UPDATE</span>
          <span class="method">PUT</span> /students/{student_id}
        </div>

        <div class="endpoint">
          <span class="crud">DELETE</span>
          <span class="method">DELETE</span> /students/{student_id}
        </div>
      </div>

      <!-- BORROWS -->
      <div v-if="active === 'borrows'">
        <h3>📖 Borrow Controller</h3>

        <div class="endpoint">
          <span class="crud">CREATE</span>
          <span class="method">POST</span> /borrows
        </div>

        <div class="endpoint">
          <span class="crud">READ</span>
          <span class="method">GET</span> /borrows
        </div>

        <div class="endpoint">
          <span class="crud">READ</span>
          <span class="method">GET</span> /borrows/{borrow_id}
        </div>

        <div class="endpoint">
          <span class="crud">UPDATE</span>
          <span class="method">PUT</span> /borrows/{borrow_id}
        </div>

        <div class="endpoint">
          <span class="crud">DELETE</span>
          <span class="method">DELETE</span> /borrows/{borrow_id}
        </div>
      </div>

    </section>

  </div>
</template>

<script>
export default {
  name: "LibraryAPI",
  data() {
    return {
      active: "books"
    };
  }
};
</script>

<style scoped>
.api-container {
  max-width: 650px;
  margin: 20px auto;
  padding: 15px;
  border-radius: 12px;
  background-color: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  border: 1px solid var(--vp-c-divider);
  font-size: 14px;
}

.subtitle {
  font-size: 12px;
  color: var(--vp-c-text-2);
}

.navbar {
  display: flex;
  gap: 6px;
  margin-bottom: 12px;
}

.navbar button {
  padding: 6px 10px;
  font-size: 12px;
  border-radius: 6px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  cursor: pointer;
}

.navbar button.active {
  background-color: var(--vp-c-brand-1);
  color: white;
}

.controller {
  border: 1px solid var(--vp-c-divider);
  padding: 10px;
  border-radius: 8px;
}

.endpoint {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 0;
  border-bottom: 1px solid var(--vp-c-divider);
  font-family: monospace;
}

/* CRUD badges */
.crud {
  font-size: 10px;
  padding: 2px 6px;
  border-radius: 4px;
  font-weight: bold;
}

/* HTTP method badges */
.method {
  font-size: 10px;
  padding: 2px 6px;
  border-radius: 4px;
  font-weight: bold;
  border: 1px solid var(--vp-c-divider);
}
</style>