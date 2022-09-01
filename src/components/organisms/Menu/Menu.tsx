import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import ButtonMenu from '../../atoms/ButtonMenu/ButtonMenu';
import MenuOptions from '../../molecules/MenuOptions/MenuOptions';
import {Options} from '../../../utils/MenuOptions';

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <View style={styles.menu}>
      <ButtonMenu onPress={() => setShowMenu(!showMenu)} />
      {showMenu && (
        <View style={styles.containerMenu}>
          <MenuOptions options={Options} />
        </View>
      )}
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  menu: {
    alignItems: 'flex-end',
    position: 'absolute',
    top: 20,
    right: 20,
  },
  containerMenu: {
    transform: [{translateY: -15}, {translateX: -15}],
    zIndex: -1,
  },
});
