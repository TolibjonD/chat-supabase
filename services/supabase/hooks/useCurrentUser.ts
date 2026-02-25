import { useEffect, useState } from "react";
import { createClient } from "../client";
import { User } from "@supabase/supabase-js";

export function useCurrentUser() {
    const [isLoading, setIsLoading] = useState(false)
    const [user, setUser] = useState<User | null>(null)
    useEffect(() => {
        const supabase = createClient()
        supabase.auth.getUser().then(({ data }) => {
            setUser(data.user ?? null)
        }).finally(() => setIsLoading(false))

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_, session) => {
            setUser(session?.user ?? null)
        })
        return () => subscription.unsubscribe()
    }, [])
    return { user, isLoading }
}