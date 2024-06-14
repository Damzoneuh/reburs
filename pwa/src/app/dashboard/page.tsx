'use client'
import Hub from "../../Component/Hub";

export default function Page() {
    const mercureUrl = 'https://localhost/.well-known/mercure?topic=http://localhost/user';
    const jwt = '';  // Récupère ton JWT de manière sécurisée

    const data = Hub(mercureUrl, jwt);
    console.log(data)

    return (
        <div>
            <div>
                COUCOU
            </div>
            {data && (
                <div>
                    Data from Mercure: {JSON.stringify(data)}
                </div>
            )}
        </div>
    );
}
