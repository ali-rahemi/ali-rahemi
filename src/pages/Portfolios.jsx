
import './Portfolios.css';






function Portfolios() {
    return (
        <div className="collection-page">
            <div className="collections">
                <section className="collection1">
                    <a href="/collection-images">
                        <img className="collection1-img" src="./Images/collection-img1.JPG" />
                    </a>
                    <div className="collection1-texts">
                        <a href="/collection-images">
                            <h1 className="collection1-name">Recycle</h1>
                        </a>
                        </div>
                </section>
                <section className="collection2">
                    <a href="/collection-images2">
                        <img className="collection2-img" src="./Images/collection-img2.JPG" />
                    </a>
                    <div className="collection2-texts">
                        <a href="/collection-images2">
                            <h1 className="collection2-name">Autoimmune disease</h1>
                        </a>
                    </div>
                </section>
            </div>
        </div>
           
            );
}

export default Portfolios;