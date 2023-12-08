import React, { useState } from 'react';
import { Button, Flex, Icon, Input, Text } from '@chakra-ui/react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { BsDot } from 'react-icons/bs';
import { GiCat } from "react-icons/gi";
import { authModalState } from '../../../atoms/authModalAtom';
import { auth } from '../../../firebase/clientApp';
import { useSetRecoilState } from 'recoil';

const ResetPassword: React.FC = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [sendPasswordResetEmail, sending, error] = 
    useSendPasswordResetEmail(auth);
  
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await sendPasswordResetEmail(email);
    setSuccess(true);
  };
  return (
    <Flex direction="column" alignItems="center" width="100%">
      <Icon as={GiCat} color="brand.100" fontSize={40} mb={2}/>
      {success ? (
        <Text mb={4}>Got any new emails?</Text>
      ) : (
        <>
          <Text fontSize={14} textAlign='left' mb={4}>
            Let us know the email associated with your Obrra account, and we'll deliver an email to you containing a link to initiate the password reset.
          </Text>
          <form onSubmit={onSubmit} style={{ width: '100%' }}>
            <Input
              required
              name='email'
              placeholder='Email'
              type='email'
              mb={2}
              onChange={(event) => setEmail(event.target.value)}
              fontSize='10pt'
              _placeholder={{ color: 'gray.500' }}
              _hover={{
                bg: 'white',
                border: '1px solid',
                borderColor: 'purple.500',
              }}
              _focus={{
                outline: 'none',
                bg: 'white',
                border: '1px solid',
                borderColor: 'purple.500',
              }}
              bg='gray.50'
            />
            <Text textAlign='center' fontSize='10pt' color='red'>
              {error?.message}
            </Text>
            <Button
              width='100%'
              height='36px'
              mb={2}
              mt={2}
              type='submit'
              isLoading={sending}
            >
              Reset password
            </Button>
          </form>
        </>
      )}
      <Flex
        alignItems='center'
        fontSize='9pt'
        color='purple.500'
        fontWeight={700}
        cursor='pointer'
      >
        <Text
          onClick={() =>
            setAuthModalState((prev) => ({
              ...prev,
              view: 'login',
            }))
          }
        >
          LOGIN
        </Text>
        <Icon as={BsDot} />
        <Text
          onClick={() =>
            setAuthModalState((prev) => ({
              ...prev,
              view: 'signup',
            }))
          }
        >
          SIGN UP
        </Text>
      </Flex>
    </Flex>
  );
};
export default ResetPassword;