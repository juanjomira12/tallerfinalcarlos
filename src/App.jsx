import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './features/layout/components/Header';
import { Footer } from './features/layout/components/Footer';
import { Content } from './features/layout/components/Content';
import { Login } from './features/auth/Login';
import { Register } from './features/auth/Register';
import { OlvideContrasena } from './features/auth/OlvideContrasena';
import { ApiPage } from './features/api/components/ApiPage';
import {Dashboard} from './features/dashboard/components/dashboard';
import { getCurrentUser, getToken } from './features/auth/authService';

function ProtectedRoute({ children }) {
  const token = getToken();
  const user = getCurrentUser();

  if (!token || !user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

function App() {
  return (
    <HashRouter>
      <div className="app-shell d-flex flex-column min-vh-100">
        <Header />

        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/api" element={<ApiPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<OlvideContrasena />} />
            <Route
              path="/dashboard"
              element={(
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              )}
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
