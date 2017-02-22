function setText(selector, text) {
    console.log(document.querySelector(selector));

    var nodes = document.querySelector(selector);
    nodes.innerText = text;
}

function setTextAll(selector, text) {
    var nodes = document.querySelectorAll(selector);

    for (i = 0; i < nodes.length; ++i) {
        nodes[i].innerText = text;
    }
}


setText("p", "wasn't that hard, yeah ?");
setTextAll("div .block a", "or was it ?");