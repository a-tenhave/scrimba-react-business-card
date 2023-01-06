export default function Info() {
    return (
        <div className="info">
            <img src="src/assets/ProfielfotoAGtenHave.jpg" className="info--img"/>
            <h1 className="info--name">Anna ten Have</h1>
            <h3 className="info--title">Frontend Developer</h3>
            <h5 className="info--website">annatenhave.website</h5>
            <div className="info--btns">
                <button className="info--btn info--btn-mail"><i class="bi-btn bi-envelope-fill"></i>Email</button>
                <button className="info--btn info--btn-linkedin"><i class="bi-btn bi-linkedin"></i>LinkedIn</button>
            </div>
        </div>
    )
}
