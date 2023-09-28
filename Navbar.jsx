import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const [navToggle, setNavToggle] = useState(false);

  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then( () => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'You are logged out',
        showConfirmButton: false,
        timer: 1500
      })
     })
    .catch(error => console.log(error));
  }


  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setNavToggle(false); // Close the mobile menu after clicking a link
  };

  return (
    <div className="bg-[#fff8f5] text-[#474747] flex flex-wrap justify-center gap-4 p-4 lg:px-14 lg:pl-20">
      <nav className="navbar sticky top-0 z-10 bg-[#fff8f5]">
        <div className="flex-1">
          <a href="/">
            <img src="src/assets/logo.png" alt="Logo" className="h-12" />
          </a>
        </div>
        <div
          className={`absolute ${
            navToggle ? "left-0" : "left-[-120%]"
          } top-[4.5rem] flex w-full flex-col bg-[#fff8f5] pb-3 pt-2 transition-all duration-300 lg:static lg:w-[unset] lg:flex-row lg:bg-transparent lg:pb-0 lg:pt-0 dark:lg:bg-transparent`}
        >
          <ul className="  gap-4 menu menu-horizontal flex-col px-1 lg:flex-row">
            <li className="mx-auto">
              <Link to="/" onClick={() => scrollToSection("home")}>
                Home
              </Link>
            </li>
            <li className="mx-auto">
              <a href="#portfolio" onClick={() => scrollToSection("portfolio")}>
                Our Portfolio
              </a>
            </li>
            <li className="mx-auto">
              <Link to="dashboard" onClick={() => scrollToSection("team")}>
                Dashboard
              </Link>
            </li>
            <li className="mx-auto">
              <a href="#contact" onClick={() => scrollToSection("contact")}>
                Contact Us
              </a>
            </li>
          </ul>

          {  user ? <>
          {/* <span>{user?.displayName}</span> */}
            <button onClick={handleLogOut} className="bg-[#F63E7B] text-[#FFFFFF] hover:bg-pink-400 py-2 px-6 rounded text-sm font-semibold transition duration-300 ease-in-out transform hover:scale-105">
               Logout
              </button>
          </> : <>
            <Link to="login">
              <button className="bg-[#F63E7B] text-[#FFFFFF] hover:bg-pink-400 py-2 px-6 rounded text-sm font-semibold transition duration-300 ease-in-out transform hover:scale-105">
                {" "}
                Login{" "}
              </button>
            </Link>
            </>
          }

        </div>

        <label className="swap-rotate swap btn-ghost btn-circle btn ml-2 bg-[#fff8f5] lg:hidden">
          <input
            checked={navToggle}
            onChange={() => setNavToggle((pre) => !pre)}
            type="checkbox"
          />
          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>
          <svg
            className="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
      </nav>
    </div>
  );
};

export default Navbar;
