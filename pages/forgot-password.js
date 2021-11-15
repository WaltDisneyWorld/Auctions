import LayoutAuth from '../components/LayoutAuth'
import Head from 'next/head'
import AuthForgotPasswordForm from '@/components/AuthForgotPasswordForm'
import AuthLoginLink from '@/components/AuthLoginLink'
import AuthSignupLink from '@/components/AuthSignupLink'

function ForgotPassword() {
  return (
    <LayoutAuth>
      <Head>
        <title>Forgot your password? - Realtime Auctions</title>
      </Head>

      <h1 className="font-semibold text-xl">
        Forgot your password?
      </h1>

      <p className="text-gray-500 mt-2">
        Enter the email associated with your account and we'll send an email with a link to reset your password.
      </p>

      <AuthForgotPasswordForm />

      <AuthLoginLink />

      <AuthSignupLink />
    </LayoutAuth>
  )
}

export default ForgotPassword
