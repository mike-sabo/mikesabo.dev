import recipesImg from '../assets/recipes.jpg'
import barbershopApiImg from '../assets/barbershop-api.svg'

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
        id: 'barbershop-api',
        title: 'barbershop-api',
        description:
            'An example API project that serves as a database of past barbershop harmony champions, with structured data for both quartet and chorus winners across years.',
        stack: ['C#', 'ASP.NET Core Web API', 'SQLite', 'Dapper', 'OpenAPI'],
        url: 'https://github.com/mike-sabo/barbershop-api',
        github: 'https://github.com/mike-sabo/barbershop-api',
        image: barbershopApiImg,
    },
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
