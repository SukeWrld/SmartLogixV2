export const QuickStart = () => {
  return (
    <div className="pb-10 md:scroll-m-[180px] scroll-m-28" id="start">
      <h3 className=" text-black text-2xl font-semibold mt-8">Inicio Rápido</h3>
      <div className="p-6 rounded-md border mt-6 border-dark_border/60">
        <h6 className="text-black text-lg font-medium">1. Requisitos</h6>
        <p className="text-base font-medium text-muted text-opacity-60">
          Antes de continuar, necesitas tener la última versión estable de{" "}
          <a href="https://nodejs.org/" className="text-primary">
            node.js
          </a>{" "}
        </p>
        <h6 className="mt-4 mb-2 text-black font-medium text-base">
          Entorno recomendado:
        </h6>
        <ul className="list-disc text-muted text-opacity-60 ps-6">
          <li>node js 20+</li>
          <li>npm js 10+</li>
        </ul>
      </div>
      <div className="p-6 rounded-md border mt-6 border-dark_border/60">
        <h6 className="text-black text-lg font-medium">2. Instalar</h6>
        <p className="text-base font-medium text-muted text-opacity-60">
          Abre la carpeta del paquete e instala sus dependencias. Recomendamos yarn o npm.{" "}
        </p>
        <h6 className="mt-4 mb-2 text-black text-dark font-medium text-base">
          1) Instalar con npm:
        </h6>
        <div className="py-4 px-3 rounded-md bg-black">
          <p className="text-sm text-white/60">
            <span className="text-yellow-500">cd</span> project-folder
          </p>
          <p className="text-sm text-white/60 mt-2">npm install</p>
        </div>
        <h6 className="mt-4 mb-2 text-black text-dark font-medium text-base">
          2) Instalar con yarn:
        </h6>
        <div className="py-4 px-3 rounded-md bg-black">
          <p className="text-sm text-white/60">
            <span className="text-yellow-500">cd</span> project-folder
          </p>
          <p className="text-sm text-white/60 mt-2">yarn install</p>
        </div>
      </div>
      <div className="p-6 rounded-md border mt-6 border-dark_border/60">
        <h6 className="text-black text-lg font-medium">3. Iniciar</h6>
        <p className="text-base font-medium text-muted text-opacity-60 mb-4">
          Una vez que npm install haya terminado, puedes ejecutar la aplicación.
        </p>

        <div className="py-4 px-3 rounded-md bg-black">
          <p className="text-sm text-white/60">npm run dev or yarn run dev</p>
        </div>
        <p className="text-base font-medium text-muted text-opacity-60 my-4">
          Este comando iniciará un servidor web local{" "}
          <span className="dark:text-black">http://localhost:3000:</span>
        </p>
        <div className="py-4 px-3 rounded-md bg-black">
          <p className="text-sm text-white/60">
            {"> paidin_project@2.0.0 dev"}
          </p>
          <p className="text-sm text-white/60 mt-1">{"> next dev"}</p>
          <p className="text-sm text-white/60 mt-6">{"-Next.js 14.2.4"}</p>
          <p className="text-sm text-white/60 mt-1">
            {"-Local: http://localhost:3000"}
          </p>
        </div>
      </div>
      <div className="p-6 rounded-md border mt-6 border-dark_border/60">
        <h6 className="text-black text-lg font-medium">
          4. Build / Despliegue
        </h6>
        <p className="text-base font-medium text-muted text-opacity-60 mb-4">
          Después de agregar la URL, ejecuta el siguiente comando para construir la aplicación.
        </p>

        <div className="py-4 px-3 rounded-md bg-black">
          <p className="text-sm text-white/60">npm run build or yarn build</p>
        </div>
        <p className="text-base font-medium text-muted text-opacity-60 mt-6">
          Finalmente, tu sitio web está listo para ser desplegado.🥳
        </p>
      </div>
    </div>
  );
};
