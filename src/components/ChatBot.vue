<script setup>

import { nextTick, onMounted } from 'vue';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';


onMounted(async() => {
  //await nextTick(); //espera a que vue termine de renderizar

  //asegura que los estilos se agregen despues crear el chat
  setTimeout(() => {

    document.querySelector('#n8n-chat')?.setAttribute("style", "background-color: red;");

  }, 500); //espera para asegurar que el chat ya se ha cargado
  
  createChat({
    webhookUrl: 'https://juan97.app.n8n.cloud/webhook/a889d2ae-2159-402f-b326-5f61e90f602e/chat',
    defaultLanguage: 'es',
    initialMessages: ['¡Hola! Soy Edu, 🧑‍💼tu asistente virtual de la DGES. ¿En qué puedo ayudarte hoy?'],
    target: '#n8n-chat',
    mode: 'fullscreen', //window
    showWelcomeScreen: false,
    i18n : {
      es : {
        title: '🪟 Ventanilla Virtual DGES Guanajuato - Disponible hasta: 9/5/2025' ,
        subtitle : '¡Hola! Bienvenido/a, Mi trabajo es brindarte información precisa sobres la DGES y sus procesos ¡Pregúntame lo que necesites!',
        footer: '',
        getStarted : 'Nueva Conversacion',
        inputPlaceholder : 'Escribe tu pregunta'
    }
  }
  });
});

</script>

<template>
</template>

<style scoped>
</style>