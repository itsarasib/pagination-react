import { Box, Button } from "@chakra-ui/react";

interface props {
  reposPerPage: number;
  totalRepos: number;
  currentPage: number;
  setCurrentPages: (page: number) => void;
}

export const Pagination: React.FC<props> = ({
  reposPerPage,
  totalRepos,
  currentPage,
  setCurrentPages,
}) => {
  const pageNo = [];
  for (let i = 1; i <= Math.ceil(totalRepos / reposPerPage); i++) {
    pageNo.push(i);
  }

  const NextPageButton: React.FC = () => {
    if (currentPage === pageNo.length) {
      return (
        <Button
          size="md"
          height="50px"
          width="100px"
          borderRadius="20%"
          color="black"
          border="2px"
          cursor="pointer"
          _hover={{ backgroundColor: "#e2e23a" }}
          ml={10}
          fontWeight="bold"
          fontSize="20px"
          disabled
        >
          Next
        </Button>
      );
    } else {
      return (
        <Button
          size="md"
          height="50px"
          width="100px"
          borderRadius="20%"
          color="black"
          border="2px"
          cursor="pointer"
          _hover={{ backgroundColor: "#e2e23a" }}
          ml={10}
          fontWeight="bold"
          fontSize="20px"
          onClick={() => setCurrentPages(currentPage + 1)}
        >
          Next
        </Button>
      );
    }
  };

  const PrevPageButton: React.FC = () => {
    if (currentPage === 1) {
      return (
        <Button
          size="md"
          height="50px"
          width="100px"
          borderRadius="20%"
          color="black"
          border="2px"
          cursor="pointer"
          _hover={{ backgroundColor: "#e2e23a" }}
          ml={10}
          fontWeight="bold"
          fontSize="20px"
          disabled
        >
          Prev
        </Button>
      );
    } else {
      return (
        <Button
          size="md"
          height="50px"
          width="100px"
          borderRadius="20%"
          color="black"
          border="2px"
          fontWeight="bold"
          fontSize="20px"
          cursor="pointer"
          _hover={{ backgroundColor: "#e2e23a" }}
          ml={10}
          onClick={() => setCurrentPages(currentPage - 1)}
        >
          Prev
        </Button>
      );
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" mt={20}>
      <PrevPageButton />
      {pageNo.map((num) => (
        <Button
          size="md"
          height="50px"
          width="50px"
          borderRadius="50%"
          color="black"
          border="2px"
          fontWeight="bold"
          fontSize="20px"
          cursor="pointer"
          _hover={{ backgroundColor: "#e2e23a" }}
          ml={10}
          onClick={() => setCurrentPages(num)}
        >
          {num}
        </Button>
      ))}
      <NextPageButton />
    </Box>
  );
};
