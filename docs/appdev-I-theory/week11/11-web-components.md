# Web Components
A set of browser standards to build reusable, encapsulated UI components


:::tip Note
These concepts are foundational. You will explore them in depth in **MAD-2** using frameworks like `Vue.js`, where similar ideas (components, templates, state) are applied at a higher level.
:::

#### Core Technologies
- **Custom Elements** → define new HTML tags  
- **Shadow DOM** → encapsulate structure & styling  
- **Templates & Slots** → reusable markup  

#### Why Important?
- Promotes modular architecture  
- Encourages reuse of similar components across projects. *Like profile card can be used for student, admin, company* roles dashboard while keeping it self-contained.
- Works natively in browsers (no framework required)
- **State Management** via attributes or `JS` allows built-in elements like `checkbox` → checked/unchecked 

:::danger Limited standardization in real-world usage (ecosystem adoption varies so `frameworks` are preferred)  
:::


<div class="card">
  <h2>Custom Elements</h2>

  <p>Custom Elements allow developers to define their own HTML tags with behavior using JavaScript.</p>
  <p><strong>Why needed:</strong>Modern apps need reusable, meaningful components (e.g., <code>&lt;user-card&gt;</code>).</p>
  <ul>
	<li> <code>XML</code> → allows arbitrary tags and namespaces natively</li>
	<li><code>HTML5</code>→ has fixed tags(<code>&lt;div&gt;</code>, <code>&lt;button&gt;</code>)</li></ul>
  

  <h3>Types</h3>
  <ul>
    <li><strong>Autonomous:</strong> <code>&lt;my-component&gt;</code></li>
    <li><strong>Customized built-in:</strong> <code>&lt;button is="my-button"&gt;</code></li>
  </ul>

  <h3>Minimal Syntax</h3>
  <pre><code>
class MyElement extends HTMLElement {
  connectedCallback() {
    this.innerHTML = "Hello Component";
  }
}
customElements.define("my-element", MyElement);
  </code></pre>

  <h3>Usage</h3>
  <pre><code>
&lt;my-element&gt;&lt;/my-element&gt;
  </code></pre>

  <p>Define behavior once → reuse everywhere.</p>
</div>

<div class="card">
  <h2>Shadow DOM</h2>

  <p>Shadow DOM creates an isolated DOM tree inside an element.</p>

  <p>keeps styling of component separate from script of page</p>
  <p>Encapsulation → component styles do not affect the page. (restrict scope of modification of content)</p>
  <h3>Minimal Syntax</h3>
  <pre><code>
const el = document.querySelector("#profile");
const shadow = el.attachShadow({ mode: "open" });
shadow.innerHTML = "&lt;button&gt;Click&lt;/button&gt;";
  </code></pre>
</div>



```html
<my-element></my-element>
```


<div class="card">
  <h2>HTML Templates & Slots</h2>

  <p> The <code>&lt;template&gt;</code> tag stores reusable HTML markup that is not rendered on page load. It is simpler than backend engines like **Jinja2** because it doesn't support logic (if/loops) natively.(needs Vue)</p>

  <p>Efficiently generate repeated structured content.</p>

  <h3>Minimal Syntax</h3>
  <pre><code>
&lt;template id="item"&gt;
  &lt;li&gt;&lt;span class="name"&gt;&lt;/span&gt;&lt;/li&gt;
&lt;/template&gt;
  </code></pre>

  <h3>Using the Template</h3>
  <pre><code>
const template = document.getElementById("item");
const clone = document.importNode(template.content, true);
document.body.appendChild(clone);
  </code></pre>

  <h3>Slots (for dynamic content)</h3>
  <pre><code>
&lt;slot&gt;&lt;/slot&gt;
  </code></pre>

  <p>Define once → clone many times.</p>
</div>

<CustomComponent />

- The three technologies in the stack can be used independently or collectively.


# Frameworks

Frameworks are tools that provide **predefined structure and reusable components** to simplify application development.

Instead of writing everything from scratch, developers use frameworks to handle **common tasks efficiently**.

## Why Frameworks are Needed

Without frameworks, developers must manually manage complex logic. Frameworks provide tools for:
* **UI Updates & Reactivity** (e.g., `Vue.js`, `React`)
* **State Management** (e.g., `Pinia` / `Vuex` in Vue, `Redux` in React)
* **Data Persistence & ORM** (e.g., `SQLAlchemy` in Flask, `Eloquent` in Laravel)
* **Design & Layout** (e.g., `Bootstrap`, `Tailwind CSS`)

This leads to:

* **Code repetition (boilerplate)**
* Inconsistent structure
* Increased development time

:::warning Design Patterns
Frameworks provide **standard solutions (design patterns)**, which are reusable solutions to common problems.

Examples:
* Component-based architecture
* State management
* Event-driven updates

:::

### Backend Frameworks (Server-side)

Used for:
* Handling requests `Flask, Django`
* Managing databases `SQLAlchemy`
* Rendering templates `Jinja2`


### Frontend Frameworks (Client-side)

Used for:
* Building interactive user interfaces
* Updating content dynamically

Examples:
* **Vue.js** (Used in MAD-2), **React**, **Angular**

### Full-stack / Runtime
* **Node.js** → run JavaScript outside the browser
* **Next.js** → combines frontend + backend features


## Single Page Applications (SPA)

A **Single Page Application (SPA)** loads once and updates content dynamically without reloading.
* Faster user experience
* Similar to mobile apps
* Uses JavaScript to update UI

- **Imperative (Traditional JavaScript / Web Components)**: you specify **how** to update the UI step by step

- **Declarative (Frameworks)**: you specify **what the UI should look like**, and the framework handles updates


:::details React (Not in Syllabus)
React is a frontend library that uses a **declarative, component-based approach**.

* UI is broken into **components**
* Each component manages its own **state**
* UI updates automatically when state changes

```js
function Button({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}
```
:::

Earlier, you learned:

* Custom Elements
* Shadow DOM
* Templates

Frameworks like Vue or React build on similar ideas:

| Web Components | Framework Equivalent |
| -------------- | -------------------- |
| Custom Element | Component            |
| Shadow DOM     | Scoped styling       |
| Template       | Template/JSX         |
| Slot           | Props / Slots        |
