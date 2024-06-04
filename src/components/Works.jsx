import { useFetchProjects } from "../fetchProject"

const Works = () => {
    const {loading, projects} = useFetchProjects()
    // console.log(projects);
    if(loading){
        return (
            <section className="projects">
                <h2>Loading...</h2>
            </section>
        )
    }
    return (
        <section className="works" id="work">
                <h2 className="inner-title">Gallery</h2>
                <div className="container">
                    <div className="works-block">
                        {projects.map(item => {
                            const {id, img, title} = item
                            return (
                                <div className="works-item" key={id}>
                                    <figure>
                                        <img src={img} alt={title} />
                                        <span className="text">{title}</span>
                                    </figure>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
    )
}

export default Works