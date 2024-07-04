import Lottie from "lottie-react";
import notFound from "@assets/lottieFiles/notFound.json";
import empty from "@assets/lottieFiles/empty.json";
import loading from "@assets/lottieFiles/loading.json";
import error from "@assets/lottieFiles/error.json";
import success from "@assets/lottieFiles/success.json";

const lottieFilesMap = {
  notFound,
  empty,
  loading,
  error,
  success,
};

type LottieHandlerProps = {
  type: keyof typeof lottieFilesMap;
  message?: string;
  // className?: string;
};

const LottieHandler = ({ type, message }: LottieHandlerProps) => {
  const lottie = lottieFilesMap[type];

  return (
    <div className={`d-flex flex-column align-items-center w-100`}>
      <Lottie
        animationData={lottie}
        className="w-100"
        style={{ maxWidth: "412px" }}
      />
      {message && (
        <h3 className="fs-6 mt-5" style={{ letterSpacing: 4 }}>
          {message}
        </h3>
      )}
    </div>
  );
};

export default LottieHandler;
