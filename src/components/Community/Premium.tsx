import React from "react";
import { Flex, Icon, Text, Stack, Button } from "@chakra-ui/react";
import { GiCardAceSpades } from "react-icons/gi";

const Premium: React.FC = () => {
	return (
		<Flex
			direction="column"
			bg="white"
			borderRadius={4}
			cursor="pointer"
			p="12px"
			border="1px solid"
			borderColor="gray.300"
		>
			<Flex mb={2}>
				<Icon as={GiCardAceSpades} fontSize={26} color="pink.400" mt={2} />
				<Stack spacing={1} fontSize="9pt" pl={2}>
					<Text fontWeight={600}>Obrra Galleria</Text>
					<Text>Inspire others, be the ace they aspire to be.</Text>
				</Stack>
			</Flex>
			<Button height="30px" bg="pink.400">
				Start Now
			</Button>
		</Flex>
	);
};
export default Premium;