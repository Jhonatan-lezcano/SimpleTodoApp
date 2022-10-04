import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import InputBorder from '../components/atoms/InputBorder/InputBorder';
import Title from '../components/atoms/Title/Title';
import {size} from '../theme/fonts';
import Spacer from '../components/atoms/Spacer/Spacer';
import {Picker} from '@react-native-picker/picker';
import {dataPalettes} from '../utils/colorPalettes';
import useColorPalettes from '../hooks/useColorPalettes';
import ButtonAdjustableRadius from '../components/atoms/ButtonAdjustableRadius/ButtonAdjustableRadius';
import {createList} from '../firebase/services/app/todosServices';
import {useAppSelector} from '../store/hooks/hooks';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackAppParams} from '../navigation/StackAppNavigation';
import useTheme from '../hooks/useTheme';

interface Props
  extends NativeStackScreenProps<RootStackAppParams, 'addListScreen'> {}

const AddList = ({navigation: {navigate}}: Props) => {
  const [name, setName] = useState('');
  const {selected, changeSelected, palette, changeColor, color} =
    useColorPalettes();
  const {id} = useAppSelector(state => state.user);
  const {globalContainer, colors} = useTheme();

  const onSubmit = () => {
    if (name === '') return console.log('este campo no puede estar vacio');

    createList({idUser: id, name, color});
    navigate('homeScreen');
  };

  return (
    <View style={globalContainer.container}>
      <View style={{alignSelf: 'stretch', paddingHorizontal: 42}}>
        <Title
          title="Create Todo List"
          fontSize={size.font28}
          textAlign="center"
        />
        <Spacer vertical={20} />
        <InputBorder placeHolder="List name?" value={name} onChange={setName} />
        <Spacer vertical={20} />
        <Picker
          selectedValue={selected}
          style={{color: colors.primary}}
          onValueChange={itemValue => changeSelected(itemValue)}>
          {dataPalettes.map(color => (
            <Picker.Item
              key={color.id}
              label={color.namePalette}
              value={color.id}
            />
          ))}
        </Picker>
        <Spacer vertical={20} />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          {palette.colors.map(color => (
            <TouchableOpacity
              key={color}
              style={[styles.colorSelected, {backgroundColor: color}]}
              onPress={() => changeColor(color)}></TouchableOpacity>
          ))}
        </View>
        <Spacer vertical={20} />
        <ButtonAdjustableRadius
          title="Create!"
          radius="semicircular"
          backgroundColor={color}
          titleColor={colors.background}
          onPress={() => onSubmit()}
          shadow
        />
      </View>
    </View>
  );
};

export default AddList;

const styles = StyleSheet.create({
  colorSelected: {
    width: 30,
    height: 30,
    borderRadius: 4,
  },
});
