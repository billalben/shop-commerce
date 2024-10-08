import Lottie from "lottie-react";
import heroSection from "@/assets/lottieFiles/heroSection.json";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="grid items-center justify-center md:grid-cols-2">
        <div>
          <span className="text-sm font-bold text-gray-400 uppercase">
            #1 E-commerce Platform{" "}
            <Badge variant="default" className="ml-2">
              2024
            </Badge>
          </span>
          <h1 className="mt-4 text-4xl text-blue-400 md:text-6xl">
            Explore, shop, repeat again.
          </h1>
          <p className="my-4 text-sm text-gray-500">
            Shop is a driving force behind the dreams of emerging entrepreneurs,
            a trusted partner for industry leaders.
          </p>
          <Button variant="default" asChild>
            <Link to="/categories">Explore</Link>
          </Button>
        </div>

        <div>
          <Lottie animationData={heroSection} />
        </div>
      </div>
    </>
  );
}

export default Home;
