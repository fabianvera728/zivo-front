const About = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-row justify-between">
        <h1 className="text-4xl font-bold text-primary-dark w-1/3">
          About Zivo Project
        </h1>
        <p className="w-3/5">
          Zivo es un innovador software diseñado para la documentación del
          conocimiento de manera eficiente y efectiva. Con Zivo, puedes
          capturar, organizar y compartir fácilmente información importante y
          experiencias clave dentro de tu organización a través de un modelo de
          blog post, con funciones intuitivas de búsqueda y navegación,
          encontrarás rápidamente la información que necesitas.
        </p>
      </div>
      <div className="h-unit-8xl">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/9MiwQO-qhpc"
        ></iframe>
      </div>
    </div>
  );
};

export default About;
