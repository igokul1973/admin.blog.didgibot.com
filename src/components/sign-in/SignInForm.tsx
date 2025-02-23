import { useUser } from '@/hooks/use-user';
import { authClient } from '@/lib/auth/AuthClient';
import { paths } from '@/paths';
import { zodResolver } from '@hookform/resolvers/zod';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { JSX, useCallback, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { z as zod } from 'zod';

const schema = zod.object({
    email: zod.string().min(1, { message: 'Email is required' }).email(),
    password: zod.string().min(1, { message: 'Password is required' })
});

type Values = zod.infer<typeof schema>;

const defaultValues = { email: '', password: '' } satisfies Values;

export function SignInForm(): JSX.Element {
    const navigate = useNavigate();

    const { checkSession } = useUser();

    const [showPassword, setShowPassword] = useState<boolean>();

    const [isPending, setIsPending] = useState<boolean>(false);

    const {
        control,
        handleSubmit,
        setError,
        formState: { errors }
    } = useForm<Values>({ defaultValues, resolver: zodResolver(schema) });

    const onSubmit = useCallback(
        async (values: Values): Promise<void> => {
            setIsPending(true);

            const { error } = await authClient.signInWithPassword(values);

            if (error) {
                setError('root', { type: 'server', message: error });
                setIsPending(false);
                return;
            }

            // Refresh the auth state
            await checkSession();

            // UserProvider, for this case, will not refresh the router
            // After refresh, GuestGuard will handle the redirect
            navigate(paths.home);
        },
        [checkSession, setError]
    );

    return (
        <Stack spacing={4}>
            <Stack spacing={1}>
                <Typography variant='h4'>Sign in</Typography>
                {/* Can be used for sign up */}
                {/* <Typography color='text.secondary' variant='body2'>
                    Don&apos;t have an account?{' '}
                    <Link
                        component={RouterLink}
                        to={paths.auth.signUp}
                        underline='hover'
                        variant='subtitle2'
                    >
                        Sign up
                    </Link>
                </Typography> */}
            </Stack>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={2}>
                    <Controller
                        control={control}
                        name='email'
                        render={({ field }) => (
                            <FormControl error={Boolean(errors.email)}>
                                <InputLabel>Email address</InputLabel>
                                <OutlinedInput {...field} label='Email address' type='email' />
                                {errors.email ? (
                                    <FormHelperText>{errors.email.message}</FormHelperText>
                                ) : null}
                            </FormControl>
                        )}
                    />
                    <Controller
                        control={control}
                        name='password'
                        render={({ field }) => (
                            <FormControl error={Boolean(errors.password)}>
                                <InputLabel>Password</InputLabel>
                                <OutlinedInput
                                    {...field}
                                    endAdornment={
                                        showPassword ? (
                                            <VisibilityIcon
                                                cursor='pointer'
                                                fontSize='medium'
                                                onClick={(): void => {
                                                    setShowPassword(false);
                                                }}
                                            />
                                        ) : (
                                            <VisibilityOffIcon
                                                cursor='pointer'
                                                fontSize='medium'
                                                onClick={(): void => {
                                                    setShowPassword(true);
                                                }}
                                            />
                                        )
                                    }
                                    label='Password'
                                    type={showPassword ? 'text' : 'password'}
                                />
                                {errors.password ? (
                                    <FormHelperText>{errors.password.message}</FormHelperText>
                                ) : null}
                            </FormControl>
                        )}
                    />
                    {/* Can be used for password reset functionality */}
                    {/* <div>
                        <Link
                            component={RouterLink}
                            to={paths.auth.resetPassword}
                            variant='subtitle2'
                        >
                            Forgot password?
                        </Link>
                    </div> */}
                    {errors.root ? <Alert color='error'>{errors.root.message}</Alert> : null}
                    <Button disabled={isPending} type='submit' variant='contained'>
                        Sign in
                    </Button>
                </Stack>
            </form>
            {/* Can be used for prompt */}
            {/* <Alert color='warning'>
                Use{' '}
                <Typography component='span' sx={{ fontWeight: 700 }} variant='inherit'>
                    igk19@devias.io
                </Typography>{' '}
                with password{' '}
                <Typography component='span' sx={{ fontWeight: 700 }} variant='inherit'>
                    Secret1
                </Typography>
            </Alert> */}
        </Stack>
    );
}
