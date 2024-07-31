import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// LOCATIONS PERMITIDAS
const ALLOWED_LOCATIONS = ['/home'];

interface ComponentProps {
    component: React.ReactElement;
}

export const RenderComponents: React.FC<ComponentProps> = ({ component }: ComponentProps) => {

    const location = useLocation();
    const [toRender, setToRender] = useState(false)

    useEffect(() => {
        if (ALLOWED_LOCATIONS.includes(location.pathname.toLocaleLowerCase())) return setToRender(true)
        return setToRender(false)

    }, [location.pathname])

    return toRender ? component : null;
}

