
# Representing Text 
::: tip Representing Text on computers
Computers only work with **bits** $0/1$. So we need some Standard “encoding” i.e. **some sequence of bits represent a specific character**
:::


## ASCII

::: tip American Standard Code for **Information Interchange**: is a character encoding between Machines or humans → standard that assigns a unique numerical value to each character. 
$$\begin{gather}\text{We use 7-bits because $2^7$ 128 different entities can fit i.e. numbers + English 26 letters }\\\underbrace{0...9}_{48 -57}+\underbrace{A...Z}_{65 -90}+ \underbrace{a...z}_{97-122}
\end{gather}$$
![](https://blog.gcwizard.net/wp-content/uploads/2021/01/ASCII-code.png)

But if we want to include `!@# %&*() -Ľätīń/Rõman` then  $2^8 =256$ we use 8 bit ASCII


- `"A"` in binary is `01000001`=$2^6+2^0=64+1=65$ 
- `"a"` in binary is `01100001`=$2^6+ 2^5 + 2^0= 64+32+1=97$
- If you notice both letters are almost the same in binary just the 5th digit (start from the right with 0) is different. UPPER "A" has 0, LOWER "a" has 1
:::

ASCII works well for English✅ but the world has many languages अ (Hindi), அ (Tamil), 不 (Chinese)
cannot be represented in 7-bit ASCII⚠️

## Unicode
Unicode is a `universal character standard` that assigns a unique number (code point) to every character, across:
- All major languages
- Symbols, emojis, math, arrows, etc
Characters are written as `code points`:
$$\text{U+XXXX (hexadecimal)}$$

&emsp;&emsp;&emsp;&emsp;&emsp; 'a' → `U+0061` &emsp;&emsp;&emsp;&emsp;&emsp; 'अ' → `U+0905` &emsp;&emsp;&emsp;&emsp; 😀 → `U+1F600`

#### Unicode Encodings (UCS)

To store Unicode characters in memory, we need an encoding.
| Encoding           | Bytes per character | Max characters               |
| ------------------ | ------------------- | ---------------------------- |
| **UCS-2**          | 2 bytes             | $2^{16}=65,536$            |
| **UCS-4 / UTF-32** | 4 bytes             | $2^{32} \approx \text{ 4.3 billion}$ |


:::details Problem 1.❓ A text document contains:<br>**1000 words**<br>Approximately **5000 characters** (including spaces)<br>How much bits will be required to store it in `UCS-4, 8 bit ASCII, 7 bit ASCII, 6 bits`?

| Encoding Scheme           | Bits per Character | Total Bits Required               |
| ------------------------- | ------------------ | --------------------------------- |
| UCS-4                     | 32 bits            | $32 \times 5000 = 160{,}000$ bits |
| ASCII (8-bit)             | 8 bits             | $8 \times 5000 = 40{,}000$ bits   |
| Original ASCII            | 7 bits             | $7 \times 5000 = 35{,}000$ bits   |
| Minimal alphabet encoding | ~6 bits            | $6 \times 5000 = 30{,}000$ bits   |

- [frequency of occurrence (e,t,a,o are commonly used) Huffmann](https://engineering.purdue.edu/ece264/17au/hw/HW13?alt=huffman)  `zip` compression independent of data, ~ algo
:::

- ⚠️UCS-4 uses 4 bytes per character so even 'A' wastes `32 bits`
  - ✅Use short encodings for common characters (1 byte for alphabets)
  - ✅Use longer encodings for rare characters

➡️ This leads to Prefix Coding

Decoder must:
- Read `1st byte PREFIX` as tells how many bytes follow
- Read remaining bytes

|     | 1st Byte | 2nd Byte | 3rd Byte | 4th Byte | Maximum Expressible Unicode Value |
| --- | -------- | -------- | -------- | -------- | --------------------------------- |
| Unicode Transformation Format | 0xxxxxxx |          |          |          | 007F hex ($2^7=127$)              |
| Eng UTF-8  | 110xxxxx | 10xxxxxx |          |          | 07FF hex ($2^{11}=2047$)          |
|latin/other UTF-16 bits | 1110xxxx | 10xxxxxx | 10xxxxxx |          | FFFF hex ($2^{16}=65535$)         |
| UTF-32/UCS-4 | 11110xxx | 10xxxxxx | 10xxxxxx | 10xxxxx  | 10FFFF hex ($2^{21}=1,114,111$)   |

### Why UTF-8 is the most successful Unicode encoding?
✅ Backward compatible with ASCII<br>
✅ Efficient for English text<br>
✅ Can encode all Unicode characters<br>
✅ Most common encoding on the Web 🌐
<iframe
  width="100%"
  height="400"
  src="https://www.youtube.com/embed/MijmeoH9LT4"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen>
</iframe>

## Markup

Markup is a way of adding special cues or codes within normal text to control how the text is structured or displayed, making it *clearer and easier to understand*.
<div class="card">
  <h3>
    1. Presentational Markup
  </h3>
  <ul>
    <li>Focuses on <strong>how text looks</strong></li>
    <li>Formatting codes are <em>specific to the editor</em>, not part of regular text</li>
    <li>Does <strong>not</strong> describe the meaning of content</li>
    <li>✅ <strong>WYSIWYG</strong> (What You See Is What You Get) → direct visual editing</li>
    <li><strong>Examples:</strong> MS Word, Google Docs</li>
  </ul>
</div>

<div class="card">
  <h3>
    2. Procedural Markup
  </h3>
  <ul>
    <li>Describes <strong>steps or procedures</strong> to format text</li>
    <li>Example instructions:</li>
    <ul>
      <li>1️⃣ Change font → make it large and bold</li>
      <li>2️⃣ Indent by two lines</li>
    </ul>
    <li>Emphasizes <strong>how to format</strong>, not what the content means</li>
  </ul>
</div>

<div class="card">
  <h3>
    3. Descriptive Markup
  </h3>
  <ul>
    <li>Describes the <strong>meaning and structure</strong> of content</li>
    <li>Actual appearance is decided by the <strong>renderer</strong> (browser / compiler)</li>
    <li>✅ Clear semantic meaning</li>
    <li>❌ Not WYSIWYG while writing</li>
    <li>
      Example structure:
      <code>&lt;title&gt; with &lt;heading&gt; within 2 &lt;paragraph&gt;s</code>
    </li>
    <li><strong>Examples:</strong> LaTeX, HTML</li>
  </ul>
</div>
