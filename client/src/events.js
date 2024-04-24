function showPopup(popup, message) {
    popup.innerHTML = message;
    popup.classList.add("shown");
    setTimeout(() => {
        popup.classList.remove("shown");
        popup.innerHTML = "";
    }, 7000);
}

// topbarShare.addEventListener("click", () =>
function topbarShareClick(popup) {
    writeClipboardText(popup, "https://frank-hudson.github.io/haguxine/");
}

async function writeClipboardText(popup, text) {
    try {
        await navigator.clipboard.writeText(text);
        console.log(`Successfully wrote ${text} to clipboard`);
        showPopup(popup, "Link copied");
    } catch (error) {
        console.error(error.message);
        popup.classList.add("warning");
        showPopup(popup, "Failed to copy link");
        popup.classList.remove("warning");
    }
}

export { showPopup, topbarShareClick, writeClipboardText };
