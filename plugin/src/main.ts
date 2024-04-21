import { env } from "./env";

type ExtractedData = {
  device: string;
  os: string;
  origin: string;
};

let isSubmitButtonDisabled = false;

export function extractData(): ExtractedData {
  const userAgent = navigator.userAgent;
  const platform = navigator.platform;
  const origin = window.location.hostname;

  let device = "desktop";
  if (/android/i.test(userAgent)) {
    device = "android";
  } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MediaStream) {
    device = "ios";
  }

  const os = platform;

  return { device, os, origin };
}

function addButtonToPage(): void {
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

async function handleExtractDataButtonSubmit(event: MouseEvent): Promise<void> {
  if (event.target instanceof HTMLButtonElement) {
    isSubmitButtonDisabled = true;
    event.target.disabled = true;
    event.target.style.opacity = "0.5";
    event.target.style.cursor = "not-allowed";

    const extractedData = extractData();

    if (extractedData) {
      console.log("Data extraction completed:", extractedData);

      await postExtractedData(extractedData);
      console.log("Data extraction sent to the server.");

      isSubmitButtonDisabled = false;
      event.target.disabled = false;
      event.target.style.opacity = "1";
      event.target.style.cursor = "pointer";
    }
  }
}

async function postExtractedData(extractData: ExtractedData) {
  try {
    const response = await fetch(`${env.Api.BaseUrl}/collect`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${env.Api.Token}`,
      },
      body: JSON.stringify(extractData),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    alert("Os dados extraídos foram enviados com sucesso!");
  } catch (error) {
    console.error(error);

    alert(
      "⛔ Falha ao enviar dados para o servidor. Verifique o console para mais detalhes."
    );
  }
}

function activatePlugin() {
  console.log("🔶 Data Extraction Plugin is activated! 🚀");

  addButtonToPage();
}

activatePlugin();
