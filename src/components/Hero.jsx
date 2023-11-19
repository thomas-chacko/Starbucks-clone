import { data } from "../data/data";

const Hero = () => {
  return (
    <>
      <h3 className=" mt-4 p-2 font-bold">Handcrafted Curations</h3>
      <div className="w-full mx-auto flex justify-between flex-wrap">
        {data.map((item) => (
          <div className="w-[108px] h-[158px] p-2">
            <img
              className="rounded-full shadow-sm"
              src={item.image}
              alt="images"
            />
            <p className="text-center font-bold">{item.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};
export default Hero;
