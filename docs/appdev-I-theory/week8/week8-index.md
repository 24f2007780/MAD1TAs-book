# Week 8

<SessionResources :week="8" />

This week focuses on **client-side computation, performance, and security in web applications**. You will explore how modern browsers execute code beyond basic HTML/CSS, including **JavaScript engines, WebAssembly (WASM), and validation mechanisms**.

You will learn how asynchronous execution and client-side scripting improve performance, how **WebAssembly enables near-native execution**, and how validation is handled across frontend and backend systems. The week also highlights **security implications**, including sandboxing, denial-of-service (DoS), and misuse of client resources.

By the end of this week, you should be able to:

- Understand **client-side computation** and browser execution models
- Explain the role of **WebAssembly (WASM)** and its performance benefits
- Differentiate between **client-side and server-side validation**
- Implement **HTML5 and JavaScript-based validation techniques**
- Understand **security risks** such as sandbox escape, DoS, and malicious scripts
- Analyze how browsers manage **resource access and isolation**

---

### Topics Covered

- **[Client-Side Computation & Performance](8-frontend.md)**
  JavaScript engines (`V8`, SpiderMonkey), CPU/GPU usage, client load, and implications for performance and energy consumption.

- **[Asynchronous DOM Manipulation](8-async-dom.md)**  
  Learn how web pages update dynamically using asynchronous requests without reloading the entire page.  
  Understand how JavaScript interacts with the DOM, handles API calls, and enables responsive, real-time user experiences.

- **[Client-Side Validation](8-client-validation.md)**
  Introduction to WASM, HTML5 form validation (`required`, `pattern`, etc.), JavaScript Constraint Validation API, and comparison with server-side validation. Importance of stateless HTTP and re-validation on the server.Sandboxing, access to native resources, CAPTCHA systems, crypto-mining risks, and Denial of Service (DoS) attacks in client-server environments.
