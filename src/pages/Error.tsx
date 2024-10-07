import { LottieHandler } from "@/components/feedback";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="container">
      <div className="mt[15%] flex h-screen gap-3 flex-col items-center justify-center">
        <LottieHandler type="notFound" />
        How about going back to safety?
        <Button variant="outline" asChild>
          <Link to="/" replace={true}>
            Go Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Error;
