function business_name_generator(){
    let adjectives = "crazy amazing fire".split(" ");
    let shop_name = "engine foods garments".split(" ");
    let another_word = "bros limited hub".split(" ");
    let random_adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    let random_shop_name = shop_name[Math.floor(Math.random() * shop_name.length)];
    let random_another_word = another_word[Math.floor(Math.random() * another_word.length)];
    return random_adjective + " " + random_shop_name + " " + random_another_word;

}
console.log(business_name_generator());

