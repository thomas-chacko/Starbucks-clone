import { giftCard } from "../data/data";

const Gift = () => {
  return (
    <div className="max-w-[1296px] mx-auto pt-2 mb-16">
      <div className="px-4">
        <p>Home {">"} Gift Cards</p>
      </div>
      <div className="hidden md:flex justify-start items-center gap-5 bg-[#F2F0EB] px-4 py-1">
        <p className="text-green-700 font-bold">FEATURED</p>
        <p>ANYTIME</p>
        <p>CONGURALATIONS</p>
        <p>THANK YOU</p>
      </div>
      <div className="border-b border-black mb-5 px-4 py-2">
        <h4>Anytime</h4>
      </div>
      <div className="w-full grid grid-cols-1 place-items-center md:grid-cols-3 gap-9">
        {giftCard.map((item) => (
          <div className="w-[350px] bg-[#F9F9F9] flex flex-col items-center py-4 border-2  shadow-md rounded-md">
            <h5>{item.title}</h5>
            <small className="text-gray-500 p-2">{item.dec}</small>
            <div>
              <button className="bg-green-700 rounded-full px-3 py-1 text-white shadow-xl">
                Add item
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Gift;
