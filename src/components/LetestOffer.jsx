import { letestOffers } from "../data/data";
const LetestOffer = () => {
  return (
    <>
      <h2 className="mt-4 p-2 font-bold">Latest Offering</h2>
      <div className="p-1 gap-5 grid grid-cols-1 md:gridcol lg:grid-cols-3 place-items-center">
        {letestOffers.map((item) => (
          <div className=" h-[358px] shadow-md m-2">
            <img
              src={item.image}
              alt=""
              className="h-[167px] w-full object-cover"
            />
            <div className="flex flex-col p-4 bg-[#F9F9F9]">
              <h4>{item.name}</h4>
              <p>{item.dec.slice(0,69)}...</p>
              <div className="flex justify-between items-center">
                <h6>${item.price}</h6>
                <button className="bg-[#00754A] text-white py-1 px-3 rounded-full">
                  Add Item
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default LetestOffer;
