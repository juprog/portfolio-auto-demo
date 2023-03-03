
const main = $(".main");

$.ajax({
    url : "https://api.github.com/users/juprog/repos",
    method: "GET"

}).then(results => {
    //console.log(results)
    //console.log(results[0].name)
    //console.log(results[0].stargazers_count)


    for(let i=0;i<results.length;i++)
    {
        if(results[i].stargazers_count != 0) {
            let article = "<article><header><h2> Name of Repo : " + 
            results[i].name + "</h2></header> <p><b>Description: </b> " 
            + results[i].description + " </p><p> "
             + results[i].html_url + " </p><p> "
             //+ results[i].homepage
             + "stars : " + results[i].stargazers_count.toString();
             + "</p></article>"
    
             main.append(article);
        }   
    }
})