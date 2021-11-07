function init() {

  //TODO change color when pandas collide

  // edit collision logic, and make pandas slide in the opposite direction to hit direction

  // TODO could hitarea size be changed based on panda's pose?
  // TODO limit how much it slides

  const pandaSvg = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="20%" viewBox="0 0 624 48">
  <path d="M 601 9h1v1h1v1h1v1h-1v2h-3v-1h-1v-2h1v-1h1v-1"/> <path d="M 18 10h2v1h1v1h-1v1h-1v2h-2v-4h1v-1"/> <path fill="#fff" d="M 22 10h7v1h1v1h1v2h1v3h1v4h-5v1h-6v-1h-5v-1h-1v-4h1v-1h2v-2h1v-1h1v-1h1v-1"/> <path d="M 30 10h2v1h1v3h-2v-2h-1v-2"/> <path d="M 114 10h2v1h1v1h-1v1h-1v2h-2v-4h1v-1"/> <path fill="#fff" d="M 117 10h7v1h1v1h1v2h1v2h1v1h1v4h-3v1h-10v-1h-3v-1h-1v-3h1v-1h1v-1h1v-2h1v-1h1v-2"/> <path d="M 125 10h3v1h1v4h-1v1h-1v-2h-1v-2h-1v-2"/> <path d="M 66 12h3v2h-1v1h-1v1h-1v-1h-1v-2h1v-1"/> <path fill="#fff" d="M 70 12h6v1h1v1h1v1h2v3h1v4h-3v1h-12v-1h-2v-3h1v-1h1v-2h1v-1h1v-1h1v-1h1v-1"/> <path d="M 76 12h4v3h-2v-1h-1v-1h-1v-1"/> <path d="M 593 12h3v2h-1v1h-1v1h-2v-3h1v-1"/> <path fill="#fff" d="M 596 12h3v1h1v1h3v-2h2v1h-1v3h2v-3h3v1h-1v1h2v5h-1v1h-5v1h-4v-1h-4v1h-3v1h-1v-2h1v-4h-1v-1h2v-1h1v-1h1v-2"/> <path d="M 604 13h2v3h-2v-3"/> <path d="M 166 14h3v3h-1v1h-3v-3h1v-1"/> <path d="M 608 14h1v1h-1v-1"/> <path fill="#fff" d="M 169 15h3v1h3v1h1v1h1v2h1v1h1v1h-1v1h-1v2h-10v-1h-3v-1h-1v-1h-1v-3h2v-1h4v-1h1v-2"/> <path d="M 222 15h1v1h2v2h1v4h-4v-3h-1v-3h1v-1"/> <path d="M 175 16h4v3h-1v1h-1v-2h-1v-1h-1v-1"/> <path d="M 308 16h1v1h1v1h1v1h1v2h-2v1h-1v1h-1v3h1v1h1v1h1v3h-1v1h-2v-1h-1v-1h-2v-1h-1v-2h-1v-1h1v-2h2v-7h2v-1"/> <path d="M 314 16h4v1h1v4h-3v-1h-2v-4"/> <path d="M 268 17h3v1h1v1h1v1h1v1h1v1h1v4h-1v2h-1v-1h-2v-2h-2v-2h1v-2h-5v-1h1v-1h1v-2"/> <path d="M 501 17h2v1h1v1h-2v1h-1v1h-1v-3h1v-1"/> <path d="M 548 17h3v1h-1v1h-1v1h-1v1h-1v-3h1v-1"/> <path fill="#fff" d="M 552 17h5v3h-6v1h-3v-1h1v-1h1v-1h2v-1"/> <path d="M 557 17h4v3h-4v-3"/> <path d="M 209 18h2v1h1v3h3v1h1v2h-1v1h-2v1h3v1h8v-1h-1v-1h-1v-3h4v4h-1v2h-11v-1h-3v4h1v1h-2v-1h-1v-1h-1v-4h1v-2h-1v-6h1v-1"/> <path fill="#fff" d="M 216 18h5v1h1v3h4v1h-4v3h1v1h1v1h-8v-1h-3v-1h2v-1h1v-2h-1v-1h-3v-2h1v1h3v-3"/> <path d="M 260 18h3v1h1v2h-1v1h-2v1h-1v3h1v2h-1v1h-1v2h3v1h1v3h-1v1h-3v-1h-1v-4h-1v-1h-1v-1h-1v-4h1v-1h2v-4h1v-1h1v-1"/> <path d="M 364 18h3v1h1v2h-2v-1h-3v-1h1v-1"/> <path d="M 509 18h2v1h1v2h-1v1h1v3h-1v1h3v1h1v1h1v2h-1v1h1v3h-1v1h-4v-4h1v-1h-2v-1h-2v-1h-8v1h-1v1h-2v-2h1v-2h1v-1h2v-1h6v1h3v-3h-1v-1h-1v-2h1v-1"/> <path d="M 159 19h2v1h1v2h1v1h1v1h3v1h10v-2h1v-1h1v-1h3v4h-1v1h-1v1h-1v1h-5v-1h-13v-1h-1v-1h-1v-1h-1v-4h1v-1"/> <path fill="#fff" d="M 213 19h1v1h-1v-1"/> <path d="M 214 19h2v2h-3v-1h1v-1"/> <path d="M 356 19h3v1h-1v1h-1v1h-1v1h-1v2h-1v-4h1v-1h1v-1"/> <path d="M 460 19h3v1h1v2h-2v1h-1v-1h-1v-3"/> <path fill="#fff" d="M 502 19h6v2h1v1h1v3h-3v-1h-6v1h-2v1h-1v-2h1v-2h1v-1h1v-1h1v-1"/> <path fill="#fff" d="M 312 20h4v1h4v1h-1v1h-1v2h-1v1h1v1h1v3h1v1h1v-1h1v4h-2v1h-3v1h-7v-1h-2v-1h-1v-3h1v1h2v-1h1v-3h-1v-1h-1v-1h-1v-3h1v-1h1v-1h2v-1"/> <path fill="#fff" d="M 358 20h8v1h2v1h1v2h-4v-1h-3v1h-5v1h-1v1h-2v-1h1v-2h1v-1h1v-1h1v-1"/> <path d="M 403 20h3v2h-1v2h-1v-1h-1v-3"/> <path fill="#fff" d="M 407 20h5v1h2v1h1v1h1v1h1v4h-1v1h-3v1h-8v-1h-1v-1h-1v-2h1v-2h1v-2h1v-1h1v-1"/> <path d="M 412 20h4v3h-1v-1h-1v-1h-2v-1"/> <path d="M 451 20h4v1h-1v1h-1v1h-1v2h-1v-5"/> <path fill="#fff" d="M 455 20h5v2h1v1h1v3h2v-1h1v-1h1v4h-2v1h-1v1h-5v1h-1v-1h-5v-1h-1v-4h1v-2h1v-1h1v-1h1v-1"/> <path d="M 551 20h6v1h3v1h1v1h1v1h1v3h-1v-1h-2v-1h-2v-1h-9v1h-2v1h-1v-3h1v-1h1v-1h3v-1"/> <path fill="#fff" d="M 557 20h4v1h1v2h-1v-1h-1v-1h-3v-1"/> <path d="M 17 21h5v1h6v-1h5v1h1v1h1v2h1v6h-1v5h-1v2h-1v1h-4v-1h-1v-2h-1v-1h1v-1h2v-1h1v-1h1v-3h-1v-3h-1v-1h-1v-1h-8v1h-2v1h-1v1h-1v4h1v2h2v1h1v1h2v1h-1v1h-2v1h-2v-1h-1v-1h-1v-7h-1v-5h1v-2h1v-1"/> <path d="M 113 21h3v1h10v-1h3v1h1v1h1v2h1v2h-1v3h-2v-3h-1v-1h-2v-1h-7v1h-2v1h-1v2h-1v2h-1v2h1v1h1v1h3v2h-1v1h-1v1h-4v-1h-1v-6h-1v-1h-1v-3h1v-3h1v-2h1v-2"/> <path fill="#fff" d="M 263 21h8v2h-1v2h2v2h-1v-1h-2v3h2v-1h1v-1h2v1h1v2h-1v-1h-2v1h-1v3h1v2h-1v1h-9v-1h1v-3h-1v-1h-3v-2h1v-1h1v2h3v-2h-1v-1h-1v1h-1v-2h-1v-3h1v-1h2v-1"/> <path d="M 320 21h3v9h-2v1h-1v-1h-1v-3h-1v-1h-1v-1h1v-2h1v-1h1v-1"/> <path fill="#fff" d="M 511 21h1v1h-1v-1"/> <path d="M 596 21h4v1h4v-1h5v1h2v2h1v3h1v2h-1v2h-1v5h-1v2h-2v1h-2v-1h-1v-1h-1v-4h1v-1h2v-1h2v-1h2v-1h-1v-1h-1v-1h-1v-1h-1v-1h-3v-1h-8v1h-2v1h-2v-3h1v-1h3v-1"/> <path d="M 65 22h1v1h12v-1h3v1h1v2h1v6h-2v-2h-1v-2h-1v-1h-2v-1h-6v1h-3v1h-1v1h-1v1h-1v2h-2v-6h1v-2h1v-1"/> <path fill="#fff" d="M 462 22h2v1h-2v-1"/> <path d="M 362 23h3v1h5v1h2v1h1v1h1v2h1v2h-1v2h-3v2h-4v-2h-1v-1h1v-1h3v-2h1v-1h-1v-2h-2v-1h-9v1h-3v-1h1v-1h5v-1"/> <path d="M 462 23h2v1h1v1h-1v1h-2v-3"/> <path fill="#fff" d="M 464 23h1v1h-1v-1"/> <path fill="#fff" d="M 512 23h1v3h-2v-1h1v-2"/> <path fill="#fff" d="M 21 24h8v1h1v1h1v3h1v3h-1v1h-1v1h-2v1h-7v-1h-1v-1h-2v-2h-1v-4h1v-1h1v-1h2v-1"/> <path d="M 417 24h1v1h1v2h1v1h-1v2h-1v1h-5v1h-9v-1h-2v-1h-1v-3h1v-1h1v2h1v1h1v1h8v-1h3v-1h1v-4"/> <path fill="#fff" d="M 549 24h9v1h2v1h2v1h1v2h-4v1h-1v2h-1v1h-6v-1h-2v-1h-2v-2h-1v-3h1v-1h2v-1"/> <path fill="#fff" d="M 596 24h8v1h3v1h1v1h1v1h1v1h1v1h-2v1h-2v1h-2v1h-1v3h-4v-1h-2v-1h-2v-1h-1v-1h-1v-1h-1v-3h-1v-2h2v-1h2v-1"/> <path fill="#fff" d="M 71 25h6v1h2v1h1v2h1v2h1v1h-1v1h-1v1h-1v1h-3v1h-5v-1h-3v-1h-1v-1h-1v-1h-1v-3h1v-1h1v-1h1v-1h3v-1"/> <path fill="#fff" d="M 119 25h7v1h2v1h1v3h1v2h-1v1h-2v1h-1v1h-3v1h-4v-1h-3v-1h-1v-1h-1v-2h1v-2h1v-2h1v-1h2v-1"/> <path d="M 265 25h2v1h-2v-1"/> <path fill="#fff" d="M 359 25h9v1h2v2h1v1h-1v2h-3v1h-1v1h1v2h-2v1h-7v-1h1v-2h-1v-1h-3v-1h-1v-3h1v-1h1v-1h3v-1"/> <path d="M 403 25h1v1h-1v-1"/> <path d="M 449 25h2v4h1v1h5v1h1v-1h5v-1h1v-1h2v-1h1v1h2v5h-1v-1h-2v-1h-6v1h-8v-1h-1v-1h-1v-1h-1v-4"/> <path d="M 269 26h2v1h1v1h-1v1h-2v-3"/> <path d="M 354 26h2v1h-1v1h-1v3h1v1h3v1h1v2h-1v1h-3v-2h-3v-1h-1v-4h1v-1h1v-1h1v-1"/> <path d="M 362 26h1v1h-1v-1"/> <path d="M 365 26h2v1h1v1h-1v1h-2v-3"/> <path fill="#fff" d="M 161 27h13v1h4v4h-1v2h-2v1h-3v1h-6v-1h-3v-1h-1v-1h-1v-4h-1v-1h1v-1"/> <path d="M 262 27h1v1h1v2h-3v-2h1v-1"/> <path d="M 357 27h2v1h1v2h-1v1h-2v-2h-1v-1h1v-1"/> <path fill="#fff" d="M 497 27h1v1h-1v-1"/> <path fill="#fff" d="M 211 28h3v1h11v4h-1v2h-1v-1h-1v1h-3v1h-4v-1h-3v-1h-1v-1h1v-1h-1v-4"/> <path fill="#fff" d="M 500 28h8v1h2v1h2v1h-1v4h-3v1h-6v-1h-2v-1h-1v-1h-1v-2h-1v-1h2v-1h1v-1"/> <path d="M 592 28h1v3h1v1h1v1h1v1h2v3h-1v1h-3v-1h-1v-1h-1v-8"/> <path d="M 158 29h3v4h1v1h-2v-1h-2v-4"/> <path d="M 272 29h2v1h1v1h1v1h-1v1h-1v1h-2v-1h-1v-3h1v-1"/> <path d="M 546 29h1v2h2v1h2v3h-1v1h-2v-1h-1v-1h-1v-5"/> <path d="M 559 29h4v5h-1v1h-4v-1h-1v-2h1v-2h1v-1"/> <path fill="#fff" d="M 418 30h1v4h-2v1h-3v1h-8v-1h-2v-3h9v-1h5v-1"/> <path fill="#fff" d="M 403 31h1v1h-1v-1"/> <path fill="#fff" d="M 460 31h6v1h2v1h-2v1h-2v1h-4v1h-5v-1h-2v-1h-1v-2h8v-1"/> <path d="M 65 32h1v1h1v1h1v1h3v1h-1v1h-1v1h-2v-1h-2v-5"/> <path d="M 81 32h1v4h-1v2h-4v-1h-1v-2h3v-1h1v-1h1v-1"/> <path d="M 129 32h1v3h-1v1h-1v1h-4v-1h-1v-1h3v-1h1v-1h2v-1"/> <path d="M 177 32h1v6h-2v1h-2v-1h-1v-1h-1v-2h3v-1h2v-2"/> <path fill="#fff" d="M 275 32h1v1h-1v-1"/> <path fill="#fff" d="M 274 33h1v1h-1v-1"/> <path d="M 222 34h1v2h-1v1h-3v-2h3v-1"/>
  </svg>
  `

  const pandaSvg2 = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="20%" viewBox="0 0 624 48"><path d="M 17 9h3v1h-1v1h-1v2h-2v-3h1v-1"/> <path fill="#fff" d="M 20 9h5v1h4v1h-1v1h-1v2h1v2h4v2h1v3h-1v1h-1v1h-10v-1h-3v-1h-2v-1h-1v-5h1v-1h1v-1h1v-2h1v-1h1v-1"/> <path d="M 113 9h3v2h-1v1h-1v1h-2v-3h1v-1"/> <path d="M 29 10h2v1h1v1h1v2h-1v2h-4v-2h-1v-2h1v-1h1v-1"/> <path fill="#fff" d="M 116 10h6v1h2v1h-1v2h1v2h3v1h1v2h1v3h-1v1h-4v1h-3v-1h-5v-1h-2v-1h-2v-1h-1v-2h-1v-1h1v-2h1v-2h2v-1h1v-1h1v-1"/> <path d="M 124 10h4v1h1v3h-1v2h-4v-2h-1v-2h1v-2"/> <path fill="#fff" d="M 166 10h3v1h-1v2h1v1h1v1h2v-1h1v1h1v1h1v1h2v1h-2v2h-1v1h-2v1h-3v1h-9v-1h-1v-5h1v-2h1v-2h1v-1h1v-1h3v-1"/> <path d="M 169 10h3v1h1v3h-1v1h-2v-1h-1v-1h-1v-2h1v-1"/> <path d="M 213 10h2v1h1v3h2v3h-2v-1h-1v-2h-3v-3h1v-1"/> <path d="M 65 11h3v2h-1v1h-1v1h-2v-3h1v-1"/> <path fill="#fff" d="M 68 12h7v1h-1v2h1v1h1v1h4v1h1v4h-1v1h-2v1h-9v-1h-4v-1h-2v-1h-1v-2h1v-2h1v-1h1v-1h1v-1h1v-1h1v-1"/> <path d="M 75 12h3v1h1v4h-3v-1h-1v-1h-1v-2h1v-1"/> <path d="M 599 12h2v1h1v3h1v1h1v1h-1v1h-1v-1h-1v-2h-1v-1h-2v-2h1v-1"/> <path d="M 159 13h2v2h-1v2h-1v-1h-1v-2h1v-1"/> <path fill="#fff" d="M 209 13h3v1h3v2h1v1h2v-3h2v1h2v4h-1v2h-1v1h-2v1h-3v1h-4v1h-3v-1h-2v-7h1v-2h1v-1h1v-1"/> <path fill="#fff" d="M 216 13h2v1h-2v-1"/> <path d="M 591 13h2v2h-1v1h-1v1h-1v1h-1v-3h1v-1h1v-1"/> <path d="M 220 14h1v1h-1v-1"/> <path fill="#fff" d="M 593 14h5v1h2v1h1v2h1v1h1v-1h1v-1h1v1h1v4h-6v1h-9v1h-1v-2h-1v-4h1v-1h1v-1h1v-1h1v-1"/> <path d="M 205 15h2v2h-1v3h-1v-1h-1v-3h1v-1"/> <path d="M 548 15h3v1h-1v1h-2v1h-1v-2h1v-1"/> <path fill="#fff" d="M 550 16h4v1h2v2h1v1h2v5h-1v-1h-1v-1h-1v-1h-2v-1h-9v-2h1v-1h2v-1h2v-1"/> <path d="M 177 17h2v1h1v3h-1v1h-1v2h-1v1h-1v1h-11v1h-2v1h-2v1h-1v1h-1v-3h-1v-1h-1v-1h-1v-4h1v-1h2v2h1v1h9v-1h3v-1h2v-1h1v-2h2v-1"/> <path d="M 223 17h2v1h1v4h-1v1h-1v1h-2v1h-7v1h-3v1h-1v1h-2v1h-1v-2h-1v-2h-1v-1h2v1h3v-1h4v-1h3v-1h2v-1h1v-2h1v-1h1v-1"/> <path d="M 556 17h3v1h1v2h-3v-1h-1v-2"/> <path d="M 501 19h3v1h1v1h-5v-1h1v-1"/> <path d="M 263 20h2v1h1v3h-5v1h-1v-3h1v-1h2v-1"/> <path d="M 444 20h2v1h1v2h-1v1h-1v1h-1v-1h-1v-3h1v-1"/> <path fill="#fff" d="M 449 20h3v1h-1v3h4v3h2v-3h1v2h3v1h2v1h1v4h-1v2h-1v1h-2v-2h-2v-1h-1v-2h-3v1h-7v-1h-2v-1h-1v-4h1v-1h1v-1h1v-2h2v-1"/> <path d="M 452 20h3v1h1v2h-1v1h-4v-3h1v-1"/> <path d="M 16 21h2v1h3v1h11v1h1v1h1v5h-1v6h-1v1h-4v-1h1v-1h1v-1h-2v-5h-1v-1h-3v-1h-8v2h-1v-1h-1v-4h1v-2h1v-1"/> <path d="M 113 21h1v1h2v1h5v1h3v-1h4v1h3v1h1v1h1v3h-1v1h-6v-1h-2v-1h-2v-1h-4v-1h-3v1h-3v1h-1v3h-2v-1h-1v-4h1v-1h1v-1h1v-1h1v-1h1v-1"/> <path d="M 268 21h4v1h1v4h-1v5h-1v2h-1v1h-1v1h-1v-2h-1v-2h-2v-1h1v-1h1v-1h1v-1h-1v-2h-1v-1h1v-2h1v-1"/> <path d="M 302 21h4v1h2v-1h4v1h1v1h1v1h1v1h1v2h1v1h1v3h-1v2h-1v1h-4v-1h-2v-1h-1v-1h-1v-6h-1v1h-1v1h-2v-1h-1v-2h-1v-3"/> <path fill="#fff" d="M 499 21h8v3h3v5h-4v-1h2v-1h1v-2h-2v1h-1v2h-2v-1h-2v-1h-7v-1h1v-1h1v-1h1v-1h1v-1"/> <path d="M 507 21h3v1h1v1h-1v1h-3v-3"/> <path d="M 545 21h9v1h2v1h1v1h1v1h1v2h1v3h-1v1h-2v-1h-1v-1h-1v-1h-1v-1h-2v-1h-2v-1h-7v-2h1v-1h1v-1"/> <path d="M 63 22h2v1h4v1h9v-1h2v1h1v1h1v2h1v6h-1v1h-1v4h-1v1h-1v1h-3v-1h-1v-4h1v-2h3v-2h-1v-1h-1v-1h-1v-1h-5v-1h-6v1h-1v1h-1v2h1v2h1v1h1v1h2v1h-1v1h-3v-1h-1v-1h-1v-6h-1v-1h-1v-2h1v-2h1v-1h1v-1"/> <path fill="#fff" d="M 456 22h1v2h-2v-1h1v-1"/> <path d="M 600 22h8v1h1v2h-1v1h-14v1h-2v1h-2v-4h1v-1h9v-1"/> <path d="M 398 23h2v2h-1v1h-1v1h-2v-2h1v-1h1v-1"/> <path d="M 405 23h3v1h1v3h-4v-1h-1v-2h1v-1"/> <path fill="#fff" d="M 222 24h2v1h1v6h-1v2h-1v1h-1v1h-1v1h-10v-1h-1v-1h-1v-2h-1v-3h1v-1h2v-1h1v-1h3v-1h7v-1"/> <path fill="#fff" d="M 261 24h5v1h1v2h1v1h-1v1h-1v1h-1v1h2v2h1v3h-5v1h-1v2h-6v-1h-3v-2h-1v-4h1v3h2v-3h-1v-2h2v-1h2v-4h3v-1"/> <path d="M 362 24h3v1h1v1h-2v-1h-2v-1"/> <path fill="#fff" d="M 400 24h4v2h1v1h4v-2h1v-1h1v2h3v1h-2v1h-2v4h-1v1h-1v1h-2v1h-6v-1h-2v-2h-1v-5h1v-1h1v-1h1v-1"/> <path d="M 411 24h4v4h5v1h1v3h-1v1h-4v-1h1v-3h-1v2h-1v2h-1v1h-1v1h-1v1h-2v1h-2v1h-7v-1h-2v-1h-1v-1h-1v-3h1v2h2v1h6v-1h2v-1h1v-1h1v-4h2v-1h2v-1h-3v-2"/> <path d="M 455 24h2v3h-2v-3"/> <path d="M 254 25h4v4h-2v1h-2v2h1v3h-2v-3h-1v-2h1v-4h1v-1"/> <path fill="#fff" d="M 307 25h1v6h1v1h1v1h-2v1h-1v2h3v-1h1v-1h-1v-1h2v1h4v-1h1v3h-1v1h-1v-1h-2v1h-2v2h-8v-1h-2v-1h-1v-4h1v2h2v-3h-1v-1h1v-1h1v-1h1v-1h-1v-1h2v-1h1v-1"/> <path fill="#fff" d="M 358 25h6v1h3v6h1v2h-1v1h-1v-4h-1v-1h-1v-1h-2v-1h-2v-1h-4v-1h2v-1"/> <path d="M 507 25h2v2h-1v1h-2v-2h1v-1"/> <path fill="#fff" d="M 543 25h7v1h2v1h2v1h1v1h1v1h1v1h-1v2h-1v1h-3v1h-4v-1h-2v-1h-1v-1h-2v-1h-1v-5h1v-1"/> <path fill="#fff" d="M 115 26h3v1h4v1h2v1h2v1h2v2h-2v1h-2v1h-2v2h-5v-1h-1v-1h-2v-1h-2v-2h-1v-3h1v-1h3v-1"/> <path fill="#fff" d="M 165 26h12v3h1v3h-4v1h-1v1h-1v3h-3v1h-4v-1h-2v-1h-2v-2h-1v-2h-1v-2h1v-1h1v-1h2v-1h2v-1"/> <path d="M 225 26h3v5h-1v1h-1v1h-2v-2h1v-5"/> <path d="M 299 26h4v1h1v1h1v1h-1v1h-1v1h-1v1h1v3h-2v-2h-1v-2h-1v-1h-1v-3h1v-1"/> <path fill="#fff" d="M 494 26h1v1h-1v-1"/> <path d="M 495 26h7v1h2v1h2v1h4v1h1v2h1v1h2v3h-1v1h-3v-1h-1v-2h-2v-1h-1v-1h-2v-1h-9v1h-1v-5h1v-1"/> <path fill="#fff" d="M 594 26h11v5h-3v1h-1v3h-5v-1h-3v-1h-1v-1h-2v-4h2v-1h2v-1"/> <path fill="#fff" d="M 16 27h8v1h3v1h1v5h2v1h-1v1h-1v1h-6v-1h-3v-1h-1v-1h-1v-1h-1v-1h-1v-3h1v-2"/> <path fill="#fff" d="M 65 27h6v1h5v1h1v1h1v1h1v2h-3v2h-1v2h-6v-1h-1v-1h-2v-1h-1v-1h-1v-2h-1v-2h1v-1h1v-1"/> <path d="M 355 27h5v1h2v1h2v1h1v1h1v7h-1v1h-3v-1h-1v-3h1v-3h1v-1h-2v-1h-1v-1h-2v-1h-3v-1"/> <path d="M 367 27h4v1h1v4h-2v1h-2v-1h-1v-5"/> <path fill="#fff" d="M 415 27h1v1h-1v-1"/> <path fill="#fff" d="M 352 28h6v1h2v1h1v1h2v1h-1v3h-1v2h-1v-1h-4v1h-1v1h-4v-1h-1v-2h-1v-5h1v-1h2v-1"/> <path d="M 348 29h2v1h-1v5h1v2h-2v-1h-1v-2h-1v-1h-1v-2h1v-1h2v-1"/> <path d="M 354 29h2v1h-2v-1"/> <path fill="#fff" d="M 416 29h1v3h-1v2h-1v1h-1v1h-2v-1h1v-1h1v-1h1v-2h1v-2"/> <path d="M 464 29h1v1h2v1h1v3h-1v1h-5v-1h1v-2h1v-3"/> <path d="M 351 30h2v2h-2v-2"/> <path d="M 445 30h2v1h7v-1h3v2h1v1h2v3h-1v1h-7v-1h-2v-1h-2v-1h-1v-1h-1v-1h-1v-2"/> <path d="M 14 31h1v1h1v1h1v1h1v1h1v2h-1v1h-4v-1h-1v-3h1v-3"/> <path d="M 111 31h1v2h2v1h2v2h-4v-1h-1v-4"/> <path d="M 257 31h2v1h-2v-1"/> <path d="M 305 31h1v1h-1v-1"/> <path d="M 357 31h2v3h-3v-2h1v-1"/> <path fill="#fff" d="M 495 31h9v1h2v1h1v1h2v3h-4v1h-4v-1h-4v-1h-2v-1h-1v-3h1v-1"/> <path d="M 542 31h1v1h2v1h1v1h1v1h-1v1h-1v1h-2v-1h-1v-5"/> <path d="M 602 31h3v1h1v5h-1v1h-3v-1h-1v-5h1v-1"/> <path d="M 126 32h2v4h-1v2h-1v1h-2v1h-2v-1h-1v-3h1v-2h2v-1h2v-1"/> <path d="M 174 32h4v1h1v5h-1v1h-4v-1h-1v-1h-1v-3h1v-1h1v-1"/> <path d="M 260 32h2v1h1v2h-1v1h-3v-3h1v-1"/> <path d="M 590 32h2v1h1v1h3v2h-1v1h-3v-1h-1v-2h-1v-2"/> <path d="M 308 33h2v1h1v1h-1v1h-3v-2h1v-1"/> <path d="M 555 33h2v3h-1v1h-3v-1h-2v-1h1v-1h3v-1"/> <path d="M 251 35h1v1h1v2h-2v-3"/> <path d="M 299 35h1v2h1v1h-3v-2h1v-1"/> <path d="M 263 36h4v2h-1v1h-4v-2h1v-1"/> <path d="M 313 36h2v1h1v2h-2v1h-2v-1h-1v-2h2v-1"/> <path d="M 356 36h4v2h-1v1h-3v-1h-1v-1h1v-1"/> <path fill="#fff" d="M 410 36h2v1h-2v-1"/></svg>`

  //* add sound?

  const body = document.querySelector('.wrapper')
  const indicator = document.querySelector('.indicator')
  const animationFrames = {
    walk: [0, 1, 2, 1],
    stop: [0],
    fall: [3, 4, 5, 6, 5, 7],
    fallen: [7],
    standUp: [7, 8, 9, 10, 11, 12]
  }
  const cellSize = 100
  const directions = {
    up: 0,
    dUp: 1,
    side: 2,
    dDown: 3,
    down: 4,
  }
  const sprites = {
    up: 'up',
    upright: 'dUp',
    right: 'side',
    downright: 'dDown',
    down: 'down',
    downleft: 'dDown',
    left: 'side',
    upleft: 'dUp',
  }
  const turnDirections = Object.keys(sprites)
  const pandas = {}
  const pandaIndicators = []
  let pandaCount = 0

  const animatePanda = (panda, pandaObj) =>{
    const { frame:i, animation, frameSpeed} = pandaObj
    const pandaSprite = panda.childNodes[1].childNodes[1]
    pandaSprite.style.marginLeft = `-${animationFrames[animation][i] * cellSize}px`
    pandaSprite.style.marginTop = `-${cellSize * directions[sprites[pandaObj.direction]]}px`
    pandaObj.frame = i === animationFrames[animation].length - 1 ? 0 : i + 1
    pandaObj.frameTimer = setTimeout(()=>{
      animatePanda(panda, pandaObj)
    }, frameSpeed)
  }

  const changeAnimation = (pandaObj, animation) => {
    pandaObj.frame = 0
    pandaObj.animation = animation
  }

  const stopPanda = (panda, pandaObj) =>{
    changeAnimation(pandaObj, 'stop')
    const { offsetTop, offsetLeft } = panda.style
    panda.style.marginLeft = offsetLeft
    panda.style.marginTop = offsetTop
    panda.style.zIndex = offsetTop
    pandaObj.stop = true
  }

  const startPanda = (panda, pandaObj) =>{
    animatePanda(panda, pandaObj)
    pandaObj.stop = false
  }

  const pandaMarginLeft = panda => +panda.style.marginLeft.replace('px', '')
  const pandaMarginTop = panda => +panda.style.marginTop.replace('px', '')

  const checkBoundaryAndUpdatePandaPos = (x, y, panda, pandaObj) =>{
    if (x > 0 && x < (body.clientWidth - 100)){
      panda.style.marginLeft = `${x}px`
      pandaObj.prev[0] = x
    } 
    if (y > 0 && y < (body.clientHeight - 100)){
      panda.style.marginTop = `${y}px`
      panda.style.zIndex = y
      pandaObj.prev[1] = y
    }
  }

  const slidePanda = (panda, pandaObj) =>{
    let x = pandaMarginLeft(panda)
    let y = pandaMarginTop(panda)

    const distance = 50
    if (pandaObj.hit.includes('left')) x += distance
    if (pandaObj.hit.includes('right')) x -= distance
    if (pandaObj.hit.includes('up')) y += distance
    if (pandaObj.hit.includes('down')) y -= distance
    
    checkBoundaryAndUpdatePandaPos(x, y, panda, pandaObj)
  } 

  const knockPanda = (panda, pandaObj) =>{
    if (pandaObj.knocked) return
    pandaObj.knocked = true 
    pandaObj.stop = true
    slidePanda(panda, pandaObj)
    changeAnimation(pandaObj, 'fall')

    const a = 150 * 6
    const b = 1000 * (Math.ceil(Math.random() * 4) + 1)
    const c = 150 * 6

    pandaObj.frameTimer = setTimeout(()=>{
      changeAnimation(pandaObj, 'fallen')
    }, a)

    pandaObj.frameTimer = setTimeout(()=>{
      changeAnimation(pandaObj, 'standUp')
    }, a + b)

    pandaObj.frameTimer = setTimeout(()=>{
      changeAnimation(pandaObj, 'walk')
      pandaObj.hit = false
      pandaObj.knocked = false
      pandaObj.stop = false
      panda.classList.remove('stop')
      moveAbout(panda, pandaObj)
    }, a + b + c)

  }


  const moveAbout = (panda, pandaObj) =>{
    if (pandaObj.hit) return
    const turnOptions = [1, 1, -1, -1 , 0]
    const turnValue = turnOptions[Math.floor(Math.random() * turnOptions.length)]
    pandaObj.turnIndex += turnValue
    if (pandaObj.turnIndex < 0) pandaObj.turnIndex = 7
    if (pandaObj.turnIndex > 7) pandaObj.turnIndex = 0
    pandaObj.direction = turnDirections[pandaObj.turnIndex]
    const { direction: dir } = pandaObj
    panda.childNodes[1].className = `panda_inner_wrapper facing_${dir}`
    
    let x = pandaMarginLeft(panda)
    let y = pandaMarginTop(panda)
    
    // const randomDistance = Math.round(Math.random() * 100) + 50
    const distance = 50
    if (dir !== 'up' && 'dir' !== 'down') x += (dir.includes('left')) ? -distance : distance
    if (dir !== 'left' && 'dir' !== 'right') y += (dir.includes('up')) ? -distance : distance

    if (x === pandaObj.prev[0] && y === pandaObj.prev[1]){
      console.log('trigger')
      stopPanda(panda, pandaObj)
    } 
    
    //TODO can it turn based on if close to edge? 
    checkBoundaryAndUpdatePandaPos(x, y, panda, pandaObj)

    if (!pandaObj.stop) pandaObj.moveTimer = setTimeout(()=>{
      moveAbout(panda, pandaObj)
    }, pandaObj.moveSpeed)
  }
  
  const randomMoveSpeed = () =>{
    const range = [850, 900, 950, 1000, 1100]
    return range[Math.floor(Math.random() * range.length)]
  }

  const mapPandaAssets = () =>{
    return ['test_panda_svg.svg', '2dup.png', '3side.png', '4ddown.png', '5down.png'].map((file, i) =>{
      if (i === 0) return pandaSvg
      if (i === 1) return pandaSvg2
      return  `<img src="/assets/${file}" alt="panda" />`
    }).join('')
  }

  const mapHitCorners = pandaCount =>{
    return ['upleft', 'upright', 'downleft', 'downright'].map(dir =>{
      return  `<div class="hit_corner" data-pos="${dir}" data-id="${pandaCount}" ></div>`
    }).join('')
  }

  const createPanda = (x, y) =>{
    const panda = document.createElement('div')
    panda.className = 'panda_wrapper'
    panda.innerHTML = `
    <div class="panda_inner_wrapper">
      <div class="panda_sprite">
        ${mapPandaAssets()}
      </div>
      <div class="hit_wrapper">
        <div class="hit_area">
          ${mapHitCorners(pandaCount)}
        </div>
      </div>
    </div>
    `
    panda.style.marginTop = `${y}px`
    panda.style.marginLeft = `${x}px`
    panda.style.zIndex = y
    body.append(panda)

    pandas[pandaCount] = { 
      panda,
      animation: 'walk',
      frame: 0, 
      direction: 'down',
      frameTimer: null,
      moveTimer: null,
      turnIndex: 0,
      frameSpeed: 150,
      moveSpeed: randomMoveSpeed(),
      prev: [panda.style.marginLeft, panda.style.marginTop], 
    }
    const pandaObj = pandas[pandaCount]
    const pandaStatus = document.createElement('p')
    pandaStatus.dataset.index = pandaCount
    indicator.append(pandaStatus)
    pandaIndicators.push(pandaStatus)
    
    startPanda(panda, pandaObj)
    moveAbout(panda, pandaObj)
    
    // console.log(moveAbout(panda, pandaObj))

    pandaCount++
  }
  
  const randomP = max =>{
    return Math.ceil(Math.random() * max)
  }
  
  new Array(20).fill('').map(()=>{
    return [randomP(body.clientWidth - 100), randomP(body.clientHeight - 100)]
  }).forEach( pos => {
    createPanda(pos[0], pos[1])
  })

  // const test = [[100, 100], [150, 150]]
  // test.forEach( pos => {
  //   createPanda(pos[0], pos[1])
  // })

  setInterval(()=>{
    pandaIndicators.forEach((indicator, i)=>{
      const { panda } = pandas[i]
      indicator.innerHTML = `panda-${i} x:${panda.offsetLeft}px y:${panda.offsetTop}px ${pandas[i].hit}`
    })
  },100)

  
  const hitCorners = document.querySelectorAll('.hit_corner')

  const hitObj = n =>{
    let obj = {}
    for(let i = 0; i < n; i++){
      obj[i] = {
        upleft: false,
        upright: false,
        downleft: false,
        downright: false,
      }
    }
    return obj
  }

  const hitCheck = (hitDirection, pandaObj, pandaDirection) =>{
    if (hitDirection) { 
      pandaObj.direction = pandaDirection 
      pandaObj.hit = pandaDirection
    }
  }

  const overlap = (a, b) =>{
    const buffer = 20
    return Math.abs(a - b) < buffer
  }

  const collisionCheck = () =>{
    const hit = hitObj(pandaCount)
    hitCorners.forEach(h=>h.style.backgroundColor = 'transparent')
    hitCorners.forEach(a=>{
      const { x:aX, y:aY, width:aW, height:aH } = a.getBoundingClientRect()
      const { id:aId, pos:aPos } = a.dataset
      hitCorners.forEach(b=>{
        const { id:bId, pos:bPos } = b.dataset
        if (aId === bId) return
        const { x:bX, y:bY, width:bW, height:bH } = b.getBoundingClientRect()
        if (overlap(aX, bX) && overlap(aX + aW, bX + bW) && overlap(aY, bY) && overlap(aY + aH, bY + bH)
          ) {
            hit[aId][aPos] = true
            hit[bId][bPos] = true
            a.style.backgroundColor = 'orange'
            b.style.backgroundColor = 'orange'
          }
      })
    })
    // console.log('hit', hit)
    for (let i = 0; i < pandaCount; i++){
      const { upleft, upright, downleft, downright } = hit[i]
      const panda = pandas[i]

      hitCheck(upleft, panda, 'upleft')
      hitCheck(downleft, panda, 'downleft')
      hitCheck(upright, panda, 'upright')
      hitCheck(downright, panda, 'downright')

      hitCheck(upleft && downleft, panda, 'left')
      hitCheck(upright && downright, panda, 'right')
      hitCheck(upleft && upright, panda, 'up')
      hitCheck(downleft && downright, panda, 'down')

      // TODO what if all hit check is true?
  
      if ( upleft || upright || downleft || downright && !panda.knocked) {
        pandas[i].panda.classList.add('stop')
        const { direction } = panda
        panda.panda.childNodes[1].className = `panda_inner_wrapper facing_${direction}`
        knockPanda(panda.panda, panda)
        // slidePanda(panda.panda, panda)
      }
    }
  }

  setInterval(collisionCheck, 50)



  // moving for test
  window.addEventListener('keyup',(e)=>{
    const hitAreas = document.querySelectorAll('.hit_area')
    const k = e.key.toLowerCase().replace('arrow','')[0]
    const pObj = pandas[0]
    // console.log(panda)
    const { turnIndex:t, panda:p } = pObj
    if (k === 'x') pObj.turnIndex = t === 7 ? 0 : t + 1
    if (k === 'z') pObj.turnIndex = t === 0 ? 7 : t - 1
    
    hitAreas[0].style.backgroundColor = 'transparent'
    if (pObj.stop) startPanda(p, pObj)

    pObj.direction = turnDirections[pObj.turnIndex]
    const { direction: dir } = pObj
    p.childNodes[1].className = `panda_inner_wrapper ${dir}`

    const { marginLeft, marginTop } = p.style
    let x = +marginLeft.replace('px','')
    let y = +marginTop.replace('px','')

    if (k === 'u') p.style.marginTop = `${y - 10}px`
    if (k === 'd') p.style.marginTop = `${y + 10}px`
    if (k === 'r') p.style.marginLeft = `${x + 10}px`
    if (k === 'l') p.style.marginLeft = `${x - 10}px`

    // console.log(pandas)
  })


  const makeDraggable = (panda, pandaObj) =>{

    const onDrag = e => {
      // const { x: offSetX, y: offSetY } = body.getBoundingClientRect()
      const newX = e.clientX
      const newY = e.clientY
      panda.style.marginLeft = `${newX - 50}px`
      panda.style.marginTop = `${newY - 50}px`
    }
    const onLetGo = () => {
      document.removeEventListener('mousemove', onDrag)
      document.removeEventListener('mouseup', onLetGo)

      if (!pandaObj.hit) {
        pandaObj.stop = false
        moveAbout(panda, pandaObj)
        panda.classList.remove('stop')
      }
      
    } 
    const onGrab = () => {
      // if (!pandaObj.hit) return
      document.addEventListener('mousemove', onDrag)
      document.addEventListener('mouseup', onLetGo)
      pandaObj.stop = true
      panda.classList.add('stop')
    }
    panda.addEventListener('mousedown', onGrab)
  }
  

  for (let x = 0; x < pandaCount; x++){
    const p = pandas[x]
    makeDraggable(p.panda, p)
  }
}

window.addEventListener('DOMContentLoaded', init)

