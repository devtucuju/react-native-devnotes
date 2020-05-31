import React from 'react';

import {Box, Title} from './styles';

const NoteItem = ({data, index, onPress}) => {
  return (
    <Box onPress={() => onPress(index)}>
      <Title>{data.title}</Title>
    </Box>
  );
};

export default NoteItem;
