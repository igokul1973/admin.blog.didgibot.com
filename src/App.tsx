import { AuthGuard } from '@/guards/AuthGuard';
import { SnackbarProvider } from './contexts/snackbar/provider';
import { Dashboard } from './pages/dashboard/Dashboard';

function App() {
    return (
        <AuthGuard>
            <SnackbarProvider>
                <Dashboard />
            </SnackbarProvider>
        </AuthGuard>
    );
}

export default App;
