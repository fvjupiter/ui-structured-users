<script>
	import Row from "../../components/userPage/InfoRow.svelte";
    import MdLocalPhone from 'svelte-icons/md/MdLocalPhone.svelte'
    import MdEmail from 'svelte-icons/md/MdEmail.svelte'
    import MdLocationOn from 'svelte-icons/md/MdLocationOn.svelte'
	import PseudoFavorite from "../../components/userPage/PseudoFavorite.svelte";

    export let data = null
    export let userInfo = null

    userInfo = data.data
    $: console.log(data)

    $: registerDate = userInfo && new Date(userInfo.registerDate).toLocaleDateString()
    $: updatedDate = userInfo && new Date(userInfo.updatedDate).toLocaleString()
    $: dateOfBirth = userInfo && new Date(userInfo.dateOfBirth).toLocaleDateString()
    $: age = userInfo && new Date().getFullYear() - new Date(userInfo.dateOfBirth).getFullYear()
</script>

<div class="w-full max-w-3xl mx-auto">
    <a href="/" class="absolute -translate-y-9 md:-translate-y-7 pl-4 hover:underline text-zinc-500">&#8592 back</a>
    <div class="
            relative w-full mx-auto md:mt-4
            dark:text-zinc-200 text-zinc-800
            rounded-2xl md:rounded-3xl shadow-2xl dark:shadow-black
            overflow-hidden
        ">
        {#if data}
            <div class="relative w-full pt-8 bg-white/70 dark:bg-black/70 backdrop2 z-10">
                <div class="
                    w-72 h-72 md:w-96 md:h-96 mx-auto
                    shadow-2xl dark:shadow-black
                    overflow-hidden rounded-lg
                    ">
                    <img src={userInfo.picture} alt={userInfo.firstName} class="w-full"/>
                </div>

                <!-- Name -->
                <h1 class="relative
                    text-2xl md:text-4xl center mt-4 md:mt-8 md:mb-1 -translate-x-7 px-2 pl-6 sm:px-8
                    font-bold text-center dark:text-white text-black
                ">
                    <PseudoFavorite />
                    {userInfo.firstName} {userInfo.lastName}
                </h1>
                <h2 class="text-center md:text-xl font-semibold mb-6 md:mb-8">
                    {dateOfBirth} ({age} y.o.)
                </h2>

                <!-- Mail -->
                <Row isOdd={true} href={`mailto:${userInfo.email}`}>
                    <MdEmail slot="icon"/>
                    <span slot='value'>{userInfo.email}</span>
                </Row>

                <!-- Phone -->
                <Row href={`tel:${userInfo.phone}`}>
                    <MdLocalPhone slot="icon"/>
                    <span slot='value'>{userInfo.phone}</span>
                </Row>

                <!-- Location -->
                <Row isOdd={true}
                    href={`https://www.google.com/maps/place/${userInfo.location.city.split(' ').join('+')}`}
                    >
                    <MdLocationOn slot="icon"/>
                    <span slot='value'>{userInfo.location.street}, {userInfo.location.city}</span>
                </Row>

                <!-- Register date -->
                <Row>
                    <span slot='title'>Registered</span>
                    <span slot='value'>{registerDate}</span>
                </Row>

                <!-- Update date -->
                <Row isOdd={true}>
                    <span slot='title'>Last update</span>
                    <span slot='value'>{updatedDate}</span>
                </Row>

                <!-- About -->
                <div class="py-4 px-4 sm:px-8">
                    <div class='max-w-sm w-full mx-auto'>
                        <div class='pr-4 pb-2 dark:text-zinc-400 text-zinc-600 font-semibold'>About</div>
                        <p class="text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id porttitor ex, sed elementum erat. Integer efficitur pretium sagittis. Sed bibendum ante a neque accumsan aliquam. Quisque pellentesque mattis ante. Nullam egestas mattis tortor sed iaculis. Vivamus ut faucibus dui. Suspendisse sit amet ultricies neque, sit amet convallis libero. Pellentesque pellentesque commodo libero, eget venenatis nisi.
                        </p>
                    </div>
                </div>

            </div>

            <!-- custom background -->
            <div style="background: url({userInfo.picture}) no-repeat center; background-size: cover;"
                class="absolute inset-0"
            />
        {/if}
    </div>
</div>
