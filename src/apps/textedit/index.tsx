import { BaseApp } from "../base/types";
import { TextEditAppComponent } from "./components/TextEditAppComponent";

export const helpItems = [
  {
    icon: "📝",
    title: "Edición RICH",
    description: "Escribe, copia, corta, pega, deshaz y rehaz tu texto con facilidad",
  },
  {
    icon: "🎨",
    title: "Formato",
    description: "Opciones de negrita, cursiva, subrayado, encabezados y alineación",
  },
  {
    icon: "📋",
    title: "Listas y Tareas",
    description: "Crea listas con viñetas, numeradas y de tareas con casillas",
  },
  {
    icon: "💾",
    title: "Gestión de Archivos",
    description:
      "Crea, abre, guarda y exporta archivos (HTML, MD, TXT) con guardado automático",
  },
  {
    icon: "🎤",
    title: "Dictado por Voz",
    description: "Dicta texto sin usar las manos directamente en el documento",
  },
  {
    icon: "⚡",
    title: "Comandos de Barra /",
    description: "Escribe / para acciones rápidas o deja que Ryo AI edite líneas remotamente",
  },
];

export const appMetadata = {
  name: "Editor de Texto",
  version: "1.0",
  creator: {
    name: "Ryo Lu",
    url: "https://ryo.lu",
  },
  github: "https://github.com/ryokun6/ryos",
  icon: "/icons/textedit.png",
};

export const TextEditApp: BaseApp = {
  id: "textedit",
  name: "Editor de Texto",
  icon: { type: "image", src: appMetadata.icon },
  description: "A simple rich text editor",
  component: TextEditAppComponent,
  helpItems,
  metadata: appMetadata,
};
