import "@appwrite.io/pink";


export default function Nav() {

    return (
        <header className="grid-header">
          <h2 className="grid-header-col-1 text-3xl heading-level-5 u-trim-1 text-pink-800">Snackbox</h2>
          <div className="u-flex u-gap-16 u-contents-mobile">
            <div className="grid-header-col-4 drop-wrapper">
            </div>
            <button className="grid-header-col-2 button" type="button">
              <span className="text">Subscribe</span>
            </button>
            <button className="grid-header-col-2 button" type="button">
              <span className="text">Login</span>
            </button>
          </div>
        </header>
      );

}