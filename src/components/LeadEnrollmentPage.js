import { useState, useEffect } from "react";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  VStack,
  Input,
  HStack,
  FormControl,
  FormLabel,
  Text,
} from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";

import { HOME } from "../constants/paths";
import RedirectionButton from "./RedirectionButton";

const LeadEnrollmentPage = () => {
  const [enrollments, setEnrollments] = useState([]);
  const [start, setStart] = useState(0);
  const [limit, setLimit] = useState(10);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const startParam = params.get("start");
    const limitParam = params.get("limit");

    setStart(startParam || "");
    setLimit(limitParam || "");
  }, [location.search]);

  useEffect(() => {
    const fetchEnrollmentRecords = async () => {
      try {
        const response = await fetch(
          `http://${process.env.REACT_APP_URL_BASE}/records?start=${start}&limit=${limit}`
        );

        if (!response.ok) {
          throw new Error(`Failed during fetch: ${response.error}`);
        }

        const data = await response.json();
        setEnrollments(data);
      } catch (error) {
        console.error(`There was an error: ${error}`);
      }
    };

    fetchEnrollmentRecords();
  }, [start, limit]);

  const handleRowClick = (id) => {
    navigate(`/enrollments/${id}`);
  };

  const updateURLWithParams = (startValue, limitValue) => {
    const params = new URLSearchParams();

    if (startValue) {
      params.set("start", startValue);
    }
    if (limitValue) {
      params.set("limit", limitValue);
    }

    navigate(`?${params.toString()}`);
  };

  const handleStartChange = (e) => {
    const value = e.target.value;

    setStart(value);
    updateURLWithParams(value, limit);
  };

  const handleLimitChange = (e) => {
    const value = e.target.value;

    setLimit(value);
    updateURLWithParams(start, value);
  };

  return (
    <VStack w="100%" p="50px" spacing="30px">
      <VStack alignSelf="start" spacing="20px">
        <Text alignSelf="start" fontSize="lg" fontWeight="bold">
          Set Search Params
        </Text>
        <HStack spacing="20px">
          <FormControl>
            <FormLabel htmlFor="start">Start</FormLabel>
            <Input
              id="start"
              type="number"
              value={start}
              onChange={handleStartChange}
              placeholder="Start"
              width="100px"
              borderWidth="1.5px"
              borderColor="blue.500"
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="limit">Limit</FormLabel>
            <Input
              id="limit"
              type="number"
              value={limit}
              onChange={handleLimitChange}
              placeholder="Limit"
              width="100px"
              borderWidth="1.5px"
              borderColor="blue.500"
            />
          </FormControl>
        </HStack>
      </VStack>

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
          {enrollments.map((enrollment) => (
            <Tr
              key={enrollment.id}
              onClick={() => handleRowClick(enrollment.id)}
              _hover={{ bg: "gray.100", cursor: "pointer" }}
            >
              <Td>{enrollment.id}</Td>
              <Td>{enrollment.name}</Td>
              <Td>{enrollment.dni}</Td>
              <Td>{enrollment.career}</Td>
              <Td>{enrollment.subject}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <RedirectionButton text="Go Home" path={HOME} />
    </VStack>
  );
};

export default LeadEnrollmentPage;
