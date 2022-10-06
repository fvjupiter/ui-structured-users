<script>
	import FavoriteIcon from "./searchbar/FavoriteIcon.svelte";
    import SearchInput from "./searchbar/SearchInput.svelte";
    import { users, selectedOrderStore } from "../stores/userstore";
	import SelectOrder from "./searchbar/SelectOrder.svelte";
	import OnlineFilter from "./searchbar/OnlineFilter.svelte";
	import WasViewedFilter from "./searchbar/WasViewedFilter.svelte";

    // only local filteredUsers object will be searched and sorted, no api calls made

    // create a second topRef bc the one in layout.svelte can not be passed through props (or idk how...)
    let topRef2 = null
	const scrollToTop = () => {
        if(topRef2) topRef2.scrollIntoView()
    }

    // STATES
    let filteredUsers = []
    let searchVal = ''
    let selectedOrder = $selectedOrderStore
    const selectOptions = [
        { value: 'custom', label: 'Date registered' },
        { value: 'firstNameAsc', label: 'First Name (A-Z)' },
        { value: 'firstNameDesc', label: 'First Name (Z-A)' },
        { value: 'lastNameAsc', label: 'Last Name (A-Z)' },
        { value: 'lastNameDesc', label: 'Last Name (Z-A)' },
    ]
    let filter = { isOnline: false, isFavorite: false, wasViewed: false }

    // FUNCTIONS
    const filterBy = key => filter[key] = !filter[key]

    const applyFilter = () => {
        if(filter.isOnline) filteredUsers = filteredUsers.filter(user => user.isOnline)
        if(filter.isFavorite) filteredUsers = filteredUsers.filter(user => user.isFavorite)
        if(filter.wasViewed) filteredUsers = filteredUsers.filter(user => user.wasViewed)
    }

    const sortBySelectedOrder = () => {
        if(selectedOrder.includes('firstName')){
            if(selectedOrder.includes('Asc')) {
                filteredUsers = filteredUsers.sort((a, b) => a.firstName < b.firstName ? -1 : 1)
            } else {
                filteredUsers = filteredUsers.sort((a, b) => a.firstName > b.firstName ? -1 : 1)
            }
        } else if(selectedOrder.includes('lastName')){
            if(selectedOrder.includes('Asc')) {
                filteredUsers = filteredUsers.sort((a, b) => a.lastName < b.lastName ? -1 : 1)
            } else {
                filteredUsers = filteredUsers.sort((a, b) => a.lastName > b.lastName ? -1 : 1)
            }
        } else null
    }

    const setWasViewed = index => {
        if(!filteredUsers[index].wasViewed) {
            const copy = [...filteredUsers]
            copy[index].wasViewed = true
            setTimeout(() => filteredUsers = [...copy], 750) // to hide icon at page-exit
        }
    }

    const setIsFavorite = async index => {
        const copy = [...filteredUsers]
        copy[index].isFavorite = !copy[index].isFavorite
        filteredUsers = [...copy]
    }

    // REACTIVE
    $: {
        if(searchVal.length > 0) {
            sortBySelectedOrder()
            filteredUsers = $users.filter(user => (
                user.firstName.toLowerCase().includes(searchVal.toLowerCase()) 
                || user.lastName.toLowerCase().includes(searchVal.toLowerCase())
                || user.id.toString().includes(searchVal)
            ))
        } else {
            filteredUsers = [...$users]
            filter = filter
            applyFilter()
        }
        selectedOrderStore.set(selectedOrder)
        sortBySelectedOrder()
        scrollToTop()
    }
</script>

<div bind:this={topRef2} class="absolute -translate-y-20"/>

<div class={`
        backdrop
        sticky top-0 md:top-4 z-20 w-full mb-4
        md:rounded-sm shadow-xl dark:shadow-black/20 
        bg-white/50 dark:bg-zinc-900 
        text-zinc-900 dark:text-white text-sm
        border-b md:border border-zinc-300 dark:border-zinc-700
        overflow-hidden
    `}>

    <!-- first row -->
    <SearchInput bind:searchVal/>

    <!-- second row -->
    <div class="between border-t border-zinc-300 dark:border-zinc-700">
        <div class="md:w-1/4 start">
            <div class="start w-[90px]">
                <OnlineFilter {filterBy} isOnline={filter.isOnline} />
                <WasViewedFilter {filterBy} wasViewed={filter.wasViewed} />
            </div>
            <SelectOrder bind:selectedOrder {selectOptions}/>
        </div>
        <FavoriteIcon {filterBy} isFavorite={filter.isFavorite}/>
    </div>

</div>

<slot {filteredUsers} {setWasViewed} {setIsFavorite} />
