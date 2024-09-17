import { Box, SimpleGrid } from "@chakra-ui/react";
import ComplexTable from "views/admin/allevents/components/ComplexTable";

import tableDataComplex from "views/admin/allevents/variables/tableDataComplex.json";
import React from "react";

export default function Settings() {
  // Chakra Color Mode
  return (
    <Box pt={{ base: "100%", md: "80px", xl: "80px" }}>
      <SimpleGrid
        mb='20px'
        columns={{ sm: 1, md: 1 }}
        spacing={{ base: "20px", xl: "20px" }}>
       
        <ComplexTable
          tableData={tableDataComplex}
        />
      </SimpleGrid>
    </Box>
  );
}
