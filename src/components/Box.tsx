import {
  Card,
  CardBody,
  Container,
  Heading,
  Text,
  CardHeader,
  Avatar,
  Box,
  Grid,
} from "@chakra-ui/react";
import { Repo } from "../types";

interface props {
  repos: Repo[];
  loading: Boolean;
}

const Repos: React.FC<props> = ({ repos, loading }) => {
  if (loading) {
    return <h1> Loading... </h1>;
  }

  return (
    <Container>
      <Grid templateColumns="repeat(4, 1fr)">
        {repos.map((data) => {
          return (
            <Box mx="auto" key={data.id}>
              <Card
                backgroundColor="#f3f3e9"
                w="400px"
                h="400px"
                m="10px"
                borderRadius="16px"
              >
                <CardHeader>
                  <Box
                    style={{
                      background: "linear-gradient(to right, #e2e23a, #ecf2b3)",
                      borderTopLeftRadius: "16px",
                      borderTopRightRadius: "16px",
                      paddingBottom: "10px",
                    }}
                  >
                    <Avatar
                      w="100px"
                      h="100px"
                      borderRadius="50%"
                      mx="20px"
                      mt="10px"
                      name={data.name}
                      src={data.owner.avatar_url}
                    />

                    <Box>
                      <Heading size="sm" mx="20px">
                        {data.owner.login}({data.name})
                      </Heading>
                      <Text mx="20px">{data.full_name}</Text>
                    </Box>
                  </Box>
                </CardHeader>
                <CardBody>
                  <Text mx="20px">{data.description}</Text>
                </CardBody>
              </Card>
            </Box>
          );
        })}
      </Grid>
    </Container>
  );
};
export default Repos;
