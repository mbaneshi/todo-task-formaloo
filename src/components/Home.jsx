// Home.js file
import { useEffect, useState } from "react";
import supabaseClient from "../supabaseClient";
import { Box, Grid, GridItem } from "@chakra-ui/react";

const Home = () => {
  const [group, setGroup] = useState(null);

  useEffect(() => {
    supabaseClient
      .from("group")
      .select("*")
      .then(({ data, error }) => {
        if (!error) {
          // setGroup(data)
          console.log(data);
          setGroup(data);
        }
      });
  }, []);

  return (
    <>
      <Grid templateColumns={"repeat(12,1fr)"}
      >
        <GridItem bg={"blue"} H={"100vh"} colSpan={{ base: 12, sm:4,md:3,xl:2 }}>
          {group?.map((e) => {
            return <h1 key={e.id}>{e.title}</h1>;
          })}
        </GridItem>
        <GridItem bg={"brown"} colSpan={{ base: 12,sm:8, md: 9,xl:10 }}>
          <Box h={200} w={200}>
            box{" "}
          </Box>
        </GridItem>
      </Grid>
    </>
  );
};
export default Home;
