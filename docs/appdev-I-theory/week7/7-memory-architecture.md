# Memory Hierarchy
![](https://cn.edurev.in/ApplicationImages/Temp/1421638_a9fe7b34-1e74-45f4-a8ae-cbbeea02d22a_lg.png?w=360&dpr=2.6)

Modern computers balance **speed, cost, and capacity**.
No single memory type is optimal for all three efficiently, so systems use a layered memory hierarchy:

`Registers → Cache (SRAM) → DRAM → SSD → HDD → Cold Storage`

As we go in this order:
- Latency increases (slower access)
- Throughput decreases (generally)
- Capacity increases
- Cost per bit decreases

[ℹ️Magnetic disk animation](https://youtu.be/ngP6nSt_yAE)<br>
SRAM → **Static** RAM <br>DRAM → **Dynamic** RAM

### Key Performance Metrics
1. **Latency**: time to read 1st byte from storage location (less is better)
`Register < SRAM < DRAM < SSD < HDD`
2. **Throughput** (Bandwidth) $\frac{\text{no. of bytes read}}{\text{second}}$ (more is better)
`DRAM > SSD > HDD (regs, SRAM limited capacity)`
- `DRAM` provides the highest sustained bandwidth for bulk transfers, 
- `Registers` and `SRAM` are extremely fast but limited in size.

3. **Density** $\frac{\text{no. of bits stored}}{\text{cost x unit area}}$ ↑
` Registers < SRAM < DRAM < SSD < HDD`
- Registers are the most expensive per bit, while HDD provides the cheapest large-scale storage

## Storage Elements

<div class="card">
<h4> On-chip Registers (<span style="color:rgb(98, 151, 208)">10–100 Bytes</span>)</h4>
<ul>
<li>Located inside the CPU</li>
<li>Used for immediate computation and instruction execution</li>
<li>Acts as the CPU’s working scratchpad</li>
<li><b>Fastest memory available</b></li>
</ul>
</div>

<div class="card">

<h4>SRAM – Cache Memory (L1, L2, L3) (≈<span style="color:rgb(98, 151, 208)">0.1–1 MB</span>)</h4>
<ul>
<li>Stores frequently accessed data and instructions</li>
<li>Reduces access to slower DRAM</li>
<li>Exploits <b>temporal and spatial locality</b></li>
<li>Very fast but expensive → used in small amounts</li>
</ul>
</div>

<div class="card">
<h4>DRAM – Main Memory (<span style="color:rgb(98, 151, 208)">0.1-10 GB</span> scale)</h4>
<ul>
<li>Holds active programs and working data</li>
<li>Volatile: data lost when power is off</li>
<li>Slower than cache but much larger</li>
<li>Acts as the primary working memory of the system</li>
</ul>
</div>

<div class="card">
<h4>SSD – Solid State Drive (<span style="color:rgb(98, 151, 208)">1-100 GB</span> Flash Storage)</h4>
<ul>
<li>Non-volatile storage (data persists without power)</li>
<li>No moving parts → lower latency than HDD</li>
<li>High throughput, used for OS and applications</li>
</ul>
</div>
<div class="card">
<h4>HDD – Magnetic Disk Storage <span style="color:rgb(98, 151, 208)">0.1-10 TB </span></h4>
<ul>
<li>Very high capacity</li>
<li>Uses spinning disks and mechanical read/write heads</li>
<li>High latency due to mechanical movement (disk rotation)</li>
<li>Low cost per GB</li>
</ul>
</div>

## Computer Organization

- CPU operates on data in `registers`
- Backed by `L1, L2, L3` cache (`SRAM`)
- Backed by several GB of `DRAM` working memory
- Backed by `SSD` for high throughput
- Backed by `HDD` for high capacity
- All are backed by **long-term backup storage**
- This layered design ensures that frequently used data stays closer to the CPU,
minimizing expensive memory accesses.

:::warning Important Formula
$$\begin{aligned} &\text{Bandwidth=(Clock Speed)×(Data Transfers per Clock)×(Bus Width in Bytes)×(Channels)}\\ & \frac{800 \times 10^6 \times 8 \times 2 \times 2}{10^9}= \frac{25600}{1000}=25.6 \end{aligned}$$
:::

### Cold storage
- `Amazon Glacier, Google, Azure Archive storage classes` 
	- long term storage backup 
	- Huge amounts of data which are rarely accessed or read.
	- High durability (data rarely lost)
	- Very cheap per GB but you may have to tolerate hours of waiting(<48 Hours) as high read latency 
- `optical, magnetic, holographic`

### Insights for us application development

- Plan the storage needs based on your app growth
- Speed of app depends on type of data and how it is stored:
	- Keep frequently used ("hot") data in faster memory
	- Move rarely used ("cold") data to cheaper storage
- Design app based on data access patterns
- Developer must be aware of options and appropriate databases & engines for their application
- Optimize a balance for `latency` read and `throughput` write speed depending on workload
- Use $O(1)$ when possible (hashing)
- Use $O(\log N)$ for scalable systems (trees, binary search)
- Avoid $O(N^2)$ and above for large datasets
- Choose data structures based on:
	- Search type (exact vs range)
	- Data size
	- Update frequency

[ℹ️Cores threading](https://cdn.hashnode.com/res/hashnode/image/upload/v1605989026367/G0PyS99Px.png)