import { FaComment, FaSteam } from "react-icons/fa";
import { useSelector } from "react-redux";
import Message from "../../reuseable/Message";
import { FaAngleLeft } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Deal() {
  const navigate = useNavigate();
  const {
    name,
    salePrice,
    retailPrice,
    steamRatingText,
    steamRatingPercent,
    metacriticScore,
    thumb,
  } = useSelector((state) => state.data.clickedDeal);

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div>
      {!name ? (
        <Message>
          We were not able to find that game. Please make sure to search and
          then click on the game you want to see to be able to see this page.
        </Message>
      ) : (
        <>
          <div className=" flex items-center flex-col justify-center relative">
            <img src={thumb} alt="" />
            <div
              onClick={handleBack}
              className="absolute top-2 left-5 w-12 h-12 bg-sky-950 flex justify-center items-center rounded-full border-2"
            >
              <FaAngleLeft />
            </div>
            <div className="absolute top-2 right-5 w-12 h-12 bg-sky-950 flex justify-center items-center rounded-full border-2">
              <FaRegStar />
            </div>
          </div>
          <div className="p-4">
            <h2 className="text-4xl pb-2 border-b text-center">{name}</h2>
            <div className="py-4 border-b flex flex-col items-center">
              <div className="flex justify-center gap-4 ">
                <div>
                  <h3 className="text-6xl text-sky-950 bg-sky-50 rounded-full px-4 mb-2 font-bold">
                    {salePrice}
                  </h3>
                  <h4 className="text-center text-sky-50/25">{retailPrice}</h4>
                </div>
                <div className="flex flex-col justify-between">
                  <p className="flex gap-2 items-center">
                    <FaComment />{" "}
                    {!steamRatingPercent ? (
                      `"${steamRatingText}"`
                    ) : (
                      <span>No Rating</span>
                    )}
                  </p>
                  <div className="flex gap-2 items-center">
                    <FaSteam />
                    <p>
                      <span className="font-bold">{steamRatingPercent}</span>
                      /100
                    </p>
                  </div>
                  <p className="flex gap-2 items-center">
                    Metacritic: {metacriticScore}/100
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export const loader = () => {
  return null;
};

export default Deal;
