<template>
<div id="app">
    <div class="min-h-screen">
        <div class="px-4 py-2">
            <header>
                <div class="flex items-center justify-between">
                    <p class="font-heebo font-extrabold text-2xl text-gray-1">Edie</p>
                    <div>
                        <button @click="toggle()" class="transition-all focus:outline-none">
                            <svg class="w-8 h-8 fill-current hover:text-blue-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                    <transition enter-active-class="animate__animated animate__fadeInRight" leave-active-class="animate__animated animate__fadeInRight" mode="out-in">
                        <div :class="{'hidden' : !isOpen, 'block' : isOpen}" @click.stop="toggle()" class="fixed inset-0 bg-blue-1 bg-opacity-50">
                            <div class="relative flex flex-col items-center justify-center bg-black w-80 ml-auto h-full">
                                <a href="#home" class="block font-poppins font-medium text-xl my-4 text-white hover:text-blue-1 transition-ease">Home</a>
                                <a href="#services" class="block font-poppins font-medium text-xl my-4 text-white hover:text-blue-1 transition-ease">Services</a>
                                <a href="#work" class="block font-poppins font-medium text-xl my-4 text-white hover:text-blue-1 transition-ease">Our Works</a>
                                <a href="#client" class="block font-poppins font-medium text-xl my-4 text-white hover:text-blue-1 transition-ease">Clients</a>
                                <a href="#footer" class="block font-poppins font-medium text-xl my-4 text-white hover:text-blue-1 transition-ease">Contact</a>
                                <div class="absolute left-0 bottom-0 ">
                                    <button @click.stop="toggle()" class="bg-white rounded-lg p-2 mb-8 -ml-5 shadow-lg focus:outline-none">
                                        <svg class="w-6 h-6 fill-current text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd">
                                            </path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </transition>
                </div>
            </header>
            <main>
                <div id="home">
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
                            <div class="flex bg-gray-6 items-center rounded-12px mt-1 pt-1">
                                <div class="pl-4 flex-1">
                                    <input class="bg-transparent font-poppins font-medium text-xs text-black focus:outline-none" placeholder="Email" type="email" name="email">
                                </div>
                                <button class="bg-blue-1 py-2 px-4 rounded-12px">
                                    <p class="font-poppins text-gray-6 font-medium text-sm">Join</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="services" class="mt-24">
                    <div>
                        <h2 class="font-poppins font-medium text-2xl text-gray-1">We offer high demand services</h2>
                    </div>
                    <div class="mt-24 px-8">
                        <div>
                            <div class="inline-block p-4 bg-blue-1 rounded-16px">
                                <svg class="w-8 h-8 fill-current text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                                </svg>
                            </div>
                            <h3 class="font-poppins font-bold text-2xl text-gray-1 mt-8">UI/UX Design</h3>
                            <p class="font-poppins font-normal text-base text-gray-2 mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit . Duis a metus ac nulla consequat aliquet id quis turpis.</p>
                            <div class="bg-gray-7 rounded-12px inline-block mt-8">
                                <button class="font-poppins font-medium text-base text-gray-3 py-2 px-3 rounded-12px focus:outline-none hover:bg-gray-6">Get started</button>
                            </div>
                        </div>
                    </div>
                    <div class="mt-24">
                        <div class="bg-white rounded-24px shadow-white-1 p-8">
                            <div class="inline-block p-4 bg-green-1 rounded-16px">
                                <svg class="w-8 h-8 fill-current text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <h3 class="font-poppins font-bold text-2xl text-gray-1 mt-8">Front End</h3>
                            <p class="font-poppins font-normal text-base text-gray-2 mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit . Duis a metus ac nulla consequat aliquet id quis turpis.</p>
                            <div class="bg-blue-1 rounded-12px inline-block mt-8">
                                <button class="font-poppins font-medium text-base text-white py-2 px-3 rounded-12px focus:outline-none hover:bg-blue-400">Get started</button>
                            </div>
                        </div>
                    </div>
                    <div class="mt-24 px-8">
                        <div>
                            <div class="inline-block p-4 bg-red-1 rounded-16px">
                                <svg class="w-8 h-8 fill-current text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z" clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <h3 class="font-poppins font-bold text-2xl text-gray-1 mt-8">Back End</h3>
                            <p class="font-poppins font-normal text-base text-gray-2 mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit . Duis a metus ac nulla consequat aliquet id quis turpis.</p>
                            <div class="bg-gray-7 rounded-12px inline-block mt-8">
                                <button class="font-poppins font-medium text-base text-gray-3 py-2 px-3 rounded-12px focus:outline-none hover:bg-gray-6">Get started</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="work" class="mt-24">
                    <div class="w-80">
                        <h2 class="font-poppins font-medium text-2xl text-gray-1">Good design means good business</h2>
                    </div>
                    <div v-for="service in services" :key="service.key" class="mt-12">
                        <div>
                            <img class="rounded-12px" :src="require(`@/assets/images/${service.photo}`)" :alt="service.title">
                        </div>
                        <div class="mt-3">
                            <p class="font-poppins font-light text-xs text-gray-3">{{ service.type }}</p>
                            <p class="font-poppins font-medium text-lg text-gray-1 ">{{ service.title }}</p>
                        </div>
                    </div>
                    <div class="flex items-center mt-8">
                        <span class="font-poppins font-medium text-lg text-blue-1">see more</span>
                        <div class="ml-2">
                            <svg class="w-4 h-4 inline-block fill-current text-blue-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="mt-24">
                    <p class="font-poppins font-medium text-lg text-red-1">Meet the team</p>
                    <div class="w-80">
                        <h2 class="font-poppins font-medium text-4xl">We are chilled and a laidback team</h2>
                    </div>
                    <div class="mt-4">
                        <p class="font-poppins font-normal text-base text-gray-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div class="flex items-center">
                        <div class="p-1">
                            <img class="rounded-24px" src="@/assets/images/person3.png" alt="">
                        </div>
                        <div>
                            <div class="p-1">
                                <img class="rounded-24px" src="@/assets/images/person1.png" alt="">
                            </div>
                            <div class="p-1">
                                <img class="rounded-24px" src="@/assets/images/person2.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div id="client" class="mt-24">
                    <p class="font-poppins font-medium text-2xl text-gray-1">
                        “Fast and outstanding resutls. Edie understands their customer’s needs. They have a young and talented team.”
                    </p>
                    <div class="flex mt-8">
                        <div class="w-20">
                            <img class="rounded-12px" src="@/assets/images/person4.png" alt="">
                        </div>
                        <div class="ml-8">
                            <p class="font-poppins font-medium text-2xl text-gray-1">Carlos Tran</p>
                            <p class="font-poppins font-medium text-lg text-gray-3">The Decorate Gatsby</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
        <footer id="footer" class="mt-24 bg-gray-8">
            <div class="px-10">
                <div class="inline-block pt-8">
                    <a class="block font-poppins font-normal text-lg py-2 text-white hover:text-blue-1 transition-ease">Home</a>
                    <a class="block font-poppins font-normal text-lg py-2 text-white hover:text-blue-1 transition-ease">Services</a>
                    <a class="block font-poppins font-normal text-lg py-2 text-white hover:text-blue-1 transition-ease">Our Works</a>
                    <a class="block font-poppins font-normal text-lg py-2 text-white hover:text-blue-1 transition-ease">Clients</a>
                    <a class="block font-poppins font-normal text-lg py-2 text-white hover:text-blue-1 transition-ease">Contact</a>
                </div>
                <div class="mt-16">
                    <p class="font-heebo font-extrabold text-4xl text-gray-6">Edie</p>
                    <div class="inline-flex justify-between w-24 pt-2">
                        <a href="#">
                            <img src="@/assets/images/instagram.svg" alt="Instagram">
                        </a>
                        <a href="#">
                            <img src="@/assets/images/linkedin.svg" alt="LinkedIn">
                        </a>
                        <a href="#">
                            <img src="@/assets/images/twitter.svg" alt="Twitter">
                        </a>
                    </div>
                    <div class="mt-16">
                        <p class="font-poppins font-medium text-xxs text-gray-3">Want us to contact you?</p>
                        <div class="flex bg-gray-6 items-center rounded-12px  mt-1 p-1">
                            <div class="pl-4 flex-1">
                                <input class="bg-transparent font-poppins font-medium text-xs text-black focus:outline-none" placeholder="Email" type="email" name="email">
                            </div>
                            <button class="bg-blue-1 py-2 px-4 rounded-12px">
                                <p class="font-poppins text-gray-6 font-medium text-sm">Join</p>
                            </button>
                        </div>
                    </div>
                    <div class="mt-24">
                        <p class="font-poppins font-semibold text-sm text-gray-7 text-center pb-12">Nisarg Patel @ DevChallenges.io</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</div>
</template>

<script>
export default {
    name: 'App',
    components: {},
    data() {
        return {
            isOpen: false,
            services: [{
                    id: 1,
                    photo: 'smarthome.jpg',
                    type: 'Full stack application',
                    title: 'Smart home dashboard',
                },
                {
                    id: 2,
                    photo: 'onboard.png',
                    type: 'UX/UI design',
                    title: 'Onboard application',
                },
                {
                    id: 3,
                    photo: 'booking.png',
                    type: 'Mobile application',
                    title: 'Booking system',
                },
                {
                    id: 4,
                    photo: 'juice-product.png',
                    type: 'Front End application',
                    title: 'Juice product homepage',
                }
            ]
        }
    },
    methods: {
        toggle() {
            this.isOpen = !this.isOpen;
        }
    }
}
</script>

<style lang="scss">
#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;

    a {
        cursor: pointer;
    }
}
</style>
