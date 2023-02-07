export default function Footer() {
  const currentYear = (new Date()).getFullYear();

  return (
    <div className="w-full font-clash-display flex flex-col justify-center items-center my-2 md:my-4 lg:my-6">     
        <div>
          <p className="inline-block"><small>&#169; {currentYear} Kunal</small></p>
          <span>
            <a className="ml-2 duration-200 md:ml-4 hover:underline" href="https://2knal.github.io/old" target="_blank" rel="noreferrer"><small>v0.0</small></a>
          </span>
        </div>
    </div>
  );
}
