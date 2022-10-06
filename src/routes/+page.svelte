<script>
    import Searchbar from '../components/Searchbar.svelte';
	import UserList from '../components/UserList.svelte';

</script>

<svelte:head>
    <title>UI - Structured Users</title>
</svelte:head>

<Searchbar let:filteredUsers let:setIsFavorite let:setWasViewed>
    <UserList {filteredUsers} {setWasViewed} {setIsFavorite}/>
</Searchbar>
