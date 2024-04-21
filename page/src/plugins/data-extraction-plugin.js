const env = {
    Api: {
        BaseUrl: "http://localhost:3000",
        Token: "token",
    },
};

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function extractData() {
    const userAgent = navigator.userAgent;
    const platform = navigator.platform;
    const origin = window.location.hostname;
    let device = "desktop";
    if (/android/i.test(userAgent)) {
        device = "android";
    }
    else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MediaStream) {
        device = "ios";
    }
    const os = platform;
    return { device, os, origin };
}
function addButtonToPage() {
    const button = document.createElement("button");
    button.ariaLabel = "Ativar extração de dados";
    // Add styles
    button.style.position = "fixed";
    button.style.bottom = "0";
    button.style.right = "0";
    button.style.padding = "0.7rem 1rem";
    button.style.transform = "rotate(-90deg) translate(100%, 100%)";
    button.style.border = "none";
    button.style.borderTopLeftRadius = "0.5rem";
    button.style.borderTopRightRadius = "0.5rem";
    button.style.backgroundColor = "#eb4c2b";
    button.style.color = "#ffffff";
    button.style.cursor = "pointer";
    button.style.zIndex = "9999";
    button.textContent = "Extrair Dados";
    button.addEventListener("click", handleExtractDataButtonSubmit);
    document.body.appendChild(button);
}
function handleExtractDataButtonSubmit(event) {
    return __awaiter(this, void 0, void 0, function* () {
        if (event.target instanceof HTMLButtonElement) {
            event.target.disabled = true;
            event.target.style.opacity = "0.5";
            event.target.style.cursor = "not-allowed";
            const extractedData = extractData();
            if (extractedData) {
                console.log("Data extraction completed:", extractedData);
                yield postExtractedData(extractedData);
                console.log("Data extraction sent to the server.");
                event.target.disabled = false;
                event.target.style.opacity = "1";
                event.target.style.cursor = "pointer";
            }
        }
    });
}
function postExtractedData(extractData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield fetch(`${env.Api.BaseUrl}/collect`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${env.Api.Token}`,
                },
                body: JSON.stringify(extractData),
            });
            alert("Os dados extraídos foram enviados com sucesso!");
        }
        catch (error) {
            console.error("Failed to send data to the server:", error);
            alert("Falha ao enviar dados para o servidor. Verifique o console para mais detalhes.");
        }
    });
}
function activatePlugin() {
    console.log("🔶 Data Extraction Plugin is activated! 🚀");
    addButtonToPage();
}
activatePlugin();

export { extractData };
