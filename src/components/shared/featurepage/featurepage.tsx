import React from 'react'
import serviceimage from "../../../assets/Featureimages/managed_services-inner.jpg";

export const Featurepage = () => {

return(
<div >
<link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css" />
<link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css" />


<section className="relative p-4  pt-12 bg-blueGray-50">
<div className="items-center flex flex-wrap">
<div className="lg:max-w-lg  lg:ml-3 lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero"   src={serviceimage}/>
    </div>
  <div className="w-full md:w-5/12  ml-auto mr-auto px-4">
    <div className="md:pr-12">
      <div className="p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full   bg-slate-400 mt-8">
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi  bi-cloud-check-fill" viewBox="0 0 16 16">
  <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2m2.354 4.854-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
</svg>
      </div>
      <h3 className="text-3xl font-semibold">Managed Services Capabilities</h3>
      {/* <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
        The extension comes with three pre-built pages to help you get
        started faster. You can change the text and images and you're
        good to go.
      </p> */}
      <ul className="list-none mt-6">
        <li className="py-2">
          <div className="flex items-center">
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill " viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg>
            </div>
            <div>
              <h4 className="text-blueGray-500 ml-5">
              Operating system installation & upgrade
              </h4>
            </div>
          </div>
        </li>
        <li className="py-2">
          <div className="flex items-center">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill " viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg>
            </div>
            <div>
              <h4 className="text-blueGray-500 ml-5">Critical patch upgrades for Servers, Desktops and Laptops</h4>
            </div>
          </div>
        </li>
        <li className="py-2">
          <div className="flex items-center">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill " viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg>
            </div>
            <div>
              <h4 className="text-blueGray-500 ml-5"> Service pack updates, patching and application/security updates</h4>
            </div>
          </div>
        </li>

        <li className="py-2">
          <div className="flex items-center">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill " viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg>
            </div>
            <div>
              <h4 className="text-blueGray-500 ml-5"> Backup system maintenance (Upgrading, Patching and new Installation)</h4>
            </div>
          </div>
        </li>
        <li className="py-2">
          <div className="flex items-center">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill " viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg>
            </div>
            <div>
              <h4 className="text-blueGray-500 ml-5">  License renewal (Antivirus, Anti Spyware and Unified System)</h4>
            </div>
          </div>
        </li>
        <li className="py-2">
          <div className="flex items-center">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill " viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg>
            </div>
            <div>
              <h4 className="text-blueGray-500 ml-5">  Health checks (monitor and review) and systems optimisation (configure and manage)</h4>
            </div>
          </div>
        </li>
        <li className="py-2">
          <div className="flex items-center">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill " viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg>
            </div>
            <div>
              <h4 className="text-blueGray-500 ml-5"> Custom solutions development (networking , power and cooling, business productivity)</h4>
            </div>
          </div>
        </li>
        <li className="py-2">
          <div className="flex items-center">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill " viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg>
            </div>
            <div>
              <h4 className="text-blueGray-500 ml-5"> Proactive and reactive support</h4>
            </div>
          </div>
        </li>
        <li className="py-2">
          <div className="flex items-center">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill " viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg>
            </div>
            <div>
              <h4 className="text-blueGray-500 ml-5"> Onsite and remote support</h4>
            </div>
          </div>
        </li>
        <li className="py-2">
          <div className="flex items-center">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill " viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg>
            </div>
            <div>
              <h4 className="text-blueGray-500 ml-5"> Telephony system installation/upgrade and maintenance (Unify Communications System by Unify/Siemens)</h4>
            </div>
          </div>
        </li>
        <li className="py-2">
          <div className="flex items-center">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill " viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg>
            </div>
            <div>
              <h4 className="text-blueGray-500 ml-5"> Software as a Service (SaaS)</h4>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>

</section>
    </div>

    )

}
