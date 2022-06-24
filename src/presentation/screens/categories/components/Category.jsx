import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { GridItem, Center } from '@chakra-ui/react';
import { useAppStore } from 'application/store';

function Category({ value }) {
  const selectedCategory = useAppStore((store) => store.selectedCategory);
  const setCategory = useAppStore((store) => store.setCategory);
  const isSelected = useMemo(() => selectedCategory === value, [selectedCategory]);

  return (
    <GridItem
      cursor="pointer"
      onClick={() => setCategory(value)}
      width="100%"
      height="150px"
      bg={isSelected ? 'gray.500' : 'gray.300'}>
      <Center h="100%">{value}</Center>
    </GridItem>
  );
}

Category.propTypes = {
  value: PropTypes.string,
};

export default Category;
