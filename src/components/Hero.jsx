import cake from "../assets/cake.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

function Hero() {
  return (
    <div className="grid grid-cols-2">
      <div>
        <h3 className="text-pink-500 text-xl font-semibold">
          Suggestion for you
        </h3>
        <h1 className="text-8xl font-bold">
          Strawberry <span className="text-pink-500">Cake</span>
        </h1>
        <p className="text-gray-600 font-medium mt-12 pr-48">
          Canada&apos;s most delicious cupcakes for business meetings,
          birthdays, weddings. Our cupcakes are baked daily using the finest
          ingredients.
        </p>
        <div className="flex mt-12 space-x-8 items-center">
          <button className="font-bold px-8 py-3 rounded-lg border border-solid border-gray-950">
            Order Now
          </button>
          <div className="flex items-center space-x-3">
            <FontAwesomeIcon
              icon={faPhoneVolume}
              style={{ color: "#fe62a6" }}
              className="w-6 h-6"
            />
            <a
              href="#"
              className="text-pink-500 font-bold underline underline-offset-2"
            >
              647-478-9464
            </a>
          </div>
        </div>
        <p className="mt-48 font-medium text-gray-600">Scroll Down</p>
      </div>
      <img src={cake} alt="" />
    </div>
  );
}

export default Hero;
