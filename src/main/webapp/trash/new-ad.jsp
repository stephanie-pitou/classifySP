<%@ page language="java" contentType="application/json" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>

	<header>
	<h1>Classify</h1>
	</header>

	<a href="#" class="btn btn-primary btn-lg">Back</a>
	<a href="#myAds" class="btn btn-danger btn-lg">My Ads</a>

	<form method="post" action="api/ad/create">

		<table>
			<td><label>id</label></td>
			<td><input type="text" name="id" value="3" /></td>
			<tr>
				<td><label>title</label></td>
				<td><input type="text" name="title" value="title" /></td>
			</tr>

			<tr>
				<td><label>content</label></td>
				<td><input type="text" name="content" value="content" /></td>
			</tr>

			<tr>
				<td><label>price</label></td>
				<td><input type="text" name="price" value="12" /></td>
			</tr>

			<tr>
				<td colspan="2"><input type="submit" value="Valider" /></td>
			</tr>
		</table>
	</form>
</body>
</html>