
function Book(title, author, alreadyRead) {
    this.title = title;
    this.author = author;
    this.alreadyRead = alreadyRead;
    this.ReadBook = function() {
      this.alreadyRead = true;
    };
  }
  

  var book1 = new Book("Public Enimies", "johnny depp", true);
  var book2 = new Book("Harry Potter Deathly Hallows", "J.K", false);
  var book3 = new Book("Dabbe The posession", "Kubra", true);
  var book4 = new Book("Once Upon a Time in mexico", "Harper Lee", false);
  

  var books = [book1, book2, book3, book4];
  

  var ul = document.createElement("ul");
  

  for (var i = 0; i < books.length; i++) {

    var li = document.createElement("li");
  

    li.textContent = books[i].title + " by " + books[i].author;

    if (books[i].alreadyRead) {
      li.textContent += " - You already read this book.";
    } else {
      li.textContent += " - You still need to read this book.";
    }
  

    ul.appendChild(li);
  }
  

  document.body.appendChild(ul);
  