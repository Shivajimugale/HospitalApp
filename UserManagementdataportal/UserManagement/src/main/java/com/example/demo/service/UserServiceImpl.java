package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService
{

	@Autowired
	private UserRepository userRepo;
	
	@Override
	public User addUser(User user) {
		if(user!=null)
		{
			return userRepo.saveAndFlush(user);
			
		}
		else
			return null;
	}

	@Override
	public List<User> getAllUsers() {
		List<User> userList = userRepo.findAll();
		if(userList!=null & userList.size()>0)
		{
			return userList;
		}
		else
			return null;
	}

	@Override
	public boolean validateUserLogin(String username, String password) {
		User user1 = userRepo.validateUser(username, password);
		
		if(user1!=null)
		{
			return true;
		}
		
		else
			return false;
	}
	

}
