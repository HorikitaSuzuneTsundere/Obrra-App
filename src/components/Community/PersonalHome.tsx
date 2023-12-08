import React from "react";
import { Button, Flex, Icon, Stack, Text, Image } from "@chakra-ui/react";
import { FaYarn } from "react-icons/fa";

const PersonalHome: React.FC = () => {
	return (
		<Flex
			direction="column"
			bg="white"
			borderRadius={4}
			cursor="pointer"
			border="1px solid"
			borderColor="gray.300"
			position="sticky"
		>
			<Flex
				align="flex-end"
				color="white"
				p="6px 10px"
				bg="purple.500"
				height="34px"
				borderRadius="4px 4px 0px 0px"
				fontWeight={600}
				bgImage="url(/images/obraPersonalHome.png)"
				backgroundSize="cover"
			></Flex>
			<Flex direction="column" p="12px">
				<Flex align="center" mb={2}>
					<Image src="/images/obrraFace.svg" height="45px" mr={2} />
					<Text fontWeight={600}>Home</Text>
				</Flex>
				<Stack spacing={3}>
					<Text fontSize="9pt">
						Your Obrra front page is ready to go!
					</Text>
					<Button height="30px">Create Post</Button>
					<Button variant="outline" height="30px">
						Create Community
					</Button>
				</Stack>
			</Flex>
		</Flex>
	);
};
export default PersonalHome;