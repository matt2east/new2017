/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 *
 * @author matthew
 */
public class FinalServlet extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet FinalServlet</title>");
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet FinalServlet at " + request.getContextPath() + "</h1>");
            out.println("</body>");
            out.println("</html>");
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

//        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        HttpSession session = request.getSession();
        String defaultUser = "user";
        String defaultPassword = "password";
        String defaultLogout = "logout";
        String username = request.getParameter("username");
        String firstname = request.getParameter("firstname");
        String lastname = request.getParameter("lastname");
        String password = request.getParameter("password");
        String email = request.getParameter("email");
        String phonenumber = request.getParameter("phonenumber");
        String logout = request.getParameter("logout");

        if (logout.equals(defaultLogout)) {
            request.getSession().removeAttribute("sessionusername");
            request.getSession().removeAttribute("sessionpassword");
            getServletContext().getRequestDispatcher("/login.jsp").forward(request, response);
        } else if (password.equals(defaultPassword) && username.equals(defaultUser)) {
            userbean user = new userbean(username, password, firstname, lastname, email, phonenumber);
            user.setPassword(password);
            user.setUsername(username);
            user.setFirstname(firstname);
            user.setLastname(lastname);
            user.setPhonenumber(phonenumber);
            user.setEmail(email);
            request.getSession().setAttribute("sessionusername", user.getUsername());
            request.getSession().setAttribute("sessionpassword", user.getPassword());
            request.getSession().setAttribute("sessionfirstname", user.getFirstname());
            request.getSession().setAttribute("sessionlastname", user.getLastname());
            request.getSession().setAttribute("sessionemail", user.getEmail());
            request.getSession().setAttribute("sessionphonenumber", user.getPhonenumber());
            int number = 50;
            int[] numbers = new int[number];
            for (int i = 0; i < number; ++i) {
                numbers[i] = i + 1;
            }

            getServletContext().getRequestDispatcher("/loggedin.jsp").forward(request, response);
        } else {
            getServletContext().getRequestDispatcher("/login.jsp").forward(request, response);
        }

//        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
