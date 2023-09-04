export const Banner = () => {
  return (
    <div>
      <div
        className="w-56 h-56 mt-4 absolute items-center left-1/2 bg-cover"
        style={{ backgroundImage: 'url(https://picsum.photos/200/300)' }}
      ></div>
      <div className="flex rounded-2xl flex-col p-8 h-64 items-start justify-end bg-gradient-to-b from-primary to-primary-dark bg-primary">
        {/** Poner una imagen en el fondo */}
        <span className="text-white z-10">Alejandro Jaimes | 20 Jan 2022</span>
        <h2 className="text-2xl text-white font-semibold z-10">
          How to use React with Typescript
        </h2>
        <p className="font-normal w-1/2 shadow-2xl text-white z-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatum.
        </p>
        <div className="flex flex-row items-center mt-2 gap-2 z-10">
          <div className="block text-sm bg-primary-light px-4 py-1 font-semibold rounded-3xl z-10">
            DataStage
          </div>
          <div className="block text-sm bg-primary-light px-4 py-1 font-semibold rounded-3xl z-10">
            Error 911
          </div>
        </div>
      </div>
    </div>
  );
};
