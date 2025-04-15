import { createApp } from 'vue'
//import { createChat } from '@n8n/chat'
import './style.css'
import App from './App.vue'

/*
createChat({
	webhookUrl: 'http://localhost:5678/webhook/1f9a33ea-58c3-4183-8eed-fbf679b7cdb0/chat',
  defaultLanguage: 'es',
  initialMessages: ['¡Hola! Soy tu asistente digital de la DGES. ¿En qué puedo ayudarte hoy?'],
  mode: 'fullscreen', //window
  showWelcomeScreen: true,
  i18n : {
    es : {
      title: '¡Hola! 👋 Bienvenido/a' ,
      subtitle : 'Mi trabajo es brindarte información precisa sobre la DGES y sus procesos ¡Pregúntame lo que necesites!',
      getStarted : 'Nueva Conversacion',
      inputPlaceholder : 'Escribe tu pregunta'
    },
  },
})*/

createApp(App).mount('#app')
