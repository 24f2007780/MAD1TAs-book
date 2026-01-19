<template>
  <div class="page">
    <div class="card">
      <h1>Number System Converter (Practice + Steps)</h1>

      <!-- Conversion Path Explanation -->
      <div class="path" v-if="pathText">
        <strong>Conversion Path:</strong>
        <span class="arrow-text">{{ pathText }}</span>
        <p class="path-desc">{{ pathDesc }}</p>
      </div>

      <!-- From / To -->
      <div class="row">
        <div class="field">
          <label>From</label>
          <select v-model="fromBase">
            <option value="2">Binary (Base 2)</option>
            <option value="8">Octal (Base 8)</option>
            <option value="10">Decimal (Base 10)</option>
            <option value="16">Hexadecimal (Base 16)</option>
          </select>
        </div>

        <div class="field">
          <label>To</label>
          <select v-model="toBase">
            <option value="2">Binary (Base 2)</option>
            <option value="8">Octal (Base 8)</option>
            <option value="10">Decimal (Base 10)</option>
            <option value="16">Hexadecimal (Base 16)</option>
          </select>
        </div>
      </div>

      <!-- Input -->
      <div class="field">
        <label>Input Value</label>
        <input v-model="input" placeholder="Enter number" />
      </div>

      <!-- Buttons -->
      <div class="buttons">
        <button class="btn primary" @click="convert">Check Answer</button>
        <button class="btn secondary" @click="reset">Reset</button>
      </div>

      <!-- Result -->
      <div v-if="result !== null" class="result-box">
        <h3>Final Answer</h3>
        <p class="answer">{{ result }}</p>
      </div>

      <!-- Step 1 -->
      <section v-if="powerTable.length">
        <h3>Step 1: Convert {{ baseName(fromBase) }} → Decimal</h3>
        <p class="step-desc">
          Each digit is multiplied by its positional power of {{ fromBase }}
        </p>

        <table class="step-table">
          <tbody>
            <tr>
              <td v-for="(p,i) in powerTable" :key="i">{{ p.digit }}</td>
            </tr>
            <tr>
              <td v-for="(p,i) in powerTable" :key="i">
                {{ fromBase }}<sup>{{ p.power }}</sup>
              </td>
            </tr>
            <tr>
              <td v-for="(p,i) in powerTable" :key="i">{{ p.value }}</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- Step 2 -->
      <section v-if="divisionTable.length">
        <h3>Step 2: Convert Decimal → {{ baseName(toBase) }}</h3>
        <p class="step-desc">
          Repeatedly divide by {{ toBase }} and record remainders
        </p>

        <table class="pf-table">
          <thead>
            <tr>
              <th>Number</th>
              <th>Remainder</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(r,i) in divisionTable" :key="i">
              <td>{{ r.number }}</td>
              <td>{{ r.remainder }}</td>
            </tr>
          </tbody>
        </table>

        <p class="hint">Read remainders bottom → top</p>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

defineOptions({ name: 'NumberSystemConverter' })

const fromBase = ref('10')
const toBase = ref('2')
const input = ref('')

const result = ref(null)
const powerTable = ref([])
const divisionTable = ref([])

const HEX = '0123456789ABCDEF'

/* ---------- Explanation Logic ---------- */
const pathText = computed(() => {
  if (!input.value) return ''
  if (fromBase.value === toBase.value) return ''
  if (fromBase.value === '10') return `Decimal → ${baseName(toBase.value)}`
  if (toBase.value === '10') return `${baseName(fromBase.value)} → Decimal`
  return `${baseName(fromBase.value)} → Decimal → ${baseName(toBase.value)}`
})

const pathDesc = computed(() => {
  if (fromBase.value === '10')
    return `Use division method by ${toBase.value}`
  if (toBase.value === '10')
    return `Use positional powers of ${fromBase.value}`
  return `First use powers of ${fromBase.value}, then divide by ${toBase.value}`
})

function baseName(b) {
  return {
    2: 'Binary',
    8: 'Octal',
    10: 'Decimal',
    16: 'Hexadecimal'
  }[b]
}

/* ---------- Core Logic ---------- */
function reset() {
  input.value = ''
  result.value = null
  powerTable.value = []
  divisionTable.value = []
}

function convert() {
  powerTable.value = []
  divisionTable.value = []

  const from = Number(fromBase.value)
  const to = Number(toBase.value)

  if (!input.value) return

  let decimal

  if (from === 10) {
    decimal = Number(input.value)
  } else {
    decimal = toDecimal(input.value, from)
  }

  if (to === 10) {
    result.value = decimal
  } else {
    result.value = fromDecimal(decimal, to)
  }
}

function toDecimal(val, base) {
  const digits = val.toUpperCase().split('').reverse()
  let sum = 0

  digits.forEach((d, i) => {
    const n = HEX.indexOf(d)
    const v = n * Math.pow(base, i)
    sum += v
    powerTable.value.unshift({ digit: n, power: i, value: v })
  })

  return sum
}

function fromDecimal(num, base) {
  let n = num
  const out = []

  while (n > 0) {
    const r = n % base
    divisionTable.value.push({ number: n, remainder: HEX[r] })
    out.push(HEX[r])
    n = Math.floor(n / base)
  }

  return out.reverse().join('') || '0'
}
</script>

<style scoped>
.page {
  display: flex;
  justify-content: center;
}

.card {
  max-width: 900px;
  width: 100%;
  background: var(--vp-c-bg);
  border-radius: 16px;
  box-shadow: 0 12px 30px rgba(0,0,0,0.08);
}

h1, h3 {
  text-align: center;
  color: var(--vp-c-brand-1);
}

.path {
  background: var(--vp-c-brand-soft);
  border-left: 4px solid var(--vp-c-brand-2);
  padding: 0.6rem 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
}

.arrow-text {
  margin-left: 0.4rem;
  font-weight: 600;
}

.path-desc {
  font-size: 0.85rem;
  margin-top: 0.2rem;
}

.row {
  display: flex;
  gap: 1rem;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

input, select {
  padding: 0.6rem;
  border-radius: 8px;
  border: 2px solid var(--vp-c-brand-2);
}

.buttons {
  display: flex;
  gap: 1rem;
  margin-top: 0.8rem;
}

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
  color: #fff;
}

.step-desc {
  text-align: center;
  font-size: 0.9rem;
  margin-bottom: 0.4rem;
}

.step-table,
.pf-table {
  margin: 1rem auto;
  border-collapse: collapse;
  font-family: monospace;
}

.step-table td,
.pf-table td,
.pf-table th {
  border: 1px solid var(--vp-c-divider);
  padding: 6px 12px;
  text-align: center;
}

.hint {
  text-align: center;
  font-size: 0.85rem;
}
</style>
