/* ========================================
   Content Repurposing Hub — Data & Rendering
   ======================================== */

// ---- DATA ----

const contentItems = [
    {
        id: 'cs-dbrand',
        title: 'How dbrand Ditched Their Failed Legacy ERP and Tripled Order Capacity in 2 Months',
        type: 'Case Study',
        date: '2026-01-15',
        customer: 'dbrand',
        channels: {
            linkedin: { status: 'ready', preview: "Most DTC brands don't switch ERPs because they're scared of downtime. dbrand did it in 2 months — and tripled their order capacity.\n\nHere's what they learned ditching NetSuite for @Fulfil:\n\n1. Legacy ERPs weren't built for DTC velocity\n2. The migration took weeks, not months\n3. Order capacity 3x'd without adding headcount\n\nThe full story:" },
            x: { status: 'ready', preview: "dbrand was drowning in NetSuite.\n\nOrders were growing. The ERP wasn't.\n\nThey switched to Fulfil and tripled order capacity in 2 months.\n\nNo added headcount. No downtime.\n\nHere's how they did it (thread):" },
            youtube: { status: 'draft', preview: "Video Description: How dbrand replaced their legacy ERP and scaled 3x | Customer Story\n\ndbrand was hitting the ceiling with NetSuite — orders were growing faster than their ERP could handle. In this case study, we break down how they migrated to Fulfil and tripled their order processing capacity in just 2 months." },
            blog: { status: 'ready', preview: "When your order volume triples in under a year, your ERP either scales with you or becomes the bottleneck. For dbrand, one of the most recognizable names in consumer electronics accessories, it became the bottleneck..." },
            sales: { status: 'ready', preview: "ONE-PAGER: dbrand — From ERP Nightmare to 3x Order Capacity\n\nChallenge: Legacy ERP (NetSuite) couldn't handle growing DTC order volume\nSolution: Full migration to Fulfil in under 2 months\nResults: 3x order capacity, zero downtime, no added headcount\n\nKey Quote: \"We needed an ERP that could keep up with our growth, not hold us back.\"" },
            email: { status: 'draft', preview: "Subject: How dbrand tripled orders after ditching NetSuite\n\nHi {{first_name}},\n\nIf your team is spending more time fighting your ERP than fulfilling orders, you're not alone.\n\ndbrand was in the same boat — until they switched to Fulfil and tripled their order capacity in 2 months.\n\nWorth a quick look?" }
        }
    },
    {
        id: 'cs-mejuri',
        title: 'How Mejuri is Keeping Up with 400% Growth Year Over Year',
        type: 'Case Study',
        date: '2025-11-08',
        customer: 'Mejuri',
        channels: {
            linkedin: { status: 'ready', preview: "400% YoY growth sounds like a dream.\n\nFor Mejuri's ops team, it was a nightmare — until they got the right ERP.\n\nHere's how Canada's fastest-growing jewelry brand is scaling without breaking:\n\n- Multi-warehouse orchestration across North America\n- Real-time inventory across DTC + wholesale\n- Automated procurement that scales with demand" },
            x: { status: 'ready', preview: "Mejuri grew 400% YoY.\n\nTheir old systems couldn't keep up.\n\nHow they're scaling with Fulfil:\n→ Multi-warehouse automation\n→ Real-time inventory across all channels\n→ Procurement that scales with demand\n\nThe full breakdown:" },
            youtube: { status: 'pending', preview: '' },
            blog: { status: 'ready', preview: "When a jewelry brand grows 400% year over year, every system in the business gets stress-tested. Mejuri, the Toronto-born DTC darling, found that most of their tools cracked under the pressure — except Fulfil..." },
            sales: { status: 'ready', preview: "ONE-PAGER: Mejuri — Scaling 400% Growth Without Breaking\n\nChallenge: Hypergrowth outpacing existing systems\nSolution: Fulfil ERP for end-to-end operations\nResults: 400% YoY growth sustained, multi-warehouse efficiency, real-time inventory visibility" },
            email: { status: 'pending', preview: '' }
        }
    },
    {
        id: 'cs-universalyums',
        title: 'Universal Yums: 25X ROI on ERP in Year 1',
        type: 'Case Study',
        date: '2025-09-22',
        customer: 'Universal Yums',
        channels: {
            linkedin: { status: 'ready', preview: "$40M in revenue. 50 employees. 200+ suppliers. 100K monthly subscription boxes.\n\nUniversal Yums runs one of the most complex subscription operations in eCommerce — with a team the size of a startup.\n\nTheir secret? An ERP that actually works.\n\n25X ROI in year one with @Fulfil:" },
            x: { status: 'draft', preview: "100K subscription boxes shipped monthly.\n200+ suppliers across 195 countries.\n50 employees total.\n\nUniversal Yums runs a $40M operation on Fulfil.\n\n25X ROI in year 1.\n\nHere's the playbook:" },
            youtube: { status: 'pending', preview: '' },
            blog: { status: 'ready', preview: "Universal Yums ships 100,000 subscription boxes every month, sourcing snacks from over 200 suppliers across 195 countries. They do it with 50 people and a $40M annual run rate. The math only works because of their ERP..." },
            sales: { status: 'draft', preview: "ONE-PAGER: Universal Yums — 25X ROI with Lean Operations\n\nChallenge: Complex subscription fulfillment at scale (100K boxes/mo, 200+ suppliers)\nSolution: Fulfil for procurement, inventory, fulfillment, and subscription management\nResults: 25X ROI in year 1, $40M revenue with 50-person team" },
            email: { status: 'ready', preview: "Subject: How a 50-person team runs a $40M subscription business\n\nHi {{first_name}},\n\nUniversal Yums ships 100K subscription boxes a month with just 50 people.\n\n200+ suppliers. 195 countries. $40M revenue.\n\nTheir ERP does the heavy lifting. Here's how they got 25X ROI in year one:" }
        }
    },
    {
        id: 'cs-lynchcreek',
        title: 'Lynch Creek Farm: 4X Production Without Increasing Costs',
        type: 'Case Study',
        date: '2025-08-14',
        customer: 'Lynch Creek Farm',
        channels: {
            linkedin: { status: 'ready', preview: "A family-run wreath farm in Washington state just 4X'd production without hiring.\n\nLynch Creek Farm built custom workflows on Fulfil's open API — automating everything from seasonal demand forecasting to fulfillment routing.\n\nThis is what an ERP should actually do:" },
            x: { status: 'pending', preview: '' },
            youtube: { status: 'pending', preview: '' },
            blog: { status: 'draft', preview: "Lynch Creek Farm isn't your typical ERP customer. A family-owned business selling handmade wreaths and garlands, they face one of the most extreme seasonality curves in eCommerce..." },
            sales: { status: 'pending', preview: '' },
            email: { status: 'pending', preview: '' }
        }
    },
    {
        id: 'pod-wtf-erp',
        title: 'WTF is an ERP System Good For?',
        type: 'Podcast',
        date: '2026-02-20',
        customer: null,
        channels: {
            linkedin: { status: 'ready', preview: "\"Most eCommerce brands don't realize they need an ERP until they're already drowning.\"\n\n@SharoonThomas joined @LimitedSupply to break down:\n\n- Why spreadsheets stop working at $5M ARR\n- The hidden cost of duct-taping tools together\n- What an ERP actually does (in plain English)\n\nListen here:" },
            x: { status: 'ready', preview: "New episode of Limited Supply with @SharoonThomas:\n\n\"WTF is an ERP System Good For?\"\n\nIf you're running a 7-8 figure eComm brand on spreadsheets and Shopify apps, this one's for you.\n\nKey insight: Most brands outgrow their tools 12-18 months before they realize it." },
            youtube: { status: 'ready', preview: "Episode Title: WTF is an ERP System Good For? | Limited Supply ft. Sharoon Thomas, CEO of Fulfil\n\nSharoon Thomas, CEO of Fulfil, joins Limited Supply to explain what ERPs actually do, why most eCommerce brands need one earlier than they think, and how the right system can replace 5-10 disconnected tools." },
            blog: { status: 'draft', preview: "In a recent episode of Limited Supply, Fulfil CEO Sharoon Thomas broke down one of eCommerce's most misunderstood tools: the ERP system. \"Most founders think ERP is for enterprise companies,\" Thomas explained. \"But if you're duct-taping Shopify, a 3PL, a spreadsheet, and three apps together, you already need one.\"" },
            sales: { status: 'pending', preview: '' },
            email: { status: 'ready', preview: "Subject: Do you actually need an ERP? (honest answer inside)\n\nHi {{first_name}},\n\nOur CEO Sharoon just sat down with Limited Supply to answer the question every growing eCommerce brand asks:\n\n\"Do we actually need an ERP, or are we fine with what we have?\"\n\nShort answer: if you're managing operations across 3+ tools, you probably needed one last year." }
        }
    },
    {
        id: 'pod-scale-shopify',
        title: 'Scale Your Shopify Store For Growth',
        type: 'Podcast',
        date: '2025-12-05',
        customer: null,
        channels: {
            linkedin: { status: 'ready', preview: "Just dropped: @SharoonThomas on the @eCommerceFuel podcast.\n\nTopic: What happens when your Shopify Plus store outgrows Shopify's native tools.\n\nSpoiler: it happens faster than you think, especially for brands doing $10M+" },
            x: { status: 'draft', preview: "Your Shopify Plus store is growing.\n\nBut are your backend operations keeping up?\n\n@SharoonThomas breaks it down on @eCommerceFuel:\n\n→ The $10M inflection point\n→ When to add an ERP layer\n→ How to scale without re-platforming" },
            youtube: { status: 'pending', preview: '' },
            blog: { status: 'pending', preview: '' },
            sales: { status: 'pending', preview: '' },
            email: { status: 'draft', preview: "Subject: Outgrowing Shopify? You're not alone.\n\nHi {{first_name}},\n\nIf you're on Shopify Plus and feeling the squeeze — orders growing but operations not keeping up — you're at the inflection point.\n\nOur CEO just broke down exactly what to do about it on eCommerceFuel:" }
        }
    },
    {
        id: 'blog-what-to-expect',
        title: 'What to Expect in an eCommerce ERP',
        type: 'Blog',
        date: '2026-03-01',
        customer: null,
        channels: {
            linkedin: { status: 'ready', preview: "Thinking about an ERP for your eCommerce brand?\n\nHere's what to actually expect (no vendor fluff):\n\n1. Implementation takes weeks, not months\n2. Your team will resist change (plan for it)\n3. ROI shows up in Q2, not Q1\n4. The right ERP replaces 5-10 tools\n\nFull guide:" },
            x: { status: 'ready', preview: "\"What should I expect from an eCommerce ERP?\"\n\nWe get this question weekly. Here's the honest answer:\n\n- Weeks to implement, not months\n- Replaces 5-10 tools, not just one\n- Team adoption is the hardest part\n- ROI compounds over time\n\nFull breakdown:" },
            youtube: { status: 'pending', preview: '' },
            blog: { status: 'ready', preview: "If you're evaluating ERP systems for your eCommerce business, you've probably been overwhelmed by enterprise jargon, endless feature lists, and vendor pitches that all sound the same..." },
            sales: { status: 'ready', preview: "ONE-PAGER: What to Expect in an eCommerce ERP\n\nFor prospects in evaluation phase:\n- Average implementation: 4-8 weeks\n- Typical tools replaced: 5-10 disconnected apps\n- First ROI milestone: 90 days\n- Key success factor: executive sponsor + dedicated project lead" },
            email: { status: 'draft', preview: "Subject: What to actually expect from an ERP (no vendor fluff)\n\nHi {{first_name}},\n\nERP evaluation can feel overwhelming. We just published a straightforward guide covering what to actually expect — timelines, costs, and the stuff vendors don't usually tell you." }
        }
    },
    {
        id: 'webinar-migration',
        title: 'ERP Migration Playbook for DTC Brands',
        type: 'Webinar',
        date: '2026-02-10',
        customer: null,
        channels: {
            linkedin: { status: 'ready', preview: "We just ran a live session: \"ERP Migration Playbook for DTC Brands\"\n\n87 operators attended. Here are the top 3 takeaways:\n\n1. Start migration during your low season (not BFCM)\n2. Migrate data in phases, not all at once\n3. Run parallel systems for 2-4 weeks\n\nRecording + slides:" },
            x: { status: 'draft', preview: "87 DTC operators joined our ERP Migration Playbook webinar.\n\nTop takeaway: don't migrate during peak season.\n\n(Sounds obvious, but you'd be surprised)\n\nFull recording + slides now available:" },
            youtube: { status: 'ready', preview: "ERP Migration Playbook for DTC Brands | Fulfil Webinar\n\nLearn the step-by-step process for migrating from legacy systems to a modern ERP. Covers data migration, parallel running, team training, and go-live best practices. Featuring real examples from brands like dbrand and Universal Yums." },
            blog: { status: 'pending', preview: '' },
            sales: { status: 'ready', preview: "ONE-PAGER: ERP Migration Playbook (from webinar)\n\nPhase 1: Data audit & mapping (Week 1-2)\nPhase 2: Historical data migration (Week 3-4)\nPhase 3: Parallel running (Week 5-6)\nPhase 4: Go-live & team training (Week 7-8)\n\nKey stat: Average Fulfil migration completes in 6-8 weeks" },
            email: { status: 'ready', preview: "Subject: Missed our migration webinar? Here's the recording\n\nHi {{first_name}},\n\n87 DTC operators joined our ERP Migration Playbook session last week.\n\nWe covered the step-by-step process, common pitfalls, and real timelines from brands like dbrand and Universal Yums.\n\nWatch the recording:" }
        }
    },
    {
        id: 'release-numeral',
        title: 'Fulfil + Numeral: Automated Tax Compliance',
        type: 'Product Release',
        date: '2026-03-18',
        customer: null,
        channels: {
            linkedin: { status: 'ready', preview: "New integration alert: Fulfil + @Numeral\n\nAutomated sales tax compliance for eCommerce brands.\n\nNo more:\n- Manual tax filings\n- Nexus tracking spreadsheets\n- Compliance anxiety during audits\n\nFulfil calculates. Numeral files. You focus on growth." },
            x: { status: 'ready', preview: "New: Fulfil + Numeral integration\n\nAutomated sales tax compliance.\n\nFulfil handles the calculation.\nNumeral handles the filing.\nYou handle the growth.\n\nLive now for all Fulfil customers:" },
            youtube: { status: 'pending', preview: '' },
            blog: { status: 'draft', preview: "Sales tax compliance is one of those operational headaches that scales with your business in the worst way. The more states you sell into, the more filings you owe. Our new Numeral integration changes that..." },
            sales: { status: 'ready', preview: "INTEGRATION BRIEF: Fulfil + Numeral\n\nWhat: Automated sales tax calculation, filing, and remittance\nWho it's for: US-based eCommerce brands selling into multiple states\nKey benefit: Eliminates manual tax filings and nexus tracking\nAvailability: Live now for all Fulfil customers" },
            email: { status: 'ready', preview: "Subject: New: Automated tax compliance in Fulfil\n\nHi {{first_name}},\n\nSales tax compliance just got a lot easier.\n\nOur new Numeral integration automates tax calculation, filing, and remittance — so you can stop tracking nexus in spreadsheets.\n\nLive now for all Fulfil customers:" }
        }
    }
];

const channelMeta = {
    linkedin: { label: 'LinkedIn Post', icon: 'in', charTarget: '1,300 chars' },
    x: { label: 'X Thread', icon: '𝕏', charTarget: '280 chars/tweet' },
    youtube: { label: 'YouTube Description', icon: '▶', charTarget: '500 words' },
    blog: { label: 'Blog Excerpt', icon: '✎', charTarget: '800 words' },
    sales: { label: 'Sales One-Pager', icon: '📄', charTarget: '1 page' },
    email: { label: 'Email Snippet', icon: '✉', charTarget: '150 words' }
};

const productReleases = [
    { name: 'Fulfil + Numeral: Tax Compliance', date: 'Mar 18', stages: ['done', 'done', 'done', 'done'] },
    { name: 'Batch Picking 2.0', date: 'Mar 25', stages: ['done', 'done', 'active', 'pending'] },
    { name: 'Advanced Returns Portal', date: 'Apr 8', stages: ['done', 'active', 'pending', 'pending'] },
    { name: 'EDI Auto-Mapping', date: 'Apr 15', stages: ['active', 'pending', 'pending', 'pending'] },
    { name: 'AI Demand Forecasting', date: 'Apr 29', stages: ['pending', 'pending', 'pending', 'pending'] },
    { name: 'Multi-Currency Settlements', date: 'May 6', stages: ['pending', 'pending', 'pending', 'pending'] }
];

const stageLabels = ['Changelog', 'Claude Code', 'Copy Generated', 'Published'];

const distributionData = {
    labels: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
    linkedin: [4, 6, 5, 8, 7, 10],
    x: [3, 4, 4, 6, 5, 8],
    youtube: [1, 1, 2, 2, 3, 3],
    blog: [3, 4, 3, 5, 4, 6],
    sales: [2, 3, 2, 4, 3, 5],
    email: [3, 4, 5, 6, 5, 7]
};

// ---- STATE ----

let activeFilter = 'All';
let expandedItem = null;
let distChart = null;

// ---- HELPERS ----

function typeClass(type) {
    return type.toLowerCase().replace(/\s+/g, '-');
}

function formatDate(dateStr) {
    const d = new Date(dateStr + 'T00:00:00');
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function getDistScore(channels) {
    const total = Object.keys(channels).length;
    const done = Object.values(channels).filter(c => c.status === 'ready').length;
    return Math.round((done / total) * 100);
}

function getScoreColor(pct) {
    if (pct >= 80) return '#059669';
    if (pct >= 50) return '#1f2937';
    if (pct >= 30) return '#d97706';
    return '#9ca3af';
}

function getFilteredItems() {
    if (activeFilter === 'All') return contentItems;
    return contentItems.filter(item => item.type === activeFilter);
}

// ---- RENDER FUNCTIONS ----

function renderHeader() {
    const types = ['All', 'Case Study', 'Podcast', 'Blog', 'Webinar', 'Product Release'];
    const tabs = types.map(t =>
        `<button class="filter-tab ${activeFilter === t ? 'active' : ''}" data-filter="${t}">${t}</button>`
    ).join('');

    return `
    <header class="header">
        <div class="header-label">MARKETING OPERATIONS</div>
        <h1>One piece of content.<br><em>Six channels.</em></h1>
        <p>Repurpose case studies, podcasts, and product releases across every channel — with AI doing the heavy lifting.</p>
        <div class="filter-tabs">${tabs}</div>
    </header>`;
}

function renderKPIs() {
    const items = contentItems;
    const totalAssets = items.length;
    const allChannels = items.flatMap(i => Object.values(i.channels));
    const totalReady = allChannels.filter(c => c.status === 'ready').length;
    const totalPossible = allChannels.length;
    const coveragePct = Math.round((totalReady / totalPossible) * 100);
    const avgScore = Math.round(items.reduce((sum, i) => sum + getDistScore(i.channels), 0) / items.length);

    return `
    <div class="kpi-row">
        <div class="kpi-card">
            <div class="kpi-label">Content Pieces</div>
            <div class="kpi-value">${totalAssets}</div>
            <div class="kpi-sub">Across ${new Set(items.map(i => i.type)).size} content types</div>
        </div>
        <div class="kpi-card">
            <div class="kpi-label">Assets Published</div>
            <div class="kpi-value">${totalReady}</div>
            <div class="kpi-sub">${totalPossible} total possible &middot; ${coveragePct}% coverage</div>
            <div class="kpi-bar">
                <div class="kpi-bar-fill" style="width:${coveragePct}%"></div>
            </div>
        </div>
        <div class="kpi-card">
            <div class="kpi-label">Avg Distribution Score</div>
            <div class="kpi-value">${avgScore}%</div>
            <div class="kpi-sub"><span class="trend-up">▲</span> Up 18% from last quarter</div>
        </div>
        <div class="kpi-card">
            <div class="kpi-label">Time Saved with AI</div>
            <div class="kpi-value">47hrs</div>
            <div class="kpi-sub">This quarter via Claude-generated content</div>
        </div>
    </div>`;
}

function renderContentTable() {
    const items = getFilteredItems();
    const rows = items.map(item => {
        const score = getDistScore(item.channels);
        const scoreColor = getScoreColor(score);
        const isExpanded = expandedItem === item.id;

        const distIcons = Object.entries(item.channels).map(([ch, data]) => {
            const meta = channelMeta[ch];
            const cls = data.status === 'ready' ? 'active' : 'inactive';
            return `<span class="dist-icon ${cls}" title="${meta.label}: ${data.status}">${meta.icon}</span>`;
        }).join('');

        let row = `
        <tr class="${isExpanded ? 'expanded' : ''}" data-item="${item.id}">
            <td>
                <div class="content-title">
                    <span class="expand-icon ${isExpanded ? 'open' : ''}">▶</span>
                    ${item.title}
                </div>
            </td>
            <td><span class="type-badge ${typeClass(item.type)}">${item.type}</span></td>
            <td>${formatDate(item.date)}</td>
            <td><div class="dist-icons">${distIcons}</div></td>
            <td>
                <div class="dist-score">
                    <div class="dist-bar">
                        <div class="dist-bar-fill" style="width:${score}%;background:${scoreColor}"></div>
                    </div>
                    <span class="dist-pct">${score}%</span>
                </div>
            </td>
        </tr>`;

        if (isExpanded) {
            row += renderRepurposeRow(item);
        }

        return row;
    }).join('');

    return `
    <div class="table-section">
        <div class="section-title">Content Inventory</div>
        <div class="panel">
            <div style="overflow-x:auto">
            <table class="content-table">
                <thead>
                    <tr>
                        <th>Content</th>
                        <th>Type</th>
                        <th>Date</th>
                        <th>Channels</th>
                        <th>Distribution</th>
                    </tr>
                </thead>
                <tbody>${rows}</tbody>
            </table>
            </div>
        </div>
    </div>`;
}

function renderRepurposeRow(item) {
    const cards = Object.entries(item.channels).map(([ch, data]) => {
        const meta = channelMeta[ch];
        const statusCls = data.status;
        const statusLabel = data.status === 'ready' ? 'Ready' : data.status === 'draft' ? 'Draft' : 'Pending';

        let previewHTML = '';
        if (data.preview) {
            previewHTML = `<div class="repurpose-preview">${data.preview.replace(/\n/g, '<br>')}</div>`;
        } else {
            previewHTML = `<div class="repurpose-preview" style="color:var(--text-secondary);font-style:italic">No content generated yet</div>`;
        }

        const btnText = data.status === 'pending' ? 'Generate with Claude' : data.status === 'draft' ? 'Refine with Claude' : 'Regenerate';
        const btnId = `btn-${item.id}-${ch}`;

        return `
        <div class="repurpose-card">
            <div class="repurpose-card-header">
                <div class="repurpose-channel">
                    <span class="ch-icon">${meta.icon}</span>
                    ${meta.label}
                </div>
                <span class="repurpose-status ${statusCls}">${statusLabel}</span>
            </div>
            ${previewHTML}
            <div class="repurpose-meta">
                <span class="repurpose-count">${meta.charTarget}</span>
                <button class="btn btn-generate btn-sm" id="${btnId}" data-item="${item.id}" data-channel="${ch}">${btnText}</button>
            </div>
        </div>`;
    }).join('');

    return `
    <tr class="repurpose-row">
        <td colspan="5">
            <div class="repurpose-panel">
                <div class="repurpose-grid">${cards}</div>
            </div>
        </td>
    </tr>`;
}

function renderReleasePipeline() {
    const steps = [
        { icon: '📋', title: 'Changelog', desc: 'Product team publishes release notes' },
        { icon: '🤖', title: 'Claude Code', desc: 'AI reads changelog & drafts copy' },
        { icon: '✍️', title: 'Copy Generated', desc: 'Website, social & email copy ready' },
        { icon: '🚀', title: 'Published', desc: 'Live across all channels' }
    ];

    const flowHTML = steps.map((s, i) => {
        const stepClass = i < 2 ? 'done' : i === 2 ? 'active' : '';
        const html = `
        <div class="pipeline-step ${stepClass}">
            <div class="pipeline-node">
                <div class="pipeline-node-icon">${s.icon}</div>
                <div class="pipeline-node-title">${s.title}</div>
                <div class="pipeline-node-desc">${s.desc}</div>
            </div>
        </div>`;
        if (i < steps.length - 1) {
            return html + `<div class="pipeline-arrow">→</div>`;
        }
        return html;
    }).join('');

    const releaseCards = productReleases.map(r => {
        const dots = r.stages.map((s, i) =>
            `<span class="release-stage-dot ${s}" title="${stageLabels[i]}"></span>`
        ).join('');

        return `
        <div class="release-card">
            <div class="release-name">${r.name}</div>
            <div class="release-date">${r.date}, 2026</div>
            <div class="release-stages">${dots}</div>
            <div class="release-stage-label">${stageLabels[r.stages.lastIndexOf('done') >= 0 ? r.stages.lastIndexOf('done') : r.stages.indexOf('active') >= 0 ? r.stages.indexOf('active') : 0]}</div>
        </div>`;
    }).join('');

    return `
    <div class="pipeline-section">
        <div class="section-title">Product Release → Content Pipeline</div>
        <div class="panel">
            <div class="pipeline-flow">${flowHTML}</div>
            <div class="release-items">${releaseCards}</div>
        </div>
    </div>`;
}

function renderDistChart() {
    return `
    <div class="chart-section">
        <div class="section-title">Content Distribution by Channel</div>
        <div class="chart-container">
            <div class="chart-wrapper">
                <canvas id="dist-chart"></canvas>
            </div>
        </div>
    </div>`;
}

function renderFooter() {
    return `
    <footer class="footer">
        Built with <a href="https://claude.ai" target="_blank">Claude Code</a> — Fulfil Marketing Ops Portfolio
    </footer>`;
}

// ---- MAIN RENDER ----

function render() {
    const app = document.getElementById('app');
    app.innerHTML =
        renderHeader() +
        renderKPIs() +
        renderContentTable() +
        renderReleasePipeline() +
        renderDistChart() +
        renderFooter();

    bindEvents();
    drawDistChart();
}

// ---- CHART ----

function drawDistChart() {
    const canvas = document.getElementById('dist-chart');
    if (!canvas) return;
    if (distChart) { distChart.destroy(); distChart = null; }

    const d = distributionData;

    distChart = new Chart(canvas, {
        type: 'bar',
        data: {
            labels: d.labels,
            datasets: [
                { label: 'LinkedIn', data: d.linkedin, backgroundColor: '#2563eb', borderRadius: 3 },
                { label: 'X', data: d.x, backgroundColor: '#6b7280', borderRadius: 3 },
                { label: 'YouTube', data: d.youtube, backgroundColor: '#dc2626', borderRadius: 3 },
                { label: 'Blog', data: d.blog, backgroundColor: '#059669', borderRadius: 3 },
                { label: 'Sales', data: d.sales, backgroundColor: '#d97706', borderRadius: 3 },
                { label: 'Email', data: d.email, backgroundColor: '#7c3aed', borderRadius: 3 }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: { intersect: false, mode: 'index' },
            plugins: {
                legend: {
                    labels: {
                        color: '#6b7280',
                        font: { family: 'Inter', size: 12 },
                        usePointStyle: true,
                        pointStyle: 'rectRounded',
                        padding: 20
                    }
                },
                tooltip: {
                    backgroundColor: '#1f2937',
                    titleColor: '#ffffff',
                    bodyColor: '#e5e7eb',
                    borderColor: '#374151',
                    borderWidth: 1,
                    padding: 12,
                    cornerRadius: 8,
                    titleFont: { family: 'Inter', weight: '600' },
                    bodyFont: { family: 'Inter' }
                }
            },
            scales: {
                x: {
                    stacked: true,
                    ticks: { color: '#6b7280', font: { family: 'Inter', size: 12, weight: '500' } },
                    grid: { color: 'rgba(0, 0, 0, 0.04)' },
                    border: { color: '#e5e7eb' }
                },
                y: {
                    stacked: true,
                    ticks: {
                        color: '#6b7280',
                        font: { family: 'Inter', size: 11 },
                        stepSize: 5
                    },
                    grid: { color: 'rgba(0, 0, 0, 0.04)' },
                    border: { color: '#e5e7eb' },
                    title: {
                        display: true,
                        text: 'Pieces Distributed',
                        color: '#6b7280',
                        font: { family: 'Inter', size: 12 }
                    }
                }
            }
        }
    });
}

// ---- "Generate with Claude" simulation ----

function simulateGenerate(itemId, channel) {
    const btn = document.getElementById(`btn-${itemId}-${channel}`);
    if (!btn || btn.classList.contains('loading')) return;

    btn.classList.add('loading');
    btn.innerHTML = '<span class="spinner"></span>Generating...';

    setTimeout(() => {
        // Find the item and update its channel status
        const item = contentItems.find(i => i.id === itemId);
        if (item && item.channels[channel]) {
            const ch = item.channels[channel];
            if (ch.status === 'pending') {
                // Generate sample content for pending items
                const meta = channelMeta[channel];
                ch.preview = generateSampleContent(item, channel);
                ch.status = 'draft';
            } else if (ch.status === 'draft') {
                ch.status = 'ready';
            }
        }
        render();
    }, 1500);
}

function generateSampleContent(item, channel) {
    const templates = {
        linkedin: `${item.title}\n\nThis is what happens when eCommerce brands invest in the right operational foundation.\n\nKey takeaways:\n→ Faster time to value than legacy systems\n→ Built for DTC complexity\n→ Real ROI, not just promises\n\nFull story on our blog.`,
        x: `${item.title}\n\nThe old way: spreadsheets, duct tape, prayer.\nThe new way: one system that actually works.\n\nHere's what changed:`,
        youtube: `${item.title} | Fulfil\n\nIn this video, we break down how modern eCommerce brands are replacing legacy tools with a unified ERP that scales with their business.`,
        blog: `${item.title}\n\nFor growing eCommerce brands, the gap between where your operations are and where they need to be isn't just a tech problem — it's a growth ceiling.`,
        sales: `ONE-PAGER: ${item.title}\n\nChallenge: Growing eCommerce operations outpacing current tools\nSolution: Fulfil ERP — purpose-built for eCommerce\nResults: See case study for specific metrics`,
        email: `Subject: ${item.title}\n\nHi {{first_name}},\n\nIf your current systems can't keep up with your growth, you're not alone.\n\nHere's how other brands solved this exact problem:`
    };
    return templates[channel] || 'Content generated by Claude.';
}

// ---- EVENT BINDING ----

function bindEvents() {
    // Filter tabs
    document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            activeFilter = tab.dataset.filter;
            render();
        });
    });

    // Table row expansion
    document.querySelectorAll('.content-table tbody tr[data-item]').forEach(row => {
        row.addEventListener('click', () => {
            const itemId = row.dataset.item;
            expandedItem = expandedItem === itemId ? null : itemId;
            render();
        });
    });

    // Generate buttons (stop propagation so row doesn't collapse)
    document.querySelectorAll('.btn-generate').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            simulateGenerate(btn.dataset.item, btn.dataset.channel);
        });
    });
}

// ---- INIT ----
document.addEventListener('DOMContentLoaded', render);
