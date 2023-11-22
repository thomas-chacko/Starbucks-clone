import coffee from "../assets/coffee_culture_blog_web1_c6e691b286.jpg";

const LearnMore = () => {
  return (
    <div className="w-full bg-[#edebe9] my-5 py-4 lg:p-5">
      <div className="flex flex-wrap justify-between lg:px-5 items-center">
        <h4 className="p-2 font-bold">Learn more about the world of coffee!</h4>
        <h5 className="text-[#00754A]">Discover More</h5>
      </div>
      <div className="px-2 lg:px-10">
        <img
          src={coffee}
          alt=""
          className="w-full h-[200px] lg:h-[372px] mt-3 object-fill"
        />
      </div>
    </div>
  );
};
export default LearnMore;
