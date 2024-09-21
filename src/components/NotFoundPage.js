import { Heading, VStack } from "@chakra-ui/react";

import { HOME } from "../constants/paths";
import RedirectionButton from "./RedirectionButton";

const NotFoundPage = () => {
  return (
    <VStack
      textAlign="center"
      justify="center"
      align="center"
      spacing="30px"
      h="100vh"
    >
      <Heading size="lg" mb="6">
        Page not found
      </Heading>
      <RedirectionButton text="Go Home" path={HOME} />
    </VStack>
  );
};

export default NotFoundPage;
