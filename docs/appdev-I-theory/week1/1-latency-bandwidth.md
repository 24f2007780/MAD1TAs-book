## 🕔Latency (Time delay)

::: warning How long it takes for data to travel from client → server → client
Speed of light in vacuum $\approx 3 \times 10^8 \text{ m/s}$
In copper/fiber cables $\approx 2 \times 10^8 \text{ m/s}$
:::

Rule of thumb:
  - ≈ 5 nanoseconds per meter
  - ≈ 5 milliseconds per 1000 km

- If continuous request-response: new request is sent only after receiving the response

::: danger ❓Problem 1: A student in Chennai orders clothes from a online shop which hosts a server in Delhi.
  - Distance between client and server = 2000 km
  - Signal speed $= 2 \times 10^8 \text{ m/s}$
:::

::: details Calculate the one-way delay (in ms)
$$\begin{gather} \text{ Time } = \frac{\text{Distance}}{\text{Speed}} \\ \frac{2000 \times 10^3}{2 \times 10^8} \\ = 1 \times 10^{-2} = 10\text{ milliseconds}\end{gather}$$
:::

::: details Calculate the round-trip delay (in ms)
$2 \times \text{10 ms = 20 ms}$ as student goes to delhi and delhi back to student
:::

::: details What is the maximum number of requests per second the client can make?
$$\begin{gather} \text{Requests per second} \approx \frac{1}{\text{Round-trip latency}} \\ = \frac{1}{\text{20 ms}} = \frac{1}{0.02} =
\text{50 requests/sec} \end{gather}$$
👉 Latency limits how many requests you can do per second, even if student has high bandwidth
:::

<LatencyVisualizer />

## 🌐 Bandwidth
$$
\text{Bandwidth} = (\text{Number of requests per second }) \times (\text{size of request})
$$

:::danger ❓Problem 2: A **course-selling portal** allows students to search for courses:
- HTML + CSS + JS = 18 KB
- HTTP headers = 200 B
- Total response size ≈ 18.2 KB

During peak time:
- 1,000 students are searching
- Each user makes 2 searches per second
:::

:::details How many requests per second does the server receive?
$$
1000 \times 2 = 2000 \text{ requests/sec}
$$
:::


::: details How much data (in MB per second) does the server send?
$$\begin{gather}
2000 \times 18.2 \text{ KB} = 36{,}400 \text{ KB/s} \\=  36.4 \text{ MB/s}
\end{gather}
$$
:::

::: details What is the minimum bandwidth (in Mbps) required?
$$
36.4 \times 8 = 291.2 \text{ Mbps}
$$
👉 At least **300 Mbps bandwidth** is needed to avoid congestion.
:::

---

::: danger 3.❓ Gamer streams a **live event** using own streaming server.
- Number of viewers = 50,000
- Each viewer needs a a **4 MB buffer** on the server (few seconds of video)
:::

::: details How much total memory (in GB) is required?
$$\begin{gather}
50{,}000 \times 4 \text{ MB} = 200{,}000 \text{ MB}
\\ = 200 \text{ GB}
\end{gather}
$$
:::

:::details Why is it impractical to handle this using a single server?
- RAM requirement is very high
- Network bandwidth can restrict you.
- One server failure stops the game stream⁉️

👉 Real systems use **CDNs, edge servers, and load balancing**
:::

::: info Explain why:
Increasing bandwidth does not always reduce page loading time.
:::


| Concept       | Meaning                              |
| ------------- | ------------------------------------ |
| **Latency**   | How fast data travels (time delay)   |
| **Bandwidth** | How much data can be sent per second |

For more numericals
<iframe src="https://drive.google.com/file/d/1WzbE5AQ08NXfRE6adb7sggVSy6yndeY2/preview" width="640" height="480"></iframe>