import { useState, useEffect } from "react";

import { Table, Thead, Tbody, Tr, Th, Td, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { HOME } from "../constants/paths";
import RedirectionButton from "./RedirectionButton";

const LeadEnrollmentPage = () => {
  const [enrollments, setEnrollments] = useState([{}]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchEnrollmentRecords = async () => {
      try {
        const response = await fetch(
          `http://${process.env.REACT_APP_URL_BASE}/records`
        );

        if (!response.ok) {
          throw new Error(`Failed during fetch: ${response.error}`);
        }

        const data = await response.json();

        setEnrollments(data);
      } catch (error) {
        throw new Error(`There was an error: ${error}`);
      }
    };

    fetchEnrollmentRecords();
  }, []);

  const handleRowClick = (id) => {
    navigate(`/enrollments/${id}`);
  };

  return (
    <VStack w="100%" p="50px" spacing="30px">
      <Table colorScheme="gray">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Full Name</Th>
            <Th>DNI</Th>
            <Th>Career</Th>
            <Th>Subject</Th>
          </Tr>
        </Thead>
        <Tbody>
          {enrollments.map((enrollments) => (
            <Tr
              key={enrollments.id}
              onClick={() => handleRowClick(enrollments.id)}
              _hover={{ bg: "gray.100", cursor: "pointer" }}
            >
              <Td>{enrollments.id}</Td>
              <Td>{enrollments.name}</Td>
              <Td>{enrollments.dni}</Td>
              <Td>{enrollments.career}</Td>
              <Td>{enrollments.subject}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <RedirectionButton text="Go Home" path={HOME} />
    </VStack>
  );
};

export default LeadEnrollmentPage;
