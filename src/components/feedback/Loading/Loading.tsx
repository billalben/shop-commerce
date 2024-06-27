import React from "react";
import { TLoading } from "@types";

type LoadingProps = {
  status: TLoading;
  error?: string | null;
  children: React.ReactNode;
};

const Loading = ({ status, error = null, children }: LoadingProps) => {
  if (status === "pending")
    return <div className="loading-message">Loading, please wait... ⭐️</div>;

  if (status === "failed" && error)
    return <div className="error-message">{error}</div>;

  if (status === "failed" && !error)
    return <div className="error-message">An unexpected error occurred.</div>;

  return <div>{children}</div>;
};

export default Loading;
