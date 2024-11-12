"use client";
import {useState} from "react";
import HomePortfolioItem from "@/app/components/HomePortfolioItem";
import {useLocale} from "use-intl";
import Link from "next/link";

type Project = {
    id: number,
    category: string,
    title: string,
    description: string,
    coverImage: string,
    images: string[]
};

interface HomePortfolioProps {
    tabs: string[] | null;
    projects: Project[];
}

export default function HomePortfolio({ tabs, projects } : any) {
    const locale = useLocale();

    const getLocalePath = (path: string) => {
        // Check if the path already includes the locale
        if (!path.startsWith(`/${locale}`)) {
            return `/${locale}${path}`;
        }
        return path;
    };

    const [selectedTab, setSelectedTab] = useState('Hallways');

    const filteredProjects = selectedTab === 'Hallways'
        ? projects as any
        : projects.filter( (project:any) => project.category === selectedTab);

    return (
        <section className="container portfolio py-5" id="portfolio">
            <div className="heading">
                <h2 className="title col-12 text-center" data-aos="fade-up" data-aos-delay="100">
                    Our portfolio
                </h2>
            </div>
            <div className="p-4">
                {tabs && tabs.length > 0 && (
                    <div className="grid grid-cols-2 gap-4 mb-4 sm:grid-cols-3 md:grid-cols-4">
                        {tabs.map( (tab:any) => (
                            <button
                                key={tab}
                                onClick={() => setSelectedTab(tab)}
                                className={`flex-1 min-w-[120px] py-2 px-4 rounded-md 
                                    ${selectedTab === tab ? 'bg-yellow-400 text-white' : 'bg-gray-200 text-gray-700'} 
                                    hover:bg-yellow-400 transition 
                                    sm:flex-none sm:w-auto`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                )}
                <div className="row portfolio-row gy-4 gx-4">
                    {filteredProjects.map( (project:any) => (
                        <HomePortfolioItem
                            key={project.id}
                            project={project}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}