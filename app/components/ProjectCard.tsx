'use client'
import { Button } from '@/components/ui/button';
import { animated, useInView } from '@react-spring/web'
import Link from 'next/link';
import { ProjectCardProps } from '../types/ProjectCard';
import { cn } from '@/lib/utils';

// https://github.com/juanzenn

export function ProjectCard({ id, title, description, repo_link, case_study_url }: ProjectCardProps) {
    const [ref, springs] = useInView(
        () => ({
            from: {
                opacity: 0,
                y: 100,
            },
            to: {
                opacity: 1,
                y: 0,
                delay: 200
            },
        })
    );

    return (
        <animated.div style={springs} ref={ref} className="rounded shadow-sm p-8 grid lg:grid-cols-2 min-h-[400px] grid-flow-col gap-8 mb-8 lg:mb-16 dark:bg-gray-950">
            <div className={cn("flex flex-col justify-between", { 'order-2': id % 2 === 0 })}>
                <h2 className="text-4xl">
                    <b className="font-bold">{title}</b>
                </h2>
                <p>{description}
                </p>
                <div className="flex gap-4">
                    <Button>
                        <Link target='_blank' href={`/cases/${case_study_url}`}>
                            See case study
                        </Link>
                    </Button>
                    <Button variant={"outline"}>
                        <Link target='_blank' href={repo_link}>
                            See code in github
                        </Link >
                    </Button>
                </div>
            </div>
            <div className={cn({ 'order-1': id % 2 === 0 })}>
                <div className="h-full w-full bg-slate-100 rounded-md"></div>
            </div>
        </animated.div>
    );
}
