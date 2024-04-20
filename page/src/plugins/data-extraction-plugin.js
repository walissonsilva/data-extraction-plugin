export function extractData() {
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
function activatePlugin() {
    console.log("🔶 Data Extraction Plugin is activated! 🚀");
    const { device, os, origin } = extractData();
    console.log("Device:", device);
    console.log("OS:", os);
    console.log("Origin:", origin);
}
activatePlugin();
