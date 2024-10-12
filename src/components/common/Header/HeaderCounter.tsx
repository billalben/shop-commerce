import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type HeaderCounterProps = {
  totalQuantity: number;
  svgIcon: React.ReactNode;
  title: string;
  to: string;
};

const HeaderCounter = ({
  totalQuantity,
  svgIcon,
  title,
  to,
}: HeaderCounterProps) => {
  const navigate = useNavigate();
  const [isAnimate, setIsAnimate] = useState(false);

  useEffect(() => {
    if (!totalQuantity) return;

    setIsAnimate(true);

    const debounce = setTimeout(() => {
      setIsAnimate(false);
    }, 300);

    return () => clearTimeout(debounce);
  }, [totalQuantity]);

  return (
    <div
      className="flex items-center gap-1 pb-1 border-b cursor-pointer"
      onClick={() => navigate(to)}
    >
      <div className="relative">
        {svgIcon}
        {totalQuantity > 0 && (
          <div
            className={cn(
              "absolute right-[1px] top-[-10px] h-5 w-5 rounded-full border bg-blue-400 text-center text-xs",
              isAnimate && "animate-pump",
            )}
          >
            {totalQuantity}
          </div>
        )}
      </div>
      <h3 className="mb-0 text-base font-light select-none">{title}</h3>
    </div>
  );
};

export default HeaderCounter;
