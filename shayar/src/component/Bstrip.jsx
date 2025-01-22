function Bstrip() {
    return (
        <div
            className="container-fluid"
            style={{
                position: "fixed",
                bottom: 0,
                left: 0,
                width: "100%",
                zIndex: 1000, // Ensures it stays on top of other content
            }}
        >
            <div className="row nave">
                <div className="col-md-4" />
                <div className="col-md-4 text-white text-center">
                    <span>prateekxri</span>
                </div>
                <div className="col-md-4" />
            </div>
        </div>
    );
}
export default Bstrip;