import React from "react";
import { Flex, Button } from "@chakra-ui/react";
import Link from 'next/link'

const CommunityNotFound: React.FC = () => {
    return (
        <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
            minHeight="60vh"
        >
            We are unable to locate the community you are referring to.
            <Link href="/">
                <Button mt={4}>GO HOME</Button>
            </Link>
        </Flex>
    );
};
export default CommunityNotFound;