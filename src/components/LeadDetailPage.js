import { useState, useEffect } from "react";

import { InfoIcon } from "@chakra-ui/icons";
import { Flex, Heading, List, ListItem, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

import RedirectionButton from "./RedirectionButton";
import { LEAD_ENROLLMENT } from "../constants/paths";

const enrollmentDetailPage = () => {
  const [enrollment, setEnrollment] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchEnrollmentRecord = async () => {
      try {
        const response = await fetch(
          `http://${process.env.REACT_APP_URL_BASE}/records/${id}`
        );

        if (!response.ok) {
          throw new Error(`Failed during fetch: ${response.error}`);
        }

        const data = await response.json();

        setEnrollment([data]);
      } catch (error) {
        throw new Error(`There was an error: ${error}`);
      }
    };

    fetchEnrollmentRecord();
  }, [id]);

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
          Lead Enrollment to Subject Details
        </Heading>
      </Flex>

      <List spacing="20px">
        {enrollment.map((enrollmentItem) => (
          <>
            <ListItem display="flex" alignItems="center">
              <Text>
                <strong>ID:</strong> {enrollmentItem.id}
              </Text>
            </ListItem>
            <ListItem display="flex" alignItems="center">
              <Text>
                <strong>Full Name:</strong> {enrollmentItem.name}
              </Text>
            </ListItem>
            <ListItem display="flex" alignItems="center">
              <Text>
                <strong>Email:</strong> {enrollmentItem.email}
              </Text>
            </ListItem>
            <ListItem display="flex" alignItems="center">
              <Text>
                <strong>Phone:</strong> {enrollmentItem.phone}
              </Text>
            </ListItem>
            <ListItem display="flex" alignItems="center">
              <Text>
                <strong>Address:</strong> {enrollmentItem.address}
              </Text>
            </ListItem>
            <ListItem display="flex" alignItems="center">
              <Text>
                <strong>Subject:</strong> {enrollmentItem.subject}
              </Text>
            </ListItem>
            <ListItem display="flex" alignItems="center">
              <Text>
                <strong>Course Duration: </strong>{" "}
                {enrollmentItem.class_duration} hours
              </Text>
            </ListItem>
            <ListItem display="flex" alignItems="center">
              <Text>
                <strong>Times Enrolled:</strong> {enrollmentItem.enroll_times}{" "}
                times
              </Text>
            </ListItem>
            <ListItem display="flex" alignItems="center">
              <Text>
                <strong>Career:</strong>{" "}
                {enrollmentItem.career.replace(/_/g, " ")}
              </Text>
            </ListItem>
            <ListItem display="flex" alignItems="center">
              <Text>
                <strong>Enrollment Year:</strong> {enrollmentItem.year_enroll}
              </Text>
            </ListItem>
          </>
        ))}
      </List>
      <RedirectionButton text="Go to Enrollment List" path={LEAD_ENROLLMENT} />
    </Flex>
  );
};

export default enrollmentDetailPage;
