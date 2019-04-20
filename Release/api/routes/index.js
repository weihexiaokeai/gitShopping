var express = require('express');
var router = express.Router();
var  mongo=require("mongodb-curd")
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
 var db="shopping"
 var shop_col="shop"
 var talk_col="talk"
 //查看商品所有信息
 router.post("/api/getShopping",function(req,res,next){
   mongo.find(db,shop_col,{},function(result){
     if(!result)
     {
       res.send({
           code:0,
           msg:'error'
       })
     }
     else{
       res.send({
           code:1,
            msg:"success",
           data:result
       })
     }
   })
 })
//查看商品详细信息
router.post("/api/getShoppingOne",function(req,res,next){
  var id=req.body.id;
  mongo.find(db,shop_col,{"_id":id},function(result){
    if(!result)
    {
      res.send({
          code:0,
          msg:'error'
      })
    }
    else{
      res.send({
          code:1,
           msg:"success",
          data:result
      })
    }
  })
})
//查看评论区的内容
router.post("/api/getTalk",function(req,res,next){
  var id=req.body.id;
     console.log(id)
  mongo.find(db,talk_col,{"id":id},function(result){
    if(!result)
    {
      res.send({
          code:0,
          msg:'error'
          
      })
    }
    else{
      res.send({
          code:1,
           msg:"success",
          data:result
      })
    }
  })
})
//添加评论区的内容
router.post("/api/getInsert",function(req,res,next){
      var obj=req.body
  mongo.insert(db,talk_col,obj,function(result){
    if(!result)
    {
      res.send({
          code:0,
          msg:'添加失败'
          
      })
    }
    else{
      res.send({
          code:1,
           msg:"添加成功",
          data:result
      })
    }
  })
})
module.exports = router;
