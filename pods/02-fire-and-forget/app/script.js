// Pod 02: Connection Dashboard

document.addEventListener("DOMContentLoaded", () => {
	const services = [
		{
			id: "claude-code",
			name: "Claude Code",
			icon: "\uD83E\uDDE0",
			description: "Your AI builder that lives in the terminal. The brain behind everything.",
			connected: true,
			fixSteps: [
				"Check that Claude Code is installed: type <code>claude --version</code> in your terminal",
				"If it says \"command not found\", reinstall: <code>npm install -g @anthropic-ai/claude-code</code>",
				"Make sure your Anthropic API key is set in your environment",
				"Restart your terminal and try <code>claude --version</code> again"
			]
		},
		{
			id: "github",
			name: "GitHub",
			icon: "\uD83D\uDD12",
			description: "Your code locker. Like Google Drive, but for code. Every project gets saved here.",
			connected: true,
			fixSteps: [
				"Check your token exists: <code>ls ~/oren-auth/github*</code>",
				"Go to <a href='https://github.com/settings/tokens' style='color: #4A90D9;'>github.com/settings/tokens</a> and verify your token is active",
				"Make sure the token has scopes: <code>repo</code>, <code>workflow</code>, <code>read:org</code>",
				"If expired, generate a new token and update <code>~/oren-auth/</code>"
			]
		},
		{
			id: "vercel",
			name: "Vercel",
			icon: "\u25B2",
			description: "Your publishing button. Turns a folder into a live website in seconds.",
			connected: true,
			fixSteps: [
				"Check your token exists: <code>ls ~/oren-auth/vercel*</code>",
				"Go to <a href='https://vercel.com/account/tokens' style='color: #4A90D9;'>vercel.com/account/tokens</a> and check your token",
				"If expired, create a new token scoped to your personal account",
				"Save the new token to <code>~/oren-auth/</code> and re-run verify"
			]
		},
		{
			id: "slack",
			name: "Slack",
			icon: "\uD83D\uDCAC",
			description: "Team chat. Claude can read channels and post messages on your behalf.",
			connected: true,
			fixSteps: [
				"Check your token exists: <code>ls ~/oren-auth/slack*</code>",
				"Ask your facilitator for the latest Slack bot token (starts with <code>xoxb-</code>)",
				"Make sure the bot has been added to at least one channel (e.g., #learning-pods)",
				"Update the token in <code>~/oren-auth/</code> and re-run verify"
			]
		},
		{
			id: "google-drive",
			name: "Google Drive",
			icon: "\uD83D\uDCC1",
			description: "Your file cabinet. Claude can read, search, and download your documents.",
			connected: true,
			fixSteps: [
				"Check your credentials exist: <code>ls ~/oren-auth/google*</code>",
				"If missing, re-run the Google OAuth flow with your facilitator",
				"Make sure you authorized with your <strong>work</strong> Google account, not personal",
				"If credentials exist but don't work, the OAuth token may have expired — re-authorize"
			]
		},
		{
			id: "zoho-bigin",
			name: "Zoho Bigin",
			icon: "\uD83D\uDCCA",
			description: "Your customer rolodex. Deals, contacts, and the sales pipeline.",
			connected: true,
			fixSteps: [
				"Check your credentials exist: <code>ls ~/oren-auth/zoho*</code>",
				"Verify all three values are present: Client ID, Client Secret, Refresh Token",
				"If you see \"invalid_grant\", the refresh token has expired — ask your facilitator",
				"Get new credentials from your facilitator and update <code>~/oren-auth/</code>"
			]
		}
	];

	const skills = [
		{
			name: "/slack",
			icon: "\uD83D\uDCAC",
			description: "Send messages, read channels, and search Slack history",
			examples: [
				'/slack send #learning-pods "Hello from Claude!"',
				"/slack read #general",
				'/slack search "quarterly report"'
			]
		},
		{
			name: "/google-drive",
			icon: "\uD83D\uDCC1",
			description: "List, read, search, and download files from Google Drive",
			examples: [
				"/google-drive list",
				'/google-drive search "Q3 revenue"',
				'/google-drive read "Budget 2026.xlsx"'
			]
		},
		{
			name: "/zoho-bigin",
			icon: "\uD83D\uDCCA",
			description: "List deals, search contacts, create notes, update pipeline stages",
			examples: [
				"/zoho-bigin list deals",
				'/zoho-bigin search contacts "Tata Steel"',
				'/zoho-bigin create note "Follow up Tuesday"'
			]
		},
		{
			name: "/vercel",
			icon: "\u25B2",
			description: "Deploy projects to a live URL with one command",
			examples: [
				"/vercel deploy",
				"/vercel list",
				"/vercel status"
			]
		},
		{
			name: "/github",
			icon: "\uD83D\uDD12",
			description: "Manage repositories, issues, and pull requests",
			examples: [
				'/github create repo "my-dashboard"',
				"/github list repos",
				'/github create issue "Fix login bug"'
			]
		}
	];

	const quickRef = [
		{ label: "Start Claude Code", command: "claude", note: "Opens your AI builder" },
		{ label: "Send a Slack message", command: '/slack send #channel "message"', note: "Posts to any channel" },
		{ label: "List Drive files", command: "/google-drive list", note: "Shows your Google Drive" },
		{ label: "List Bigin deals", command: "/zoho-bigin list deals", note: "Shows the sales pipeline" },
		{ label: "Deploy to Vercel", command: "/vercel deploy", note: "Publishes your project" },
		{ label: "Switch to Opus", command: "/model opus", note: "Most capable model" },
		{ label: "Switch to Sonnet", command: "/model sonnet", note: "Balanced — your default" },
		{ label: "Switch to Haiku", command: "/model haiku", note: "Fastest for quick tasks" },
		{ label: "Enable Plan Mode", command: "Shift+Tab", note: "Claude plans before building" },
		{ label: "Run verify script", command: "python setup/verify.py", note: "Check all connections" },
		{ label: "Update skills", command: "./setup/copy-skills.sh", note: "Get latest skill files" },
		{ label: "Check credentials", command: "ls ~/oren-auth/", note: "See your saved tokens" }
	];

	// Render status cards
	const statusGrid = document.getElementById("status-grid");
	services.forEach((service) => {
		const card = document.createElement("div");
		card.className = "status-card " + (service.connected ? "connected" : "disconnected");
		card.dataset.serviceId = service.id;

		card.innerHTML =
			'<div class="card-icon">' + service.icon + "</div>" +
			'<div class="card-body">' +
				'<div class="card-header">' +
					'<span class="card-name">' + service.name + "</span>" +
					'<span class="status-indicator ' + (service.connected ? "green" : "red") + '"></span>' +
				"</div>" +
				'<div class="card-description">' + service.description + "</div>" +
				'<div class="card-status-text ' + (service.connected ? "pass" : "fail") + '">' +
					(service.connected ? "Connected" : "Not Connected \u2014 click for help") +
				"</div>" +
			"</div>";

		card.addEventListener("click", () => {
			if (!service.connected) {
				showFixPanel(service);
			} else {
				showToast(service.name + " is connected!");
			}
		});

		statusGrid.appendChild(card);
	});

	// Render toggle bar for simulating status
	const toggleBar = document.createElement("div");
	toggleBar.className = "toggle-bar";
	toggleBar.innerHTML =
		'<span class="toggle-bar-label">Simulate status:</span>' +
		'<div class="toggle-buttons" id="toggle-buttons"></div>';

	const connectionsSection = document.getElementById("connections-section");
	connectionsSection.insertBefore(toggleBar, statusGrid);

	const toggleButtons = document.getElementById("toggle-buttons");
	services.forEach((service) => {
		const btn = document.createElement("button");
		btn.className = "toggle-btn" + (service.connected ? " active" : "");
		btn.textContent = service.name;
		btn.addEventListener("click", () => {
			service.connected = !service.connected;
			btn.classList.toggle("active");
			refreshCards();
		});
		toggleButtons.appendChild(btn);
	});

	function refreshCards() {
		const cards = statusGrid.querySelectorAll(".status-card");
		cards.forEach((card) => {
			const serviceId = card.dataset.serviceId;
			const service = services.find((s) => s.id === serviceId);

			card.className = "status-card " + (service.connected ? "connected" : "disconnected");

			const indicator = card.querySelector(".status-indicator");
			indicator.className = "status-indicator " + (service.connected ? "green" : "red");

			const statusText = card.querySelector(".card-status-text");
			statusText.className = "card-status-text " + (service.connected ? "pass" : "fail");
			statusText.textContent = service.connected ? "Connected" : "Not Connected \u2014 click for help";
		});

		updateSummary();

		// Close fix panel if the service is now connected
		const fixPanel = document.getElementById("fix-panel");
		if (!fixPanel.classList.contains("hidden")) {
			const currentServiceId = fixPanel.dataset.serviceId;
			const currentService = services.find((s) => s.id === currentServiceId);
			if (currentService && currentService.connected) {
				fixPanel.classList.add("hidden");
			}
		}
	}

	function updateSummary() {
		const connectedCount = services.filter((s) => s.connected).length;
		document.getElementById("connected-count").textContent = connectedCount;

		const summaryEl = document.getElementById("connected-count");
		summaryEl.style.color = connectedCount === services.length ? "#0f9b58" : "#e74c3c";
	}

	updateSummary();

	// Fix panel
	function showFixPanel(service) {
		const panel = document.getElementById("fix-panel");
		const title = document.getElementById("fix-panel-title");
		const body = document.getElementById("fix-panel-body");

		panel.dataset.serviceId = service.id;
		title.textContent = "How to Fix: " + service.name;

		let stepsHtml = "";
		service.fixSteps.forEach((step, i) => {
			stepsHtml +=
				'<div class="fix-step">' +
					'<span class="fix-step-number">' + (i + 1) + ".</span> " +
					step +
				"</div>";
		});
		body.innerHTML = stepsHtml;

		panel.classList.remove("hidden");
		panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
	}

	document.getElementById("fix-panel-close").addEventListener("click", () => {
		document.getElementById("fix-panel").classList.add("hidden");
	});

	// Render skills
	const skillsGrid = document.getElementById("skills-grid");
	skills.forEach((skill) => {
		const card = document.createElement("div");
		card.className = "skill-card";

		let examplesHtml = "";
		skill.examples.forEach((example) => {
			examplesHtml += '<li data-command="' + escapeAttr(example) + '">' + escapeHtml(example) + "</li>";
		});

		card.innerHTML =
			'<div class="skill-header">' +
				'<span class="skill-icon">' + skill.icon + "</span>" +
				'<span class="skill-name">' + skill.name + "</span>" +
			"</div>" +
			'<div class="skill-description">' + skill.description + "</div>" +
			'<ul class="skill-examples">' + examplesHtml + "</ul>";

		card.querySelectorAll(".skill-examples li").forEach((li) => {
			li.addEventListener("click", () => {
				const cmd = li.getAttribute("data-command");
				copyToClipboard(cmd);
				showToast("Copied: " + cmd);
			});
		});

		skillsGrid.appendChild(card);
	});

	// Render quick reference
	const refGrid = document.getElementById("reference-grid");
	quickRef.forEach((ref) => {
		const card = document.createElement("div");
		card.className = "ref-card";
		card.dataset.command = ref.command;

		card.innerHTML =
			'<div class="ref-label">' + ref.label + "</div>" +
			'<div class="ref-command">' + escapeHtml(ref.command) + "</div>" +
			'<div class="ref-note">' + ref.note + "</div>";

		card.addEventListener("click", () => {
			copyToClipboard(ref.command);
			showToast("Copied: " + ref.command);
		});

		refGrid.appendChild(card);
	});

	// Clipboard and toast utilities
	const toast = document.getElementById("toast");
	const toastText = document.getElementById("toast-text");
	let toastTimeout;

	function copyToClipboard(text) {
		if (navigator.clipboard && navigator.clipboard.writeText) {
			navigator.clipboard.writeText(text);
		} else {
			const textarea = document.createElement("textarea");
			textarea.value = text;
			textarea.style.position = "fixed";
			textarea.style.opacity = "0";
			document.body.appendChild(textarea);
			textarea.select();
			document.execCommand("copy");
			document.body.removeChild(textarea);
		}
	}

	function showToast(message) {
		clearTimeout(toastTimeout);
		toastText.textContent = message;
		toast.classList.remove("hidden");
		toastTimeout = setTimeout(() => {
			toast.classList.add("hidden");
		}, 2000);
	}

	function escapeHtml(str) {
		const div = document.createElement("div");
		div.textContent = str;
		return div.innerHTML;
	}

	function escapeAttr(str) {
		return str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
	}
});
