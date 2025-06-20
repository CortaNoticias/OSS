import { BaseApp } from "../base/types";
import { ChatsAppComponent } from "./components/ChatsAppComponent";

export const helpItems = [
  {
    icon: "💬",
    title: "Chatea con IA",
    description:
      "Escribe tu mensaje!",
  },
  {
    icon: "#️⃣",
    title: "Chat",
    description:
      "Conectate con gente",
  },
  {
    icon: "🎤",
    title: "Apreta para hablar",
    description:
      "Mantén espacio, o apreta el micrófono para grabar y enviar mensajes.",
  },
  {
    icon: "📝",
    title: "Controla TextEdit",
    description:
      "Pide que edite tus textos de TextEdit.",
  },
  {
    icon: "🚀",
    title: "Controla Apps",
    description:
      "Pide que se abran o cierren aplicaciones.",
  },
  {
    icon: "💾",
    title: "Guardar Transcripción",
    description:
      "Guarda tu conversación.",
  },
];

export const appMetadata = {
  name: "Chats",
  version: "1.0",
  creator: {
    name: "Ryo Lu",
    url: "https://ryo.lu",
  },
  github: "https://github.com/ryokun6/ryos",
  icon: "/icons/question.png",
};

export const ChatsApp: BaseApp = {
  id: "chats",
  name: "Chats",
  icon: { type: "image", src: appMetadata.icon },
  description: "Chatea con IA",
  component: ChatsAppComponent,
  helpItems,
  metadata: appMetadata,
};
