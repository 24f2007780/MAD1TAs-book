<template>
  <div class="container">
    <div class="card">
      <!-- TABS -->
      <div class="tabs">
        <button :class="{active: activeTab === 1}" @click="activeTab = 1">Login Bypass</button>
        <button :class="{active: activeTab === 2}" @click="activeTab = 2">DROP TABLE</button>
        <button :class="{active: activeTab === 3}" @click="activeTab = 3">Safe Query</button>
      </div>

      <!-- LOGIN BYPASS -->
      <div v-if="activeTab === 1">
        <h3>🔓 SQL Injection (Login Bypass)</h3>

        <h4>Input Form</h4>
        <div class="form">
          <label>Username</label>
          <input value="' OR '1'='1' --" readonly />

          <label>Password</label>
          <input type="password" value="anything" readonly />
        </div>

        <h4>Generated Query</h4>
        <pre>
SELECT * FROM users
WHERE name = '' OR '1'='1' -- ' AND password = '';
        </pre>

        <p>All users returned → Authentication bypassed</p>
        <ul>
          <li>'1'='1' is always TRUE</li>
          <li>-- comments out password check</li>
        </ul>
      </div>

      <div v-if="activeTab === 2">
        <h3>💥 SQL Injection (DROP TABLE)</h3>

        <h4>Input Form</h4>
        <div class="form">
          <label>Username</label>
          <input value="admin'; DROP TABLE users; --" readonly />

          <label>Password</label>
          <input type="password" value="anything" readonly />
        </div>

        <h4>Generated Query</h4>
        <pre>
SELECT * FROM users WHERE name = 'admin';
DROP TABLE users; --';
        </pre>

        
        <p>Users table deleted → ENTIRE system data lost</p>
        <ul>
          <li>Multiple SQL statements executed ;</li>
          <li>No input sanitization</li>
        </ul>
      </div>

      <div v-if="activeTab === 3">
        <h3>🛡️Safe Query (SQLAlchemy)</h3>

        <h4>Input Form</h4>
        <div class="form">
            <label>Username</label>
            <input value="' OR '1'='1'" readonly />

            <label>Password</label>
            <input type="password" value="anything" readonly />
        </div>

        <h4>ORM Query (Python Code)</h4>
        <pre>
        user = User.query.filter_by(
            name=username,
            password=password
        ).first()
        </pre>

        <h4>What Actually Happens (Generated SQL)</h4>
        <pre>
        SELECT * FROM users 
        WHERE name = :name AND password = :password
        </pre>

        <p>Login failed → Injection treated as plain data</p>

        <ul>
            <li>ORM automatically uses parameterized queries</li>
            <li>User input is NEVER concatenated into SQL</li>
            <li>Injection string is treated as a value, not executable SQL</li>
        </ul>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SQLinjection",
  data() {
    return {
      activeTab: 1
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: auto;
  font-family: Arial;
}

.card {
  background: #1e1e1e;
  color: white;
  padding: 16px;
  margin: 12px 0;
  border-radius: 12px;
}

.tabs {
  display: flex;
  gap: 10px;
  margin-bottom: 16px;
}

button {
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  background: #333;
  color: white;
}

button.active {
  background: #4caf50;
}

.form {
  background: white;
  color: black;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 12px;
}

.form label {
  display: block;
  margin-top: 8px;
  font-weight: bold;
}

.form input {
  width: 100%;
  padding: 8px;
  margin-top: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.submit {
  margin-top: 12px;
  background: #4caf50;
  color: white;
}

pre {
  background: #111;
  padding: 10px;
  overflow-x: auto;
}
</style>
