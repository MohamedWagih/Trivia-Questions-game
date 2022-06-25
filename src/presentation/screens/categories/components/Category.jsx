import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { GridItem, Center } from '@chakra-ui/react';
import { useAppStore } from 'application/store';

function Category({ id, name }) {
  const selectedCategory = useAppStore((store) => store.selectedCategory);
  const setCategory = useAppStore((store) => store.setCategory);
  const isSelected = useMemo(() => selectedCategory === id, [selectedCategory]);

  return (
    <GridItem
      cursor="pointer"
      onClick={() => setCategory(id)}
      width="100%"
      height="150px"
      bg={isSelected ? 'gray.500' : 'gray.300'}>
      <Center h="100%">{name}</Center>
    </GridItem>
  );
}

Category.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
};

export default Category;
