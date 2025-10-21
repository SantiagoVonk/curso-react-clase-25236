
const Gallery = () => {
    
    const imagenes = [  "https://tse4.mm.bing.net/th/id/OIP.XhcVhsfRjHkwxNKReZdWXgHaEc?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3", 
                        "https://www.clarin.com/img/2021/03/07/ya7Ju4kLh_1256x620__1.jpg",
                        "https://tse3.mm.bing.net/th/id/OIP.KR2ttfKNwWSRWvIdRNwpwAHaE8?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"]

    
    return (
        <section style={{display:"flex", gap:"10px", justifyContent:"center", marginTop:"20px"}}>
            {imagenes.map((imagen,index) => (
                <img key={index} src= {imagen} width={"400px"}></img>
            ))}

        </section>
    )
}

export default Gallery;