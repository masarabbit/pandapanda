function init() {

  const pandaSvg = {
    up: 'd 601 9aAaAaAnBkNnUaNaN"/D 18 10bAaAnAnBuXaN"/F 22 10W7AaAaBaEaGiAW-6NiNnXaNbUaNaNaN"/D 30 10bAaEuUnU"/D 114 10bAaAnAnBuXaN"/F 117 10W7AaAaBaBaAaGkAn0NkNnKaNaNaUaNaU"/D 125 10eAaGnAnUnUnU"/D 66 12eBnAnAnNnUaN"/F 70 12W6AaAaAbEaGkAn2NuKaNaUaNaNaNaN"/D 76 12gEuNnNnN"/D 593 12eBnAnAuKaN"/F 596 12eAaAeUbAnEbKeAnAbJnAiAxNxAkAnUaXnNbNaNaU"/D 604 13bEuK"/D 166 14eEnAkKaN"/D 608 14aAnN"/F 169 15eAeAaAaBaAaAnAnBn0NkNnNnKbNgNaU"/D 222 15aAbBaGxKnKaN"/D 175 16gEnAnUnNnN"/D 308 16aAaAaAaBuAnAnEaAaAaEnAuNnNuNnUnNaUbw-7bN"/D 314 16gAaGkNuX"/D 268 17eAaAaAaAaAaGnBnNuUuUaUiNaNaU"/D 501 17bAaAuAnAnKaN"/D 548 17eAnAnAnAnKaN"/F 552 17jEW-6AkNaNaNbN"/D 557 17gExK"/D 209 18bAaEeAaBnAuAeAW8NnNnKgGnBn1NkGaAuNnNnXaUnw-6aN"/F 216 18jAaEgAxEaAaAW-8NkNbNaUnNkUaAeK"/D 260 18eAaBnAuAnEaBnAnBeAaEnAkNnXnNnNnXaNbXaNaN"/D 364 18eAaBuNkNaN"/D 509 18bAaBnAaEnAeAaAaBnAaEnAxXaNuNuNW-8AnAuUaUaNbNW6AeKnNnUaN"/D 159 19bAaBaAaAeAa0UaNaNeGnAnAnAiNn3NnNnNnXaN"/F 213 19aAnN"/D 214 19bBkNaN"/D 356 19eAnAnAnAnBbNW9NeAaAbAaAaBaBnBkBxUnNaNeUaNnUuNW-9AkAnAnEaAeAaBnAkUkNnXaNaNaw-6aNaN"/D 460 19eAaBuAnNnK"/F 502 19W6BaAaEkNW-6AuAnUaUaNaNaN"/F 312 20gAgAnAnBnAaAaEaAaNaGuAkAW-7NuNnKaAbNaKnNnNnKaNaNbN"/F 358 20W8AbAaAkAW-9AuUaNaNaN"/D 403 20eBnBnNnK"/F 407 20jAbAaAaAaGnAkAW-8NnNnUaUaUaNaN"/D 412 20gEnNnNuN"/D 451 20gAnAnAnBnI"/F 455 20jBaAaEbNaNaGuAnAn1NnXaUaNaNaN"/D 551 20W6AeAaAaAaEnNuNuNW-9AuAnKaNaNeN"/F 557 20gAaBnNnNkN"/D 17 21jAW6NjAaAaBaw6nJnBnAxNnUnNaNbNaNaKnKnNnNW-8AuAnAnGaBbAaAbAnAuAuNnNnw-7nIaUaN"/D 113 21eAa0NeAaAaBaBnEuKnNuNW-7AuAnBnBnBaAaAeBnAnAxNnw-6nNnKaKaUaU"/F 263 21W8BnBbBnNuEbNaNbAaBnNuAnEaBnAW-9NaKnNkUaNaBeUnNnAnUnKaNbN"/D 320 21ew9uAnNnKnNnNaUaNaN"/F 511 21aAnN"/D 596 21gAgNjAbBaEaBnBnJnBuAuNnNnXaNbNbNbNnNnNnNnNkNW-8AuAuKaNeN"/D 65 22aAa2NeAaBaw6uUnUnNuNW-6AkAnAnAnBuw-6aUaN"/F 462 22bAuN"/D 462 23bAaAnAuK"/F 464 23aAnN"/F 512 23aEuNaU"/F 21 24W8AaAaEaEnAnAuAW-7NnNuUnXaNaNbN"/D 417 24aAaBaAnBnAiAW-9NuNnKaNaBaAaAW8NeNaX"/F 549 24W9AbAbAaBxAnBnAW-6NuNuUnKaNbN"/F 596 24W8AeAaAaAaAaAuAuAuAnExNuNuNnNnNnKnUbNbN"/F 71 25W6AbAaBaBaAnAnAnAkAiNkNnNnNnKaNaNaNeN"/F 119 25W7AbAaEaBnAuAnAkAxNkNnNnUaUaUaNbN"/D 265 25bAuN"/F 359 25W9AbBaAnBkAnAaBuAW-7NaUnNkNnKaNaNeN"/D 403 25aAnN"/D 449 25bGaAa1NaNbNaAbJnNuNW-6AW-8NnNnNnX"/D 269 26bAaAnAuK"/D 361 26bAuN"/D 365 26bAaAnAuK"/F 161 27a3AgGnBuAkAW-6NkNnNnXnNaN"/D 262 27aAaBkUaN"/D 357 27bAaBnAuUnNaN"/F 497 27aAnN"/F 211 28eAa1GnBnNnAkAxNkNnNaNnX"/F 500 28W8AbAbAnGkAW-6NuNnNnUnNbNaN"/D 592 28aEaAaAaAbEnAkNnNnw-8"/D 158 29eGaAuNuX"/D 272 29bAaAaAnAnAuNnKaN"/D 546 29aBbAbEnAuNnNnI"/D 559 29gJnAxNnUaUaN"/F 418 30aGuAkAW-8NuKW9NjN"/F 403 31aAnN"/F 460 31W6AbAuAuAxAiNuNnUW8N"/D 65 32aAaAaAeAnAnAuNuI"/D 81 32aGnBxNnUeNaNaN"/D 129 32aEnAnAxNnNeNaNbN"/D 177 32aw6uAuNnNnUeNbU"/F 275 32aAnN"/F 274 33aAnN"/D 222 34aBnAkUeN"/',
    dUp: 'd 17 9eAnAnBuKaN"/F 20 9jAgAnAnBaBgBaEnAnAn0NkNuNnIaNaNaUaNaN"/D 113 9eBnAnAuKaN"/D 29 10bAaAaBnBxUnUaNaN"/F 116 10W6AbAnBaBeAaBaEnAxAkNiNuNuNnUnNaUaUbNaNaN"/D 124 10gAaEnBxUnUaU"/F 166 10eAnBaAaAbNaAaAaAbAuBnAuAkAW-9NnIaUaUaNaNeN"/D 169 10eAaEnAuNnNnUaN"/D 213 10bAaEbEuNnUkKaN"/D 65 11eBnAnAuKaN"/F 68 12W7AnBaAaAgAaGnAuAW-9NxNuNnUaUaNaNaNaNaN"/D 75 12eAaGkNnNnUaN"/D 599 12bAaEaAaAnAnNnUnNuUaN"/D 159 13bBnBnNnUaN"/F 209 13eAeBaAbKbAbGnBnAuAkAxAkNuw-7aUaNaN"/F 216 13bAuN"/D 591 13bBnAnAnAnKaNaN"/D 220 14aAnN"/F 593 14jAbAaBaAaNaNaAaGW-6AW-9AnUnXaNaNaNaN"/D 205 15bBnEnNnKaN"/D 548 15eAnAuAnUaN"/F 550 16gAbBaAbJnNnNnNuNW-9UaNbNbN"/D 177 17bAaEnAnBnAnAn1AuAuAnAnKnNnNnXaNbBaAW9NeNbNaUbN"/D 223 17bAaGnAnAuAW-7AkAnAuAnUnUnNbAeNgNeNbNaUaNaN"/D 556 17eAaBkNnU"/D 501 19eAaAiNaN"/D 263 20bAaEiAnKaNbN"/D 444 20bAaBnAnAnNnKaN"/F 449 20eAnEgEbKaBeAbAaGnBnAuUuNnUkAW-7NuNnXaNaNaUbN"/D 452 20eAaBnAxKaN"/D 16 21bAeAa1AaAaJnw6nAxNaNaNuInNkNW-8BnNnXaUaN"/D 113 21aAbAjAeNgAeAaAaEnAW-6NuNuNxNkAkAnEuNnXaNaNaNaNaN"/D 268 21gAaGnJnBnAnAnUnUuNaNaNaNnUnNaUaN"/D 302 21gAbNgAaAaAaAaBaAaEnBnAxNuNnNnw-6nAnAuNnUnK"/F 499 21W8EeJxNbNaUuAnBuNuNW-7NaNaNaNaN"/D 507 21eAaAnAkK"/D 545 21W9AbAaAaAaBaEnAuNnNnNnNuNuNW-7UaNaN"/D 63 22bAgAW9NbAaAaBaw6nAnGnAnAkNnXaUeUnNnNnNiNW-6AnAnBaBaAaAbAnAkNnNnw-6nNnUaUaNaN"/F 456 22aBuNaN"/D 600 22W8AaBnAn4AuAuXaNW9N"/D 398 23bBnAnAuUaNaN"/D 405 23eAaExNnUaN"/F 222 24bAaw6nBnAnAnAn0NnNnUnKaNbNaNeNW7N"/F 261 24jAaBaAnAnAnAbBaEiAnBW-6NkUnXaEbKnUbNbXeN"/F 359 24eAbAew6aBnAnXnNnNuNuNxNaNbN"/D 362 24eAaAuNuN"/F 400 24gBaAgUaNaBeAuAuGnAnAuAW-6NuUnIaNaNaN"/D 411 24gGjAaEnAxNaKnBnBnAnAnAuAuAW-7NuNnNnKaBbAW6NbNaNaXbNbNkU"/D 455 24bEuK"/D 254 25gGuAuBaEuKnUaXaN"/F 307 25aw6aAaAuAnBeNaNnNbAgNaEnAnNuAuBW-8NuNnXaBbKnNaNaNaNnNbNaN"/D 507 25bBnAuUaN"/F 543 25W7AbAbAaAaAaAnBnAkAxNuNnNuNnIaN"/F 115 26eAgAbAbAbBuAuAuBiNnNuNuUnKaNeN"/F 165 26a2EaExAnAnEkAxNuNuUnUnUaNaNbNbN"/D 225 26eJnAnAuUaI"/D 299 26gAaAaAnAnAnAaEuUnUnNnKaN"/F 494 26aAnN"/D 495 26W7AbAbAgAaBaAbEnAkNnUuNnNuNW-9AnIaN"/F 594 26a1JkAnEiNkNnNuXbNbN"/F 16 27W8AeAaJbAnAnAW-6NkNnNnNnNnKaU"/F 65 27W6AjAaAaAaBkBnBW-6NnNuNnNnUnUaNaN"/F 352 27eAaAuAbNgAaAbAnEnBnNxAnAxNnUnIaNaNaN"/D 355 27jAbAbAaAaw7nAkNnKaKaNuNnNuNkN"/D 367 27gAaGuAuNnI"/F 415 27aAnN"/o 356 28bAuN"/D 348 29bAnJaBuNnUnNnUaNbN"/D 354 29bAuN"/F 416 29aEnBnAnAuNaNaNaUaU"/D 464 29aAbAaEnAiNaUaK"/o 258 30bAuN"/D 351 30bBuU"/D 445 30bAW7NeBaAbEnAW-7NuNuNnNnNnU"/D 14 31aAaAaAaAaBnAxNnKaK"/D 111 31aBbAbBxNnX"/D 257 31bAuN"/D 304 31bAuN"/D 357 31bEkUaN"/F 495 31W9AbAaAbExAxNxNuNnKaN"/D 542 31aAbAaAaAnAnAuNnI"/D 602 31eAaJnAkNnIaN"/D 126 32bGnBnAuAuNnKaUbNbN"/D 174 32gAaJnAxNnNnKaNaN"/D 260 32bAaBnAkKaN"/D 590 32bAaAeBnAkNnUnU"/D 308 33bAaAnAkUaN"/D 555 33bEnAkNuNaNeN"/D 251 35aAaBuK"/D 299 35aBaAkUaN"/D 263 36gBnAxUaN"/D 313 36bAaBuAuNnUbN"/D 356 36gBnAkNnNaN"/F 410 36bAuN"/',
    side: 'd 28 10eAaBnNuNnN"/D 124 10eAaEnNnNuU"/D 170 10bAaEnNuNnNaN"/D 19 11gEnAkNnUaN"/F 23 11W6AbAaEaGnAnAkAW-6NxNnw-6aNaAeNaK"/D 115 11gEnAkNnUaN"/F 119 11jAbAaBaBnAbBnAnAkAW-7NuNuXaKaAeNaK"/D 67 12bAaEnAkNnUaNaN"/D 76 12eAaBuNnNnN"/F 166 12gAbAbAaAbJnAuAkAn0NuIaNbEaAbKnNuNaUaNbN"/D 214 12eAaBuNkNaN"/F 70 13W7AaAaAaBaAuAbNaEuAkAW-8NxNnUaUaNeNaK"/D 160 13bAaBnAkKaN"/F 209 14W7AbAuEeUbAaEnAnAnAuAuUuBaAxAuAnAnNnUnXnNbUaKbNaN"/D 25 15bGkKaN"/D 121 15bGkKaN"/D 171 15bAaAnAnNnU"/D 264 15eBaBbAbAaJnExNnNnw6nGnAuNnw-6nXnNnNnNnUaUaNbAaJaNbAaAaKnNuNnKaUaN"/D 216 16bAaBkK"/F 218 16aAnN"/D 603 16bAaEnNnNnU"/D 72 17eEnAuX"/D 127 17bAuN"/D 162 17bAaEuNnK"/D 177 17bAaEnBnAnBuNiAkAuAnAW-6NnNnKaNgAa0NeNbNaX"/D 203 17eBnBuNnUaN"/D 303 17gAaAeAaAbAaEnBuAuNuNuNuNxKbKaN"/D 594 17bBnAnAnKaN"/F 597 17W6AaAaAaAaGnAnAxAkNkNnNnXaNaNaNaN"/D 30 18bAuN"/F 548 18W8EbAaBaBnAkAn0NnIaAaNaX"/D 556 18bAaBkK"/D 79 19bAuN"/D 169 19bAuN"/D 223 19gAaBnBuAW-6AkEnAnAkAxXaNbNgNeNbNaNaNaNaN"/D 403 19eAaBkNuNaN"/D 458 19eAaBnAnUnNnN"/D 545 19eEnAnNnK"/D 208 20bAaBnAuNnUaN"/D 449 20bBnBnAnXaN"/F 452 20W7AaBaAaGnAnAuAxAxNuIaUaUaNaN"/D 31 21aAbAaAaAaBnAuUnNuNxAkAnAnAnAnAuAkNnXaNaNaNbNeAW6NeN"/D 113 21bAbAW7NeNbGxAaGnAuNnNnNuNxNnKnU"/o 169 21aBuNaN"/D 214 21bAuN"/F 261 21bAbAaEnNnNuAnX"/F 401 21eAbAnAaAbUbJnBnAnAnAuAW-6NnUnNbNaXuNaNaNbN"/D 603 21bEuK"/D 80 22aBxNeN"/D 350 22gAbAbAaAaEaGaGnAnAnAuAxNnUaNbNaNaw-6nKnNnNkAnAnKaN"/D 366 22eAaEuNnNuNaN"/D 411 22eAaBuAnAnBaJnAnAuAnAxNuNnNnNjNbNaNaNaUaIaN"/D 596 22bEuK"/D 66 23eAW8AnAnAnBnBaAaEnBnAnAxNnNnXaNaNaKnKuU"/F 113 23aEaAgAbAaAaAbNaXnNgAaJnBuAuAkXnNiAuNnw-7"/o 213 23bBuU"/F 315 23aAaBaJnBnBnAnKnUnNnNnNbNbUaU"/F 359 23W6AbAaAaAaJuAnAnEnAkAuNaNaXnXnKnNnNaN"/D 405 23eBuNnN"/D 498 23bEuAnAnKaNaN"/D 507 23eAaEuNnNnU"/D 549 23aEuUaN"/D 555 23bEnNnU"/F 27 24gAbAaGnBnAnAuAuKnNiAnAnAnXbNaNaNaNaNeN"/F 77 24gAaw6nAnAnAnAuAuNaKnNnUaUaNaNaN"/F 254 24eAaAaAaGaw6nAnAiUnNxUnXaUaNaNaBbNaNuNaN"/F 301 24eAbAbAxBnBaAaAkAnAaAkAnKnXaKaBeKuNaN"/F 351 24eAaAaBnBaNaw6nAnKxBaAeAuAnAnUnNkNnXnUbNaNaBbNaUuNaN"/D 458 24bBuU"/F 500 24W7AaAaAbBnBnNuAnAaBnEaAkKnNuNaUnNnAnBnNnNnKaNaNbU"/D 600 24bAuN"/D 607 24aAaBaEuNnNW-6NgNaNaN"/F 66 25bEaEnAnAuw-6aU"/F 170 25jAeEuAnGnAuAiNnNnNxNnKgNaNbNeN"/F 219 25W6AaGnBnBuAuAxNnNnNkAnAnNnUeNeNaNaKeN"/D 248 25bAaAnAnBnNnKaN"/D 346 25bAaAnAnAuKaN"/D 396 25eGnAuNnKaN"/F 413 25bAaAbAnBaExAuInUaNaN"/D 452 25bBnAuUaN"/D 560 25aJnAnAaEnBnAuNnKaXaUnNeNaN"/D 252 26eAnAuU"/F 299 26aAnN"/D 300 26bEkUaN"/F 349 26aAnN"/D 350 26bBnAuUaN"/D 402 26aAaEkKaN"/D 462 26bAaAaAaAaGnAuNnUaUnAW-6NbNaNaU"/D 552 26bAuN"/D 594 26aAeAeAkAnBnAuNnIaN"/F 266 27aAaAgAnBnAnBnAuAnXaw-6"/D 297 27aEnAnKaN"/D 304 27gAbAaAaAaBaGkNuNnNuNnNnNnUaU"/F 308 27bAuN"/D 406 27aAnN"/D 456 27bAuN"/D 545 27aAa0AkAuBaBnAaExNnNnInX"/D 226 28bAaEuAkNaUaU"/D 255 28aBnU"/o 257 28bBuU"/o 355 28aBnU"/D 417 28bAaGuKnU"/D 511 28aEbAaJnAkUnAnAuNnKaUnNaNbAaUaN"/F 512 28aAaBuK"/F 556 28aBnGnAxNaUnUbNeN"/F 601 28W6AaAaBkAnAnAnAxNuNuNaNaUaNeN"/D 176 29eAaAaBnAnAuNuXaN"/D 353 29aBnU"/o 406 29aAnN"/D 33 30aw6nAkNnUbNaNaU"/D 116 30jAaGnAnAxNnNnXbN"/F 464 30aBnBaAW-6AnBnUnNnNnNaNeNW6N"/D 500 30aAaBnAbAaEiNnNnXaAaUaN"/D 21 31jAaEnBnAnBxNnUnKaNaNaN"/D 81 31aGnBnAkNnUbNaNaNaN"/D 129 31aAaJnAkNnUnNbNbU"/D 449 31aAgNgAkAnAaAaAaBnAkNkUnI"/F 559 31aAnN"/D 368 32gAaAaEuAiNnKaNaN"/D 606 32eJnAkUnUaNaN"/D 161 33gAaAaAaBnAnAkUnUnK"/D 211 33eAaAaAaAaBnAkNuNnNnKaN"/D 254 33bAaBkNnNaN"/D 302 33eEkNnNaN"/F 305 33aAbAaAbAaAiAiKeK"/D 351 33gEkNnU"/D 414 33gAaEuAW-6KaNbN"/F 411 34aAnN"/D 595 34bAbAaBnAuNnNnK"/F 410 35aExNaNbN"/D 459 35jAaBnAxNuUaN"/D 250 36eAaBnAuNnK"/D 299 36eGkNnUaN"/D 347 36eAaBnAuNnK"/',
    dDown: 'd 28 8bAaGnNnUuNaN"/F 119 8bAbAaAaAaAaEaBnAnAnAiAiNkUnKaUeNaXeN"/D 124 8bAaGnNnNnNnNaN"/D 17 9eEnAnAuNnUaNaN"/F 21 9W6AbBaBaBaBnAnAuAn2NnXaUbNaNaUaN"/D 113 9bAaEnAkNnUaNaN"/D 169 10eAaEnUuNnN"/D 550 10aAaBnAnAuKaNaN"/D 602 10eAaBuNuU"/D 65 11eGnAuNnKaN"/F 69 11W7BaAaAaBaAaBnAnAxAW-8NkNnXaNeNaKaN"/D 76 11bAaEnNnNnU"/F 163 11W7AbBnNuEaAaNaUeAaEnBnAuAkAW-6NuNnNuKaNaUaNaNaN"/F 552 11W6AaAaAaGaGnAxAiNkNnNnNnKaNaNbNaNaU"/D 560 11aAaAaEnAnKnNnNaN"/F 598 11gAbAbAuBaAaKbAaAaEnAnAuAxAW-7NuNnIaUaNbNbN"/D 159 12eAnAnBuKaN"/D 218 12bAaBuNnU"/D 401 12aAaAnAnBnNnUaNaN"/D 410 12bAaEnNnNnU"/F 452 12jEaAaAbNaBaBuAnAuAxAiNkKaUaUaNaUbN"/D 458 12bAaAaBnAuNnNnUaN"/D 592 12eAnAnBuKaN"/D 169 13bAaBnAnNnK"/D 209 13bAnBnAuUaNaN"/F 212 13W6AaAuBaAaKbBnEnAnAiInUnAnUbN"/F 404 13W6AaAaBnNuBeNaAaBnAkAkNiAnAnNnKaUaUaNbN"/D 448 13bBnAnAnKaN"/D 27 14bAaBkK"/D 124 14aAaBnAnNnUaN"/D 177 14aAaw6nAnAnAn0AuAuAnAnNnUnNnNnKaNaAbAaAbAW6NeNbNaUaKaN"/D 360 14aAaBnNuNaN"/D 604 14bEnNnU"/D 19 15bAaAnAuK"/D 115 15bEnAnNnUaN"/D 162 15bEnAnNnUaN"/D 211 15aBaJjNaNaKaNaNbAaGnAaAaJnAnAuNnIxAxAuAnAuNnw-6aUbUaN"/D 217 15bEnNnU"/D 501 15bEnAuAnEaEaAaAeAaAaEnAnAW-6NuNnUaNeNnUnNnNnKaUaNaUaNaN"/F 504 15jAbAaAaBaEaBnAnAnAkAaAaAnAkUnNnNkNnNnKnKaNbNaUaN"/D 597 15aAaBnAuKaN"/D 68 16bEnAuKaN"/D 75 16bAaBnAnNnK"/D 166 16bAuN"/F 209 16aBuNaN"/D 313 16bAaAaAaAaBuNiNnUaNaN"/F 356 16jAuBuAbNbUaAbExAnNkBnAxNnNaNaUaBbUuNaNbN"/D 365 16bAaEnEW-7AxAnAnAnBkNnNnUnUaNbAaAgNeNbNgKnNbN"/D 403 16aEuUaN"/D 409 16bAaAkU"/D 512 16bAaGnNnUnU"/D 258 17gAaJnBnAnAkUnIaUaN"/D 270 17eAaw6nAnAkNnw-6aNaN"/D 351 17bBnBnNnUaN"/D 359 17bBuU"/D 457 17aAaEuNnUaN"/D 551 17bEnAnNnUaN"/D 558 17aAaBuK"/D 602 17bAuN"/D 24 18bAuN"/D 120 18bAuN"/o 166 18bBuU"/F 207 18aBnU"/D 215 18bAuN"/D 406 18bAuN"/D 449 18bEnAuUaU"/D 30 19bAaAaBaGuNnUkNW-7AuAnAnAuAkXaNaNaNa2NbN"/D 72 19bAuN"/D 126 19aAaAaBaEnNnNkNxAuAnEnAaAaEnAnAkNnInw-6aUbAjNjNaN"/D 304 19bAaAaBuAnAnAnNnXaNaN"/D 353 19bBuU"/D 357 19bAuN"/F 264 20gJaAeNaEnBnAnAuAW-8NuNnNnUnIaBaBeNaNaUaUaN"/D 413 20aAaAbBaEaBaGuAkNnNnXaNaNaNnNuNkAkAnAnAuAuAnUnKaNaNaNjAeNeN"/D 461 20eAaGnAuAuNnUuAxAuBnAeAaAaEnAnAkNnNnXuNnKaUaNbAjNgNbNaN"/D 545 20bAaAaAeAjNgAaJnGnAnAuNnUaNbNaNnUnUiAaEnAkNnNnKnNnNnK"/D 555 20bAuN"/D 608 20bAaAaGuNnNnNxAiAuAnAnAnAbAbAaEnAnAuNnNnIuNnKaNaNaNbAW7NgNbN"/D 79 21aAaAaw6nKnNnNW-8AnAnAnBaAaAaGnAnAkNnKnXnXaUaNbAW8NgN"/F 308 21W9AbAaBaBnAuAuAW-8NkNnNnNaNaNaNbU"/o 356 21eAnAuU"/D 452 21bAuN"/D 512 22aEuUaN"/F 22 23W7AeBaBnBnAnAnAuAxNnNnNkNkUaNbNaNaNbN"/F 121 23gAeAaAaAnBnBuAnAnAW-6NaKnNnNaKaNbN"/F 217 23gJaAbNaBnAuAnAiUnUnNkAnAnKaNaNbNgN"/F 360 23W8AaAkAnJnAkAnNuNiNnNaUaNaNaNgN"/F 410 23eAbAaAnAnAnEnAxNnNuNxNbNbNaNaNeN"/D 504 23bBnAuUaN"/F 545 23aAaAaEaAaAeNaKnNjBaBaAnAuAuAxNnNnNnNnNnNuKaN"/F 604 23gAaAaGnAnAuAuAiUnNuNuNaNaNaNbNjN"/F 71 24W8AaAaGnAnAuAnAiKnNnNnUaNaNaN"/F 166 24a1BnAuAnGnAiUnNiAnKaNaNbNbN"/D 321 24aAaGnAuAkAnAn0NuNnNnUaNaAaAeAW8NbNbNaK"/F 457 24bBaAbNbNaBnBnAnAnAW-6NnNnNkNaUbNgN"/D 366 25gAaBaGnAkNuNnIaN"/F 496 25aAaAaBaAkAnNnXaN"/D 176 26bAbGuAiXaNbN"/D 465 26aAaAaGnAxNuNaNaNaUaN"/D 508 26bAuN"/D 513 26aEaGnAkNnUaNnNnNeNaN"/D 129 27aw8nAxNnUaNaNbUaU"/D 544 27bAaAaAaAaAaBnAkNnNnUnX"/D 32 28aJnAnAuNnNaNaNaNaU"/D 211 28eAaBaBnBnAuNnNnNnKaNaN"/D 401 29gAbAaJnAuAuNnUnw-6"/D 609 29aEnBnAkNnUbNbNaN"/D 15 30eAeAaAaBnBnAnAkNnUnw-6"/D 80 30aEnAnAkUaNbNaN"/D 161 30jAaEnBnAxUnXaN"/D 353 31jAbJnAxNnNnI"/',
    down: 'd 16 9bAaAnAnBuNnUaNaN"/F 22 9gAbAaBaAaEaBnAnAuAn0NuNnNnUaUaNaUaNaNeN"/D 28 9bAaAaBnAnNnUnU"/D 113 9bBnAnBuKaNaN"/F 117 9jAbAaBaBaBaEuAuAn0NkNnKaUaNaUaNaNbN"/D 124 9bAaGnNnUnU"/D 65 11bBnAnBuKaNaN"/F 69 11jAaAaAaAaBaAaBnAnAuAn0NkNnUaUaNaUaNaNbN"/D 75 11bAaEnNnNnU"/D 159 11bAaBnAnAnNnKaN"/D 170 11eAaEnNnNnNnN"/F 163 12W8AaAaAaAaAaEnAnAuAn1NnNnNnNnNaUbNaNaNaN"/D 219 13aAaAaBuNnNnNaN"/D 170 14aAaAaBuNnK"/D 209 14bAaAuAuAnUaNaN"/F 213 14jAaAaAaAaBnAnAnAiNbNuAnNkAnAnAnNnKaUaNbAnBbNaUuNbNaN"/D 19 15bBnAuUaN"/D 26 15bAaAnAuK"/D 114 15bEnAuKaN"/D 122 15bAaBkK"/D 162 15aGuNnNaNaN"/D 353 15bBnAuUaN"/D 363 15aAaBuNnNaN"/D 402 15bBuAnUaN"/F 405 15gAaAaAnAnAaAbUnNbBaBkAW-9NuKaNaNbNaN"/D 410 15bAaBuNnU"/D 602 15bAaBkNnNaN"/D 67 16aAaBnAuKaN"/D 74 16bAaBuNnU"/F 355 16W6AbAuBbUaAaBnAiNuAxNnUaNaBbUuNaN"/D 450 16aAaAnAuUaN"/D 458 16bAaBuNnU"/D 592 16bEnAuKaN"/F 596 16jAaAbAaBaBnBnAnAW-8NxXaUaNaUbN"/D 166 17bAuN"/D 176 17aAaJnAnAnAnNW-9AkAuAkNnNnUnKaNaNbAaAaAaAa1NbNaNaK"/D 210 17bBnAuUaN"/D 217 17bAaBuNnU"/F 452 17W6AaAuBaAaKaAaBnAuAW-8NuKaNbAnBbKnNaN"/D 496 17bBnBnAnKaU"/F 500 17jEaAbUaBaEnAnAnAuAW-7NuNnUaKaUaNbN"/D 505 17bAaEuNnK"/F 548 17jAaAaAaAaAaGnAkAW-8NkKaUaNaKbN"/D 555 17bAaBnAnNnNnNaN"/D 23 18bAuN"/D 118 18bAuN"/D 313 18eAaAaBaEnAxNnUnKaU"/D 354 18bBuU"/D 361 18bBuU"/D 366 18bAaEnAnAnAnNn1AuAnNnUnKaNbBaAa1NaUaN"/D 403 18aEuUaN"/D 410 18aAaBuNnNaN"/D 544 18bEnAnNnUaN"/D 71 19bAuN"/o 166 19bBuU"/D 214 19bAuN"/D 222 19bAaGnAnBuNW-9AuAuAuXaNaNaNaNeAaAjNaNaNaN"/D 258 19bAbw6nAnAxNnIaUbN"/D 266 19gAaBaGnAxNnUnXaN"/D 358 19bAuN"/D 451 19aEuUaN"/D 457 19bEnNnU"/D 30 20aAaAaAaJnAuKnNuNW-6AuAnBnEaAaAaGnAnAkNnNnw-6nw-6aUaUeAa0NbN"/D 126 20aBaAaAaBaEnBnJnAnAxUnUaUaNbKnNnUnNW-8AuAnAnBuNnKaUaNaNeAa0NbN"/D 305 20bAaBaGnAxNnIaNaN"/D 406 20bAuN"/D 602 20aAaBnAnNnUaN"/D 78 21aAaBaBaGnBnGnAkNnKaNaNaNaKnNnNn0AnAnAnBbAbAaGnAxNnw-6nNnKaUaUeAa0NbN"/o 214 21bAuN"/o 357 21bAuN"/D 454 21bAuN"/D 594 21bEnAnNnUaN"/F 264 22aBaBaAgNaKaw7nBnAnAuAW-9NuNnNnNnw-6aBaAgNaNaKbN"/F 310 22bAaBaAgNaUaw6nAuAuAkAiNkNnXaAgNaXaN"/D 400 22bAW9NeAaBnAnAkUiAnAkNuKaN"/D 460 22bAaEuAnAnAuNnUaNW-6AnAnBbAaBaBnAxNnXnIaNaNbAW8NbN"/D 320 23bAaGnAnBnAnAuAuAn0NuNnNnNnUaNbEaAeAjNeNbNbNaw-6"/D 498 23aEuUaN"/D 503 23bAaBuNnU"/D 547 23aEuUaN"/D 553 23bAaBuNnU"/D 605 23aAaAaGnAnNnNW-8AnEnAaBbBnAuNnKnUnNnXaNeAW8NaNaU"/F 22 24W6AbAaEaAuAuBnAnAiUnNnNnKaUaNbN"/F 115 24W8AaBaAaEuAnBW-6NnNnNuNkNaUaNaNbN"/F 354 24a1AbAaAuAuAnEaAW-7NnKuNkUaNbN"/D 509 24bEnAaAaEnBnAkNnKaNxNxAaAaEnAuNuNnNnIaNaAbAW7NbNaNaN"/D 558 24aAaGnBnGnBkIaXnNeNaU"/D 598 24bAuN"/F 67 25a0AaAaEnAnAnAnBW-6KnNuNuUaNaNaN"/F 165 25W9AaAaBaBnNkAnEaAW-8UuNkAnNnXbNbNeN"/F 405 25jBeNaNaAaEnNkAnAnEiNnUnNnNuAnAnKaNbAeNaN"/F 451 25W6AnBaAbNaNaNbAnAnAnAnAnBiNnUnNuUaNaN"/F 212 26W9AbAuAnAnEaAuAiKnNnNuAnAnNnUbNbNbN"/D 500 26bAuN"/D 550 26bAuN"/D 366 27bAaBaBnBxNnNnKaNbN"/D 462 27aBaBnBnAkNnUaNaNaNaN"/F 510 27aAnN"/D 544 27bAW8AiAaBaGnBkNnNnUnKnKaN"/D 221 28eGnAnAuNnKaNaN"/D 351 28eAbGnAuAuNnIaN"/D 400 28bAaAaGnAuNnNnNnUaNaN"/D 412 28eAaEnAnAkNnKaNaN"/F 554 28aGnEkKnUnNjN"/F 597 28W8AaAaBnNuBnAnAW-6UnNaKaN"/F 499 29gAgAnBiUnNnN"/D 30 30bJnAnAkNnUaNaUbN"/D 110 30eAbAaAaBnBxNnKnK"/D 173 30eAbGnAkNnNnKaN"/D 209 30bAaAaGnAuNnNnNnUaNaN"/F 558 31aBnU"/D 604 31bAaGnAuNnKaU"/D 160 32eAbBaBnBkNnNnNnKaN"/'
  }

  const decodeRef = { a: ' h 1', b: ' h 2', e: ' h 3', g: ' h 4', j: ' h 5', A: ' v 1', B: ' v 2', E: ' v 3', G: ' v 4', J: ' v 5', n: 'h -1', u: ' h -2', k: ' h -3', x: ' h -4', i: ' h -5', N: ' v -1', U: ' v -2', K: ' v -3', X: ' v -4', I: ' v -5', w: ' v ', W: ' h ', D: '<path d="M', o: '<path fill="pink" d="M', F: '<path fill="#fff" d="M', '/': '/>', d: '<path d="M', f: '<path fill="#fff" d="M'}
  const decode = arr => arr.split('').map(c=> !decodeRef[c] ? c : decodeRef[c]).join('')

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
  const frameSpeed = 140
  let pandaCount = 0
  
  const animatePanda = (panda, pandaObj) =>{
    const { frame:i, animation, frameSpeed} = pandaObj
    const pandaSprite = panda.childNodes[1].childNodes[1]
    pandaSprite.style.marginLeft = `-${animationFrames[animation][i] * cellSize}px`
    pandaSprite.style.marginTop = `-${cellSize * directions[sprites[pandaObj.direction]]}px`
    pandaObj.frame = i === animationFrames[animation].length - 1 ? 0 : i + 1
    pandaObj.frameTimer = setTimeout(()=> animatePanda(panda, pandaObj), frameSpeed)
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
  const randomP = max => Math.ceil(Math.random() * max)

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

    const a = frameSpeed * 6
    const b = 1000 * (Math.ceil(Math.random() * 4) + 1)
    const c = frameSpeed * 6

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
    
    const distance = 50
    if (dir !== 'up' && 'dir' !== 'down') x += (dir.includes('left')) ? -distance : distance
    if (dir !== 'left' && 'dir' !== 'right') y += (dir.includes('up')) ? -distance : distance

    if (x === pandaObj.prev[0] && y === pandaObj.prev[1]){
      console.log('trigger')
      stopPanda(panda, pandaObj)
    } 
    
    checkBoundaryAndUpdatePandaPos(x, y, panda, pandaObj)
    if (!pandaObj.stop) pandaObj.moveTimer = setTimeout(()=> {
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
      frameSpeed,
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
    const hitCorners = document.querySelectorAll('.hit_corner')
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
      }
    }
  }
  
  // Create panda and set up collision check
  new Array(20).fill('').map(()=>{
    return [randomP(body.clientWidth - 100), randomP(body.clientHeight - 100)]
  }).forEach( pos => {
    createPanda(pos[0], pos[1])
  })

  setInterval(collisionCheck, 50)
}

window.addEventListener('DOMContentLoaded', init)

