<template>
  <div class="api-container">

    <!-- HEADER -->
    <div class="top-bar">
      <h1>Library API</h1>
    </div>

    <!-- NAVBAR -->
    <nav class="navbar">
      <button 
        :class="{ active: active === 'books' }"
        @click="active = 'books'">
        📚 Book Controller
      </button>

      <button 
        :class="{ active: active === 'students' }"
        @click="active = 'students'">
        🎓 Student Controller
      </button>

      <button 
        :class="{ active: active === 'borrows' }"
        @click="active = 'borrows'">
        📖 Borrow Controller
      </button>
    </nav>

    <!-- ROUTES DISPLAY -->
    <section class="controller">

      <div v-if="active === 'books'">
        <h3>Book Routes</h3>
        <div class="endpoint">POST /api/books</div>
        <div class="endpoint">GET /api/books</div>
        <div class="endpoint">GET /api/books/{book_id}</div>
        <div class="endpoint">PUT /api/books/{book_id}</div>
        <div class="endpoint">DELETE /api/books/{book_id}</div>
      </div>

      <div v-if="active === 'students'">
        <h3>Student Routes</h3>
        <div class="endpoint">POST /api/students</div>
        <div class="endpoint">GET /api/students</div>
        <div class="endpoint">GET /api/students/{student_id}</div>
        <div class="endpoint">PUT /api/students/{student_id}</div>
        <div class="endpoint">DELETE /api/students/{student_id}</div>
      </div>

      <div v-if="active === 'borrows'">
        <h3>Borrow Routes</h3>
        <div class="endpoint">POST /api/borrows</div>
        <div class="endpoint">GET /api/borrows</div>
        <div class="endpoint">GET /api/borrows/{borrow_id}</div>
        <div class="endpoint">PUT /api/borrows/{borrow_id}</div>
        <div class="endpoint">DELETE /api/borrows/{borrow_id}</div>
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
/* Container */
.api-container {
  max-width: 600px;
  margin: 20px auto;
  padding: 15px;
  border-radius: 12px;
  background-color: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  border: 1px solid var(--vp-c-divider);
  font-size: 14px;
}

/* Header */
.top-bar {
  margin-bottom: 12px;
}

/* Navbar */
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
  color: var(--vp-c-text-1);
  cursor: pointer;
  transition: 0.2s;
}

.navbar button:hover {
  background: var(--vp-c-bg-mute);
}

.navbar button.active {
  background-color: var(--vp-c-brand-1);
  color: white;
}

/* Controller */
.controller {
  border: 1px solid var(--vp-c-divider);
  padding: 10px;
  border-radius: 8px;
}

/* Endpoints */
.endpoint {
  padding: 4px 0;
  border-bottom: 1px solid var(--vp-c-divider);
  font-family: monospace;
}
</style>