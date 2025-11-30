const AcercaDe = () => {
    
    return (
        <div className="container py-5">

            <div className="text-center mb-4">
                <h1 className="fw-bold">Acerca de Nosotros</h1>
                <p className="text-muted">Conoce más sobre nuestra misión y productos</p>
            </div>

            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card shadow p-4 text-center">

                        <img
                            src="https://www.liderlogo.es/wp-content/uploads/2023/03/productos.jpg"
                            alt="Productos"
                            className="img-fluid rounded mb-3"
                            style={{ maxHeight: "350px", objectFit: "cover" }}
                        />

                        <p className="fs-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Doloremque et illo perferendis laboriosam. Sint aut aliquam 
                            laudantium repudiandae in ab illo nesciunt explicabo tenetur 
                            eius dignissimos, modi debitis exercitationem corrupti.
                        </p>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default AcercaDe;