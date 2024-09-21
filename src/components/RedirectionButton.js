import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const RedirectionButton = ({ text, path, colorScheme }) => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(path);
  };

  return (
    <Button onClick={handleRedirect} colorScheme={colorScheme || "blue"}>
      {text}
    </Button>
  );
};

export default RedirectionButton;
