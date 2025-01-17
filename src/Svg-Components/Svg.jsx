export function SvgAbout() {
  return (
    <svg
      className="hover:fill-indigo-600 hover:stroke-indigo-600"
      width={24}
      height={24}
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      viewBox="0 0 502.643 502.643"
    >
      <path
        className="fill-current stroke-current"
        d="M251.256 237.591c37.166 0 67.042-30.048 67.042-66.977.043-37.037-29.876-66.999-67.042-66.999-36.908 0-66.869 29.962-66.869 66.999 0 36.973 29.962 66.977 66.869 66.977zM305.032 248.506H197.653c-19.198 0-34.923 17.602-34.923 39.194v107.854c0 1.186.604 2.243.669 3.473h175.823c.129-1.229.626-2.286.626-3.473V287.7c.064-21.592-15.661-39.194-34.816-39.194zM431.588 269.559c29.832 0 53.754-24.008 53.754-53.668s-23.922-53.711-53.754-53.711c-29.617 0-53.582 24.051-53.582 53.711-.064 29.639 23.966 53.668 53.582 53.668zM474.708 278.317h-86.046c-15.445 0-28.064 14.107-28.064 31.472v86.413c0 .928.453 1.812.518 2.826h141.03c.065-1.014.496-1.898.496-2.826v-86.413c.065-17.365-12.532-31.472-27.934-31.472zM71.011 269.559c29.789 0 53.733-24.008 53.733-53.668S100.8 162.18 71.011 162.18c-29.638 0-53.603 24.051-53.603 53.711s23.965 53.668 53.603 53.668zM114.109 278.317H27.977C12.576 278.317 0 292.424 0 309.789v86.413c0 .928.453 1.812.539 2.826h141.03c.065-1.014.475-1.898.475-2.826v-86.413c.043-17.365-12.555-31.472-27.935-31.472z"
      />
    </svg>
  );
}
// Used in Header and Sidebar component

export function SvgAd() {
  return (
    // Ad Icon (SVG)
    <svg
      width={24}
      height={24}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="#0080ff"
      viewBox="0 0 24 24"
    >
      <g strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}>
        <path d="m3.634 12.746.431-1.145-1.007-2.675a.916.916 0 0 1 .347-1.079L5.77 6.283l.738-2.763a.905.905 0 0 1 .338-.495.886.886 0 0 1 .569-.171l2.822.145L12.44 1.2a.886.886 0 0 1 1.122 0L15.76 3l2.823-.143c.203-.01.404.05.57.172a.905.905 0 0 1 .337.495l.738 2.763 2.366 1.564a.915.915 0 0 1 .347 1.079l-1.006 2.675 1.006 2.673a.915.915 0 0 1-.347 1.08l-2.366 1.56-.742 2.763a.904.904 0 0 1-.337.496.884.884 0 0 1-.57.172l-2.823-.142-2.175 1.773M1.248 18.371l2.495 3.743" />
        <path d="M16.79 16.872 3 21l-1-1.5L11.158 8l5.632 8.872ZM10.5 7l7 11M6 20.316l.876 1.346a2.042 2.042 0 0 0 2.906.614 2.256 2.256 0 0 0 .587-3.04" />
      </g>
    </svg>
  );
}
// Used in Hero-Section

export function SvgAll() {
  return (
    // Circle Icon with open paths (SVG)
    <svg
      width={24}
      height={24}
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_1"
      fill="#0080ff"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <g id="SVGRepo_iconCarrier">
        <defs>
          <style>
            {
              ".cls-1{fill:none;stroke:#0080ff;stroke-miterlimit:10;stroke-width:1.92px}"
            }
          </style>
        </defs>
        <path
          d="M12 .5v4.79M12 18.71v4.79M23.5 12h-4.79M5.29 12H.5M20.13 3.87l-3.39 3.39M7.26 16.74l-3.39 3.39M20.13 20.13l-3.39-3.39M7.26 7.26 3.87 3.87"
          className="cls-1"
        />
      </g>
    </svg>
  );
}
// Used in Hero-Section

export function SvgArrow() {
  return (
    // Left Arrow Icon (SVG)
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      className="icon flat-line"
      data-name="Flat Line"
      viewBox="0 0 24 24"
    >
      <path
        d="M3 12h18"
        style={{
          fill: "none",
          stroke: "#777",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
        }}
      />
      <path
        d="m18 15 3-3-3-3"
        data-name="primary"
        style={{
          fill: "none",
          stroke: "#777",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
        }}
      />
    </svg>
  );
}
// Used in Generate component

export function SvgClose() {
  return (
    // Close/Cancle Icon (SVG)
    <svg
      width={24}
      height={24}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path
        d="M6 1v3h1V2h11v11h-2v1h3V1H6zM1 6v13h13V6H1zm1 1h11v11H2V7zm2.879 2.172-.707.707L6.793 12.5l-2.621 2.621.707.707L7.5 13.207l2.621 2.621.707-.707L8.207 12.5l2.621-2.621-.707-.707L7.5 11.793 4.879 9.172z"
        style={{
          fill: "red",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 0,
        }}
      />
    </svg>
  );
}
// Used in Sidebar component

export function SvgCreate() {
  return (
    // Create/Write Icon (SVG)
    <svg
      width={24}
      height={24}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M19.186 2.09c.521.25 1.136.612 1.625 1.101.49.49.852 1.104 1.1 1.625.313.654.11 1.408-.401 1.92l-7.214 7.213c-.31.31-.688.541-1.105.675l-4.222 1.353a.75.75 0 0 1-.943-.944l1.353-4.221a2.75 2.75 0 0 1 .674-1.105l7.214-7.214c.512-.512 1.266-.714 1.92-.402zm.211 2.516a3.608 3.608 0 0 0-.828-.586l-6.994 6.994a1.002 1.002 0 0 0-.178.241L9.9 14.102l2.846-1.496a.99.99 0 0 0 .242-.178l6.994-6.994a3.61 3.61 0 0 0-.586-.828zM4.999 5.5A.5.5 0 0 1 5.47 5l5.53.005a1 1 0 0 0 0-2L5.5 3A2.5 2.5 0 0 0 3 5.5v12.577c0 .76.082 1.185.319 1.627.224.419.558.754.977.978.442.236.866.318 1.627.318h12.154c.76 0 1.185-.082 1.627-.318.42-.224.754-.559.978-.978.236-.442.318-.866.318-1.627V13a1 1 0 1 0-2 0v5.077c0 .459-.021.571-.082.684a.364.364 0 0 1-.157.157c-.113.06-.225.082-.684.082H5.923c-.459 0-.57-.022-.684-.082a.363.363 0 0 1-.157-.157c-.06-.113-.082-.225-.082-.684V5.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}
// Used in Hero-Section

export function SvgCv() {
  return (
    // Letter/Paper Icon (SVG)
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      id="Layer_1"
      width="150"
      height="150"
      fill="#000"
      version="1.1"
      viewBox="0 0 480 480"
    >
      <g id="SVGRepo_iconCarrier">
        <path d="M413.648 74.336 341.664 2.352A7.95 7.95 0 0 0 336 0H104C81.944 0 64 17.944 64 40v344c0 22.056 17.944 40 40 40h88v56h16v-56h120c4.416 0 8-3.576 8-8v-40c0-14.88 10.216-27.432 24-30.984V480h16v-56c22.056 0 40-17.944 40-40V80a7.95 7.95 0 0 0-2.352-5.664M344 27.312 388.688 72H344zM400 384c0 13.232-10.768 24-24 24v-72c0-4.424-3.584-8-8-8-26.472 0-48 21.528-48 48v32H104c-13.232 0-24-10.768-24-24V40c0-13.232 10.768-24 24-24h224v64c0 4.424 3.584 8 8 8h64z"></path>
        <path d="M224 48H112c-4.416 0-8 3.576-8 8v112c0 4.424 3.584 8 8 8h112c4.416 0 8-3.576 8-8V56c0-4.424-3.584-8-8-8m-40 112h-32v-16c0-8.824 7.176-16 16-16s16 7.176 16 16zm-24-56c0-4.416 3.592-8 8-8s8 3.584 8 8-3.592 8-8 8-8-3.584-8-8m56 56h-16v-16c0-10.488-5.136-19.72-12.952-25.56 3.064-4.032 4.952-9 4.952-14.44 0-13.232-10.768-24-24-24s-24 10.768-24 24c0 5.44 1.888 10.408 4.952 14.44C141.136 124.28 136 133.512 136 144v16h-16V64h96zM248 72h40v16h-40zM248 104h48v16h-48zM312 104h40v16h-40zM248 136h104v16H248zM144 200h64v16h-64zM224 200h48v16h-48zM288 200h80v16h-80zM112 232h64v16h-64zM192 232h128v16H192zM336 232h32v16h-32zM112 264h32v16h-32zM160 264h96v16h-96zM272 264h96v16h-96zM112 296h32v16h-32zM160 296h96v16h-96zM272 296h96v16h-96zM112 328h72v16h-72zM200 328h112v16H200zM112 360h32v16h-32zM160 360h136v16H160z"></path>
      </g>
    </svg>
  );
}

export function SvgDownload() {
  return (
    // Download Icon (SVG)
    <svg
      width={24}
      height={24}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <g fill="#0080ff">
        <path d="M12.553 16.506a.75.75 0 0 1-1.107 0l-4-4.375a.75.75 0 0 1 1.108-1.012l2.696 2.95V3a.75.75 0 0 1 1.5 0v11.068l2.697-2.95a.75.75 0 1 1 1.107 1.013l-4 4.375Z" />
        <path d="M3.75 15a.75.75 0 0 0-1.5 0v.055c0 1.367 0 2.47.117 3.337.12.9.38 1.658.981 2.26.602.602 1.36.86 2.26.982.867.116 1.97.116 3.337.116h6.11c1.367 0 2.47 0 3.337-.116.9-.122 1.658-.38 2.26-.982.602-.602.86-1.36.982-2.26.116-.867.116-1.97.116-3.337V15a.75.75 0 0 0-1.5 0c0 1.435-.002 2.436-.103 3.192-.099.734-.28 1.122-.556 1.399-.277.277-.665.457-1.4.556-.755.101-1.756.103-3.191.103H9c-1.435 0-2.437-.002-3.192-.103-.734-.099-1.122-.28-1.399-.556-.277-.277-.457-.665-.556-1.4-.101-.755-.103-1.756-.103-3.191Z" />
      </g>
    </svg>
  );
}
// Used in Steps-Section and Generate components

export function SvgEdit() {
  return (
    // Edit/Write Icon (SVG)
    <svg
      width={24}
      height={24}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="#ff8000"
        fillRule="evenodd"
        d="M21.121 2.707a3 3 0 0 0-4.242 0l-1.68 1.68-7.906 7.906a1 1 0 0 0-.263.464l-1 4a1 1 0 0 0 1.213 1.213l4-1a1 1 0 0 0 .464-.263l7.849-7.848 1.737-1.738a3 3 0 0 0 0-4.242l-.172-.172Zm-2.828 1.414a1 1 0 0 1 1.414 0l.172.172a1 1 0 0 1 0 1.414l-1.017 1.017-1.555-1.617.986-.986Zm-2.4 2.4 1.555 1.617-6.96 6.959-2.114.529.529-2.115 6.99-6.99ZM4 8a1 1 0 0 1 1-1h5a1 1 0 1 0 0-2H5a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3h11a3 3 0 0 0 3-3v-5a1 1 0 0 0-2 0v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
// Used in Steps-Section component

export function SvgEnvelope() {
  return (
    <svg
      className="hover:fill-indigo-600 hover:stroke-indigo-600"
      width={20}
      height={20}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <g fill="#000" className="fill-current stroke-current">
        <path d="M1.602 4.201A2.999 2.999 0 0 1 4 3h16c.978 0 1.85.473 2.398 1.201L12 11.764 1.602 4.2Z" />
        <path d="M1 6.237V18c0 1.652 1.348 3 3 3h16c1.652 0 3-1.348 3-3V6.236l-9.824 7.145a2 2 0 0 1-2.352 0L1 6.237Z" />
      </g>
    </svg>
  );
}
// Used in Sidebar component

export function SvgFile() {
  return (
    // File Icon (SVG)
    <svg
      className="hover:fill-indigo-600 hover:stroke-indigo-600"
      width={18}
      height={18}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-3 0 32 32"
    >
      <title>{"file-document"}</title>
      <path
        className="fill-current stroke-current"
        fill="#000"
        fillRule="evenodd"
        d="M20 8a2 2 0 0 1-2-2V2l6 6h-4Zm-2-8v.028L4 0a4 4 0 0 0-4 4v24a4 4 0 0 0 4 4h18a4 4 0 0 0 4-4V8l-8-8Z"
      />
    </svg>
  );
}
// Used in Sidebar component

export function SvgFree() {
  return (
    // Free Icon (SVG)
    <svg
      width={24}
      height={24}
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      id="_x32_"
      fill="#0080ff"
      viewBox="0 0 512 512"
    >
      <g id="SVGRepo_iconCarrier">
        <style>{".st0{fill:#0080ff}"}</style>
        <path
          d="M480.169 261.752a16.144 16.144 0 0 1-1.059-5.756c0-1.952.351-3.903 1.059-5.755l18.695-49.082a36.54 36.54 0 0 0 2.395-12.993 36.47 36.47 0 0 0-16.533-30.551l-43.986-28.719a16.168 16.168 0 0 1-6.762-9.321l-13.727-50.702c-4.334-15.976-18.808-26.958-35.215-26.965-.615 0-1.23.02-1.852.053l.926-.053-53.236 2.666-.919.02a16.22 16.22 0 0 1-10.162-3.572L278.89 8.078A36.39 36.39 0 0 0 256.006 0a36.456 36.456 0 0 0-22.903 8.078l.007.007-40.904 32.939a16.22 16.22 0 0 1-10.162 3.572l-.595-.013-52.654-2.62h.1a35.079 35.079 0 0 0-1.932-.046c-16.407 0-30.875 10.989-35.208 26.958l-13.727 50.702a16.167 16.167 0 0 1-6.762 9.321L27.28 157.617a36.488 36.488 0 0 0-14.151 43.537l18.709 49.088a16.269 16.269 0 0 1 1.059 5.755c0 1.952-.351 3.897-1.059 5.749L13.135 310.84a36.38 36.38 0 0 0-2.394 12.973c-.007 12.04 5.98 23.67 16.539 30.57l43.986 28.719a16.142 16.142 0 0 1 6.762 9.308l13.727 50.702c4.334 15.976 18.808 26.958 35.208 26.958.569 0 1.171-.007 1.82-.04l52.475-2.62.099-.007.714-.02a16.202 16.202 0 0 1 10.135 3.586l40.904 32.952a36.49 36.49 0 0 0 22.896 8.078 36.461 36.461 0 0 0 22.89-8.078L319.8 470.97a16.12 16.12 0 0 1 10.135-3.586l.787.026 52.23 2.606.351.014c.542.026 1.118.04 1.733.04 16.4 0 30.882-10.976 35.215-26.958l13.727-50.702a16.127 16.127 0 0 1 6.755-9.308l43.993-28.719a36.512 36.512 0 0 0 16.533-30.564c0-4.34-.781-8.753-2.395-12.987l-18.695-49.08zm-6.563 75.623-43.98 28.711a36.47 36.47 0 0 0-15.269 21.018L400.63 437.8c-1.906 7.086-8.342 11.948-15.593 11.948l-.886-.02-51.463-2.574-.894-.039a33.412 33.412 0 0 0-1.859-.053 36.475 36.475 0 0 0-22.89 8.084l-40.904 32.952a16.084 16.084 0 0 1-10.135 3.572 16.086 16.086 0 0 1-10.141-3.572l-40.904-32.952a36.473 36.473 0 0 0-22.89-8.084c-.542.006-1.164.013-1.832.053l-52.462 2.62-.814.014c-7.244.006-13.681-4.869-15.586-11.941L97.65 387.099a36.457 36.457 0 0 0-15.276-21.011l-43.98-28.718c-4.677-3.05-7.324-8.21-7.33-13.555 0-1.919.344-3.851 1.058-5.729l18.702-49.094a36.473 36.473 0 0 0 2.395-12.993c0-4.406-.801-8.812-2.395-13l-18.702-49.074a16.216 16.216 0 0 1-1.058-5.749c.006-5.345 2.646-10.492 7.323-13.542l43.994-28.718a36.549 36.549 0 0 0 15.269-21.024l13.727-50.708c1.906-7.072 8.35-11.948 15.586-11.941l.715.013.225.013 51.774 2.586.608.027 1.76.039c8.316 0 16.4-2.832 22.91-8.064l40.904-32.952-6.371-7.912 6.378 7.905c2.97-2.388 6.529-3.565 10.141-3.579a16.099 16.099 0 0 1 10.135 3.586l40.911 32.946a36.5 36.5 0 0 0 22.904 8.071c.615 0 1.177-.013 1.687-.033l53.506-2.672-.893.046.78-.026c7.244 0 13.688 4.876 15.593 11.948l13.727 50.708a36.513 36.513 0 0 0 15.269 21.018l43.987 28.725a16.15 16.15 0 0 1 6.258 19.298l-18.689 49.074a36.38 36.38 0 0 0-2.395 12.993c0 4.406.801 8.812 2.395 12.993l18.696 49.082a16.178 16.178 0 0 1-6.272 19.299z"
          className="st0"
        />
        <path
          d="m165.753 268.527-30.716 6.866c-.509.119-.814-.079-.926-.582l-4.029-18.008c-.112-.502.079-.807.589-.919l36.888-8.256c.747-.165 1.138-.787.972-1.541l-3.016-13.47c-.166-.754-.787-1.145-1.528-.979l-54.896 12.278c-.754.172-1.151.794-.979 1.548l18.589 83.092c.172.754.787 1.138 1.549.966l15.983-3.573c.755-.172 1.145-.78.973-1.534l-7.211-32.231c-.112-.504.086-.814.595-.927l30.716-6.873c.754-.166 1.144-.787.973-1.541l-2.984-13.344c-.172-.754-.788-1.144-1.542-.972zM238.439 267.865c8.507-6.272 12.351-16.254 9.903-27.203-3.493-15.613-17.524-23.975-35.03-20.058l-34.11 7.634c-.754.165-1.151.78-.979 1.541l18.59 83.086c.172.754.788 1.144 1.549.979l15.983-3.579c.754-.172 1.145-.787.973-1.541l-6.848-30.591c-.106-.502.086-.814.596-.926l11.452-2.56 21.745 28.05c.569.801 1.039 1.092 2.17.84l17.882-4.009c.88-.192 1.079-1.032.543-1.706l-24.419-29.957zm-17.79-9.771-15.104 3.381c-.509.112-.82-.086-.933-.59l-4.419-19.767c-.112-.503.079-.808.589-.92l15.103-3.38c7.052-1.581 12.516 1.555 13.952 7.985 1.464 6.543-2.136 11.709-9.188 13.291zM328.212 267.998l-36.888 8.256c-.502.112-.807-.079-.926-.589l-3.969-17.749c-.112-.503.08-.808.582-.926l30.723-6.867c.754-.172 1.151-.794.979-1.548l-2.983-13.338c-.172-.761-.794-1.151-1.549-.979l-30.716 6.867c-.503.118-.808-.08-.927-.582l-3.797-16.996c-.113-.503.079-.814.582-.919l36.888-8.257c.748-.172 1.138-.787.973-1.541l-3.016-13.469c-.165-.761-.787-1.144-1.528-.979l-54.896 12.279c-.754.172-1.151.787-.979 1.541l18.59 83.091c.172.755.787 1.145 1.548.973l54.89-12.278c.747-.165 1.138-.787.966-1.541l-3.01-13.469c-.174-.755-.789-1.146-1.537-.98zM399.316 252.094l-36.882 8.25c-.503.113-.814-.086-.926-.588l-3.97-17.75c-.113-.502.086-.814.588-.919l30.71-6.88c.768-.165 1.152-.781.986-1.535l-2.984-13.35c-.172-.754-.787-1.144-1.548-.979l-30.716 6.88c-.503.106-.807-.086-.919-.589l-3.804-16.996c-.112-.503.08-.807.582-.926l36.882-8.25c.768-.172 1.158-.787.992-1.541l-3.016-13.47c-.172-.761-.78-1.151-1.548-.979L328.86 194.75c-.754.171-1.151.787-.979 1.541l18.59 83.092c.172.754.788 1.145 1.542.973l54.882-12.279c.768-.172 1.158-.787.986-1.542l-3.017-13.47c-.165-.753-.78-1.143-1.548-.971z"
          className="st0"
        />
      </g>
    </svg>
  );
}
// Used in Hero-Section component

export function SvgHome() {
  return (
    // Home Icon (SVG)
    <svg
      className="hover:fill-indigo-600 hover:stroke-indigo-600"
      width={24}
      height={24}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        className="fill-current stroke-current"
        fill="#000"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6.5 20v-9H3l9-6 9 6h-3.5v9h-3v-3.5A1.5 1.5 0 0 0 13 15h-2a1.5 1.5 0 0 0-1.5 1.5V20h-3Z"
      />
    </svg>
  );
}
// Used in Sidebar component

export function SvgKey() {
  return (
    // Key Icon (SVG)
    <svg
      width={24}
      height={24}
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      fill="#0080ff"
      viewBox="0 0 347.958 347.958"
    >
      <path d="m327.976 93.864 19.982-19.991-59.02-59.042-146.92 146.923c-35.84-22.488-83.666-18.17-114.852 13.009-36.223 36.23-36.223 94.968 0 131.196 36.227 36.224 94.957 36.224 131.184-.001 31.18-31.182 35.5-79.019 13.012-114.84l61.035-61.022 29.678 29.674 21.539-21.553-19.682-19.677 10.627-10.621 19.672 19.679 23.127-23.119-19.676-19.674 10.613-10.62 19.681 19.679zM91.825 300.022 33.107 241.3l19.979-19.994 58.726 58.724-19.987 19.992z" />
    </svg>
  );
}
// Used in Hero-Section componet

export function SvgMenu() {
  return (
    // Bars/Menu Icon (SVG)
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={40}
      height={40}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 12h16M4 8h16M4 16h8"
      />
    </svg>
  );
}
// Used in Sidebar component

export function SvgOpen() {
  return (
    <svg
      width={26}
      height={26}
      xmlns="http://www.w3.org/2000/svg"
      stroke="#000"
      className="si-glyph si-glyph-open"
      viewBox="0 -0.5 17 17"
    >
      <title>{"Open"}</title>
      <g fill="none" fillRule="evenodd" stroke="none">
        <path d="M6.969 7h-1v2.031h1v-.062H7V7h-.031Z" />
        <path
          fill="#0080ff"
          d="M5.969 7h1v-.979L5.031 6v5.958h.938v-2.02h1v-.907h-1V7ZM7 7h1v1.969H7z"
          className="si-glyph-fill"
        />
        <path d="M2.984 7.016v-.021H1v.021H.984v3.937H1v.078h1.984v-.078H3V7.016h-.016Z" />
        <path
          fill="#0080ff"
          d="M3 7h.947v3.938H3zM1 6h1.984v.943H1zM1 11h1.984v.953H1zM0 7h.949v3.938H0zM15.031 6.031V7.5l-1.062-.875v-.594h-.953v5.938h.953V8.031l1.062.875v3.063h.922V6.031h-.922ZM10.084 6.026H9.016v5.963h1.068v-.02h1.885v-.938H9.953V8.969h2.016v-.938H9.953V6.953h2.016v-.906h-1.885v-.021Z"
          className="si-glyph-fill"
        />
      </g>
    </svg>
  );
}
// Used in Hero-section component

// Used in Hero-Section
export function SvgSmile() {
  return (
    // Smile Icon (SVG)
    <svg
      width={18}
      height={18}
      xmlns="http://www.w3.org/2000/svg"
      fill="#fff"
      viewBox="-8 0 512 512"
    >
      <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm194.8 170.2C334.3 380.4 292.5 400 248 400s-86.3-19.6-114.8-53.8c-13.6-16.3 11-36.7 24.6-20.5 22.4 26.9 55.2 42.2 90.2 42.2s67.8-15.4 90.2-42.2c13.4-16.2 38.1 4.2 24.6 20.5z" />
    </svg>
  );
}
// Used in Hero-Section component

// Used in Sidebar
export function SvgTeam() {
  return (
    // Team Icon (SVG)
    <svg
      className="hover:fill-indigo-600 hover:stroke-indigo-600"
      width={24}
      height={24}
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      viewBox="0 0 512 512"
    >
      <path
        className="fill-current stroke-current"
        d="M256 14.798c-25.327 0-45.932 20.605-45.932 45.932s20.606 45.932 45.932 45.932 45.932-20.605 45.932-45.932S281.327 14.798 256 14.798zM330.311 182.356l-19.491-58.473a16.696 16.696 0 0 0-15.838-11.416h-77.965a16.694 16.694 0 0 0-15.838 11.416l-19.491 58.473c-3.602 10.806 4.459 21.974 15.838 21.974h116.947c11.392 0 19.436-11.179 15.838-21.974zM75.179 161.234c-25.327 0-45.932 20.605-45.932 45.932s20.606 45.932 45.932 45.932 45.932-20.605 45.932-45.932-20.605-45.932-45.932-45.932zM149.492 328.792 130 270.319a16.695 16.695 0 0 0-15.838-11.415H36.196a16.694 16.694 0 0 0-15.838 11.416L.868 328.792c-3.602 10.807 4.46 21.974 15.838 21.974h116.947c11.391 0 19.436-11.179 15.839-21.974zM256.001 307.672c-25.327 0-45.932 20.605-45.932 45.932 0 25.326 20.605 45.932 45.932 45.932s45.932-20.605 45.932-45.932-20.605-45.932-45.932-45.932zM330.312 475.228l-19.491-58.473a16.696 16.696 0 0 0-15.838-11.416h-77.965a16.694 16.694 0 0 0-15.838 11.416l-19.491 58.473c-3.602 10.807 4.46 21.974 15.838 21.974h116.947c11.392-.001 19.436-11.179 15.838-21.974zM189.704 80.17c-4.012-8.302-13.996-11.779-22.297-7.766-25.863 12.501-49.308 30.793-67.799 52.897-5.916 7.073-4.978 17.602 2.094 23.519 7.071 5.916 17.6 4.98 23.518-2.094 15.475-18.499 35.088-33.804 56.719-44.259 8.3-4.013 11.778-13.995 7.765-22.297zM436.82 161.235c-25.327 0-45.932 20.606-45.932 45.932s20.605 45.932 45.932 45.932 45.932-20.605 45.932-45.932-20.605-45.932-45.932-45.932zM511.133 328.792l-19.491-58.473a16.696 16.696 0 0 0-15.838-11.416H397.84a16.694 16.694 0 0 0-15.838 11.415l-19.492 58.473c-3.602 10.807 4.46 21.975 15.838 21.975h116.946c11.391 0 19.436-11.179 15.839-21.974zM412.39 125.302c-18.491-22.104-41.935-40.395-67.799-52.897-8.303-4.011-18.284-.535-22.297 7.766-4.011 8.301-.534 18.283 7.766 22.296 21.631 10.455 41.244 25.76 56.719 44.259 5.918 7.073 16.446 8.008 23.518 2.094 7.072-5.917 8.01-16.446 2.093-23.518zM410.297 363.182c-7.071-5.916-17.601-4.98-23.518 2.094-15.475 18.499-35.088 33.804-56.719 44.259-8.301 4.012-11.779 13.995-7.765 22.297 4.013 8.304 13.997 11.777 22.297 7.766 25.863-12.501 49.308-30.793 67.799-52.897 5.916-7.073 4.978-17.602-2.094-23.519zM181.939 409.534c-21.631-10.456-41.244-25.76-56.719-44.259-5.918-7.073-16.446-8.009-23.518-2.094-7.072 5.917-8.009 16.446-2.092 23.518 18.491 22.104 41.935 40.395 67.799 52.897 8.306 4.015 18.285.532 22.296-7.765 4.011-8.302.534-18.284-7.766-22.297z"
      />
    </svg>
  );
}
// Used in Sidebar component

export function SvgTemplate() {
  return (
    // Template/Paper Icon (SVG)
    <svg
      width={24}
      height={24}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#0f0"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 13h6m-6 4h8M13 3H5v2m8-2h1l5 5v1m-6-6v4c0 1 1 2 2 2h4m0 0v3M5 10v11h14v-5"
      />
    </svg>
  );
}
// Used in Steps-Section component

export function SvgWarn() {
  return (
    // Warn/Danger Icon (SVG)
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 22 22"
    >
      <defs>
        <linearGradient id="a">
          <stop
            offset={0}
            style={{
              stopColor: "#fcd994",
              stopOpacity: 1,
            }}
          />
          <stop
            offset={1}
            style={{
              stopColor: "#fff6e1",
              stopOpacity: 1,
            }}
          />
        </linearGradient>
      </defs>
      <path
        d="m11 1032.362-10 18h20zm0 2 8 15H3z"
        style={{
          fill: "#ffc35a",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
        transform="translate(0 -1030.362)"
      />
      <path
        d="M10 1046.362h2v2h-2zM10 1045.362h2v-6h-2z"
        style={{
          fill: "#373737",
          fillOpacity: 0.94117647,
          stroke: "none",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
        transform="translate(0 -1030.362)"
      />
    </svg>
  );
}
// Used in Generate component

export function SvgWindows() {
  return (
    // Windows/Pop-Up Icon (SVG)
    <svg
      width={24}
      height={24}
      xmlns="http://www.w3.org/2000/svg"
      fill="#0080ff"
      className="cf-icon-svg"
      viewBox="-2 0 19 19"
    >
      <path d="M14.267 3.793v7.996a.477.477 0 0 1-.475.475h-2.356v2.472a.476.476 0 0 1-.475.475H1.208a.476.476 0 0 1-.475-.475V6.74a.476.476 0 0 1 .475-.475h2.356V3.793a.476.476 0 0 1 .475-.475h9.753a.476.476 0 0 1 .475.475zm-3.94 8.471H4.04a.477.477 0 0 1-.475-.475V8.626H1.84v5.476h8.487zm2.832-6.585H4.672v5.476h8.487z" />
    </svg>
  );
}
// Used in Hero-Section component

export function SvgProcess() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={30}
      viewBox="0 0 36 36"
    >
      <title>{"process-on-vm-line"}</title>
      <path
        fill="#94a3b8"
        d="M33.49 26.28a1 1 0 0 0-1.2-.7l-2.49.67a14.23 14.23 0 0 0 2.4-6.75 14.48 14.48 0 0 0-4.83-12.15 1 1 0 0 0-1.37.09 1 1 0 0 0 .09 1.41 12.45 12.45 0 0 1 4.16 10.46 12.19 12.19 0 0 1-2 5.74L28 22.54a1 1 0 1 0-1.95.16l.5 6.44 6.25-1.66a1 1 0 0 0 .69-1.2Z"
        className="clr-i-outline clr-i-outline-path-1"
      />
      <path
        fill="#94a3b8"
        d="M4.31 17.08a1.06 1.06 0 0 0 .44.16 1 1 0 0 0 1.12-.85A12.21 12.21 0 0 1 18.69 5.84l-2.24 1.53a1 1 0 0 0 .47 1.79 1 1 0 0 0 .64-.16l5.33-3.66L18.33.76a1 1 0 1 0-1.39 1.38l1.7 1.7A14.2 14.2 0 0 0 3.89 16.12a1 1 0 0 0 .42.96Z"
        className="clr-i-outline clr-i-outline-path-2"
      />
      <path
        fill="#94a3b8"
        d="M21.73 29.93a12 12 0 0 1-4.84.51 12.3 12.3 0 0 1-9.57-6.3l2.49.93a1 1 0 0 0 .69-1.84l-4.59-1.7L4.44 21l-1.11 6.35a1 1 0 0 0 .79 1.13h.17a1 1 0 0 0 1-.81l.42-2.4a14.3 14.3 0 0 0 11 7.14 13.91 13.91 0 0 0 5.63-.6 1 1 0 0 0-.6-1.9Z"
        className="clr-i-outline clr-i-outline-path-3"
      />
      <path
        fill="#94a3b8"
        d="M22 13h-8a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1Zm-1 8h-6v-6h6Z"
        className="clr-i-outline clr-i-outline-path-4"
      />
      <path fill="none" d="M0 0h36v36H0z" />
    </svg>
  );
}

export function SvgGithub() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={30}
      fill="none"
      viewBox="0 0 48 48"
    >
      <circle cx={24} cy={24} r={20} fill="#6366f1" />
      <path
        fill="#fff"
        d="M6.813 34.235a20.056 20.056 0 0 0 10.864 8.743c1 .183 1.366-.434 1.366-.965 0-.22-.004-.607-.01-1.126-.005-.602-.012-1.38-.018-2.275-5.563 1.209-6.736-2.681-6.736-2.681-.91-2.31-2.221-2.925-2.221-2.925-1.816-1.24.137-1.216.137-1.216 2.008.142 3.063 2.061 3.063 2.061 1.784 3.056 4.682 2.173 5.821 1.663.182-1.293.698-2.175 1.27-2.675-4.441-.504-9.11-2.22-9.11-9.884 0-2.183.78-3.969 2.059-5.367-.207-.506-.893-2.54.195-5.293 0 0 1.68-.538 5.5 2.05A19.154 19.154 0 0 1 24 13.672c1.698.008 3.41.23 5.007.673 3.819-2.588 5.495-2.05 5.495-2.05 1.091 2.754.405 4.787.198 5.293 1.282 1.398 2.057 3.183 2.057 5.366 0 7.684-4.677 9.375-9.132 9.87.718.617 1.358 1.837 1.358 3.704 0 1.787-.011 3.344-.019 4.376-.003.51-.006.892-.006 1.11 0 .535.36 1.157 1.375.962a20.043 20.043 0 0 0 9.207-6.386C35.873 41.11 30.274 44 24 44c-7.306 0-13.696-3.917-17.187-9.765Z"
      />
    </svg>
  );
}

export function SvgFacebook() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={30}
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        fill="#1877F2"
        d="M15 8a7 7 0 0 0-7-7 7 7 0 0 0-1.094 13.915v-4.892H5.13V8h1.777V6.458c0-1.754 1.045-2.724 2.644-2.724.766 0 1.567.137 1.567.137v1.723h-.883c-.87 0-1.14.54-1.14 1.093V8h1.941l-.31 2.023H9.094v4.892A7.001 7.001 0 0 0 15 8z"
      />
      <path
        fill="#fff"
        d="M10.725 10.023 11.035 8H9.094V6.687c0-.553.27-1.093 1.14-1.093h.883V3.87s-.801-.137-1.567-.137c-1.6 0-2.644.97-2.644 2.724V8H5.13v2.023h1.777v4.892a7.037 7.037 0 0 0 2.188 0v-4.892h1.63z"
      />
    </svg>
  );
}