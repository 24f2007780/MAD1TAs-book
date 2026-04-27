<template>
  <div class="p-8">
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-4xl font-bold mb-2">Web Components</h1>
        <p class="text-gray-600">Build reusable, encapsulated UI components with native browser APIs</p>
      </div>

      <!-- Tabs -->
      <div class="flex gap-3 mb-8 flex-wrap">
        <button
          v-for="tab in tabs"
          :key="tab.name"
          @click="active = tab.name"
          :class="active === tab.name
            ? 'bg-blue-600 text-white border-blue-600 shadow-lg scale-105'
            : 'bg-gray-100 text-gray-800 border-gray-300 hover:bg-gray-200'"
          class="px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 text-sm border-2"
        >
          <span class="text-lg">{{ tab.icon }}</span>
          {{ tab.name }}
        </button>
      </div>

      <!-- Content: 2-Column Layout -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- LEFT: PREVIEW -->
        <div class="border rounded-lg p-6">
          <h2 class="text-2xl font-bold mb-4">Preview</h2>

          <!-- Shadow DOM Demo -->
          <div v-if="active === 'Shadow DOM'" class="space-y-4">
            <p class="text-sm text-gray-600">Interactive counter with encapsulated styles:</p>
            <div class="p-6 flex justify-center">
              <simple-counter start="5"></simple-counter>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg border">
              <p class="text-sm text-gray-700">
                <strong>Counter Value:</strong> <span class="text-2xl font-bold text-blue-600">{{ count }}</span>
              </p>
            </div>
          </div>

          <!-- Custom Element Demo -->
          <div v-if="active === 'Custom Element'" class="space-y-4">
            <p class="text-sm text-gray-600">Reusable flag components for different countries:</p>
            <div class="p-6 flex justify-center gap-6 flex-wrap">
              <div class="text-center">
                <flag-icon country="in"></flag-icon>
                <p class="text-xs text-gray-600 mt-2">India</p>
              </div>
              <div class="text-center">
                <flag-icon country="us"></flag-icon>
                <p class="text-xs text-gray-600 mt-2">USA</p>
              </div>
              <div class="text-center">
                <flag-icon country="jp"></flag-icon>
                <p class="text-xs text-gray-600 mt-2">Japan</p>
              </div>
            </div>
          </div>

          <!-- Template & Slot Demo -->
          <div v-if="active === 'Template & Slot'" class="space-y-4">
            <p class="text-sm text-gray-600">Cloning templates to render a list of books:</p>
            <div class="p-6">
              <template id="book-template">
                <li class="p-3 bg-white rounded border-l-4 border-blue-500 mb-2">
                  <div class="font-semibold text-gray-700 title"></div>
                  <div class="text-xs text-gray-500 author"></div>
                </li>
              </template>
              <ul ref="bookList" class="list-none"></ul>
            </div>
          </div>
        </div>

        <!-- RIGHT: CODE -->
        <div class="bg-gray-100 rounded-lg p-6 border overflow-hidden">
          <h2 class="text-2xl font-bold mb-4">Code</h2>

          <!-- Shadow DOM Code -->
          <pre v-if="active === 'Shadow DOM'" class="text-xs leading-relaxed overflow-x-auto font-mono text-gray-800"><code>
class SimpleCounter extends HTMLElement {
  connectedCallback() {
    this.shadow = this.attachShadow({ 
      mode: 'open' 
    })
    
    this.shadow.innerHTML = `
      &lt;style&gt;
        button { background: white; }
      &lt;/style&gt;
      &lt;button id="inc"&gt;+&lt;/button&gt;
      &lt;span id="num"&gt;0&lt;/span&gt;
    `
  }
}

customElements.define(
  'simple-counter', 
  SimpleCounter
)</code></pre>

          <!-- Custom Element Code -->
          <pre v-if="active === 'Custom Element'" class="text-xs leading-relaxed overflow-x-auto font-mono text-gray-800"><code>
class FlagIcon extends HTMLElement {
  connectedCallback() {
    const code = this.getAttribute('country')
    this.innerHTML = `
      &lt;img src="https://flagcdn.com/w80/
${'{code}'}.png"&gt;
    `
  }
}

customElements.define('flag-icon', FlagIcon)

// Usage:
// &lt;flag-icon country="in"&gt;&lt;/flag-icon&gt;</code></pre>

          <!-- Template Code -->
          <pre v-if="active === 'Template & Slot'" class="text-xs leading-relaxed overflow-x-auto font-mono text-gray-800"><code>
&lt;template id="book-template"&gt;
  &lt;li&gt;
    &lt;span class="title"&gt;&lt;/span&gt;
    &lt;span class="author"&gt;&lt;/span&gt;
  &lt;/li&gt;
&lt;/template&gt;

const template = document.getElementById(
  'book-template'
)
const clone = template.content
  .cloneNode(true)

clone.querySelector('.title')
  .textContent = 'My Book'
  
document.body.appendChild(clone)</code></pre>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, nextTick } from 'vue'

defineOptions({ name: 'WebComponents' })

const tabs = [
  { name: 'Shadow DOM', icon: '🔒' },
  { name: 'Custom Element', icon: '🏷️' },
  { name: 'Template & Slot', icon: '📋' }
]

const active = ref('Shadow DOM')
const count = ref(0)
const bookList = ref(null)

const renderTemplate = () => {
  if (!bookList.value) return

  bookList.value.innerHTML = ''

  const template = document.getElementById('book-template')
  if (!template) return

  const books = [
    { title: '📚 The Web Platform Guide', author: 'Chrome Docs' },
    { title: '🔧 Custom Elements Handbook', author: 'Open Web Docs' },
    { title: '⚙️ Shadow DOM Essentials', author: 'MDN' }
  ]

  books.forEach((book) => {
    const clone = template.content.cloneNode(true)
    const titleEl = clone.querySelector('.title')
    const authorEl = clone.querySelector('.author')

    if (titleEl) titleEl.textContent = book.title
    if (authorEl) authorEl.textContent = book.author

    bookList.value.appendChild(clone)
  })
}

watch(active, async (tab) => {
  if (tab === 'Template & Slot') {
    await nextTick()
    renderTemplate()
  }
})

onMounted(() => {
  // SHADOW DOM: Interactive Counter
  class SimpleCounter extends HTMLElement {
    constructor() {
      super()
      this.shadow = this.attachShadow({ mode: 'open' })
      this.shadow.innerHTML = `
        <style>
          :host {
            display: inline-flex;
            gap: 12px;
            align-items: center;
            padding: 12px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 8px;
            font-weight: bold;
            color: white;
          }
          button {
            width: 36px;
            height: 36px;
            border: none;
            border-radius: 6px;
            background: white;
            color: #667eea;
            font-weight: bold;
            cursor: pointer;
            font-size: 16px;
            transition: transform 0.2s;
          }
          button:hover { transform: scale(1.1); }
          button:active { transform: scale(0.95); }
          #num { font-size: 20px; min-width: 40px; }
        </style>
        <button id="dec">−</button>
        <span id="num">0</span>
        <button id="inc">+</button>
      `
      this.numEl = this.shadow.querySelector('#num')
      this.v = 0
    }

    connectedCallback() {
      this.v = parseInt(this.getAttribute('start')) || 0
      this.shadow.querySelector('#inc').onclick = () => {
        this.v++
        this.update()
      }
      this.shadow.querySelector('#dec').onclick = () => {
        this.v--
        this.update()
      }
      this.render()
    }

    render() {
      this.numEl.textContent = this.v
    }

    update() {
      this.render()
      this.dispatchEvent(
        new CustomEvent('count-change', {
          detail: { value: this.v },
          bubbles: true,
          composed: true
        })
      )
    }
  }

  if (!customElements.get('simple-counter')) {
    customElements.define('simple-counter', SimpleCounter)
  }

  document.addEventListener('count-change', (e) => {
    count.value = e.detail.value
  })

  // CUSTOM ELEMENT: Flag Icon
  class FlagIcon extends HTMLElement {
    connectedCallback() {
      const code = this.getAttribute('country')
      this.innerHTML = `
        <style>
          img { 
            width: 80px; 
            height: 60px; 
            border-radius: 6px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            transition: transform 0.3s;
          }
          img:hover { transform: scale(1.1); }
        </style>
        <img src="https://flagcdn.com/w80/${code}.png" alt="${code}">
      `
    }
  }

  if (!customElements.get('flag-icon')) {
    customElements.define('flag-icon', FlagIcon)
  }
})
</script>

<style scoped>
pre {
  white-space: pre-wrap;
  word-break: break-word;
}
</style>