import { useEffect, useState } from "react";
import { Repo } from "../types";
import Repos from "../components/Box";
import { Pagination } from "../components/Pagination";
import { Box, Text } from "@chakra-ui/react";

function Home() {
  const [repo, setRepo] = useState<Repo[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [currentPage, setCurrentPage] = useState(1);
  const reposPerPage = 10;

  useEffect(() => {
    setIsLoading(true);

    const delay = 3000;

    const fetchDataWithDelay = () => {
      fetch("https://api.github.com/repositories")
        .then((response) => response.json())
        .then((data: Repo[]) => {
          setRepo(data);
          console.log(data.length); // delete later
          setIsLoading(false);
        });
    };

    const timerId = setTimeout(fetchDataWithDelay, delay);

    return () => clearTimeout(timerId);
  }, []);

  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepo = repo.slice(indexOfFirstRepo, indexOfLastRepo);

  return (
    <Box my="20px">
      <Text textAlign="center" fontSize="70px" fontWeight="bold" m="25">
        Repo Pagination
      </Text>
      <Box>
        <Repos repos={currentRepo} loading={isLoading} />
        <Pagination
          reposPerPage={reposPerPage}
          totalRepos={repo.length}
          currentPage={currentPage}
          setCurrentPages={setCurrentPage}
        />
      </Box>
    </Box>
  );
}
export default Home;
