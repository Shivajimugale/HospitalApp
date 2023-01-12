package com.example.demo.controller;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.User;
import com.example.demo.service.UserServiceImpl;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@RestController
@RequestMapping("auth/user/v1")
public class AuthenticationController 
{
	private Map<String,String> mObj = new HashMap<String,String>();
	
	@Autowired
	private UserServiceImpl userServiceImpl;
	
	
	@PostMapping("/registerUser")
	public ResponseEntity<?> addUser(@RequestBody User user)
	{
		if(userServiceImpl.addUser(user)!=null)
		{
			return new ResponseEntity<User>(user, HttpStatus.CREATED);
		}
		return new ResponseEntity<String>("user not added", HttpStatus.CREATED);
	}

	
	@PostMapping("/loginUser")
 	public ResponseEntity<?> loginUser(@RequestBody User user)
 	{
 		try
 		{
 			String jwtToken =generateToken(user.getUsername(),user.getPassword());
 			mObj.put("message", "User has successfully logged in!");
 			mObj.put("token", jwtToken);
 		}
 		catch(Exception e)
 		{
 			mObj.put("message", "User unsuccessfully logged in");
 			mObj.put("token", null);
 		}
 		return new ResponseEntity<>(mObj, HttpStatus.CREATED);
		}
 	
	public String generateToken(String username, String password) throws ServletException, Exception 
	{
		String jwtToken = "";

		if (username == null || password == null) 
		{
			throw new ServletException("Please provide valid username and password");
		}

		boolean flag = userServiceImpl.validateUserLogin(username, password);

		if (!flag)
		{
			throw new ServletException("Invalid credentials");
		} 
		else
		{
			jwtToken = Jwts.builder().setSubject(username).setIssuedAt(new Date())
					.setExpiration(new Date(System.currentTimeMillis()+3000000))
					.signWith(SignatureAlgorithm.HS256, "my secret sign").compact();
		}

		return jwtToken;
	}
}










