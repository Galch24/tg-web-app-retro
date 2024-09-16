import { FC } from "react";
import MuiSkeleton, { SkeletonProps } from "@mui/material/Skeleton";

interface IProps extends SkeletonProps {}

export const Skeleton: FC<IProps> = ({ ...props }) => {
  return <MuiSkeleton {...props} />;
};
