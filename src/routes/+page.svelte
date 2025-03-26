<script>
    import { onMount, onDestroy } from 'svelte';
    import { fade } from 'svelte/transition';
    import TerminalText from '../components/TerminalText.svelte';
    import Header from '../components/Header.svelte';
    import { timelineEvents } from '../components/timeline.js';
    import { blogPosts } from '../components/thoughts.js';

    // Define variables with their proper initialization values
    let showSubheader = false;
    let sections;
    let currentSection = 0;
    let activeEvents = new Set();
    let activeBlogPosts = new Set();
    let sectionVisibility = {};
    let activePost = null;
    let currentImageIndex = 0;
    let intervalId = null;
    let fullImageSrc = null;

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
  
    function openBlogPost(post) {
        activePost = post;
        currentImageIndex = 0;
    }

    function closeBlogPost() {
        activePost = null;
    }
  
    function cycleImage() {
        if (activePost && activePost.images && activePost.images.length > 1) {
            currentImageIndex = (currentImageIndex + 1) % activePost.images.length;
            console.log('Cycling to image:', currentImageIndex);
            activePost = {...activePost}; // Force re-render
        }
    }

    function prevImage() {
        if (activePost && activePost.images && activePost.images.length > 1) {
            currentImageIndex = (currentImageIndex - 1 + activePost.images.length) % activePost.images.length;
            console.log('Previous image clicked, new index:', currentImageIndex);
        }
    }

    function nextImage() {
        if (activePost && activePost.images && activePost.images.length > 1) {
            currentImageIndex = (currentImageIndex + 1) % activePost.images.length;
            console.log('Next image clicked, new index:', currentImageIndex);
        }
    }

    function showFullImage(imageSrc) {
        fullImageSrc = imageSrc;
    }

    function closeFullImage() {
        fullImageSrc = null;
    }

    $: if (activePost) {
        console.log('Active post changed:', activePost.title);
        console.log('Images:', activePost.images);
        currentImageIndex = 0;
        // Clear existing interval if any
        if (intervalId) {
            clearInterval(intervalId);
        }
        // Start new interval
        if (activePost.images && activePost.images.length > 1) {
            console.log('Starting interval');
            intervalId = window.setInterval(cycleImage, 5000);
        }
    }

    onDestroy(() => {
        if (intervalId) {
            clearInterval(intervalId);
        }
    });

    onMount(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const id = entry.target.id;
                sectionVisibility[id] = entry.isIntersecting;
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

<style lang="postcss">
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

    a, .timeline-item a, #about a {
        color: #baedba;
        text-decoration: underline;
    }

    #thoughts a, #thoughts .section-content a {
        color: #8FBC8F;
        text-decoration: underline;
    }

    .post-content a {
        color: #8FBC8F;
        text-decoration: underline;
    }

    .bg-terminal-black {
        background-color: #000000;
    }

    @media (max-width: 640px) {
        :global(.w-11\/12) {
            width: 91.666667%;
        }
    }

    .image-carousel {
        position: relative;
        width: 100%;
        height: 300px; /* Adjust as needed */
        overflow: hidden;
    }

    .carousel-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: opacity 0.3s ease-in-out;
        opacity: 0;
    }

    .carousel-image.active {
        opacity: 1;
    }

    .carousel-button {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
        border: none;
        padding: 10px 15px;
        font-size: 18px;
        cursor: pointer;
        z-index: 10;
        transition: background-color 0.3s;
    }

    .carousel-button:hover {
        background-color: rgba(0, 0, 0, 0.8);
    }

    .carousel-button.prev {
        left: 10px;
    }

    .carousel-button.next {
        right: 10px;
    }

    :global(body) {
        @apply font-sans text-base;
    }

    h1, h2, h3, h4, h5, h6 {
        @apply font-sans font-bold;
    }

    .section-content {
        @apply font-sans;
    }

    .timeline-item {
        @apply font-sans;
    }

    .post-content {
        @apply font-sans;
    }

    .timeline-item-asterisk {
        @apply align-text-bottom;
    }

    /* Timeline specific styles */
    .timeline-container {
        position: relative;
    }

    .timeline-line {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 36px;
        width: 1px;
        background-color: rgba(255, 255, 255, 0.06);
        z-index: 1;
    }

    @media (min-width: 640px) {
        .timeline-line {
            left: 50px;
        }
    }

    @media (min-width: 768px) {
        .timeline-line {
            left: 70px;
        }
    }

    .timeline-item {
        position: relative;
        z-index: 2;
        transition: transform 0.2s ease;
        padding: 8px 0;
    }

    .timeline-item:hover {
        transform: translateX(2px);
    }

    .timeline-dot {
        position: absolute;
        left: 35px;
        top: 13px;
        width: 2px;
        height: 2px;
        background-color: rgba(255, 255, 255, 0.25);
        z-index: 3;
        transition: all 0.3s ease;
    }

    @media (min-width: 640px) {
        .timeline-dot {
            left: 49px;
            width: 3px;
            height: 3px;
        }
    }

    @media (min-width: 768px) {
        .timeline-dot {
            left: 69px;
            width: 3px;
            height: 3px;
        }
    }

    .timeline-dot.active {
        background-color: #94cbf3;
    }

    .timeline-year {
        font-weight: 400;
        color: rgba(255, 255, 255, 0.6);
        transition: all 0.3s ease;
        letter-spacing: 0.01em;
        display: inline-block;
        width: 100%;
        text-align: right;
    }

    .timeline-year.active {
        color: #94cbf3;
    }

    .timeline-desc {
        transition: all 0.3s ease;
        letter-spacing: 0.01em;
    }

    .timeline-content {
        border-left: 1px solid rgba(255, 255, 255, 0.06);
        padding-left: 1rem;
        margin-left: 0.25rem;
        margin-top: 0.75rem;
        padding-bottom: 0.5rem;
    }

    .timeline-details-text {
        line-height: 1.6;
        color: rgba(255, 255, 255, 0.7);
        font-size: 0.75rem;
    }

    .organization-link {
        display: inline-block;
        padding: 2px 8px;
        margin-right: 8px;
        margin-bottom: 4px;
        color: #94cbf3;
        font-size: 0.7rem;
        text-decoration: none;
        transition: all 0.2s ease;
        opacity: 0.9;
    }

    .organization-link:hover {
        color: #b8dfff;
        opacity: 1;
    }

    .timeline-category {
        color: #94cbf3;
        letter-spacing: 0.02em;
        font-weight: 400;
        margin-bottom: 1.75rem;
    }
    
    .timeline-item-inner {
        cursor: pointer;
        transition: all 0.2s;
        border-radius: 4px;
        padding: 4px 0;
    }
    
    .timeline-item-inner:hover {
        background-color: rgba(255, 255, 255, 0.03);
    }
    
    .timeline-item-inner:active {
        background-color: rgba(255, 255, 255, 0.05);
    }
    
    .timeline-date {
        color: rgba(255, 255, 255, 0.4);
        font-size: 0.75rem;
        font-style: normal;
        margin-bottom: 0.5rem;
    }
    
    .timeline-bullet {
        color: #94cbf3;
        padding-right: 4px;
    }
</style>

<Header {currentSection} />

<main class="bg-terminal-black text-terminal-white min-h-screen overflow-y-auto text-xs sm:text-sm md:text-base">
    <!-- home -->
    <section id="owal.sh" class="min-h-screen flex items-center justify-center p-2 sm:p-4 md:p-8" class:section-visible={sectionVisibility['owal.sh']}>
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
                        <TerminalText text="distributed systems" speed={100} showCursor={false} />
                    </p>
                    <p class="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                        <TerminalText text="blockchain engineering" speed={75} showCursor={false} />
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
            <p class="text-xs sm:text-sm md:text-base lg:text-lg mb-4 sm:mb-6">
                i'm a machine learning engineer with experience in big tech, startup, and research environments. my passion lies in developing innovative solutions that seamlessly incorporate ml into decentralized systems and other highly technical domains.</p>
        </div>
    </section>
      
    <!-- timeline -->
    <section id="timeline" class="min-h-screen flex items-center justify-center bg-terminal-black text-terminal-white p-2 sm:p-4 md:p-8" class:section-visible={sectionVisibility['timeline']}>
        <div class="section-content w-full max-w-3xl relative overflow-y-auto max-h-[80vh]">
            <h2 class="text-xl sm:text-2xl md:text-3xl font-bold mb-0.5 text-center sticky top-0 bg-terminal-black py-2 sm:py-4 z-10">timeline</h2>
            <p class="text-[8px] sm:text-[10px] md:text-xs text-center text-gray-400 mb-10">click events for details</p>
            
            <div class="relative mt-2 sm:mt-4 md:mt-8">
                {#each timelineEvents as theme}
                    <div class="mb-12 sm:mb-16">
                        <h3 class="timeline-category text-lg sm:text-xl md:text-2xl mb-10 pl-12 sm:pl-16 md:pl-24">{theme.theme}</h3>
                        
                        <div class="timeline-container">
                            <div class="timeline-line"></div>
                            
                            {#each theme.events as event}
                                <div class="mb-6 sm:mb-8 md:mb-10 relative timeline-item">
                                    <div class="timeline-dot" class:active={activeEvents.has(event)}></div>
                                    
                                    <div class="flex items-start pl-12 sm:pl-16 md:pl-24">
                                        <div class="w-20 sm:w-24 md:w-28 pr-4 sm:pr-6 md:pr-8 flex-shrink-0">
                                            <span class="timeline-year text-xs sm:text-sm md:text-base" class:active={activeEvents.has(event)}>
                                                {event.year}
                                            </span>
                                        </div>
                                        
                                        <div class="flex-grow">
                                            <div 
                                                class="timeline-item-inner"
                                                on:click={() => toggleEvent(event)} 
                                                on:keydown={(e) => e.key === 'Enter' && toggleEvent(event)}
                                                role="button" 
                                                tabindex="0"
                                            >
                                                <div class="timeline-desc text-xs sm:text-sm md:text-base hover:text-[#94cbf3]" 
                                                    class:text-[#94cbf3]={activeEvents.has(event)}>
                                                    {event.description}
                                                </div>
                                            </div>
                                            
                                            {#if activeEvents.has(event)}
                                                <div class="timeline-content" transition:fade={{ duration: 150 }}>
                                                    <div class="timeline-date">
                                                        {event.fullTimeline}
                                                    </div>
                                                    
                                                    {#if event.organizations && event.organizations.length > 0}
                                                        <div class="mt-2 mb-4 flex flex-wrap">
                                                            {#each event.organizations as org}
                                                                <a href={org.link} target="_blank" rel="noopener noreferrer" 
                                                                   class="organization-link">
                                                                    {org.name}
                                                                </a>
                                                            {/each}
                                                        </div>
                                                    {/if}
                                                    
                                                    <div class="timeline-details-text whitespace-pre-line mt-1">
                                                        {@html event.details
                                                            .replace(/\n/g, '<br>')
                                                            .replace(/\* /g, '<span class="timeline-bullet">•</span>')
                                                        }
                                                    </div>
                                                </div>
                                            {/if}
                                        </div>
                                    </div>
                                </div>
                            {/each}
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </section>
      

    {#if activePost}
    <div class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center" on:click|self={closeBlogPost}>
        <div class="bg-terminal-black text-terminal-white p-4 sm:p-8 rounded-lg w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 max-h-[90vh] overflow-y-auto relative" on:click|stopPropagation>
            <button class="absolute top-2 right-2 text-gray-400 hover:text-white" on:click={closeBlogPost}>×</button>
            <h3 class="text-lg sm:text-xl md:text-2xl font-bold mb-2">{activePost.title}</h3>
            <p class="text-xxs sm:text-xs md:text-sm italic mb-4">{activePost.date}</p>
            {#if activePost.images && activePost.images.length > 0}
                <div class="image-carousel mb-2">
                    {#each activePost.images as image, index}
                        <img 
                            src={image} 
                            alt={`${activePost.title} - Image ${index + 1}`} 
                            class="carousel-image" 
                            class:active={index === currentImageIndex}
                        >
                    {/each}
                </div>
                {#if activePost.images.length > 1}
                    <div class="flex justify-center mb-4">
                        <button class="px-3 py-1 bg-transparent text-white rounded-l" on:click={() => prevImage()}>-</button>
                        <button class="px-3 py-1 bg-transparent text-white rounded-r" on:click={() => nextImage()}>+</button>
                    </div>
                {/if}
            {/if}
            <div class="text-xxs sm:text-xs md:text-sm whitespace-pre-line post-content">{@html activePost.content}</div>
            {#if activePost.tags && activePost.tags.length > 0}
                <div class="mt-4">
                    {#each activePost.tags as tag}
                        <span class="inline-block bg-gray-800 rounded-full px-2 py-1 text-xxs sm:text-xs text-gray-300 mr-2 mb-2">#{tag}</span>
                    {/each}
                </div>
            {/if}
        </div>
    </div>
    {/if}

    {#if fullImageSrc}
    <div class="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center" on:click|self={closeFullImage}>
        <img src={fullImageSrc} alt="Full size image" class="max-w-full max-h-full object-contain">
        <button class="absolute top-4 right-4 text-white text-2xl" on:click={closeFullImage}>&times;</button>
    </div>
    {/if}

    <!-- links -->
    <section id="links" class="flex items-center justify-center bg-terminal-black text-terminal-white p-4 sm:p-8" class:section-visible={sectionVisibility['links']}>
        <div class="section-content w-full max-w-3xl text-center">
            <h2 class="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-8">links</h2>
            <div class="mt-3 sm:mt-6 flex justify-center space-x-2 sm:space-x-4">
                <a href="https://github.com/vowalsh" target="_blank" rel="noopener noreferrer" class="text-[#94cbf3] hover:underline text-xs sm:text-sm md:text-base">github</a>
                <a href="https://linkedin.com/in/vowalsh" target="_blank" rel="noopener noreferrer" class="text-[#94cbf3] hover:underline text-xs sm:text-sm md:text-base">linkedin</a>
                <a href="https://twitter.com/owalsh2" target="_blank" rel="noopener noreferrer" class="text-[#94cbf3] hover:underline text-xs sm:text-sm md:text-base">twitter</a>
            </div>
        </div>
    </section>
    
    <!-- footer -->
    <footer class="bg-terminal-black text-terminal-white text-center py-1 sm:py-2 fixed bottom-0 left-0 right-0 z-50">
        <p class="text-xxs sm:text-xs">&copy; {new Date().getFullYear()} v. oliver walsh. all rights reserved.</p>
        <p class="text-xxs sm:text-xs mt-1 sm:mt-2">last updated: 3/25/2025</p>
    </footer>
    
</main>
