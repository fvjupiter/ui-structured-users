<script>
    import { color } from "../../../stores/colorstore"

    export let index = 0
    export let user = {}
    export let setWasViewed = () => {}
    // const userHref = `/${user.firstName.toLowerCase()}_${user.lastName.toLowerCase()}`
    const userHref = `/${user.id}`
    let userInfo = null
    let isWaiting = false
    let showInfo = false

    let timOFetch = null
    let timOInfo = null

    const enter = () => {
        isWaiting = true
        timOFetch = setTimeout(() => { if(isWaiting && !userInfo) fetchInfo() } , 100)
        timOInfo = setTimeout(() => { if(isWaiting) showInfo = true }, 700)
    }
    const leave = () => {
        if(timOFetch) clearTimeout(timOFetch)
        if(timOInfo) clearTimeout(timOInfo)
        isWaiting = false
        showInfo = false
    }

    const fetchInfo = async () => {
        const url = `https://dummyapi.io/data/v1/user/${user.id}`
        const options = {
            method: 'GET',
            headers: {
                'app-id': '6331b5ca617229037740ba65',
            }
        }
        const res = await fetch(url, options)
        const data = await res.json()
        userInfo = data
    }

</script>

<a href={showInfo ? null : userHref} 
    on:click={() => { leave(); setWasViewed(index) }} 
    on:mouseenter={enter}
    on:mouseleave={leave}
    class={`
        relative start
        w-64 sm:w-72
        md:border border-transparent dark:hover:border-white/10 hover:border-black/10 
        rounded-sm
    `}>
    <slot name="preview" {userInfo} {showInfo}/>
    <slot />
    <div style="background-color: {$color};"
        class="{isWaiting ? 'w-full duration-700' : 'w-0'} absolute bottom-0 h-0.5 rounded-full ease-in"
    />
</a>
