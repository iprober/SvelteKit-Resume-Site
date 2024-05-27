<script>
    import { onMount } from 'svelte';
    import { supabase } from '$lib/supabase';
    import { admin } from '$lib/stores/admin';
    import { goto } from '$app/navigation';
    import { get } from 'svelte/store';

    let isAuthorized = false;

    onMount(async () => {
        const { data: { session } } = await supabase.auth.getSession();
        
        if (session) {
            admin.set(session.user);
            isAuthorized = true;
        } else {
            admin.set(null);
            goto('/login');
        }

        supabase.auth.onAuthStateChange((_event, session) => {
            if (session) {
                admin.set(session.user);
                isAuthorized = true;
            } else {
                admin.set(null);
                goto('/login');
            }
        });
    });
</script>

<style>
    @import 'admin.css';
</style>

<main>
    {#if isAuthorized}
        <h1>Sample Admin Page</h1>
        <p>I didn't know what to put here so... it's blank.</p>
    {:else}
        <h1>Unauthorized User</h1>
        <p>You are not authorized to access this page.</p>
    {/if}
</main>
