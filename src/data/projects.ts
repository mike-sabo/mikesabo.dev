import recipesImg from '../assets/recipes.jpg'

export interface Project {
    id: string
    title: string
    description: string
    stack: string[]
    url: string
    github: string
    image?: string
}

export const projects: Project[] = [
    {
        id: 'recipes',
        title: 'Recipes',
        description:
            'A headless recipe app powered by Sanity CMS and built with Next.js 16 (App Router). Features recipe cards, individual recipe pages with ingredients and step-by-step instructions, prep/cook time, and tags.',
        stack: ['Next.js 16', 'Sanity', 'Tailwind CSS', 'TypeScript'],
        url: 'https://recipes.mikesabo.dev',
        github: 'https://github.com/mike-sabo/recipes',
        image: recipesImg,
    },
]
