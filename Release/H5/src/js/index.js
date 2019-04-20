require.config({
	paths: {
		"mui": "libs/mui.min"

	}
})
require(["mui"], function(mui) {
	function init() {
		getshop()
	}

	function getshop() {
		mui.ajax('/api/getShopping', {
			data: {

			},
			dataType: 'json', //服务器返回json格式数据
			type: 'post', //HTTP请求类型
			timeout: 10000, //超时时间设置为10秒；
			success: function(res) {
				render(res)
			},
			error: function(xhr, type, errorThrown) {

			}
		});
	}
	function getshopone()
	{
		mui('.list').on('tap','li',function(){
		     console.log(this)
			   let Uid=this.getAttribute("data-id")
			     localStorage.setItem("Uid",Uid)
			  location.href="../html/detail.html"
		}) 
	}
	function render(res) {
		var str = ""
		res.data.forEach(item => {
			str +=
				`<li class="mui-table-view-cell mui-media" data-id="${item._id}">
					<a href="javascript:;">
	  	  			<img class="mui-media-object mui-pull-right picture" src="${item.img}">
	  	  			<div class="mui-media-body">
	  	  				${item.name}
	  	  				<p class="mui-ellipsis">${item.comment}</p>
	  	  			</div>
	  	  		</a>
	  	  	</li>  	`
		})
		document.querySelector(".list").innerHTML=str;
		getshopone()
	}
	init()
})
