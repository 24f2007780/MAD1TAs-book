<template>
  <div class="net-demo">
    <h2>🌐 Network Latency Visualizer</h2>

    <div class="input">
      <label>
        Total distance (km):
        <input type="number" v-model.number="totalDistanceKm" min="1" />
      </label>
    </div>

    <div class="network">
      <div class="node client">
        <img
          src="https://cdn-icons-png.flaticon.com/512/6009/6009864.png"
          alt="Client"
        />
      </div>

      <div class="link cable">
        <div class="packet"></div>
      </div>

      <div class="node router">Router</div>

      <div class="link air">
        <div class="packet fast"></div>
      </div>

      <div class="node server">
        <img
          src="https://www.freeiconspng.com/uploads/computer-server-icon-png-19.png"
          alt="Server"
        />
      </div>
    </div>

    <button @click="simulate">▶ Send Request</button>

    <pre class="result">{{ output }}</pre>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const totalDistanceKm = ref(18000)
const output = ref('Click "Send Request" to calculate RTT')

// convert number to scientific notation (×10^n)
function sci(n) {
  const exp = Math.floor(Math.log10(Math.abs(n)))
  const mantissa = (n / Math.pow(10, exp)).toFixed(2)
  return `${mantissa} × 10^${exp}`
}

function simulate() {
  const totalDistanceM = totalDistanceKm.value * 1000
  const halfDistanceM = totalDistanceM / 2

  const cableSpeed = 1.5e8
  const airSpeed = 3e8

  const cableTimeSec = halfDistanceM / cableSpeed
  const airTimeSec = halfDistanceM / airSpeed

  const oneWaySec = cableTimeSec + airTimeSec
  const rttMs = oneWaySec * 2 * 1000

  output.value = `
GIVEN:
Total distance = ${totalDistanceKm.value} km
Router placed exactly at midpoint

STEP 1: Distance split
Client → Router = ${totalDistanceKm.value / 2} km
Router → Server = ${totalDistanceKm.value / 2} km

STEP 2: Time = Distance / Speed

Cable (1.5 × 10⁸ m/s):
t₁ = (${sci(halfDistanceM)}) / (1.5 × 10⁸)
   = ${cableTimeSec.toFixed(2)} s = ${(cableTimeSec*1000).toFixed(2)} ms

Air (3 × 10⁸ m/s):
t₂ = (${sci(halfDistanceM)}) / (3 × 10⁸)
   = ${airTimeSec.toFixed(2)} s = ${(airTimeSec*1000).toFixed(2)} s

STEP 3: Round-trip latency
RTT = 2 × ${(oneWaySec * 1000).toFixed(2)} ms
    = ${rttMs.toFixed(0)} ms

FINAL ANSWER:
✔ Round-trip latency ≈ ${rttMs.toFixed(0)} ms
`
}
</script>

<style scoped>
.net-demo {
  color:#000;
  border: 1px solid #ffffff;
  padding: 16px;
  border-radius: 10px;
  background: #fff;
}

/* INPUT */
.input {
  margin: 12px 0;
}

.input input {
  margin-left: 8px;
  padding: 4px 6px;
  width: 130px;
  background: #fff;
  border: 1px solid #000;
  border-radius: 4px;
  outline: none;
}

.input input:focus {
  border: 2px solid #000;
}

/* NETWORK DIAGRAM */
.network {
  display: flex;
  align-items: center;
  margin: 20px 0;
}

.node {
  width: 90px;
  text-align: center;
  padding: 8px;
  border-radius: 6px;
  font-weight: bold;
  border: 1px solid #000;
  background: #fff;
}

.node img {
  width: 48px;
}

.client { background: #e0e7ff; }
.router { background: #fef3c7; }
.server { background: #dcfce7; }

.link {
  flex: 1;
  height: 6px;
  margin: 0 6px;
  position: relative;
  overflow: hidden;
  border: 1px solid #000;
}

.cable { background: #2563eb; }
.air { background: #16a34a; }

.packet {
  position: absolute;
  top: -4px;
  width: 12px;
  height: 12px;
  background: red;
  border-radius: 50%;
  animation: move 2s linear infinite;
}

.fast {
  animation-duration: 1s;
}

@keyframes move {
  from { left: -10px; }
  to { left: 100%; }
}

/* OUTPUT */
.result {
  margin-top: 12px;
  background: #fff;
  border: 1px solid #000;
  padding: 12px;
  border-radius: 6px;
  white-space: pre-wrap;
  font-family: monospace;
}

/* BUTTON */
button {
  margin-top: 8px;
  padding: 8px 16px;
  background: #000;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  background: #222;
}
</style>
