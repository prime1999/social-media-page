import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "../Components/NavBar";
import SideBar from "../Components/SideBar";
import RightSideBar from "../Components/RightSideBar";
import Main from "../Components/Main";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div className="mx-auto w-[97%]">
      <Grid templateColumns="repeat(6, 1fr)" gap={3}>
        <GridItem colSpan={6} as="div" className="p-2">
          <NavBar />
        </GridItem>
        <div className="hidden lg:block">
          <GridItem
            colSpan={{ lg: 1 }}
            as="div"
            className="hidden w-[300px] lg:block"
          >
            <SideBar />
          </GridItem>
        </div>
        <GridItem colSpan={{ base: 6, md: 6, lg: 4 }} as="div">
          <Main />
        </GridItem>
        <GridItem
          colSpan={1}
          as="div"
          minWidth="300px"
          className="hidden lg:block"
        >
          <RightSideBar />
        </GridItem>
        <GridItem colSpan={6} as="div" className="h-[50px]">
          <Footer />
        </GridItem>
      </Grid>
    </div>
  );
};

export default Home;
