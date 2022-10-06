<script>
	import Row from "./row/Row.svelte";

    export let filteredUsers = []
    export let setWasViewed = () => {}
    export let setIsFavorite = () => {}
    let focusId = -1
    const setFocus = (index) => focusId = index
</script>

<div class="px-2 sm:px-4">
    <table class={`w-full`}>
        {#each filteredUsers as user, index (user.id)}
            <tr on:click={() => setFocus(focusId == index ? -1 : index)}>
                <Row {index} {user} {setWasViewed} {setIsFavorite} {focusId} />
            </tr>
        {/each}
    </table>
    {#if filteredUsers.length > 0}
        <div class="text-center text-zinc-400 dark:text-zinc-300 py-4">
            No more users
        </div>
    {/if}
</div>
