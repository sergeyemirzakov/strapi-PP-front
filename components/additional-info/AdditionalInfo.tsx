import { Box, Text, UnorderedList, ListItem } from '@chakra-ui/react';

const AdditionalInfo = () => {
  return (
    <>
      <Box marginTop="20px">
        <Text>And additional info:</Text>
        <UnorderedList>
          <ListItem>Location: Samarkand, Uzbekistan </ListItem>
          <ListItem>
            Language: Russian (Native), English (B1, I improve this skill every day)
          </ListItem>
        </UnorderedList>
      </Box>
    </>
  );
};

export default AdditionalInfo;
