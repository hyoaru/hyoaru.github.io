import { Suspense, type ComponentProps } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorTile } from "./error-tile";
import { LoadingTile } from "./loading-tile";

type AsyncBoundaryProps = {
  children: React.ReactNode;
  classNames?: {
    errorBoundary?: ComponentProps<typeof ErrorTile>["classNames"];
    suspense?: ComponentProps<typeof LoadingTile>["classNames"];
  };
};

export const AsyncBoundary = ({ classNames, children }: AsyncBoundaryProps) => {
  return (
    <ErrorBoundary
      fallback={<ErrorTile classNames={classNames?.errorBoundary} />}
    >
      <Suspense fallback={<LoadingTile classNames={classNames?.suspense} />}>
        {children}
      </Suspense>
    </ErrorBoundary>
  );
};
