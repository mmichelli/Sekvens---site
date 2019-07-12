import React from "react";

import { Grid, Column } from "../components/Grid.js";
import Blocks from "../components/Blocks.js";
import Footer from "../components/Footer.js";
import Menu from "../components/Menu.js";
import { Box } from "rebass";

export const PageTemplate = ({
  title,
  introduction,
  menuColor,
  blocks = [],
  pages = []
}) => (
  <>
    <Box fontSize={3} pt={5} pb={4} bg={menuColor ? menuColor : "p4"}>
      <Grid>
        <Column columns={[4, 4, 12]}>
          <Menu pages={pages} />
        </Column>
      </Grid>
    </Box>
    <Blocks blocks={blocks} />
    <Footer pages={pages} />
  </>
);

export default PageTemplate;
