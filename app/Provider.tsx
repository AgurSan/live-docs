'use client';

import Loader from '@/components/Loader';
import { getClerkUsers } from '@/lib/actions/user.actions';
import { LiveblocksProvider, ClientSideSuspense } from '@liveblocks/react';
import { ReactNode } from 'react';

const Provider = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <LiveblocksProvider 
                authEndpoint="/api/liveblocks-auth"
                resolveUsers={async ({ userIds}) => {
                    const users = await getClerkUsers({ userIds });

                    return users;
                }}
            >
                <ClientSideSuspense fallback={<Loader />}>
                    {children}
                </ClientSideSuspense>
            </LiveblocksProvider>
        </div>
    )
}

export default Provider
