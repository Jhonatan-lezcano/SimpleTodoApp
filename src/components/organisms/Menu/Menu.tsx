import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import ButtonMenu from '../../atoms/ButtonMenu/ButtonMenu';
import MenuOptions from '../../molecules/MenuOptions/MenuOptions';

interface Props {
  children: React.ReactNode;
}

const Menu = ({children}: Props) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <View style={styles.menu}>
      <ButtonMenu onPress={() => setShowMenu(!showMenu)} />
      {showMenu && (
        <MenuOptions closeModal={() => setShowMenu(!showMenu)}>
          {children}
        </MenuOptions>
      )}
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  menu: {
    alignItems: 'flex-end',
    position: 'absolute',
    top: 60,
    right: 20,
  },
});
