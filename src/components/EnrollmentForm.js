import { useState } from "react";

import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";

import { HOME } from "../constants/paths";
import RedirectionButton from "./RedirectionButton";

const EnrollmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    dni: "",
    email: "",
    phone: "",
    address: "",
    subject: "",
    enrollTimes: "",
    career: "",
    yearEnroll: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    dni: "",
    email: "",
    phone: "",
    address: "",
    subject: "",
    enrollTimes: "",
    career: "",
    yearEnroll: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "Required";
    }

    if (!formData.email) {
      newErrors.email = "Required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.phone) {
      newErrors.phone = "Required";
    }

    if (!formData.dni) {
      newErrors.dni = "Required";
    }

    if (!formData.address) {
      newErrors.address = "Required";
    }

    if (!formData.subject) {
      newErrors.subject = "Required";
    }

    if (!formData.enrollTimes) {
      newErrors.enrollTimes = "Required";
    } else if (isNaN(parseInt(formData.enrollTimes))) {
      newErrors.enrollTimes = "Must be a number";
    }

    if (!formData.career) {
      newErrors.career = "Required";
    }

    if (!formData.yearEnroll) {
      newErrors.yearEnroll = "Required";
    } else if (isNaN(parseInt(formData.yearEnroll))) {
      newErrors.yearEnroll = "Must be a valid year";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const formattedData = {
      ...formData,
      enroll_times: parseInt(formData.enrollTimes),
      year_enroll: parseInt(formData.yearEnroll),
    };

    try {
      const response = await fetch(
        `http://${process.env.REACT_APP_URL_BASE}/records`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formattedData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(`Failed during fetch: ${response.error}`);
      }

      navigate(`/success?id=${data.id}`);
    } catch (error) {
      throw new Error(`Failed during fetch: ${error}`);
    }
  };

  return (
    <Box w="350px">
      <form onSubmit={handleSubmit}>
        <FormControl id="name" mb="16px" isInvalid={!!errors.name}>
          <FormLabel>Full Name</FormLabel>
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
          />
          {errors.name && <Text color="red.500">{errors.name}</Text>}
        </FormControl>

        <FormControl id="dni" mb="16px" isInvalid={!!errors.dni}>
          <FormLabel>DNI</FormLabel>
          <Input
            name="dni"
            value={formData.dni}
            onChange={handleChange}
            type="text"
          />
          {errors.dni && <Text color="red.500">{errors.dni}</Text>}
        </FormControl>

        <FormControl id="email" mb="16px" isInvalid={!!errors.email}>
          <FormLabel>Email</FormLabel>
          <Input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
          />
          {errors.email && <Text color="red.500">{errors.email}</Text>}
        </FormControl>

        <FormControl id="phone" mb="16px" isInvalid={!!errors.phone}>
          <FormLabel>Phone</FormLabel>
          <Input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            type="text"
          />
          {errors.phone && <Text color="red.500">{errors.phone}</Text>}
        </FormControl>

        <FormControl id="address" mb="16px" isInvalid={!!errors.address}>
          <FormLabel>Address</FormLabel>
          <Input
            name="address"
            value={formData.address}
            onChange={handleChange}
            type="text"
          />
          {errors.address && <Text color="red.500">{errors.address}</Text>}
        </FormControl>

        <FormControl id="subject" mb="16px" isInvalid={!!errors.subject}>
          <FormLabel>Subject</FormLabel>
          <Input
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            type="text"
          />
          {errors.subject && <Text color="red.500">{errors.subject}</Text>}
        </FormControl>

        <FormControl
          id="enrollTimes"
          mb="16px"
          isInvalid={!!errors.enrollTimes}
        >
          <FormLabel>Number of Times Enrolled</FormLabel>
          <Input
            name="enrollTimes"
            value={formData.enrollTimes}
            onChange={handleChange}
            type="number"
          />
          {errors.enrollTimes && (
            <Text color="red.500">{errors.enrollTimes}</Text>
          )}
        </FormControl>

        <FormControl id="career" mb="16px" isInvalid={!!errors.career}>
          <FormLabel>Career</FormLabel>
          <Input
            name="career"
            value={formData.career}
            onChange={handleChange}
            type="text"
          />
          {errors.career && <Text color="red.500">{errors.career}</Text>}
        </FormControl>

        <FormControl id="yearEnroll" mb="16px" isInvalid={!!errors.yearEnroll}>
          <FormLabel>Enrollment Year</FormLabel>
          <Input
            name="yearEnroll"
            value={formData.yearEnroll}
            onChange={handleChange}
            type="text"
          />
          {errors.yearEnroll && (
            <Text color="red.500">{errors.yearEnroll}</Text>
          )}
        </FormControl>

        <VStack justify="center" mt="30px" spacing="20px">
          {/* We don't use the RedirectionButton here as we have to consider handleSubmit when clicking on it */}
          <Button type="submit" colorScheme="green">
            Register
          </Button>
          <RedirectionButton text="Go Home" path={HOME} />
        </VStack>
      </form>
    </Box>
  );
};

export default EnrollmentForm;
