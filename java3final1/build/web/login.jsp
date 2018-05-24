<%-- 
    Document   : login
    Created on : May 23, 2018, 7:27:27 PM
    Author     : matthew
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <%@include file="/header.jsp" %>
        <h1>please login</h1>
        <form action="/java3final/FinalServlet" method="post">
            username:<br>
            <input type="text" name="username" value="">
            <br>
            password:<br>
            <input type="text" name="password" value="">
            <br><br>
            <input type="hidden" name="logout" value="login">
            <input type="submit" value="Submit">
        </form>
    </body>
</html>
