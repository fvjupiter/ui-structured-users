<script>
	import FirstCell from "./first-cell/FirstCell.svelte";
	import ActionCell from "./action-cell/ActionCell.svelte";
	import PreviewCard from "./first-cell/PreviewCard.svelte";
	import UserIndex from "./first-cell/UserIndex.svelte";
	import OnlineCircle from "./first-cell/OnlineCircle.svelte";
	import WasViewedIcon from "./first-cell/WasViewedIcon.svelte";
	import AvatarName from "./first-cell/AvatarName.svelte";
	import FavoriteIcon from "./action-cell/FavoriteIcon.svelte";
	import AddFriendIcon from "./action-cell/AddFriendIcon.svelte";
    import GoToProfileIcon from "./action-cell/GoToProfileIcon.svelte";
	import ChatIcon from "./action-cell/ChatIcon.svelte";
    import Actions from "./action-cell/Actions.svelte";
    import ActionMenu from "./action-cell/ActionMenu.svelte";
    import ActionItem from "./action-cell/ActionItem.svelte";
    import { color } from "../../stores/colorstore"
	import ShareIcon from "./action-cell/ShareIcon.svelte";
	import AddListIcon from "./action-cell/AddListIcon.svelte";

    export let index = 0;
    export let user = {};
    export let setWasViewed = () => {}
    export let setIsFavorite = () => {}

    export let focusId = -1
    $: isFocused = focusId == index

    let showActions = false
    const toggleActions = (e) => {
        e.stopPropagation()
        showActions = !showActions
    }

    const notImplemented = (e) => {
        e.stopPropagation()
        showActions = false
        alert("Not implemented")
    }

    const share = () => {
        setTimeout(() => alert('Profile-link copied to clipboard.'), 10)
        return navigator.clipboard.writeText(`${window.location.protocol}//${window.location.hostname}:${window.location.port}/${user.id}`)
    }
    
</script>

<div
    class={`
    ${isFocused
        ? ` bg-black/10 dark:bg-zinc-700 z-10
            text-black dark:text-white`
        : `
            md:hover:bg-black/5 md:dark:hover:bg-white/5
            md:hover:ring-2 md:hover:ring-black/5 md:dark:hover:ring-white/5 
            hover:text-black dark:hover:text-white
            text-zinc-500 dark:text-zinc-300
    `}
    group between relative
    text-sm rounded-sm cursor-default
`}>

    <FirstCell {index} {user} {setWasViewed} let:showInfo let:userInfo>
        <PreviewCard slot="preview" {userInfo} {showInfo} isOnline={user.isOnline} {index} isFavorite={user.isFavorite} {setIsFavorite}/>
        <UserIndex {index} />
        {#if user.isOnline}
            <OnlineCircle />
        {/if}
        {#if user.wasViewed}
            <WasViewedIcon />
        {/if}
        <AvatarName firstName={user.firstName} lastName={user.lastName} picture={user.picture} />
    </FirstCell>

    <ActionCell>
        <FavoriteIcon {index} isFavorite={user.isFavorite} {setIsFavorite}/>
        <Actions {toggleActions} {showActions}>
            <ActionMenu>
                <ActionItem on:click={notImplemented}>
                    <AddFriendIcon />&nbsp;&nbsp;add friend
                </ActionItem>
                <ActionItem on:click={notImplemented}>
                    <ChatIcon />&nbsp;&nbsp;chat
                </ActionItem>
                <ActionItem on:click={notImplemented}>
                    <AddListIcon />&nbsp;&nbsp;add to list
                </ActionItem>
                <!-- <a href={`/${user.id}`}>
                    <ActionItem on:click>
                        <GoToProfileIcon />&nbsp;&nbsp;view profile
                    </ActionItem>
                </a> -->
                <ActionItem on:click={share}>
                    <ShareIcon />&nbsp;&nbsp;share profile
                </ActionItem>
            </ActionMenu>
        </Actions>
    </ActionCell>
    
</div>
