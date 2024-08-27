<script lang="ts">
  import { page } from "$app/stores";
  import type { PageData } from "./$types";

  export let data: PageData;

  let email: string;

  $: params = new URLSearchParams({
    client_id: "sveltekit",
    redirect_uri: data.authUrl + "github/callback?",
    response_type: "token",
    email,
  });

  $: authHref = data.authUrl + "github/authorize?" + params.toString();
</script>

<input type="text" name="email" bind:value={email} />
{#if email}
  <a href={authHref}>Login</a>
{/if}
