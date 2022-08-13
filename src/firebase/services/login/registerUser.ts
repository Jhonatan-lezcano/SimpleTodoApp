import {auth, database} from '../../../../config/firebase';
import {UserModel, paramsUser} from '../../models/UserModel';

export const registerUser = async (
  data: paramsUser,
  setInputsValues: Function,
) => {};

const validateDate = (data: paramsUser) => {
  let token = true;

  const regex = {
    nameFull: {
      regex: /^[a-zA-ZÀ-ÿ\s]{1,80}$/,
      message: 'El nombre debe contener solo letras',
    },
    email: {
      regex: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      message: 'El correo es invalido',
    },
    password: {
      regex:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?._&])[A-Za-z\d$@$!%*?._&]{8,15}/,
      message:
        'la contraseña debe ser de mínimo de 8 caracteres y un máximo de 15, debe contener como mínimo una mayúscula, minúscula, número y un carácter especial ($@$!%*?._&).',
    },
  };
};
