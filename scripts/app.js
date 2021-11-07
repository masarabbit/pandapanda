function init() {

  //TODO change color when pandas collide
  //* add sound?
  const pandaSvg = {
    up: `D 601 9h1v1h1v1h1v1hNv2h-3vNhNvTh1vNh1vN"/ D 18 10h2v1h1v1hNv1hNv2hTv-4h1vN"/ F 22 10h7v1h1v1h1v2h1v3h1v4h-5v1h-6vNh-5vNhNv-4h1vNh2vTh1vNh1vNh1vN"/ D 30 10h2v1h1v3hTvThNvT"/ D 114 10h2v1h1v1hNv1hNv2hTv-4h1vN"/ F 117 10h7v1h1v1h1v2h1v2h1v1h1v4h-3v1hN0vNh-3vNhNv-3h1vNh1vNh1vTh1vNh1vT"/ D 125 10h3v1h1v4hNv1hNvThNvThNvT"/ D 66 12h3v2hNv1hNv1hNvNhNvTh1vN"/ F 70 12h6v1h1v1h1v1h2v3h1v4h-3v1hN2vNhTv-3h1vNh1vTh1vNh1vNh1vNh1vN"/ D 76 12h4v3hTvNhNvNhNvN"/ D 593 12h3v2hNv1hNv1hTv-3h1vN"/ F 596 12h3v1h1v1h3vTh2v1hNv3h2v-3h3v1hNv1h2v5hNv1h-5v1h-4vNh-4v1h-3v1hNvTh1v-4hNvNh2vNh1vNh1vT"/ D 604 13h2v3hTv-3"/ D 166 14h3v3hNv1h-3v-3h1vN"/ D 608 14h1v1hNvN"/ F 169 15h3v1h3v1h1v1h1v2h1v1h1v1hNv1hNv2hN0vNh-3vNhNvNhNv-3h2vNh4vNh1vT"/ D 222 15h1v1h2v2h1v4h-4v-3hNv-3h1vN"/ D 175 16h4v3hNv1hNvThNvNhNvN"/ D 308 16h1v1h1v1h1v1h1v2hTv1hNv1hNv3h1v1h1v1h1v3hNv1hTvNhNvNhTvNhNvThNvNh1vTh2v-7h2vN"/ D 314 16h4v1h1v4h-3vNhTv-4"/ D 268 17h3v1h1v1h1v1h1v1h1v1h1v4hNv2hNvNhTvThTvTh1vTh-5vNh1vNh1vT"/ D 501 17h2v1h1v1hTv1hNv1hNv-3h1vN"/ D 548 17h3v1hNv1hNv1hNv1hNv-3h1vN"/ F 552 17h5v3h-6v1h-3vNh1vNh1vNh2vN"/ D 557 17h4v3h-4v-3"/ D 209 18h2v1h1v3h3v1h1v2hNv1hTv1h3v1h8vNhNvNhNv-3h4v4hNv2hN1vNh-3v4h1v1hTvNhNvNhNv-4h1vThNv-6h1vN"/ F 216 18h5v1h1v3h4v1h-4v3h1v1h1v1h-8vNh-3vNh2vNh1vThNvNh-3vTh1v1h3v-3"/ D 260 18h3v1h1v2hNv1hTv1hNv3h1v2hNv1hNv2h3v1h1v3hNv1h-3vNhNv-4hNvNhNvNhNv-4h1vNh2v-4h1vNh1vN"/ D 364 18h3v1h1v2hTvNh-3vNh1vN"/ D 509 18h2v1h1v2hNv1h1v3hNv1h3v1h1v1h1v2hNv1h1v3hNv1h-4v-4h1vNhTvNhTvNh-8v1hNv1hTvTh1vTh1vNh2vNh6v1h3v-3hNvNhNvTh1vN"/ D 159 19h2v1h1v2h1v1h1v1h3v1h10vTh1vNh1vNh3v4hNv1hNv1hNv1h-5vNhN3vNhNvNhNvNhNv-4h1vN"/ F 213 19h1v1hNvN"/ D 214 19h2v2h-3vNh1vN"/ D 356 19h3v1hNv1hNv1hNv1hNv2h2vNh9vNh3v1h1v1h2v1h1v1h1v2h1v2hNv2h-3v2h-4vThNvNh1vNh3vTh1vNhNvThTvNh-9v1h-3v1hNv1hNv3h1v1h3v1h1v2hNv1h-3vTh-3vNhNv-4h1vNh1vNh1v-6h1vNh1vN"/ D 460 19h3v1h1v2hTv1hNvNhNv-3"/ F 502 19h6v2h1v1h1v3h-3vNh-6v1hTv1hNvTh1vTh1vNh1vNh1vN"/ F 312 20h4v1h4v1hNv1hNv2hNv1h1v1h1v3h1v1h1vNh1v4hTv1h-3v1h-7vNhTvNhNv-3h1v1h2vNh1v-3hNvNhNvNhNv-3h1vNh1vNh2vN"/ F 358 20h8v1h2v1h1v1h-3v1h-9v1hTvTh1vNh1vNh1vN"/ D 403 20h3v2hNv2hNvNhNv-3"/ F 407 20h5v1h2v1h1v1h1v1h1v4hNv1h-3v1h-8vNhNvNhNvTh1vTh1vTh1vNh1vN"/ D 412 20h4v3hNvNhNvNhTvN"/ D 451 20h4v1hNv1hNv1hNv2hNv-5"/ F 455 20h5v2h1v1h1v3h2vNh1vNh1v4hTv1hNv1hN1vNhNv-4h1vTh1vNh1vNh1vN"/ D 551 20h6v1h3v1h1v1h1v1h1v3hNvNhTvNhTvNh-9v1hTv1hNv-3h1vNh1vNh3vN"/ F 557 20h4v1h1v2hNvNhNvNh-3vN"/ D 17 21h5v1h6vNh5v1h1v1h1v2h1v6hNv5hNv2hNv1h-4vNhNvThNvNh1vNh2vNh1vNh1v-3hNv-3hNvNhNvNh-8v1hTv1hNv1hNv4h1v2h2v1h1v1h2v1hNv1hTv1hTvNhNvNhNv-7hNv-5h1vTh1vN"/ D 113 21h3v1h10vNh3v1h1v1h1v2h1v2hNv3hTv-3hNvNhTvNh-7v1hTv1hNv2hNv2hNv2h1v1h1v1h3v2hNv1hNv1h-4vNhNv-6hNvNhNv-3h1v-3h1vTh1vT"/ F 263 21h8v2hNv2h2v2hNvNhTv3h2vNh1vNh2v1h1v2hNvNhTv1hNv3h1v2hNv1h-9vNh1v-3hNvNh-3vTh1vNh1v2h3vThNvNhNv1hNvThNv-3h1vNh2vN"/ D 320 21h3v9hTv1hNvNhNv-3hNvNhNvNh1vTh1vNh1vN"/ F 511 21h1v1hNvN"/ D 596 21h4v1h4vNh5v1h2v2h1v3h1v2hNv2hNv5hNv2hTv1hTvNhNvNhNv-4h1vNh2vNh2vNh2vNhNvNhNvNhNvNhNvNh-3vNh-8v1hTv1hTv-3h1vNh3vN"/ D 65 22h1v1h12vNh3v1h1v2h1v6hTvThNvThNvNhTvNh-6v1h-3v1hNv1hNv1hNv2hTv-6h1vTh1vN"/ F 462 22h2v1hTvN"/ D 462 23h2v1h1v1hNv1hTv-3"/ F 464 23h1v1hNvN"/ F 512 23h1v3hTvNh1vT"/ F 21 24h8v1h1v1h1v3h1v3hNv1hNv1hTv1h-7vNhNvNhTvThNv-4h1vNh1vNh2vN"/ D 417 24h1v1h1v2h1v1hNv2hNv1h-5v1h-9vNhTvNhNv-3h1vNh1v2h1v1h1v1h8vNh3vNh1v-4"/ F 549 24h9v1h2v1h2v1h1v2h-4v1hNv2hNv1h-6vNhTvNhTvThNv-3h1vNh2vN"/ F 596 24h8v1h3v1h1v1h1v1h1v1h1v1hTv1hTv1hTv1hNv3h-4vNhTvNhTvNhNvNhNvNhNv-3hNvTh2vNh2vN"/ F 71 25h6v1h2v1h1v2h1v2h1v1hNv1hNv1hNv1h-3v1h-5vNh-3vNhNvNhNvNhNv-3h1vNh1vNh1vNh3vN"/ F 119 25h7v1h2v1h1v3h1v2hNv1hTv1hNv1h-3v1h-4vNh-3vNhNvNhNvTh1vTh1vTh1vNh2vN"/ D 265 25h2v1hTvN"/ F 359 25h9v1h2v2h1v1hNv2h-3v1hNv1h1v2hTv1h-7vNh1vThNvNh-3vNhNv-3h1vNh1vNh3vN"/ D 403 25h1v1hNvN"/ D 449 25h2v4h1v1h11vNh1vNh2vNh1v1h2v5hNvNhTvNh-6v1h-8vNhNvNhNvNhNv-4"/ D 269 26h2v1h1v1hNv1hTv-3"/ D 361 26h2v1hTvN"/ D 365 26h2v1h1v1hNv1hTv-3"/ F 161 27h13v1h4v4hNv2hTv1h-3v1h-6vNh-3vNhNvNhNv-4hNvNh1vN"/ D 262 27h1v1h1v2h-3vTh1vN"/ D 357 27h2v1h1v2hNv1hTvThNvNh1vN"/ F 497 27h1v1hNvN"/ F 211 28h3v1h11v4hNv2hNvNhNv1h-3v1h-4vNh-3vNhNvNh1vNhNv-4"/ F 500 28h8v1h2v1h2v1hNv4h-3v1h-6vNhTvNhNvNhNvThNvNh2vNh1vN"/ D 592 28h1v3h1v1h1v1h1v1h2v3hNv1h-3vNhNvNhNv-8"/ D 158 29h3v4h1v1hTvNhTv-4"/ D 272 29h2v1h1v1h1v1hNv1hNv1hTvNhNv-3h1vN"/ D 546 29h1v2h2v1h2v3hNv1hTvNhNvNhNv-5"/ D 559 29h4v5hNv1h-4vNhNvTh1vTh1vN"/ F 418 30h1v4hTv1h-3v1h-8vNhTv-3h9vNh5vN"/ F 403 31h1v1hNvN"/ F 460 31h6v1h2v1hTv1hTv1h-4v1h-5vNhTvNhNvTh8vN"/ D 65 32h1v1h1v1h1v1h3v1hNv1hNv1hTvNhTv-5"/ D 81 32h1v4hNv2h-4vNhNvTh3vNh1vNh1vN"/ D 129 32h1v3hNv1hNv1h-4vNhNvNh3vNh1vNh2vN"/ D 177 32h1v6hTv1hTvNhNvNhNvTh3vNh2vT"/ F 275 32h1v1hNvN"/ F 274 33h1v1hNvN"/ D 222 34h1v2hNv1h-3vTh3vN"/`,
    dUp: `D 601 9h1v1h1v1h1v1hNv2h-3vNhNvTh1vNh1vN"/ D 18 10h2v1h1v1hNv1hNv2hTv-4h1vN"/ F 22 10h7v1h1v1h1v2h1v3h1v4h-5v1h-6vNh-5vNhNv-4h1vNh2vTh1vNh1vNh1vN"/ D 30 10h2v1h1v3hTvThNvT"/ D 114 10h2v1h1v1hNv1hNv2hTv-4h1vN"/ F 117 10h7v1h1v1h1v2h1v2h1v1h1v4h-3v1hN0vNh-3vNhNv-3h1vNh1vNh1vTh1vNh1vT"/ D 125 10h3v1h1v4hNv1hNvThNvThNvT"/ D 66 12h3v2hNv1hNv1hNvNhNvTh1vN"/ F 70 12h6v1h1v1h1v1h2v3h1v4h-3v1hN2vNhTv-3h1vNh1vTh1vNh1vNh1vNh1vN"/ D 76 12h4v3hTvNhNvNhNvN"/ D 593 12h3v2hNv1hNv1hTv-3h1vN"/ F 596 12h3v1h1v1h3vTh2v1hNv3h2v-3h3v1hNv1h2v5hNv1h-5v1h-4vNh-4v1h-3v1hNvTh1v-4hNvNh2vNh1vNh1vT"/ D 604 13h2v3hTv-3"/ D 166 14h3v3hNv1h-3v-3h1vN"/ D 608 14h1v1hNvN"/ F 169 15h3v1h3v1h1v1h1v2h1v1h1v1hNv1hNv2hN0vNh-3vNhNvNhNv-3h2vNh4vNh1vT"/ D 222 15h1v1h2v2h1v4h-4v-3hNv-3h1vN"/ D 175 16h4v3hNv1hNvThNvNhNvN"/ D 308 16h1v1h1v1h1v1h1v2hTv1hNv1hNv3h1v1h1v1h1v3hNv1hTvNhNvNhTvNhNvThNvNh1vTh2v-7h2vN"/ D 314 16h4v1h1v4h-3vNhTv-4"/ D 268 17h3v1h1v1h1v1h1v1h1v1h1v4hNv2hNvNhTvThTvTh1vTh-5vNh1vNh1vT"/ D 501 17h2v1h1v1hTv1hNv1hNv-3h1vN"/ D 548 17h3v1hNv1hNv1hNv1hNv-3h1vN"/ F 552 17h5v3h-6v1h-3vNh1vNh1vNh2vN"/ D 557 17h4v3h-4v-3"/ D 209 18h2v1h1v3h3v1h1v2hNv1hTv1h3v1h8vNhNvNhNv-3h4v4hNv2hN1vNh-3v4h1v1hTvNhNvNhNv-4h1vThNv-6h1vN"/ F 216 18h5v1h1v3h4v1h-4v3h1v1h1v1h-8vNh-3vNh2vNh1vThNvNh-3vTh1v1h3v-3"/ D 260 18h3v1h1v2hNv1hTv1hNv3h1v2hNv1hNv2h3v1h1v3hNv1h-3vNhNv-4hNvNhNvNhNv-4h1vNh2v-4h1vNh1vN"/ D 364 18h3v1h1v2hTvNh-3vNh1vN"/ D 509 18h2v1h1v2hNv1h1v3hNv1h3v1h1v1h1v2hNv1h1v3hNv1h-4v-4h1vNhTvNhTvNh-8v1hNv1hTvTh1vTh1vNh2vNh6v1h3v-3hNvNhNvTh1vN"/ D 159 19h2v1h1v2h1v1h1v1h3v1h10vTh1vNh1vNh3v4hNv1hNv1hNv1h-5vNhN3vNhNvNhNvNhNv-4h1vN"/ F 213 19h1v1hNvN"/ D 214 19h2v2h-3vNh1vN"/ D 356 19h3v1hNv1hNv1hNv1hNv2h2vNh9vNh3v1h1v1h2v1h1v1h1v2h1v2hNv2h-3v2h-4vThNvNh1vNh3vTh1vNhNvThTvNh-9v1h-3v1hNv1hNv3h1v1h3v1h1v2hNv1h-3vTh-3vNhNv-4h1vNh1vNh1v-6h1vNh1vN"/ D 460 19h3v1h1v2hTv1hNvNhNv-3"/ F 502 19h6v2h1v1h1v3h-3vNh-6v1hTv1hNvTh1vTh1vNh1vNh1vN"/ F 312 20h4v1h4v1hNv1hNv2hNv1h1v1h1v3h1v1h1vNh1v4hTv1h-3v1h-7vNhTvNhNv-3h1v1h2vNh1v-3hNvNhNvNhNv-3h1vNh1vNh2vN"/ F 358 20h8v1h2v1h1v1h-3v1h-9v1hTvTh1vNh1vNh1vN"/ D 403 20h3v2hNv2hNvNhNv-3"/ F 407 20h5v1h2v1h1v1h1v1h1v4hNv1h-3v1h-8vNhNvNhNvTh1vTh1vTh1vNh1vN"/ D 412 20h4v3hNvNhNvNhTvN"/ D 451 20h4v1hNv1hNv1hNv2hNv-5"/ F 455 20h5v2h1v1h1v3h2vNh1vNh1v4hTv1hNv1hN1vNhNv-4h1vTh1vNh1vNh1vN"/ D 551 20h6v1h3v1h1v1h1v1h1v3hNvNhTvNhTvNh-9v1hTv1hNv-3h1vNh1vNh3vN"/ F 557 20h4v1h1v2hNvNhNvNh-3vN"/ D 17 21h5v1h6vNh5v1h1v1h1v2h1v6hNv5hNv2hNv1h-4vNhNvThNvNh1vNh2vNh1vNh1v-3hNv-3hNvNhNvNh-8v1hTv1hNv1hNv4h1v2h2v1h1v1h2v1hNv1hTv1hTvNhNvNhNv-7hNv-5h1vTh1vN"/ D 113 21h3v1h10vNh3v1h1v1h1v2h1v2hNv3hTv-3hNvNhTvNh-7v1hTv1hNv2hNv2hNv2h1v1h1v1h3v2hNv1hNv1h-4vNhNv-6hNvNhNv-3h1v-3h1vTh1vT"/ F 263 21h8v2hNv2h2v2hNvNhTv3h2vNh1vNh2v1h1v2hNvNhTv1hNv3h1v2hNv1h-9vNh1v-3hNvNh-3vTh1vNh1v2h3vThNvNhNv1hNvThNv-3h1vNh2vN"/ D 320 21h3v9hTv1hNvNhNv-3hNvNhNvNh1vTh1vNh1vN"/ F 511 21h1v1hNvN"/ D 596 21h4v1h4vNh5v1h2v2h1v3h1v2hNv2hNv5hNv2hTv1hTvNhNvNhNv-4h1vNh2vNh2vNh2vNhNvNhNvNhNvNhNvNh-3vNh-8v1hTv1hTv-3h1vNh3vN"/ D 65 22h1v1h12vNh3v1h1v2h1v6hTvThNvThNvNhTvNh-6v1h-3v1hNv1hNv1hNv2hTv-6h1vTh1vN"/ F 462 22h2v1hTvN"/ D 462 23h2v1h1v1hNv1hTv-3"/ F 464 23h1v1hNvN"/ F 512 23h1v3hTvNh1vT"/ F 21 24h8v1h1v1h1v3h1v3hNv1hNv1hTv1h-7vNhNvNhTvThNv-4h1vNh1vNh2vN"/ D 417 24h1v1h1v2h1v1hNv2hNv1h-5v1h-9vNhTvNhNv-3h1vNh1v2h1v1h1v1h8vNh3vNh1v-4"/ F 549 24h9v1h2v1h2v1h1v2h-4v1hNv2hNv1h-6vNhTvNhTvThNv-3h1vNh2vN"/ F 596 24h8v1h3v1h1v1h1v1h1v1h1v1hTv1hTv1hTv1hNv3h-4vNhTvNhTvNhNvNhNvNhNv-3hNvTh2vNh2vN"/ F 71 25h6v1h2v1h1v2h1v2h1v1hNv1hNv1hNv1h-3v1h-5vNh-3vNhNvNhNvNhNv-3h1vNh1vNh1vNh3vN"/ F 119 25h7v1h2v1h1v3h1v2hNv1hTv1hNv1h-3v1h-4vNh-3vNhNvNhNvTh1vTh1vTh1vNh2vN"/ D 265 25h2v1hTvN"/ F 359 25h9v1h2v2h1v1hNv2h-3v1hNv1h1v2hTv1h-7vNh1vThNvNh-3vNhNv-3h1vNh1vNh3vN"/ D 403 25h1v1hNvN"/ D 449 25h2v4h1v1h11vNh1vNh2vNh1v1h2v5hNvNhTvNh-6v1h-8vNhNvNhNvNhNv-4"/ D 269 26h2v1h1v1hNv1hTv-3"/ D 361 26h2v1hTvN"/ D 365 26h2v1h1v1hNv1hTv-3"/ F 161 27h13v1h4v4hNv2hTv1h-3v1h-6vNh-3vNhNvNhNv-4hNvNh1vN"/ D 262 27h1v1h1v2h-3vTh1vN"/ D 357 27h2v1h1v2hNv1hTvThNvNh1vN"/ F 497 27h1v1hNvN"/ F 211 28h3v1h11v4hNv2hNvNhNv1h-3v1h-4vNh-3vNhNvNh1vNhNv-4"/ F 500 28h8v1h2v1h2v1hNv4h-3v1h-6vNhTvNhNvNhNvThNvNh2vNh1vN"/ D 592 28h1v3h1v1h1v1h1v1h2v3hNv1h-3vNhNvNhNv-8"/ D 158 29h3v4h1v1hTvNhTv-4"/ D 272 29h2v1h1v1h1v1hNv1hNv1hTvNhNv-3h1vN"/ D 546 29h1v2h2v1h2v3hNv1hTvNhNvNhNv-5"/ D 559 29h4v5hNv1h-4vNhNvTh1vTh1vN"/ F 418 30h1v4hTv1h-3v1h-8vNhTv-3h9vNh5vN"/ F 403 31h1v1hNvN"/ F 460 31h6v1h2v1hTv1hTv1h-4v1h-5vNhTvNhNvTh8vN"/ D 65 32h1v1h1v1h1v1h3v1hNv1hNv1hTvNhTv-5"/ D 81 32h1v4hNv2h-4vNhNvTh3vNh1vNh1vN"/ D 129 32h1v3hNv1hNv1h-4vNhNvNh3vNh1vNh2vN"/ D 177 32h1v6hTv1hTvNhNvNhNvTh3vNh2vT"/ F 275 32h1v1hNvN"/ F 274 33h1v1hNvN"/ D 222 34h1v2hNv1h-3vTh3vN"/`,
    side: `D 28 10h3v1h1v2hNvNhTvNhNvN"/ D 124 10h3v1h1v3hNvNhNvNhTvT"/ D 170 10h2v1h1v3hNvNhTvNhNvNh1vN"/ D 19 11h4v3hNv1h-3vNhNvTh1vN"/ F 23 11h6v1h2v1h1v3h1v4hNv1hNv1h-3v1h-6vNh-4vNhNv-6h1vNh1v1h3vNh1v-3"/ D 115 11h4v3hNv1h-3vNhNvTh1vN"/ F 119 11h5v1h2v1h1v2h1v2hNv1h2v2hNv1hNv1h-3v1h-7vNhTvNhTv-4h1v-3h1v1h3vNh1v-3"/ D 67 12h2v1h1v3hNv1h-3vNhNvTh1vNh1vN"/ D 76 12h3v1h1v2hTvNhNvNhNvN"/ F 166 12h4v1h2v1h2v1h1v1h2v5hNv1hTv1h-3v1hN0vNhTv-5h1vNh2v3h1v1h2v-3hNvNhTvNh1vTh1vNh2vN"/ D 214 12h3v1h1v2hTvNh-3vNh1vN"/ F 70 13h7v1h1v1h1v1h1v2h1v1hTv1h2vNh1v3hTv1h-3v1h-8vNh-4vNhNvTh1vTh1vNh3vNh1v-3"/ D 160 13h2v1h1v2hNv1h-3v-3h1vN"/ F 209 14h7v1h2v1hTv3h3vTh2v1h1v3hNv1hNv1hNv1hTv1hTvThTv2h1v1h-4v1hTv1hNv1hNvNhNvThNv-4hNvNh2vTh1v-3h2vNh1vN"/ D 25 15h2v4h-3v-3h1vN"/ D 121 15h2v4h-3v-3h1vN"/ D 171 15h2v1h1v1hNv1hNvNhNvT"/ D 264 15h3v2h1v2h2v1h2v1h1v5hNv3h-4vNhNvNhNv6hNv4hNv1hTvNhNv-6hNv-4hNvNhNvNhNvNhNvTh1vTh1vNh2v1h1v5h1vNh2v1h1v1h1v-3hNvNhTvNhNv-3h1vTh1vN"/ D 216 16h2v1h1v2h-3v-3"/ F 218 16h1v1hNvN"/ D 603 16h2v1h1v3hNvNhNvNhNvT"/ D 72 17h3v3hNv1hTv-4"/ D 127 17h2v1hTvN"/ D 162 17h2v1h1v3hTvNhNv-3"/ D 177 17h2v1h1v3hNv2hNv1hNv2hTvNh-5v1h-3v1hTv1hNv1h-6vNhNvNhNv-3h1vNh4v1h10vNh3vNh2vNh1v-4"/ D 203 17h3v2hNv2hTvNhNvTh1vN"/ D 303 17h4v1h1v1h3v1h1v1h2v1h1v3hNv2hTv1hTvNhTvNhTvNhTvNh-4v-3h2v-3h1vN"/ D 594 17h2v2hNv1hNv1hNv-3h1vN"/ F 597 17h6v1h1v1h1v1h1v1h1v4hNv1hNv1h-4v1h-3vNh-3vNhNvNhNv-4h1vNh1vNh1vNh1vN"/ D 30 18h2v1hTvN"/ F 548 18h8v3h2v1h1v2h1v2hNv1h-3v1hN0vNhNv-5h1v1h1vNh1v-4"/ D 556 18h2v1h1v2h-3v-3"/ D 79 19h2v1hTvN"/ D 169 19h2v1hTvN"/ D 223 19h4v1h1v2hNv2hTv1h-6v1h-3v3hNv1hNv1h-3v1h-4v-4h1vNh2vNh4vNh3vNh2vNh1vNh1vNh1vNh1vN"/ D 403 19h3v1h1v2h-3vNhTvNh1vN"/ D 458 19h3v1h1v2hNv1hNvThNvNhNvN"/ D 545 19h3v3hNv1hNvNhNv-3"/ D 208 20h2v1h1v2hNv1hTvNhNvTh1vN"/ D 449 20h2v2hNv2hNv1hNv-4h1vN"/ F 452 20h7v1h1v2h1v1h1v4hNv1hNv1hTv1h-4v1h-4vNhTv-5h1vTh1vTh1vNh1vN"/ D 31 21h1v1h2v1h1v1h1v1h1v2hNv1hTvThNvNhTvNh-4v1h-3v1hNv1hNv1hNv1hNv1hTv1h-3vNhNv-4h1vNh1vNh1vNh2vNh3v1h6vNh3vN"/ D 113 21h2v1h2v1h7vNh3vNh2v4h-4v1h1v4hNv1hTvNhNvNhNvNhTvNh-4vNhNv-3hNvT"/ <path fill="#fcbbc3" d="M 169 21h1v2hTvNh1vN"/ D 214 21h2v1hTvN"/ F 261 21h2v1h2v1h1v3hNvNhNvNhTv1hNv-4"/ F 401 21h3v1h2v1hNv1h1v1h2vTh2v5hNv2hNv1hNv1hNv1hTv1h-6vNhNvThNvNh2vNh1v-4hTvNh1vNh1vNh2vN"/ D 603 21h2v3hTv-3"/ D 80 22h1v2h-4vNh3vN"/ D 350 22h4v1h2v1h2v1h1v1h1v3h1v4h1v4hNv1hNv1hNv1hTv1h-4vNhNvTh1vNh2vNh1vNh1v-6hNv-3hNvNhNvNh-3v1hNv1hNv-3h1vN"/ D 366 22h3v1h1v3hTvNhNvNhTvNh1vN"/ D 411 22h3v1h1v2hTv1hNv1hNv2h1v5hNv1hNv1hTv1hNv1h-4vNhTvNhNvNhNvNh5vNh2vNh1vNh1vNh1vTh1v-5h1vN"/ D 596 22h2v3hTv-3"/ D 66 23h3v1h8v1hNv1hNv1hNv2hNv2h1v1h1v3hNv2hNv1hNv1h-4vNhNvNhNv-4h1vNh1vNh1v-3hNv-3hTvT"/ F 113 23h1v3h1v1h4v1h2v1h1v1h1v1h2vNh1v-4hNvNh4v1h1v5hNv2hTv1hTv1h-3v-4hNvNh-5v1hTvNhNv-7"/ <path fill="#fcbbc3" d="M 213 23h2v2hTvT"/ F 315 23h1v1h1v2h1v5hNv2hNv2hNv1hNv-3hNvThNvNhNvNhNvNh2vNh2vTh1vT"/ F 359 23h6v1h2v1h1v1h1v1h1v5hTv1hNv1hNv3hNv1h-3v1hTvNh1vNh1v-4hNv-4hNv-3hNvNhNvNh1vN"/ D 405 23h3v2hTvNhNvN"/ D 498 23h2v3hTv1hNv1hNv-3h1vNh1vN"/ D 507 23h3v1h1v3hTvNhNvNhNvT"/ D 549 23h1v3hTvTh1vN"/ D 555 23h2v3hNvNhNvT"/ F 27 24h4v1h2v1h1v4hNv2hNv1hNv1hTv1hTv-3hNvNh-5v1hNv1hNv1hNv-4h2vNh1vNh1vNh1vNh1vNh3vN"/ F 77 24h4v1h1v6hNv1hNv1hNv1hNv1hTv1hTvNh1v-3hNvNhNvTh1vTh1vNh1vNh1vN"/ F 254 24h3v1h1v1h1v1h1v4h1v6hNv1hNv1h-5vThNvNh-4vThNv-4h1vTh1vNh1vNh1v2h2vNh1vNhTvNh1vN"/ F 301 24h3v1h2v1h2v1h-4v2hNv2h1v1h1v1h-3v1hNv1h1v1h-3v1hNv-3hNv-4h1v-3h1v2h3v-3hTvNh1vN"/ F 351 24h3v1h1v1h1v2hNv2h1vNh1v6hNv1hNv-3h-4v2h1v1h3v1hTv1hNv1hNvThNvNh-3vNhNv-4hNvTh2vNh1vNh1v2h2vNh1vThTvNh1vN"/ D 458 24h2v2hTvT"/ F 500 24h7v1h1v1h1v1h2v2hNv2hNvNhTv1hNv1h1v2hNv3h1v1h-3v-3hNvNhTvNh1vThNvNhNv1hNv2hNvNhNvNhNv-3h1vNh1vNh2vT"/ D 600 24h2v1hTvN"/ D 607 24h1v1h1v2h1v3hTvNhNvNh-6vNh4vNh1vNh1vN"/ F 66 25h2v3h1v3hNv1hNv1hTv-6h1vT"/ F 170 25h5v1h3v3hTv1hNv4hNv1hTv1h-5vNhNvNhNvNh-4vNhNv-3h4vNh1vNh2vNh3vN"/ F 219 25h6v1h1v4hNv2hNv2hTv1hTv1h-4vNhNvNhNvNh-3v1hNv1hNvNhNvTh3vNh3vNh1vNh1v-3h3vN"/ D 248 25h2v1h1v1hNv1hNv2hNvNhNv-3h1vN"/ D 346 25h2v1h1v1hNv1hNv1hTv-3h1vN"/ D 396 25h3v4hNv1hTvNhNv-3h1vN"/ F 413 25h2v1h1v1h2v1hNv2h1v3h-4v1hTv-5hNvTh1vNh1vN"/ D 452 25h2v2hNv1hTvTh1vN"/ D 560 25h1v5hNv1hNv1h1v3hNv2hNv1hTvNhNv-3h1v-4h1vThNvNh3vNh1vN"/ D 252 26h3v1hNv1hTvT"/ F 299 26h1v1hNvN"/ D 300 26h2v3h-3vTh1vN"/ F 349 26h1v1hNvN"/ D 350 26h2v2hNv1hTvTh1vN"/ D 402 26h1v1h1v3h-3v-3h1vN"/ D 462 26h2v1h1v1h1v1h1v1h1v4hNv1hTvNhNvTh1vThNv1h-6vNh2vNh1vNh1vT"/ D 552 26h2v1hTvN"/ D 594 26h1v1h3v1h3v1h-3v1hNv2hNv1hTvNhNv-5h1vN"/ F 266 27h1v1h1v1h4v1hNv2hNv1hNv2hNv1hTv1hNv-4h1v-6"/ D 297 27h1v3hNv1hNv-3h1vN"/ D 304 27h4v1h2v1h1v1h1v1h1v2h1v4h-3vNhTvNhNvNhTvNhNvNhNvNhNvTh1vT"/ F 308 27h2v1hTvN"/ D 406 27h1v1hNvN"/ D 456 27h2v1hTvN"/ D 545 27h1v1h10v1h-3v1hTv2h1v2hNv1h1v3h-4vNhNvNhNv-5hNv-4"/ D 226 28h2v1h1v3hTv1h-3vNh1vTh1vT"/ D 255 28h1v2hNvT"/ <path fill="#fcbbc3" d="M 257 28h2v2hTvT"/ <path fill="#fcbbc3" d="M 355 28h1v2hNvT"/ D 417 28h2v1h1v4hTv-3hNvT"/ D 511 28h1v3h2v1h1v5hNv1h-3vThNv1hNv1hTvNhNv-3h1vThNvNh1vNh2v1h1vTh1vN"/ F 512 28h1v1h1v2hTv-3"/ F 556 28h1v2hNv4hNv1h-4vNh1vThNvTh2vNh3vN"/ F 601 28h6v1h1v1h1v2h-3v1hNv1hNv1hNv1h-4vNhTvNhTvNh1vNh1vTh1vNh3vN"/ D 176 29h3v1h1v1h1v2hNv1hNv1hTvNhTv-4h1vN"/ D 353 29h1v2hNvT"/ <path fill="#fcbbc3" d="M 406 29h1v1hNvN"/ D 33 30h1v6hNv1h-3vNhNvTh2vNh1vNh1vT"/ D 116 30h5v1h1v4hNv1hNv1h-4vNhNvNhNv-4h2vN"/ F 464 30h1v2hNv2h1v1h-6v1hNv2hNvThNvNhNvNhNvNh1vNh3vNh6vN"/ D 500 30h1v1h1v2hNv1h2v1h1v3h-5vNhNvNhNv-4h1v1h1vTh1vN"/ D 21 31h5v1h1v3hNv2hNv1hNv2h-4vNhNvThNv-3h1vNh1vNh1vN"/ D 81 31h1v4hNv2hNv1h-3vNhNvTh2vNh1vNh1vNh1vN"/ D 129 31h1v1h1v5hNv1h-3vNhNvThNvNh2vNh2vT"/ D 449 31h1v1h4vNh4v1h-3v1hNv1h1v1h1v1h1v2hNv1h-3vNh-3vThNv-5"/ F 559 31h1v1hNvN"/ D 368 32h4v1h1v1h1v3hTv1h-5vNhNv-3h1vNh1vN"/ D 606 32h3v5hNv1h-3vThNvTh1vNh1vN"/ D 161 33h4v1h1v1h1v1h1v2hNv1hNv1h-3vThNvThNv-3"/ D 211 33h3v1h1v1h1v1h1v1h1v2hNv1h-3vNhTvNhNvNhNv-3h1vN"/ D 254 33h2v1h1v2h-3vNhNvNh1vN"/ D 302 33h3v3h-3vNhNvNh1vN"/ F 305 33h1v1h2v1h1v1h2v1h1v1h-5v1h-5v-3h3v-3"/ D 351 33h4v3h-3vNhNvT"/ D 414 33h4v1h1v3hTv1h-6v-3h1vNh2vN"/ F 411 34h1v1hNvN"/ D 595 34h2v1h2v1h1v2hNv1hTvNhNvNhNv-3"/ F 410 35h1v3h-4vNh1vNh2vN"/ D 459 35h5v1h1v2hNv1h-4vNhTvTh1vN"/ D 250 36h3v1h1v2hNv1hTvNhNv-3"/ D 299 36h3v4h-3vNhNvTh1vN"/ D 347 36h3v1h1v2hNv1hTvNhNv-3"/`,
    dDown:`D 28 8h2v1h1v4hNvNhNvThTvNh1vN"/ F 119 8h2v1h2v1h1v1h1v1h1v1h1v3h1v2hNv1hNv1hNv1h-5v1h-5vNh-3vThNv-3h1vTh3vNh1v-4h3vN"/ D 124 8h2v1h1v4hNvNhNvNhNvNhNvNh1vN"/ D 17 9h3v3hNv1hNv1hTvNhNvTh1vNh1vN"/ F 21 9h6v1h2v2h1v2h1v2h1v2hNv1hNv1hTv1hN2vNhNv-4h1vTh2vNh1vNh1vTh1vN"/ D 113 9h2v1h1v3hNv1h-3vNhNvTh1vNh1vN"/ D 169 10h3v1h1v3hNvThTvNhNvN"/ D 550 10h1v1h1v2hNv1hNv1hTv-3h1vNh1vN"/ D 602 10h3v1h1v2hTvNhTvT"/ D 65 11h3v4hNv1hTvNhNv-3h1vN"/ F 69 11h7v2h1v1h1v1h1v2h1v1h1v2hNv1hNv1h-4v1h-8vNh-3vNhNv-4h1vNh3vNh1v-3h1vN"/ D 76 11h2v1h1v3hNvNhNvNhNvT"/ F 163 11h7v1h2v2hNvNhTv3h1v1h1vNh1vTh3v1h1v3hNv2hNv1hTv1h-3v1h-6vNhTvNhNvNhTv-3h1vNh1vTh1vNh1vNh1vN"/ F 552 11h6v1h1v1h1v1h1v4h1v4hNv1h-4v1h-5vNh-3vNhNvNhNvNhNv-3h1vNh1vNh2vNh1vNh1vT"/ D 560 11h1v1h1v1h1v3hNv1hNv-3hNvNhNvNh1vN"/ F 598 11h4v1h2v1h2v1hTv2h1v1h1v-3h2v1h1v1h1v3hNv1hNv1hTv1h-4v1h-7vNhTvNhNv-5h1vTh1vNh2vNh2vN"/ D 159 12h3v1hNv1hNv2hTv-3h1vN"/ D 218 12h2v1h1v2hTvNhNvT"/ D 401 12h1v1h1v1hNv1hNv2hNvNhNvTh1vNh1vN"/ D 410 12h2v1h1v3hNvNhNvNhNvT"/ F 452 12h5v3h1v1h1v1h2vNh1v2h1v2hTv1hNv1hTv1h-4v1h-5vNh-3v-3h1vTh1vTh1vNh1vTh2vN"/ D 458 12h2v1h1v1h1v2hNv1hTvNhNvNhNvTh1vN"/ D 592 12h3v1hNv1hNv2hTv-3h1vN"/ D 169 13h2v1h1v2hNv1hNvNhNv-3"/ D 209 13h2v1hNv2hNv1hTvTh1vNh1vN"/ F 212 13h6v1h1v1hTv2h1v1h1v-3h2v2hNv3hNv1hNv1h-5v-5hNvThNv1hNvTh2vN"/ F 404 13h6v1h1v1h1v2hNvNhTv2h3vNh1v1h1v2hNv1h-3v1h-3vNh-5v1hNv1hNvNhNv-3h1vTh1vTh1vNh2vN"/ D 448 13h2v2hNv1hNv1hNv-3h1vN"/ D 27 14h2v1h1v2h-3v-3"/ D 124 14h1v1h1v2hNv1hNvNhNvTh1vN"/ D 177 14h1v1h1v6hNv1hNv1hNv1hN0v1hTv1hTv1hNv1hNvNhNvThNvNhNvNhNv-3h1vNh1v1h2v1h1v1h2v1h6vNh3vNh2vNh1vTh1v-3h1vN"/ D 360 14h1v1h1v2hNvNhTvNh1vN"/ D 604 14h2v3hNvNhNvT"/ D 19 15h2v1h1v1hNv1hTv-3"/ D 115 15h2v3hNv1hNvNhNvTh1vN"/ D 162 15h2v3hNv1hNvNhNvTh1vN"/ D 211 15h1v2h1v5h5vNh1vNh1v-3h1vNh1vNh2v1h1v4hNv1h1v1h1v5hNv1hNv1hTvNhNv-5h-4v1h-4v1hTv1hNv1hTvNhNv-6h1vTh2vTh1vN"/ D 217 15h2v3hNvNhNvT"/ D 501 15h2v3hNv1hTv1hNv3h1v3h1v1h1v1h3v1h1v1h1v3hNv1hNv1h-6vNhTvNhNvTh1vNh3vNhNvThNvNhNvNhNv-3h1vTh1vNh1vTh1vNh1vN"/ F 504 15h5v1h2v1h1v1h1v2h1v3h1v2hNv1hNv1hNv1h-3v1h1v1h1v1hNv1h-3vThNvNhNvNh-3vNhNvNhNv-3hNv-3h1vNh2vNh1vTh1vN"/ D 597 15h1v1h1v2hNv1hTv-3h1vN"/ D 68 16h2v3hNv1hTv-3h1vN"/ D 75 16h2v1h1v2hNv1hNvNhNv-3"/ D 166 16h2v1hTvN"/ F 209 16h1v2hTvNh1vN"/ D 313 16h2v1h1v1h1v1h1v1h1v2hTvNh-5vNhNvTh1vNh1vN"/ F 356 16h5v1hTv2hTv1h2vNh2vTh1v1h2v3h-4v1hNvNh-3v2hNv1h-4vNhNvNh1vNh1vTh1v2h2vThTvNh1vNh2vN"/ D 365 16h2v1h1v3hNv3h-7v1h-4v1hNv1hNv1hNv2h-3vNhNvNhNvThNvTh1vNh2v1h1v1h4vNh3vNh2vNh4v-3hNvNh2vN"/ D 403 16h1v3hTvTh1vN"/ D 409 16h2v1h1v1h-3vT"/ D 512 16h2v1h1v4hNvNhNvThNvT"/ D 258 17h4v1h1v5hNv2hNv1hNv1h-3vThNv-5h1vTh1vN"/ D 270 17h3v1h1v6hNv1hNv1h-3vNhNv-6h1vNh1vN"/ D 351 17h2v2hNv2hNvNhNvTh1vN"/ D 359 17h2v2hTvT"/ D 457 17h1v1h1v3hTvNhNvTh1vN"/ D 551 17h2v3hNv1hNvNhNvTh1vN"/ D 558 17h1v1h1v2hTv-3"/ D 602 17h2v1hTvN"/ D 24 18h2v1hTvN"/ D 120 18h2v1hTvN"/ <path fill="#fcbbc3" d="M 166 18h2v2hTvT"/ F 207 18h1v2hNvT"/ D 215 18h2v1hTvN"/ D 406 18h2v1hTvN"/ D 449 18h2v3hNv1hTvTh1vT"/ D 30 19h2v1h1v1h1v2h1v4hTvNhNvTh-3vNh-7v1hTv1hNv1hNv1hTv1h-3v-4h1vNh1vNh1vNh12vNh2vN"/ D 72 19h2v1hTvN"/ D 126 19h1v1h1v1h1v2h1v3hNvNhNvNh-3vNh-4v1hTv1hNv3hNv1h1v1h1v3hNv1hNv1h-3vNhNv-5hNv-6h1vTh2v1h5vNh5vNh1vN"/ D 304 19h2v1h1v1h1v2hTv1hNv1hNv1hNvNhNv-4h1vNh1vN"/ D 353 19h2v2hTvT"/ D 357 19h2v1hTvN"/ F 264 20h4v5h1v1h3vNh1v3hNv2hNv1hNv1hTv1h-8vNhTvNhNvNhNvThNv-5h1v2h1v2h3vNh1vNh1vTh1vTh1vN"/ D 413 20h1v1h1v1h2v2h1v3h1v2h1v4hTv1h-3vNhNvNhNv-4h1vNh1vNh1vNhNvNhTvNh-3v1h-3v1hNv1hNv1hTv1hTv1hNvThNv-3h1vNh1vNh1vNh5v1h3vNh3vN"/ D 461 20h3v1h1v4hNv1hTv1hTvNhNvThTv1h-4v1hTv2hNv1h3v1h1v1h1v3hNv1hNv1h-3vNhNvNhNv-4hTvNhNv-3h1vTh1vNh2v1h5vNh4vNh2vNh1vN"/ D 545 20h2v1h1v1h1v1h3v1h5vNh4v1h1v5hNv4hNv1hNv1hTvNhNvTh1vNh2vNh1vNhNvThNvTh-5v1h1v3hNv1h-3vNhNvNhNv-3hNvNhNvNhNv-3"/ D 555 20h2v1hTvN"/ D 608 20h2v1h1v1h1v4hTvNhNvNhNvNh-4v1h-5v1hTv1hNv1hNv1hNv1h2v1h2v1h1v3hNv1hNv1hTvNhNvNhNv-5hTvNhNv-3h1vNh1vNh1vNh2v1h7vNh4vNh2vN"/ D 79 21h1v1h1v1h1v6hNv-3hNvNhNvNh-8v1hNv1hNv1hNv2h1v1h1v1h1v4hNv1hNv1h-3vNhNv-3hNv-4hNv-4h1vTh1vNh2v1h8vNh4vN"/ F 308 21h9v1h2v1h1v2h1v2hNv1hTv1hTv1h-8vNh-3vNhNvNhNvNh1vNh1vNh1vNh2vT"/ <path fill="#fcbbc3" d="M 356 21h3v1hNv1hTvT"/ D 452 21h2v1hTvN"/ D 512 22h1v3hTvTh1vN"/ F 22 23h7v1h3v2h1v2hNv2hNv1hNv1hNv1hTv1h-4vNhNvNhNvNh-3vNh-3vTh1vNh2vNh1vNh1vNh2vN"/ F 121 23h4v1h3v1h1v1h1v1hNv2hNv2hTv1hNv1hNv1h-6vNh1v-3hNvNhNvNh1v-3h1vNh2vN"/ F 217 23h4v5h1v1h2vNh1v2hNv1hTv1hNv1h-5vThNvThNvNh-3v1hNv1hNv-3h1vNh1vNh2vNh4vN"/ F 360 23h8v1h1v1h-3v1hNv5hNv1h-3v1hNvNhTvNh-5vNhNvNh1vTh1vNh1vNh1vNh4vN"/ F 410 23h3v1h2v1h1v1hNv1hNv1hNv3hNv1h-4vNhNvNhTvNh-4vNh2vNh2vNh1vNh1vNh3vN"/ D 504 23h2v2hNv1hTvTh1vN"/ F 545 23h1v1h1v1h1v3h1v1h1v1h3vNh1v-3hNvNh5v2h1v2h1v1hNv1hTv1hTv1h-4vNhNvNhNvNhNvNhNvNhNvNhTv-3h1vN"/ F 604 23h4v1h1v1h1v4hNv1hNv1hTv1hTv1h-5vThNvNhTvNhTvNh1vNh1vNh1vNh2vNh5vN"/ F 71 24h8v1h1v1h1v4hNv1hNv1hTv1hNv1h-5v-3hNvNhNvNhNvTh1vNh1vNh1vN"/ F 166 24h11v2hNv1hTv1hNv4hNv1h-5vThNvNh-5v1hNv-3h1vNh1vNh2vNh2vN"/ D 321 24h1v1h1v4hNv1hTv1h-3v1hNv1hN0vNhTvNhNvNhNvTh1vNh1v1h1v1h3v1h8vNh2vNh2vNh1v-3"/ F 457 24h2v2h1v1h2vNh2vNh1v2hNv2hNv1hNv1hNv1h-6vNhNvNhNvNh-3vNh1vTh2vNh4vN"/ D 366 25h4v1h1v2h1v4hNv1h-3vNhTvNhNv-5h1vN"/ F 496 25h1v1h1v1h1v2h1v1h-3v1hNvNhNv-4h1vN"/ D 176 26h2v1h2v4hTv1h-5v-4h1vNh2vN"/ D 465 26h1v1h1v1h1v4hNv1h-4vNhTvNh1vNh1vNh1vTh1vN"/ D 508 26h2v1hTvN"/ D 513 26h1v3h1v4hNv1h-3vNhNvTh1vNhNvNhNvNh3vNh1vN"/ D 129 27h1v8hNv1h-4vNhNvTh1vNh1vNh2vTh1vT"/ D 544 27h2v1h1v1h1v1h1v1h1v1h1v2hNv1h-3vNhNvNhNvThNv-4"/ D 32 28h1v5hNv1hNv1hTvNhNvNh1vNh1vNh1vNh1vT"/ D 211 28h3v1h1v2h1v2hNv2hNv1hTvNhNvNhNvNhNv-3h1vNh1vN"/ D 401 29h4v1h2v1h1v5hNv1hTv1hTvNhNvThNv-6"/ D 609 29h1v3hNv2hNv1h-3vNhNvTh2vNh2vNh1vN"/ D 15 30h3v1h3v1h1v1h1v2hNv2hNv1hNv1h-3vNhNvThNv-6"/ D 80 30h1v3hNv1hNv1h-3vTh1vNh2vNh1vN"/ D 161 30h5v1h1v3hNv2hNv1h-4vThNv-4h1vN"/ D 353 31h5v1h2v5hNv1h-4vNhNvNhNv-5"/`,
    down: `D 16 9h2v1h1v1hNv1hNv2hTvNhNvTh1vNh1vN"/ F 22 9h4v1h2v1h1v2h1v1h1v3h1v2hNv1hNv1hTv1hN0vNhTvNhNvNhNvTh1vTh1vNh1vTh1vNh1vNh3vN"/ D 28 9h2v1h1v1h1v2hNv1hNvNhNvThNvT"/ D 113 9h2v2hNv1hNv2hTv-3h1vNh1vN"/ F 117 9h5v1h2v1h1v2h1v2h1v2h1v3hTv1hTv1hN0vNh-3vNhNv-3h1vTh1vNh1vTh1vNh1vNh2vN"/ D 124 9h2v1h1v4hNvNhNvThNvT"/ D 65 11h2v2hNv1hNv2hTv-3h1vNh1vN"/ F 69 11h5v1h1v1h1v1h1v1h1v2h1v1h1v2hNv1hNv1hTv1hN0vNh-3vNhNvTh1vTh1vNh1vTh1vNh1vNh2vN"/ D 75 11h2v1h1v3hNvNhNvNhNvT"/ D 159 11h2v1h1v2hNv1hNv1hNvNhNv-3h1vN"/ D 170 11h3v1h1v3hNvNhNvNhNvNhNvN"/ F 163 12h8v1h1v1h1v1h1v1h1v1h1v3hNv1hNv1hTv1hN1vNhNvNhNvNhNvNhNvNh1vTh2vNh1vNh1vNh1vN"/ D 219 13h1v1h1v1h1v2hTvNhNvNhNvNh1vN"/ D 170 14h1v1h1v1h1v2hTvNhNv-3"/ D 209 14h2v1h1v1hTv1hTv1hNvTh1vNh1vN"/ F 213 14h5v1h1v1h1v1h1v1h1v2hNv1hNv1hNv1h-5vNh2vNhTv1hNvNh-3v1hNv1hNv1hNvNhNv-3h1vTh1vNh2v1hNv2h2vNh1vThTvNh2vNh1vN"/ D 19 15h2v2hNv1hTvTh1vN"/ D 26 15h2v1h1v1hNv1hTv-3"/ D 114 15h2v3hNv1hTv-3h1vN"/ D 122 15h2v1h1v2h-3v-3"/ D 162 15h1v4hTvNhNvNh1vNh1vN"/ D 353 15h2v2hNv1hTvTh1vN"/ D 363 15h1v1h1v2hTvNhNvNh1vN"/ D 402 15h2v2hTv1hNvTh1vN"/ F 405 15h4v1h1v1h1v1hNv1hNv1h1v1h2vThNvNh2v2h1v2h-3v1h-9vNhTv-3h1vNh1vNh2vNh1vN"/ D 410 15h2v1h1v2hTvNhNvT"/ D 602 15h2v1h1v2h-3vNhNvNh1vN"/ D 67 16h1v1h1v2hNv1hTv-3h1vN"/ D 74 16h2v1h1v2hTvNhNvT"/ F 355 16h6v1h2v1hTv2h2vTh1v1h1v2hNv1h-5vNhTv1h-4vNhNvTh1vNh1v2h2vThTvNh1vN"/ D 450 16h1v1h1v1hNv1hTvTh1vN"/ D 458 16h2v1h1v2hTvNhNvT"/ D 592 16h2v3hNv1hTv-3h1vN"/ F 596 16h5v1h1v1h2v1h1v2h1v2hNv2hNv1hNv1h-8vNh-4v-4h1vTh1vNh1vTh2vN"/ D 166 17h2v1hTvN"/ D 176 17h1v1h1v5hNv1hNv1hNv1hNvNh-9v1h-3v1hTv1h-3vNhNvNhNvThNv-3h1vNh1vNh2v1h1v1h1v1h1v1h11vNh2vNh1vNh1v-3"/ D 210 17h2v2hNv1hTvTh1vN"/ D 217 17h2v1h1v2hTvNhNvT"/ F 452 17h6v1h1v1hTv2h1v1h1v-3h1v1h1v2hNv1hTv1h-8vNhTv-3h1vNh2v1hNv2h2v-3hNvNh1vN"/ D 496 17h2v2hNv2hNv1hNv-3h1vT"/ F 500 17h5v3h1v1h2vTh1v2h1v3hNv1hNv1hNv1hTv1h-7vNhTvNhNvTh1v-3h1vTh1vNh2vN"/ D 505 17h2v1h1v3hTvNhNv-3"/ F 548 17h5v1h1v1h1v1h1v1h1v1h1v4hNv1h-3v1h-8vNh-3v-3h1vTh1vNh1v-3h2vN"/ D 555 17h2v1h1v2hNv1hNvNhNvNhNvNh1vN"/ D 23 18h2v1hTvN"/ D 118 18h2v1hTvN"/ D 313 18h3v1h1v1h1v2h1v3hNv1h-4vNhNvThNv-3h1vT"/ D 354 18h2v2hTvT"/ D 361 18h2v2hTvT"/ D 366 18h2v1h1v3hNv1hNv1hNv1hNvNhN1v1hTv1hNvNhNvThNv-3h1vNh2v2h1v1h11vNh1vTh1vN"/ D 403 18h1v3hTvTh1vN"/ D 410 18h1v1h1v2hTvNhNvNh1vN"/ D 544 18h2v3hNv1hNvNhNvTh1vN"/ D 71 19h2v1hTvN"/ <path fill="#fcbbc3" d="M 166 19h2v2hTvT"/ D 214 19h2v1hTvN"/ D 222 19h2v1h1v4hNv1hNv2hTvNh-9v1hTv1hTv1hTv-4h1vNh1vNh1vNh1vNh3v1h1v1h5vNh1vNh1vNh1vN"/ D 258 19h2v1h2v6hNv1hNv1h-4vNhNv-5h1vTh2vN"/ D 266 19h4v1h1v2h1v4hNv1h-4vNhNvThNv-4h1vN"/ D 358 19h2v1hTvN"/ D 451 19h1v3hTvTh1vN"/ D 457 19h2v3hNvNhNvT"/ D 30 20h1v1h1v1h1v1h1v5hNv1hTv-3hNvNhTvNh-6v1hTv1hNv2hNv3h1v1h1v1h1v4hNv1hNv1h-3vNhNvNhNv-6hNv-6h1vTh1vTh3v1h10vNh2vN"/ D 126 20h1v2h1v1h1v1h1v2h1v3hNv2hNv5hNv1hNv1h-4vThNvTh1vTh1vNh2v-3hNvNhNvThNvNh-8v1hTv1hNv1hNv2hTvNhNv-3h1vTh1vNh1vNh3v1h10vNh2vN"/ D 305 20h2v1h1v2h1v4hNv1h-4vNhNv-5h1vNh1vN"/ D 406 20h2v1hTvN"/ D 602 20h1v1h1v2hNv1hNvNhNvTh1vN"/ D 78 21h1v1h1v2h1v2h1v4hNv2hNv4hNv1h-3vNhNv-3h1vNh1vNh1vNh1v-3hNvNhNvNhN0v1hNv1hNv1hNv2h2v1h2v1h1v4hNv1h-4vNhNv-6hNvNhNv-3h1vTh1vTh3v1h10vNh2vN"/ <path fill="#fcbbc3" d="M 214 21h2v1hTvN"/ <path fill="#fcbbc3" d="M 357 21h2v1hTvN"/ D 454 21h2v1hTvN"/ D 594 21h2v3hNv1hNvNhNvTh1vN"/ F 264 22h1v2h1v2h1v1h4vNh1v-3h1v7hNv2hNv1hNv1hTv1h-9vNhTvNhNvNhNvNhNv-6h1v2h1v1h4vNh1vNh1v-3h2vN"/ F 310 22h2v1h1v2h1v1h4vNh1vTh1v6hNv1hTv1hTv1h-3v1h-5vNh-3vNhNv-4h1v1h4vNh1v-4h1vN"/ D 400 22h2v1h9vNh3v1h1v2hNv1hNv1h-3vTh-5v1hNv1h-3vNhTv-3h1vN"/ D 460 22h2v1h1v3hTv1hNv1hNv1hTvNhNvTh1vNh-6v1hNv1hNv2h2v1h1v2h1v2hNv1h-4vNhNv-4hNv-5h1vNh1vNh2v1h8vNh2vN"/ D 320 23h2v1h1v4hNv1hNv2hNv1hNv1hTv1hTv1hN0vNhTvNhNvNhNvNhNvTh1vNh2v3h1v1h3v1h5vNh3vNh2vNh2vNh1v-6"/ D 498 23h1v3hTvTh1vN"/ D 503 23h2v1h1v2hTvNhNvT"/ D 547 23h1v3hTvTh1vN"/ D 553 23h2v1h1v2hTvNhNvT"/ D 605 23h1v1h1v1h1v4hNv1hNvNhNvNh-8v1hNv3hNv1h1v2h2v2hNv1hTvNhNv-3hNvThNvNhNv-4h1vNh3v1h8vNh1vNh1vT"/ F 22 24h6v1h2v1h1v3h1v1hTv1hTv2hNv1hNv1h-5vThNvNhNvNhNv-3h1vTh1vNh2vN"/ F 115 24h8v1h1v2h1v1h1v3hTv1hNv2h-6vNhNvNhNvNhTvNh-3vNh1vTh1vNh1vNh2vN"/ F 354 24h11v1h2v1h1v1hTv1hTv1hNv3h1v1h-7vNhNv-3hTvNh-3vTh1vNh2vN"/ D 509 24h2v3hNv1h1v1h1v3hNv2hNv1h-3vNhNv-3h1vNh-4vNh-4v1h1v1h1v3hNv1hTvNhTvNhNvNhNv-5h1vNh1v1h2v1h7vNh2vNh1vNh1vN"/ D 558 24h1v1h1v4hNv2hNv4hNv2h-3v-5h1v-4hNvNh3vNh1vT"/ D 598 24h2v1hTvN"/ F 67 25h10v1h1v1h1v3hNv1hNv1hNv1hNv2h-6v-3hNvNhTvNhTvTh1vNh1vNh1vN"/ F 165 25h9v1h1v1h1v2h1v2hNvNh-3v1hNv3h1v1h-8vThTvNh-3v1hNvNhNv-4h2vNh2vNh3vN"/ F 405 25h5v2h3vNh1vNh1v1h1v3hNvNh-3v1hNv1hNv3h-5vNhNvThNvNhNvNhTv1hNv1hNv-3h1vNh2v1h3vNh1vN"/ F 451 25h6v1hNv2h1v1h2vNh1vNh1vNh2v1hNv1hNv1hNv1hNv1hNv2h-5vNhNvThNvNhTvTh1vNh1vN"/ F 212 26h9v1h2v1hTv1hNv1hNv3h1v1hTv1h-5v-3hNvNhNvNhTv1hNv1hNvNhNvTh2vNh2vNh2vN"/ D 500 26h2v1hTvN"/ D 550 26h2v1hTvN"/ D 366 27h2v1h1v2h1v2hNv2h-4vNhNvNhNv-3h1vNh2vN"/ D 462 27h1v2h1v2hNv2hNv1h-3vNhNvTh1vNh1vNh1vNh1vN"/ F 510 27h1v1hNvN"/ D 544 27h2v1h8v1h-5v1h1v2h1v4hNv2h-3vNhNvNhNvThNv-3hNv-3h1vN"/ D 221 28h3v4hNv1hNv1hTvNhNv-3h1vNh1vN"/ D 351 28h3v1h2v4hNv1hTv1hTvNhNv-5h1vN"/ D 400 28h2v1h1v1h1v4hNv1hTvNhNvNhNvNhNvTh1vNh1vN"/ D 412 28h3v1h1v3hNv1hNv1h-3vNhNv-3h1vNh1vN"/ F 554 28h1v4hNv3h-3v-3hNvThNvNh5vN"/ F 597 28h8v1h1v1h1v2hNvNhTv2hNv1hNv1h-6vThNvNh1v-3h1vN"/ F 499 29h4v1h4v1hNv2h-5vThNvNhNvN"/ D 30 30h2v5hNv1hNv1h-3vNhNvTh1vNh1vTh2vN"/ D 110 30h3v1h2v1h1v1h1v2hNv2h-4vNhNv-3hNv-3"/ D 173 30h3v1h2v4hNv1h-3vNhNvNhNv-3h1vN"/ D 209 30h2v1h1v1h1v4hNv1hTvNhNvNhNvNhNvTh1vNh1vN"/ F 558 31h1v2hNvT"/ D 604 31h2v1h1v4hNv1hTvNhNv-3h1vT"/ D 160 32h3v1h2v2h1v2hNv2h-3vNhNvNhNvNhNv-3h1vN"/`
  }

  const decode = arr =>{
    return arr.split('').map(c=>{
      if (c === 'D') return '<path d="M'
      if (c === 'F') return '<path fill="#fff" d="M'
      if (c === '/') return '/>'
      if (c === 'N') return '-1' 
      if (c === 'T') return '-2'
      return c
    }).join('')
  }


  const body = document.querySelector('.wrapper')
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
  const pandaImpact = 80
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
    const lowerLimit = -40
    const upperLimit = 40

    if (x > lowerLimit && x < (body.clientWidth - upperLimit)){
      panda.style.marginLeft = `${x}px`
      pandaObj.prev[0] = x
    } 
    if (y > lowerLimit && y < (body.clientHeight - upperLimit)){
      panda.style.marginTop = `${y}px`
      panda.style.zIndex = y
      pandaObj.prev[1] = y
    }
  }

  const slidePanda = (panda, pandaObj) =>{
    let x = pandaMarginLeft(panda)
    let y = pandaMarginTop(panda)

    if (pandaObj.hit.includes('left')) x += pandaImpact
    if (pandaObj.hit.includes('right')) x -= pandaImpact
    if (pandaObj.hit.includes('up')) y += pandaImpact
    if (pandaObj.hit.includes('down')) y -= pandaImpact
    
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
    return Object.keys(directions).map(dir =>{
      return  `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="20%" viewBox="0 0 624 48">${decode(pandaSvg[dir])}</svg>`
    }).join('')
  }

  // const mapPandaAssets = () =>{
  //   return ['1up','2dup','3side','4ddown','5down'].map(svg =>{
  //     return  `<img src="assets/${svg}.svg" alt=${svg}/>`
  //   }).join('')
  // }

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
      defaultFallDirection: turnDirections[Math.floor(Math.random() * turnDirections.length)],
      moveSpeed: randomMoveSpeed(),
      prev: [panda.style.marginLeft, panda.style.marginTop], 
    }
    const pandaObj = pandas[pandaCount]
    const pandaStatus = document.createElement('p')
    pandaStatus.dataset.index = pandaCount
    
    startPanda(panda, pandaObj)
    moveAbout(panda, pandaObj)
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
    // hitCorners.forEach(h=>h.style.backgroundColor = 'transparent')
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
            // a.style.backgroundColor = 'orange'
            // b.style.backgroundColor = 'orange'
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
      hitCheck(upleft && upright && downleft && downright, panda, panda.defaultFallDirection )

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

}

window.addEventListener('DOMContentLoaded', init)

