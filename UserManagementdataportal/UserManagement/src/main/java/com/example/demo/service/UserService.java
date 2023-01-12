package com.example.demo.service;

import java.util.List;

import com.example.demo.model.User;

public interface UserService 
{
	public User addUser(User user);
	
	public List<User> getAllUsers();
	
	public boolean validateUserLogin(String username, String password);

}
