<script>
  import { onMount } from "svelte";

  let showMenu = false;
  let navLinks;

  import avatar from "../assets/avatar-reduce-removebg.webp";

  function toggleNavbar() {
    showMenu = !showMenu;
  }

  onMount(() => {
    navLinks = document.querySelectorAll("a[href]");
    navLinks.forEach((link) => {
      if (link.getAttribute("href") === window.location.pathname) {
        link.setAttribute("aria-current", "page");
        link.classList.add("text-yellow-400");
      }
    });
  });
</script>

<div transition:persist>
  <div>
    <nav
      class="container px-6 py-8 mx-auto md:flex md:justify-between md:items-center"
    >
      <div class="flex items-center justify-between">
        <a
          class="text-xl font-bold text-gray-100 md:text-2xl hover:text-blue-400"
          href="/"
        >
          <img
            src={avatar.src}
            width="50"
            height="50"
            alt="Lunar Commands logo"
          />
        </a>
        <!-- Mobile menu button -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div
          on:click={toggleNavbar}
          class="flex md:hidden transition-transform duration-300 transform"
        >
          <button
            type="button"
            class="text-gray-100 hover:text-gray-400 focus:outline-none focus:text-gray-400 transition-transform duration-300 transform"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row items-center md:space-x-10 md:mt-0 transition-all duration-300 {showMenu
          ? 'flex'
          : 'hidden'}"
      >
        <a
          class="text-gray-100 font-bold object-cover transition-transform duration-300 transform hover:scale-110"
          href="/">Home</a
        >
        <a
          class="text-gray-100 font-bold object-cover transition-transform duration-300 transform hover:scale-110"
          href="/blog">Blog</a
        >
        <a
          class="text-gray-100 font-bold object-cover transition-transform duration-300 transform hover:scale-110"
          href="/contact">Contact Me</a
        >
        <a
          class="text-gray-100 font-bold object-cover transition-transform duration-300 transform hover:scale-110"
          href="/about">About Me</a
        >
      </div>
    </nav>
  </div>
</div>
