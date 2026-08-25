import { createClient } from "@supabase/supabase-js";


const supabaseUrl =
    import.meta.env.VITE_SUPABASE_URL;

const supabaseAnonKey =
    import.meta.env.VITE_SUPABASE_ANON_KEY;


export const supabase =
    createClient(
        supabaseUrl,
        supabaseAnonKey
    );


/*
=========================================================
AUTHENTICATE REALTIME ONCE
=========================================================
*/

let realtimeAuthPromise = null;

export const authenticateRealtime = async () => {

    const realtimeToken =
        localStorage.getItem("realtimeToken");

    if (!realtimeToken) {

        console.error(
            "No realtimeToken found"
        );

        return false;
    }


    if (realtimeAuthPromise) {

        return realtimeAuthPromise;

    }


    console.log(
        "Authenticating Supabase Realtime..."
    );


    realtimeAuthPromise =
        supabase.realtime
            .setAuth(realtimeToken)
            .then(() => {

                console.log(
                    "Supabase Realtime authenticated"
                );

                return true;

            })
            .catch((error) => {

                console.error(
                    "Supabase Realtime authentication failed:",
                    error
                );

                return false;

            });


    try {

        return await realtimeAuthPromise;

    } finally {

        realtimeAuthPromise = null;

    }

};