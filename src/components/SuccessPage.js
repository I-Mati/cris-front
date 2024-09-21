import { Heading, Text, VStack } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

import RedirectionButton from "./RedirectionButton";
import { HOME } from "../constants/paths";

const SuccessPage = () => {
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const registrationId = queryParams.get("id");

  return (
    <VStack textAlign="center" mt="100" spacing="30px">
      <Heading size="xl" mb="6">
        Success!
      </Heading>
      <VStack spacing="20px">
        <Text fontSize="lg" mb="4">
          Registration ID: {registrationId}
        </Text>
        <RedirectionButton text="Go Home" path={HOME} />
      </VStack>
    </VStack>
  );
};

export default SuccessPage;
