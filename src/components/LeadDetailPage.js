import { InfoIcon } from "@chakra-ui/icons";
import { Flex, Heading, List, ListItem, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

import RedirectionButton from "./RedirectionButton";
import { LEADS } from "../constants/paths";

const LeadDetailPage = () => {
  const { id } = useParams();

  console.log("id:", id);

  const lead = {
    id: "2",
    fullName: "Juan Pérez",
    email: "juan@example.com",
    address: "123 Street, City",
    subject: "Mathematics",
    courseDuration: "6 months",
    career: "Engineering",
    enrollmentYear: 2023,
    numberOfTimesEnrolled: 1,
  };

  return (
    <Flex
      align="center"
      direction="column"
      textAlign="flex-start"
      w="100%"
      p="50px"
      gap="40px"
    >
      <Flex align="center">
        <InfoIcon boxSize="26px" color="blue.500" />
        <Heading fontSize="30px" ml="8px">
          Lead Details
        </Heading>
      </Flex>
      <List spacing="20px">
        <ListItem display="flex" alignItems="center">
          <Text>
            <strong>ID:</strong> {lead.id}
          </Text>
        </ListItem>
        <ListItem display="flex" alignItems="center">
          <Text>
            <strong>Full Name:</strong> {lead.fullName}
          </Text>
        </ListItem>
        <ListItem display="flex" alignItems="center">
          <Text>
            <strong>Email:</strong> {lead.email}
          </Text>
        </ListItem>
        <ListItem display="flex" alignItems="center">
          <Text>
            <strong>Address:</strong> {lead.address}
          </Text>
        </ListItem>
        <ListItem display="flex" alignItems="center">
          <Text>
            <strong>Subject:</strong> {lead.subject}
          </Text>
        </ListItem>
        <ListItem display="flex" alignItems="center">
          <Text>
            <strong>Course Duration:</strong> {lead.courseDuration}
          </Text>
        </ListItem>
        <ListItem display="flex" alignItems="center">
          <Text>
            <strong>Career:</strong> {lead.career}
          </Text>
        </ListItem>
        <ListItem display="flex" alignItems="center">
          <Text>
            <strong>Enrollment Year:</strong> {lead.enrollmentYear}
          </Text>
        </ListItem>
        <ListItem display="flex" alignItems="center">
          <Text>
            <strong>Times Enrolled:</strong> {lead.numberOfTimesEnrolled}
          </Text>
        </ListItem>
      </List>
      <RedirectionButton text="Go to Leads List" path={LEADS} />
    </Flex>
  );
};

export default LeadDetailPage;
