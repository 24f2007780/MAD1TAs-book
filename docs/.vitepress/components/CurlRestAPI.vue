<template>
  <div class="curl-box">
    <h2 class="title">📤 cURL – JSON API Simulator</h2>

    <!-- URL -->
    <div class="row">
      <label>URL:</label>
      <input v-model="url" />
    </div>

    <!-- Method -->
    <div class="row">
      <label>HTTP Method:</label>
      <select v-model="method">
        <option>GET</option>
        <option>POST</option>
        <option>PUT</option>
      </select>
    </div>

  <!-- Flags -->
  <div class="flags">
    <label>
      <input type="checkbox" v-model="flags.verbose" />
      -v
    </label>

    <label>
      <input type="checkbox" v-model="flags.include" />
      -i
    </label>

    <label>
      <input type="checkbox" v-model="flags.header" />
      -H
    </label>
  </div>

  <!-- Help text -->
  <div class="flag-help">
    <p v-if="flags.verbose">
      🔍 <strong>-v (Verbose)</strong>: Shows detailed request & response info
      including headers and connection details.
    </p>

    <p v-if="flags.include">
      📥 <strong>-i (Include)</strong>: Includes HTTP response headers in the output.
    </p>

    <p v-if="flags.header">
      🧾 <strong>-H</strong>: Adds custom HTTP headers (e.g., Content-Type).
    </p>
  </div>

    <!-- JSON Body -->
    <div class="row" v-if="method !== 'GET'">
      <label>Request Body (JSON):</label>
      <textarea v-model="body"></textarea>
    </div>

    <button @click="simulate">▶ Run curl</button>

    <h3>Generated Command</h3>
    <pre class="cmd">{{ command }}</pre>

    <h3>Simulated Response</h3>
    <pre class="output">
<span class="status">HTTP/1.1 {{ status }}</span>
<span class="headers" v-if="flags.include">
Content-Type: application/json
Server: Flask
</span>
<span class="body">{{ response }}</span>
    </pre>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const url = ref('http://localhost:5000/api/course')
const method = ref('GET')
const body = ref('{}')
const command = ref('')
const response = ref('')
const status = ref('200 OK')

const flags = ref({
  verbose: false,
  include: false,
  header: true
})

// Reset body when switching to POST/PUT
watch(method, (m) => {
  if (m !== 'GET') body.value = '{}'
})

function simulate() {
  let cmd = 'curl'

  if (flags.value.verbose) cmd += ' -v'
  if (flags.value.include) cmd += ' -i'
  if (flags.value.header) cmd += ' -H "Content-Type: application/json"'

  cmd += ` -X ${method.value}`

  if (method.value !== 'GET') {
    cmd += ` -d '${body.value}'`
  }

  cmd += ` ${url.value}`
  command.value = cmd

  // Simulated behavior
  if (method.value === 'GET') {
    status.value = '200 OK'
    response.value = `{
  "course_id": 1,
  "course_code": "CS2001",
  "course_name": "DBMS"
}

✔ Data fetched from server`
  }

  if (method.value === 'POST') {
    status.value = '201 Created'
    response.value = `${body.value}

✔ Data received by server
✔ New resource created`
  }

  if (method.value === 'PUT') {
    status.value = '200 OK'
    response.value = `${body.value}

✔ Existing resource updated`
  }
}
</script>

<style scoped>
.curl-box {
  border: 1px solid #000;
  padding: 16px;
  border-radius: 10px;
  background: #fff;
}

.curl-box * {
  color: #000;
}

.title {
  margin-bottom: 10px;
}

.row {
  margin-bottom: 10px;
}
.flag-help {
  margin-top: 6px;
  font-size: 14px;
  background: #f1f5f9;
  border: 1px dashed #000;
  padding: 8px;
  border-radius: 6px;
}

.flag-help p {
  margin: 4px 0;
}

input,
select,
textarea {
  width: 100%;
  padding: 6px;
  border: 1px solid #000;
}

textarea {
  min-height: 80px;
  font-family: monospace;
}

.flags {
  display: flex;
  gap: 20px;
  margin-bottom: 10px;
}

button {
  margin-top: 10px;
  padding: 8px 16px;
  background: rgb(42, 95, 220)3e1;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

pre {
  border: 1px solid #000;
  padding: 10px;
  background: #f9f9f9;
  white-space: pre-wrap;
  font-family: monospace;
}

/* Highlighting */
.status {
  font-weight: bold;
}

.headers {
  color: #1d4ed8; /* blue headers */
}

.body {
  color: #000;
}

.cmd {
  background: #eef2ff;
}
</style>
