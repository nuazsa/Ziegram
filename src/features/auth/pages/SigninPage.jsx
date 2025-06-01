import SigninForm from "../components/SigninForm";
import Button from '@mui/material/Button';

export default function SigninPage() {
  return (
    <>
      <SigninForm onSubmit={(form) => {
        console.log("Form submitted:", form);
      }} />
    </>
  )
};