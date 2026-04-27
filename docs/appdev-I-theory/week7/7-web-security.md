
#  Web Application Security

## SQL Injection
SQL Injection is a code injection attack where malicious input is used to manipulate database queries.

<SQLinjection />

## Prevention Techniques

#### 1. ORM (Object Relational Mapping)
- SQLAlchemy automatically handles query sanitization
- Use well-maintained frameworks and system updates (OS, server software latest stable version with security updates and patches)

#### 2. Input Validation
- Always validate on **server-side** (not just HTML/JS)
- Reject malformed or suspicious inputs: check for empty values, length limits, and correct data formats.

#### 3. Principle of Least Privilege
- DB user should have minimal permissions


## HTTPS (Secure Communication)

HTTPS secures communication between:

```text
Client ⇄ Server
```

using **TLS (Transport Layer Security)**.


### How HTTPS Works

1. Server provides a **digital certificate**
2. Certificate is verified by a trusted authority
3. A secure encrypted channel is established
4. All data is transmitted securely


:::details Other Vulnerabilities (You will learn in [9-Security.md](..week9/9-Security.md))
- **Buffer Overflow**: Memory overwrite due to excess input → crash or exploit
- **Input Overflow**: input exceeds expected size → unexpected behavior
- **XSS (Cross-Site Scripting)**: inject malicious scripts into web pages
- Encrypt sensitive data like passwords (hashing + salt)
Use **CSRF tokens** to prevent unauthorized requests i.e. Fake requests executed on behalf of user.

:::tip Hashing vs. Encryption
- **Encryption**: A two-way process. Data is scrambled with a key and can be unscrambled back to its original form. Used for secure data transmission.
- **Hashing**: A one-way process. Data is transformed into a fixed-length string (a "hash"). You cannot reverse a hash to get the original data. Used for storing passwords securely.
:::

:::info Rate Limiting
To prevent **Brute Force** attacks (where an attacker tries millions of password combinations), implement **Rate Limiting**. This limits how many requests a single user or IP address can make in a given timeframe (e.g., 5 login attempts per minute).
:::
:::