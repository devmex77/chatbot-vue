# Chatbot creado con Vue 3 + Vite:
En este ejemplo se implementa un asistente con inteligencia artificial que funciona desde el navegador, usando la herramienta N8N y se busca aplicar el patron de diseño atomico, el cual permite un mayor orden, limpieza y control en el codigo.

<img width="698" alt="image" src="https://github.com/user-attachments/assets/d6bc1e98-41ae-46b7-b403-f759d0e7523d" /><br>

<img width="698" alt="image" src="https://github.com/user-attachments/assets/3703be97-18e9-4eed-8816-a0b5351f916c" />

# Descripcion de Funcionalidad:

Interfaz de chat para Navegador con Vue+Vite

Asistente IA con N8N-> Ollama-> Llama3.2

# Creacion del Asistente:
N8N es una herramienta No-Code, es decir no requiere que el usuario tenga conocimientos avanzados en programacion, ya que la programacion se realiza mediante bloques
graficos y nodos que simplifican y mejoran la experiencia de usuario, a continuacion se muestra un ejemplo de un asistente realizado con N8N:

<img width="533" alt="image" src="https://github.com/user-attachments/assets/26e878de-77a2-497e-a640-4380c7e4a272" />

# Ventana de chatbot Asistente IA:
al colocar el nodo Chat Message veremos una ventana como esta:
<img width="919" alt="image" src="https://github.com/user-attachments/assets/db27734f-c9f1-4d23-8e9a-59ff16ced038" />

la direccion de Chat URL debemos copiarla y pegarla en la linea de WebHook para enlazar la interfaz del chat con N8N y verificar que las otras opciones marcadas con amarillo se configuren como se muestra en la imagen. 


# Una vez hayas creado tu asistente con N8N solo tienes que poner tu webhook(Chat URL) en la configuracion de la funcion createChat como se muestra en la siguiente linea de codigo:
    `webhookUrl: 'http://localhost:5678/tu--webhook--chat'`

# Correr el chatbot
ejecuta en la terminal:
    `npm run dev`


