import { Box, Flex, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';

const categories = [
  {
    title: 'Chocolate Cupcakes',
    description: 'Rich and creamy chocolate cupcakes for all the chocolate lovers.',
    img: '/images/chocolate-cupcakes.jpg'
  },
  {
    title: 'Vanilla Cupcakes',
    description: 'Classic vanilla cupcakes that are soft, spongy, and just sweet enough.',
    img: '/images/vanilla-cupcakes.jpg'
  },
  {
    title: 'Fruit-Flavored Cupcakes',
    description: 'Fresh and zesty fruit-flavored cupcakes perfect for summer days.',
    img: '/images/fruit-cupcakes.jpg'
  }
];

const Index = () => {
  return (
    <Box p={5}>
      <Heading mb={4} textAlign="center">Welcome to Cupcake Recipes</Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {categories.map((category, index) => (
          <Box key={index} boxShadow="md" p={5} rounded="md">
            <Image src={category.img} alt={category.title} borderRadius="md" />
            <Heading size="md" mt={4}>{category.title}</Heading>
            <Text mt={2}>{category.description}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Index;