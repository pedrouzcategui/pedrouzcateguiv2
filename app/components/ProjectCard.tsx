'use client'
import { Button } from '@/components/ui/button';
import { animated } from '@react-spring/web'

export function ProjectCard() {
    return (
        <animated.div className="rounded shadow-sm p-4 grid lg:grid-cols-2 min-h-[400px] grid-flow-col gap-4 mb-8 lg:mb-16">
            <div className="flex flex-col justify-between">
                <h2 className="text-4xl">
                    <b className="font-bold">Heritage Keeper</b>
                </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab illum
                    laborum minima omnis, consequuntur dolorum perspiciatis at nulla
                    praesentium. Officia necessitatibus corrupti veniam quasi! Laudantium
                    architecto cum ullam totam temporibus?
                </p>
                <div className="flex gap-4">
                    <Button>See case study</Button>
                    <Button variant={"outline"}>See code in github</Button>
                </div>
            </div>
            <div>
                <div className="h-full w-full bg-slate-100 rounded-md"></div>
            </div>
        </animated.div>
    );
}
