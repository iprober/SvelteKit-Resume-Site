<script>
    import { supabase } from '$lib/supabase';
    import { admin } from '$lib/stores/admin';
  
    const signOut = async () => {
      await supabase.auth.signOut();
      admin.set(null);
    };
  </script>
  
  <button on:click={signOut}>Sign Out</button>
  