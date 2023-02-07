export default function Footer() {
  const currentYear = (new Date()).getFullYear();

  return (
    <div className="w-full font-clash-display flex flex-col justify-center items-center my-2 md:my-4 lg:my-6">     
        <div>
          <p className="inline-block">
            <small>&#169; {currentYear}</small>
            <small className="ml-2">Kunal</small>
            <small className="ml-2">v0.1</small>
          </p>
        </div>
    </div>
  );
}
