import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Center, Button } from '@chakra-ui/react';
import { useAppStore } from 'application/store';

function Category({ id, name }) {
  const selectedCategory = useAppStore((store) => store.selectedCategory);
  const setCategory = useAppStore((store) => store.setCategory);
  const playedCategories = useAppStore((store) => store.playedCategories);
  const isSelected = useMemo(() => selectedCategory === id, [selectedCategory]);

  return (
    <Button
      onClick={() => setCategory(id)}
      width="100%"
      height="150px"
      whiteSpace="break-spaces"
      disabled={id !== -1 && playedCategories.includes(id)}
      _hover={{ background: 'gray.300' }}
      bg={isSelected ? 'gray.300' : 'gray.100'}>
      <Center h="100%">{name}</Center>
    </Button>
  );
}

Category.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
};

export default Category;
