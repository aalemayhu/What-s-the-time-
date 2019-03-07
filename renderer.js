function eventLoop() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const ht = `${hours}:${minutes}:${seconds}`
    document.getElementById("title").innerHTML = ht;
}

setInterval(eventLoop, 1000);