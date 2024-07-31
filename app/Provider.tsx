'use client';

import Loader from '@/components/Loader';
import { LiveblocksProvider, ClientSideSuspense } from '@liveblocks/react';
import { ReactNode } from 'react';

const Provider = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <LiveblocksProvider authEndpoint="/api/liveblocks-auth">
                <ClientSideSuspense fallback={<Loader />}>
                    {children}
                </ClientSideSuspense>
            </LiveblocksProvider>
        </div>
    )
}

export default Provider
