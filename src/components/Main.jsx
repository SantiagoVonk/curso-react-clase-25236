import ProductosAPI from "./ProductosAPI";

const Main = () => {

    return (
        <main className="container py-4">
            <div className="card shadow-sm">
                <div className="card-body">
                    <ProductosAPI />
                </div>
            </div>
        </main>
    );
};

export default Main;