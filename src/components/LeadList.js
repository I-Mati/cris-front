import { Table, Thead, Tbody, Tr, Th, Td, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { HOME } from "../constants/paths";
import RedirectionButton from "./RedirectionButton";

const LeadList = () => {
  const navigate = useNavigate();

  const leads = [
    {
      id: 1,
      fullName: "Juan Pérez",
      email: "juan@example.com",
      address: "123 Street, City",
      subject: "Mathematics",
      courseDuration: "6 months",
      career: "Engineering",
      enrollmentYear: 2023,
      numberOfTimesEnrolled: 1,
    },
    {
      id: 2,
      fullName: "María López",
      email: "maria@example.com",
      address: "456 Avenue, City",
      subject: "Physics",
      courseDuration: "1 year",
      career: "Physical Sciences",
      enrollmentYear: 2022,
      numberOfTimesEnrolled: 2,
    },
    {
      id: 3,
      fullName: "Carlos García",
      email: "carlos@example.com",
      address: "789 Street, City",
      subject: "Chemistry",
      courseDuration: "3 months",
      career: "Biochemistry",
      enrollmentYear: 2023,
      numberOfTimesEnrolled: 1,
    },
  ];

  const handleRowClick = (id) => {
    navigate(`/lead/${id}`);
  };

  return (
    <VStack w="100%" p="50px" spacing="30px">
      <Table colorScheme="gray">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Full Name</Th>
            <Th>Email</Th>
            <Th>Address</Th>
            <Th>Subject</Th>
            <Th>Course Duration</Th>
            <Th>Career</Th>
            <Th>Enrollment Year</Th>
            <Th>Times Enrolled</Th>
          </Tr>
        </Thead>
        <Tbody>
          {leads.map((lead) => (
            <Tr
              key={lead.id}
              onClick={() => handleRowClick(lead.id)}
              _hover={{ bg: "gray.100", cursor: "pointer" }}
            >
              <Td>{lead.id}</Td>
              <Td>{lead.fullName}</Td>
              <Td>{lead.email}</Td>
              <Td>{lead.address}</Td>
              <Td>{lead.subject}</Td>
              <Td>{lead.courseDuration}</Td>
              <Td>{lead.career}</Td>
              <Td>{lead.enrollmentYear}</Td>
              <Td>{lead.numberOfTimesEnrolled}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <RedirectionButton text="Go Home" path={HOME} />
    </VStack>
  );
};

export default LeadList;
