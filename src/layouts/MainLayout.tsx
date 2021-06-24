import React, { useEffect } from "react";

// import * as Scroll from "react-scroll";
import {
  // Link,
  // Element,
  Events,
  animateScroll as scroll,
  scrollSpy
  // scroller
} from "react-scroll";

import { Header, Footer } from "../partials";

interface IProps {
  children: any;
}
const MainLayout = (props: IProps) => {
  const { children } = props;

  useEffect(() => {
    Events.scrollEvent.register("begin", function(to, element) {
      console.log("begin", arguments);
    });
    Events.scrollEvent.register("end", function(to, element) {
      console.log("end", arguments);
    });

    scrollSpy.update();

    // Clean up
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  // const scrollToBottom = () => {
  //   scroll.scrollToBottom();
  // };

  // const scrollTo = () => {
  //   scroll.scrollTo(100);
  // };

  // const scrollMore = () => {
  //   scroll.scrollMore(100);
  // };

  // const handleSetActive = (to: any) => {
  //   console.log(to);
  // };
  const Body = () => <div>{children}</div>;
  return (
    <>
      <Header />
      <a id="nav-top">{""}</a>
      <Body />
      <Footer onClick={scrollToTop} />
    </>
  );
};

export default MainLayout;
