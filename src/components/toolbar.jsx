


function Toolbar() {
    return (
        <div className="toolbar">
            <a href="/">
            <img   className="signature"  src="./images/signature.svg"/>
            </a>
            <a href="/portfolios">
            <button >Portfolios</button>
            </a>
            <a  href="/abaut">
            <button >About</button>
            </a>
            <a   href="/works">
            <button  >Art Works</button>
            </a>
            {/* <a  href="/publications">
            <button >PUBLICATIONS</button>
            </a> */}
            <a href="/contact">
            <button >Contact</button>
            </a>
        </div>
    );


}

export default Toolbar;