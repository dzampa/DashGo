import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex
            align="center"
        >
            {showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Diego Zamparo</Text>
                    <Text color="gray.300" fontSize="small">
                        dzampar@gmail.com
                    </Text>
                </Box>
            )}
            <Avatar size="md" name="Diego Zamparo" src="https://avatars.githubusercontent.com/u/51325668?s=40&v=4" />
        </Flex>
    );
}