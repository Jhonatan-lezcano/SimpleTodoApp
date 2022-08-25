import {auth, methodsFirebase} from '../../../../config/firebase';

const {signInWithEmailAndPassword} = methodsFirebase;

export const signIn = async (data: any, handler: Function) => {
  const {email, password} = data;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    handler();
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
    console.log(error);
  }
};
