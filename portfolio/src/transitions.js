import { cubicIn, quintOut } from 'svelte/easing';
import { crossfade } from 'svelte/transition';

export function fadeSlide(node, {
    delay = 0,
    duration = 300,
    direction = "X",
    impulse = 100
}) {
    const o = +getComputedStyle(node).opacity;
    
    return {
        delay,
        duration,
        css: (t, u) => {
            const eased = cubicIn(u);
            return `
                opacity: ${t * o};
                transform: translate${direction}(${(eased * impulse) * 0.5}%);
            `}
    }
}

const [send, receive] = crossfade({
    duration: d => Math.sqrt(d * 300),
    fallback(node, params) {
        const style = getComputedStyle(node);
        const transform = style.transform === 'none' ? '' : style.transform;

        return {
            duration: 600,
            easing: cubicIn,
            css: t => `
                transform: ${transform} scale(${t});
                opacity: ${t};
            `
        };
    }
});

export {send, receive};
