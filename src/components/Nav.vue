<template>
  <div>
    <div>
      <nav class="container px-6 py-8 mx-auto md:flex md:justify-between md:items-center">
        <div class="flex items-center justify-between">
          <a href="/">
                  <img src="../assets/avatar-reduce-removebg.webp" width="50" height="50" alt="Lunar Commands logo" />
          </a>
          <div @click="toggleNavbar" class="flex md:hidden transition-transform duration-300 transform">
            <button type="button" aria-label="hamburger-menu"
              class="text-gray-100 hover:text-gray-400 focus:outline-none focus:text-gray-400 transition-transform duration-300 transform">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 32 32"
                style="fill:#FFFFFF;">
                <path d="M 4 7 L 4 9 L 28 9 L 28 7 Z M 4 15 L 4 17 L 28 17 L 28 15 Z M 4 23 L 4 25 L 28 25 L 28 23 Z">
                </path>
              </svg>
            </button>
          </div>
        </div>

        <div
          class="navbar flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row items-center md:space-x-10 md:mt-0 transition-all duration-300"
          :class="[showMenu ? 'flex slide-down' : 'hidden']">
          <a class="text-gray-100 font-bold object-cover transition-transform duration-300 transform hover:scale-110"
            href="/">Home</a>
          <a class="text-gray-100 font-bold object-cover transition-transform duration-300 transform hover:scale-110"
            href="/blog">Blog</a>
          <a class="text-gray-100 font-bold object-cover transition-transform duration-300 transform hover:scale-110"
            href="/contact">Contact Me</a>
          <a class="text-gray-100 font-bold object-cover transition-transform duration-300 transform hover:scale-110"
            href="/about">About Me</a>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
  mounted() {
    this.$nextTick(() => {
      const navLinks = document.querySelectorAll("a[href]");
      navLinks.forEach((link) => {
        if (link.getAttribute("href") === window.location.pathname) {
          link.setAttribute("aria-current", "page");
          link.classList.add("text-yellow-400");
        }
      });
    });
  },
  methods: {
    toggleNavbar() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>

<style>
.slide-down {
  transform: translateY(0);
  transition: transform 0.3s ease-in-out;
}

.slide-down.hidden {
  transform: translateY(-100%);
}

@media (min-width: 768px) {
  .navbar {
    transition: none;
  }
}
</style>