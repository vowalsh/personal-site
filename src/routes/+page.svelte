<script>
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    import TerminalText from '../components/TerminalText.svelte';
    import Header from '../components/Header.svelte';
    import { timelineEvents } from '../components/timeline.js';
    import { blogPosts } from '../components/thoughts.js';
  
    let showSubheader = false;
    let sections;
    let currentSection = 0;
    let activeEvents = new Set();
    let activeBlogPosts = new Set();
    let sectionVisibility = {};

    function toggleEvent(event) {
        if (activeEvents.has(event)) {
            activeEvents.delete(event);
        } else {
            activeEvents.add(event);
        }
        activeEvents = new Set(activeEvents);
    }
  
    function toggleBlogPost(post) {
        if (activeBlogPosts.has(post)) {
            activeBlogPosts.delete(post);
        } else {
            activeBlogPosts.add(post);
        }
        activeBlogPosts = new Set(activeBlogPosts);
    }
  
    onMount(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                sectionVisibility[entry.target.id] = entry.isIntersecting;
                if (entry.isIntersecting) {
                    currentSection = Array.from(sections).indexOf(entry.target);
                }
            });
        }, { threshold: 0.5 });

        sections = document.querySelectorAll('section');
        sections.forEach(section => observer.observe(section));

        setTimeout(() => {
            showSubheader = true;
        }, 2000);

        return () => sections.forEach(section => observer.unobserve(section));
    });
</script>

<style>
    :global(html, body) {
        overflow-x: hidden;
        scroll-behavior: smooth;
        scrollbar-width: none;
        -ms-overflow-style: none;
    }

    :global(body::-webkit-scrollbar) {
        display: none;
    }

    main {
        height: 100vh;
        overflow-y: scroll;
        scroll-snap-type: y mandatory;
    }

    section {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        scroll-snap-align: start;
    }

    .section-content {
        opacity: 0;
        transition: opacity 0.5s;
    }

    .section-visible .section-content {
        opacity: 1;
    }

</style>

<Header {currentSection} />

<main class="bg-terminal-black text-terminal-white font-mono min-h-screen overflow-y-auto">
    <!-- home -->
    <section id="owal" class="min-h-screen flex items-center justify-center p-4 sm:p-8" class:section-visible={sectionVisibility['owal']}>
        <div class="section-content w-full max-w-5xl px-4 sm:px-6 lg:px-8 flex justify-center items-center">
            <div class="w-full sm:w-5/6 md:w-4/5 lg:w-3/4 min-h-[25vh] text-center">
                <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                    <TerminalText text="v. oliver walsh" speed={100} showCursor={true} cursorColor="transparent" />
                </h1>
                <div class="space-y-4">
                    {#if showSubheader}
                    <p class="text-lg sm:text-xl md:text-2xl">
                        <TerminalText text="machine learning engineering" speed={50} showCursor={false} />
                    </p>
                    {/if}
                </div>
                <div class="space-y-4">
                    {#if showSubheader}
                    <p class="text-lg sm:text-xl md:text-2xl">
                        <TerminalText text="blockchain engineering" speed={75} showCursor={false} />
                    </p>
                    {/if}
                </div>
                <div class="space-y-4">
                    {#if showSubheader}
                    <p class="text-lg sm:text-xl md:text-2xl">
                        <TerminalText text="distributed systems" speed={100} showCursor={false} />
                    </p>
                    {/if}
                </div>
                <div class="space-y-4">
                    {#if showSubheader}
                    <p class="text-lg sm:text-xl md:text-2xl">
                        <TerminalText text="decentralization" speed={125} showCursor={false} />
                    </p>
                    {/if}
                </div>
            </div>
        </div>
    </section>

    <!-- about -->
    <section id="about" class="flex items-center justify-center bg-terminal-black text-terminal-white p-8" class:section-visible={sectionVisibility['about']}>
        <div class="section-content w-full max-w-3xl text-center">
            <h2 class="text-3xl font-bold mb-8">about me</h2>
            <img src="/pic.png" alt="owal" class="zoomed-image w-32 sm:w-36 md:w-40 lg:w-48 aspect-square object-cover object-center rounded-full mx-auto mb-2 border border-terminal-white">
            <p class="text-sm italic mb-6 mt-6">lookin' smug in nyc</p>
            <p class="text-lg mb-4">
                i'm a machine learning engineer currently specializing in blockchain integration. my passion lies in developing innovative solutions that seamlessly incorporate ml into decentralized systems and other highly technical domains.</p>
            <p class="text-lg">
                with experience in big tech, startup, and research environments, i strive to push the boundaries of what's possible in the realm of ai-powered blockchain applications.
            </p>
        </div>
    </section>
      
    <!-- timeline -->
    <section id="timeline" class="flex items-center justify-center bg-terminal-black text-terminal-white p-4 sm:p-8" class:section-visible={sectionVisibility['timeline']}>
        <div class="section-content w-full max-w-3xl max-h-[80vh] overflow-y-auto relative">
            <h2 class="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center sticky top-0 bg-terminal-black py-4 z-10">timeline</h2>
            <div class="relative mt-8 sm:mt-16 pl-4 sm:pl-0">
                {#each timelineEvents as event, index}
                    <div class="mb-6 sm:mb-8 relative flex">
                        <div class="absolute left-0 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-terminal-white mt-1">
                            {#if index !== timelineEvents.length - 1}
                                <div class="absolute left-1/2 top-full w-0.5 bg-terminal-white transform -translate-x-1/2" style="height: calc(100% + 1.5rem);"></div>
                            {/if}
                        </div>
                        <div class="ml-6 sm:ml-10 flex-grow">
                            <div role="button" tabindex="0" class="cursor-pointer" on:click={() => toggleEvent(event)} on:keydown={(e) => e.key === 'Enter' && toggleEvent(event)}>
                                <div class="flex flex-col sm:flex-row sm:items-baseline">
                                    <div class="font-bold text-sm sm:text-base mb-1 sm:mb-0 sm:w-24 sm:text-right sm:pr-4" class:text-[#94cbf3]={activeEvents.has(event)}>{event.year}</div>
                                    <div class="text-sm sm:text-base flex-grow pr-4" class:text-[#94cbf3]={activeEvents.has(event)}>{event.description}</div>
                                </div>
                            </div>
                            {#if activeEvents.has(event)}
                                <div class="mt-2 sm:mt-4 sm:ml-28 w-full pr-4" transition:fade={{ duration: 300 }}>
                                    <div class="italic text-xs sm:text-sm">{event.fullTimeline}</div>
                                    {#if event.organizations && event.organizations.length > 0}
                                        <div class="mt-1 sm:mt-2 text-xs sm:text-sm">
                                            {@html event.organizations.map(org => `<a href="${org.link}" target="_blank" rel="noopener noreferrer" class="underline hover:text-gray-300">${org.name}</a>`).join(', ')}
                                        </div>
                                    {/if}
                                    <div class="mt-1 sm:mt-2 text-xs sm:text-sm whitespace-pre-line">{@html event.details.replace(/\n/g, '<br>')}</div>
                                </div>
                            {/if}
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </section>
    
    
    
      
    <!-- blog -->
    <section id="thoughts" class="flex items-center justify-center bg-terminal-black text-terminal-white p-8" class:section-visible={sectionVisibility['thoughts']}>
        <div class="section-content w-full max-w-3xl">
            <h2 class="text-3xl font-bold mb-12 text-center">thoughts</h2>
            <div class="relative">
                {#each blogPosts as post, index}
                    <div class="mb-8">
                        <div class="flex items-start cursor-pointer" on:click={() => toggleBlogPost(post)}>
                            <div class="w-4 h-4 rounded-full bg-terminal-white relative mt-1">
                                {#if index !== blogPosts.length - 1}
                                    <div class="absolute left-1/2 top-full w-0.5 bg-terminal-white transform -translate-x-1/2" style="height: calc(100% + 2rem);"></div>
                                {/if}
                            </div>
                            <div class="ml-4 flex-grow">
                                <div class="flex justify-between items-baseline">
                                    <h3 class="text-xl font-bold" class:text-[#94cbf3]={activeBlogPosts.has(post)}>{post.title}</h3>
                                    <span class="text-sm italic">{post.date}</span>
                                </div>
                                {#if activeBlogPosts.has(post)}
                                    {#if post.image && post.image.trim() !== ''}
                                        <img src={post.image} alt={post.title} class="w-full h-48 object-cover my-4 rounded">
                                    {/if}
                                    <p class="mt-2 text-xs whitespace-pre-line">{@html post.content}</p>
                                {/if}
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </section>

    <!-- contact -->
    <section id="contact" class="flex items-center justify-center bg-terminal-black text-terminal-white p-8" class:section-visible={sectionVisibility['contact']}>
        <div class="section-content w-full max-w-3xl text-center">
            <h2 class="text-3xl font-bold mb-8">contact</h2>
            <p class="mb-4">feel free to reach out:</p>
            <a href="mailto:oliverwalsh7@gmail.com" class="text-[#94cbf3] hover:underline">inquire@owal.me</a>
            <div class="mt-6 flex justify-center space-x-4">
                <a href="https://github.com/oliverwalsh7" target="_blank" rel="noopener noreferrer" class="text-[#94cbf3] hover:underline">github</a>
                <a href="https://linkedin.com/in/owal" target="_blank" rel="noopener noreferrer" class="text-[#94cbf3] hover:underline">linkedin</a>
                <a href="https://twitter.com/0xOwal" target="_blank" rel="noopener noreferrer" class="text-[#94cbf3] hover:underline">twitter</a>
            </div>
        </div>
    </section>
    
    <!-- footer -->
    <footer class="bg-terminal-black text-terminal-white text-center py-2 fixed bottom-0 left-0 right-0 z-50">
        <p class="text-xs">&copy; {new Date().getFullYear()} v. oliver walsh. all rights reserved.</p>
        <p class="text-xs mt-2">last updated: 7/21/2024</p>
    </footer>
    
</main>
