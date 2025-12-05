// Create a button to save current page as bookmark
(function () {
  const btn = document.createElement("button");
  btn.innerHTML = "Save This Page as Bookmark";
  btn.style.cssText = `
        padding: 10px 15px;
        background: red;
        border: none;
        border-radius: 6px;
        color: white;
    `;

  btn.onmouseover = () => (btn.style.transform = "translateY(-2px)");
  btn.onmouseout = () => (btn.style.transform = "translateY(0)");

  btn.onclick = function () {
    const pageTitle =
      document.title || "CouponsCorpion - DeepSeek AI for Business";
    const pageUrl = window.location.href;
    const timestamp = Math.floor(Date.now() / 1000);

    const bookmark = `<!DOCTYPE NETSCAPE-Bookmark-file-1>
<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8">
<TITLE>Bookmarks</TITLE>
<H1>Bookmarks</H1>
<DL><p>
    <DT><A HREF="${pageUrl}" ADD_DATE="${timestamp}">${pageTitle}</A>
    <DD>Saved from: ${pageUrl} on ${new Date().toLocaleString()}
</DL>`;

    const blob = new Blob([bookmark], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "saved-page-bookmark.html";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    // Show confirmation
    const originalText = btn.innerHTML;
    btn.innerHTML = "Bookmark Saved!";
    btn.style.background = "linear-gradient(135deg, #10b981, #059669)";
    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.style.background = "#d97706";
    }, 1500);
  };

  document.body.appendChild(btn);
  console.log("Bookmark button added. Current page:", document.title);
})();
