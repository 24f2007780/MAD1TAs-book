<template>
  <div class="security-demo vp-doc">
    <h3 class="title">Security Demo</h3>

    <!-- Toggles -->
    <div class="controls">
      <label>
        Protocol
        <select v-model="protocol" class="select">
          <option>HTTP</option>
          <option>HTTPS</option>
        </select>
      </label>

      <label>
        Method
        <select v-model="method" class="select">
          <option>GET</option>
          <option>POST</option>
        </select>
      </label>

      <label>
        Auth
        <select v-model="auth" class="select">
          <option>Password</option>
          <option>Token</option>
        </select>
      </label>
    </div>

    <!-- Action -->
    <button class="VPButton brand" @click="sendRequest">
      Send Login
    </button>

    <!-- Visualization -->
    <div class="grid">
      <div class="panel">
        <h4>Client</h4>
        <pre>{{ clientRequest }}</pre>
      </div>

      <div class="panel attacker">
        <h4>Attacker (MITM)</h4>
        <pre>{{ attackerView }}</pre>
      </div>

      <div class="panel server">
        <h4>Server</h4>
        <pre>{{ serverView }}</pre>
      </div>
    </div>
  </div>
</template>

<script setup>
defineOptions({ name: 'Security' })
import { ref } from 'vue'

const protocol = ref('HTTP')
const method = ref('GET')
const auth = ref('Password')

const clientRequest = ref('')
const attackerView = ref('')
const serverView = ref('')

function sendRequest() {
  let request = ''

  if (method.value === 'GET') {
    if (auth.value === 'Password') {
      request = 'GET /login?password=1234'
    } else {
      request = 'GET /api?token=ABC123'
    }
  } else {
    if (auth.value === 'Password') {
      request = 'POST /login { password: 1234 }'
    } else {
      request = 'POST /api Header: Authorization: Bearer ABC123'
    }
  }

  clientRequest.value = request

  if (protocol.value === 'HTTP') {
    attackerView.value = request
  } else {
    attackerView.value = 'Encrypted (unreadable)'
  }

  serverView.value = 'Server validates and processes request'
}
</script>

<style scoped>
.security-demo {
  border: 1px solid var(--vp-c-divider);
  padding: 20px;
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
}

.title {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 16px;
}

.controls {
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}

.select {
  margin-left: 6px;
  padding: 4px 6px;
  border-radius: 6px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
  margin-top: 20px;
}

.panel {
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  padding: 12px;
  background: var(--vp-c-bg);
}

.panel h4 {
  margin-bottom: 8px;
  font-size: 1rem;
}

.attacker {
  border-color: #e57373;
}

.server {
  border-color: #81c784;
}

pre {
  font-size: 0.85rem;
  white-space: pre-wrap;
  word-break: break-word;
}
</style>