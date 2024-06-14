import { useEffect, useState } from 'react';
import EventSourcePolyfill from 'eventsource-polyfill';

export default function getHub(url, jwt) {
    const [data, setData] = useState(null);

    useEffect(() => {
        const eventSource = new EventSourcePolyfill(url, {
            headers: {
                'Authorization': `Bearer ${jwt}`
            }
        });

        eventSource.onmessage = (event) => {
            const parsedData = JSON.parse(event.data);
            setData(parsedData);
        };

        eventSource.onerror = (error) => {
            console.error('Mercure error:', error);
            eventSource.close();
        };

        return () => {
            eventSource.close();
        };
    }, [url, jwt]);

    return data;
}
