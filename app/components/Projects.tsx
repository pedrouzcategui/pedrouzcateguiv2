import { ProjectCard } from "./ProjectCard";
import { ProjectCardProps } from "@/app/types/ProjectCard";

const DUMMY_PROJECTS: ProjectCardProps[] = [
    {
        id: 1,
        title: 'Heritage Keeper',
        description: 'Heritage Keeper is a web application dedicated to save your all family memories in one place. All your memories will be saved and transmitted to your next generations in a fully organized way based in your family members; and grouping memories into albums.',
        case_study_url: "heritage-keeper",
        repo_link: 'https://github.com/juanzenn/codicon-24'
    },
    {
        id: 2,
        title: 'Zippy',
        description: 'Zippy is an Open Source Typescript Library that helps you create zips easily, compatible with Node.js and with Next.js, rated as the best way to zip files in the web.',
        case_study_url: "zippy",
        repo_link: 'https://github.com/pedrouzcategui/zippy',
    },
    {
        id: 3,
        title: 'CockRoach Killer',
        description: 'Little project made on Arduino with Python, it does employ image recognition to identify cockroaches within a perimeter and it then activates a custom made laser to kill them',
        case_study_url: 'cockroach-killer',
        repo_link: ""

    }
]

export default function Projects() {
    return (
        <>
            {
                DUMMY_PROJECTS.map((project, i) => <ProjectCard key={`${project.title}-${i}`} {...project} />)
            }
        </>
    );
}

