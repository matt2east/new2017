<%-- 
    Document   : loggedin
    Created on : May 23, 2018, 7:16:10 PM
    Author     : matthew
--%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page import="java.util.List"%>
<%@page import="java.util.Arrays"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <%@include file="/header.jsp" %>
        <div>user: ${sessionScope.sessionusername}</div>
        <div>password: ${sessionScope.sessionpassword}</div>
        <div>first name: ${sessionScope.sessionfirstname}</div>
        <div>last name: ${sessionScope.sessionlastname}</div>
        <div>email: ${sessionScope.sessionemail}</div>
        <div>phone number: ${sessionScope.sessionphonenumber}</div><br>
     
            <jsp:scriptlet>
            int[] numbers = new int[]{1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,};
            pageContext.setAttribute("numbers", numbers);

        </jsp:scriptlet>
         <c:forEach var="number" items="${pageScope.numbers}" step="3"> 
            <c:out value="${number*number}"/> 
        </c:forEach>
   
        
        <br>
        <form action="/java3final/FinalServlet" method="post">
            <input type="hidden" name="logout" value="logout">

            <input type="submit" value="Log out">
        </form>
    </body>
</html>
