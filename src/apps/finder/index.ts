import { BaseApp } from "../base/types";
import { FinderAppComponent } from "./components/FinderAppComponent";

export const appMetadata = {
  name: "Finder",
  version: "1.0.0",
  creator: {
    name: "Ryo",
    url: "https://github.com/ryokun6",
  },
  github: "https://github.com/ryokun6/ryos",
  icon: "/icons/mac.png",
};

export const helpItems = [
  {
    icon: "🔍",
    title: "Explorar y navegar",
    description:
      "Botones de retroceso/adelante, barra de direccion y GO menú navegar rápida",
  },
  {
    icon: "📁",
    title: "Administrador de Archivos",
    description:
      "Crea carpetas, renombra, mueve y arrastra elementos para organizar archivos.",
  },
  {
    icon: "👀",
    title: "Ver y ordenar",
    description:
      "Cambia el tamaño de los iconos y ordena por nombre, tipo, tamaño o fecha",
  },
  {
    icon: "📍",
    title: "Acceso rápido",
    description:
      "Accede a Documentos, Aplicaciones o Papelera al instante desde el menú GO",
  },
  {
    icon: "ℹ️",
    title: "Información de almacenamiento",
    description:
      "Consulta el espacio libre y el número de elementos en el pie de página",
  },
  {
    icon: "🗑️",
    title: "Papelera",
    description:
      "Arrastra archivos a la Papelera y vacíala para eliminarlos permanentemente",
  },
];

export const FinderApp: BaseApp = {
  id: "finder",
  name: "Finder",
  description: "Explorar y administrar archivos",
  icon: {
    type: "image",
    src: "/icons/mac.png",
  },
  component: FinderAppComponent,
  helpItems,
  metadata: appMetadata,
};
