export const Navbar = () => {
    return (
        <div className="navbar-container flex justify-between text-black border-b-[0.1px] border-yellow  ">
            <div className="logo-container ml-10 my-5">
                <h1 className="text-3xl font-logoTitle font-bold">Brew Me A Lattee</h1>
            </div>
            <div className="dashboard-container flex mr-10 my-5">
                {/* <img src="/images/user.png" className="h-8 mr-4"></img> */}
                <a href="#" className="text-lg">Dashboard</a>
            </div>
        </div>
    )
}