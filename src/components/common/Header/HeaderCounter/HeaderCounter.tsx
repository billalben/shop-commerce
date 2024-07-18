import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./styles.module.css";
import { Stack } from "react-bootstrap";

type HeaderCounterProps = {
  totalQuantity: number;
  svgIcon: React.ReactNode;
  title: string;
  to: string;
};

const { totalNum, pumpAnimate } = styles;

const HeaderCounter = ({
  totalQuantity,
  svgIcon,
  title,
  to,
}: HeaderCounterProps) => {
  const navigate = useNavigate();
  const [isAnimate, setIsAnimate] = useState(false);
  const quantityStyle = `${totalNum} ${isAnimate ? pumpAnimate : ""}`;

  useEffect(() => {
    if (!totalQuantity) return;

    setIsAnimate(true);

    const debounce = setTimeout(() => {
      setIsAnimate(false);
    }, 300);

    return () => clearTimeout(debounce);
  }, [totalQuantity]);

  return (
    <Stack direction="horizontal" role="button" gap={1} className={`border-end pe-2`} onClick={() => navigate(to)}>
      <div className='position-relative'>
        {svgIcon}
        {totalQuantity > 0 && (
          <div className={quantityStyle}>{totalQuantity}</div>
        )}
      </div>
      <h3 className="fs-6 fw-light mb-0">{title}</h3>
    </Stack>
  );
};

export default HeaderCounter;
