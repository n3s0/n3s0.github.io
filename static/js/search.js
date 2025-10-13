const input = document.getElementById("search-input");
const results = document.getElementById("search-results");
const request = new Request("/index.json");

fetch(request)
  .then(response => response.json())
  .then(data => {
    let pages = data;

    input.addEventListener("input",function(){
      let filteredPages = pages;
      results.innerHTML = "";

      if (input.value != ""){
        // Normalize and replace diacritics so searching for 'ramayana' will return matches for 'Rāmāyaṇa' etc
        let searchterms = input.value.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().split(" ");

        // Apply a filter to the array of pages for each search term
        searchterms.forEach(function(term) {
          filteredPages = filteredPages.filter(function(page) {
            // The description is the full object, includes title, tags, categories, and summary text
            // You could make this more specific by doing something like:
            // let description = page.title;
            let description = JSON.stringify(page);
            return description.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().indexOf(term) !== -1;
          });
        }); // end of filter for loop

        // For each of the pages in the final filtered list, insert into the results list
        filteredPages.forEach(function(page) {

          results.insertAdjacentHTML("beforeend","<li class='search-result-item'><h2><a href='" + page.permalink + "'>" + page.title + "</a></h2><p>" + page.description + "</p><p style='margin-top: 5px'>Tags: <strong>" + page.tags + "</strong></p></li>");
        });
      };
    });
  });
