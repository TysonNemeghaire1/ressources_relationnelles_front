import React from "react";
import {
  FaLinkedin,
  FaSquareFacebook,
  FaSquareXTwitter,
  FaYoutube,
} from "react-icons/fa6";

function Banner() {
  return (
    <div className="flex w-screen items-center bg-footer-gradient min-h-24">
      <div className="mx-auto flex items-center justify-between flex-col lg:flex-row w-4/5">
        <p className="text-lg font-bold">SUIVEZ NOUS SUR LES RÉSEAUX SOCIAUX</p>
        <ul className="flex gap-3">
          <li>
            <a href="#">
              <FaSquareFacebook
                title="Facebook"
                className="rounded-lg p-1 text-4xl font-bold hover:bg-opacity-15 hover:bg-white"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <FaSquareXTwitter
                title="X (Ancien Twitter)"
                className="rounded-lg p-1 text-4xl font-bold hover:bg-opacity-15 hover:bg-white"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <FaLinkedin
                title="Linkedin"
                className="rounded-lg p-1 text-4xl font-bold hover:bg-opacity-15 hover:bg-white"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <FaYoutube
                title="Youtube"
                className="rounded-lg p-1 text-4xl font-bold hover:bg-opacity-15 hover:bg-white"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Banner;
