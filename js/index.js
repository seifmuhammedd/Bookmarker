var siteName = document.getElementById("siteName") ;
var siteURL = document.getElementById("siteURL") ;
var bookmarksList = [] ;
if (localStorage.getItem("bookmarks") != null) {
    bookmarksList = JSON.parse(localStorage.getItem("bookmarks")) ;
    displayBookmarks() ;
}
function addBookmark () {
    var bookmark = {
        name : siteName.value ,
        url : siteURL.value
    }
    bookmarksList.push(bookmark) ;
    localStorage.setItem("bookmarks" , JSON.stringify(bookmarksList)) ;
    displayBookmarks() ;
    clearInputs() ;
}
function displayBookmarks () {
    var holder = `` ;
    for ( i = 0 ; i < bookmarksList.length ; i++) {
        holder += `
        <tr>
                    <td>${i}</td>
                    <td>${bookmarksList[i].name}</td>
                    <td><a href="${bookmarksList[i].url}" target="_blank" class="btn btn-1 text-white fw-semibold"><i class="fa-solid fa-eye"></i> Visit</a></td>
                    <td><a class="btn btn-2 text-white fw-semibold" onclick="deleteBookmark(${i})"><i class="fa-solid fa-trash-can"></i> Delete</a></td>
                </tr>
        `
    }
    document.getElementById("insertData").innerHTML = holder ;
}
function clearInputs () {
    siteName.value = null ;
    siteURL.value = null ;
}
function deleteBookmark (index) {
    bookmarksList.splice(index , 1) ;
    localStorage.setItem("bookmarks" , JSON.stringify(bookmarksList)) ;
    displayBookmarks() ;
}