let email = "rekeshkumarjavvadi@gmail.com"

let f_4_ltrs = email.slice(0,4)

let star = "*"
let stars = star.padStart(5, "*")

let f_4_ltrs_and_stars = f_4_ltrs+stars

let length_of_word = f_4_ltrs_and_stars.length

let star_after = email.slice(length_of_word)

let result = f_4_ltrs_and_stars.concat(star_after)

console.log(result)