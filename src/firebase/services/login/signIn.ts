import {auth, methodsFirebase} from '../../../../config/firebase';

const {signInWithEmailAndPassword} = methodsFirebase;

export const signIn = async (
  data: any,
  handler: Function,
  errorMessage: Function,
) => {
  const {email, password} = data;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    handler();
  } catch (error: any) {
    errorMessage('Wrong email or password');
    console.log(error.message, 'errorrrr');
  }
};
