const Footer = () => {
    return (
        <footer className="shadow-lg p-3 text-center">
            <p>
                Made With
                <span> 👉 </span>
                by Adil Nawaz
            </p>
            <ul className="flex justify-center ">
                <li className="m-2 text-lg"><a href="https://www.github.com/adilnawaz256"  rel="noreferrer" target="_blank"><i class="fa-brands fa-github"></i></a></li>
                <li className="m-2 text-lg"><a href="https://www.linkedin.com/adilnawaz256"  rel="noreferrer" target="_blank"><i class="fa-brands fa-linkedin"></i></a></li>
                <li className="m-2 text-lg"><a href="https://www.twitter.com/adilnawaz256"  rel="noreferrer" target="_blank"><i class="fa-brands fa-twitter"></i></a></li>
            </ul>
        </footer>
    )
}

export default Footer;