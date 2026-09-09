import { Suspense, type ComponentProps } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorTile } from "./error-tile";
import { LoadingTile } from "./loading-tile";

type AsyncBoundaryProps = {
  children: React.ReactNode;
  classNames?: {
    base?: ComponentProps<"div">["className"];
    icon?: ComponentProps<"div">["className"];
    skeleton?: ComponentProps<"div">["className"];
  };
};

export const AsyncBoundary = ({ classNames, children }: AsyncBoundaryProps) => {
  return (
    <ErrorBoundary fallback={<ErrorTile classNames={classNames} />}>
      <Suspense fallback={<LoadingTile classNames={classNames} />}>
        {children}
      </Suspense>
    </ErrorBoundary>
  );
};
