const controller ={};

controller.create=(req,res)=>{
    res.render('book_create.ejs');
}

controller.list=(req,res)=>{

    req.getConnection((err,conn)=>{
        conn.query('select * from book',(err,books)=>{
            if(err){
                res.json(err);
            }
            console.log(books);
            res.render('books',{
                data: books
            });
        });
    })
};
controller.update=(req,res)=>{
    const id = req.params.ID; 
    console.log(req.params.ID);
    req.getConnection((err,conn)=>{
    conn.query('select * FROM book where id =?',[id],(err,book)=>{
        console.log(book);
        res.render('book_edit',{
            data: book[0]
        });
    })
    })
}

controller.edit = (req, res) => {
    const id = req.params.ID; 
    const newBook = req.body;
    req.getConnection((err, conn) => {
  
    conn.query('UPDATE book set ? where id = ?', [newBook, id], (err, rows) => {
        res.redirect('/');

    });
    });
  };

controller.add=(req,res)=>{
    const data = req.body;
    console.log(data);
req.getConnection((err,conn)=>{
    conn.query('INSERT INTO book set ?',data,(err,book)=>{
        res.redirect('/');

    });
});
};
controller.remove=(req,res)=>{ 
    const id = req.params.ID; 
    console.log(req.params.ID);
    req.getConnection((err,conn)=>{
    conn.query('DELETE FROM book where id =?',[id],(err,rows)=>{
        res.redirect('/');


    })
    })
};

module.exports=controller;