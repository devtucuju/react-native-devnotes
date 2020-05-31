import React, {useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import NoteItem from '../../components/NoteItem';

import {
  Container,
  AddButton,
  AddButtonImage,
  NotesList,
  NoNotesImage,
  NoNotes,
  NoNotesText,
} from './styles';

const List = () => {
  const navigation = useNavigation();
  const list = useSelector(state => state.notes.list);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Suas notas',
      headerRight: () => (
        <AddButton
          underlayColor="transparent"
          onPress={() => navigation.navigate('Edit')}>
          <AddButtonImage source={require('../../assets/more.png')} />
        </AddButton>
      ),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNote = index => {
    navigation.navigate('Edit', {key: index});
  };

  return (
    <Container>
      {list ? (
        <NotesList
          data={list}
          renderItem={({item, index}) => (
            <NoteItem data={item} index={index} onPress={handleNote} />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <NoNotes>
          <NoNotesImage source={require('../../assets/note.png')} />
          <NoNotesText>Nenhuma Anotação</NoNotesText>
        </NoNotes>
      )}
    </Container>
  );
};

export default List;
