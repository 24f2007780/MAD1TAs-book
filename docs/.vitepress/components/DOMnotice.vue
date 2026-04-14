<template>
  <div :class="['app', dark ? 'dark' : 'light']">

    <!-- Header -->
    <div class="header">
      <h2>🌳 DOM Tree + Code Visualizer</h2>
    </div>

    <div class="grid">

      <!-- 🌳 DOM TREE -->
      <div class="panel">
        <h3>DOM Tree</h3>
        <div class="tree">
          document
          <div class="child">
            html
            <div class="child">head</div>
            <div class="child">
              body
              <div class="child">h1 → "{{ heading }}"</div>
              <div class="child" v-for="(p, i) in paragraphs" :key="i">
                p → "{{ p }}"
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 💻 CODE -->
      <div class="panel">
        <h3>JavaScript Code</h3>
        <pre><code>{{ code }}</code></pre>
      </div>

    </div>

    <!-- 🎮 CONTROLS -->
    <div class="controls">
      <button @click="updateHeader">Update Header</button>
      <button @click="addPara">Add Paragraph</button>
      <button @click="removePara">Remove Paragraph</button>
    </div>

    <!-- 👁️ OUTPUT -->
    <div class="output">
      <h1>{{ heading }}</h1>
      <p v-for="(p, i) in paragraphs" :key="i">{{ p }}</p>
    </div>

  </div>
</template>

<script>
export default {
name: "DOMNotice",
  data() {
    return {
      dark: false,

      // simulated DOM state
      heading: "Original Heading",
      paragraphs: ["First paragraph"],

      // code display
      code: "// Click a button to see DOM code"
    };
  },

  methods: {
    updateHeader() {
      this.heading = "A dynamic document";

      this.code = `// Select element
const header = document.querySelector("h1");

// Update text
header.textContent = "A dynamic document";`;
    },

    addPara() {
      this.paragraphs.push("New paragraph added!");

      this.code = `// Create new element
const newPara = document.createElement("p");

// Add text
newPara.textContent = "New paragraph added!";

// Append to body
document.body.appendChild(newPara);`;
    },

    removePara() {
      this.paragraphs.pop();

      this.code = `// Select all paragraphs
const paras = document.querySelectorAll("p");

// Remove last paragraph
paras[paras.length - 1].remove();`;
    }
  }
};
</script>

<style>
.container {
  font-family: var(--vp-font-family-base);
  max-width: 100%;
}

/* panels consistent with your .card style */
.panel {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  padding: 1.2rem 1.4rem;
}

/* tree styling */
.tree {
  font-family: monospace;
  color: var(--vp-c-text-1);
}

.child {
  margin-left: 1.2rem;
}

/* code block matches theme */
pre {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  padding: 0.8rem;
  overflow-x: auto;
}

/* buttons → use VitePress button tokens */
button {
  background: var(--vp-button-brand-bg);
  color: var(--vp-button-brand-text);
  border: var(--vp-button-brand-border);
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  background: var(--vp-button-brand-hover-bg);
}

/* output box */
.output {
  margin-top: 1rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  padding: 1rem;
}
</style>