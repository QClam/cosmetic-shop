import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import React from "react";

function Footer() {
  return (
    <footer className="bg-slate-900 shadow-md p-4">
      <div className="container mx-auto pt-4 max-w-7xl">
        <div className="min-h-16">
          <div className="flex flex-col justify-between items-center md:flex-row py-10">
            <h2 className="text-white text-4xl font-bold">
              Subscribe Our Newsletter
            </h2>
            <form className="md:w-1/3 w-full mt-8 md:mt-0 relative">
              <input
                type="text"
                className="bg-white text-stone-400 p-4 rounded shadow-md w-full"
                placeholder="Enter Your Email"
              />
              <button className="bg-gray-200 py-3 px-4 rounded-full absolute right-3 top-1">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-slate-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-4 gap-4">
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ex laboriosam dignissimos iusto ut nam! Nemo quae maxime eaque error!
              </p>
              <div className="flex items-center gap-8 my-4">
                <Facebook
                  size={40}
                  color="black"
                  className="bg-white rounded-full p-2"
                />
                <Youtube
                  size={40}
                  color="black"
                  className="bg-white rounded-full p-2"
                />
                <Twitter
                  size={40}
                  color="black"
                  className="bg-white rounded-full p-2"
                />
                <Instagram
                  size={40}
                  color="black"
                  className="bg-white rounded-full p-2"
                />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Pages</h2>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>FAQs</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Categories</h2>
              <ul>
                <li>Beauty</li>
                <li>Fragrances</li>
                <li>Furniture</li>
                <li>Groceries</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Address</h2>
              <p>To 22, Ap Bac 2, Xa Hoa Long, Ba Ria - Vung Tau</p>
              <p>+84 979 926 542</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-center text-white mt-4">Copyright &copy; 2025 Hoang Xuan Quy</div>
    </footer>
  );
}

export default Footer;
