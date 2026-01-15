<template>
  <div class="page">
    <div class="card">
      <h1>Binary ⇄ Decimal Converter (Step‑by‑Step)</h1>

      <!-- Mode Selector -->
      <div class="center">
        <select v-model="mode">
          <option disabled value="">Select Conversion</option>
          <option value="binary">Binary → Decimal</option>
          <option value="decimal">Decimal → Binary</option>
        </select>
      </div>

      <!-- Input -->
      <div class="center">
        <div class="input-box">
          <label>{{ mode === 'binary' ? 'Binary Input' : 'Decimal Input' }}</label>
          <input
            v-if="mode === 'binary'"
            v-model="binaryInput"
            type="text"
            placeholder="Example: 10010011"
          />
          <input
            v-if="mode === 'decimal'"
            v-model="decimalInput"
            type="number"
            placeholder="Example: 147"
          />
        </div>
      </div>

      <!-- Buttons -->
      <div class="center buttons">
        <button class="btn primary" @click="convert">Convert</button>
        <button class="btn secondary" @click="reset">Reset</button>
      </div>

      <!-- Binary → Decimal -->
      <section v-if="mode === 'binary' && binarySteps.length">
        <h2>Binary → Decimal (2ⁿ Method)</h2>

        <div class="center">
        <table class="power-table">
          <tbody>
            <tr>
              <td v-for="s in binarySteps" :key="s.power">{{ s.bit }}</td>
            </tr>
            <tr>
              <td v-for="s in binarySteps" :key="s.power">
                2<sup>{{ s.power }}</sup>
              </td>
            </tr>
            <tr>
              <td v-for="s in binarySteps" :key="s.power">{{ s.value }}</td>
            </tr>
          </tbody>
        </table>
        </div>

        <p class="result">
          {{ binaryText }} = {{ decimalResult }}
        </p>
      </section>

      <!-- Decimal → Binary -->
      <section v-if="mode === 'decimal' && decimalSteps.length">
        <h2>Decimal → Binary (Division by 2)</h2>

        <div class="center pf-wrap">
          <table class="pf-table">
            <thead>
              <tr>
                <th colspan="2">÷ 2</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, i) in decimalSteps" :key="i">
                <td class="q">{{ row.quotient }}</td>
                <td class="r">{{ row.remainder }}</td>
              </tr>
            </tbody>
          </table>


          <div class="arrow">
            ↑
            <span>read bottom → top</span>
          </div>
        </div>

        <p class="result">
          Binary: <span class="mono">{{ binaryResult }}</span>
        </p>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineOptions({ name: 'BinaryDecimal' })

const mode = ref('')
const binaryInput = ref('')
const decimalInput = ref('')

const binarySteps = ref([])
const decimalSteps = ref([])

const decimalResult = ref(0)
const binaryResult = ref('')
const binaryText = ref('')

function toSuperscript(n) {
  const map = {
    '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴',
    '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹'
  }
  return String(n).split('').map(d => map[d]).join('')
}
('')

function convert() {
  resetResults()
  if (mode.value === 'binary') binaryToDecimal()
  if (mode.value === 'decimal') decimalToBinary()
}

function binaryToDecimal() {
  const bits = binaryInput.value.split('').reverse()
  let sum = 0
  let terms = []

  bits.forEach((bit, i) => {
    const val = bit === '1' ? 2 ** i : 0
    sum += val
    binarySteps.value.unshift({ bit, power: i, value: val })
    if (bit === '1') terms.push(`2${toSuperscript(i)}`)
  })

  binaryText.value = terms.join(' + ')
  decimalResult.value = sum
}

function decimalToBinary() {
  let n = Number(decimalInput.value)
  const rem = []

  while (n > 0) {
    const r = n % 2
    decimalSteps.value.push({ quotient: n, remainder: r })
    rem.push(r)
    n = Math.floor(n / 2)
  }

  binaryResult.value = rem.reverse().join('') || '0'
}

function reset() {
  mode.value = ''
  binaryInput.value = ''
  decimalInput.value = ''
  resetResults()
}

function resetResults() {
  binarySteps.value = []
  decimalSteps.value = []
  binaryResult.value = ''
  decimalResult.value = 0
  binaryText.value = ''
}
</script>

<style scoped>
/* ===== Page & Card ===== */
.page {
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--vp-c-bg-soft), var(--vp-c-bg));
}

.card {
  width: 100%;
  max-width: 900px;
  background: var(--vp-c-bg);
  border-radius: 16px;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.08);
}

/* ===== Typography ===== */
h1, h2 {
  text-align: center;
  color: var(--vp-c-brand-1);
}

label {
  color: var(--vp-c-brand-1);
}

/* ===== Layout Helpers ===== */
.center {
  display: flex;
  justify-content: center;
}

.input-box {
  width: 100%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.buttons {
  gap: 1rem;
  margin-top: 0.5rem;
}

/* ===== Inputs ===== */
input, select {
  padding: 0.6rem;
  font-size: 1rem;
  border-radius: 8px;
  border: 2px solid var(--vp-c-brand-2);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
}

/* ===== Buttons ===== */
.btn {
  padding: 0.6rem 1.6rem;
  border-radius: 999px;
  border: none;
  font-weight: 600;
  cursor: pointer;
}

.primary {
  background: var(--vp-button-brand-bg);
  color: var(--vp-button-brand-text);
}

.secondary {
  background: var(--vp-c-brand-3);
  color: white;
}

/* ===== Tables ===== */
.power-table {
  border-collapse: collapse;
  border: 2px solid var(--vp-c-brand-2);
  font-family: monospace;
}

.power-table td {
  padding: 0.5rem 0.8rem;
  text-align: center;
  border-bottom: 1px solid var(--vp-c-brand-2);
}

.power-table tr:last-child td {
  border-bottom: none;
}

/* Prime factorisation */
.pf-wrap {
  gap: 1.2rem;
  align-items: flex-start;
}

.pf-table {
  border-left: 3px solid var(--vp-c-brand-2);
  border-top: 2px solid var(--vp-c-brand-2);
  border-collapse: collapse;
  font-family: monospace;
}

.pf-table th {
  padding: 0.4rem;
  border-bottom: 2px solid var(--vp-c-brand-2);
}

.pf-table td {
  padding: 0.4rem 1rem;
  border-bottom: 1px solid var(--vp-c-brand-2);
}

.pf-table tr:last-child td {
  border-bottom: none;
}

.q { text-align: right; }
.r { font-weight: bold; }

/* Arrow */
.arrow {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--vp-c-brand-1);
  font-size: 2rem;
}

.arrow span {
  font-size: 0.75rem;
}

/* Result */
.result {
  text-align: center;
  margin-top: 0.6rem;
  font-weight: 600;
}

.mono {
  font-family: monospace;
}
</style>
