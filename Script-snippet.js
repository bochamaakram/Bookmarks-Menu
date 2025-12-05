let SpanSpace = document.querySelector(
  `[class="disablemobileborder single_top_postproduct pt20 pb20 border-top border-grey-bottom mb30 flowhidden clearfix"] [class="price_count"]`
);
let downloadBtn = document.createElement("button");
downloadBtn.innerText = "Download Bookmark";
downloadBtn.style.padding = "10px 15px";
downloadBtn.style.background = "#007d19";
downloadBtn.style.color = "#fff";
downloadBtn.style.border = "none";
downloadBtn.style.cursor = "pointer";

// Insert the button
SpanSpace.appendChild(downloadBtn);

downloadBtn.addEventListener("click", () => {
  fetch(
    "https://raw.githubusercontent.com/bochamaakram/Bookmarks-Menu/refs/heads/main/index.html"
  )
    .then((res) => res.blob())
    .then((blob) => {
      let url = URL.createObjectURL(blob);
      let a = document.createElement("a");
      a.href = url;
      a.download = "bookmark.html"; // force name
      a.click();
      URL.revokeObjectURL(url);
    })
    .catch((err) => console.error("Download error:", err));
});
