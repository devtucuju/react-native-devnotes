import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #616161;
  justify-content: center;
  align-items: center;
`;

export const AddButton = styled.TouchableHighlight`
  margin-right: 15px;
`;
export const AddButtonImage = styled.Image`
  width: 24px;
  height: 24px;
`;
export const NotesList = styled.FlatList`
  flex: 1;
  width: 100%;
`;
export const NoNotes = styled.View`
  justify-content: center;
  align-items: center;
`;
export const NoNotesImage = styled.Image`
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
`;
export const NoNotesText = styled.Text`
  color: #ffffff;
  font-size: 16px;
  line-height: 28px;
  font-weight: 500;
`;
