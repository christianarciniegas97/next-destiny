export default function Footer(){
    return(
        <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
        <nav>
            <h6 className="footer-title">Legales</h6>
            <a className="link link-hover">Terminos y condiciones</a>
            <a className="link link-hover">Politica de privacidad</a>
        </nav>
          <form>
                <h6 className="footer-title">Newsletter</h6>
                <fieldset className="w-80">
                <label>Ingresa tu email para recibir novedades y plus</label>
                <div className="join">
                    <input
                    type="text"
                    placeholder="username@site.com"
                    className="input input-bordered join-item" />
                    <button className="btn btn-primary join-item">Subscribete</button>
                </div>
                </fieldset>
            </form>
        </footer>

    )
}