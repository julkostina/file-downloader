const inputE1 = document.querySelector(".input");
const downloadBtnE1= document.querySelector(".downloadBtn");

downloadBtnE1.addEventListener("click", (event)=> {
    event.preventDefault();
    downloadBtnE1.innerText = "Downloading...";
    fetchURL(inputE1.value);
});

async function fetchURL(url){
    try{
        const data = await fetch(url);
        const blob = await data.blob();
        const fileUrl = URL.createObjectURL(blob);
        const aTagE1 = docment.createElement("a");
        aTagE1.href  =fileUrl;
        aTagE1.download  ="FileDownloader";
        document.body.appendChild(aTagE1);
        aTagE1.click();
        downloadBtnE1.innerText = "Download";
        URL.revokeObjectURL(fileUrl);
        aTagE1.remove();
    }
    catch{
        alert("Failed to download...");
        downloadBtnE1.innerText = "Download";
    }
}