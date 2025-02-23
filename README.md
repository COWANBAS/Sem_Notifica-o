# FUNCIONALIDADE

*Seletores de Notificação*

![image](https://github.com/user-attachments/assets/9753cb25-4f3a-4528-8d0b-221d25adb40a)

- Define uma lista de seletores CSS comuns que correspondem a elementos de notificação.

*Função para Remover Notificações*

![image](https://github.com/user-attachments/assets/cc6f9481-8ae0-4209-af54-36aecb191ef9)

A função removeNotifications percorre cada seletor na lista notificationSelectors.

Para cada seletor, seleciona todos os elementos correspondentes no documento.

Remove cada elemento encontrado.

*Evento de Carregamento da Página*

![image](https://github.com/user-attachments/assets/e9954984-9527-4670-bcd0-02e993fe4feb)

Adiciona um ouvinte de eventos para o evento load da janela.

Quando a página é totalmente carregada, a função removeNotifications é chamada para remover quaisquer notificações presentes.

*Observador de Mutação*

![image](https://github.com/user-attachments/assets/ba036f2a-5977-466a-b2f8-b4fc57d7d91e)

Cria um observador de mutação (MutationObserver) que observa mudanças no DOM.

Configura o observador para chamar removeNotifications sempre que há mudanças na lista de filhos (childList: true) ou em qualquer descendente (subtree: true) do document.body.
