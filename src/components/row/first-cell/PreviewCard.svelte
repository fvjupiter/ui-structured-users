<script>
	import FavoriteIcon from "../action-cell/FavoriteIcon.svelte";
    import { color } from "../../../stores/colorstore"
	import OnlineCircle from "./OnlineCircle.svelte";

    export let index = 0
    export let isOnline = false
    export let isFavorite = false
    export let setIsFavorite = () => {}

    export let userInfo = null
    export let showInfo = false

    let isHidden = true
    $: {
        if(showInfo) isHidden = false
        else setTimeout(() => isHidden = true, 150)
    }

    let registerDate
    $: registerDate = userInfo && new Date(userInfo.registerDate).toLocaleDateString()

    // calculate where the card should be positioned
    let ref = null
    let yPos = 0
    $: yPos = showInfo && ref && ref.getBoundingClientRect().top
    let screenHeight = 0
    const getTranslate = () => (
        yPos < 400 
        ? 'translate-y-40' 
        : yPos > screenHeight -150 
        ? '-translate-y-52' 
        : '-translate-y-10'
    )

</script>

<svelte:window bind:innerHeight={screenHeight}/>

<div bind:this={ref}
    on:click={(e) => e.stopPropagation()}
    class={`p-4
        ${isHidden 
            ? 'scale-0 opacity-0' 
            : userInfo && showInfo 
            ? 'scale-105 opacity-100 duration-long' 
            : 'scale-95 opacity-0 duration-long'
        }
        ${getTranslate()}
        absolute z-40 sm:translate-x-64 sm:origin-left
        text-zinc-500 dark:text-zinc-300
        cursor-default
    `}>
    {#if isOnline}
        <div class="scale-[1.14]">
            <OnlineCircle />
        </div>
    {/if}
    <div class="w-64 sm:w-72 rounded-md overflow-hidden shadow-2xl dark:shadow-black dark:bg-zinc-800 bg-white">
        {#if userInfo}
            <div class="overflow-hidden w-full mx-auto">
                <img src={userInfo.picture} alt={userInfo.firstName} class="w-full"/>
            </div>
            <div>
                <h1 class="
                    text-2xl center -translate-x-4 mt-2 pl-4
                    font-bold text-center dark:text-white text-black
                ">
                    <FavoriteIcon {index} {isFavorite} {setIsFavorite} />
                    {userInfo.firstName} {userInfo.lastName}
                </h1>
                <a href={`mailto:${userInfo.email}`}>
                    <p class="text-center py-1 px-2 cursor-pointer hover:bg-black/5 dark:hover:bg-zinc-900 dark:hover:text-white">{userInfo.email}</p>
                </a>
                <a href={`tel:${userInfo.phone}`}>
                    <p class="text-center py-1 px-2 cursor-pointer hover:bg-black/5 dark:hover:bg-zinc-900 dark:hover:text-white">{userInfo.phone}</p>
                </a>
                <!-- <p class="text-center">{userInfo.location.street}, {userInfo.location.city}</p> -->
                <p class="text-center">registered: {registerDate}</p>
            </div>
            <div class="w-fit mx-auto">
                <a href={`/${userInfo.id}`}>
                    <div style="background-color: {$color};"
                        class="
                            my-2 mb-3 mx-auto w-fit px-4 py-2 
                            text-black font-medium
                            rounded-md hover:shadow-md
                            hover:scale-110 duration cursor-pointer
                        "
                        >view profile
                    </div>
                </a>
            </div>
        {/if}
    </div>
</div>
