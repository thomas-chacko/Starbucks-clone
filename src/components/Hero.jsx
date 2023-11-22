import { data } from "../data/data";

const Hero = () => {
  return (
    <section className="max-w-[1296px] mx-auto">
      <h3 className=" mt-4 font-bold">Handcrafted Curations</h3>
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
    </section>
  );
};
export default Hero;
