import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children, isProtected }) => {

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    if (!isAuthenticated && isProtected) {
        return <Navigate to="/login" replace />;
    }

    if (isAuthenticated && !isProtected) {
        return <Navigate to="/profile" replace />;
    }

    return children;
};

export default ProtectedRoute;