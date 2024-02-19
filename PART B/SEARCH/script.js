function performSearch() {
    var searchInput = document.getElementById("search-input").value.toLowerCase();
    var listItems = document.querySelectorAll("#result-list li");

    listItems.forEach(function (item) {
        var text = item.textContent.toLowerCase();
        var originalHTML = item.innerHTML;

        if (text.includes(searchInput)) {
            var highlightedHTML = originalHTML.replace(new RegExp('(' + searchInput + ')', 'gi'), '<span class="highlight">$1</span>');
            item.innerHTML = highlightedHTML;
        } else {
            item.innerHTML = originalHTML;
        }
    });
}

document.getElementById("search-button").addEventListener("click", performSearch);
