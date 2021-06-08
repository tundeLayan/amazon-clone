import React from "react";

interface IProps {
  children: any;
}

const AuthLayout = (props: IProps) => {
  const { children } = props;
  const Body = () => <div>{children}</div>;
  return (
    <>
      <Body />
    </>
  );
};

export default AuthLayout;
