import Link from "next/link";
import {useLocale} from "use-intl";

interface Project {
    id: number;
    category: string;
    title: string;
    description: string;
}
interface HomePortfolioItemProps {
    project: Project;
}

export default function HomePortfolioItem({project}: HomePortfolioItemProps){

    const locale = useLocale();

    const getLocalePath = (path: string) => {
        // Check if the path already includes the locale
        if (!path.startsWith(`/${locale}`)) {
            return `/${locale}${path}`;
        }
        return path;
    };

    const imagePath = "../../../static/images/portfolio/";

    return (
        <div className="col-md-6 col-lg-4 mx-auto mobile ">
            <div className="portfolio-item">
                <Link href={getLocalePath(`/products/${project.id}`)}>
                    <img src={`${imagePath}1.webp`} className="gallery-item" alt="portfolio-img"/>
                </Link>
                <div className="img-overlay">
                    <div className="content">
                        <Link href={getLocalePath(`/products/${project.id}`)} className="text-yellow-400 hover:no-underline hover:text-yellow-500">
                            <h3>{project.title}</h3>
                        </Link>
                        <h6>{project.category}</h6>
                        <div className="link mt-3 mb-3">
                            <Link className="px-4 py-2 bg-yellow-400 text-white rounded-md hover:no-underline hover:bg-yellow-500 transition-colors duration-300"
                                  href={getLocalePath(`/products/${project.id}`)}>view project</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}