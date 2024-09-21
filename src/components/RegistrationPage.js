import { VStack, Heading } from "@chakra-ui/react";

import RegistrationForm from "./RegistrationForm";

const RegistrationPage = () => {
  return (
    <VStack spacing="40px" p="40px" align="center">
      <Heading size="lg">Lead Registration</Heading>
      <RegistrationForm />
    </VStack>
  );
};

export default RegistrationPage;
