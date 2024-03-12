import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div className=" px-6 py-3 gap-8 flex justify-between items-center">
        <div className="flex gap-4 text-sm items-center">
          <a className=" " href="#">
            <img
              className=" w-28 rounded-lg"
              src="data:image/png;base64,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"
              alt=""
            />
          </a>

          <a className=" flex foot-link" href="#">
            Templates
            <svg
              className=" w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="rgba(255,255,255,1)"
            >
              <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
            </svg>
            <p className=" bg-red-500 text-white rounded-full px-1 pt-1 text-xs">
              New
            </p>
          </a>

          <a className=" flex foot-link" href="#">
            Products
            <svg
              className=" w-6 "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="rgba(255,255,255,1)"
            >
              <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
            </svg>
          </a>
          <a className=" flex foot-link" href="#">
            Solutions
            <svg
              className=" w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="rgba(255,255,255,1)"
            >
              <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
            </svg>
          </a>
          <a className=" flex foot-link" href="#">
            Resources
            <svg
              className=" w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="rgba(255,255,255,1)"
            >
              <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
            </svg>
          </a>
          <a className=" flex foot-link" href="#">
            Business
            <svg
              className=" w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="rgba(255,255,255,1)"
            >
              <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
            </svg>
            <p className=" bg-red-500 text-white rounded-full px-1 pt-1 text-xs">
              New
            </p>
          </a>
          <a className=" flex foot-link" href="#">
            Download
            <svg
              className=" w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="rgba(255,255,255,1)"
            >
              <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
            </svg>
          </a>
        </div>
        <div className=" flex text-sm items-center gap-3">
          <a className=" px-3" href="#">
            <svg
              width="2em"
              height="1.7em"
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              fill="none"
              role="presentation"
              xmlns="http://www.w3.org/2000/svg"
              className="lv_feedback-icon"
            >
              <g>
                <path
                  data-follow-fill="currentColor"
                  d="M11 16.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM12 6a4 4 0 0 0-3.969 3.501c-.034.274.193.499.469.499h1c.276 0 .494-.227.562-.495A2.001 2.001 0 0 1 14 10c0 .566-.135.847-.269 1.025-.162.216-.39.379-.786.643l-.04.026c-.352.235-.85.567-1.236 1.081-.35.466-.573 1.029-.645 1.726-.027.274.2.499.476.499h1c.276 0 .49-.227.544-.497.05-.253.138-.412.225-.528.162-.216.39-.379.786-.643l.04-.026c.352-.235.85-.567 1.236-1.081.43-.572.669-1.29.669-2.225a4 4 0 0 0-4-4Z"
                  fill="currentColor"
                ></path>
                <path
                  data-follow-fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"
                  fill="currentColor"
                ></path>
              </g>
            </svg>
          </a>
          <a className=" bg-[#212124] bg-2 px-3 py-2 rounded-lg" href="#">
            Sign in
          </a>
          <a
            className="bg-[#00cae0] bg-3 text-black  px-3 py-2 rounded-lg"
            href="#"
          >
            Sign up
          </a>
        </div>
      </div>
      <div className=" text-center mt-32">
        <p className=" text-5xl font-bold ">
          Free all-in-one video editor for everyone to <br /> create anything
          anywhere
        </p>
        <p className=" mt-8 mb-10 text-[#7a7a81]">
          Flexible editing, magical AI tools, team collaboration, and stock
          assets. Make video creation like never before.
        </p>
        <button className="bg-[#00cae0] bg-3 text-black px-36 py-4 font-bold rounded-lg">
          Sign up for free
        </button>
        <p className=" mt-14 mb-10 text-sm text-[#7a7a81]"> Available on</p>
        <div className=" flex gap-6 justify-center">
          <button className=" bg-[#2c2c2d] bg-4 px-8 py-4 rounded-lg">
            <svg
              width="3em"
              height="3em"
              viewBox="0 0 36 36"
              preserveAspectRatio="xMidYMid meet"
              fill="none"
              role="presentation"
              xmlns="http://www.w3.org/2000/svg"
              className="pc_landing-edit-online-default-icon mx-auto py-2"
            >
              <g>
                <path
                  d="M3 9a3 3 0 0 1 3-3h24a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V9Zm3 18V13.5h24V27H6Zm.5-15.75a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm6.5-1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  data-follow-fill="#E6E6E6"
                  fill="currentColor"
                ></path>
              </g>
            </svg>
            <p>Edit video online</p>
          </button>
          <button className=" bg-[#2c2c2d] bg-4 px-8 py-4 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="rgba(255,255,255,1)"
              className=" w-8 py-2 mx-auto"
            >
              <path d="M11.6734 7.22198C10.7974 7.22198 9.44138 6.22598 8.01338 6.26198C6.12938 6.28598 4.40138 7.35397 3.42938 9.04597C1.47338 12.442 2.92538 17.458 4.83338 20.218C5.76938 21.562 6.87338 23.074 8.33738 23.026C9.74138 22.966 10.2694 22.114 11.9734 22.114C13.6654 22.114 14.1454 23.026 15.6334 22.99C17.1454 22.966 18.1054 21.622 19.0294 20.266C20.0974 18.706 20.5414 17.194 20.5654 17.11C20.5294 17.098 17.6254 15.982 17.5894 12.622C17.5654 9.81397 19.8814 8.46998 19.9894 8.40998C18.6694 6.47798 16.6414 6.26198 15.9334 6.21398C14.0854 6.06998 12.5374 7.22198 11.6734 7.22198ZM14.7934 4.38998C15.5734 3.45398 16.0894 2.14598 15.9454 0.849976C14.8294 0.897976 13.4854 1.59398 12.6814 2.52998C11.9614 3.35798 11.3374 4.68998 11.5054 5.96198C12.7414 6.05798 14.0134 5.32598 14.7934 4.38998Z"></path>
            </svg>
            <p>Download for Mac</p>
          </button>
        </div>
        <div className=" mt-12">
          <svg
            className=" w-8 mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="rgba(255,255,255,1)"
          >
            <path d="M12 19.1642L18.2071 12.9571L16.7929 11.5429L12 16.3358L7.20711 11.5429L5.79289 12.9571L12 19.1642ZM12 13.5143L18.2071 7.30722L16.7929 5.89301L12 10.6859L7.20711 5.89301L5.79289 7.30722L12 13.5143Z"></path>
          </svg>
          <p className=" mt-5 text-[#7a7a81] ">Explore more features</p>
        </div>
        <div className=" mt-24">
          <p>Trusted by</p>
          <div className=" flex justify-center gap-14">
            <img
              className=" w-24"
              src="https://lf16-web-buz.capcut.com/obj/capcut-web-buz-sg/ies/lvweb_os_monorepo/platformSSR/345825e43f9b98b1-205.webp"
              alt=""
            />
            <img
              className=" w-24"
              src="https://lf16-web-buz.capcut.com/obj/capcut-web-buz-sg/ies/lvweb_os_monorepo/platformSSR/9bd5ab79b9f08f8d-246.webp"
              alt=""
            />
            <img
              className=" w-20"
              src="https://lf16-web-buz.capcut.com/obj/capcut-web-buz-sg/ies/lvweb_os_monorepo/platformSSR/6cb68cbb32323aea-153.webp"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="">
        <p className=" text-4xl font-bold text-center mt-44">
          Use templates to quickly create your <br /> own ads!
        </p>
        <div className=" flex gap-8 justify-center mt-16">
          <video
            className="w-52 rounded-lg"
            src="https://v16-cc.capcut.com/dd7da5b95477ef9d9ce1f8bdb3c30da4/65eefc2f/video/tos/alisg/tos-alisg-ve-8fe9aq-sg/o8tbvBhqCFrUxQtj4jQfhllfIB3t2Br8Pgzcur/?a=348188&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=1834&bt=917&bti=NTo2NmY1NDM6&cs=0&ds=3&ft=GAAO2Inz7ThOAIymXq8Zmo&mime_type=video_mp4&qs=0&rc=PGVmZGc6Z2Y8aTQ1NzVpZ0BpM2tkdzg6Zmo6aTMzOGVkNEAuMzVhMzAzNjMxYzNeYzJeYSNwX3FpcjRvMnJgLS1kYi1zcw%3D%3D&l=021709642529078fdbddc5100ff2f01ffffffff000007e19fe3ea&btag=e00088000"
          ></video>
          <video
            className="w-52 rounded-lg"
            src="https://v16-cc.capcut.com/76695c6464ec11fac6c5749694f5b039/65eefc30/video/tos/alisg/tos-alisg-ve-8fe9aq-sg/oETumsfB5Izi5IQCCo5gNNh3kHUdtHYBQBZf4B/?a=348188&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=2038&bt=1019&bti=NTo2NmY1NDM6&cs=0&ds=3&ft=GAAO2Inz7ThOAIymXq8Zmo&mime_type=video_mp4&qs=0&rc=ZGRmNDZkZjw4aWU3NGU2M0BpM3M1bTs6ZnZ4ajMzOGVkNEBeYTBgMDAvNTIxXjRiNV9eYSNoYV9vcjRnLzBgLS1kYi1zcw%3D%3D&l=021709642529078fdbddc5100ff2f01ffffffff000007e19fe3ea&btag=e00088000"
          ></video>
          <video
            className="w-52 rounded-lg"
            src="https://v16-cc.capcut.com/cb9ea33b71b6e3478b9fbeaf25b47e36/65eefc2b/video/tos/alisg/tos-alisg-ve-8fe9aq-sg/ocgFAQYonlwefFfnADb7KmUQjeOydQG6HBm2NL/?a=348188&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=1032&bt=516&bti=NTo2NmY1NDM6&cs=0&ds=3&ft=GAAO2Inz7ThOAIymXq8Zmo&mime_type=video_mp4&qs=0&rc=Nzg4Zjk6OzozNTczNTRmNEBpam1lcDM6Zjl5ajMzOGVkNEA0MGNjXmNeXjExLy4xXl8wYSNtMF5ncjQwcy9gLS1kYi1zcw%3D%3D&l=021709642529078fdbddc5100ff2f01ffffffff000007e19fe3ea&btag=e00088000"
          ></video>
          <video
            className="w-52 rounded-lg"
            src="https://v16-cc.capcut.com/c2ec4cbf8057f808ed2fd587054f1b08/65eefc29/video/tos/alisg/tos-alisg-ve-8fe9aq-sg/oIyIo0BWOAmIOBfWBAtUQDCQBAXOw4toiIxzhy/?a=348188&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=2306&bt=1153&bti=NTo2NmY1NDM6&cs=0&ds=3&ft=GAAO2Inz7ThOAIymXq8Zmo&mime_type=video_mp4&qs=0&rc=aGdpZmQ6ZzM7MzkzNTo0N0BpMzl0NzQ6Zjp2ajMzOGVkNEA0YDFjYi0tX18xLS0zXi0xYSNtby5fcjRfNS1gLS1kYi1zcw%3D%3D&l=021709642529078fdbddc5100ff2f01ffffffff000007e19fe3ea&btag=e00088000"
          ></video>
          <video
            className="w-52 rounded-lg"
            src="https://v16-cc.capcut.com/adfc307dc8801b91affc81b261bc58f9/65eefc30/video/tos/alisg/tos-alisg-ve-8fe9aq-sg/ocQOogBVtUvBCWnk6eosbUzbEnduLDEgQOyfBU/?a=348188&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=2372&bt=1186&bti=NTo2NmY1NDM6&cs=0&ds=3&ft=GAAO2Inz7ThOAIymXq8Zmo&mime_type=video_mp4&qs=0&rc=NWQ0NzQ2O2RmMzYzO2Q3aEBpM2R4bWg6ZmxsajMzOGVkNEA0YGItLmExNWMxNDMyNTIvYSMuYmJycjRvZzBgLS1kYi1zcw%3D%3D&l=021709642529078fdbddc5100ff2f01ffffffff000007e19fe3ea&btag=e00088000"
          ></video>
          <video
            className="w-52 rounded-lg"
            src="https://v16-cc.capcut.com/961ad6788ad075822d090a67d09d178b/65eefc2d/video/tos/maliva/tos-maliva-v-be9c48-us/okGygne5nowFIONfHXegSPryXCbiICCQDNgwTD/?a=348188&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=1432&bt=716&bti=NTo2NmY1NDM6&cs=0&ds=3&ft=GAAO2Inz7ThOAIymXq8Zmo&mime_type=video_mp4&qs=0&rc=Zzo5PDo1ODlnN2dlOjo3N0BpM2U3aDk6ZnZtajMzN2doM0A1YTAtYDUtNjQxYzFeMS8xYSNmazBycjRnczBgLS1kNjZzcw%3D%3D&l=021709642529078fdbddc5100ff2f01ffffffff000007e19fe3ea&btag=e00088000"
          ></video>
        </div>
        <div className=" text-center mt-32">
          <button className="bg-[#00cae0] bg-3 text-black px-3 py-2 font-bold text-sm rounded-lg">
            {" "}
            View all
          </button>
        </div>
      </div>
      <div className=" text-center mt-80">
        <p className=" text-8xl font-bold text-center text-gradient-2 pb-2">
          Smart tools. <br /> High efficiency.
        </p>
        <p className=" mt-5 text-[#7a7a81]">
          Smart tools to make your video creation easier
        </p>
      </div>
      <div className="mt-56 mx-40 mb-24">
        <div className=" flex gap-2 justify-center">
          <button className=" bg-[#2a2a2a] px-6 pb-3 rounded-xl">
            <img
              className=" w-10 mx-auto py-4"
              src="https://p16-capcut-va.ibyteimg.com/tos-maliva-i-6rr7idwo9f-us/b7ba2555388b4d9595d5ecda9c6da797~tplv-6rr7idwo9f-image.image"
              alt=""
            />
            <p className="">
              Remove <br /> background
            </p>
          </button>
          <button className=" bg-[#2a2a2a] px-3 pb-3 rounded-xl">
            <img
              className=" w-10 mx-auto py-4"
              src="https://p16-capcut-va.ibyteimg.com/tos-maliva-i-6rr7idwo9f-us/fe0bff2d8d2143378119520062741d35~tplv-6rr7idwo9f-image.image"
              alt=""
            />
            <p className=" pb-6">Image upscaler</p>
          </button>
          <button className=" bg-[#2a2a2a] px-7 rounded-xl">
            <img
              className=" w-10 mx-auto py-4"
              src="https://p16-capcut-va.ibyteimg.com/tos-maliva-i-6rr7idwo9f-us/01b6834f026a4753810a702b823259a6~tplv-6rr7idwo9f-image.image"
              alt=""
            />
            <p className=" pb-3">
              AI color <br /> correction
            </p>
          </button>
          <button className=" bg-[#2a2a2a] px-6 rounded-xl">
            <img
              className=" w-10 mx-auto py-4"
              src="https://p16-capcut-va.ibyteimg.com/tos-maliva-i-6rr7idwo9f-us/45d646ea4f3240a79d475979b4a2498c~tplv-6rr7idwo9f-image.image"
              alt=""
            />
            <p className=" pb-3">
              Old photo <br /> restoration
            </p>
          </button>
          <button className=" bg-[#2a2a2a] px-2 rounded-xl">
            <img
              className=" w-10 mx-auto pb-4"
              src="https://p16-capcut-va.ibyteimg.com/tos-maliva-i-6rr7idwo9f-us/6e75afe2e01d45dfadc35864e1153425~tplv-6rr7idwo9f-image.image"
              alt=""
            />
            <p className=" pb-5">Photo colorizer</p>
          </button>
          <button className=" bg-[#2a2a2a] px-7 rounded-xl">
            <img
              className=" w-10 mx-auto pt-1"
              src="https://p16-capcut-va.ibyteimg.com/tos-maliva-i-6rr7idwo9f-us/fe3166bfe473422dbe2afdcce722ea89~tplv-6rr7idwo9f-image.image"
              alt=""
            />
            <p className=" pt-4">
              Portrait <br /> generator
            </p>
          </button>
          <button className=" bg-[#2a2a2a] px-4 rounded-xl">
            <img
              className=" w-10 mx-auto pb-4"
              src="https://p16-capcut-va.ibyteimg.com/tos-maliva-i-6rr7idwo9f-us/c9e9e30673ff4f849ca7f95cb6701a90~tplv-6rr7idwo9f-image.image"
              alt=""
            />
            <p className="pb-5">Resize video</p>
          </button>
          <button className=" bg-[#2a2a2a] px-2 rounded-xl">
            <img
              className=" w-10 mx-auto pb-4"
              src="https://p16-capcut-va.ibyteimg.com/tos-maliva-i-6rr7idwo9f-us/1c2ab42ad5d346d79bc3cfe482e3f337~tplv-6rr7idwo9f-image.image"
              alt=""
            />
            <p className="pb-5">Video upscaler</p>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-12 mx-44">
        <div className="col-span-5 my-auto">
          <p className="text-4xl font-bold ">
            Remove <br /> background
          </p>
          <p className=" my-4 text-[#7a7a81]">
            Accurately remove the background of the <br /> portrait video and
            replace it with uploaded <br /> image or change the background
            color.
          </p>
          <a
            className="bg-[#00cae0] bg-3 text-black text-sm font-semibold px-4 py-2 rounded-lg flex items-center gap-2 w-32"
            href="#"
          >
            Try to free
            <svg
              className="w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
          </a>
        </div>
        <div className="col-span-7">
          <video
            className=" rounded-lg"
            src="https://p16-capcut-va.ibyteimg.com/tos-maliva-i-6rr7idwo9f-us/4ac2c75058fe48b1b0f9375436a98416~tplv-6rr7idwo9f-image.image"
          ></video>
        </div>
      </div>
      <div className=" mt-60 mb-20">
        <p className=" text-8xl font-bold text-center text-gradient-2 pb-2 mb-24">
          Powerful <br /> features, easy <br /> steps
        </p>
        <div className="grid grid-cols-12 mx-44">
          <div className="col-span-7">
            <video
              className=" rounded-lg"
              src="https://lf16-web-buz.capcut.com/obj/capcut-web-buz-sg/ies/lvweb_os_monorepo/platformSSR/media/speech_to_text.6c86d729.mp4"
            ></video>
          </div>
          <div className="col-span-5 my-auto mx-16">
            <p className="text-4xl font-bold ">Speech to text</p>
            <p className=" my-4 text-[#7a7a81]">
              Automatically recognize different <br /> languages and generate
              high-accuracy <br /> captions to boost your editing efficiency.
            </p>
            <a
              className="bg-[#00cae0] bg-3 text-black text-sm font-semibold px-4 py-2 rounded-lg flex items-center gap-2 w-32"
              href="#"
            >
              Try to free
              <svg
                className="w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 mx-44">
        <div className="col-span-5 my-auto">
          <p className="text-4xl font-bold ">Text to speech</p>
          <p className=" my-4 text-[#7a7a81]">
            Convert any text to natural-sounding <br /> speech with one click.
            11 voices and 10 <br /> languages supported.
          </p>
          <a
            className="bg-[#00cae0] bg-3 text-black text-sm font-semibold px-4 py-2 rounded-lg flex items-center gap-2 w-32"
            href="#"
          >
            Try to free
            <svg
              className="w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
          </a>
        </div>
        <div className="col-span-7">
          <video
            className=" rounded-lg"
            src="https://lf16-web-buz.capcut.com/obj/capcut-web-buz-us/common/videos/text_to_speech.mp4"
          ></video>
        </div>
      </div>
      <div className=" bg-[#1c1d21] text-center py-32 mt-24">
        <p className="text-4xl font-semibold ">Create together. Work better.</p>
        <p className="mt-3 text-[#7a7a81]">
          Collaborate with your team. Share ideas, assets, and give feedback
          instantly and securely.
        </p>
        <button className="bg-[#00cae0] bg-3 text-black text-sm font-semibold px-4 py-2 rounded-lg mt-10">
          Work together
        </button>
        <video
          className="mx-auto w-9/12 rounded-lg mt-20"
          src="https://lf16-web-buz.capcut.com/obj/capcut-web-buz-sg/ies/lvweb_os_monorepo/platformSSR/media/create_together.ea339d0c.mp4"
        ></video>
      </div>
      <div className="mx-44">
        <p className="text-5xl font-semibold text-center mt-36">
          Enrich your video content with commercial <br /> resources
        </p>
        <div className=" grid grid-cols-2 gap-6 mt-14">
          <div className="flex border border-[#1c1c1f] px-7 py-6 rounded-lg">
            <div className="">
              <p className=" text-lg">Music</p>
              <p className=" text-2xl font-semibold">500,000+</p>
              <svg
                width="1.8em"
                height="1.8em"
                viewBox="0 0 40 41"
                preserveAspectRatio="xMidYMid meet"
                fill="none"
                role="presentation"
                xmlns="http://www.w3.org/2000/svg"
                className="pc_landing_enrich_resources-itemList-item-icon mt-40"
              >
                <g>
                  <path
                    d="M33.826 5.266A1 1 0 0 1 35 6.251V27.07h-.052a6.667 6.667 0 1 1-3.282-4.942V9.708L15 12.648v17.088h-.002a6.667 6.667 0 1 1-3.331-5.941V10.012a1 1 0 0 1 .826-.984l21.333-3.762Zm-2.16 22.637a3.333 3.333 0 1 1-6.666 0 3.333 3.333 0 0 1 6.667 0Zm-23.333 5a3.333 3.333 0 1 0 0-6.667 3.333 3.333 0 0 0 0 6.667Z"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    data-follow-fill="#E6E6E6"
                    fill="#E6E6E6"
                  ></path>
                </g>
              </svg>
            </div>
            <img
              className=" w-96"
              src="https://lf16-web-buz.capcut.com/obj/capcut-web-buz-sg/ies/lvweb_os_monorepo/platformSSR/e9783dc30e5c8207-1165.webp"
              alt=""
            />
          </div>
          <div className="flex border border-[#1c1c1f] px-7 py-6 rounded-lg">
            <div className="">
              <p className=" text-lg">Music</p>
              <p className=" text-2xl font-semibold">500,000+</p>
            </div>
            <img
              className=" w-96"
              src="https://lf16-web-buz.capcut.com/obj/capcut-web-buz-sg/ies/lvweb_os_monorepo/platformSSR/ee8688116591ee36-1165.webp"
              alt=""
            />
          </div>
        </div>
        <div className=" grid grid-cols-3 gap-5 mt-8">
          <div className="flex border border-[#1c1c1f] rounded-lg">
            <div className="absolute px-7 py-6">
              <p className=" font-semibold">Texts</p>
              <p className=" text-2xl font-semibold">1,300+</p>
            </div>
            <img
              className=""
              src="https://lf16-web-buz.capcut.com/obj/capcut-web-buz-sg/ies/lvweb_os_monorepo/platformSSR/a2e4641ffbf41332-757.webp"
              alt=""
            />
          </div>
          <div className="flex border border-[#1c1c1f] rounded-lg">
            <div className="absolute px-7 py-6">
              <p className=" font-semibold">Effects</p>
              <p className=" text-2xl font-semibold">1,100+</p>
            </div>
            <img
              className=""
              src="https://lf16-web-buz.capcut.com/obj/capcut-web-buz-sg/ies/lvweb_os_monorepo/platformSSR/68d27006542e20d3-757.webp"
              alt=""
            />
          </div>
          <div className="flex border border-[#1c1c1f] rounded-lg">
            <div className="absolute px-7 py-6">
              <p className=" font-semibold">Filters</p>
              <p className=" text-2xl font-semibold">200+</p>
            </div>
            <img
              className=""
              src="https://lf16-web-buz.capcut.com/obj/capcut-web-buz-sg/ies/lvweb_os_monorepo/platformSSR/afe74bc42d889312-757.webp"
              alt=""
            />
          </div>
        </div>
        <div className="">
          <p className="text-5xl font-semibold text-center mt-56 mb-20">
            One video editor for all.
          </p>
          <div className=" grid grid-cols-12 ">
            <div className="col-span-5 my-auto">
              <div className="border-l-4 px-3">
                <a href="#">
                  <p className="font-semibold">Boost your business</p>
                  <p className=" text-[#a6a6ad] font-light ">
                    Whether you're creating videos for social media ads, <br />{" "}
                    marketing, or have other business purposes, we’ve got <br />{" "}
                    you covered. Use CapCut online to create or share <br />{" "}
                    video content with your team, and work faster than <br />{" "}
                    ever.
                  </p>
                </a>
              </div>
              <div className="border-l-4 border-l-[#5a5a5e] px-3 my-5">
                <a href="#">
                  <p className="font-semibold text-[#5a5a5e]">
                    Meet your professional needs
                  </p>
                  <p className=" text-[#424246] font-light">
                    CapCut desktop supports complex video editing with <br />{" "}
                    stable performance and a user-friendly interface. <br />{" "}
                    Download the desktop app and start creating your <br />{" "}
                    projects.
                  </p>
                </a>
              </div>
              <div className="border-l-4 border-l-[#5a5a5e] px-3">
                <a href="#" className="">
                  <p className="font-semibold text-[#5a5a5e]">
                    Create videos on the go
                  </p>
                  <p className="text-[#424246] font-light">
                    Capture memorable moments and create on the go. <br /> Cut,
                    trim, and edit videos with CapCut app to record <br /> and
                    celebrate life. Finish editing with ease in just a few{" "}
                    <br /> minutes and share your work on social media.
                  </p>
                </a>
              </div>
            </div>
            <div className=" col-span-7">
              <img
                className=" rounded-lg"
                src="https://lf16-web-buz.capcut.com/obj/capcut-web-buz-sg/ies/lvweb_os_monorepo/platformSSR/0d0df0ea52cf0501-1920.webp"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="">
          <p className="text-5xl font-semibold text-center mt-56 mb-20">
            Secure your data and privacy with CapCut
          </p>
          <div className="grid grid-cols-3 gap-8 mx-14">
            <div className=" text-center bg-[#1c1d21] rounded-xl">
              <img
                src="https://lf16-web-buz.capcut.com/obj/capcut-web-buz-sg/ies/lvweb_os_monorepo/platformSSR/e710a43b656ff876-560.webp"
                alt=""
              />
              <p className=" font-semibold text-lg">Protect your privacy</p>
              <p className=" font-light text-[#83848d] mb-10">
                Encrypted data transmission <br /> prevents any privacy leaks.
              </p>
            </div>
            <div className=" text-center bg-[#1c1d21] rounded-xl">
              <img
                src="https://lf16-web-buz.capcut.com/obj/capcut-web-buz-sg/ies/lvweb_os_monorepo/platformSSR/6cfda254372884ab-560.webp"
                alt=""
              />
              <p className=" font-semibold text-lg">Safe data storage</p>
              <p className=" font-light text-[#83848d]">
                Save your data in our Cloud <br /> Space for secured data
                storage.
              </p>
            </div>
            <div className=" text-center bg-[#1c1d21] rounded-xl">
              <img
                src="https://lf16-web-buz.capcut.com/obj/capcut-web-buz-sg/ies/lvweb_os_monorepo/platformSSR/2a0855561af7b4d2-560.webp"
                alt=""
              />
              <p className=" font-semibold text-lg">Smoother access</p>
              <p className=" font-light text-[#83848d]">
                Faster and smoother access to your <br /> files.
              </p>
            </div>
          </div>
        </div>
        <div className=" text-center">
          <p className="text-5xl font-semibold text-center mt-60 mb-20">
            Whatever your needs are, CapCut is the <br /> app for you.
          </p>
          <p className=" text-sm text-[#7d7e85]">
            A simple video editing tool to use wherever you like. You can create
            videos on your browser, your desktop and laptop, or on your phone.
          </p>
        </div>
        <div className=" mx-24">
          <div className=" grid grid-cols-2 bg-[#1c1d21] px-4 py-4 rounded-xl border border-[#292a2e] mt-10">
            <div className=" w-96">
              <img
                src="https://lf16-web-buz.capcut.com/obj/capcut-web-buz-sg/ies/lvweb_os_monorepo/platformSSR/ba98cc91e6ca6c36-1112.webp"
                alt=""
              />
            </div>
            <div className=" my-auto">
              <p className=" font-bold">CapCut online creative suite</p>
              <p className=" font-light text-[#85868f] mt-2">
                Open CapCut directly in your browser for streamlined <br />{" "}
                video and image editing. Enjoy magic tools and <br />{" "}
                collaborative features, all without any downloads.
              </p>
              <button className="bg-[#303239] bg-2 text-sm font-semibold px-4 py-2 rounded-lg mt-4">
                Open in browser
              </button>
            </div>
          </div>
          <div className=" grid grid-cols-2 gap-6 mt-6">
            <div className="bg-[#1c1d21] px-4 py-4 rounded-xl border border-[#292a2e]">
              <img
                src="https://lf16-web-buz.capcut.com/obj/capcut-web-buz-sg/ies/lvweb_os_monorepo/platformSSR/e6c011e4011be428-1064.webp"
                alt=""
              />
              <div className=" mt-5">
                <div className=" my-auto">
                  <p className=" font-bold">CapCut desktop</p>
                  <p className=" font-light text-[#85868f] mt-2">
                    Download the app on your desktop or laptop to <br /> work
                    offline at anytime.
                  </p>
                  <button className="bg-[#303239] bg-2 text-sm font-semibold px-4 py-2 rounded-lg mt-4">
                    Download for PC
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-[#1c1d21] px-4 py-4 rounded-xl border border-[#292a2e]">
              <img
                src="https://lf16-web-buz.capcut.com/obj/capcut-web-buz-sg/ies/lvweb_os_monorepo/platformSSR/d6f13ad1f8331191-1064.webp"
                alt=""
              />
              <div className=" mt-5">
                <div className=" my-auto">
                  <p className=" font-bold">CapCut mobile</p>
                  <p className=" font-light text-[#85868f] mt-2">
                    A mobile app for recording, editing, and sharing <br />{" "}
                    videos.
                  </p>
                  <button className="bg-[#303239] bg-2 text-sm font-semibold px-4 py-2 rounded-lg mt-4">
                    Download for mobile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className=" mt-20 mx-32 ">
        <div className=" grid grid-cols-4 ">
          <div className="">
            <img
              className=" w-40"
              src="https://lf16-web-buz.capcut.com/obj/capcut-web-buz-sg/ies/lvweb_os_monorepo/platformSSR/802672aa5aafee7a-509.png"
              alt=""
            />
            <p className=" text-[#b3b2b2] text-sm mt-6">
              Free all-in-one video editor for <br /> everyone to create
              anything <br /> anywhere
            </p>
            <button className="bg-[#17181a] bg text-sm font-semibold py-2 px-3 gap-2 rounded-lg mt-10 flex items-center ">
              <svg
                className=" w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="rgba(255,255,255,1)"
              >
                <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM9.71002 19.6674C8.74743 17.6259 8.15732 15.3742 8.02731 13H4.06189C4.458 16.1765 6.71639 18.7747 9.71002 19.6674ZM10.0307 13C10.1811 15.4388 10.8778 17.7297 12 19.752C13.1222 17.7297 13.8189 15.4388 13.9693 13H10.0307ZM19.9381 13H15.9727C15.8427 15.3742 15.2526 17.6259 14.29 19.6674C17.2836 18.7747 19.542 16.1765 19.9381 13ZM4.06189 11H8.02731C8.15732 8.62577 8.74743 6.37407 9.71002 4.33256C6.71639 5.22533 4.458 7.8235 4.06189 11ZM10.0307 11H13.9693C13.8189 8.56122 13.1222 6.27025 12 4.24799C10.8778 6.27025 10.1811 8.56122 10.0307 11ZM14.29 4.33256C15.2526 6.37407 15.8427 8.62577 15.9727 11H19.9381C19.542 7.8235 17.2836 5.22533 14.29 4.33256Z"></path>
              </svg>
              English
              <svg
                className=" w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="rgba(255,255,255,1)"
              >
                <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
              </svg>
            </button>
            <div className=" flex mt-10 gap-6">
              <a href="#">
                <img
                  className="w-5"
                  src="https://p16-capcut-va.ibyteimg.com/tos-maliva-i-6rr7idwo9f-us/bce2e125c32540fab05de66957848858~tplv-6rr7idwo9f-image.image"
                  alt=""
                />
              </a>
              <a href="#">
                <img
                  className="w-5"
                  src="https://p16-capcut-va.ibyteimg.com/tos-maliva-i-6rr7idwo9f-us/cec1f87f641b45e1b099915dc4c00d0b~tplv-6rr7idwo9f-image.image"
                  alt=""
                />
              </a>
              <a href="#">
                <img
                  className="w-5"
                  src="https://p16-capcut-va.ibyteimg.com/tos-maliva-i-6rr7idwo9f-us/1cbde6b860b54ef395d800cc9f934661~tplv-6rr7idwo9f-image.image"
                  alt=""
                />
              </a>
              <a href="#">
                <img
                  className="w-5"
                  src="https://p16-capcut-va.ibyteimg.com/tos-maliva-i-6rr7idwo9f-us/3a508777c115460bb1339e7e7b4688c3~tplv-6rr7idwo9f-image.image"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="">
            <p className=" font-semibold">Tools</p>
            <div className=" mt-5">
              <a className=" text-sm text-[#b3b2b2] block foot-link" href="#">
                Free cloud storage
              </a>{" "}
              <br />
              <a className=" text-sm text-[#b3b2b2] block foot-link" href="#">
                Voice changer
              </a>{" "}
              <br />
              <a className=" text-sm text-[#b3b2b2] block foot-link" href="#">
                Video translator
              </a>{" "}
              <br />
              <a className=" text-sm text-[#b3b2b2] block foot-link" href="#">
                Video resizer
              </a>{" "}
              <br />
              <a className=" text-sm text-[#b3b2b2] block foot-link" href="#">
                Online video converter
              </a>{" "}
              <br />
              <a className=" text-sm text-[#b3b2b2] block foot-link" href="#">
                Video transitions
              </a>{" "}
              <br />
              <a className=" text-sm text-[#b3b2b2] block foot-link" href="#">
                Online video trimmer
              </a>{" "}
              <br />
              <a className=" text-sm text-[#b3b2b2] block foot-link" href="#">
                Image style transfer
              </a>{" "}
              <br />
              <a className=" text-sm text-[#b3b2b2] block foot-link" href="#">
                Old photo restoration
              </a>{" "}
              <br />
              <a className=" text-sm text-[#b3b2b2] block foot-link" href="#">
                Color match
              </a>{" "}
              <br />
            </div>
          </div>
          <div className="">
            <p className=" font-semibold">Create</p>
            <div className=" mt-5">
              <a className=" text-sm text-[#b3b2b2] block foot-link" href="#">
                Sticker maker
              </a>{" "}
              <br />
              <a className=" text-sm text-[#b3b2b2] block foot-link" href="#">
                Icon maker
              </a>{" "}
              <br />
              <a className=" text-sm text-[#b3b2b2] block foot-link" href="#">
                Make educational video
              </a>{" "}
              <br />
              <a className=" text-sm text-[#b3b2b2] block foot-link" href="#">
                Portrait maker
              </a>{" "}
              <br />
              <a className=" text-sm text-[#b3b2b2] block foot-link" href="#">
                Reddit video maker
              </a>{" "}
              <br />
              <a className=" text-sm text-[#b3b2b2] block foot-link" href="#">
                Logo maker
              </a>{" "}
              <br />
              <a className=" text-sm text-[#b3b2b2] block foot-link" href="#">
                Animation maker
              </a>{" "}
              <br />
              <a className=" text-sm text-[#b3b2b2] block foot-link" href="#">
                Photo video maker
              </a>{" "}
              <br />
              <a className=" text-sm text-[#b3b2b2] block foot-link" href="#">
                Creator hub
              </a>{" "}
              <br />
              <a className=" text-sm text-[#b3b2b2] block foot-link" href="#">
                Business channels
              </a>{" "}
              <br />
            </div>
          </div>
          <div className="">
            <p className=" font-semibold">Resource</p>
            <div className=" mt-5">
              <a className=" text-sm text-[#b3b2b2] block foot-link" href="#">
                Edit gaming video
              </a>{" "}
              <br />
              <a className=" text-sm text-[#b3b2b2] block foot-link" href="#">
                Make TikTok videos
              </a>{" "}
              <br />
              <a className=" text-sm text-[#b3b2b2] block foot-link" href="#">
                CapCut 3D zoom
              </a>{" "}
              <br />
              <a className=" text-sm text-[#b3b2b2] block foot-link" href="#">
                YouTube to MP3 converter
              </a>{" "}
              <br />
              <a className=" text-sm text-[#b3b2b2] block foot-link" href="#">
                YouTube video to MP4
              </a>{" "}
              <br />
              <a className=" text-sm text-[#b3b2b2] block foot-link" href="#">
                TikTok LIVE studio
              </a>{" "}
              <br />
              <a className=" text-sm text-[#b3b2b2] block foot-link" href="#">
                Change background color
              </a>{" "}
              <br />
              <a className=" text-sm text-[#b3b2b2] block foot-link" href="#">
                Best AI image generator
              </a>{" "}
              <br />
              <a className=" text-sm text-[#b3b2b2] block foot-link" href="#">
                Makeup tutorial
              </a>{" "}
              <br />
              <a className=" text-sm text-[#b3b2b2] block foot-link" href="#">
                Edit MP4 videos
              </a>{" "}
              <br />
            </div>
          </div>
        </div>
        <div className=" flex text-xs text-[#b3b2b2] justify-between border-t border-t-[#1a1919] py-7 mt-32">
          <div className=" flex gap-5 ">
            <a className=" block foot-link" href="#">
              Terms of Service
            </a>
            <a className=" block foot-link" href="#">
              Privacy Policy
            </a>
            <a className=" block foot-link" href="#">
              Cookies Policy
            </a>
            <a className=" block foot-link" href="#">
              License Agreement
            </a>
            <a className=" block foot-link" href="#">
              Creator Terms of Service
            </a>
            <a className=" block foot-link" href="#">
              Community Guidelines
            </a>
          </div>
          <div className=" flex gap-5">
            <p>Explore:</p>
            <a className="foot-link-2" href="#">
              SoundOn
            </a>
            <a className="foot-link-2" href="#">
              TikTok Shop
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
