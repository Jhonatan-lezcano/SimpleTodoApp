import {auth, db} from '../../../../config/firebase';
import {SignUpForm} from '../../../screens/SignUp';
import {methodsFirebase} from '../../../../config/firebase';
import {UserModel, paramsUser} from '../../models/UserModel';

const {createUserWithEmailAndPassword} = methodsFirebase;

export const registerUser = async (data: SignUpForm) => {
  const {email, password} = data;

  const dataForSave = UserModel({email, password});

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      dataForSave.email,
      dataForSave.password,
    );
    console.log(userCredential.user);
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
    console.log(error);
  }

  // .then(userCredential => {
  //   const user = userCredential.user;
  //   console.log(user);
  //   setDoc(doc(db, 'users', user.uid), {username: userName});
  // })
  // .catch(error => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   console.log(errorCode, errorMessage);
  // });
};
