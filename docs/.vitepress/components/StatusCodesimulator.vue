<template>
<div class="api-demo">
  <h2>📘 Flask API – Status Code Simulator</h2>
  <p class="hint">
    Click a scenario to simulate what a <b>Flask API</b> would return.
  </p>

  <div class="buttons">
    <button @click="show(200)">GET Courses</button>
    <button @click="show(201)">POST Course</button>
    <button @click="show(400)">Invalid Input</button>
    <button @click="show(401)">Unauthorized</button>
    <button @click="show(403)">Forbidden</button>
    <button @click="show(404)">Not Found</button>
    <button @click="show(415)">Wrong Content-Type</button>
    <button @click="show(500)">Server Error</button>
  </div>

  <div class="output">
    <pre>{{ output }}</pre>
  </div>
</div>
</template>
<script setup>
import { ref } from 'vue'

const output = ref('Click a scenario to see the API response')

function show(code) {
  const scenarios = {
    200: `
SCENARIO:
Student requests the list of available courses.

REQUEST:
GET /api/courses

RESPONSE:
HTTP 200 OK

✔ Request successful
✔ Server returned course data

DATA:
[
  { "id": 1, "name": "Flask Basics" },
  { "id": 2, "name": "APIs" }
]
`,

    201: `
SCENARIO:
Instructor creates a new course.

REQUEST:
POST /api/courses

RESPONSE:
HTTP 201 Created

✔ New resource created successfully
✔ Used after POST

DATA:
{ "id": 5, "name": "Advanced Flask" }
`,

    400: `
SCENARIO:
Client sends incomplete or invalid data.

REQUEST:
POST /api/courses

RESPONSE:
HTTP 400 Bad Request

❌ Missing required field: course_name
❌ Client-side error
`,

    401: `
SCENARIO:
User tries to access API without logging in.

REQUEST:
GET /api/courses

RESPONSE:
HTTP 401 Unauthorized

❌ Authentication token missing
❌ Login required
`,

    403: `
SCENARIO:
Student tries to access an admin-only API.

REQUEST:
DELETE /api/courses/3

RESPONSE:
HTTP 403 Forbidden

❌ User authenticated
❌ But lacks permission
`,

    404: `
SCENARIO:
Client requests a resource that does not exist.

REQUEST:
GET /api/courses/99

RESPONSE:
HTTP 404 Not Found

❌ Course ID does not exist
`,

    415: `
SCENARIO:
Client sends data in the wrong format.

REQUEST:
POST /api/courses
Content-Type: text/plain

RESPONSE:
HTTP 415 Unsupported Media Type

❌ Server expects application/json
`,

    500: `
SCENARIO:
Bug or crash inside Flask backend.

REQUEST:
ANY

RESPONSE:
HTTP 500 Internal Server Error

❌ Backend exception
❌ Not client's fault
`
  }

  output.value = scenarios[code]
}
</script>

<style scoped>
.api-demo {
  border: 1px solid #ddd;
  padding: 16px;
  border-radius: 10px;
  background: #fafafa;
}

.hint {
  color: #555;
  margin-bottom: 10px;
}

.buttons button {
  margin: 6px;
  padding: 8px 14px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  background: #6366f1;
  color: white;
  font-weight: 500;
}

.buttons button:hover {
  background: #4f46e5;
}

.output {
  margin-top: 16px;
  background: #0f172a;
  color: #e5e7eb;
  padding: 14px;
  border-radius: 8px;
  min-height: 200px;
}

pre {
  white-space: pre-wrap;
  font-family: monospace;
}
</style>
