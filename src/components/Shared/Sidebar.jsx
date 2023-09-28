import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "../../styles/app.css";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaPlus, FaUserPlus, } from "react-icons/fa";
import { BiCart } from "react-icons/bi";
import { CgUserList } from "react-icons/cg";

import { PiStack, PiChatDots } from "react-icons/pi";

const Sidebar = () => {
  const { user } = useContext(AuthContext);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Event handler to toggle the drawer open/close state
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="drawer  lg:drawer-open">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-[#FFFFFF] text-[#0C0C0C]">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              className={`btn btn-square btn-ghost ${
                isDrawerOpen ? "close-icon-open" : ""
              }`}
              onClick={toggleDrawer}
            >
              {isDrawerOpen ? (
                // Close icon (you can replace this with your own SVG or icon library)
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                // Hamburger icon (you can replace this with your own SVG or icon library)
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              )}
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">Drawer Title</div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              {user ? (
                <>
                  <li>
                    <span className="font-semibold">{user?.displayName}</span>
                  </li>
                </>
              ) : (
                <> </>
              )}
            </ul>
          </div>
        </div>

        <Outlet />
        {/* Page content here */}
      </div>

      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-64 min-h-full bg-[#FFFFFF] text-[#878787] font-semibold">
          {/* Sidebar content here */}
          <li>
            <a href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 48"
                fill="none"
                className="h-8 mb-6"
              >
                <path
                  d="M47.7726 23.1226L43.9791 19.3826C43.0228 18.4426 41.9072 17.6746 40.6827 17.1133C41.4214 15.5249 41.8046 13.798 41.806 12.0505V6.87012C41.806 6.44859 41.4594 6.10684 41.0318 6.10684H35.7775C34.0048 6.10789 32.2531 6.48533 30.6416 7.21359C30.0723 6.00627 29.2934 4.90639 28.34 3.96355L24.5466 0.223474C24.2443 -0.0744914 23.7542 -0.0744914 23.4519 0.223474L19.6584 3.96355C18.705 4.90639 17.9261 6.00627 17.3568 7.21359C15.7458 6.48561 13.9947 6.10808 12.2225 6.10684H6.96817C6.54063 6.10684 6.194 6.44859 6.194 6.87012V12.0505C6.19506 13.7982 6.57789 15.5252 7.31655 17.1141C6.092 17.6754 4.97642 18.4433 4.02012 19.3833L0.226664 23.1234C-0.0755545 23.4215 -0.0755545 23.9046 0.226664 24.2027L4.02012 27.9427C4.97642 28.8827 6.092 29.6507 7.31655 30.212C6.57818 31.8004 6.19525 33.5268 6.194 35.2741V40.4544C6.194 40.876 6.54063 41.2177 6.96817 41.2177H12.2225C13.9952 41.2167 15.7469 40.8392 17.3584 40.111C17.9277 41.3183 18.7066 42.4182 19.66 43.361L23.4534 47.1011C23.7557 47.399 24.2458 47.399 24.5481 47.1011L28.3416 43.361C29.295 42.4182 30.0739 41.3183 30.6432 40.111C32.2542 40.839 34.0053 41.2165 35.7775 41.2177H41.0318C41.4594 41.2177 41.806 40.876 41.806 40.4544V35.2741C41.8049 33.5263 41.4221 31.7993 40.6834 30.2105C41.908 29.6492 43.0236 28.8812 43.9799 27.9412L47.7733 24.2012C48.0749 23.903 48.0745 23.4204 47.7726 23.1226ZM31.2114 8.63635C32.6408 7.97687 34.1995 7.63454 35.7775 7.6334H40.2577V12.0505C40.257 13.6068 39.91 15.1441 39.2412 16.5538C38.1169 16.2066 36.9456 16.0298 35.7674 16.0295H35.4578C33.8304 16.029 32.2211 16.3671 30.7353 17.0217C31.3993 15.5568 31.7422 13.9702 31.7417 12.3657V12.0604C31.7419 10.8992 31.5631 9.74463 31.2114 8.63635ZM35.4578 17.556H35.7674C36.6819 17.5578 37.5919 17.6822 38.4724 17.9255C38.0665 18.53 37.5995 19.0926 37.0789 19.6047L36.9148 19.7665C34.8862 21.7767 32.1265 22.9035 29.2504 22.8959L25.8689 22.899L28.34 20.4626C30.2237 18.5953 32.7867 17.5487 35.4578 17.556ZM30.1934 12.0604V12.3657C30.2007 14.999 29.1391 17.5257 27.2453 19.3826L24.7742 21.8197V18.4819C24.7665 15.6463 25.9094 12.9254 27.9483 10.9254L28.1124 10.7636C28.6318 10.2503 29.2024 9.79004 29.8156 9.3897C30.0638 10.259 30.1909 11.1575 30.1934 12.0604ZM20.7547 5.04282L24 1.84315L27.2453 5.04282C28.0923 5.88071 28.78 6.86153 29.276 7.93871C28.458 8.43284 27.7007 9.01856 27.0193 9.68433L26.8552 9.84614C25.5904 11.0939 24.6162 12.5981 24 14.2541C23.3839 12.5983 22.4099 11.0946 21.1456 9.84691L20.9815 9.68509C20.2998 9.01904 19.5423 8.43303 18.724 7.93871C19.22 6.86162 19.9077 5.88081 20.7547 5.04282ZM17.8066 12.0604C17.8084 11.1588 17.9345 10.2617 18.1813 9.39352C18.7945 9.79377 19.3651 10.2541 19.8845 10.7674L20.0486 10.9292C22.0875 12.9292 23.2304 15.6501 23.2227 18.4857V21.8235L20.7516 19.3871C18.8578 17.5287 17.7973 15.0001 17.8066 12.3657V12.0604ZM19.6592 20.4626L22.1311 22.899H18.7457C15.8696 22.9065 13.1099 21.7797 11.0814 19.7695L10.9172 19.6077C10.3966 19.0957 9.92977 18.533 9.52372 17.9285C10.4054 17.6839 11.3167 17.5586 12.2326 17.556H12.5422C15.2131 17.5489 17.7758 18.5955 19.6592 20.4626ZM7.74234 7.6334H12.2225C13.801 7.63406 15.3602 7.9762 16.7901 8.63558C16.4379 9.74406 16.2585 10.8988 16.2583 12.0604V12.3657C16.2578 13.9702 16.6007 15.5568 17.2647 17.0217C15.7789 16.3671 14.1696 16.029 12.5422 16.0295H12.2326C11.0547 16.0294 9.88371 16.2056 8.75961 16.5523C8.09072 15.1431 7.74351 13.6063 7.74234 12.0505V7.6334ZM5.1148 26.8619L1.86946 23.6623L5.1148 20.4626C5.96465 19.6276 6.95946 18.9495 8.05201 18.4605C8.55319 19.267 9.14728 20.0136 9.82255 20.6855L9.98668 20.8473C11.2523 22.0942 12.7779 23.0547 14.4575 23.6623C12.7782 24.2698 11.2529 25.23 9.98745 26.4765L9.82332 26.6383C9.14776 27.3104 8.55339 28.0572 8.05201 28.864C6.95956 28.3751 5.96475 27.697 5.1148 26.8619ZM16.7886 38.6882C15.3593 39.3477 13.8005 39.69 12.2225 39.6912H7.74234V35.2741C7.74302 33.7177 8.09005 32.1805 8.75884 30.7707C9.88313 31.118 11.0544 31.2948 12.2326 31.2951H12.5422C14.1696 31.2956 15.7789 30.9574 17.2647 30.3028C16.6007 31.7677 16.2578 33.3543 16.2583 34.9588V35.2641C16.2582 36.4254 16.437 37.5799 16.7886 38.6882ZM12.5422 29.7685H12.2326C11.3181 29.7666 10.4081 29.6424 9.52759 29.3991C9.93355 28.7946 10.4005 28.2319 10.9211 27.7199L11.0852 27.5581C13.1138 25.5479 15.8735 24.4211 18.7496 24.4286L22.1311 24.4256L19.66 26.8619C17.7764 28.7292 15.2133 29.7759 12.5422 29.7685ZM17.8066 35.2641V34.9588C17.7993 32.3256 18.8609 29.7989 20.7547 27.942L23.2258 25.5048V28.8427C23.2335 31.6782 22.0906 34.3991 20.0517 36.3991L19.8876 36.5609C19.3682 37.0742 18.7976 37.5346 18.1844 37.9348C17.9363 37.0657 17.8092 36.1672 17.8066 35.2641ZM27.2453 42.2817L24 45.4814L20.7547 42.2817C19.9081 41.4449 19.2203 40.4655 18.724 39.3897C19.5422 38.8944 20.2994 38.3073 20.9807 37.6402L21.1448 37.4784C22.4095 36.2306 23.3838 34.7265 24 33.0705C24.6161 34.7262 25.5901 36.23 26.8544 37.4776L27.0185 37.6395C27.7 38.3066 28.4575 38.8936 29.276 39.3889C28.7798 40.465 28.092 41.4447 27.2453 42.2817ZM30.1934 35.2641C30.1915 36.1658 30.0655 37.0629 29.8187 37.931C29.2055 37.5308 28.6349 37.0704 28.1155 36.5571L27.9514 36.3953C25.9125 34.3953 24.7696 31.6744 24.7773 28.8388V25.5048L27.2484 27.9412C29.1412 29.7988 30.2017 32.3257 30.1934 34.9588V35.2641ZM28.3408 26.8619L25.8689 24.4256H29.2543C32.1304 24.418 34.8901 25.5448 36.9186 27.555L37.0828 27.7168C37.6034 28.2289 38.0702 28.7915 38.4763 29.396C37.5946 29.6407 36.6834 29.766 35.7674 29.7685H35.4578C32.787 29.7757 30.2243 28.729 28.3408 26.8619ZM40.2577 39.6912H35.7775C34.199 39.6905 32.6398 39.3483 31.2099 38.689C31.5621 37.5805 31.7415 36.4257 31.7417 35.2641V34.9588C31.7422 33.3543 31.3993 31.7677 30.7353 30.3028C32.2211 30.9574 33.8304 31.2956 35.4578 31.2951H35.7674C36.9453 31.2952 38.1163 31.1189 39.2404 30.7722C39.9093 32.1814 40.2565 33.7182 40.2577 35.2741V39.6912ZM42.8852 26.8619C42.0364 27.6966 41.0431 28.3747 39.9519 28.864C39.4495 28.0573 38.8541 27.3107 38.1774 26.6391L38.0133 26.4773C36.7477 25.2304 35.2221 24.2698 33.5425 23.6623C35.2218 23.0548 36.7471 22.0946 38.0126 20.8481L38.1767 20.6862C38.8533 20.0144 39.4487 19.2675 39.9511 18.4605C41.0423 18.9499 42.0357 19.628 42.8844 20.4626L46.1305 23.6623L42.8852 26.8619Z"
                  fill="#F63E7B"
                />
                <path
                  d="M59.5681 25.252V24.136H59.9461C60.2821 24.136 60.6181 24.034 60.9541 23.83C61.2901 23.626 61.5721 23.29 61.8001 22.822C62.0401 22.354 62.1601 21.73 62.1601 20.95V10.114C62.1601 9.73 62.0761 9.466 61.9081 9.322C61.7401 9.178 61.5601 9.106 61.3681 9.106H60.4861V8.08H67.0921V9.106H66.2281C66.0241 9.106 65.8381 9.184 65.6701 9.34C65.5021 9.484 65.4181 9.754 65.4181 10.15V20.932C65.4181 21.748 65.2741 22.432 64.9861 22.984C64.6981 23.536 64.3081 23.98 63.8161 24.316C63.3361 24.652 62.7961 24.892 62.1961 25.036C61.5961 25.18 60.9781 25.252 60.3421 25.252H59.5681Z"
                  fill="black"
                  fill-opacity="0.85"
                />
                <path
                  d="M73.4661 21.112C71.8341 21.112 70.6161 20.68 69.8121 19.816C69.0081 18.94 68.6061 17.716 68.6061 16.144C68.6061 14.452 69.0081 13.18 69.8121 12.328C70.6281 11.464 71.7741 11.032 73.2501 11.032C74.6181 11.032 75.6921 11.398 76.4721 12.13C77.2641 12.862 77.6601 13.942 77.6601 15.37V16.342H71.7921C71.8161 17.494 72.0321 18.34 72.4401 18.88C72.8481 19.408 73.4301 19.672 74.1861 19.672C74.8101 19.672 75.3141 19.522 75.6981 19.222C76.0941 18.922 76.3941 18.55 76.5981 18.106C76.7901 18.178 76.9461 18.292 77.0661 18.448C77.1861 18.604 77.2461 18.79 77.2461 19.006C77.2461 19.354 77.1141 19.69 76.8501 20.014C76.5981 20.338 76.1901 20.602 75.6261 20.806C75.0741 21.01 74.3541 21.112 73.4661 21.112ZM74.5281 15.118C74.5281 14.218 74.4321 13.522 74.2401 13.03C74.0601 12.526 73.7541 12.274 73.3221 12.274C72.8781 12.274 72.5181 12.52 72.2421 13.012C71.9781 13.492 71.8401 14.194 71.8281 15.118H74.5281Z"
                  fill="black"
                  fill-opacity="0.85"
                />
                <path
                  d="M79.027 20.932V19.906H79.099C79.495 19.906 79.813 19.834 80.053 19.69C80.293 19.534 80.413 19.174 80.413 18.61V13.534C80.413 13.006 80.311 12.67 80.107 12.526C79.903 12.382 79.603 12.31 79.207 12.31H79.153V11.284H83.095L83.455 12.832H83.545C83.821 12.208 84.163 11.758 84.571 11.482C84.979 11.194 85.543 11.05 86.263 11.05C86.959 11.05 87.469 11.206 87.793 11.518C88.117 11.818 88.279 12.208 88.279 12.688C88.279 13.312 88.051 13.774 87.595 14.074C87.139 14.362 86.533 14.506 85.777 14.506C85.777 14.014 85.723 13.636 85.615 13.372C85.507 13.108 85.285 12.976 84.949 12.976C84.601 12.976 84.325 13.132 84.121 13.444C83.929 13.756 83.791 14.134 83.707 14.578C83.623 15.022 83.581 15.43 83.581 15.802V18.7C83.581 19.228 83.689 19.564 83.905 19.708C84.121 19.84 84.403 19.906 84.751 19.906H85.363V20.932H79.027Z"
                  fill="black"
                  fill-opacity="0.85"
                />
                <path
                  d="M92.094 9.736C91.602 9.736 91.188 9.622 90.852 9.394C90.528 9.166 90.366 8.824 90.366 8.368C90.366 7.9 90.528 7.558 90.852 7.342C91.188 7.114 91.602 7 92.094 7C92.562 7 92.97 7.114 93.318 7.342C93.678 7.558 93.858 7.9 93.858 8.368C93.858 8.824 93.678 9.166 93.318 9.394C92.97 9.622 92.562 9.736 92.094 9.736ZM89.196 20.932V19.906H89.412C89.724 19.906 90 19.822 90.24 19.654C90.492 19.486 90.618 19.15 90.618 18.646V13.462C90.618 13.006 90.492 12.7 90.24 12.544C89.988 12.388 89.712 12.31 89.412 12.31H89.124V11.284H93.768V18.682C93.768 19.174 93.888 19.504 94.128 19.672C94.38 19.828 94.662 19.906 94.974 19.906H95.172V20.932H89.196Z"
                  fill="black"
                  fill-opacity="0.85"
                />
                <path
                  d="M96.2202 20.932V19.906H96.2742C96.6822 19.906 97.0002 19.834 97.2282 19.69C97.4682 19.546 97.5882 19.21 97.5882 18.682V13.462C97.5882 12.97 97.4802 12.658 97.2642 12.526C97.0602 12.382 96.7602 12.31 96.3642 12.31H96.3102V11.284H100.432L100.666 12.49H100.756C101.044 11.986 101.398 11.62 101.818 11.392C102.25 11.152 102.808 11.032 103.492 11.032C104.44 11.032 105.166 11.308 105.67 11.86C106.186 12.4 106.444 13.276 106.444 14.488V18.628C106.444 19.18 106.528 19.534 106.696 19.69C106.876 19.834 107.164 19.906 107.56 19.906H107.632V20.932H103.294V15.136C103.294 14.356 103.21 13.756 103.042 13.336C102.874 12.916 102.562 12.706 102.106 12.706C101.758 12.706 101.482 12.838 101.278 13.102C101.086 13.354 100.948 13.69 100.864 14.11C100.78 14.518 100.738 14.962 100.738 15.442V18.736C100.738 19.228 100.84 19.546 101.044 19.69C101.26 19.834 101.566 19.906 101.962 19.906H102.016V20.932H96.2202Z"
                  fill="black"
                  fill-opacity="0.85"
                />
                <path
                  d="M109.95 13.318L109.032 8.08H112.2L111.282 13.318H109.95Z"
                  fill="black"
                  fill-opacity="0.85"
                />
                <path
                  d="M118.164 21.112C117.216 21.112 116.466 21.016 115.914 20.824C115.362 20.632 114.966 20.38 114.726 20.068C114.486 19.744 114.366 19.384 114.366 18.988C114.366 18.616 114.456 18.334 114.636 18.142C114.816 17.938 115.044 17.794 115.32 17.71C115.596 17.626 115.878 17.584 116.166 17.584C116.166 18.376 116.352 18.964 116.724 19.348C117.096 19.732 117.582 19.924 118.182 19.924C118.782 19.924 119.208 19.816 119.46 19.6C119.724 19.372 119.856 19.114 119.856 18.826C119.856 18.454 119.688 18.16 119.352 17.944C119.016 17.716 118.452 17.476 117.66 17.224C116.628 16.9 115.842 16.504 115.302 16.036C114.774 15.568 114.51 14.902 114.51 14.038C114.51 13.018 114.882 12.268 115.626 11.788C116.37 11.296 117.354 11.05 118.578 11.05C119.37 11.05 120.006 11.134 120.486 11.302C120.966 11.47 121.314 11.686 121.53 11.95C121.758 12.214 121.872 12.484 121.872 12.76C121.872 13.18 121.722 13.498 121.422 13.714C121.122 13.93 120.636 14.038 119.964 14.038C119.964 13.45 119.808 12.994 119.496 12.67C119.196 12.346 118.794 12.184 118.29 12.184C117.918 12.184 117.594 12.268 117.318 12.436C117.054 12.604 116.922 12.85 116.922 13.174C116.922 13.414 116.988 13.624 117.12 13.804C117.252 13.972 117.48 14.134 117.804 14.29C118.14 14.446 118.614 14.62 119.226 14.812C119.814 15.004 120.336 15.226 120.792 15.478C121.248 15.73 121.602 16.048 121.854 16.432C122.106 16.816 122.232 17.296 122.232 17.872C122.232 18.856 121.884 19.642 121.188 20.23C120.492 20.818 119.484 21.112 118.164 21.112Z"
                  fill="black"
                  fill-opacity="0.85"
                />
                <path
                  d="M60.6841 40.932V40.176H60.9181C61.3261 40.176 61.6741 40.104 61.9621 39.96C62.2501 39.804 62.3941 39.444 62.3941 38.88V30.06C62.3941 29.532 62.2441 29.196 61.9441 29.052C61.6561 28.908 61.3141 28.836 60.9181 28.836H60.6841V28.08H65.7421C67.2541 28.08 68.3701 28.416 69.0901 29.088C69.8101 29.748 70.1701 30.666 70.1701 31.842C70.1701 32.55 70.0141 33.216 69.7021 33.84C69.4021 34.464 68.8981 34.968 68.1901 35.352C67.4821 35.736 66.5341 35.928 65.3461 35.928H64.2121V38.97C64.2121 39.498 64.3561 39.834 64.6441 39.978C64.9441 40.11 65.2921 40.176 65.6881 40.176H66.2821V40.932H60.6841ZM65.1661 35.082C66.2581 35.082 67.0381 34.842 67.5061 34.362C67.9861 33.87 68.2261 33.054 68.2261 31.914C68.2261 30.906 68.0161 30.162 67.5961 29.682C67.1761 29.19 66.4561 28.944 65.4361 28.944H64.2121V35.082H65.1661Z"
                  fill="black"
                  fill-opacity="0.85"
                />
                <path
                  d="M74.9494 41.112C74.1454 41.112 73.4794 40.878 72.9514 40.41C72.4234 39.942 72.1594 39.216 72.1594 38.232C72.1594 37.272 72.4954 36.564 73.1674 36.108C73.8514 35.652 74.8834 35.4 76.2634 35.352L77.7574 35.298V34.218C77.7574 33.786 77.7214 33.408 77.6494 33.084C77.5774 32.748 77.4214 32.484 77.1814 32.292C76.9414 32.1 76.5754 32.004 76.0834 32.004C75.6274 32.004 75.2794 32.088 75.0394 32.256C74.7994 32.424 74.6374 32.658 74.5534 32.958C74.4814 33.246 74.4454 33.582 74.4454 33.966C73.9414 33.966 73.5574 33.882 73.2934 33.714C73.0414 33.534 72.9154 33.24 72.9154 32.832C72.9154 32.412 73.0594 32.076 73.3474 31.824C73.6474 31.572 74.0434 31.392 74.5354 31.284C75.0274 31.164 75.5674 31.104 76.1554 31.104C77.2594 31.104 78.0814 31.338 78.6214 31.806C79.1734 32.274 79.4494 33.078 79.4494 34.218V38.88C79.4494 39.384 79.5334 39.726 79.7014 39.906C79.8694 40.086 80.1574 40.176 80.5654 40.176H80.6194V40.932H78.1894L77.9014 39.384H77.7574C77.5054 39.72 77.2594 40.02 77.0194 40.284C76.7794 40.536 76.4974 40.74 76.1734 40.896C75.8614 41.04 75.4534 41.112 74.9494 41.112ZM75.3634 39.996C76.0954 39.996 76.6774 39.774 77.1094 39.33C77.5414 38.874 77.7574 38.262 77.7574 37.494V36.036L76.6054 36.09C75.5854 36.138 74.8774 36.348 74.4814 36.72C74.0974 37.08 73.9054 37.614 73.9054 38.322C73.9054 39.438 74.3914 39.996 75.3634 39.996Z"
                  fill="black"
                  fill-opacity="0.85"
                />
                <path
                  d="M82.392 40.932V40.176H82.446C82.854 40.176 83.202 40.104 83.49 39.96C83.778 39.804 83.922 39.444 83.922 38.88V33.264C83.922 32.736 83.772 32.4 83.472 32.256C83.184 32.112 82.842 32.04 82.446 32.04H82.392V31.284H85.164L85.506 33.066H85.596C85.752 32.706 85.92 32.376 86.1 32.076C86.28 31.776 86.52 31.542 86.82 31.374C87.12 31.194 87.534 31.104 88.062 31.104C88.722 31.104 89.208 31.218 89.52 31.446C89.844 31.674 90.006 31.998 90.006 32.418C90.006 32.79 89.874 33.096 89.61 33.336C89.358 33.576 88.932 33.696 88.332 33.696C88.332 33.204 88.26 32.85 88.116 32.634C87.972 32.406 87.726 32.292 87.378 32.292C87.042 32.292 86.76 32.424 86.532 32.688C86.304 32.952 86.124 33.288 85.992 33.696C85.86 34.104 85.764 34.53 85.704 34.974C85.644 35.406 85.614 35.796 85.614 36.144V38.97C85.614 39.498 85.758 39.834 86.046 39.978C86.346 40.11 86.694 40.176 87.09 40.176H87.594V40.932H82.392Z"
                  fill="black"
                  fill-opacity="0.85"
                />
                <path
                  d="M90.9006 40.932V40.176H91.1346C91.5426 40.176 91.8906 40.104 92.1786 39.96C92.4666 39.804 92.6106 39.444 92.6106 38.88V29.232C92.6106 28.704 92.4606 28.368 92.1606 28.224C91.8726 28.08 91.5306 28.008 91.1346 28.008H90.9006V27.252H94.3026V38.88C94.3026 39.444 94.4466 39.804 94.7346 39.96C95.0226 40.104 95.3706 40.176 95.7786 40.176H96.0126V40.932H90.9006Z"
                  fill="black"
                  fill-opacity="0.85"
                />
                <path
                  d="M101.801 41.112C100.505 41.112 99.4849 40.698 98.7409 39.87C97.9969 39.042 97.6249 37.782 97.6249 36.09C97.6249 34.41 97.9789 33.162 98.6869 32.346C99.4069 31.518 100.463 31.104 101.855 31.104C103.151 31.104 104.171 31.518 104.915 32.346C105.659 33.162 106.031 34.41 106.031 36.09C106.031 37.782 105.671 39.042 104.951 39.87C104.243 40.698 103.193 41.112 101.801 41.112ZM101.837 40.176C102.737 40.176 103.367 39.834 103.727 39.15C104.099 38.454 104.285 37.434 104.285 36.09C104.285 34.746 104.099 33.738 103.727 33.066C103.355 32.394 102.719 32.058 101.819 32.058C100.919 32.058 100.283 32.394 99.9109 33.066C99.5509 33.738 99.3709 34.746 99.3709 36.09C99.3709 37.434 99.5569 38.454 99.9289 39.15C100.301 39.834 100.937 40.176 101.837 40.176Z"
                  fill="black"
                  fill-opacity="0.85"
                />
                <path
                  d="M112.334 41.112C111.386 41.112 110.654 40.836 110.138 40.284C109.622 39.72 109.364 38.82 109.364 37.584V33.264C109.364 32.736 109.214 32.4 108.914 32.256C108.626 32.112 108.284 32.04 107.888 32.04H107.834V31.284H111.056V37.494C111.056 38.274 111.188 38.88 111.452 39.312C111.716 39.744 112.214 39.96 112.946 39.96C113.738 39.96 114.314 39.696 114.674 39.168C115.034 38.628 115.214 37.92 115.214 37.044V33.336C115.214 32.772 115.07 32.418 114.782 32.274C114.494 32.118 114.146 32.04 113.738 32.04H113.684V31.284H116.906V38.97C116.906 39.498 117.05 39.834 117.338 39.978C117.638 40.11 117.986 40.176 118.382 40.176H118.436V40.932H115.574L115.34 39.474H115.25C114.878 40.146 114.446 40.59 113.954 40.806C113.462 41.01 112.922 41.112 112.334 41.112Z"
                  fill="black"
                  fill-opacity="0.85"
                />
                <path
                  d="M119.835 40.932V40.176H119.889C120.297 40.176 120.645 40.104 120.933 39.96C121.221 39.804 121.365 39.444 121.365 38.88V33.264C121.365 32.736 121.215 32.4 120.915 32.256C120.627 32.112 120.285 32.04 119.889 32.04H119.835V31.284H122.607L122.949 33.066H123.039C123.195 32.706 123.363 32.376 123.543 32.076C123.723 31.776 123.963 31.542 124.263 31.374C124.563 31.194 124.977 31.104 125.505 31.104C126.165 31.104 126.651 31.218 126.963 31.446C127.287 31.674 127.449 31.998 127.449 32.418C127.449 32.79 127.317 33.096 127.053 33.336C126.801 33.576 126.375 33.696 125.775 33.696C125.775 33.204 125.703 32.85 125.559 32.634C125.415 32.406 125.169 32.292 124.821 32.292C124.485 32.292 124.203 32.424 123.975 32.688C123.747 32.952 123.567 33.288 123.435 33.696C123.303 34.104 123.207 34.53 123.147 34.974C123.087 35.406 123.057 35.796 123.057 36.144V38.97C123.057 39.498 123.201 39.834 123.489 39.978C123.789 40.11 124.137 40.176 124.533 40.176H125.037V40.932H119.835Z"
                  fill="black"
                  fill-opacity="0.85"
                />
              </svg>
            </a>
          </li>
          <li>
            <Link to="book" className="hover:text-[#F63E7B]">
            <BiCart className="w-[20px] h-[20px]"/>
              Book
            </Link>
          </li>
          <li>
            <Link to="bookinglist" className="hover:text-[#F63E7B]">
            <CgUserList className="w-[20px] h-[20px]" />
              Booking list
            </Link>
          </li>
          <li>
            <Link to="review" className="hover:text-[#F63E7B]">
            <PiChatDots className="w-[20px] h-[20px]"/>
              Review
            </Link>
          </li>

          <li>
            <Link to="orderlist" className="hover:text-[#F63E7B]">
             <PiStack className="w-[20px] h-[20px]"/>
              Order list
            </Link>
          </li>

          <li>
            <Link to="addservice" className="hover:text-[#F63E7B]">
             <FaPlus/>
              Add service
            </Link>
          </li>

          <li>
            <Link to="makeadmin" className="hover:text-[#F63E7B]">
             <FaUserPlus/>
             Make Admin
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
