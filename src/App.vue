<template>
<div id="app">
    <div class="min-h-screen">
        <div class="px-4 py-2">
            <header>
                <div class="flex items-center justify-between">
                    <p class="font-heebo font-extrabold text-2xl text-gray-1">Edie</p>
                    <div>
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </div>
                </div>
            </header>
            <main>
                <div class="mt-12 px-8">
                    <p class="font-poppins font-medium text-xs text-blue-1">Unhappy with your website?</p>
                    <h1 class="font-poppins font-medium text-2xl text-gray-1">We create beautiful and fast web services</h1>
                </div>
                <div class="mt-4">
                    <img class="rounded-18px" src="@/assets/images/heroImage.jpg" alt="Edie Team">
                </div>
                <div class="mt-5 px-8">
                    <div class="w-56">
                        <h2 class="font-poppins font-medium text-2xl text-gray-1">Story, emotion and purpose</h2>
                    </div>
                    <div class="mt-4">
                        <p class="font-poppins font-normal text-xs text-gray-2">We help transform your ideas into real world applications that will outperform your toughest competition and help you achieve your strategic goals in short period of time.</p>
                    </div>
                    <div class="mt-8">
                        <p class="font-poppins font-medium text-xxs text-gray-3">Want us to contact you?</p>
                        <div class="flex bg-gray-6 items-center rounded-12px  mt-1">
                            <div class="pl-4 flex-1">
                                <input class="bg-transparent font-poppins font-medium text-xs text-black focus:outline-none" placeholder="Email" type="email" name="email">
                            </div>
                            <button class="bg-blue-1 py-2 px-4 rounded-12px">
                                <p class="font-poppins text-gray-6 font-medium text-sm">Join</p>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'App',
    components: {}
}
</script>

<style lang="scss">
#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
}
</style>
