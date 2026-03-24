// Pod 01: Terminal Phrasebook — Click to copy

document.addEventListener("DOMContentLoaded", () => {
	const cards = document.querySelectorAll(".phrase-card[data-command]");
	const toast = document.getElementById("toast");
	const toastText = document.getElementById("toast-text");
	let toastTimeout;

	cards.forEach((card) => {
		// Skip tip cards (no copy action)
		if (card.classList.contains("tip")) return;

		card.addEventListener("click", () => {
			const command = card.getAttribute("data-command");
			copyToClipboard(command);
			showToast(`Copied: ${command}`);
		});
	});

	function copyToClipboard(text) {
		if (navigator.clipboard && navigator.clipboard.writeText) {
			navigator.clipboard.writeText(text);
		} else {
			// Fallback for older browsers
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
});
