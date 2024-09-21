import { VStack, Heading } from "@chakra-ui/react";

import EnrollmentForm from "./EnrollmentForm";

const EnrollmentPage = () => {
  return (
    <VStack spacing="40px" p="40px" align="center">
      <Heading size="lg">Lead Enrollment</Heading>
      <EnrollmentForm />
    </VStack>
  );
};

export default EnrollmentPage;
