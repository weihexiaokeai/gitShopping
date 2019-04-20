require.config({
	paths:{
		"mui":"libs/mui.min"
	}
})
require(["mui"],function(mui){
	 let Uid=localStorage.getItem("Uid")
		function init()
		{
					 getone()
					 talk()
					 addinset()
		}
		 function getone()
		 {
			 mui.ajax('/api/getShoppingOne',{
			 	data:{
			 		id:Uid
			 	},
			 	dataType:'json',//服务器返回json格式数据
			 	type:'post',//HTTP请求类型
			 	timeout:10000,//超时时间设置为10秒；
			 	success:function(res){
			 		 console.log(res)
					 render(res)
			 	},
			 	error:function(xhr,type,errorThrown){
			 		
			 	}
			 });
		 }
			function render(res)
			{
				var str=""
					res.data.forEach(item => {
						str +=
							`<li class="mui-table-view-cell mui-media" data-id="${item._id}">
								<a href="javascript:;">
					  			<img class="mui-media-object mui-pull-right picture" src="${item.img}">
					  			<div class="mui-media-body">
					  				${item.name}
					  				<p class="mui-ellipsis">${item.comment}</p>
									 <p>${item.moeny}<p>
					  			</div>
					  		</a>
					  	</li>  	`
					})
					document.querySelector(".list").innerHTML=str;
			}
		 function talk()
		 {
			 mui.ajax('/api/getTalk',{
			 	data:{
			 		id:Uid
			 	},
			 	dataType:'json',//服务器返回json格式数据
			 	type:'post',//HTTP请求类型
			 	timeout:10000,//超时时间设置为10秒；
			 	success:function(res){
					var str=""
			 		res.data.forEach(item=>{
						str+=` <li class="mui-table-view-cell">
			  				${item.talk}
			  			
			  		</li>`
					})
					document.querySelector(".ulist").innerHTML=str;
			 	},
			 	error:function(xhr,type,errorThrown){
			 		
			 	}
			 });
		 }
		 
		 function addinset()
		 {
			   
			document.querySelector(".btn").addEventListener("tap",function(){
				
				var inpValue=document.querySelector(".inp").value
				
				mui.ajax('/api/getInsert',{
					data:{
						id:Uid,
						talk:inpValue
					},
					dataType:'json',//服务器返回json格式数据
					type:'post',//HTTP请求类型
					timeout:10000,//超时时间设置为10秒；
					success:function(res){
						 talk()
						
					},
					error:function(xhr,type,errorThrown){
						
					}
				});
			})
		 }
		init()
})