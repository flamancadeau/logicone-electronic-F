import { useState } from 'react';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import { useAuth } from '../hooks/useAuth';

export default function Login() {
  const { login, user, logout, isAuthenticated } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (isAuthenticated) {
    return (
      <div className="max-w-md mx-auto px-margin-mobile py-space-2xl text-center">
        <h1 className="font-headline-lg text-headline-lg">Signed in (mock)</h1>
        <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm">
          {user?.name} — role: {user?.role}
        </p>
        <Button type="button" className="mt-space-lg" onClick={logout}>
          Log out
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto px-margin-mobile md:px-margin py-space-2xl">
      <h1 className="font-headline-xl text-headline-xl-mobile text-on-surface">Staff Login</h1>
      <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm mb-space-xl">
        JWT auth will connect to the backend later. Demo login sets local mock state.
      </p>
      <form
        className="flex flex-col gap-space-md"
        onSubmit={async (e) => {
          e.preventDefault();
          await login({ email, password });
        }}
      >
        <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <Input
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">Sign in</Button>
      </form>
    </div>
  );
}
