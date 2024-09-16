import React, { FC } from "react";
import { Breadcrumbs, BreadcrumbsProps, Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface ICrumbs {
  label: string;
  path: string;
  id: number;
}

interface IProps extends BreadcrumbsProps {
  crumbs: ICrumbs[];
}

export const BreadCrumbs: FC<IProps> = ({ crumbs, ...props }) => {
  return (
    <Breadcrumbs {...props} aria-label='breadcrumb' separator={"/"}>
      {crumbs.map(crumb =>
        crumb.id < crumbs.length ? (
          <Link key={crumb.id} to={crumb.path}>
            {crumb.label}
          </Link>
        ) : (
          <Typography key={crumb.id} variant={"body1"}>
            {crumb.label}
          </Typography>
        ),
      )}
    </Breadcrumbs>
  );
};
