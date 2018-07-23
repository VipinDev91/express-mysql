var mysql=require("mysql");
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test_node"
});
con.connect(function(err){
  if (err) throw err;
	   con.query("create table test(id int not null auto_increment primary key,name varchar(55)default null)",function(error,res){
        if(error) throw error;
		console.log('table create successfully !!');
   });
});