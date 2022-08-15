export default function Footer(){
  return <footer className="bg-brand_purple-600 text-brand_purple-100 font-medium p-4">

    <div className="flex flex-col md:grid md:grid-cols-3 items-center gap-4 max-w-screen-2xl justify-center m-auto">
      <img src="/images/precisionwhite.png" alt="precision logo" width={200} />

      <div className="text-center flex flex-col items-center gap-2">
        <h3 className="font-semibold text-lg">
          Contact Us
        </h3>
        <address className="not-italic max-w-max flex flex-col justify-center items-center">
          <p>
            16912 145th St, West Burlington, IA 52655
          </p>
          <a href="mailto:info@precisioncoatingsiowa.com">
            info@precisioncoatingsiowa.com
          </a>
          <a href="tel:3193924639">
            +1 &#40;319&#41; 392-4639
          </a>
        </address>

        <small>&copy; 2021 Precision Coatings - All Rights Reserved</small>

      </div>
    </div>

  </footer>
}