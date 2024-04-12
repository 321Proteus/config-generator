function buildConfig() {

    var container = document.getElementById("settings");

    for (const key in config) {
        
        var item = config[key];

        var element = document.createElement("div");
        element.className = "setting";

        var nameElement = document.createElement("div");
        nameElement.className = "setting-name";
        nameElement.innerText = key;

        var inputElement;

        if (item["type"] == "enum") {
            inputElement = document.createElement("select");
            for (const value of item["values"]) {
                var option = document.createElement("option");

                if (value == item["value"]) option.selected = true;
                option.value = value;
                option.innerText = value;
                inputElement.appendChild(option);
            }
        }

        else if (item["type"] == "string") {
            inputElement = document.createElement("input");
            inputElement.type = "text";
        }

        else {
            inputElement = document.createElement("input");
            inputElement.type = "number";
        }

        inputElement.className = "config-value";
        inputElement.value = item["value"];
        inputElement.id = key;

        if (inputElement.tagName == "INPUT") {
            inputElement.oninput = writeValue;
        } else {
            inputElement.onchange = writeValue;
        }

        element.appendChild(nameElement);
        element.appendChild(inputElement);
        container.appendChild(element)
    }
}

buildConfig();
generateConfig();

function writeValue() {

    console.log(`New value written at ${this.id}: "${this.value}"`);
    config[this.id].value = this.value;

    generateConfig();
    
}

function generateConfig() {
    var outputElement = document.getElementById("output-text");

    outputElement.innerHTML = `
    <button id="copy" onclick=copyConfig()>Copy</button>
    <br>
    <span class="define">#pragma </span>
    <span class="value">once</span>
    <br><br>`;

    for (const key in config) {
        outputElement.innerHTML += `
        <span class="define">#define </span>
        <span class="name">${key} </span>
        <span class="value">${config[key].value} </span><br>`;
    }
    
}

function copyConfig() {
    var text = document.getElementById("output-text").innerText.slice(6);
    navigator.clipboard.writeText(text);
}