<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta http-equiv="pragma" content="no-cache">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
<title>Insert title here</title>
</head>
<script type="text/javascript" src="/resources/js/jquery-1.11.0.min.js"></script>
<script type="text/javascript">
	$(function(){
		$('.loginBtn').click(function(){
			$.ajax({
				url: '/loginAction',
				type: 'POST',
				data: {
					partnerId: $('#idBox').val(),
					partnerPw: $('#passwordBox').val()
				},
				success: function() {
					alert('success');
				}, error: function() {
					alert('fail');
				}
			});
		})
	})
</script>
<body>
	<form>
		<input type="text" 
			   id="idBox" 
			   name="idBox" 
			   placeholder="KIS_ID" 
			   style=""/>
		<br>
		<input type="password" 
			   id="passwordBox" 
			   name="passwordBox" 
			   placeholder="KIS_Password"
			   style="height: 30px;font-size: 18px;"/>
	</form>
	<br><br>
	<button class="loginBtn" style="width: 10%;" @click="onClick()">LOGIN</button><br>
</body>
</html>