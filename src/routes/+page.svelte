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
    *   {
        scrollbar-width: none;
        list-style-size: 0.5em;
    }

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

    .clickable:hover {
        color: #94cbf3;
    }

</style>

<Header {currentSection} />

<main class="bg-terminal-black text-terminal-white font-mono min-h-screen overflow-y-auto text-xs sm:text-sm md:text-base">
    <!-- home -->
    <section id="owal" class="min-h-screen flex items-center justify-center p-2 sm:p-4 md:p-8" class:section-visible={sectionVisibility['owal']}>
        <div class="section-content w-full max-w-5xl px-2 sm:px-4 md:px-8 flex justify-center items-center">
            <div class="w-full sm:w-5/6 md:w-4/5 lg:w-3/4 min-h-[25vh] text-center">
                <h1 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-4">
                    <TerminalText text="v. oliver walsh" speed={100} showCursor={true} cursorColor="transparent" />
                </h1>
                <div class="space-y-2 sm:space-y-4">
                    {#if showSubheader}
                    <p class="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                        <TerminalText text="machine learning engineering" speed={50} showCursor={false} />
                    </p>
                    <p class="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                        <TerminalText text="blockchain engineering" speed={75} showCursor={false} />
                    </p>
                    <p class="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                        <TerminalText text="distributed systems" speed={100} showCursor={false} />
                    </p>
                    <p class="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                        <TerminalText text="decentralization" speed={125} showCursor={false} />
                    </p>
                    {/if}
                </div>
            </div>
        </div>
    </section>

    <!-- about -->
    <section id="about" class="flex items-center justify-center bg-terminal-black text-terminal-white p-4 sm:p-8" class:section-visible={sectionVisibility['about']}>
        <div class="section-content w-full max-w-3xl text-center">
            <h2 class="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-8">about me</h2>
            <img src="/pic.png" alt="owal" class="zoomed-image w-24 sm:w-32 md:w-40 lg:w-48 aspect-square object-cover object-center rounded-full mx-auto mb-2 border border-terminal-white">
            <p class="text-xs sm:text-sm italic mb-3 sm:mb-6 mt-3 sm:mt-6">lookin' smug in nyc</p>
            <p class="text-xs sm:text-sm md:text-base lg:text-lg mb-2 sm:mb-4">
                i'm a machine learning engineer currently specializing in blockchain integration. my passion lies in developing innovative solutions that seamlessly incorporate ml into decentralized systems and other highly technical domains.</p>
            <p class="text-xs sm:text-sm md:text-base lg:text-lg">
                with experience in big tech, startup, and research environments, i strive to push the boundaries of what's possible in the realm of ai-powered blockchain applications.
            </p>
        </div>
    </section>
      
    <!-- timeline -->
    <section id="timeline" class="min-h-screen flex items-center justify-center bg-terminal-black text-terminal-white p-2 sm:p-4 md:p-8" class:section-visible={sectionVisibility['timeline']}>
        <div class="section-content w-full max-w-3xl relative overflow-y-auto max-h-[80vh]">
            <h2 class="text-xl sm:text-2xl md:text-3xl font-bold mb-0.5 text-center sticky top-0 bg-terminal-black py-2 sm:py-4 z-10">timeline</h2>
            <p class="text-[8px] sm:text-[10px] md:text-xs text-center text-gray-400 mb-0.5">click events for details</p>
            <div class="relative mt-4 sm:mt-8 md:mt-16">
                {#each timelineEvents as event, index}
                <div class="mb-3 sm:mb-6 md:mb-8 relative flex items-center cursor-pointer timeline-item clickable" on:click={() => toggleEvent(event)} on:keydown={(e) => e.key === 'Enter' && toggleEvent(event)} role="button" tabindex="0">
                    <div class="w-12 sm:w-16 md:w-24 text-right pr-1 sm:pr-2 md:pr-4 font-bold text-xs sm:text-sm md:text-base flex-shrink-0" class:text-[#94cbf3]={activeEvents.has(event)}>{event.year}</div>
                    <div class="ml-1 sm:ml-2 md:ml-4 flex-grow relative">
                        <div class="flex items-center">
                            <span class="text-terminal-white text-sm sm:text-base md:text-lg mr-2">*</span>
                            <div class="text-xs sm:text-sm md:text-base" class:text-[#94cbf3]={activeEvents.has(event)}>
                                {event.description}
                            </div>
                        </div>
                        {#if activeEvents.has(event)}
                            <div class="mt-1 sm:mt-2 md:mt-4 ml-2 sm:ml-4 md:ml-8 pr-1 sm:pr-2 md:pr-4" transition:fade={{ duration: 300 }}>
                                <div class="italic text-xxs sm:text-xs md:text-sm">{event.fullTimeline}</div>
                                {#if event.organizations && event.organizations.length > 0}
                                    <div class="mt-0.5 sm:mt-1 md:mt-2 text-xxs sm:text-xs md:text-sm">
                                        {@html event.organizations.map(org => `<a href="${org.link}" target="_blank" rel="noopener noreferrer" class="underline hover:text-gray-300">${org.name}</a>`).join(', ')}
                                    </div>
                                {/if}
                                <div class="mt-0.5 sm:mt-1 md:mt-2 text-xxs sm:text-xs md:text-sm whitespace-pre-line">{@html event.details.replace(/\n/g, '<br>')}</div>
                            </div>
                        {/if}
                    </div>
                </div>
                {/each}
            </div>
        </div>
    </section>
      
    <!-- blog -->
    <section id="thoughts" class="flex items-center justify-center bg-terminal-black text-terminal-white p-4 sm:p-8" class:section-visible={sectionVisibility['thoughts']}>
        <div class="section-content w-full max-w-3xl">
            <h2 class="text-xl sm:text-2xl md:text-3xl font-bold mb-0.5 text-center sticky top-0 bg-terminal-black py-2 sm:py-4 z-10">thoughts</h2>
            <p class="text-[8px] sm:text-[10px] md:text-xs text-center text-gray-400 mb-2 sm:mb-3 md:mb-4">click posts to expand</p>
            <div class="relative">
                {#each blogPosts as post, index}
                <div class="mb-4 sm:mb-8">
                    <div class="flex items-center cursor-pointer clickable" on:click={() => toggleBlogPost(post)}>
                        {#if !activeBlogPosts.has(post)}
                            <span class="text-terminal-white text-sm sm:text-base md:text-lg mr-2">*</span>
                        {/if}
                        <div class="flex-grow">
                            <div class="flex justify-between items-baseline">
                                <h3 class="text-sm sm:text-base md:text-lg lg:text-xl font-bold" class:text-[#94cbf3]={activeBlogPosts.has(post)}>{post.title}</h3>
                                <span class="text-xxs sm:text-xs md:text-sm italic">{post.date}</span>
                            </div>
                            {#if activeBlogPosts.has(post)}
                                {#if post.image && post.image.trim() !== ''}
                                    <img src={post.image} alt={post.title} class="w-full h-32 sm:h-48 object-cover my-2 sm:my-4 rounded">
                                {/if}
                                <p class="mt-1 sm:mt-2 text-xxs sm:text-xs md:text-sm whitespace-pre-line">{@html post.content}</p>
                            {/if}
                        </div>
                    </div>
                </div>
                {/each}
            </div>
        </div>
    </section>

    <!-- contact -->
    <section id="contact" class="flex items-center justify-center bg-terminal-black text-terminal-white p-4 sm:p-8" class:section-visible={sectionVisibility['contact']}>
        <div class="section-content w-full max-w-3xl text-center">
            <h2 class="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-8">contact</h2>
            <p class="text-xs sm:text-sm md:text-base mb-2 sm:mb-4">feel free to reach out:</p>
            <a href="mailto:inquire@owal.me" class="text-[#94cbf3] hover:underline text-xs sm:text-sm md:text-base">inquire@owal.me</a>
            <div class="mt-3 sm:mt-6 flex justify-center space-x-2 sm:space-x-4">
                <a href="https://github.com/oliverwalsh7" target="_blank" rel="noopener noreferrer" class="text-[#94cbf3] hover:underline text-xs sm:text-sm md:text-base">github</a>
                <a href="https://linkedin.com/in/owal" target="_blank" rel="noopener noreferrer" class="text-[#94cbf3] hover:underline text-xs sm:text-sm md:text-base">linkedin</a>
                <a href="https://twitter.com/0xOwal" target="_blank" rel="noopener noreferrer" class="text-[#94cbf3] hover:underline text-xs sm:text-sm md:text-base">twitter</a>
            </div>
        </div>
    </section>
    
    <!-- footer -->
    <footer class="bg-terminal-black text-terminal-white text-center py-1 sm:py-2 fixed bottom-0 left-0 right-0 z-50">
        <p class="text-xxs sm:text-xs">&copy; {new Date().getFullYear()} v. oliver walsh. all rights reserved.</p>
        <p class="text-xxs sm:text-xs mt-1 sm:mt-2">last updated: 7/21/2024</p>
    </footer>
    
</main>
