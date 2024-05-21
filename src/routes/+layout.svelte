<script>
  // No specific script needed for basic layout
</script>

<style>
    @import 'layout.css';
</style>

<header class="header">
    <div class="left-header">
      <h1>Ian Roberson</h1>
    </div>
    <div class="right-header">
      <h1>SvelteKit Resume Site</h1>
    </div>
</header>

<nav>
  <ul>
    <li>
        <a href="/">Index</a>
    </li>

    <li>
        <a href="/education">Education</a>
    </li>

    <li>
        <a href="/work">Work Experience</a>
    </li>

    <li>
        <a href="/adminpage">Admin Page</a>
    </li>
  </ul>
</nav>

<slot />

<footer class="footer">
    <h1>Contacts</h1>
    <h3>Phone: <a href="tel:+2532303954">253-230-3954</a></h3>
    <h3>Email: <a href="mailto:iprober2@gmail.com">iprober2@gmail.com</a></h3>
</footer>