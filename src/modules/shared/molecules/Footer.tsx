const Footer = () => {
  return (
    <div className="flex flex-col px-48 py-8 mb-20">
      <div className="flex flex-row justify-between gap-20">
        <div className="flex flex-col w-1/2">
          <h3 className="text-xl font-bold">About</h3>
          <p className="text-sm">
            Zivo es un innovador software diseñado para la documentación del
            conocimiento de manera eficiente y efectiva. Con Zivo, puedes
            capturar, organizar y compartir fácilmente información importante y
            experiencias clave dentro de tu organización a través de un modelo
            de blog post, con funciones intuitivas de búsqueda y navegación,
            encontrarás rápidamente la información que necesitas.
          </p>
        </div>
        <div className="flex flex-col">
          <h3 className="text-xl w-max font-bold">Quick Link</h3>
          <span className="text-sm font-medium text-primary py-2">Home</span>
          <span className="text-sm font-medium text-primary py-2">
            Create post
          </span>
          <span className="text-sm font-medium text-primary py-2">About</span>
        </div>
        <div className="flex flex-col">
          <h3 className="text-xl font-bold">Category</h3>
          <span className="text-sm font-medium text-primary py-2">
            Tutorials
          </span>
          <span className="text-sm font-medium text-primary py-2">Errors</span>
          <span className="text-sm font-medium text-primary py-2">
            Best pratices
          </span>
        </div>
      </div>
      {/** Poner una linia divisora con el primary */}
      <div className="flex flex-row border-t border-primary mt-4"></div>
      <div className="flex flex-row justify-start items-center mt-4 gap-4">
        <img
          src="https://picsum.photos/200/200"
          className="w-12 h-12 rounded-full"
          alt="logo"
        />
        <div className="flex flex-col">
          <span className="text-sm text-primary font-bold">Zivo</span>
          <div className="text-sm">
            © 2023{' '}
            <span className="text-primary font-bold">Sophos Solutions.</span>{' '}
            All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
