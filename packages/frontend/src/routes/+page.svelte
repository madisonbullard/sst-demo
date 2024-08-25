<script lang="ts">
  import { enhance } from "$app/forms";
  import type { ActionData } from "./$types";

  export let form: ActionData;
</script>

{#if form?.user}
  <h1>Created user:{form.user.email}</h1>
{/if}
<form method="POST" use:enhance>
  <input type="email" name="email" />
  <button>Create user</button>
</form>
