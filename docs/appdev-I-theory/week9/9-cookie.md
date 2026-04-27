
## Session Cookie 
A session stores state across multiple requests:
- Logged-in status
- Preferences
- Permissions (allow this site every time)
Cookies are used to store a session identifier that links the client to server-side session data.
Server sends:

```txt
Set-Cookie: <cookie-name>=<cookie-value>; Domain=<domain>; Secure; HttpOnly
```

- **HttpOnly**: Prevents JavaScript from reading the cookie (mitigates XSS).
- **Secure**: Only sends the cookie over HTTPS connections.
- **SameSite**: Controls whether the cookie is sent with cross-site requests (mitigates CSRF). Values: `Strict`, `Lax` (default), or `None`.

- Logout requires:
  - Invalidating the session on the server
  - Removing the session cookie from the client
- client must send cookies back with every subsequent request

## Types of Session Storage
1. **Client-Side Session**: Entire data stored in cookie but can be modified by user
- Not sensitive(font, light/dark mode) can be on <span style="font-weight:bold; color:rgb(181, 118, 244)"> client side </span>  (can modify/access)
2.  **Server-Side Session**: Cookie stores only session ID. Actual data stored on server
  - ✅Sensitive(user permissions, session tokens) stored on the <span style="font-weight:bold; color:rgb(181, 118, 244)"> server side </span> and referenced using an identifier (stored in a cookie) 
  - Backend options:
    - Database
    - File storage
    - `Redis` (In-memory cache for high-speed access)
:::

:::info Storage Comparison: Cookies vs. Web Storage
| Feature | Cookies | LocalStorage | SessionStorage |
| :--- | :--- | :--- | :--- |
| **Capacity** | ~4KB | ~5-10MB | ~5MB |
| **Sent with HTTP?** | Yes (automatic) | No | No |
| **Persistence** | Expiration date | Permanent | Until tab/window closed |
| **Access** | Client + Server | Client only | Client only |
:::


## Cookie Theft
If a session cookie is stolen, an attacker can impersonate the user.

Mitigation techniques:
- Session timeouts
- Secure and HttpOnly cookie flags
- Binding session to IP address

## Cross-Site Request Forgery (CSRF)

An attacker tricks a user into sending unintended requests to a trusted site where the user is authenticated.

:::info Example

1. User logs into a banking website  
2. Attacker sends a malicious link or embeds a hidden request  
3. Browser automatically sends the request using the existing session cookie  

→ Money transfer happens without user intent

Solution:
- Use CSRF tokens
- Validate request origin on the server *verify on server that legitimate start point*

:::

