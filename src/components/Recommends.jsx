import { recommends } from "../data/data";

const Recommends = () => {
  return (
    <div>
      <div className="w-full py-3 bg-[#edebe9] my-5">
        <div className="flex justify-between items-center px-2 py-2 md:px-16 md:py-3">
          <h3 className="font-bold">Barista Recommends</h3>
          <h6 className="text-[#00754A]">View Menu</h6>
        </div>
        <div className="grid grid-cols-1 gap-3  md:grid-cols-3 m-2 md:m-3">
          {recommends.map((item) => (
            <div className="w-full lg:w-[409px] px-[24px] py-[16px] bg-white shadow-sm">
              <div className="flex">
                <img
                  className="w-[80px] object-cover"
                  src={item.image}
                  alt=""
                />
                <div className="pl-5">
                  <h4>{item.name}</h4>
                  <small className="text-[#c6757d]">{item.dec}</small>
                </div>
              </div>
              <div className="flex justify-between items-center pt-3">
                <h6 className="pt-2">${item.price}</h6>
                <button className="bg-[#00754A] rounded-full px-3 py-1 text-white">
                  Add Item
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Recommends;
