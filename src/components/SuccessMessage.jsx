import check from "../assets/images/icon-success-check.svg";

// eslint-disable-next-line react/prop-types
const SuccessMessage = ({ message }) => {
  if (!message) return null; // If there's no message, don't render anything

  return (
    <div className="bg-Grey-900-Darker rounded-md p-4 w-[29%] mx-auto">
      <div className="flex items-center gap-4">
        <img src={check} alt="" />
        <p className="text-white">Message sent</p>
      </div>
      <p className="text-white">{message}</p>
    </div>
  );
};

export default SuccessMessage;
