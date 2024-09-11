import Link from "next/link";


export default function BlogPostItem(){
    return (
        <div className="blog-post-item">
            <figure className="blog-thumb">
                <Link href="blog-details.html">
                    <img src="../../../static/images/blog/blog-img1.jpg" alt="blog image"/>
                </Link>
            </figure>
            <div className="blog-content">
                <div className="blog-meta">
                    <p>25/03/2019 | <a href="#">Corano</a></p>
                </div>
                <h5 className="blog-title">
                    <Link href="blog-details.html">Celebrity Daughter Opens Up About Having Her Eye
                        Color Changed</Link>
                </h5>
            </div>
        </div>
    );
}