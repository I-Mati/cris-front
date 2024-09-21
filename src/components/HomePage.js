import { Flex, VStack, Heading } from "@chakra-ui/react";

import { REGISTRATION, LEADS } from "../constants/paths";
import RedirectionButton from "./RedirectionButton";

const HomePage = () => {
  return (
    <Flex height="100vh" justify="center">
      <VStack spacing="40px" mt="200px">
        <Heading size="lg" mb="50px">
          Lead tracking system
        </Heading>
        <RedirectionButton
          colorScheme="teal"
          text="Go to Lead List"
          path={LEADS}
        />
        <RedirectionButton
          colorScheme="teal"
          text="Go to Registration Form"
          path={REGISTRATION}
        />
      </VStack>
    </Flex>
  );
};

export default HomePage;
