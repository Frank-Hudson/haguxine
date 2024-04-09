function showPopup(message) {
    popup.innerHTML = message;
    popup.classList.add("shown");
    setTimeout(() => {
        popup.classList.remove("shown");
        popup.innerHTML = "";
    }, 7000);
}

topbarShare.addEventListener("click", () =>
    writeClipboardText("https://frank-hudson.github.io/haguxine/")
);

async function writeClipboardText(text) {
    try {
        await navigator.clipboard.writeText(text);
        console.log(`Successfully wrote ${text} to clipboard`);
        showPopup("Link copied");
    } catch (error) {
        console.error(error.message);
    }
}
