// ==UserScript==
// @name           Sem Notifica��o
// @description    Remove as notifica��es de todos os sites do navegador.
// @namespace      CowanNOT
// @license        CowBas
// @version        1.0
// @author         Cowanbas
// @match          *://*/*
// @run-at         document-start
// ==/UserScript==

(function() {
    'use strict';

    // Lista de nomes comuns de notifica��es
    const notificationSelectors = [
        '.notification',       // Classe de notifica��o
        '#notification',       // ID de notifica��o
        '.notif',              // Abrevia��o �s vezes usada
        '.alert',              // Alertas do Bootstrap
        '.toast',              // Notifica��es tipo toast
        '.popup',              // Notifica��es estilo popup
        '[role="alert"]',      // Role ARIA para alerta
        '[data-notification]'  // Atributo de dados customizado
    ];

    // Remover as notifica��es
    function removeNotifications() {
        notificationSelectors.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                element.remove();
            });
        });
    }

    // Tirar as notifica��es ao recarregar a p�gina
    window.addEventListener('load', removeNotifications);

    // Observar notifica��es adicionadas dinamicamente
    const observer = new MutationObserver(removeNotifications);
    observer.observe(document.body, { childList: true, subtree: true });

})();
``` ?