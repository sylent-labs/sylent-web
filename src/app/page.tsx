import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Projects from '@/components/sections/Projects';

export default function Page() {
    return (
        <main>
            <Hero />
            <Services />
            <Projects />
            <About />
        </main>
    );
}
