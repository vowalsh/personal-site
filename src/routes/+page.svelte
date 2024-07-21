<script>
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    import TerminalText from '../components/TerminalText.svelte';
    import Header from '../components/Header.svelte';
    import {timelineEvents} from '../components/timeline.js';
    import {blogPosts} from '../components/thoughts.js';
  
    let showSubheader = false;
    let sections;
    let currentSection = 0;
    let activeEvents = new Set();
    let activeBlogPosts = new Set();
    let sectionVisibility = {};

    function toggleBlogPost(post) {
        if (activeBlogPosts.has(post)) {
            activeBlogPosts.delete(post);
        } else {
            activeBlogPosts.add(post);
        }
        activeBlogPosts = activeBlogPosts;
        setTimeout(() => {
            document.getElementById('thoughts').scrollIntoView({ behavior: 'smooth' });
        }, 10);
        }

        function toggleEvent(event) {
        if (activeEvents.has(event)) {
            activeEvents.delete(event);
        } else {
            activeEvents.add(event);
        }
        activeEvents = activeEvents;
        setTimeout(() => {
            document.getElementById('timeline').scrollIntoView({ behavior: 'smooth' });
        }, 10);
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
    * {
    scrollbar-width: none;
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
        -ms-overflow-style: none;
    }

    main::-webkit-scrollbar {
        display: none;
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

<main class="bg-terminal-black text-terminal-white font-mono pb-24">
    <!-- home -->
    <section id="home" class="flex items-center justify-center" class:section-visible={sectionVisibility['home']}>
        <div class="section-content w-full max-w-5xl px-4 sm:px-6 lg:px-8 flex justify-center items-center">
            <div class="w-full sm:w-5/6 md:w-4/5 lg:w-3/4 min-h-[25vh] text-center">
                <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
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
            <img src="/pic.png" alt="owal" class="w-36 sm:w-40 md:w-48 lg:w-56 aspect-square object-cover object-center rounded-full mx-auto mb-2 border border-terminal-white">
            <p class="text-sm italic mb-6 mt-6">lookin' smug in nyc</p>
            <p class="text-lg mb-4">
                i'm a machine learning engineer currently focused on blockchain technology. my passion lies in developing innovative solutions that bridge the gap between ml and decentralized systems.
            </p>
            <p class="text-lg">
                with experience in big tech, startup, and research environments, i strive to push the boundaries of what's possible in the realm of ai-powered blockchain applications.
            </p>
        </div>
    </section>
      
    <!-- timeline -->
    <section id="timeline" class="flex items-center justify-center bg-terminal-black text-terminal-white p-8" class:section-visible={sectionVisibility['timeline']}>
        <div class="section-content w-full max-w-3xl max-h-[80vh] overflow-y-auto relative">
            <h2 class="text-3xl font-bold mb-12 text-center sticky top-0 bg-terminal-black py-4 z-10">timeline</h2>
            <div class="relative mt-16">
                {#each timelineEvents as event, index}
                    <div class="mb-8 relative">
                        <div role="button" tabindex="0" class="flex items-start cursor-pointer" on:click={() => toggleEvent(event)} on:keydown={(e) => e.key === 'Enter' && toggleEvent(event)}>
                            <div class="w-24 text-right pr-4 font-bold" class:text-[#94cbf3]={activeEvents.has(event)}>{event.year}</div>
                            <div class="w-4 h-4 rounded-full bg-terminal-white relative mt-1">
                                {#if index !== timelineEvents.length - 1}
                                    <div class="absolute left-1/2 top-full w-0.5 bg-terminal-white transform -translate-x-1/2" style="height: calc(100% + 2rem);"></div>
                                {/if}
                            </div>
                            <div class="ml-4 flex-grow" class:text-[#94cbf3]={activeEvents.has(event)}>
                                <div>{event.description}</div>
                            </div>
                        </div>
                        {#if activeEvents.has(event)}
                            <div class="mt-4 ml-32 w-full pr-4" transition:fade={{ duration: 300 }}>
                                <div class="italic text-sm">{event.fullTimeline}</div>
                                {#if event.organizations && event.organizations.length > 0}
                                    <div class="mt-2 text-sm">
                                        {@html event.organizations.map(org => `<a href="${org.link}" target="_blank" rel="noopener noreferrer" class="underline hover:text-gray-300">${org.name}</a>`).join(', ')}
                                    </div>
                                {/if}
                                <div class="mt-2 text-sm whitespace-pre-line">{@html event.details.replace(/\n/g, '<br>')}</div>
                            </div>
                        {/if}
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
            <p class="mb-4">Feel free to reach out:</p>
            <a href="mailto:your.email@example.com" class="text-[#94cbf3] hover:underline">your.email@example.com</a>
            <div class="mt-6 flex justify-center space-x-4">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" class="text-[#94cbf3] hover:underline">GitHub</a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" class="text-[#94cbf3] hover:underline">LinkedIn</a>
                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" class="text-[#94cbf3] hover:underline">Twitter</a>
            </div>
        </div>
    </section>
    
    <!-- footer -->
    <footer class="bg-terminal-black text-terminal-white text-center py-2 fixed bottom-0 left-0 right-0 z-50">
        <p class="text-xs">&copy; {new Date().getFullYear()} v. oliver walsh. all rights reserved.</p>
        <p class="text-xs mt-2">last updated: 7/21/2024</p>
    </footer>
    
</main>
