<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>POLY Data Center</title>
</head>
<script type="text/javascript" src="/resources/js/vue.js"></script>
<script type="text/javascript" src="/resources/js/axios.min.js"></script>
<script type="text/javascript" src="/resources/js/jquery-1.11.0.min.js"></script>
<body>
	<!-- POLY logo -->
	<img src="https://www.polyeventmall.com/images/logo.png" style="margin-left: 46.3vw;margin-top: 10vw;"/>

	<!-- Title -->
	<h1 style="text-align: center; margin-top: 3%; margin-bottom: 3%; font-size:50px;">POLY Data Center</h1>

	<!-- Login Form -->
	<div id="vueWrap" style="text-align: center;">
		<form>
			<input type="text" id="idBox" name="idBox" placeholder="KIS_ID" style="height: 30px;font-size: 18px;margin-bottom:5px;"/><br>
			<input type="password" id="passwordBox" name="passwordBox" placeholder="KIS_Password"style="height: 30px;font-size: 18px;"/>
		</form>
		<br><br>
		<button class="loginBtn" style="width: 10%;" @click="onClick()">LOGIN</button><br>
		<div style="text-align:center;color:red; font-weight:bold;">{{ message }}</div>
	</div>
</body>
<script th:inline="javascript">
	var loginVue = new Vue({
		el: '#vueWrap',
		data: {
			message: '',
			id: '',
			password: '',
			loginSuccessYn: 'N',
		},
		methods: {
			onmouseover : function(){
				this.message = 'tested';
			},
			onmouseout : function(){
				this.message = 'test';
			},
			onClick : function(){
				this.message = '';
				let form = new FormData();
				this.id = document.getElementById("idBox").value;
				this.password = document.getElementById("passwordBox").value;
				form.append('webId', this.id);
				form.append('webPass', this.password);

				axios.post('/loginAction', form).then((Res) => {
					if(Res.data.memberYn == 'Y'){
						location.href = '/epolyStats'
					} else {
						this.message = '아이디와 패스워드를 확인해주세요!';
						return false;
					}


				}).catch((error) => {
					console.log(error);
				})
			}
		}
	})

	$("#passwordBox").keydown(function(key) {
	    if (key.keyCode == 13) {
	        $(".loginBtn").click();
	    }
	});

</script>
</html>