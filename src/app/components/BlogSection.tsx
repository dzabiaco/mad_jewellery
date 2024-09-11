import BlogPostItem from "@/app/components/BlogPostItem";


export default function BlogSection(){
    return (
        <section className="latest-blog-area section-padding pt-0">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <h2 className="title">latest blogs</h2>
                            <p className="sub-title">There are latest blog posts</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="blog-carousel-active slick-row-10 slick-arrow-style">
                            <BlogPostItem/>
                            <BlogPostItem/>
                            <BlogPostItem/>
                            <BlogPostItem/>
                            <BlogPostItem/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}