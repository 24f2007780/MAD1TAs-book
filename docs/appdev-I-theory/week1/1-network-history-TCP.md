# Historical Background of Networks
```mermaid
flowchart LR
    %% --- TOP BLOCK: Networking History & Protocols ---
    A["📞 **Telephone** Networks <br> Physical line tied up during call. A talks to B through *complex switching network*"]
    B["📦 **Packet-switched networks**: Wire occupied only when data is sent; can carry several different convos, any type of data. faster"]
    proto["*IBM SNA, DECnet, Ethernet* each had own protocol rules"]
    C["How do different networks talk❓→ 🌍 **Internet IP**<br>standard headers & packet format *network of servers*"]

    A --> B --"**ARPANet**<br>Node-to-node network"--> proto  --> C

```

```mermaid
flowchart LR
tcp["🔁**TCP**: Reliable error-prone delivery & autoscale"] 
domain["🌐 **Domain name** is easier to remember than **IP address**: protocol://www.**Domain Name**.com/gov/org/net/country/folder/file.html"]
http["📄 HyperText: Text with links & Formatting tags"]
web["🌍**World Wide Web**: network of linked documents"]
tcp --> domain --> http --"DNS database of ISP local cache/other DNS servers"--> web 
```


:::tip **Web server**: 
 - Listen for incoming requests on a **fixed port**→ Respond
 - OS manages ports and network connections
:::

:::tip **Protocol** defines: 
- What should client can ask server?
- How the server respond to client?
*How to format packets, place them on wire, headers/checksums*
:::

## HyperText Transfer Protocol (HTTP)
- Rulebook for communication between browser and server
- **Client requests server** for some data -> read result -> process
- **Server sends response** with Headers + Body
- **Response Header**: contains
  - acceptable content types client can deal with
  - language
  - encoding
  - cache info
  - status codes

| Method     | Meaning      | Simple Example |
| ---------- | ------------ | -------------- |
| **GET**    | Ask for data | Open a webpage, search queries |
| **POST**   | Send data    | Submit a form, upload files  |
| **PUT**    | Update data  | Edit user profile   |
| **DELETE** | Remove data  | Delete account |

You will learn about *HTTP methods* in greater detail in [Week 6](./6-Rest-APIs.md)

### ⭐Checkout [Curl Commands](5-business-logic-layer-CONTROLLER#curl-commands) from Week-5

## Transmission Control Protocol
**Transport Layer that ensures data gets delivered correctly**
TCP ensures reliable communication between different machines **Accuracy > Speed**:
- reassembles packets in CORRECT ORDER
- data arrives without loss
- missing data is resent if that chunk number is not acknowledged by receiver
- dynamically adjusts sending speed based on receiver's capacity & network overload

#### Ports
TCP uses 16-bit unsigned integers for port numbers
- This allows values from 0 to 65,535 ($2^{16 \text{ bits}}-1$). 

::: danger Port 0 is reserved
If you try to bind with port 0, Operating System automatically assigns a random free port.
:::

## Internet Protocol
**Network Layer decides where data should go**
IP is responsible for:
- assigning IP addresses
- routing packets across networks
- breaking data into packets
- forwarding packets from router to router (no guarantee of delivered or in same order)

packet has:
```txt
source IP address
destination IP address
payload (data)
```

::: warning  TCP/IP always work as a pair:
1. Application gives data to TCP
  - breaks data into segments
2. IP wraps each segment into packets
  - packets travel thru the internet
  - delivers to destination
3. TCP reorders & verifies data
4. App receives clean data
:::

#### IP Address
- Unique number to every device on a network
- IPv4: `192.168.1.1` 
  - 4 numbers 
  - in range 0–255, separated by dots
  - Size: `32` bits = 4 Bytes
- Assigned temporarily using DHCP when your device boots
- IPv6
  - Size: `128` bits
  - Written as 8 groups of 16-bit hexadecimal numbers
  - Created due to IPv4 address shortage

::: details ❓ An IPv4 address is given as: `172.16.10.25`<br>Each IPv4 octet is first converted to hexadecimal and then combined pairwise to form an IPv6-style address using 4 hexadecimal digits per group.<br>How will the above IPv4 address be represented in IPv6-style hexadecimal notation?<br>A) `AC10:0A19:0000:0000`<br>B) `0000:0000:AC10:0A19`<br>C) `AC10:190A:0000:0000`<br>D) `0000:AC10:0A19:0000`<br>
$$
\begin{align}
&\textbf{Given IPv4 address: } 172.16.10.25 \\
&\textbf{Step 1: Convert each IPv4 octet from decimal to hexadecimal} \\
&172_{10} = (10 \times 16 + 12) = AC_{16} \\
&16_{10} = (1 \times 16 + 0) = 10_{16} \\
&10_{10} = (0 \times 16 + 10) = 0A_{16} \\
&25_{10} = (1 \times 16 + 9) = 19_{16} \\
&\textbf{Step 2: Group hexadecimal values pairwise (16 bits per group)} \\
&(AC,,10) \rightarrow AC10, \quad (0A,,19) \rightarrow 0A19 \\
&\textbf{Step 3: Pad remaining groups with zeros to match IPv6 format} \\
&\text{IPv6-style representation } = 0000:0000:AC10:0A19
\end{align}
$$


Correct Answer: B) `0000:0000:AC10:0A19`
![](./static/binary-conversion-table.png)
:::


👉 IP = which machine?
👉 Port = which service on that machine? 
| Port    | Service            |
| ------- | ------------------ |
| **80**  | HTTP webpages         |
| **443** | HTTPSecure |
| **25**  | sending Email      |



## Status codes

| Category | Status Code | Status Name | Description |
| --- | --- | --- | --- |
| <span style="font-weight:bold; color:rgb(181, 118, 244)"> 1xx Informational </span>  | 100 | Continue | Request is in Progress |
| <span style="font-weight:bold; color:rgb(181, 118, 244)">2xx Success </span>  | 200 OK |  Request was fulfilled | GET, PUT success |
|  | 201 Created | Resource created | POST success |
|  | 204 No Content | No data in response |
| <span style="font-weight:bold; color:rgb(181, 118, 244)">3xx Redirection </span>  | 301 | Moved Permanently |  |
|  | 302 Found | Moved Temporarily |  |
| <span style="font-weight:bold; color:rgb(181, 118, 244)">4xx Client Error </span>  | 400 Bad Request | Invalid input | Missing fields or format |
|  | 401 Unauthorized | Not logged in | Token missing |
|  | 403 Forbidden | Server refuses to authorize request, even if client is authenticated | Student accessing admin |
|  | 404 Not Found | Resource missing | Course ID not found |
|  | 415 Unsupported Media Type | Wrong Content-Type | Not JSON |
| <span style="font-weight:bold; color:rgb(181, 118, 244)">5xx Server Error </span>  | 500 | Internal Server Error | A general error indicating something went wrong on the server |
|  | 502 Bad Gateway | Invalid response from a gateway or proxy | Bug in backend |
|  | 503 Service Unavailable | Overloaded or down | Server down |
|  | 504 | Gateway Timeout |  |

<!-- <ClientOnly> -->
  <StatusCodeSimulator />
<!-- </ClientOnly> -->

&emsp;&emsp;&emsp; Web 1.0 1990-2000 &emsp;&emsp;&emsp;&emsp; Web 2.0 2004-2016  &emsp;&emsp;&emsp;&emsp; Web 3 2016- 

<img src="https://i.imgur.com/tbReLji.png" width="1400">



::: details TCP, UDP, Proxy, Peer-to-Peer, Broadcast, Unicast, Multicast
- **TCP (Transmission Control Protocol)** is a connection-oriented protocol that ensures reliable, ordered, and error-checked delivery of data between devices on a network through handshakes and acknowledgements.
- **UDP (User Datagram Protocol)** is a connectionless protocol that sends data without establishing a prior connection, prioritizing speed over reliability and not guaranteeing delivery.
- **Proxy** acts as an intermediary server between clients and other servers to facilitate requests, improving security, performance, or anonymity.
- **Peer-to-Peer (P2P)** is a decentralized communication model where each device can act as both client and server, sharing resources directly without central servers.
- **Broadcast** is a one-to-all communication where data is sent from one sender to all devices on a network segment simultaneously.
- **Unicast** is a one-to-one communication where data is sent from one sender to a single specific receiver.
- **Multicast** is a one-to-many communication where data is sent from one sender to multiple specified receivers who join a multicast group, optimizing bandwidth usage.
::: 

