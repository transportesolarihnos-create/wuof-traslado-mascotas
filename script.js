/* WUOF! — medición de clics y pequeñas mejoras progresivas.
   El clic en WhatsApp se mide como la conversión existente de Google Ads.
   Es un clic de contacto, no una confirmación de mensaje enviado o viaje contratado. */
(function () {
  "use strict";

  var conversionPending = false;
  var conversionLabel = "AW-17179407943/Vd4JCInghocdEMfs4_8_";

  window.gtag_report_conversion = function (url) {
    if (!url) return true;

    // Evita contar varios clics seguidos mientras se abre WhatsApp.
    if (conversionPending) return false;
    conversionPending = true;

    var navigated = false;
    var fallbackTimer;

    function continueToWhatsApp() {
      if (navigated) return;
      navigated = true;
      if (fallbackTimer) window.clearTimeout(fallbackTimer);
      window.location.href = url;
    }

    // Si gtag no está disponible, prioriza que el contacto siga funcionando.
    if (typeof window.gtag !== "function") {
      continueToWhatsApp();
      return false;
    }

    try {
      // Conserva la acción de conversión existente de Google Ads.
      window.gtag("event", "conversion", {
        send_to: conversionLabel,
        event_callback: continueToWhatsApp,
        event_timeout: 900
      });

      // Evita que un bloqueador o una conexión lenta impida abrir WhatsApp.
      fallbackTimer = window.setTimeout(continueToWhatsApp, 1000);

      // Evento analítico complementario; no crea por sí mismo otra conversión de Ads.
      window.gtag("event", "whatsapp_click", {
        event_category: "contacto",
        event_label: "wuof_web",
        transport_type: "beacon"
      });
    } catch (error) {
      continueToWhatsApp();
    }

    return false;
  };

  // Año automático en el pie.
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  // Mantiene las animaciones desactivadas si el usuario prefiere movimiento reducido.
  if (!window.matchMedia || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }
})();
