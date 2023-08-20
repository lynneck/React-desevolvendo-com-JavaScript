import './rodape.css'

const Rodape = () => {
    return (

        <footer className='footer'>
            <section>
                <ul>
                    <li>
                        <a href="https://pt-br.facebook.com/login/device-based/regular/login/" target='-blank'>
                            <img src="./imagens/fb.png" alt='facebook' />
                        </a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href='https://twitter.com/i/flow/login' target='-blank'>
                        <img src="./imagens/tw.png" alt='twitter'/>
                        </a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href='https://www.instagram.com/' target='-blank'>
                             <img src="./imagens/ig.png" alt='instagram'/>
                        </a>
                    </li>
                </ul>
            </section>

            <section>
                <img src="./imagens/logo.png" alt='logo' />
            </section>
            <section>
                <p>
                    Desenvolvido por Alura.
                </p>
            </section>
        </footer>
    )
}

export default Rodape