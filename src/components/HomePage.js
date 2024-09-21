import { Flex, VStack, Heading } from "@chakra-ui/react";

import { ENROLL, LEAD_ENROLLMENT } from "../constants/paths";
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
          text="Go to Leads' Enrollment List"
          path={LEAD_ENROLLMENT}
        />
        <RedirectionButton
          colorScheme="teal"
          text="Go to Enrollment Form"
          path={ENROLL}
        />
      </VStack>
    </Flex>
  );
};

export default HomePage;
