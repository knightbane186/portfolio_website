import Head from "next/head";
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import Image from "next/image";
import deved from "../public/dev-ed-wave.png";
import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';
import web1 from '../public/web1.png';
import web2 from '../public/web2.png';
import web3 from '../public/web3.png';
import web4 from '../public/web4.png';
import web5 from '../public/web5.png';
import web6 from '../public/web6.png';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Denvers Space</title>
        <meta name="description" content="Generated by  cred" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 ">
        <section className=" min-h-screen">
<nav className="py-10 mb-12 flex justify-between">
  <h1 className="text-xl font-burtons">developed by</h1>
  <ul className="flex items-center">
    <li>
      <BsFillMoonStarsFill className="cursor-pointer text-xl"/>
    </li>
    <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 " href="#">Resume</a></li>
  </ul>
</nav>
<div className="text-center p-10">
  <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Denver Lopes</h2>
  <h3 className="text-2xl py-2 md: text-3xl">Full-Stack Developer.</h3>
  <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto">
    A self-taught developer w/ pro skills in web & mobile applications development.
    Check out my projects down below and take it from there!
  </p>
</div>
<div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
<AiFillGithub/>
<AiFillLinkedin/>
</div>
<div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mx-auto overflow-hidden md:h-96 md:w-96">
  {/* now some  comps below are Next.js specific */}
  <Image src={deved}  layout="fill" objectFit="cover"/>
</div>
        </section>

<section>
  <div>
    <h3 className="text-3xl py-1">My skills package</h3>
    <p className="text-md py-2 leading-8 text-gray-800">he code snippet you provided seems to be an Axios POST request in a JavaScript environment, likely a React Native app, <span className="text-teal-500">attempting</span>  to register a user by sending data to a local server. Without more context, it's a bit difficult to <span className="text-teal-500">pinpoint</span> what might be wrong, but I'll try to point out a few potential issues</p>
    <p className="text-md py-2 leading-8 text-gray-800">he code snippet you provided  in a JavaScript environment, likely a React Native app, <span className="text-teal-500">attempting</span>  to more context, it's a bit difficult to <span className="text-teal-500">pinpoint</span> what might be wrong, but I'll try to point out a few potential issues</p>
  </div>
  <div>
    <div className="text-center shadow-lg p-10 rounded-xl my-10">
      <div className="flex justify-center">
      <Image src={design} width={100} height={100}/>
      </div>
     
      <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
      <p>Creating elegant designs suited for your needs</p>
      <h4 className="py-4 text-teal-600">Design tools I use</h4>
      <p className="text-gray-800 py-1">Photoshop</p>
      <p className="text-gray-800 py-1">Illustrator</p>
      <p className="text-gray-800 py-1">Figma</p>
    </div>
    <div className="text-center shadow-lg p-10 rounded-xl my-10">

<div className="flex justify-center">
<Image src={code} width={100} height={100}/>

</div>
      
      <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
      <p>Creating elegant designs suited for your needs</p>
      <h4 className="py-4 text-teal-600">Design tools I use</h4>
      <p className="text-gray-800 py-1">Photoshop</p>
      <p className="text-gray-800 py-1">Illustrator</p>
      <p className="text-gray-800 py-1">Figma</p>
    </div>
    <div className="text-center shadow-lg p-10 rounded-xl my-10">
      <div className="flex justify-center">  
       <Image src={consulting} width={100} height={100}/>
      </div>
      <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
      <p>Creating elegant designs suited for your needs</p>
      <h4 className="py-4 text-teal-600">Design tools I use</h4>
      <p className="text-gray-800 py-1">Photoshop</p>
      <p className="text-gray-800 py-1">Illustrator</p>
      <p className="text-gray-800 py-1">Figma</p>
    </div>
  </div>
</section>
<section>
  <div>
    <h3 className="text-3xl py-1">Portfolio</h3>
    <p className="text-md py-2 leading-8 text-gray-800">he code snippet you provided seems to be an Axios POST request in a JavaScript environment, likely a React Native app, <span className="text-teal-500">attempting</span>  to register a user by sending data to a local server. Without more context, it's a bit difficult to <span className="text-teal-500">pinpoint</span> what might be wrong, but I'll try to point out a few potential issues</p>
    <p className="text-md py-2 leading-8 text-gray-800">he code snippet you provided  in a JavaScript environment, likely a React Native app, <span className="text-teal-500">attempting</span>  to more context, it's a bit difficult to <span className="text-teal-500">pinpoint</span> what might be wrong, but I'll try to point out a few potential issues</p>
  </div>
  <div>
    <div><Image src={web1} /></div>
    <div><Image src={web2} /></div>
    <div><Image src={web3} /></div>
  </div>
</section>
      </main>
    </div>
  );
}
