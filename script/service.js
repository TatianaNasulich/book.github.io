angular.module("test").service("authorService",function () {
    var uid = 5;

    var genres = [
        {id:1,
            title:"Drama"
        },
        {id:2,
            title:"Poem"
        },
        {id:3,
            title:"Fantasy"
        },
        {id:4,
            title:"Novel"
        }

    ];



    var genreInfo = function (id) {
        for(var i in genres){
            if(genres[i].id == id){
                return genres[i].title
            }
        }

    };

    var authors = [
        {
            id:0,
            lastname:"Достоевский",
            name:"Федор",
            surname:"Михайлович",
            data:"18/Nov/1821",
            books:[{title:"Преступление и наказание",page:356,genre: genreInfo(1),id:1}]
        },
        {
            id:1,
            lastname:"Пушкин",
            name:"Александр",
            surname:"Сергеевич",
            data:"26/May/1799",
            books:[{title:"Руслан и Людмила",page:234,genre:genreInfo(2),id:2}]
        },
        {
            id:2,
            lastname:"Толкин",
            name:"Джон Рональд Руэл",
            surname:"",
            data:"03/Jan/1892",
            books:[{title:"Властилин Колец",page:1478,genre:genreInfo(3),id:3}]
        },{
            id:3,
            lastname:"Брэдбери",
            name:"Рэй",
            surname:"",
            data:"22/Aug/1920",
            books:[{title:"Вино из одуванчиков",page:204,genre:genreInfo(1),id:4}]
        },
        {
            id:4,
            lastname:"Лондон",
            name:"Джек",
            surname:"",
            data:"12/Jan/1876",
            books:[{title:"Мартин Иден",page:489,genre:genreInfo(4),id:5}]
        }
    ];


    var bookInfo = [];
    var mapBook = function (authors) {
        var temp = {};
        bookInfo = [];
        for( var el in authors){
            if("books" in authors[el]){
                for(var i = 0; i<authors[el]["books"].length; i++){
                    temp = authors[el]["books"][i];
                    temp.lastname = authors[el].lastname;
                    bookInfo.push(temp);
                }
            }
        }

    };
    mapBook(authors);



    this.list = function () {
        return authors
    };
    this.listBook = function () {
        return bookInfo
    };

    this.listGenres = function () {
        return genres

    };

    this.save = function (author) {
        if(author.id == null){
            author.id = uid++;
            author.books=[];
            authors.push(author);

        }
        else{
            for( var i in authors){
                if(authors[i].id == author.id){
                    authors[i]= author;
                }
            }
        }

    };

    this.get = function (id) {
        for( i in authors){
            if(authors[i].id == id){
                return authors[i]
            }
        }

    };

    this.delete = function (id) {
        for(var i in authors){
            if (authors[i].id == id){
                authors.splice(i,1)
            }
        }

    };
    this.getBook = function (id) {
        for(var j in authors){
            if("books" in authors[j]){
                for(var i=0;i<authors[j]["books"].length; i++)
                    if(authors[j]["books"][i].id == id){
                    return authors[j]["books"][i]
                    }
                }
            }
    }

    this.saveBook = function (book) {
        if (book.id == null) {
            book.id = uid++;
            authors[i].books.push(book);
            mapBook(authors)

        }

        else {
            mapBook(authors)
            for (j in authors) {
                if ("books" in authors[j]) {
                    for (i = 0; i < authors[j]["books"].length; i++) {

                        if (authors[j]["books"][i].id == book.id) {
                            authors[j]["books"][i] = book;
                            mapBook(authors);
                        }
                    }
                }
            }
        }
    }


    this.deleteBook = function (id) {
        for(j in authors){
            if("books" in authors[j]){
                for(var i=0;i<authors[j]["books"].length; i++)
                    if(authors[j]["books"][i].id == id){
                        authors[j]["books"].splice(i,1)
                      mapBook(authors);
                    }

            }
        }
    }


    this.saveGenre = function (genre) {
        if (genre.id == null){
            genre.id = uid++;
            genres.push(genre);
        }
        else{
            for (i in genres){
                if (genres[i].id == genre.id){
                    genres[i]=genre;
                }
            }
        }

    };

    this.getGenre = function (id) {
        for(i in genres){
            if(genres[i].id == id){
                return genres[i];
            }
        }

    }

    this.deleteGenre = function (id) {
        for(var i in genres){
            if (genres[i].id == id){
                genres.splice(i,1)
            }
        }

    };


});