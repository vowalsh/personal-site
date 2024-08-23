<script>
    export let currentSection;
</script>

<nav class="fixed top-0 left-0 right-0 bg-terminal-black text-terminal-white p-2 sm:p-4 z-50 font-mono">
    <ul class="flex flex-wrap justify-center space-x-2 sm:space-x-4">
        {#each ['owal', 'about', 'timeline', 'thoughts', 'contact'] as section}
            <li>
                <a 
                    href="#{section}" 
                    class="text-sm sm:text-base hover:text-[#94cbf3] transition-colors duration-200"
                    class:text-[#94cbf3]={currentSection === section}
                    class:font-bold={section === 'owal'}
                >
                    {section === 'home' ? 'owal' : section}
                </a>
            </li>
        {/each}
    </ul>
</nav>