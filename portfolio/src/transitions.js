import { cubicIn } from 'svelte/easing';

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