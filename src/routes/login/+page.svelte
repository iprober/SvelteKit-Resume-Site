<script>
  import { supabase } from '$lib/supabase';
  import { admin } from '$lib/stores/admin';
  import { goto } from '$app/navigation';

  let email = '';
  let password = '';

  const signIn = async () => {
    console.log('Attempting to sign in with:', email, password); // Log credentials for debugging

    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      console.error('Error during sign-in:', error.message); // Log full error for debugging
      alert('Error: ' + error.message);
      return;
    }

    console.log('Sign-in data:', data); // Log response data for debugging

    if (data.session) {
      admin.set(data.session.user);
      goto('/'); // Redirect to the homepage or dashboard
    } else {
      alert('Login failed');
    }
  };
</script>

<main>
  <form on:submit|preventDefault={signIn}>
    <label>
      Email:
      <input type="email" bind:value={email} required />
    </label>
    <label>
      Password:
      <input type="password" bind:value={password} required />
    </label>
    <button type="submit">Sign In</button>
  </form>
</main>
