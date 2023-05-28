import { SimpleGrid, Box } from "@chakra-ui/react";

let items = new Array(12).fill(0).map((el, i) => i + 1);

function SimpleGridExample() {
    return <>
        <SimpleGrid columns={{base : 1, sm : 1, md : 2, lg : 3, xl : 4, '2xl' : 5}} spacing={10}>
            {items.map(el =>
                <Box bg='tomato' height='80px'>{el}</Box>
            )}
        </SimpleGrid>
    </>
}

export default SimpleGridExample;