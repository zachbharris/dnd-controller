import React from "react";
import styled from "styled-components";
import { animated, useSpring, config } from "react-spring";

import pattern from "../../dnd-pattern.svg";

const LandingPage = () => {
  const backgroundProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: config.slow
  });

  const logoProps = useSpring({
    from: {
      opacity: 0,
      transform: `translateX(-1000%) rotate(-720deg)`
    },
    to: {
      opacity: 1,
      transform: `translateX(0) rotate(0deg)`
    },
    delay: 250,
    config: {
      mass: 3,
      friction: 20,
      tension: 75
    }
  });

  return (
    <Wrapper style={backgroundProps}>
      <Logo style={logoProps} className="fal fa-dice-d20" />
    </Wrapper>
  );
};

export default LandingPage;

const Wrapper = styled(animated.div)`
  display: flex;
  align-items: center;
  justify-content: center;

  background-image: url(${pattern});
  min-height: 100vh;
`;

const Logo = styled(animated.i)`
  font-size: 90px;
`;
